import { categories } from './categories';
import type { Post } from '../../types/post';

// Dynamic imports for all posts
const postModules = import.meta.glob<Post>('./posts/*.ts', { 
  import: 'default',
  eager: true 
});

// Extract posts from modules and sort by date (newest first)
export const allPosts: Post[] = Object.values(postModules)
  .filter((post): post is Post => post !== null && typeof post === 'object')
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

// Exporta las categorías
export { categories };

// Funciones de utilidad
export function getPostBySlug(slug: string) {
  return allPosts.find((post) => post.slug === slug);
}

export function getPostsByCategory(categoryId: string) {
  return allPosts.filter((post) => post.category === categoryId);
}

export function getLatestPosts(limit = 3) {
  return allPosts.slice(0, limit);
}
