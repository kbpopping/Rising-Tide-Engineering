import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section with Animation */}
      <section className="relative h-screen min-h-[700px] w-full overflow-hidden bg-slate-900">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-cover bg-center animate-slide-1 opacity-0" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC_gnMJt3U_EE7bhfmM-tgdkC3D-kXBKLnPk7wGHfDCpAfV9_9DrOHKPN1zFjDZZre7L0cEpiBGYRC6EjYTs10K3QXkp5RqoOZsdwzr4QNDq5Fv9Jv1fA_HdjidzQ7Bg4Y61A7EbbGXDK4G_21ohe0r_UJG5KYW8xNLLnyotDwZU8rAKCUH_iSwwPuvQRnCW0zGC9qYDv55C75KM0Ymqls-2mYIiZFWRsSPcmEWFmGxeGAaczD6B54XFPOxTpzQVCFpwkSM8XpQLB0")' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30"></div>
          </div>
          <div className="absolute inset-0 bg-cover bg-center animate-slide-2 opacity-0" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAUEKWKPJv_Lub5604cyAplKm9poqS6UF0uOCT7HZUxrFXM3LlQ2HjKoqAUcf4__lExgEh6em1phkSPfp0jNZloavkCOeN7n304K41ykShEQj9c4ObH84j4GgDzsQHRKA9ru0hpBb_OWyPW8nw2PFVXPFjN2krVuqFsycElYOagJgd2rlauvBqfNpRNny_hvAWjYA1ysWgdmhgPLmrAAEk3ISpjww6asf99aHxuV4Z__SNo5tkLGB7TmsaMSesrzLOWH2Swa9AH9-g")' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30"></div>
          </div>
          <div className="absolute inset-0 bg-cover bg-center animate-slide-3 opacity-0" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAQmGHj4g2ujcWWdFbhBnXTffgNW-cy1bmBUlmgt34BcI2GIoDLEQKfasU-gmK6TrOG1yPL_sZhFxY_jFW3P0RlReyFcMBSWZRjDG6ufiio319X1qkKiTL2xkmm954lVKFH9Dly-7y-NcITWusCJg5mMPQI8_-HnPYlv9tiQEtMLSvI78VsVNw1Uwlgb0brzWoB_DI9u7jJZhPsRkDXXXTn6Il5isY4-CtRXEUTX0EcF7SnwxcCiw6oMAjdid3MoTBdJ821vOos1V8")' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30"></div>
          </div>
        </div>
        
        <div className="relative z-20 h-full flex items-center justify-center text-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="inline-block px-4 py-2 bg-cta text-white font-bold text-sm uppercase tracking-widest rounded mb-4 animate-bounce">
              Engineering Excellence
            </div>
            <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl text-white leading-tight drop-shadow-lg">
              THE RISING TIDE <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-cta to-yellow-400">ENGINEERING</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-md">
              Pioneering asset integrity, corrosion control, and specialized procurement for Nigeria's industrial future.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Link to="/services/piping" className="bg-cta hover:bg-orange-600 text-white text-lg font-bold py-4 px-10 rounded shadow-xl hover:shadow-orange-500/40 transition-all transform hover:-translate-y-1">
                Explore Our Services
              </Link>
              <Link to="/about" className="bg-white/10 backdrop-blur-sm border-2 border-white hover:bg-white hover:text-primary text-white text-lg font-bold py-4 px-10 rounded shadow-xl transition-all transform hover:-translate-y-1">
                View Projects
              </Link>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-3 z-30">
          <div className="h-1.5 w-16 bg-cta rounded-full"></div>
          <div className="h-1.5 w-4 bg-white/50 rounded-full"></div>
          <div className="h-1.5 w-4 bg-white/50 rounded-full"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary text-white py-16 relative overflow-hidden border-b-4 border-cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-display font-black text-cta mb-2">30+</div>
              <div className="text-sm font-bold text-white/90 uppercase tracking-widest">Years Experience</div>
            </div>
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-display font-black text-cta mb-2">150+</div>
              <div className="text-sm font-bold text-white/90 uppercase tracking-widest">Projects Done</div>
            </div>
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-display font-black text-cta mb-2">100%</div>
              <div className="text-sm font-bold text-white/90 uppercase tracking-widest">Safety Record</div>
            </div>
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-display font-black text-cta mb-2">ISO</div>
              <div className="text-sm font-bold text-white/90 uppercase tracking-widest">Certified</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid (Core Competencies) */}
      <section className="py-24 bg-white dark:bg-slate-900" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl font-black text-slate-900 dark:text-white mb-4">Core Competencies</h2>
            <div className="h-1.5 w-24 bg-cta mx-auto rounded mb-6"></div>
            <p className="text-slate-600 dark:text-slate-400 text-lg font-medium">Delivering specialized engineering solutions tailored to unique challenges.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-700 rounded-xl p-8 hover:border-cta dark:hover:border-cta transition-all hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cta to-yellow-500"></div>
              <div className="w-16 h-16 bg-orange-50 dark:bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cta group-hover:text-white transition-colors text-cta">
                <span className="material-symbols-outlined text-4xl">shield</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-3">Asset Integrity</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">Comprehensive risk-based inspection, maintenance planning, and fitness-for-service assessments.</p>
              <Link to="/services/asset-integrity" className="inline-flex items-center text-cta font-bold hover:underline">
                Learn more <span className="material-symbols-outlined text-sm ml-1 font-bold">arrow_forward</span>
              </Link>
            </div>

            <div className="group bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-700 rounded-xl p-8 hover:border-cta dark:hover:border-cta transition-all hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cta to-yellow-500"></div>
              <div className="w-16 h-16 bg-orange-50 dark:bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cta group-hover:text-white transition-colors text-cta">
                <span className="material-symbols-outlined text-4xl">science</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-3">Corrosion Control</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">Advanced cathodic protection, coating inspection, and chemical treatment solutions.</p>
              <Link to="/services/corrosion" className="inline-flex items-center text-cta font-bold hover:underline">
                Learn more <span className="material-symbols-outlined text-sm ml-1 font-bold">arrow_forward</span>
              </Link>
            </div>

            <div className="group bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-700 rounded-xl p-8 hover:border-cta dark:hover:border-cta transition-all hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cta to-yellow-500"></div>
              <div className="w-16 h-16 bg-orange-50 dark:bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cta group-hover:text-white transition-colors text-cta">
                <span className="material-symbols-outlined text-4xl">precision_manufacturing</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-3">Piping & Process</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">Design, procurement, and installation of complex piping systems adhering to API standards.</p>
              <Link to="/services/piping" className="inline-flex items-center text-cta font-bold hover:underline">
                Learn more <span className="material-symbols-outlined text-sm ml-1 font-bold">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sector Applications */}
      <section className="py-24 bg-slate-50 dark:bg-slate-800/50 relative" id="sectors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl font-black text-slate-900 dark:text-white mb-4">Sector Applications</h2>
            <div className="h-1.5 w-24 bg-cta mx-auto rounded"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-xl transition-all p-6 hover:-translate-y-1 group border-b-4 border-transparent hover:border-cta">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-lg text-slate-800 dark:text-white">Oil & Gas</h3>
                <span className="material-symbols-outlined text-cta text-3xl group-hover:scale-110 transition-transform">oil_barrel</span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400">Upstream, midstream, and downstream integrity solutions.</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-xl transition-all p-6 hover:-translate-y-1 group border-b-4 border-transparent hover:border-cta">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-lg text-slate-800 dark:text-white">Petrochemical</h3>
                <span className="material-symbols-outlined text-cta text-3xl group-hover:scale-110 transition-transform">science</span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400">Refinery maintenance and specialized chemical processing support.</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-xl transition-all p-6 hover:-translate-y-1 group border-b-4 border-transparent hover:border-cta">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-lg text-slate-800 dark:text-white">Construction</h3>
                <span className="material-symbols-outlined text-cta text-3xl group-hover:scale-110 transition-transform">construction</span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400">Structural integrity and heavy civil engineering projects.</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-xl transition-all p-6 hover:-translate-y-1 group border-b-4 border-transparent hover:border-cta">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-lg text-slate-800 dark:text-white">Telecom</h3>
                <span className="material-symbols-outlined text-cta text-3xl group-hover:scale-110 transition-transform">cell_tower</span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400">Tower maintenance and infrastructure development.</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-xl transition-all p-6 hover:-translate-y-1 group border-b-4 border-transparent hover:border-cta">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-lg text-slate-800 dark:text-white">Power & Energy</h3>
                <span className="material-symbols-outlined text-cta text-3xl group-hover:scale-110 transition-transform">solar_power</span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400">Renewable energy installations and power plant maintenance.</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-xl transition-all p-6 hover:-translate-y-1 group border-b-4 border-transparent hover:border-cta">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-lg text-slate-800 dark:text-white">Mining</h3>
                <span className="material-symbols-outlined text-cta text-3xl group-hover:scale-110 transition-transform">diamond</span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400">Equipment procurement and operational safety systems.</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-xl transition-all p-6 hover:-translate-y-1 group border-b-4 border-transparent hover:border-cta">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-lg text-slate-800 dark:text-white">Marine</h3>
                <span className="material-symbols-outlined text-cta text-3xl group-hover:scale-110 transition-transform">anchor</span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400">Offshore vessel support and dockside engineering.</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-xl transition-all p-6 hover:-translate-y-1 group border-b-4 border-transparent hover:border-cta">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-lg text-slate-800 dark:text-white">Public Service</h3>
                <span className="material-symbols-outlined text-cta text-3xl group-hover:scale-110 transition-transform">public</span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400">Government infrastructure and utility grid modernization.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner With TRTEL */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-cta to-secondary rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-slate-900">
                <img alt="Engineering site work" className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdQUmZ06EIVb18Tg513rP9fTzNmKT_CdHDc3jhkC11acnTddY8RdWllwbFpLYdYKxULxGJ0lMfco-memgB9HjRyKAhMoAEkH_c_YqBs2kLn2rjGyqqB67Nj-C0a9p-AIAhOiYatyfzD5KRauC7-Rbw_ckSdWYRs-XIgaxpREFR0W_qybJUTQDLeWmcq9GSW2EsMKISQjfo0fVrBjIAQvGCEklyGW6tQkSGeb-7cswdHyLlhIQjvPLK6ibh8SJgs0C75MyMCDWEZBw"/>
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 bg-cta hover:bg-white text-white hover:text-cta rounded-full flex items-center justify-center shadow-lg transition-all transform hover:scale-110">
                    <span className="material-symbols-outlined text-5xl ml-1">play_arrow</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="space-y-10">
              <h2 className="font-display text-4xl font-black text-slate-900 dark:text-white">Why Partner With <span className="text-cta">TRTEL</span>?</h2>
              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-orange-100 dark:bg-slate-800 flex items-center justify-center text-cta shadow-sm">
                    <span className="material-symbols-outlined text-3xl">verified</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Local Content Champion</h4>
                    <p className="text-slate-600 dark:text-slate-400">Deeply rooted in Nigeria with a commitment to developing local talent and resources while meeting global standards.</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-orange-100 dark:bg-slate-800 flex items-center justify-center text-cta shadow-sm">
                    <span className="material-symbols-outlined text-3xl">engineering</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Technical Superiority</h4>
                    <p className="text-slate-600 dark:text-slate-400">Our team consists of COREN certified engineers utilizing state-of-the-art software and diagnostic tools.</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-orange-100 dark:bg-slate-800 flex items-center justify-center text-cta shadow-sm">
                    <span className="material-symbols-outlined text-3xl">handshake</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Integrity-First Approach</h4>
                    <p className="text-slate-600 dark:text-slate-400">Transparent project management and ethical procurement practices are the bedrock of our client relationships.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Industry Leaders (Marquee) */}
      <section className="py-12 bg-slate-50 dark:bg-black/20 border-y border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-8">
          <p className="text-center text-sm font-bold uppercase tracking-widest text-slate-400">Trusted By Industry Leaders</p>
        </div>
        <div className="relative w-full overflow-hidden">
          <div className="flex w-[200%] animate-scroll">
            <div className="flex w-1/2 justify-around items-center px-10 gap-12">
              <div className="text-2xl font-black text-slate-300 dark:text-slate-600">SHELL</div>
              <div className="text-2xl font-black text-slate-300 dark:text-slate-600">CHEVRON</div>
              <div className="text-2xl font-black text-slate-300 dark:text-slate-600">TOTAL</div>
              <div className="text-2xl font-black text-slate-300 dark:text-slate-600">EXXON</div>
              <div className="text-2xl font-black text-slate-300 dark:text-slate-600">NLNG</div>
              <div className="text-2xl font-black text-slate-300 dark:text-slate-600">SEPLAT</div>
            </div>
            <div className="flex w-1/2 justify-around items-center px-10 gap-12">
              <div className="text-2xl font-black text-slate-300 dark:text-slate-600">SHELL</div>
              <div className="text-2xl font-black text-slate-300 dark:text-slate-600">CHEVRON</div>
              <div className="text-2xl font-black text-slate-300 dark:text-slate-600">TOTAL</div>
              <div className="text-2xl font-black text-slate-300 dark:text-slate-600">EXXON</div>
              <div className="text-2xl font-black text-slate-300 dark:text-slate-600">NLNG</div>
              <div className="text-2xl font-black text-slate-300 dark:text-slate-600">SEPLAT</div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-24 bg-white dark:bg-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl font-black text-center text-slate-900 dark:text-white mb-16">Client Testimonials</h2>
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 scrollbar-hide">
            <div className="snap-center shrink-0 w-full md:w-[400px] bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700">
              <div className="flex text-cta mb-4">
                <span className="material-symbols-outlined text-sm">star</span>
                <span className="material-symbols-outlined text-sm">star</span>
                <span className="material-symbols-outlined text-sm">star</span>
                <span className="material-symbols-outlined text-sm">star</span>
                <span className="material-symbols-outlined text-sm">star</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 italic mb-6">"TRTEL delivered our pipeline integrity project ahead of schedule with zero safety incidents. Their attention to detail is unmatched in the region."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center font-bold text-slate-500">JD</div>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white text-sm">John Doe</p>
                  <p className="text-xs text-slate-500">Project Lead, Shell Nigeria</p>
                </div>
              </div>
            </div>
            <div className="snap-center shrink-0 w-full md:w-[400px] bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700">
              <div className="flex text-cta mb-4">
                <span className="material-symbols-outlined text-sm">star</span>
                <span className="material-symbols-outlined text-sm">star</span>
                <span className="material-symbols-outlined text-sm">star</span>
                <span className="material-symbols-outlined text-sm">star</span>
                <span className="material-symbols-outlined text-sm">star</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 italic mb-6">"Exceptional procurement services. They managed to source critical obsolete parts that kept our plant running during a crucial period."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center font-bold text-slate-500">AS</div>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white text-sm">Amina S.</p>
                  <p className="text-xs text-slate-500">Procurement Manager, Dangote</p>
                </div>
              </div>
            </div>
            <div className="snap-center shrink-0 w-full md:w-[400px] bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700">
              <div className="flex text-cta mb-4">
                <span className="material-symbols-outlined text-sm">star</span>
                <span className="material-symbols-outlined text-sm">star</span>
                <span className="material-symbols-outlined text-sm">star</span>
                <span className="material-symbols-outlined text-sm">star</span>
                <span className="material-symbols-outlined text-sm">star</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 italic mb-6">"Their cathodic protection team is world-class. We have seen a significant reduction in corrosion-related maintenance costs."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center font-bold text-slate-500">EM</div>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white text-sm">Emeka M.</p>
                  <p className="text-xs text-slate-500">Facility Manager, Total Energies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Elevate Your Project Standards? (CTA) */}
      <section className="py-24 relative overflow-hidden bg-cta" id="contact">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute inset-y-0 left-0 w-1/2 bg-white/5 skew-x-12 transform origin-top-left"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white text-cta mb-8 shadow-lg">
            <span className="material-symbols-outlined text-4xl">rocket_launch</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-black text-white mb-6">Ready to Elevate Your Project Standards?</h2>
          <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-medium">Contact our engineering team today for a consultation on your next asset integrity or procurement project.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-cta hover:bg-slate-100 font-bold py-4 px-10 rounded shadow-xl transition-transform transform hover:-translate-y-1 text-lg">
              Request Consultation
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-4 px-10 rounded transition-colors text-lg">
              Download Corporate Profile
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;