import React from 'react';
import { Link } from 'react-router-dom';
import { teamData } from '../data/teamData';

const About: React.FC = () => {
  const founders = teamData.filter(m => m.isFounder);
  const leadership = teamData.filter(m => !m.isFounder);

  return (
    <div className="w-full">
      <header className="relative bg-slate-900 overflow-hidden min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img alt="Engineering blueprints" className="w-full h-full object-cover brightness-[0.3]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKijPCuelALYDWkoWrUqBcJBR5jhoA5oV14wTMwCfEx8iZEULhCiBMwy0ZzBjxbjMPjRMJKuqf213TN-LiizpoSXFx_ZmNh8gT4l1AA2YJTkUtnotwb54TeD6DfZtagc5wjPd-aRLPTwvA_1j71wDsvTvZX5b1CLZ-JNe3SU0sVv5r9zUvmMngwgruc0qBlTiIwvcHYl6J0Fo1BxcdJ6UrF9VMZ3rYp7RKeVtOIv_a8cRGixRRmFT-u45n9NiSKNGrCYiDig_8l1Y"/>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative z-10">
          <div className="max-w-3xl animate-fade-in-up">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-secondary uppercase bg-white/10 backdrop-blur rounded-full border border-white/20">Established 2010</span>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Pioneering Engineering Excellence in Nigeria
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light animate-fade-in-up-delay-1">
              The Rising Tide Engineering Ltd. delivers world-class infrastructure solutions, blending local expertise with global standards.
            </p>
          </div>
        </div>
      </header>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <span className="material-symbols-outlined text-4xl">track_changes</span>
              </div>
              <h3 className="font-display text-3xl font-bold text-slate-900 mb-6">Our Mission</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                To provide innovative, sustainable, and cost-effective engineering solutions that meet the unique needs of the Nigerian energy and infrastructure sectors.
              </p>
            </div>
            <div className="group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-8 text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                <span className="material-symbols-outlined text-4xl">visibility</span>
              </div>
              <h3 className="font-display text-3xl font-bold text-slate-900 mb-6">Our Vision</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                To be the premier engineering consultancy in West Africa, recognized for our commitment to excellence, integrity, and community development.
              </p>
            </div>
            <div className="group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <span className="material-symbols-outlined text-4xl">diamond</span>
              </div>
              <h3 className="font-display text-3xl font-bold text-slate-900 mb-6">Core Values</h3>
              <ul className="text-slate-600 space-y-4 text-lg">
                <li className="flex items-center"><span className="w-2.5 h-2.5 bg-secondary rounded-full mr-3"></span>Integrity & Transparency</li>
                <li className="flex items-center"><span className="w-2.5 h-2.5 bg-secondary rounded-full mr-3"></span>Safety First</li>
                <li className="flex items-center"><span className="w-2.5 h-2.5 bg-secondary rounded-full mr-3"></span>Innovation & Technical Rigour</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
              <div className="grid grid-cols-2 gap-6 relative">
                {founders.map((founder, idx) => (
                  <div key={idx} className={`${idx === 1 ? 'pt-12' : 'space-y-6'}`}>
                    <Link to={`/about/team/${founder.id}`} className="block group cursor-pointer">
                      <div className="overflow-hidden rounded-2xl shadow-2xl aspect-[3/4] relative">
                          <img alt={founder.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={founder.img}/>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                              <p className="text-white text-sm font-medium">{founder.shortBio}</p>
                          </div>
                          {/* Spin Effect Overlay */}
                          <div className="absolute inset-0 bg-white/20 opacity-0 group-active:opacity-100 transition-opacity duration-100"></div>
                      </div>
                      <div className="p-6 bg-white rounded-2xl shadow-xl border border-slate-100 mt-6 relative z-10 transition-transform duration-300 group-hover:-translate-y-2">
                        <h4 className="font-display font-bold text-xl text-slate-900 group-hover:text-primary transition-colors">{founder.name}</h4>
                        <div className="flex items-center gap-3 mt-1">
                            <p className="text-secondary font-medium">{founder.role}</p>
                            <div className="flex gap-2">
                                <a href={founder.socials.linkedin} onClick={(e) => e.stopPropagation()} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-[#0077b5] transition-colors">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                </a>
                                <a href={founder.socials.twitter} onClick={(e) => e.stopPropagation()} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-black transition-colors">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                                </a>
                                <a href={founder.socials.facebook} onClick={(e) => e.stopPropagation()} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-[#4267B2] transition-colors">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                                </a>
                            </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <span className="text-secondary font-bold uppercase tracking-widest text-sm inline-block mb-4">Leadership & Heritage</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-8">The Founders' Story</h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  The Rising Tide Engineering was born from a shared vision between two seasoned engineers who saw the gap in Nigeria's infrastructure capabilities. Founded in Port Harcourt, the company started as a boutique consultancy and has since grown into a powerhouse for civil, electrical, and mechanical engineering.
                </p>
                <p>
                  Our founders believe that local engineering challenges require local understanding combined with international technical rigour. This philosophy guides every project we undertake, ensuring resilience and sustainability.
                </p>
                <p>
                  From the oil fields of the South to the rising solar arrays in the North, we are engineering the future of West Africa.
                </p>
              </div>
              <div className="mt-10">
                <Link to="/about/history" className="inline-flex items-center text-primary font-bold text-lg group">
                  Explore our history 
                  <span className="material-symbols-outlined ml-2 group-hover:translate-x-2 transition-transform">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-secondary font-bold uppercase tracking-widest text-sm inline-block mb-4">Executive Leadership</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900">Driving Our Vision Forward</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((member, index) => (
              <Link to={`/about/team/${member.id}`} key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 cursor-pointer block">
                <div className="h-80 overflow-hidden relative">
                    <img 
                        src={member.img} 
                        alt={member.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <p className="text-white text-sm font-medium">{member.shortBio}</p>
                    </div>
                </div>
                <div className="p-6 relative bg-white">
                  <h3 className="font-display text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">{member.name}</h3>
                  <div className="flex flex-col gap-2 mt-1">
                    <p className="text-secondary font-medium text-sm">{member.role}</p>
                    <div className="flex gap-3 mt-1">
                        <object className="inline-block pointer-events-none">
                            <div className="flex gap-3 pointer-events-auto">
                                <a href={member.socials.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-[#0077b5] transition-colors">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                </a>
                                <a href={member.socials.twitter} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-black transition-colors">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                                </a>
                                <a href={member.socials.facebook} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-[#4267B2] transition-colors">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                                </a>
                            </div>
                        </object>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Footprint */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:space-x-20">
            <div className="lg:w-2/5 mb-16 lg:mb-0">
              <span className="text-secondary font-bold uppercase tracking-widest text-sm inline-block mb-4">Strategic Footprint</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-8">Nationwide Service, Port Harcourt Roots</h2>
              <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                Headquartered in the oil-rich city of Port Harcourt, our operations span across the Niger Delta and into the northern regions. We are strategically positioned to deploy rapid response teams for critical infrastructure maintenance.
              </p>
              <div className="space-y-8">
                <div className="flex items-start space-x-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-xl text-gray-900 mb-1">Headquarters</h5>
                    <p className="text-gray-500">14 Trans Amadi Industrial Layout, Port Harcourt, Rivers State.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">public</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-xl text-gray-900 mb-1">Project Sites</h5>
                    <p className="text-gray-500">Active operations in Lagos, Abuja, Warri, and Kano.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-3/5">
              <div className="relative w-full aspect-square md:aspect-video bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                <div className="absolute inset-0 flex items-center justify-center opacity-40">
                  <img alt="Map of Nigeria" className="h-[90%] object-contain grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiGr2-HacRfJ7HsjtAjeEj392VV-xnIpopzNKUz2Kb3B_ZoBG3O_9LI1sPRKa4bcDr1Y2KBU-Zmn8Tt2iah2gTBpp3aVBT1tig7MNcZQOuY8C2O9yLkKklFVOAGxm1lFG2wljbuFqYdjJObhswnvtdo7iYr1mbkri0ErYHJ5xBqEspFBhzLP0xosbSlVcyAJLQ3_54QRZK32Iou5fJf9amUqpEfAV6xI_x0ce3SVIgJ4EWXNldNJBVBzaihCBBfTv9y7unYHohuL0"/>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <span className="absolute inline-flex h-12 w-12 rounded-full bg-secondary opacity-25 animate-ping"></span>
                    <span className="relative inline-flex rounded-full h-5 w-5 bg-secondary border-4 border-white shadow-xl"></span>
                  </div>
                  <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-xl shadow-2xl text-sm font-bold whitespace-nowrap text-gray-800 border border-gray-100">
                    Port Harcourt HQ
                  </div>
                </div>
                <div className="absolute bottom-8 right-8">
                  <div className="bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl border border-white/50 flex items-center space-x-3">
                    <div className="flex -space-x-3">
                      <div className="w-8 h-8 rounded-full bg-primary border-2 border-white"></div>
                      <div className="w-8 h-8 rounded-full bg-secondary border-2 border-white"></div>
                      <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white flex items-center justify-center text-[10px] text-white font-bold">+12</div>
                    </div>
                    <span className="text-sm font-bold text-gray-900">Active Regional Teams</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900">Our Journey</h2>
            <p className="mt-6 text-xl text-gray-600 font-light">Major milestones that define our legacy in West African engineering.</p>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
            <div className="space-y-24">
              {/* 2010 */}
              <div className="relative flex flex-col md:flex-row items-center justify-between group">
                <div className="md:w-[45%] order-2 md:order-1 text-center md:text-right group-hover:-translate-x-2 transition-transform duration-500">
                  <h3 className="font-display text-4xl font-bold text-primary mb-2">2010</h3>
                  <h4 className="font-bold text-2xl text-gray-900 mb-4">Incorporation</h4>
                  <p className="text-lg text-gray-600 leading-relaxed">The Rising Tide Engineering Ltd. is officially registered in Nigeria, starting with a small team of 5 specialist engineers in Port Harcourt.</p>
                </div>
                <div className="w-6 h-6 rounded-full bg-primary border-4 border-white z-10 shadow-xl hidden md:block group-hover:scale-125 transition-transform duration-300"></div>
                <div className="md:w-[45%] order-1 md:order-2"></div>
              </div>
              {/* 2015 */}
              <div className="relative flex flex-col md:flex-row items-center justify-between group">
                <div className="md:w-[45%] order-1 md:order-1"></div>
                <div className="w-6 h-6 rounded-full bg-secondary border-4 border-white z-10 shadow-xl hidden md:block group-hover:scale-125 transition-transform duration-300"></div>
                <div className="md:w-[45%] order-2 md:order-2 text-center md:text-left group-hover:translate-x-2 transition-transform duration-500">
                  <h3 className="font-display text-4xl font-bold text-secondary mb-2">2015</h3>
                  <h4 className="font-bold text-2xl text-gray-900 mb-4">Major Energy Partnership</h4>
                  <p className="text-lg text-gray-600 leading-relaxed">Secured first major pipeline maintenance contract with an international oil company, establishing our technical leadership in the Niger Delta.</p>
                </div>
              </div>
              {/* 2018 */}
              <div className="relative flex flex-col md:flex-row items-center justify-between group">
                <div className="md:w-[45%] order-2 md:order-1 text-center md:text-right group-hover:-translate-x-2 transition-transform duration-500">
                  <h3 className="font-display text-4xl font-bold text-primary mb-2">2018</h3>
                  <h4 className="font-bold text-2xl text-gray-900 mb-4">Renewable Expansion</h4>
                  <p className="text-lg text-gray-600 leading-relaxed">Diversified portfolio to include large-scale solar power grid designs for rural and urban communities in Northern Nigeria.</p>
                </div>
                <div className="w-6 h-6 rounded-full bg-primary border-4 border-white z-10 shadow-xl hidden md:block group-hover:scale-125 transition-transform duration-300"></div>
                <div className="md:w-[45%] order-1 md:order-2"></div>
              </div>
              {/* Present */}
              <div className="relative flex flex-col md:flex-row items-center justify-between group">
                <div className="md:w-[45%] order-1 md:order-1"></div>
                <div className="w-6 h-6 rounded-full bg-secondary border-4 border-white z-10 shadow-xl hidden md:block group-hover:scale-125 transition-transform duration-300"></div>
                <div className="md:w-[45%] order-2 md:order-2 text-center md:text-left group-hover:translate-x-2 transition-transform duration-500">
                  <h3 className="font-display text-4xl font-bold text-secondary mb-2">Present</h3>
                  <h4 className="font-bold text-2xl text-gray-900 mb-4">Global Standards</h4>
                  <p className="text-lg text-gray-600 leading-relaxed">Achieved ISO 9001:2015 certification and expanded workforce to over 200 skilled professionals across five regional offices.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#F97316] py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img alt="Engineering background" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAc-OdVAY6E07bTx0uLf1n-U8ZxU_YS_zvlEJqx50p4ja_nbBIxxOzouAscidMuy6sftNLrC9Dog9G9G74aX79aqQel_BAbfsTFhQNIYTpev3AjdJA6L_qRFmcEFPUMmJ_03-7ZFcSqmK_CF1iH2Rb-smI1FpoHozH5dCo1V8F0lk7dzS-p0bjaBIZcZIbVVeV6zw1IBSD8kR-TnCGLdbr4Xy-NX4PO23PGe4X-q5Mrgw6uucvXSlwOw1pc2gwTJcGUM2jGpj0e-z8"/>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 animate-fade-in-up">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-8">Ready to Build the Future?</h2>
          <p className="text-white text-xl mb-12 font-medium">
            Partner with us for engineering excellence that stands the test of time. Let's discuss your next project's potential.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact" className="bg-[#1f572a] text-white hover:bg-[#164220] font-bold py-4 px-10 rounded-xl transition-all shadow-2xl text-lg transform hover:-translate-y-1">
              Start a Conversation
            </Link>
            <Link to="/projects" className="bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white/20 font-bold py-4 px-10 rounded-xl transition-all text-lg transform hover:-translate-y-1">
              View Project Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;