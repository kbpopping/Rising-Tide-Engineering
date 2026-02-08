
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SectorCard: React.FC<{ sector: any }> = ({ sector }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="group relative h-64 w-full cursor-pointer perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative h-full w-full transition-all duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front */}
        <div className="absolute inset-0 h-full w-full backface-hidden rounded-lg overflow-hidden shadow-lg bg-slate-900">
           <img src={sector.image} className="h-full w-full object-cover transition-transform duration-500" alt={sector.title} />
           <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
           <div className="absolute bottom-0 left-0 p-6 w-full">
             <span className="material-symbols-outlined text-safety mb-2 text-3xl">{sector.icon}</span>
             <h3 className="text-xl font-bold text-white font-display mb-1">{sector.title}</h3>
             <p className="text-white/80 text-sm font-medium">{sector.desc}</p>
           </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 h-full w-full bg-slate-900 backface-hidden rotate-y-180 p-8 flex flex-col justify-center items-center text-center rounded-lg border-2 border-safety shadow-xl">
            <span className="material-symbols-outlined text-safety mb-4 text-4xl animate-bounce">{sector.icon}</span>
            <h3 className="text-2xl font-bold text-white mb-3 font-display">{sector.title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed animate-fade-in-up">
              We provide specialized engineering solutions for the {sector.title} sector, focusing on {sector.desc.toLowerCase()}
            </p>
        </div>
      </div>
    </div>
  );
};

