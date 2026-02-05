import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

const Layout: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const isServicesActive = location.pathname.includes('/services');

  const services = [
    { name: "Asset Integrity Management", path: "/services/asset-integrity" },
    { name: "Corrosion Control Engineering", path: "/services/corrosion" },
    { name: "Non-Destructive Testing (NDT)", path: "/services/ndt" },
    { name: "Piping Fabrication & Installation", path: "/services/piping" },
    { name: "Thermal Insulation Solutions", path: "/services/thermal-insulation" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="text-primary group-hover:scale-110 transition-transform duration-300">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.8261 17.4264C16.7203 18.1174 20.2244 18.5217 24 18.5217C27.7756 18.5217 31.2797 18.1174 34.1739 17.4264C36.9144 16.7722 39.9967 15.2331 41.3563 14.1648L24.8486 40.6391C24.4571 41.267 23.5429 41.267 23.1514 40.6391L6.64374 14.1648C8.00331 15.2331 11.0856 16.7722 13.8261 17.4264Z" fill="currentColor"></path>
                <path clipRule="evenodd" d="M39.998 12.236C39.9944 12.2537 39.9875 12.2845 39.9748 12.3294C39.9436 12.4399 39.8949 12.5741 39.8346 12.7175C39.8168 12.7597 39.7989 12.8007 39.7813 12.8398C38.5103 13.7113 35.9788 14.9393 33.7095 15.4811C30.9875 16.131 27.6413 16.5217 24 16.5217C20.3587 16.5217 17.0125 16.131 14.2905 15.4811C12.0012 14.9346 9.44505 13.6897 8.18538 12.8168C8.17384 12.7925 8.16216 12.767 8.15052 12.7408C8.09919 12.6249 8.05721 12.5114 8.02977 12.411C8.00356 12.3152 8.00039 12.2667 8.00004 12.2612C8.00004 12.261 8 12.2607 8.00004 12.2612C8.00004 12.2359 8.0104 11.9233 8.68485 11.3686C9.34546 10.8254 10.4222 10.2469 11.9291 9.72276C14.9242 8.68098 19.1919 8 24 8C28.8081 8 33.0758 8.68098 36.0709 9.72276C37.5778 10.2469 38.6545 10.8254 39.3151 11.3686C39.9006 11.8501 39.9857 12.1489 39.998 12.236ZM4.95178 15.2312L21.4543 41.6973C22.6288 43.5809 25.3712 43.5809 26.5457 41.6973L43.0534 15.223C43.0709 15.1948 43.0878 15.1662 43.104 15.1371L41.3563 14.1648C43.104 15.1371 43.1038 15.1374 43.104 15.1371L43.1051 15.135L43.1065 15.1325L43.1101 15.1261L43.1199 15.1082C43.1276 15.094 43.1377 15.0754 43.1497 15.0527C43.1738 15.0075 43.2062 14.9455 43.244 14.8701C43.319 14.7208 43.4196 14.511 43.5217 14.2683C43.6901 13.8679 44 13.0689 44 12.2609C44 10.5573 43.003 9.22254 41.8558 8.2791C40.6947 7.32427 39.1354 6.55361 37.385 5.94477C33.8654 4.72057 29.133 4 24 4C18.867 4 14.1346 4.72057 10.615 5.94478C8.86463 6.55361 7.30529 7.32428 6.14419 8.27911C4.99695 9.22255 3.99999 10.5573 3.99999 12.2609C3.99999 13.1275 4.29264 13.9078 4.49321 14.3607C4.60375 14.6102 4.71348 14.8196 4.79687 14.9689C4.83898 15.0444 4.87547 15.1065 4.9035 15.1529C4.91754 15.1762 4.92954 15.1957 4.93916 15.2111L4.94662 15.223L4.95178 15.2312ZM35.9868 18.996L24 38.22L12.0131 18.996C12.4661 19.1391 12.9179 19.2658 13.3617 19.3718C16.4281 20.1039 20.0901 20.5217 24 20.5217C27.9099 20.5217 31.5719 20.1039 34.6383 19.3718C35.082 19.2658 35.5339 19.1391 35.9868 18.996Z" fill="currentColor" fillRule="evenodd"></path>
              </svg>
            </div>
            <h2 className="font-display text-lg font-bold leading-tight tracking-tight text-slate-900 hidden sm:block">
              The Rising Tide Engineering
            </h2>
            <h2 className="font-display text-lg font-bold leading-tight tracking-tight text-slate-900 sm:hidden">RTE</h2>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 h-full">
            <div className="flex items-center gap-6 h-full">
              <Link to="/" className={`text-sm font-medium hover:text-safety transition-colors ${isActive('/') ? 'text-primary' : 'text-slate-600'}`}>Home</Link>
              
              {/* Services Dropdown */}
              <div className="relative group h-full flex items-center">
                <Link 
                  to="/services/piping" 
                  className={`flex items-center gap-1 text-sm font-medium hover:text-safety transition-colors ${isServicesActive ? 'text-primary' : 'text-slate-600'}`}
                >
                  Services 
                  <span className="material-symbols-outlined text-sm pt-0.5 group-hover:rotate-180 transition-transform duration-200">expand_more</span>
                </Link>
                
                {/* Dropdown Panel */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-0 hidden group-hover:block w-72">
                  <div className="bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden py-2 mt-2">
                    {services.map((service, index) => (
                      <Link 
                        key={index}
                        to={service.path} 
                        className="block px-5 py-3 text-sm text-slate-600 hover:bg-orange-50 hover:text-safety transition-colors border-b last:border-0 border-slate-50"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link to="/about" className={`text-sm font-medium hover:text-safety transition-colors ${isActive('/about') ? 'text-primary' : 'text-slate-600'}`}>About Us</Link>
              <Link to="/projects" className={`text-sm font-medium hover:text-safety transition-colors ${isActive('/projects') ? 'text-primary' : 'text-slate-600'}`}>Projects</Link>
              <Link to="/contact" className={`text-sm font-medium hover:text-safety transition-colors ${isActive('/contact') ? 'text-primary' : 'text-slate-600'}`}>Contact</Link>
            </div>
            <Link to="/contact" className="bg-safety hover:bg-orange-700 text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Request Quote
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white max-h-[calc(100vh-80px)] overflow-y-auto">
            <div className="flex flex-col p-4 gap-4">
              <Link to="/" className="text-sm font-medium text-slate-700 hover:text-safety" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              
              <div className="flex flex-col">
                <button 
                  className="flex items-center justify-between text-sm font-medium text-slate-700 hover:text-safety w-full"
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                >
                  Services
                  <span className={`material-symbols-outlined text-sm transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`}>expand_more</span>
                </button>
                {isMobileServicesOpen && (
                  <div className="pl-4 mt-2 flex flex-col gap-3 border-l-2 border-slate-100 ml-1">
                    {services.map((service, index) => (
                      <Link 
                        key={index}
                        to={service.path} 
                        className="text-sm text-slate-500 hover:text-safety"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link to="/about" className="text-sm font-medium text-slate-700 hover:text-safety" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
              <Link to="/projects" className="text-sm font-medium text-slate-700 hover:text-safety" onClick={() => setIsMobileMenuOpen(false)}>Projects</Link>
              <Link to="/contact" className="text-sm font-medium text-slate-700 hover:text-safety" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
              <Link to="/contact" className="bg-safety text-white text-sm font-bold px-4 py-3 rounded-lg w-full mt-2 text-center" onClick={() => setIsMobileMenuOpen(false)}>Request Quote</Link>
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
                <div className="w-8 h-8 text-white">
                  <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.8261 17.4264C16.7203 18.1174 20.2244 18.5217 24 18.5217C27.7756 18.5217 31.2797 18.1174 34.1739 17.4264C36.9144 16.7722 39.9967 15.2331 41.3563 14.1648L24.8486 40.6391C24.4571 41.267 23.5429 41.267 23.1514 40.6391L6.64374 14.1648C8.00331 15.2331 11.0856 16.7722 13.8261 17.4264Z" fill="currentColor"></path>
                  </svg>
                </div>
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
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Safety Policy</a></li>
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
      <a href="#" className="fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl hover:scale-110 transition-transform hover:shadow-2xl">
        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
        </svg>
      </a>
    </div>
  );
};

export default Layout;