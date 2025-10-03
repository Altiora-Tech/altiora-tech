
import React from 'react';
import { blogPosts, Post } from '../data/blogData';
import { ArrowRight } from 'lucide-react';
import Newsletter from '../components/Newsletter';

const FeaturedPost: React.FC<{ post: Post }> = ({ post }) => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-20 mt-8">
        <div className="overflow-hidden rounded-xl shadow-lg">
            <a href={`/article?slug=${post.slug}`}>
                <img    
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-auto object-cover aspect-video transform hover:scale-105 transition-transform duration-500" 
                    priority={true}
                    width={100}
                    height={100}
                    aria-label="Post Image"
                    name="Post Image"
                    objectFit="contain"  
                />
            </a>
        </div>
        <div>
            <p className="text-alt-gold font-semibold mb-2">{post.category}</p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-alt-purple dark:text-violet-200 mb-4">
                <a href={`/article?slug=${post.slug}`} className="hover:text-alt-purple-light dark:hover:text-violet-300 transition-colors">{post.title}</a>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">{post.excerpt}</p>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-6">
                <img 
                    src={post.authorImage} 
                    alt={post.author} 
                    className="w-10 h-10 rounded-full mr-3" 
                    priority={true}
                    width={100}
                    height={100}
                    aria-label="Author Image"
                    name="Author Image"
                    objectFit="contain"  
                />
                <span>Por <strong>{post.author}</strong></span>
                <span className="mx-2">|</span>
                <span>{post.date}</span>
            </div>
             <a href={`/article?slug=${post.slug}`} className="inline-flex items-center font-bold text-alt-purple dark:text-alt-gold hover:text-alt-purple-light dark:hover:text-violet-300 transition-colors">
                Leer más <ArrowRight className="ml-2 h-5 w-5" />
            </a>
        </div>
    </div>
);

const PostCard: React.FC<{ post: Post }> = ({ post }) => (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col">
        <a href={`/article?slug=${post.slug}`} className="block overflow-hidden">
            <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-56 object-cover transform hover:scale-105 transition-transform duration-500" 
                priority={true}
                width={100}
                height={100}
                aria-label="Post Image"
                name="Post Image"
                objectFit="contain"  
            />
        </a>
        <div className="p-6 flex flex-col flex-grow">
            <p className="text-alt-gold font-semibold text-sm mb-2">{post.category}</p>
            <h3 className="text-xl font-serif font-bold text-alt-purple dark:text-violet-200 mb-3 flex-grow">
                 <a href={`/article?slug=${post.slug}`} className="hover:text-alt-purple-light dark:hover:text-violet-300 transition-colors">{post.title}</a>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
            <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mt-auto pt-4 border-t dark:border-gray-700">
                <img 
                    src={post.authorImage} 
                    alt={post.author} 
                    className="w-8 h-8 rounded-full mr-2" 
                    priority={true}
                    width={100}
                    height={100}
                    aria-label="Author Image"
                    name="Author Image"
                    objectFit="contain"  
                />
                <div>
                    <p className="font-semibold text-gray-800 dark:text-gray-200">{post.author}</p>
                    <p>{post.date}</p>
                </div>
            </div>
        </div>
    </div>
);

const BlogPage: React.FC = () => {
    const [featuredPost, ...otherPosts] = blogPosts;

    return (
      <>
        <section className="bg-violet-50 dark:bg-gray-800 pt-28 pb-16">
            <div className="container mx-auto px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-alt-purple dark:text-violet-300 mb-4">Altiora Insights</h1>
                <p className="max-w-3xl mx-auto text-xl text-gray-700 dark:text-gray-300">
                    Artículos, guías y análisis sobre tecnología, desarrollo de software y estrategias de negocio para impulsar tu crecimiento.
                </p>
            </div>
        </section>

        <section id="blog-page" className="py-10 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-6">
                {featuredPost && <FeaturedPost post={featuredPost} />}
                
                <div className="border-t border-gray-200 dark:border-gray-700 pt-16">
                     <h2 className="text-3xl font-serif font-bold text-center text-alt-purple dark:text-violet-200 mb-12">Más Artículos</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {otherPosts.map(post => (
                            <PostCard key={post.slug} post={post} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
        <Newsletter />
      </>
    );
};

export default BlogPage;