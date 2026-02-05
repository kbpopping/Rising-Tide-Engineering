import React, { useState } from 'react';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All Projects');

  const filters = [
    "All Projects",
    "Refinery Maintenance",
    "Power Systems",
    "Corrosion Control",
    "Civil Works"
  ];

  const projects = [
    {
      category: "Power Systems",
      title: "Substation Upgrade Phase II",
      description: "Modernization of high-voltage switchgear to improve grid stability for the Lagos industrial zone.",
      impact: "Increased load capacity by 40% with zero downtime during cutover.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWGDcLT4QJl9O0V6QRwsv2wjx21VPmRY7p6TcyIHQ5tbaD36hRjvc2SKdczIy3i6hFCj9zv35nWKp-2OoH2IXZp2ZSNg0UXzAAr4XuChHvkeXyNDiqnWh_3d9TMlRjP9gh2pXH5F4q26r-Z0Q_ghPadfMHC0B5SaA7H35Q3-DhAWJco4w6tjs-gp1ASMr-ABIXsFjUpHMwLG69EofwluASIi9OvEbjr615_2IPjGnHH5Gt3EPEqHBS5fB7h_BT-QB74--6_Kfm1x0",
      status: "COMPLETED 2023"
    },
    {
      category: "Civil Works",
      title: "Dangote Refinery Access Roads",
      description: "Heavy-duty pavement construction designed to withstand continuous industrial freight traffic.",
      impact: "Delivered 12km of reinforced concrete road under budget constraints.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVd02MNW_NTuqmk1wtAotfv52BBEUJWZ0wetoMXPJYMRB8IDXH1oUctGOg7qO_S3_VGP15DlTzmPl-6X0qG8q7AGw3j6CURV6xkBnLIxmjgqtE2vuFUb4O-T0bphQKg9cenCZrEZPul8bJh5MFON1xP1_KOnfcgeDkYSwW6ZHNElAxeHcFHNlsQioYJbbbONxOMm3Upa0EXZD8HIkHgXP10gK5yHz56GP7j-j1hCk2cK_mu0t0bZ1rPTkhtvjJRKAv67JHutl9ruE"
    },
    {
      category: "Industrial Integrity",
      title: "NDT Inspection Services",
      description: "Non-Destructive Testing for offshore storage tanks to ensure regulatory compliance.",
      impact: "Identified 12 critical structural flaws preventing potential catastrophic failure.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxeifUFU5_qoLQCT0a10_lHzDciXqOtbFLqX1_n99b5vxwIuAiJvV1HHAVE0pf0rupeLhCFlHt3skn-TJ7zw8Eaec1Gflza0FUPAi5RQSVoA29AT3CeuCWOmzQnw7qT210vGDuwDvfLaDoglfhCyH_E2a1Z3hLLMp02cwqIYi7CL8TFbfoI9kd8tVFhSIwSF036iDEzEEtqA3ljQpS23Tv9G1Hus8Xyhkc-E2ThBUKhPcTWv-vLrMPfMTy-_ilGW4X5tzQvp1KZtM"
    },
    {
      category: "Design & Consulting",
      title: "Gas Plant FEED Study",
      description: "Front End Engineering Design for a modular gas processing facility in the Niger Delta.",
      impact: "Optimized process flow reduced estimated CAPEX by 15%.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAH6mBAyaHE2ZWmLu3WVQ4Nsqq0i8WWgwIRKZcLUzBY9oSvMqhtuD4OmO7owRAmqt5Bt2qF8ke3nm84QZ5kBPW0YAc1vbOmCSekBGJAyVQ472Zl0R77Zag7qMRx-faXz8S8vhzGtt4GATIrqkl-lBelOlmqArUCja6Eh9O7j6aBlDaW0XqVJ6wetn7pGUI27iHy0fiint4n2hIsp1c-V94sTgfE0H1iVCgRZ6QiuqqtjU1I7BTo9iFQEIs_1_Nh8Mk8vXcicIuanbs"
    },
    {
      category: "Renewable Energy",
      title: "Hybrid Solar System",
      description: "Installation of 1.2MW solar array with battery storage for an industrial complex.",
      impact: "Reduced diesel consumption by 60% annually.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCDrxlq0LxExzJSKXVe9FpI73IgNrwf_Jea7z5JTU1dhjQKsgYb18qqLRKzmXJTvo3Ih7fkIClp1cbLU5rJ90Fps0Wtw930wsxB-N6CGTYCmF4VLk_IsTgjDUSVhudkHoGlMedJPgZ80TI5G2nhsweKzsqEskdAhELzEBv0EVqXPiIIRZ61Rx0umAorFJQdNCYVBvswd6YoHOU5oHCzqny6tSxi2YgWFOrffg7SMQYpLwpohzH__n3rf4mkHVgehHBS1VHubErah0"
    },
    {
      category: "Maintenance",
      title: "Total Facility Management",
      description: "Long-term contract for mechanical, electrical, and plumbing maintenance for Corporate HQ.",
      impact: "Improved facility uptime to 99.8% over 12 months.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAcuGZzantF8i26IdY5_zjZ9FzbiXqsN8pPEe0Ou2L67r10MmxxL-HypErKdo-hH4IaW65u_xVVdd6y7GVqeAzPJu18LkN-5F4_vGPqic_FaeWp4Mk1jfjGA2-vsxXtDSDaa-blsjLZDbcbQfYgFYsbsBqipS_txPUfU7_xNBOYJu5vr2bF9iPCLIyFYAkHxNlRXSmfUGtbfWJ-yy0UJkS5lEnXCikEJE36r03cCzs4tYTzYsPZdL0pHWFLtHgSKtOJO3Retvdjkns",
      status: "ONGOING"
    }
  ];

  return (
    <div className="w-full bg-background-light dark:bg-slate-900 transition-colors duration-200">
        {/* Hero Section */}
        <div className="relative bg-gray-900 overflow-hidden h-[500px]">
            <div className="absolute inset-0 animate-ken-burns">
                <img alt="Offshore Oil Rig at sunset" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvzSIm3S5jBElNeQsGREoUz8_Y8fQ8nS2HB8TQCCuPZ_I3OcEcxdbij7i0hw2HoX1g1Cy5fRh5IbUjGv2_GHflbna0Si9l1IHdN0EMrl6UAPbkfJYMH7EERft2I4Y-E2vHSooDzoL3gDU2llntXidOK74NhUBjH3MV5hcrh_Ui3NNiyPh-pBHzhB5Io4Tqfv4dX9WgoxATnXVGTzt9ls68NH8raYnZ0ZN_VMCWxFbiFXEo4nNPSWRmaAEMDCHwz5ZUqspnUElmVMg"/>
                <div className="absolute inset-0 bg-black/60"></div>
            </div>
            <div className="relative max-w-7xl mx-auto h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl font-display drop-shadow-md animate-fade-in-up">
                    Engineering Excellence Portfolio
                </h1>
                <p className="mt-4 text-xl text-white font-medium max-w-3xl drop-shadow-sm animate-fade-in-up-delay-1">
                    Delivering integrity and innovation across Nigeria's refinery, power, and industrial sectors. Explore our proven track record of complex problem solving.
                </p>
            </div>
        </div>

        {/* Filter Section */}
        <div className="bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-gray-700 sticky top-20 z-40 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Filter Projects:</span>
                    <div className="flex flex-wrap gap-2">
                        {filters.map((f, i) => (
                            <button 
                                key={i}
                                onClick={() => setFilter(f)}
                                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
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
                    <div className="lg:w-3/5 relative h-80 lg:h-auto overflow-hidden group">
                        <img alt="Refinery pipeline maintenance after work" className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdFMT_cVu2DLohb9rRzHV2M-QEFDUjTerBuR6yUCTn3ucmEeqfjMTk33B6hUH1KBHB79S1eZxdxJtO8IH8ArxTsdO3dzZKH2KqqZan6zBImXbfiYqVx07rHUbWYAHk4qrWA2HFTTSVovfAll5hAb2myFoDaSAfyhU3JYorMtBJGCHibPd3wX6bJvrvE6qnRg4Ly7R1_8copwNR6zYqm09wzeYBfG_p1OWT7lbf7xeBHSHl_YnKrBnlx79YF7NioWnFtkWOxIdYwBY"/>
                        <div className="absolute inset-0 w-1/2 overflow-hidden border-r-4 border-white dark:border-slate-800 shadow-2xl transition-all duration-500 ease-in-out group-hover:w-[40%]">
                            <img alt="Refinery pipeline maintenance before work" className="absolute inset-0 w-[200%] max-w-none h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7SuMCVOLeAFlX6EPySsT2qg3ygwq1XlYeVvrIG-utQLeu4RnbjuX-ppePSPGuPBcDfZp3h6MR1WGgN9v0xogTjpqzQzk-7f_LSq10WPwwIGDtSiqUXEe3TDRcyPymWY1ZIcF7KYQeRtUlPsZt9UC-4IKZEzDFF5Oys8MboOXV9QNxI8HN2V5LlDoJEygt9R3Tk-sAobEX59TchIyJlQt9M0Vm0fnt3tkvgPXzWTDYrPoC9GZydgH3zMZMiLSvu7elIsraLRmZTUA"/>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="bg-white/90 dark:bg-black/80 backdrop-blur text-xs font-bold px-3 py-1 rounded-full shadow-lg text-slate-900 dark:text-white transform">
                                <span className="mr-2 text-slate-500">BEFORE</span> / <span className="ml-2 text-safety font-bold">AFTER</span>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-2/5 p-8 flex flex-col justify-between">
                        <div>
                            <div className="flex items-center space-x-2 mb-4">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-orange-100 text-safety border border-orange-200">
                                    Refinery Maintenance
                                </span>
                                <span className="text-slate-400 text-sm flex items-center"><span className="material-symbols-outlined text-base mr-1">place</span> Port Harcourt</span>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 font-display">Major Pipeline Rehabilitation</h3>
                            <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                                Comprehensive corrosion control and structural reinforcement for a critical 5km stretch of offshore pipeline. Utilizing our proprietary coating technology to extend asset lifespan by 15 years.
                            </p>
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border-l-2 border-primary">
                                    <span className="block text-2xl font-bold text-primary">98%</span>
                                    <span className="text-xs text-slate-500 uppercase font-semibold">Corrosion Reduction</span>
                                </div>
                                <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border-l-2 border-safety">
                                    <span className="block text-2xl font-bold text-safety">3 Weeks</span>
                                    <span className="text-xs text-slate-500 uppercase font-semibold">Ahead of Schedule</span>
                                </div>
                            </div>
                        </div>
                        <button className="group flex items-center text-safety font-bold hover:text-orange-700 transition-colors mt-4">
                            View Full Case Study 
                            <span className="material-symbols-outlined ml-2 transform group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, idx) => (
                    <div key={idx} className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl border border-gray-100 dark:border-gray-700 flex flex-col h-full transition-all duration-300 hover:-translate-y-1">
                        <div className="h-48 relative overflow-hidden group">
                            <img alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={project.image}/>
                            {project.status && (
                                <div className={`absolute top-4 right-4 text-white text-xs font-bold px-2 py-1 rounded shadow-sm ${project.status.includes('ONGOING') ? 'bg-secondary' : 'bg-slate-900/80 backdrop-blur'}`}>
                                    {project.status}
                                </div>
                            )}
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
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex items-center justify-center">
                <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm">
                    <a href="#" className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 focus:z-20 focus:outline-offset-0">
                        <span className="sr-only">Previous</span>
                        <span className="material-symbols-outlined text-sm">chevron_left</span>
                    </a>
                    <a href="#" className="relative z-10 inline-flex items-center bg-primary px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">1</a>
                    <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 focus:z-20 focus:outline-offset-0">2</a>
                    <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 focus:z-20 focus:outline-offset-0">3</a>
                    <a href="#" className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 focus:z-20 focus:outline-offset-0">
                        <span className="sr-only">Next</span>
                        <span className="material-symbols-outlined text-sm">chevron_right</span>
                    </a>
                </nav>
            </div>
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