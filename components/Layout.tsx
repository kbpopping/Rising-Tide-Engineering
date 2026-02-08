
import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

const Layout: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const isServicesActive = location.pathname.includes('/services');

  // Initialize Dark Mode based on system preference or storage
  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  const services = [
    { name: "Asset Integrity Management", path: "/services/asset-integrity" },
    { name: "Corrosion Control Engineering", path: "/services/corrosion" },
    { name: "Non-Destructive Testing (NDT)", path: "/services/ndt" },
    { name: "Piping Fabrication & Installation", path: "/services/piping" },
    { name: "Thermal Insulation Solutions", path: "/services/thermal-insulation" },
  ];

  const whatsappMessage = encodeURIComponent("Hello Rising Tide Engineering, I would like to make an inquiry about your services.");
  const whatsappLink = `https://wa.me/2348001234567?text=${whatsappMessage}`;

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-white transition-colors duration-300">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800 shadow-sm transition-colors duration-300">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 h-16 md:h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src="https://i.imgur.com/QS3vOiN.png" 
              alt="Rising Tide Engineering Logo" 
              className="h-10 md:h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
            />
            <h2 className="font-display text-xl md:text-2xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white hidden sm:block">
              The Rising Tide Engineering
            </h2>
            <h2 className="font-display text-xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white sm:hidden">RTE</h2>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 h-full">
            <div className="flex items-center gap-6 h-full">
              <Link to="/" className={`text-base font-bold hover:text-safety transition-colors ${isActive('/') ? 'text-primary' : 'text-slate-700 dark:text-slate-200'}`}>Home</Link>
              
              {/* Services Dropdown */}
              <div className="relative group h-full flex items-center">
                <Link 
                  to="/services/piping" 
                  className={`flex items-center gap-1 text-base font-bold hover:text-safety transition-colors ${isServicesActive ? 'text-primary' : 'text-slate-700 dark:text-slate-200'}`}
                >
                  Services 
                  <span className="material-symbols-outlined text-base pt-0.5 group-hover:rotate-180 transition-transform duration-200">expand_more</span>
                </Link>
                
                {/* Dropdown Panel */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-0 hidden group-hover:block w-72">
                  <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 overflow-hidden py-2 mt-2">
                    {services.map((service, index) => (
                      <Link 
                        key={index}
                        to={service.path} 
                        className="block px-5 py-3 text-base font-bold text-slate-600 dark:text-slate-300 hover:bg-orange-50 dark:hover:bg-slate-700 hover:text-safety transition-colors border-b last:border-0 border-slate-50 dark:border-slate-700"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link to="/about" className={`text-base font-bold hover:text-safety transition-colors ${isActive('/about') ? 'text-primary' : 'text-slate-700 dark:text-slate-200'}`}>About Us</Link>
              <Link to="/projects" className={`text-base font-bold hover:text-safety transition-colors ${isActive('/projects') ? 'text-primary' : 'text-slate-700 dark:text-slate-200'}`}>Projects</Link>
              <Link to="/blog" className={`text-base font-bold hover:text-safety transition-colors ${isActive('/blog') ? 'text-primary' : 'text-slate-700 dark:text-slate-200'}`}>Blog</Link>
              <Link to="/contact" className={`text-base font-bold hover:text-safety transition-colors ${isActive('/contact') ? 'text-primary' : 'text-slate-700 dark:text-slate-200'}`}>Contact</Link>
            </div>
            
            {/* Dark Mode Toggle */}
            <button 
              onClick={toggleDarkMode} 
              className="p-2 rounded-full text-slate-600 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-800 transition-all duration-300 transform hover:scale-110 active:rotate-180"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? (
                <span className="material-symbols-outlined fill-current">light_mode</span>
              ) : (
                <span className="material-symbols-outlined fill-current text-slate-800">dark_mode</span>
              )}
            </button>

            <Link to="/contact" className="bg-safety hover:bg-orange-700 text-white text-base font-bold px-6 py-3 rounded-lg transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Request Quote
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 md:gap-4 lg:hidden">
             {/* Dark Mode Toggle Mobile */}
             <button 
              onClick={toggleDarkMode} 
              className="p-2 rounded-full text-slate-600 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-800 transition-all duration-300"
            >
              {isDarkMode ? (
                <span className="material-symbols-outlined fill-current text-xl md:text-2xl">light_mode</span>
              ) : (
                <span className="material-symbols-outlined fill-current text-slate-800 text-xl md:text-2xl">dark_mode</span>
              )}
            </button>
            <button 
              className="text-primary dark:text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="material-symbols-outlined text-3xl">menu</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 max-h-[calc(100vh-64px)] overflow-y-auto overscroll-contain">
            <div className="flex flex-col p-6 gap-6 pb-20">
              <Link to="/" className="text-lg font-bold text-slate-700 dark:text-slate-300 hover:text-safety" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              
              <div className="flex flex-col">
                <button 
                  className="flex items-center justify-between text-lg font-bold text-slate-700 dark:text-slate-300 hover:text-safety w-full"
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                >
                  Services
                  <span className={`material-symbols-outlined text-base transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`}>expand_more</span>
                </button>
                {isMobileServicesOpen && (
                  <div className="pl-4 mt-3 flex flex-col gap-4 border-l-2 border-slate-100 dark:border-slate-700 ml-1">
                    {services.map((service, index) => (
                      <Link 
                        key={index}
                        to={service.path} 
                        className="text-base font-medium text-slate-600 dark:text-slate-400 hover:text-safety"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link to="/about" className="text-lg font-bold text-slate-700 dark:text-slate-300 hover:text-safety" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
              <Link to="/projects" className="text-lg font-bold text-slate-700 dark:text-slate-300 hover:text-safety" onClick={() => setIsMobileMenuOpen(false)}>Projects</Link>
              <Link to="/blog" className="text-lg font-bold text-slate-700 dark:text-slate-300 hover:text-safety" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
              <Link to="/contact" className="text-lg font-bold text-slate-700 dark:text-slate-300 hover:text-safety" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
              <Link to="/contact" className="bg-safety text-white text-lg font-bold px-4 py-4 rounded-lg w-full mt-4 text-center shadow-lg" onClick={() => setIsMobileMenuOpen(false)}>Request Quote</Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white pt-16 pb-8 border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 font-display font-bold text-xl">
                <img 
                  src="https://i.imgur.com/QS3vOiN.png" 
                  alt="Rising Tide Engineering Logo" 
                  className="h-10 w-auto object-contain bg-white rounded-md p-1"
                />
                The Rising Tide
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                Pioneering engineering solutions for a complex world. We build the infrastructure that powers tomorrow.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                {services.slice(0, 4).map((service, index) => (
                  <li key={index}><Link to={service.path} className="hover:text-white transition-colors">{service.name}</Link></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/projects" className="hover:text-white transition-colors">Global Projects</Link></li>
                <li><Link to="/blog" className="hover:text-white transition-colors">Insights Blog</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Contact</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-safety text-lg mt-0.5">location_on</span>
                  <span>123 Industrial Parkway, Suite 400<br/>Houston, TX 77002</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-safety text-lg">phone</span>
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-safety text-lg">mail</span>
                  <span>info@risingtide-eng.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-400">© 2024 The Rising Tide Engineering. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><span className="material-symbols-outlined">public</span></a> 
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><span className="material-symbols-outlined">share</span></a> 
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={whatsappLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex items-center justify-center group animate-bounce-interval"
      >
        <div className="hidden md:block absolute right-full mr-4 bg-white dark:bg-gray-800 text-slate-800 dark:text-white text-xs font-bold px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Send Us a Chat
          <div className="absolute top-1/2 -right-1 -mt-1 w-2 h-2 bg-white dark:bg-gray-800 transform rotate-45"></div>
        </div>
        <div className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl hover:scale-110 transition-transform hover:shadow-2xl">
          <svg className="h-6 w-6 md:h-8 md:w-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
          </svg>
        </div>
      </a>
    </div>
  );
};

export default Layout;
