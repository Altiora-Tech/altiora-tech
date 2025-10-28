import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Tag, Share2, MessageCircle } from "lucide-react";
import { categories } from "../content/blog/categories";
import type { Post } from "../types/post";
import { getPostBySlug, getRelatedPosts, formatDate } from "../utils/blogUtils";
import { allPosts } from "../content/blog";
import { orliDun } from "../content/authors/orli-dun";

const ArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        if (!slug) {
          throw new Error('No se proporcionó un slug para el artículo');
        }

        console.log('Buscando artículo con slug:', slug);
        const fetchedPost = await getPostBySlug(slug);
        
        if (!fetchedPost) {
          console.error('No se encontró el artículo con slug:', slug);
          setError('Artículo no encontrado');
          setLoading(false);
          return;
        }
        
        console.log('Artículo encontrado:', fetchedPost.title);
        setPost(fetchedPost);
        
        // Ensure all required fields are present
        const completePost: Post = {
          ...fetchedPost,
          authorImage: fetchedPost.authorImage || '/default-avatar.png',
          image: fetchedPost.image || '/default-blog-image.jpg',
          tags: fetchedPost.tags || [],
          readingTime: fetchedPost.readingTime || '5 min',
          author: fetchedPost.author || 'Autor Desconocido',
          excerpt: fetchedPost.excerpt || '',
          content: fetchedPost.content || '',
          date: fetchedPost.date || new Date().toISOString(),
          category: fetchedPost.category || 'uncategorized'
        };
        
        setPost(completePost);
        
        // Get related posts
        const related = getRelatedPosts(allPosts, completePost, 2);
        setRelatedPosts(related);
        
      } catch (err) {
        console.error('Error al cargar el artículo:', err);
        setError('Error al cargar el artículo. Por favor, inténtalo de nuevo más tarde.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-alt-purple"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Artículo no encontrado</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">{error}</p>
        <Link 
          to="/blog" 
          className="px-6 py-3 bg-alt-purple text-white rounded-lg hover:bg-alt-purple/90 dark:text-violet-200 transition-colors"
        >
          Volver al blog
        </Link>
      </div>
    );
  }

  if (!post) {
    return null;
  }

  const CategoryIcon = categories[post.category as keyof typeof categories]?.icon;

  return (
    <article className="pt-24 bg-white dark:bg-gray-900">
      {/* HEADER */}
      <div className="container mx-auto px-6 max-w-6xl">
        <Link
          to="/blog"
          className="inline-flex items-center text-alt-purple hover:text-alt-purple/80 mb-8 transition-colors dark:text-violet-200"
        >
          <ArrowLeft className="h-5 w-5 mr-2 dark:text-violet-200" />
          Volver al blog
        </Link>

        <header className="text-center pt-8 pb-12">
          {CategoryIcon && (
            <p className="text-alt-gold font-semibold mb-4 flex items-center justify-center">
              <CategoryIcon className="h-5 w-5 mr-2" />
              {categories[post.category as keyof typeof categories]?.name || post.category}
            </p>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-extrabold text-alt-purple dark:text-violet-200 mb-6 max-w-4xl mx-auto">
            {post.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
            <img
              src={post.authorImage}
              alt={post.author}
              id="author-image"
              aria-label="Author Image"
              name="Author Image"
              className="w-12 h-12 rounded-full mr-4 object-cover"
              loading="lazy"
            />
            <div>
              <p className="font-bold text-gray-800 dark:text-gray-200">
                Por {post.author}
              </p>
              <p>{formatDate(post.date)} · {post.readingTime} de lectura</p>
            </div>
          </div>
        </header>

        {/* FEATURED IMAGE */}
        {post.image && (
          <div className="mb-12 rounded-xl overflow-hidden shadow-xl">
            <img
              src={post.image}
              alt={post.title}
              id="featured-image"
              aria-label="Featured Image"
              name="Featured Image"
              className="w-full h-auto object-cover aspect-video"
              loading="lazy"
            />
          </div>
        )}

        {/* CONTENT */}
        <div className="container mx-auto px-6 max-w-4xl pb-16">
          <div 
            className="prose lg:prose-xl dark:prose-invert max-w-full"
            style={{
              lineHeight: '1.8',
              fontSize: '1.125rem',
            }}
          >
            <div 
              className="article-content"
              dangerouslySetInnerHTML={{ 
                __html: post.content 
                  .replace(/<h3/g, '<h3 class="text-2xl font-bold mt-12 mb-6 text-alt-purple dark:text-violet-300"')
                  .replace(/<p/g, '<p class="mb-6 leading-relaxed text-gray-700 dark:text-gray-300"')
                  .replace(/<ul/g, '<ul class="list-disc pl-6 mb-6 space-y-2 text-gray-700 dark:text-gray-300"')
                  .replace(/<blockquote/g, '<blockquote class="border-l-4 border-alt-gold pl-6 italic my-8 text-gray-600 dark:text-gray-300"')
              }} 
            />
          </div>

          {/* TAGS */}
          {post.tags?.length > 0 && (
            <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4 flex items-center">
                <Tag className="h-5 w-5 mr-2 text-alt-gold" />
                Etiquetas
              </h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* SHARE BUTTONS */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4 flex items-center">
              <Share2 className="h-5 w-5 mr-2 text-alt-gold" />
              Compartir
            </h3>
            <div className="flex space-x-4">
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: post.title,
                      text: post.excerpt,
                      url: window.location.href,
                    });
                  } else {
                    // Fallback for browsers that don't support Web Share API
                    navigator.clipboard.writeText(window.location.href);
                    alert('¡Enlace copiado al portapapeles!');
                  }
                }}
                className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 transition-colors"
                aria-label="Compartir artículo"
                type="button"
                name="Compartir artículo"
                id="Compartir artículo"
              >
                <Share2 className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* AUTHOR SECTION */}
          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Sobre el autor
            </h3>
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              <img
                src={orliDun.avatar}
                alt={orliDun.name}
                id="author-avatar"
                aria-label="Author Avatar"
                name="Author Avatar"
                className="w-32 h-32 rounded-full object-cover border-4 border-alt-gold"
              />
              <div className="text-center md:text-left">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                  {orliDun.name}
                </h4>
                <p className="text-alt-gold font-medium mb-2">
                  {orliDun.role}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {orliDun.bio}
                </p>
                <div className="flex justify-center md:justify-start space-x-4">
                  {orliDun.social.twitter && (
                    <a 
                      href={orliDun.social.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-alt-purple dark:hover:text-violet-300 transition-colors"
                      aria-label="Twitter"
                      type="button"
                      name="Twitter"
                      id="Twitter"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  )}
                  {orliDun.social.linkedin && (
                    <a 
                      href={orliDun.social.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-alt-purple dark:hover:text-violet-300 transition-colors"
                      aria-label="LinkedIn"
                      type="button"
                      name="LinkedIn"
                      id="LinkedIn"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  )}
                  {orliDun.social.github && (
                    <a 
                      href={orliDun.social.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-alt-purple dark:hover:text-violet-300 transition-colors"
                      aria-label="GitHub"
                      type="button"
                      name="GitHub"
                      id="GitHub"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* RELATED POSTS */}
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                Artículos relacionados
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    to={`/blog/${relatedPost.slug}`}
                    className="group block"
                  >
                    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full">
                      {relatedPost.image && (
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          id="related-post-image"
                          aria-label="Related Post Image"
                          name="Related Post Image"
                          className="w-full h-48 object-cover"
                          loading="lazy"
                        />
                      )}
                      <div className="p-6">
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-alt-purple dark:group-hover:text-violet-300 transition-colors mb-2 line-clamp-2">
                          {relatedPost.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <span>{formatDate(relatedPost.date)}</span>
                          <span className="mx-2">•</span>
                          <span>{relatedPost.readingTime}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default ArticlePage;
