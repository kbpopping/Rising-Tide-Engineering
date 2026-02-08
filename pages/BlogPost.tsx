
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { blogData } from '../data/blogData';

const BlogPost: React.FC = () => {
  const { blogId } = useParams<{ blogId: string }>();
  const post = blogData.find(p => p.id === blogId);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="bg-slate-50 dark:bg-background-dark min-h-screen pb-20 transition-colors duration-300">
      {/* Header Image */}
      <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="absolute inset-0 w-full h-full object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 lg:p-20">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="inline-flex items-center text-white/80 hover:text-safety mb-6 transition-colors group">
              <span className="material-symbols-outlined mr-2 group-hover:-translate-x-1 transition-transform">arrow_back</span> Back to Blog
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-safety text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-widest shadow-lg">{post.category}</span>
              <span className="text-white/90 text-sm font-medium border-l border-white/30 pl-3">{post.date}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 leading-tight drop-shadow-lg">{post.title}</h1>
          </div>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-6 lg:px-8 -mt-10 relative z-10">
        <div className="bg-white dark:bg-slate-800 rounded-xl p-8 md:p-12 shadow-2xl border border-slate-100 dark:border-slate-700">
          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:text-slate-900 dark:prose-headings:text-white prose-p:text-slate-600 dark:prose-p:text-slate-300 prose-a:text-safety hover:prose-a:text-primary">
            {/* Using dangerouslySetInnerHTML as the data contains HTML structure */}
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-700 flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="flex gap-4">
              <span className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Share this insight:</span>
              <div className="flex gap-3">
                <button className="text-slate-400 hover:text-[#0077b5] transition-colors"><span className="material-symbols-outlined">share</span></button>
                <button className="text-slate-400 hover:text-safety transition-colors"><span className="material-symbols-outlined">link</span></button>
              </div>
            </div>
            <Link to="/blog" className="px-6 py-3 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 font-bold rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
              Read More Articles
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogPost;
