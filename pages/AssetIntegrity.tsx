import React from 'react';

const AssetIntegrity: React.FC = () => {
  const sectors = [
    { 
      title: "Oil & Gas", 
      icon: "oil_barrel", 
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBubNQPYJT7FjN9RYjkli2LUP9msuRNIzKxkEYEQKporF7fkP2-dD8uR9AskstWryQuj0zMBUmRvM9teQyc5pwAGnLNgudM5gEuyEDFkiwsWkLjhebmm1Gd8CcK_KMEdc87E158qX0sV3UJ0qPHdg-8IfdE_Cea_Q4rbJEyqiWPMbhLiPCvS5zltO0m5m6eVcAgtaO2GX-bj2udQUZ2U5V0XlWLp4Mneh6iuhVg4qcRCKgK8XUpBNkd7T60fm45OOXKeGRwtGI1EkI", 
      desc: "Pipeline integrity, offshore platform maintenance." 
    },
    { 
      title: "Power Generation", 
      icon: "bolt", 
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqrFWrVXER5FjZjjTKzy5dVQAp71BYVBpbQaNpsGKMiQzw_tkUuV9LB-dxzdth7h8CzocGvQDn5c4Ir3L3SW5cNjkYfRQBAQ2JYOze73n3CPRYIa0p6mpbsyD4jY187fm8F-dVWUucSIv8Ii2QHL8yXkI6aU-awtqs5m7yzzUFS0pJDgUG_19KtDT5GFy0G_Z5DDizZr2210D96ImxaL_3bTuTPA2X997V0ZdTXhw4n9Jry-qLxd_mb53isfV8d6kNnGjue0c68YM", 
      desc: "Turbine efficiency audits, boiler assessments." 
    },
    {
      title: "Petrochemical",
      icon: "science",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxA3kf27UH2ymm1SZrYIOSk4IYl4BrdtLJzPL3NGWTpXioZJJCxtQihapjoorOXWcG8_h-1OLOUF8Fuz3DDdS1pI-upR3KjxckRXlCrfzEUT875vudlA3llYhyWSU9Na4J6nX5J6YCgWcjEZAeMEWv95Qh59SAGB9OxAACQ9kAIIK34nsDJzXahxvBVanxv-HuBaLJBoBD_6hY80dxN3TqdBFloFOJOi5w-qaP9Mn8KDX3GLcgno6njpruz5f4zE1PdlXiIAb1XZ4",
      desc: "Storage tank inspection, refinery safety audits."
    },
    {
      title: "Construction",
      icon: "construction",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSg3wt1nG4BT19ayOP7_oo8c8V7TLjIy2_WLz4WBkpo31Uk9BOjFqugfPrVovyVeDxXVQ1PodEhD7UCYJuq46g-xptVW-KJk75q-Q3ifEm2RT6Fze5XgIDgJSb0vHc4QyOhQ9QLEBlLHuIvw-rygFpcdlUJShU_cFZ5_TP5NOWNoDQDPB1LEYH476UqxmHGS48SeSHx556Hy_KJY5Gxpd_oX9ai_a983UyHdALSzG1yjmJCSMCPhGWuA_P8RB32r4KUNixQYMOQQg",
      desc: "Structural health monitoring, compliance checks."
    },
    {
      title: "Telecommunications",
      icon: "cell_tower",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOjwpy4CKMvMXMB91W-I1X8p3zkU9dBzdd6Vt0m8P-UYwjAHrMRL4gbZ3GvoYLKzHMXCcUiRIuTl5T2RKwbaIchOzRd55EHi1FtFwqt7MZSdLgXR1_tNGWp-phIbGMqO3P6TQpHAA126HDJXhARN7oJBgGyq4Viq9WSprrKiBYzyxY07JwqASEjZhlGBOsnfJQN5v526oaVcKmWl0WtiN7589oalrsRexH1jWgFE_KGKO8g1w7sQC1N22zNhe-GsXrIfxPZ8XPmi4",
      desc: "Mast integrity surveys, coating assessments."
    },
    {
      title: "Mining & Minerals",
      icon: "diamond",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBe6EuDocGsFD9XMSFwCWV3g7GoqIC-GjkYz8DpPrMKjuEMaUERl4rSYV-APUG-QTUYPufH0UKFR5XRmfDOablNmAdNpLdDv5SLhHK2xuOqGVrTKZDd5dw9ZyAXmA9IS47C4uBAr-nUt6fi5RgJWknbpBAzCjQgZ34JbdQGH42kMUyhc_tzdYXUO87juKKKgsx6RhH7c9hD0EPQtr7Qi4IVML5e5pOZ8pOv69W_SYH17fZkKOdwsnFAbBdcz0FcPqibw46JZ1lzuHw",
      desc: "Conveyor system checks, equipment lifecycle analysis."
    },
    {
      title: "Marine",
      icon: "anchor",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVuNazCbLzzFy69s281PSTGxVht9p6dxdJmShoQnQlQFum5vSyTRbHpRcc66-Mm68oqMOMGitS9hLwPL8PXuzoOaaX5sYoOgV2_rIMZQus5wt4yxo5UK5Hj0sw76oUZqCiSCX2YIFLNeU9w8gJG7qj-hnlsWGokSvMMWo368mVMKLl99jc-97FAlbatb0xxUVZeFz-dUcoryO8LYYwdL3hPElddJIMczwH5i20raWMWSO1WH7OtxPZZ3f0jM7j0Yk_J9glRMrhBeQ",
      desc: "Hull thickness gauging, corrosion mapping."
    },
    {
      title: "Public Service",
      icon: "water_drop",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2OjaepDFG3AE4ggBYSpeRapYVeXG3VQ9tlbUcUWY1BzKB6DSai0v6_kLrrCBN3vLOt10ZrkiHCz_1vopQBmgbYusfGgURYqDyAJwFFEC6OCVlvDqoVCS9dR5UlwI-rRXiF6k2urIlVTo_0jp6PTFmcOuf3r5loflSWMQHtmXC_h4TW9HlNXs4e_CylNRDNkcl-fjqiDdrc74lT2kBGalbKPSsuGKiVpmXLnnzeXNyVTyKAX_bZ25369jiaeUTTDBnSNqEfMIxXNo",
      desc: "Infrastructure reliability, bridge safety inspections."
    }
  ];

  return (
    <div className="w-full bg-slate-50">
      {/* Hero with Parallax feel */}
      <header className="relative h-[500px] flex items-center w-full bg-fixed bg-center bg-cover" style={{ backgroundImage: 'linear-gradient(rgba(17, 24, 39, 0.65), rgba(17, 24, 39, 0.75)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBubNQPYJT7FjN9RYjkli2LUP9msuRNIzKxkEYEQKporF7fkP2-dD8uR9AskstWryQuj0zMBUmRvM9teQyc5pwAGnLNgudM5gEuyEDFkiwsWkLjhebmm1Gd8CcK_KMEdc87E158qX0sV3UJ0qPHdg-8IfdE_Cea_Q4rbJEyqiWPMbhLiPCvS5zltO0m5m6eVcAgtaO2GX-bj2udQUZ2U5V0XlWLp4Mneh6iuhVg4qcRCKgK8XUpBNkd7T60fm45OOXKeGRwtGI1EkI")' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
          <nav className="flex mb-4 text-sm font-medium text-gray-200">
            <ol className="flex items-center space-x-2">
              <li><span className="hover:text-safety transition-colors cursor-pointer">Services</span></li>
              <li><span className="material-symbols-outlined text-xs mx-1">chevron_right</span></li>
              <li className="text-safety font-bold">Asset Integrity</li>
            </ol>
          </nav>
          <h1 className="text-5xl md:text-6xl font-bold text-white font-display tracking-wide drop-shadow-xl max-w-4xl">
            Asset Integrity Management
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-gray-100 max-w-2xl font-light drop-shadow-lg leading-relaxed">
            Ensuring operational excellence and longevity for critical infrastructure across Nigeria's energy sectors.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content Area */}
          <div className="lg:w-2/3 space-y-12">
            <section className="prose max-w-none">
              <h2 className="text-3xl font-bold text-primary font-display mb-6">Overview</h2>
              <p className="text-lg leading-relaxed text-slate-600">
                At The Rising Tide Engineering (TRTEL), our Asset Integrity Management (AIM) services are designed to ensure your assets perform their required function effectively and efficiently while protecting health, safety, and the environment. We combine deep engineering expertise with local Nigerian context to deliver lifecycle solutions for complex industrial facilities.
              </p>
              <p className="text-lg leading-relaxed text-slate-600 mt-4">
                Our methodology integrates design, operational, and technical integrity to maximize asset availability and profitability.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-slate-900 mb-8 border-b border-gray-200 pb-4 font-display">Our Methodology</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group bg-white p-6 rounded border border-gray-200 hover:border-safety transition-all duration-300 hover:shadow-lg">
                  <div className="w-12 h-12 bg-safety/10 rounded flex items-center justify-center mb-4 group-hover:bg-safety group-hover:text-white transition-colors duration-300 text-safety">
                    <span className="material-symbols-outlined">radar</span>
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-slate-900">Risk Assessment</h4>
                  <p className="text-sm text-slate-500">Comprehensive RBI (Risk-Based Inspection) studies to prioritize critical assets.</p>
                </div>
                <div className="group bg-white p-6 rounded border border-gray-200 hover:border-safety transition-all duration-300 hover:shadow-lg">
                  <div className="w-12 h-12 bg-safety/10 rounded flex items-center justify-center mb-4 group-hover:bg-safety group-hover:text-white transition-colors duration-300 text-safety">
                    <span className="material-symbols-outlined">engineering</span>
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-slate-900">Inspection Planning</h4>
                  <p className="text-sm text-slate-500">Development of tailored inspection schemes compliant with DPR and global standards.</p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-slate-900 mb-8 border-b border-gray-200 pb-4 font-display">Sector Application</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {sectors.map((sector, idx) => (
                  <div key={idx} className="relative group overflow-hidden rounded shadow-lg h-64 cursor-pointer">
                    <img alt={sector.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={sector.img} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-safety/90 group-hover:via-safety/60 transition-colors duration-300"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h4 className="text-white font-bold text-xl mb-1 flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary">{sector.icon}</span>
                        {sector.title}
                      </h4>
                      <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                        {sector.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-8">
            <div className="bg-gray-900 text-white p-6 rounded shadow-xl border-l-4 border-safety relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <span className="material-symbols-outlined text-6xl">code</span>
              </div>
              <h3 className="font-mono text-safety text-lg font-bold mb-4 tracking-wider uppercase">Technical Specs</h3>
              <div className="font-mono text-sm space-y-3 text-gray-300">
                <div className="flex justify-between border-b border-gray-700 pb-2">
                  <span>Standard</span>
                  <span className="text-white font-medium">ISO 55000</span>
                </div>
                <div className="flex justify-between border-b border-gray-700 pb-2">
                  <span>Report Format</span>
                  <span className="text-white font-medium">Digital Twin / PDF</span>
                </div>
                <div className="flex justify-between border-b border-gray-700 pb-2">
                  <span>Coverage</span>
                  <span className="text-white font-medium">Onshore / Offshore</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span>Compliance</span>
                  <span className="text-white font-medium">DPR / NOSDRA</span>
                </div>
              </div>
            </div>

            <div className="sticky top-24 bg-white p-6 rounded shadow-lg border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-safety text-white p-2 rounded-full">
                  <span className="material-symbols-outlined text-xl">mark_email_read</span>
                </div>
                <h3 className="font-bold text-xl text-slate-900 font-display">Request a Quote</h3>
              </div>
              <form className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">Full Name</label>
                  <input className="w-full bg-slate-50 border border-gray-300 rounded px-3 py-2 text-slate-900 focus:ring-2 focus:ring-safety focus:border-transparent outline-none transition-shadow" placeholder="John Doe" type="text" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">Company Email</label>
                  <input className="w-full bg-slate-50 border border-gray-300 rounded px-3 py-2 text-slate-900 focus:ring-2 focus:ring-safety focus:border-transparent outline-none transition-shadow" placeholder="john@company.com" type="email" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">Service Interest</label>
                  <select className="w-full bg-slate-50 border border-gray-300 rounded px-3 py-2 text-slate-900 focus:ring-2 focus:ring-safety focus:border-transparent outline-none transition-shadow">
                    <option>Asset Integrity Management</option>
                    <option>Pipeline Maintenance</option>
                    <option>Structural Engineering</option>
                  </select>
                </div>
                <button className="w-full bg-primary hover:bg-green-800 text-white font-bold py-3 rounded transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center gap-2" type="button">
                  <span>Submit Request</span>
                  <span className="material-symbols-outlined text-sm">send</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AssetIntegrity;