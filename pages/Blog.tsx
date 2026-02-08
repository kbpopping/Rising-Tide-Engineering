
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogData } from '../data/blogData';

const Blog: React.FC = () => {
  const [filter, setFilter] = useState("All Posts");
  const [visibleCount, setVisibleCount] = useState(4);

  const categories = ["All Posts", "Structural", "Marine", "Civil", "Industrial"];

  const filteredPosts = blogData.filter(post => 
    filter === "All Posts" ? true : post.category === filter
  );

  const visiblePosts = filteredPosts.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 4);
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-10 lg:px-40 py-8 bg-background-light dark:bg-background-dark min-h-screen transition-colors duration-300">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 mb-6">
        <Link to="/" className="text-[#8c725f] dark:text-[#a1a1aa] text-sm font-medium hover:text-safety transition-colors">Home</Link>
        <span className="text-[#8c725f] dark:text-[#a1a1aa] text-sm">/</span>
        <span className="text-safety text-sm font-bold">Blog</span>
      </nav>

      {/* Page Heading */}
      <section className="mb-8 md:mb-10">
        <h1 className="font-display text-[#181411] dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] mb-3">Insights &amp; Technical Engineering Blog</h1>
        <p className="text-[#8c725f] dark:text-[#a1a1aa] text-lg max-w-2xl font-light">
          <strong className="font-bold text-slate-900 dark:text-white">The authority on coastal engineering, structural fatigue, and industrial infrastructure breakthroughs.</strong>
        </p>
      </section>

      {/* Tabs - Horizontal Scroll on Mobile */}
      <nav className="border-b border-[#e6dfdb] dark:border-[#3d2c21] mb-10 overflow-x-auto scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
        <div className="flex gap-6 md:gap-8 min-w-max">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setFilter(cat); setVisibleCount(4); }}
              className={`flex flex-col items-center justify-center border-b-[3px] pb-3 font-medium text-sm transition-colors whitespace-nowrap ${
                filter === cat 
                  ? 'border-safety text-safety font-bold tracking-wide' 
                  : 'border-transparent text-[#8c725f] dark:text-[#a1a1aa] hover:text-safety'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Blog Grid (Main Column) */}
        <div className="lg:col-span-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {visiblePosts.map((post) => (
              <Link to={`/blog/${post.id}`} key={post.id} className="flex flex-col gap-4 group cursor-pointer block">
                <div className="w-full aspect-video rounded-xl overflow-hidden shadow-sm group-hover:shadow-xl transition-all duration-300 relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-safety bg-orange-100 dark:bg-orange-900/30 px-2 py-0.5 rounded border border-orange-200 dark:border-orange-800">
                      {post.category}
                    </span>
                    <span className="text-[#8c725f] dark:text-[#a1a1aa] text-xs">{post.date}</span>
                  </div>
                  <h3 className="font-display text-[#181411] dark:text-white text-xl font-bold leading-tight group-hover:text-safety transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-[#8c725f] dark:text-[#a1a1aa] text-sm leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="text-safety text-sm font-bold flex items-center gap-1 mt-1 group/link">
                    Read Insight 
                    <span className="material-symbols-outlined text-sm transform group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Load More Button */}
          {visibleCount < filteredPosts.length && (
            <div className="flex justify-center mt-12">
              <button 
                onClick={handleLoadMore}
                className="px-8 py-3 border-2 border-safety text-safety dark:text-white dark:border-white font-bold rounded-lg hover:bg-primary hover:border-primary hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all shadow-md hover:shadow-lg"
              >
                View More Articles
              </button>
            </div>
          )}
          
          {filteredPosts.length === 0 && (
            <div className="py-20 text-center text-slate-500">
              <span className="material-symbols-outlined text-6xl mb-4 text-slate-300">article</span>
              <p>No articles found in this category.</p>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4 flex flex-col gap-10">
          {/* Technical Guides Section */}
          <div className="bg-white dark:bg-[#1f2937] p-6 rounded-xl border border-[#e6dfdb] dark:border-[#374151] shadow-sm">
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-900 dark:text-white">
              <span className="material-symbols-outlined text-safety">menu_book</span>
              Technical Guides
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a className="flex justify-between items-center group" href="#">
                  <span className="text-sm font-medium text-[#8c725f] dark:text-[#a1a1aa] group-hover:text-safety transition-colors">Steel Fatigue Standards v2.1</span>
                  <span className="material-symbols-outlined text-sm text-safety">download</span>
                </a>
              </li>
              <li className="h-px bg-[#e6dfdb] dark:bg-[#374151]"></li>
              <li>
                <a className="flex justify-between items-center group" href="#">
                  <span className="text-sm font-medium text-[#8c725f] dark:text-[#a1a1aa] group-hover:text-safety transition-colors">Coastal Reclamation Design</span>
                  <span className="material-symbols-outlined text-sm text-safety">download</span>
                </a>
              </li>
              <li className="h-px bg-[#e6dfdb] dark:bg-[#374151]"></li>
              <li>
                <a className="flex justify-between items-center group" href="#">
                  <span className="text-sm font-medium text-[#8c725f] dark:text-[#a1a1aa] group-hover:text-safety transition-colors">Offshore Foundation Manual</span>
                  <span className="material-symbols-outlined text-sm text-safety">download</span>
                </a>
              </li>
              <li className="h-px bg-[#e6dfdb] dark:bg-[#374151]"></li>
              <li>
                <a className="flex justify-between items-center group" href="#">
                  <span className="text-sm font-medium text-[#8c725f] dark:text-[#a1a1aa] group-hover:text-safety transition-colors">Port Logistics Optimization</span>
                  <span className="material-symbols-outlined text-sm text-safety">download</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Recent Updates Section */}
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-bold flex items-center gap-2 text-slate-900 dark:text-white">
              <span className="material-symbols-outlined text-safety">notifications_active</span>
              Recent Updates
            </h4>
            <div className="flex flex-col gap-6">
              <div className="flex gap-4">
                <div className="w-16 h-16 rounded bg-orange-100 dark:bg-orange-900/30 flex-shrink-0 flex items-center justify-center font-display font-bold text-safety border border-orange-200 dark:border-orange-800">
                  DEC
                </div>
                <div className="flex flex-col">
                  <p className="text-sm font-bold text-[#181411] dark:text-white leading-snug">Project Alpha completion in Singapore port facilities.</p>
                  <p className="text-xs text-[#8c725f] dark:text-[#a1a1aa]">3 days ago</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-16 h-16 rounded bg-orange-100 dark:bg-orange-900/30 flex-shrink-0 flex items-center justify-center font-display font-bold text-safety border border-orange-200 dark:border-orange-800">
                  NOV
                </div>
                <div className="flex flex-col">
                  <p className="text-sm font-bold text-[#181411] dark:text-white leading-snug">Rising Tide wins Engineering Excellence Award 2023.</p>
                  <p className="text-xs text-[#8c725f] dark:text-[#a1a1aa]">2 weeks ago</p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Card */}
          <div className="bg-safety p-6 rounded-xl text-white shadow-xl shadow-orange-500/20">
            <h4 className="text-xl font-display font-bold mb-2">Technical Digest</h4>
            <p className="text-sm text-white/90 mb-4">Stay ahead with quarterly technical insights from our expert engineering team.</p>
            <div className="flex flex-col gap-2">
              <input className="bg-white/10 border border-white/30 rounded-lg px-4 py-2 text-sm placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 text-white" placeholder="Your engineering email" type="email"/>
              <button className="bg-white text-safety font-bold py-2 rounded-lg text-sm hover:bg-primary hover:text-white transition-colors">Subscribe</button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Blog;
