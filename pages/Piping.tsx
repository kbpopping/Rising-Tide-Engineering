import React from 'react';

const Piping: React.FC = () => {
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
    },
    {
      title: "Telecommunications",
      icon: "satellite_alt",
      desc: "Tower support structures.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOjwpy4CKMvMXMB91W-I1X8p3zkU9dBzdd6Vt0m8P-UYwjAHrMRL4gbZ3GvoYLKzHMXCcUiRIuTl5T2RKwbaIchOzRd55EHi1FtFwqt7MZSdLgXR1_tNGWp-phIbGMqO3P6TQpHAA126HDJXhARN7oJBgGyq4Viq9WSprrKiBYzyxY07JwqASEjZhlGBOsnfJQN5v526oaVcKmWl0WtiN7589oalrsRexH1jWgFE_KGKO8g1w7sQC1N22zNhe-GsXrIfxPZ8XPmi4"
    },
    {
      title: "Mining & Minerals",
      icon: "diamond",
      desc: "Slurry pipelines.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBe6EuDocGsFD9XMSFwCWV3g7GoqIC-GjkYz8DpPrMKjuEMaUERl4rSYV-APUG-QTUYPufH0UKFR5XRmfDOablNmAdNpLdDv5SLhHK2xuOqGVrTKZDd5dw9ZyAXmA9IS47C4uBAr-nUt6fi5RgJWknbpBAzCjQgZ34JbdQGH42kMUyhc_tzdYXUO87juKKKgsx6RhH7c9hD0EPQtr7Qi4IVML5e5pOZ8pOv69W_SYH17fZkKOdwsnFAbBdcz0FcPqibw46JZ1lzuHw"
    },
    {
      title: "Marine",
      icon: "anchor",
      desc: "Ship piping & retrofit.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVuNazCbLzzFy69s281PSTGxVht9p6dxdJmShoQnQlQFum5vSyTRbHpRcc66-Mm68oqMOMGitS9hLwPL8PXuzoOaaX5sYoOgV2_rIMZQus5wt4yxo5UK5Hj0sw76oUZqCiSCX2YIFLNeU9w8gJG7qj-hnlsWGokSvMMWo368mVMKLl99jc-97FAlbatb0xxUVZeFz-dUcoryO8LYYwdL3hPElddJIMczwH5i20raWMWSO1WH7OtxPZZ3f0jM7j0Yk_J9glRMrhBeQ"
    },
    {
      title: "Public Service",
      icon: "water_drop",
      desc: "Water & waste systems.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2OjaepDFG3AE4ggBYSpeRapYVeXG3VQ9tlbUcUWY1BzKB6DSai0v6_kLrrCBN3vLOt10ZrkiHCz_1vopQBmgbYusfGgURYqDyAJwFFEC6OCVlvDqoVCS9dR5UlwI-rRXiF6k2urIlVTo_0jp6PTFmcOuf3r5loflSWMQHtmXC_h4TW9HlNXs4e_CylNRDNkcl-fjqiDdrc74lT2kBGalbKPSsuGKiVpmXLnnzeXNyVTyKAX_bZ25369jiaeUTTDBnSNqEfMIxXNo"
    }
  ];

  return (
    <div className="w-full bg-slate-50">
      {/* Hero Section */}
      <div className="relative w-full">
        <div 
          className="flex min-h-[560px] flex-col justify-end bg-cover bg-center bg-no-repeat px-6 py-16 md:px-12 lg:px-20 xl:px-40" 
          style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.8) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAmUmTXr1HjhO0EseY3uS60Mh7bhZkYQjljR01zd62kKb02RxIm_S1Fz8-bc_ii5l-gRuDujhBuylO0et4lSoKUNjmdgXwbhxyg7SJ4KdKWoPrSiIs8xGfjrc6W6Te2EnkUSOC7nBiCXPZiK5b3F453H59sV9Z7RspCyLzHdtsK7TiIYUe1piJ8HWYs81uSWOtzhgqyEMbHHj4BnSBw8nucvWv614aQl2I6I14uKnH60vvcpxUPQF1LaGWwst3b439nhGt_vuRdZS8")' }}
        >
          <div className="flex flex-col gap-4 text-left max-w-4xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-safety">engineering</span>
              <span className="text-safety font-bold uppercase tracking-wider text-sm">Industrial Services</span>
            </div>
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl lg:text-6xl">
              Piping Fabrication & Installation
            </h1>
            <p className="text-gray-200 text-lg font-normal leading-relaxed max-w-2xl mt-2">
              Precision engineering for high-pressure industrial systems. We deliver ASME-compliant fabrication and seamless on-site installation for the world's most demanding sectors.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <button className="flex items-center justify-center rounded-lg h-12 px-6 bg-safety hover:bg-orange-700 text-white font-bold transition-colors">
                View Projects
              </button>
              <button className="flex items-center justify-center rounded-lg h-12 px-6 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold border border-white/20 transition-colors">
                Download Brochure
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
                <h2 className="text-3xl font-bold tracking-tight text-slate-900">Methodology & Approach</h2>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                <p className="text-base text-slate-600 leading-relaxed mb-6">
                  Our fabrication process integrates advanced semi-automatic welding techniques with rigorous material handling protocols to ensure structural integrity under high pressure. We utilize a phased approach that minimizes downtime and maximizes safety.
                </p>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Core Capabilities</h3>
                <ul className="space-y-3">
                  {["Off-site spool fabrication and modular assembly to reduce on-site welding time.", 
                    "Specialized alloy welding (Inconel, Duplex, Super Duplex) for corrosive environments.",
                    "3D laser scanning and BIM modeling for clash detection prior to installation.",
                    "Hydrostatic and pneumatic pressure testing up to 15,000 PSI."].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-safety mt-0.5 shrink-0 text-xl">check_circle</span>
                      <span className="text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-safety text-3xl">shield</span>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900">Quality Assurance & Safety</h2>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                <p className="text-base text-slate-600 leading-relaxed mb-6">
                  Safety is not just a policy; it is the foundation of our engineering philosophy. We adhere to strict ISO standards for all fabrication and installation projects, ensuring zero-harm environments.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 bg-slate-50 rounded-lg border-l-4 border-safety">
                    <h4 className="font-bold text-slate-900 mb-2">Certifications</h4>
                    <p className="text-sm text-slate-600">ASME B31.3, B31.1, API 1104, and ISO 9001:2015 certified welding procedures.</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg border-l-4 border-safety">
                    <h4 className="font-bold text-slate-900 mb-2">NDT Testing</h4>
                    <p className="text-sm text-slate-600">100% Radiographic Testing (RT) and Ultrasonic Testing (UT) on critical joints.</p>
                  </div>
                </div>
              </div>
            </section>

            <div className="rounded-xl overflow-hidden h-64 md:h-80 w-full relative group shadow-lg">
              <img alt="Pressure testing" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXMv6wu0tAF__0SmH-I1T75CvSt_M-mtDJocE-T0kLuJdP5O-ypXGjv1cNrIMizBxRrwO6i9-Qcl6uNdt4qNArSssautFj-kS71E4v5PXd7V4hfTFcaJ9Y4UTgo1aHDqBVlgtrdOFGTAzWlw_7AXKv4i6oOwnzfXjVNUbr8iRhxlUzCl9aUlkd_0XNuzdv6_QuSCFcHtmKkNwnaNXRcREcSQQHwvawztbiGJpwTh0irDyIR5Z0ZsDbSo0eSLX0_LqjvbJO4WHjJTs"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <p className="text-white font-medium">Rigorous pressure testing ensures system integrity before commissioning.</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-8 relative">
            <div className="sticky top-24 flex flex-col gap-8">
              {/* Spec Sheet Widget */}
              <div className="bg-slate-900 text-green-400 p-6 rounded-lg font-mono text-sm shadow-xl border border-slate-700 relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-slate-700 pb-3 mb-4 text-xs text-slate-500 uppercase tracking-widest">
                  <span>// SPEC_SHEET_V2.4</span>
                  <span className="flex h-2 w-2 rounded-full bg-safety animate-pulse"></span>
                </div>
                <div className="space-y-4 custom-scrollbar pr-2 max-h-[300px] overflow-y-auto">
                  <div>
                    <span className="text-slate-500 block mb-1">MATERIALS_SUPPORTED:</span>
                    <p className="text-white">&gt; Carbon Steel (A106/A53)</p>
                    <p className="text-white">&gt; Stainless Steel (304/316)</p>
                    <p className="text-white">&gt; Duplex & Super Duplex</p>
                    <p className="text-white">&gt; Inconel 625 / 825</p>
                  </div>
                  <div>
                    <span className="text-slate-500 block mb-1">DIAMETER_RANGE:</span>
                    <p className="text-white">&gt; Small Bore: 1/2" - 2"</p>
                    <p className="text-white">&gt; Large Bore: 2" - 48"+</p>
                  </div>
                  <div>
                    <span className="text-slate-500 block mb-1">PRESSURE_RATING:</span>
                    <p className="text-white">&gt; Up to 10,000 PSI</p>
                    <p className="text-white">&gt; ANSI Classes 150 - 2500</p>
                  </div>
                  <div>
                    <span className="text-slate-500 block mb-1">WELDING_PROCESSES:</span>
                    <p className="text-white">&gt; GTAW (TIG)</p>
                    <p className="text-white">&gt; SMAW (Stick)</p>
                    <p className="text-white">&gt; GMAW (MIG/MAG)</p>
                    <p className="text-white">&gt; FCAW (Flux Core)</p>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-700 text-xs text-slate-500 flex justify-between">
                  <span>STATUS: ACTIVE</span>
                  <span>[READ_ONLY]</span>
                </div>
              </div>

              {/* Quote Form */}
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-primary">
                <h3 className="text-xl font-bold mb-1 text-slate-900">Request a Quote</h3>
                <p className="text-sm text-slate-500 mb-6">Get a technical estimate for your fabrication needs.</p>
                <form className="flex flex-col gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                    <input type="text" className="w-full rounded-md border-slate-300 bg-slate-50 p-2.5 text-sm focus:ring-2 focus:ring-safety focus:border-transparent outline-none transition-shadow" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Work Email</label>
                    <input type="email" className="w-full rounded-md border-slate-300 bg-slate-50 p-2.5 text-sm focus:ring-2 focus:ring-safety focus:border-transparent outline-none transition-shadow" placeholder="john@company.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Project Type</label>
                    <select className="w-full rounded-md border-slate-300 bg-slate-50 p-2.5 text-sm focus:ring-2 focus:ring-safety focus:border-transparent outline-none transition-shadow text-slate-600">
                      <option>Fabrication</option>
                      <option>Installation</option>
                      <option>Maintenance</option>
                      <option>Turnkey Project</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Requirements</label>
                    <textarea rows={3} className="w-full rounded-md border-slate-300 bg-slate-50 p-2.5 text-sm focus:ring-2 focus:ring-safety focus:border-transparent outline-none transition-shadow" placeholder="Briefly describe your project specs..."></textarea>
                  </div>
                  <button type="button" className="mt-2 w-full bg-safety hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 group">
                    Submit Request
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sector Applications Section */}
      <section className="w-full bg-slate-100 dark:bg-slate-900 py-16 px-6 md:px-12 lg:px-20 xl:px-40">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3">Sector Applications</h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl">Tailored fabrication solutions engineered for the specific demands of major industrial sectors.</p>
            </div>
            <a href="#" className="text-safety font-bold flex items-center gap-1 hover:gap-2 transition-all">
              View All Sectors <span className="material-symbols-outlined">arrow_right_alt</span>
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {sectors.map((sector, index) => (
              <div key={index} className="group relative h-64 w-full overflow-hidden rounded-lg cursor-pointer">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" 
                  style={{ backgroundImage: `url("${sector.image}")` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <span className="material-symbols-outlined text-safety mb-2 text-3xl">{sector.icon}</span>
                  <h3 className="text-xl font-bold text-white">{sector.title}</h3>
                  <div className="h-0 overflow-hidden group-hover:h-auto group-hover:mt-2 transition-all duration-300">
                    <p className="text-sm text-gray-300">{sector.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Piping;