
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All Projects');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filters = [
    "All Projects",
    "Power Systems",
    "Civil Works",
    "Industrial Integrity",
    "Renewable Energy",
    "Maintenance"
  ];

  // Helper to normalize category for filtering
  const filteredProjects = projectsData.filter(project => {
    if (filter === 'All Projects') return true;
    return project.category === filter || (filter === 'Refinery Maintenance' && project.category === 'Maintenance'); 
  });

  // Pagination Logic
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const displayedProjects = filteredProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 500, behavior: 'smooth' }); // Scroll to top of list
  };

  return (
    <div className="w-full bg-background-light dark:bg-slate-900 transition-colors duration-200">
        {/* Hero Section */}
        <div className="relative bg-gray-900 overflow-hidden h-[400px] md:h-[500px]">
            <div className="absolute inset-0 animate-ken-burns">
                <img 
                  alt="Offshore Oil Rig at sunset" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvzSIm3S5jBElNeQsGREoUz8_Y8fQ8nS2HB8TQCCuPZ_I3OcEcxdbij7i0hw2HoX1g1Cy5fRh5IbUjGv2_GHflbna0Si9l1IHdN0EMrl6UAPbkfJYMH7EERft2I4Y-E2vHSooDzoL3gDU2llntXidOK74NhUBjH3MV5hcrh_Ui3NNiyPh-pBHzhB5Io4Tqfv4dX9WgoxATnXVGTzt9ls68NH8raYnZ0ZN_VMCWxFbiFXEo4nNPSWRmaAEMDCHwz5ZUqspnUElmVMg"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-black/60"></div>
            </div>
            <div className="relative max-w-7xl mx-auto h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl font-display drop-shadow-md animate-fade-in-up">
                    Engineering Excellence Portfolio
                </h1>
                <p className="mt-4 text-lg md:text-xl text-white font-medium max-w-3xl drop-shadow-sm animate-fade-in-up-delay-1">
                    Delivering integrity and innovation across Nigeria's refinery, power, and industrial sectors. Explore our proven track record of complex problem solving.
                </p>
            </div>
        </div>

        {/* Filter Section */}
        <div className="bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-gray-700 sticky top-16 md:top-20 z-40 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider hidden md:block">Filter Projects:</span>
                    <div className="flex flex-nowrap overflow-x-auto pb-2 md:pb-0 gap-2 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
                        {filters.map((f, i) => (
                            <button 
                                key={i}
                                onClick={() => { setFilter(f); setCurrentPage(1); }}
                                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                                    filter === f 
                                    ? 'bg-primary text-white shadow-md ring-1 ring-primary' 
                                    : 'bg-transparent text-slate-600 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-gray-700 ring-1 ring-gray-300 dark:ring-gray-600'
                                }`}
                            >
                                {f}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Featured Case Study */}
            <div className="mb-16">
                <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-6 border-l-4 border-safety pl-4">Featured Case Study</h2>
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 flex flex-col lg:flex-row">
                    <div className="lg:w-3/5 relative h-64 md:h-80 lg:h-auto overflow-hidden group">
                        <img 
                          alt="Refinery pipeline maintenance after work" 
                          className="absolute inset-0 w-full h-full object-cover" 
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdFMT_cVu2DLohb9rRzHV2M-QEFDUjTerBuR6yUCTn3ucmEeqfjMTk33B6hUH1KBHB79S1eZxdxJtO8IH8ArxTsdO3dzZKH2KqqZan6zBImXbfiYqVx07rHUbWYAHk4qrWA2HFTTSVovfAll5hAb2myFoDaSAfyhU3JYorMtBJGCHibPd3wX6bJvrvE6qnRg4Ly7R1_8copwNR6zYqm09wzeYBfG_p1OWT7lbf7xeBHSHl_YnKrBnlx79YF7NioWnFtkWOxIdYwBY"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 w-1/2 overflow-hidden border-r-4 border-white dark:border-slate-800 shadow-2xl transition-all duration-500 ease-in-out group-hover:w-[40%]">
                            <img 
                              alt="Refinery pipeline maintenance before work" 
                              className="absolute inset-0 w-[200%] max-w-none h-full object-cover" 
                              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7SuMCVOLeAFlX6EPySsT2qg3ygwq1XlYeVvrIG-utQLeu4RnbjuX-ppePSPGuPBcDfZp3h6MR1WGgN9v0xogTjpqzQzk-7f_LSq10WPwwIGDtSiqUXEe3TDRcyPymWY1ZIcF7KYQeRtUlPsZt9UC-4IKZEzDFF5Oys8MboOXV9QNxI8HN2V5LlDoJEygt9R3Tk-sAobEX59TchIyJlQt9M0Vm0fnt3tkvgPXzWTDYrPoC9GZydgH3zMZMiLSvu7elIsraLRmZTUA"
                              loading="lazy"
                            />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="bg-white/90 dark:bg-black/80 backdrop-blur text-xs font-bold px-3 py-1 rounded-full shadow-lg text-slate-900 dark:text-white transform">
                                <span className="mr-2 text-slate-500">BEFORE</span> / <span className="ml-2 text-safety font-bold">AFTER</span>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-2/5 p-6 md:p-8 flex flex-col justify-between">
                        <div>
                            <div className="flex items-center space-x-2 mb-4">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-orange-100 text-safety border border-orange-200">
                                    Refinery Maintenance
                                </span>
                                <span className="text-slate-400 text-sm flex items-center"><span className="material-symbols-outlined text-base mr-1">place</span> Port Harcourt</span>
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2 font-display">Major Pipeline Rehabilitation</h3>
                            <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed text-sm md:text-base">
                                Comprehensive corrosion control and structural reinforcement for a critical 5km stretch of offshore pipeline. Utilizing our proprietary coating technology to extend asset lifespan by 15 years.
                            </p>
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border-l-2 border-primary">
                                    <span className="block text-xl md:text-2xl font-bold text-primary">98%</span>
                                    <span className="text-xs text-slate-500 uppercase font-semibold">Corrosion Reduction</span>
                                </div>
                                <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border-l-2 border-safety">
                                    <span className="block text-xl md:text-2xl font-bold text-safety">3 Weeks</span>
                                    <span className="text-xs text-slate-500 uppercase font-semibold">Ahead of Schedule</span>
                                </div>
                            </div>
                        </div>
                        <Link to={`/projects/ndt-inspection-services`} className="group flex items-center text-safety font-bold hover:text-orange-700 transition-colors mt-4">
                            View Full Case Study 
                            <span className="material-symbols-outlined ml-2 transform group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayedProjects.map((project, idx) => (
                    <Link to={`/projects/${project.id}`} key={idx} className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl border border-gray-100 dark:border-gray-700 flex flex-col h-full transition-all duration-300 hover:-translate-y-1 group">
                        <div className="h-48 relative overflow-hidden">
                            <img 
                              alt={project.title} 
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                              src={project.image}
                              loading="lazy"
                            />
                            {project.status && (
                                <div className={`absolute top-4 right-4 text-white text-xs font-bold px-2 py-1 rounded shadow-sm ${project.status.includes('ONGOING') ? 'bg-secondary' : 'bg-slate-900/80 backdrop-blur'}`}>
                                    {project.status}
                                </div>
                            )}
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <span className="bg-white text-slate-900 px-4 py-2 rounded-full font-bold text-sm">View Case Study</span>
                            </div>
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                            <div className="mb-2">
                                <span className="text-xs font-bold text-secondary uppercase tracking-wide">{project.category}</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 font-display">{project.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 flex-1">
                                {project.description}
                            </p>
                            <div className="border-t border-gray-100 dark:border-gray-700 pt-4 mt-auto">
                                <div className="flex items-start">
                                    <span className="material-symbols-outlined text-safety mr-2 text-lg">verified</span>
                                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                                        <strong className="text-slate-800 dark:text-slate-200 block mb-1">Impact:</strong>
                                        {project.impact}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12 flex items-center justify-center">
                  <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm">
                      <button 
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 focus:z-20 focus:outline-offset-0 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                          <span className="sr-only">Previous</span>
                          <span className="material-symbols-outlined text-sm">chevron_left</span>
                      </button>
                      
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                        <button
                          key={page}
                          onClick={() => handlePageChange(page)}
                          className={`relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                            currentPage === page 
                              ? 'bg-primary text-white' 
                              : 'text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
                          }`}
                        >
                          {page}
                        </button>
                      ))}

                      <button 
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 focus:z-20 focus:outline-offset-0 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                          <span className="sr-only">Next</span>
                          <span className="material-symbols-outlined text-sm">chevron_right</span>
                      </button>
                  </nav>
              </div>
            )}
        </main>

        {/* CTA Section */}
        <section className="bg-safety relative overflow-hidden py-12 md:py-16">
            <div className="absolute inset-0 opacity-10">
                <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <path d="M0 50 Q 50 100 100 50 L 100 100 L 0 100 Z" fill="white"></path>
                </svg>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:items-center lg:justify-between relative z-10 gap-8">
                <div>
                    <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl font-display">
                        <span className="block">Ready to start your project?</span>
                        <span className="block text-white/90 mt-1 font-medium text-2xl">Get world-class engineering solutions.</span>
                    </h2>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                    <button className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-md text-safety bg-white hover:bg-gray-50 transition-colors shadow-lg">
                        Contact Us
                    </button>
                    <button className="inline-flex items-center justify-center px-8 py-3 border border-white text-base font-bold rounded-md text-white bg-transparent hover:bg-white/10 transition-colors">
                        Download Brochure
                    </button>
                </div>
            </div>
        </section>
    </div>
  );
};

export default Projects;
