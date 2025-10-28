import { Post } from '../types/post';

interface PostModule {
  post: Post;
}

/**
 * Fetches a blog post by its slug
 */
export async function getPostBySlug(slug: string): Promise<Post | null> {
  console.log(`Buscando post con slug: ${slug}`);
  try {
    // Buscar archivos .ts directamente en la carpeta posts
    const postModules = import.meta.glob<Post>('../content/blog/posts/*.ts', {
      import: 'default',
      eager: true
    });
    
    console.log(`Archivos de posts encontrados:`, Object.keys(postModules));
    
    // Primero intentar coincidencia exacta
    for (const path in postModules) {
      const module = postModules[path];
      const postSlug = module.slug || path.split('/').pop()?.replace('.ts', '');
      
      console.log(`Comparando: '${postSlug}' con '${slug}'`);
      
      if (postSlug === slug) {
        console.log(`Coincidencia exacta encontrada en: ${path}`);
        return {
          ...module,
          slug: module.slug || slug
        };
      }
    }
    
    // Si no hay coincidencia exacta, intentar búsqueda sin distinción de mayúsculas
    console.log('No se encontró coincidencia exacta, buscando sin distinción de mayúsculas...');
    const lowerSlug = slug.toLowerCase();
    
    for (const path in postModules) {
      const module = postModules[path];
      const postSlug = (module.slug || path.split('/').pop()?.replace('.ts', '') || '').toLowerCase();
      
      console.log(`Comparando (sin distinción): '${postSlug}' con '${lowerSlug}'`);
      
      if (postSlug === lowerSlug) {
        console.log(`Coincidencia sin distinción encontrada en: ${path}`);
        return {
          ...module,
          slug: module.slug || slug
        };
      }
    }
    
    return null;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

/**
 * Gets related posts based on category
 */
export function getRelatedPosts(posts: (Post | any)[], currentPost: Post, limit: number = 2): Post[] {
  if (!currentPost || !posts || !Array.isArray(posts)) {
    return [];
  }

  return posts
    .filter((post): post is Post => {
      return (
        post && 
        typeof post === 'object' &&
        'slug' in post &&
        'category' in post &&
        post.slug !== currentPost.slug &&
        post.category === currentPost.category
      );
    })
    .slice(0, limit);
}

/**
 * Formats a date string to a more readable format
 */
export function formatDate(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  return new Date(dateString).toLocaleDateString('es-ES', options);
}
