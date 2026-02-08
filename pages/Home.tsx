
import React, { useState, useEffect, useRef } from 'react';
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
        <div className="absolute inset-0 h-full w-full backface-hidden rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all">
           <div className="h-full bg-white dark:bg-slate-800 p-6 flex flex-col justify-between border-b-4 border-transparent hover:border-cta">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-lg text-slate-800 dark:text-white">{sector.title}</h3>
                <span className="material-symbols-outlined text-cta text-3xl group-hover:scale-110 transition-transform">{sector.icon}</span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400">{sector.desc}</p>
              <div className="mt-4 text-xs text-cta font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                Click to flip
              </div>
           </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 h-full w-full bg-slate-900 backface-hidden rotate-y-180 p-6 flex flex-col justify-center items-center text-center rounded-lg border-2 border-cta shadow-xl">
            <span className="material-symbols-outlined text-cta mb-3 text-4xl animate-bounce">{sector.icon}</span>
            <h3 className="text-xl font-bold text-white mb-2">{sector.title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed animate-fade-in-up">
              We provide specialized engineering solutions for the {sector.title} industry, ensuring operational excellence and safety.
            </p>
        </div>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  const sectors = [
    { title: "Oil & Gas", icon: "oil_barrel", desc: "Upstream, midstream, and downstream integrity solutions." },
    { title: "Petrochemical", icon: "science", desc: "Refinery maintenance and specialized chemical processing support." },
    { title: "Construction", icon: "construction", desc: "Structural integrity and heavy civil engineering projects." },
    { title: "Telecom", icon: "cell_tower", desc: "Tower maintenance and infrastructure development." },
    { title: "Power & Energy", icon: "solar_power", desc: "Renewable energy installations and power plant maintenance." },
    { title: "Mining", icon: "diamond", desc: "Equipment procurement and operational safety systems." },
    { title: "Marine", icon: "anchor", desc: "Offshore vessel support and dockside engineering." },
    { title: "Public Service", icon: "public", desc: "Government infrastructure and utility grid modernization." }
  ];

  const heroImages = [
    "https://imgur.com/pqYmHu6.jpeg",
    "https://i.imgur.com/90PGbCs.jpeg",
    "https://i.imgur.com/2UKpH6s.jpeg"
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [animateText, setAnimateText] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  // Hero Image Slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  // Intersection Observer for Hero Text Animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateText(false); // Reset to trigger re-flow
          setTimeout(() => setAnimateText(true), 10);
        } else {
          setAnimateText(false);
        }
      },
      { threshold: 0.3 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section with Animation */}
      <section ref={heroRef} className="relative h-screen min-h-[500px] md:min-h-[700px] w-full overflow-hidden bg-slate-900">
        {/* Image Slider */}
        {heroImages.map((img, index) => (
          <div 
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <img 
              src={img} 
              alt={`Engineering Slide ${index + 1}`} 
              className="w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
          </div>
        ))}
        
        <div className="relative z-20 h-full flex items-center justify-center text-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-6 md:space-y-8">
            <div className={`inline-block px-4 py-2 bg-cta text-white font-bold text-xs md:text-sm uppercase tracking-widest rounded mb-2 md:mb-4 ${animateText ? 'animate-dissolve-wobble' : 'opacity-0'}`}>
              Engineering Excellence
            </div>
            <h1 className={`font-display font-black text-4xl md:text-7xl lg:text-8xl text-white leading-tight drop-shadow-lg ${animateText ? 'animate-dissolve-wobble' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              THE RISING TIDE <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-cta to-yellow-400">ENGINEERING</span>
            </h1>
            <p className={`text-lg md:text-2xl text-slate-200 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-md ${animateText ? 'animate-dissolve-wobble' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
              Pioneering asset integrity, corrosion control, and specialized procurement for Nigeria's industrial future.
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 md:gap-6 justify-center pt-4 md:pt-8 ${animateText ? 'animate-dissolve-wobble' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
              <Link to="/services/piping" className="bg-cta hover:bg-orange-600 text-white text-base md:text-lg font-bold py-3 md:py-4 px-8 md:px-10 rounded shadow-xl hover:shadow-orange-500/40 transition-all transform hover:-translate-y-1">
                Explore Our Services
              </Link>
              <Link to="/about" className="bg-white/10 backdrop-blur-sm border-2 border-white hover:bg-white hover:text-primary text-white text-base md:text-lg font-bold py-3 md:py-4 px-8 md:px-10 rounded shadow-xl transition-all transform hover:-translate-y-1">
                View Projects
              </Link>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-6 md:bottom-10 left-0 right-0 flex justify-center gap-3 z-30">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${currentSlide === idx ? 'w-12 md:w-16 bg-cta' : 'w-3 md:w-4 bg-white/50 hover:bg-white'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary text-white py-12 md:py-16 relative overflow-hidden border-b-4 border-cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
            <div className="p-2 md:p-4">
              <div className="text-3xl md:text-5xl font-display font-black text-cta mb-2">30+</div>
              <div className="text-xs md:text-sm font-bold text-white/90 uppercase tracking-widest">Years Experience</div>
            </div>
            <div className="p-2 md:p-4">
              <div className="text-3xl md:text-5xl font-display font-black text-cta mb-2">150+</div>
              <div className="text-xs md:text-sm font-bold text-white/90 uppercase tracking-widest">Projects Done</div>
            </div>
            <div className="p-2 md:p-4">
              <div className="text-3xl md:text-5xl font-display font-black text-cta mb-2">100%</div>
              <div className="text-xs md:text-sm font-bold text-white/90 uppercase tracking-widest">Safety Record</div>
            </div>
            <div className="p-2 md:p-4">
              <div className="text-3xl md:text-5xl font-display font-black text-cta mb-2">ISO</div>
              <div className="text-xs md:text-sm font-bold text-white/90 uppercase tracking-widest">Certified</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid (Core Competencies) */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-900" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">Core Competencies</h2>
            <div className="h-1.5 w-24 bg-cta mx-auto rounded mb-6"></div>
            <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg font-medium">Delivering specialized engineering solutions tailored to unique challenges.</p>
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
      <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-800/50 relative" id="sectors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">Sector Applications</h2>
            <div className="h-1.5 w-24 bg-cta mx-auto rounded"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map((sector, index) => (
              <SectorCard key={index} sector={sector} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner With TRTEL */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Video Section */}
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-cta to-secondary rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-slate-900 border border-slate-800">
                {!showVideo ? (
                  <>
                    <img 
                      alt="Engineering site work" 
                      className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" 
                      src="https://img.youtube.com/vi/UV0mhY2Dxr0/maxresdefault.jpg"
                      loading="lazy" 
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <button 
                        onClick={() => setShowVideo(true)}
                        className="w-16 h-16 md:w-20 md:h-20 bg-cta hover:bg-white text-white hover:text-cta rounded-full flex items-center justify-center shadow-lg transition-all transform hover:scale-110 hover:rotate-12"
                        aria-label="Play Video"
                      >
                        <span className="material-symbols-outlined text-4xl md:text-5xl ml-1">play_arrow</span>
                      </button>
                    </div>
                    <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded text-white text-xs font-bold flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm text-safety">timer</span> PREVIEW: 60s
                    </div>
                  </>
                ) : (
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/UV0mhY2Dxr0?autoplay=1&mute=1" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                )}
              </div>
              {showVideo && (
                <div className="flex justify-center mt-6 animate-fade-in-up">
                    <a 
                        href="https://youtu.be/UV0mhY2Dxr0" 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex items-center gap-2 bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-6 py-3 rounded-full shadow-lg border border-slate-200 dark:border-slate-700 hover:border-cta hover:text-cta transition-all transform hover:-translate-y-0.5 font-bold text-sm group"
                    >
                        <span className="material-symbols-outlined text-cta">smart_display</span>
                        Watch Full Video on YouTube
                        <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">open_in_new</span>
                    </a>
                </div>
              )}
            </div>

            {/* Text Content */}
            <div className="space-y-8 md:space-y-10">
              <h2 className="font-display text-3xl md:text-4xl font-black text-slate-900 dark:text-white">Why Partner With <span className="text-cta">TRTEL</span>?</h2>
              <div className="space-y-6 md:space-y-8">
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-orange-100 dark:bg-slate-800 flex items-center justify-center text-cta shadow-sm">
                    <span className="material-symbols-outlined text-2xl md:text-3xl">verified</span>
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-2">Local Content Champion</h4>
                    <p className="text-sm md:text-base text-slate-600 dark:text-slate-400">Deeply rooted in Nigeria with a commitment to developing local talent and resources while meeting global standards.</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-orange-100 dark:bg-slate-800 flex items-center justify-center text-cta shadow-sm">
                    <span className="material-symbols-outlined text-2xl md:text-3xl">engineering</span>
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-2">Technical Superiority</h4>
                    <p className="text-sm md:text-base text-slate-600 dark:text-slate-400">Our team consists of COREN certified engineers utilizing state-of-the-art software and diagnostic tools.</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-orange-100 dark:bg-slate-800 flex items-center justify-center text-cta shadow-sm">
                    <span className="material-symbols-outlined text-2xl md:text-3xl">handshake</span>
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-2">Integrity-First Approach</h4>
                    <p className="text-sm md:text-base text-slate-600 dark:text-slate-400">Transparent project management and ethical procurement practices are the bedrock of our client relationships.</p>
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
          <div className="flex w-[200%] animate-scroll will-change-transform">
            <div className="flex w-1/2 justify-around items-center px-4 md:px-10 gap-8 md:gap-12">
              <div className="text-xl md:text-2xl font-black text-slate-300 dark:text-slate-600">SHELL</div>
              <div className="text-xl md:text-2xl font-black text-slate-300 dark:text-slate-600">CHEVRON</div>
              <div className="text-xl md:text-2xl font-black text-slate-300 dark:text-slate-600">TOTAL</div>
              <div className="text-xl md:text-2xl font-black text-slate-300 dark:text-slate-600">EXXON</div>
              <div className="text-xl md:text-2xl font-black text-slate-300 dark:text-slate-600">NLNG</div>
              <div className="text-xl md:text-2xl font-black text-slate-300 dark:text-slate-600">SEPLAT</div>
            </div>
            <div className="flex w-1/2 justify-around items-center px-4 md:px-10 gap-8 md:gap-12">
              <div className="text-xl md:text-2xl font-black text-slate-300 dark:text-slate-600">SHELL</div>
              <div className="text-xl md:text-2xl font-black text-slate-300 dark:text-slate-600">CHEVRON</div>
              <div className="text-xl md:text-2xl font-black text-slate-300 dark:text-slate-600">TOTAL</div>
              <div className="text-xl md:text-2xl font-black text-slate-300 dark:text-slate-600">EXXON</div>
              <div className="text-xl md:text-2xl font-black text-slate-300 dark:text-slate-600">NLNG</div>
              <div className="text-xl md:text-2xl font-black text-slate-300 dark:text-slate-600">SEPLAT</div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-black text-center text-slate-900 dark:text-white mb-12 md:mb-16">Client Testimonials</h2>
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 scrollbar-hide">
            <div className="snap-center shrink-0 w-[85vw] md:w-[400px] bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700">
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
            <div className="snap-center shrink-0 w-[85vw] md:w-[400px] bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700">
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
            <div className="snap-center shrink-0 w-[85vw] md:w-[400px] bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700">
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
      <section className="py-16 md:py-24 relative overflow-hidden bg-cta" id="contact">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute inset-y-0 left-0 w-1/2 bg-white/5 skew-x-12 transform origin-top-left"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-white text-cta mb-6 md:mb-8 shadow-lg">
            <span className="material-symbols-outlined text-3xl md:text-4xl">rocket_launch</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-black text-white mb-6">Ready to Elevate Your Project Standards?</h2>
          <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-medium">Contact our engineering team today for a consultation on your next asset integrity or procurement project.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-cta hover:bg-slate-100 font-bold py-4 px-10 rounded shadow-xl transition-all transform hover:-translate-y-1 text-lg hover:shadow-[0_0_25px_rgba(255,255,255,0.6)]">
              Request Consultation
            </Link>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-4 px-10 rounded transition-all text-lg hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]">
              Download Corporate Profile
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
