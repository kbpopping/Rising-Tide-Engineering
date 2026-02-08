
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { projectsData } from '../data/projectsData';

const ProjectCaseStudy: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectsData.find(p => p.id === projectId);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="w-full bg-slate-50 dark:bg-slate-900 min-h-screen pb-20 transition-colors duration-300">
      {/* Hero Header */}
      <header className="relative h-[60vh] min-h-[500px]">
        <img 
          src={project.image} 
          alt={project.title} 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 lg:p-20">
          <div className="max-w-7xl mx-auto">
            <Link to="/projects" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors group">
              <span className="material-symbols-outlined mr-2 group-hover:-translate-x-1 transition-transform">arrow_back</span> Back to Projects
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">{project.category}</span>
              {project.status && (
                <span className="bg-white/20 backdrop-blur text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-white/30">{project.status}</span>
              )}
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4 leading-tight">{project.title}</h1>
            <p className="text-xl text-gray-200 max-w-3xl font-light leading-relaxed">{project.description}</p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 lg:px-8 -mt-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-xl border border-slate-100 dark:border-slate-700">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 font-display border-b border-slate-100 dark:border-slate-700 pb-4">Project Overview</h2>
              <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 leading-relaxed">
                <p className="mb-6">{project.fullDescription}</p>
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">The Challenge</h3>
                <p className="mb-6">{project.challenge}</p>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Engineering Solution</h3>
                <p>{project.solution}</p>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-xl border border-slate-100 dark:border-slate-700">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 font-display flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">history</span>
                Project Timeline
              </h2>
              <div className="relative border-l-2 border-slate-200 dark:border-slate-700 ml-3 space-y-8">
                {project.timeline?.map((item, idx) => (
                  <div key={idx} className="relative pl-8">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white dark:bg-slate-800 border-4 border-primary"></div>
                    <span className="text-sm font-bold text-primary uppercase tracking-wide block mb-1">{item.date}</span>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">{item.event}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-primary text-white rounded-xl p-8 shadow-xl">
              <h3 className="text-xl font-bold font-display mb-6">Key Achievements</h3>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-3xl opacity-80">verified</span>
                <div>
                  <p className="font-medium text-lg leading-snug">{project.impact}</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-xl border border-slate-100 dark:border-slate-700 sticky top-24">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Project Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-700">
                  <span className="text-slate-500 dark:text-slate-400 text-sm">Client</span>
                  <span className="font-bold text-slate-900 dark:text-white">Confidential IOC</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-700">
                  <span className="text-slate-500 dark:text-slate-400 text-sm">Location</span>
                  <span className="font-bold text-slate-900 dark:text-white">Nigeria</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-700">
                  <span className="text-slate-500 dark:text-slate-400 text-sm">Sector</span>
                  <span className="font-bold text-slate-900 dark:text-white">{project.category}</span>
                </div>
              </div>
              <button className="w-full mt-8 bg-safety hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition-colors shadow-lg">
                Request Similar Service
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectCaseStudy;
