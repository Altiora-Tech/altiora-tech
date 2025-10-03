import React from 'react';
import { blogPosts } from '../data/blogData';
import { ArrowLeft } from 'lucide-react';

const ArticlePage: React.FC = () => {
    const params = new URLSearchParams(window.location.hash.split('?')[1] || '');
    const slug = params.get('slug');
    const post = blogPosts.find(p => p.slug === slug);

    if (!post) {
        return (
            <div className="py-40 text-center container mx-auto px-6">
                <h1 className="text-4xl font-bold text-alt-purple dark:text-violet-200">Artículo no encontrado</h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">
                    Lo sentimos, no pudimos encontrar la publicación que estás buscando.
                </p>
                <a href="#/blog" className="mt-8 inline-flex items-center font-bold text-alt-purple dark:text-alt-gold hover:text-alt-purple-light dark:hover:text-violet-300 transition-colors">
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    Volver al Blog
                </a>
            </div>
        );
    }

    return (
        <article className="pt-24 bg-white dark:bg-gray-900">
            <header className="container mx-auto px-6 text-center pt-12 pb-16 border-b dark:border-gray-700">
                <p className="text-alt-gold font-semibold mb-4">{post.category}</p>
                <h1 className="text-4xl md:text-6xl font-serif font-extrabold text-alt-purple dark:text-violet-200 mb-6 max-w-4xl mx-auto">
                    {post.title}
                </h1>
                <div className="flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
                    <img 
                        src={post.authorImage} 
                        alt={post.author} 
                        className="w-12 h-12 rounded-full mr-4" 
                        priority={true}
                        width={100}
                        height={100}
                        aria-label="Author"
                        name="Author"
                        objectFit="contain"  
                    />
                    <div>
                        <p className="font-bold text-gray-800 dark:text-gray-200">Por {post.author}</p>
                        <p>{post.date}</p>
                    </div>
                </div>
            </header>
            
            <div className="container mx-auto px-6 py-12">
                <div className="max-w-4xl mx-auto">
                     <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-auto object-cover aspect-video rounded-xl shadow-lg mb-12" 
                        priority={true}
                        width={100}
                        height={100}
                        aria-label="Post Image"
                        name="Post Image"
                        objectFit="contain"  
                     />

                    <div 
                        className="prose lg:prose-xl dark:prose-invert max-w-full text-gray-700 dark:text-gray-300 prose-p:leading-relaxed prose-headings:mt-12 prose-headings:mb-6 prose-blockquote:my-8 prose-ul:my-6"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    <div className="text-center mt-16 pt-8 border-t dark:border-gray-700">
                        <a href="#/blog" className="inline-flex items-center font-bold text-alt-purple dark:text-alt-gold hover:text-alt-purple-light dark:hover:text-violet-300 transition-colors">
                            <ArrowLeft className="mr-2 h-5 w-5" />
                            Volver a todos los artículos
                        </a>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default ArticlePage;