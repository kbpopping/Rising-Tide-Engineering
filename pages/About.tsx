import React from 'react';

const About: React.FC = () => {
  return (
    <div className="w-full">
      <header className="relative bg-slate-900 overflow-hidden min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img alt="Engineering blueprints" className="w-full h-full object-cover brightness-[0.3]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKijPCuelALYDWkoWrUqBcJBR5jhoA5oV14wTMwCfEx8iZEULhCiBMwy0ZzBjxbjMPjRMJKuqf213TN-LiizpoSXFx_ZmNh8gT4l1AA2YJTkUtnotwb54TeD6DfZtagc5wjPd-aRLPTwvA_1j71wDsvTvZX5b1CLZ-JNe3SU0sVv5r9zUvmMngwgruc0qBlTiIwvcHYl6J0Fo1BxcdJ6UrF9VMZ3rYp7RKeVtOIv_a8cRGixRRmFT-u45n9NiSKNGrCYiDig_8l1Y"/>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-secondary uppercase bg-white/10 backdrop-blur rounded-full border border-white/20">Established 2010</span>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Pioneering Engineering Excellence in Nigeria
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light">
              The Rising Tide Engineering Ltd. delivers world-class infrastructure solutions, blending local expertise with global standards.
            </p>
          </div>
        </div>
      </header>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <span className="material-symbols-outlined text-4xl">track_changes</span>
              </div>
              <h3 className="font-display text-3xl font-bold text-slate-900 mb-6">Our Mission</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                To provide innovative, sustainable, and cost-effective engineering solutions that meet the unique needs of the Nigerian energy and infrastructure sectors.
              </p>
            </div>
            <div className="group">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-8 text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                <span className="material-symbols-outlined text-4xl">visibility</span>
              </div>
              <h3 className="font-display text-3xl font-bold text-slate-900 mb-6">Our Vision</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                To be the premier engineering consultancy in West Africa, recognized for our commitment to excellence, integrity, and community development.
              </p>
            </div>
            <div className="group">
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

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
              <div className="grid grid-cols-2 gap-6 relative">
                <div className="space-y-6">
                  <img alt="Engr. Tunde Okafor" className="rounded-2xl shadow-2xl aspect-[3/4] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQRYeDjD5hnCqWTuAdAckU7qOSkSbikLD2IFsp-OBV07KdbNSJnO_R9scnqV-uQyQ4Ef4jD2x6gcZ-JVRtfud__8lhUU5Luz4JTU1lVVOYhgLVdL271NetJsOBoVg97U8_HiGGaZHCUA8NUE7om1CfJqm3q7c4KjnIGwclKMEOQ3I-4Z4e4AF4CNFZ_PySgsyLv6MmoAYBJOcuRXIrq-wV-wqXrhJykRKOKFjcvZJ0VSadHXD6zU0nVv4WZhSkvw0-pmN_WD5xsFk"/>
                  <div className="p-6 bg-white rounded-2xl shadow-xl border border-slate-100">
                    <h4 className="font-display font-bold text-xl text-slate-900">Engr. Tunde Okafor</h4>
                    <p className="text-secondary font-medium">CEO & Founder</p>
                  </div>
                </div>
                <div className="space-y-6 pt-12">
                  <img alt="Engr. Amara Diop" className="rounded-2xl shadow-2xl aspect-[3/4] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTSdgAWXIJpr2HHl5cjcpk5Ah_sxmGqan6EO7l0ghOA1kSz0DhBNAWep3YlJzpgFvqd45CZ-UceVRwwb3_wqOWPwCJm2UMwr3tCgAW-NxLTXcf0jR8T6XislsRqi6wHNHY8UqpimIIv0DBs75XcTCYtyr0oILu1_zTbSVmzfd9yWyvvJkh1hcxu2xHU1sZCOHNBgSUSia8-Cf_4kexNd6nM60u3IfEnU7i7aK_XVpNgpa0iEpW2k7VeGhSSp8_d68Vrc3M1PAICbQ"/>
                  <div className="p-6 bg-white rounded-2xl shadow-xl border border-slate-100">
                    <h4 className="font-display font-bold text-xl text-slate-900">Engr. Amara Diop</h4>
                    <p className="text-secondary font-medium">CTO & Founder</p>
                  </div>
                </div>
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
              </div>
              <div className="mt-10">
                <a href="#" className="inline-flex items-center text-primary font-bold text-lg group">
                  Explore our history 
                  <span className="material-symbols-outlined ml-2 group-hover:translate-x-2 transition-transform">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;