const Piping: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    requirements: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({ name: '', email: '', company: '', requirements: '' });
      setTimeout(() => setShowSuccess(false), 5000);
    }, 1500);
  };

  const sectors = [
    {
      title: "Oil & Gas",
      icon: "oil_barrel",
      desc: "Upstream & downstream piping.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBubNQPYJT7FjN9RYjkli2LUP9msuRNIzKxkEYEQKporF7fkP2-dD8uR9AskstWryQuj0zMBUmRvM9teQyc5pwAGnLNgudM5gEuyEDFkiwsWkLjhebmm1Gd8CcK_KMEdc87E158qX0sV3UJ0qPHdg-8IfdE_Cea_Q4rbJEyqiWPMbhLiPCvS5zltO0m5m6eVcAgtaO2GX-bj2udQUZ2U5V0XlWLp4Mneh6iuhVg4qcRCKgK8XUpBNkd7T60fm45OOXKeGRwtGI1EkI"
    },
    {
      title: "Power Generation",
      icon: "bolt",
      desc: "High-pressure steam lines.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqrFWrVXER5FjZjjTKzy5dVQAp71BYVBpbQaNpsGKMiQzw_tkUuV9LB-dxzdth7h8CzocGvQDn5c4Ir3L3SW5cNjkYfRQBAQ2JYOze73n3CPRYIa0p6mpbsyD4jY187fm8F-dVWUucSIv8Ii2QHL8yXkI6aU-awtqs5m7yzzUFS0pJDgUG_19KtDT5GFy0G_Z5DDizZr2210D96ImxaL_3bTuTPA2X997V0ZdTXhw4n9Jry-qLxd_mb53isfV8d6kNnGjue0c68YM"
    },
    {
      title: "Petrochemical",
      icon: "science",
      desc: "Corrosion-resistant alloys.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxA3kf27UH2ymm1SZrYIOSk4IYl4BrdtLJzPL3NGWTpXioZJJCxtQihapjoorOXWcG8_h-1OLOUF8Fuz3DDdS1pI-upR3KjxckRXlCrfzEUT875vudlA3llYhyWSU9Na4J6nX5J6YCgWcjEZAeMEWv95Qh59SAGB9OxAACQ9kAIIK34nsDJzXahxvBVanxv-HuBaLJBoBD_6hY80dxN3TqdBFloFOJOi5w-qaP9Mn8KDX3GLcgno6njpruz5f4zE1PdlXiIAb1XZ4"
    },
    {
      title: "Construction",
      icon: "construction",
      desc: "Structural steel & piping.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSg3wt1nG4BT19ayOP7_oo8c8V7TLjIy2_WLz4WBkpo31Uk9BOjFqugfPrVovyVeDxXVQ1PodEhD7UCYJuq46g-xptVW-KJk75q-Q3ifEm2RT6Fze5XgIDgJSb0vHc4QyOhQ9QLEBlLHuIvw-rygFpcdlUJShU_cFZ5_TP5NOWNoDQDPB1LEYH476UqxmHGS48SeSHx556Hy_KJY5Gxpd_oX9ai_a983UyHdALSzG1yjmJCSMCPhGWuA_P8RB32r4KUNixQYMOQQg"
    }
  ];

  return (
    <div className="w-full bg-slate-50 dark:bg-slate-900 transition-colors duration-300 relative">
       {/* Success Modal */}
       {showSuccess && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setShowSuccess(false)}
        >
          <div 
            className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl p-8 max-w-sm w-full relative animate-fade-in-up flex flex-col items-center text-center gap-4 border border-slate-100 dark:border-slate-700"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setShowSuccess(false)} 
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mb-2 shadow-sm animate-bounce">
              <span className="material-symbols-outlined text-4xl">check_circle</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">Request Sent!</h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              We've received your fabrication details. Our engineering team will review your specifications and contact you shortly.
            </p>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative w-full h-[600px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-ken-burns" 
          style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.8) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAmUmTXr1HjhO0EseY3uS60Mh7bhZkYQjljR01zd62kKb02RxIm_S1Fz8-bc_ii5l-gRuDujhBuylO0et4lSoKUNjmdgXwbhxyg7SJ4KdKWoPrSiIs8xGfjrc6W6Te2EnkUSOC7nBiCXPZiK5b3F453H59sV9Z7RspCyLzHdtsK7TiIYUe1piJ8HWYs81uSWOtzhgqyEMbHHj4BnSBw8nucvWv614aQl2I6I14uKnH60vvcpxUPQF1LaGWwst3b439nhGt_vuRdZS8")' }}
        ></div>
        <div className="absolute inset-0 flex flex-col justify-end px-6 py-16 md:px-12 lg:px-20 xl:px-40 pointer-events-none">
          <div className="flex flex-col gap-4 text-left max-w-4xl pointer-events-auto">
            <div className="flex items-center gap-2 mb-2 animate-fade-in-up">
              <span className="material-symbols-outlined text-safety">engineering</span>
              <span className="text-safety font-bold uppercase tracking-wider text-sm">Industrial Services</span>
            </div>
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl lg:text-6xl animate-fade-in-up-delay-1">
              Piping Fabrication & Installation
            </h1>
            <p className="text-gray-200 text-lg font-normal leading-relaxed max-w-2xl mt-2 animate-fade-in-up-delay-2">
              Precision engineering for high-pressure industrial systems. We deliver ASME-compliant fabrication and seamless on-site installation for the world's most demanding sectors.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 animate-fade-in-up-delay-2">
              <Link to="/projects" className="flex items-center justify-center rounded-lg h-12 px-6 bg-safety hover:bg-orange-700 text-white font-bold transition-colors shadow-lg hover:shadow-orange-500/40 transform hover:-translate-y-1">
                View Projects
              </Link>
              <button onClick={() => document.getElementById('request-quote')?.scrollIntoView({ behavior: 'smooth' })} className="flex items-center justify-center rounded-lg h-12 px-6 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold border border-white/20 transition-colors">
                Request Quote
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full grow flex-col py-12 md:py-20 px-6 md:px-12 lg:px-20 xl:px-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-[1400px] mx-auto w-full">
          {/* Main Content */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            <section>
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-safety text-3xl">precision_manufacturing</span>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Methodology & Approach</h2>
              </div>
              <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                Our piping solutions are grounded in meticulous planning and advanced metallurgy. From initial isometrics to final hydro-testing, we strictly adhere to ASME B31.3 and API 1104 standards. Our fabrication yards are equipped with automated welding systems to ensure consistent joint quality and rapid project turnaround.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                   <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Shop Fabrication</h3>
                   <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                      <li className="flex items-center gap-2"><span className="material-symbols-outlined text-safety text-sm">check</span> Automated orbital welding</li>
                      <li className="flex items-center gap-2"><span className="material-symbols-outlined text-safety text-sm">check</span> Controlled environment fit-up</li>
                      <li className="flex items-center gap-2"><span className="material-symbols-outlined text-safety text-sm">check</span> Spool hydro-testing</li>
                   </ul>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                   <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Field Installation</h3>
                   <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                      <li className="flex items-center gap-2"><span className="material-symbols-outlined text-safety text-sm">check</span> Complex rigging & lifting</li>
                      <li className="flex items-center gap-2"><span className="material-symbols-outlined text-safety text-sm">check</span> Flange management</li>
                      <li className="flex items-center gap-2"><span className="material-symbols-outlined text-safety text-sm">check</span> Hot tapping services</li>
                   </ul>
                </div>
              </div>
            </section>

             <section>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">Sector Application</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 {sectors.map((sector, idx) => (
                    <SectorCard key={idx} sector={sector} />
                 ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <div className="bg-slate-900 rounded-xl p-8 text-white relative overflow-hidden shadow-2xl">
               <div className="absolute top-0 right-0 p-4 opacity-10">
                 <span className="material-symbols-outlined text-8xl">settings</span>
               </div>
               <h3 className="text-safety font-mono font-bold text-lg mb-6 uppercase tracking-wider">Technical Specs</h3>
               <div className="space-y-4 font-mono text-sm">
                  <div className="flex justify-between border-b border-gray-700 pb-2">
                    <span className="text-gray-400">Diameter Range</span>
                    <span className="font-bold">0.5" to 72"</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-700 pb-2">
                    <span className="text-gray-400">Materials</span>
                    <span className="font-bold text-right">CS, SS, Duplex, Inconel</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-700 pb-2">
                    <span className="text-gray-400">Pressure Class</span>
                    <span className="font-bold">Up to #2500</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span className="text-gray-400">NDT</span>
                    <span className="font-bold text-right">100% RT/UT</span>
                  </div>
               </div>
            </div>

            <div id="request-quote" className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-xl border border-slate-100 dark:border-slate-700 sticky top-24">
               <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 font-display">Request a Quote</h3>
               <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Tell us about your project requirements.</p>
               
               <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                 <div>
                   <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">Full Name</label>
                   <input 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 dark:bg-slate-700 border border-gray-200 dark:border-gray-600 rounded p-2.5 text-sm outline-none focus:border-safety focus:ring-1 focus:ring-safety transition-all dark:text-white" 
                    placeholder="John Doe" 
                    required
                   />
                 </div>
                 <div>
                   <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">Email Address</label>
                   <input 
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 dark:bg-slate-700 border border-gray-200 dark:border-gray-600 rounded p-2.5 text-sm outline-none focus:border-safety focus:ring-1 focus:ring-safety transition-all dark:text-white" 
                    placeholder="john@company.com" 
                    required
                   />
                 </div>
                 <div>
                   <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">Company</label>
                   <input 
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 dark:bg-slate-700 border border-gray-200 dark:border-gray-600 rounded p-2.5 text-sm outline-none focus:border-safety focus:ring-1 focus:ring-safety transition-all dark:text-white" 
                    placeholder="Company Ltd." 
                    required
                   />
                 </div>
                 <div>
                   <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">Project Requirements</label>
                   <textarea 
                    name="requirements"
                    value={formData.requirements}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 dark:bg-slate-700 border border-gray-200 dark:border-gray-600 rounded p-2.5 text-sm outline-none focus:border-safety focus:ring-1 focus:ring-safety transition-all h-24 resize-none dark:text-white" 
                    placeholder="Describe your piping needs..." 
                    required
                   ></textarea>
                 </div>
                 <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-safety hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition-all shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                 >
                   {isSubmitting ? 'Sending...' : 'Submit Request'}
                   {!isSubmitting && <span className="material-symbols-outlined text-sm">send</span>}
                 </button>
               </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Piping;
