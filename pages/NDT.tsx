import React, { useState } from 'react';

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
           <img src={sector.img} className="h-full w-full object-cover transition-transform duration-500" alt={sector.title} />
           <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
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
              Advanced NDT solutions for {sector.title}, ensuring {sector.desc.toLowerCase()}
            </p>
        </div>
      </div>
    </div>
  );
};

const NDT: React.FC = () => {
  const sectors = [
    {
      title: "Oil & Gas",
      icon: "oil_barrel",
      desc: "Pipeline integrity, weld inspection.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOftvbOUofw8N_YN4aY2W1vGJakiHfY0noJJJ9cLlnZyk4U95ymXwtql1h7jP34I_xosx9pPyHVNNLHSL6tASLuF_EWppZ_TKyZ5f_fMwLemuLu3q4H5-JSqqNamhblGbams-7pxc-bLrTznKnzFpE1ZrZ-AzIMngto2rwkcWClfufiXQ5PyRY_-oAzTg-dLGgKAfXtUvr4UYtTM1l28rlIBsP27nHDYMjWAf65kRVSXLkn4ZtK-pV-NLmQbZm2a4-MJ-I78I8lnM"
    },
    {
      title: "Power Generation",
      icon: "bolt",
      desc: "Turbine blade inspection, boiler testing.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBoeahy8dtgjSdVnmW-LXVw_ESJIlGL7CuoiCzZg2Fpu3U86MRKjtByzwmELPKnd9DhN9PUOlCBN4VZ7H02DfGLQ_1QGxXH2fHEiwAhVSNPCX258zQQVVes3e_tMhPJ9PdjIQa3TVuRwbifMvCRe-eGubad-ezm1QCFbNI7truApsTznaZhqH_6MMPOj41hyrm69eMNt1T6NqyUuwjWaR9V7aZta8eMOezBSDA3d8MrE4DxPrEPTSG6ayh26N1I7hFBdLzVH2SI2Es"
    },
    {
      title: "Petrochemical",
      icon: "science",
      desc: "Tank floor mapping, corrosion detection.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBT3lVQwcqs_sF-Wy8o8iByxK1M89t97OQpZO5wyKAePqaMh2nE3qcry7Yn0xeRE1SRy8P56ch_dmzHXcFC8k_DYVK3vbjrR04ms3bnX2JhvwtyJUVhBLMKEgN8RrNX-ZIptqUzih3avOy_CvTdYRspP-Oj3V8pSmvtajxT6THolaQV9vfBsAhKNQUogtsQE2NTFeFZfoY8Igv04KhTpZjGme1OzuwjpwMt0Sl7O3_clnDOgQKHIsbuxBxSyrYHu9QiZNFxBtaQMaI"
    },
    {
      title: "Construction",
      icon: "construction",
      desc: "Structural steel weld verification.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUnOHBMN6SdY7G31Y4wt2pcN109Vvy-BLe2ufIUnUArFjJFeuDIGsXMp2ywuaYL3FJKVh6Muy4pGoKn0VQLCKmCH07324XMq8PV24ACRnvQS32hKsqIUlMwk3PItkrMc2D67YkDGOdps8RMlaH3YK2jT523AfdzSeVDMN6e26KW01W30gKwLCizJfshWUIBTYQdpuMhLoS7EJXG0RO1q0rvn7dZXVvV9mR-ztdENY43IwqD67jWwFeTzGAogL6DCRVerZDE46r88U"
    },
    {
      title: "Telecom",
      icon: "cell_tower",
      desc: "Tower weld integrity checks.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAXE3KjP9lkPmMUXa5yYPYWN5dJ56NWWhNIMAnpBjZTxbZWfIU9xZT0JQ7PBSH9cYhyoYUIZqAlY6naRI3o1O07MGY6FX_ejZ4P6isObYh19Tbx-9EeAFLYjktHeFW1aZh8sHcgZATo3r_3weOiwmbptqxbl9I8RbmXA39ICwdCEQiFzUp_6HjUYCfntGF2OrCa5FqZKSy43GJ0TvRsVDzwlDUvQVhxmYF4DD2--hpBHeafeUK2_ZEku3IcECL6Nveq5NsemIj51UY"
    },
    {
      title: "Mining",
      icon: "diamond",
      desc: "Equipment wear analysis.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSXQlhgMq3CtMdQifFB2JPXyhdMbaXR-v3FzWhQjZmtaVXHaXFf2XO3H2EtLpuymQCWNdQc5Wh8D0qPKlTlcfbI4FSwU8ocarAylb6eXq_kgc4wulvqWtVoQY94UmkU4SgW_1ljLgWRUNPvLZIYHMU0LN5wOW7hdfRm63Gx7ZQ6BLQlwFk8douLhiaLOcIxpAlbShUYRV65e9RDdPhRLZewM3PPa5CBHuHXBoxwk3chVPf8_AbfWzKyL7saA1CEKTz3Ys31YR_sTU"
    },
    {
      title: "Marine",
      icon: "anchor",
      desc: "Hull thickness gauging.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAXOP1R4I6NyBSTPzEnLUP90F8uR-_SwfRqVGOabYTxIS2PQ0uVYqPlQzOKM5Ee28ZO2d0vgE6oL3BKTy2gK8rg999drsZ9_Xg6HYD6xgWe5b5WIjGLAZnZYpRauB_bz9BNikKZFYCXdkg-JVmNepZhN99wAvp8vgOnFbHlh1xzuFoUtzp60_3Y8yg8NXh3lu1C2jHrOd_mSmz2xpT2vawQRO0D6QsIVg3PqL7JFnBDMiTF8ehcQQbk0M_F_9e54xnP4nrBxJTn4Lo"
    },
    {
      title: "Public Service",
      icon: "water_drop",
      desc: "Infrastructure safety audits.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQxh2bxmtXIMHBGmL5GN8rFQdamzVLJh9qX9wYsBKe-CfRFgTG2CVlPVW93IfOmmkAW4IXxmG-aEy6fBikbZdy8B0ztCvXSaQcNAPSd2ty-HOGuVcXwbK1_oj9rbodE52Rit1HPFEdo8SekDlEHG7LX65KKkqvUto-Jfs-jdKQzmWCHq2wD0VMuABu_ZQ4_7FFwCMzv8Ln0qyXVA9s8MYfQDn_mx9EXJ5F8CoEy9qTzYxPBrP84OAspQYS3EaORUw8EG4piRmSxWE"
    }
  ];

  return (
    <div className="w-full bg-slate-50">
      <div className="relative w-full overflow-hidden h-[500px] flex items-center justify-center">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat animate-ken-burns" 
          style={{ backgroundImage: "linear-gradient(0deg, rgba(31, 87, 42, 0.9) 0%, rgba(31, 87, 42, 0.4) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuB1pMSWtfb5DPl5cvr2545Q1d05OpnF1B0EMjPbnPPh_bWBYyU2UrlzQ8Erv1HVnp7qSXU8-jluvexOymK3X0ka1gMPSECa7pWwooA0_DkPaU-JenTk2zZzkjf7A2AUtpZjAQuonLiYupR4oy5dxL1jd2XILHF0ZVnIImQgx2sQSacYT_Z_3wE3xvZWNOyiN5_BO4ogVeGObfE4jdaqEnNIMI37lJOQOo_e-S-v34t4w95IfIASCN_LCEj1bs6jQVYnUCtVHa7wWEg')" }}
        ></div>
        <div className="relative z-10 flex w-full max-w-7xl flex-col px-6 lg:px-8 pointer-events-none">
          <div className="max-w-3xl pointer-events-auto">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-safety/30 bg-safety/10 px-3 py-1 text-xs font-medium text-white uppercase tracking-wider backdrop-blur-sm animate-fade-in-up">
              <span className="h-2 w-2 rounded-full bg-safety animate-pulse"></span>
              Asset Integrity Services
            </div>
            <h2 className="text-5xl font-bold leading-tight text-white sm:text-6xl mb-6 font-display animate-fade-in-up-delay-1">Non-Destructive Testing (NDT)</h2>
            <p className="text-lg text-white/90 max-w-2xl font-light font-body animate-fade-in-up-delay-2">
              Advanced inspection methodologies ensuring critical infrastructure integrity without compromising structural safety. Precision diagnostics for complex industrial assets.
            </p>
          </div>
        </div>
      </div>

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 py-16 lg:flex-row lg:px-8">
        <div className="flex flex-col gap-10 lg:w-2/3">
          <div className="prose max-w-none">
            <h3 className="text-2xl font-bold text-primary mb-4 font-display">Inspection Methods</h3>
            <p className="text-slate-600 leading-relaxed mb-6 font-body">
              Our Non-Destructive Testing (NDT) division employs state-of-the-art technology to detect flaws, cracks, and structural weaknesses in materials and components. By utilizing advanced ultrasonic, radiographic, and magnetic particle techniques, we provide actionable data that extends the lifecycle of your assets while maintaining operational continuity.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3 p-4 rounded-lg bg-white border border-slate-200 shadow-sm">
                <span className="material-symbols-outlined text-safety mt-1">verified_user</span>
                <div>
                  <h4 className="text-slate-900 font-bold font-display">Compliance Guaranteed</h4>
                  <p className="text-sm text-slate-500 font-body">Fully compliant with ASME, API, and ISO standards.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-white border border-slate-200 shadow-sm">
                <span className="material-symbols-outlined text-safety mt-1">analytics</span>
                <div>
                  <h4 className="text-slate-900 font-bold font-display">Data-Driven Reports</h4>
                  <p className="text-sm text-slate-500 font-body">Comprehensive digital reporting with flaw sizing.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold text-primary mb-2 font-display">Technical Capabilities</h3>
            <details className="group rounded-lg border border-slate-200 bg-white shadow-sm transition-all open:ring-1 open:ring-slate-200">
              <summary className="flex cursor-pointer items-center justify-between p-4 md:p-5 select-none">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-safety/10 text-safety">
                    <span className="material-symbols-outlined">waves</span>
                  </div>
                  <span className="text-lg font-bold text-slate-900 font-display">Ultrasonic Testing (UT)</span>
                </div>
                <span className="material-symbols-outlined text-slate-400 transition-transform group-open:rotate-180">expand_more</span>
              </summary>
              <div className="border-t border-slate-100 px-5 py-4 text-slate-600 leading-relaxed bg-slate-50 font-body">
                <p className="mb-3">High-frequency sound waves are transmitted into materials to detect internal flaws or characterize materials. Ideal for weld inspections, thickness measurements, and flaw detection in forging.</p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-slate-500">
                  <li>Phased Array Ultrasonic Testing (PAUT)</li>
                  <li>Time of Flight Diffraction (TOFD)</li>
                  <li>Automated Ultrasonic Testing (AUT)</li>
                </ul>
              </div>
            </details>
            <details className="group rounded-lg border border-slate-200 bg-white shadow-sm transition-all open:ring-1 open:ring-slate-200">
              <summary className="flex cursor-pointer items-center justify-between p-4 md:p-5 select-none">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-safety/10 text-safety">
                    <span className="material-symbols-outlined">radiology</span>
                  </div>
                  <span className="text-lg font-bold text-slate-900 font-display">Radiographic Testing (RT)</span>
                </div>
                <span className="material-symbols-outlined text-slate-400 transition-transform group-open:rotate-180">expand_more</span>
              </summary>
              <div className="border-t border-slate-100 px-5 py-4 text-slate-600 leading-relaxed bg-slate-50 font-body">
                <p className="mb-3">Uses X-rays or gamma rays to view the internal structure of a component. Provides a permanent record (film or digital image) of the internal quality.</p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-slate-500">
                  <li>Computed Radiography (CR)</li>
                  <li>Digital Radiography (DR)</li>
                  <li>Profile Radiography</li>
                </ul>
              </div>
            </details>
            <details className="group rounded-lg border border-slate-200 bg-white shadow-sm transition-all open:ring-1 open:ring-slate-200">
              <summary className="flex cursor-pointer items-center justify-between p-4 md:p-5 select-none">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-safety/10 text-safety">
                    <span className="material-symbols-outlined">iron</span>
                  </div>
                  <span className="text-lg font-bold text-slate-900 font-display">Magnetic Particle Inspection (MPI)</span>
                </div>
                <span className="material-symbols-outlined text-slate-400 transition-transform group-open:rotate-180">expand_more</span>
              </summary>
              <div className="border-t border-slate-100 px-5 py-4 text-slate-600 leading-relaxed bg-slate-50 font-body">
                <p>Used for detecting surface and slightly subsurface discontinuities in ferromagnetic materials such as iron, nickel, cobalt, and some of their alloys.</p>
              </div>
            </details>
            <details className="group rounded-lg border border-slate-200 bg-white shadow-sm transition-all open:ring-1 open:ring-slate-200">
              <summary className="flex cursor-pointer items-center justify-between p-4 md:p-5 select-none">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-safety/10 text-safety">
                    <span className="material-symbols-outlined">water_drop</span>
                  </div>
                  <span className="text-lg font-bold text-slate-900 font-display">Liquid Penetrant Testing (PT)</span>
                </div>
                <span className="material-symbols-outlined text-slate-400 transition-transform group-open:rotate-180">expand_more</span>
              </summary>
              <div className="border-t border-slate-100 px-5 py-4 text-slate-600 leading-relaxed bg-slate-50 font-body">
                <p>A widely applied and low-cost inspection method used to check surface-breaking defects in all non-porous materials (metals, plastics, or ceramics).</p>
              </div>
            </details>
          </div>
        </div>

        <div className="lg:w-1/3">
          <div className="sticky top-24 flex flex-col gap-6">
            <div className="rounded-lg border border-primary bg-primary p-5 font-mono shadow-xl">
              <div className="mb-4 flex items-center gap-2 border-b border-white/20 pb-2">
                <span className="material-symbols-outlined text-safety text-sm">terminal</span>
                <h4 className="text-sm font-bold uppercase tracking-widest text-white">Tech Specs</h4>
              </div>
              <div className="space-y-4 text-xs text-white/80">
                <div className="flex justify-between">
                  <span className="opacity-70">Standards:</span>
                  <span className="font-bold text-white">ASME V, AWS D1.1</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-70">Cert Level:</span>
                  <span className="font-bold text-white">ASNT Level II/III</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-70">Equipment:</span>
                  <span className="font-bold text-white">Olympus, GE</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-70">Accuracy:</span>
                  <span className="font-bold text-white">±0.1mm (UT)</span>
                </div>
                <div className="mt-4 border-t border-dashed border-white/20 pt-3">
                  <p className="opacity-50 text-safety">// CALIBRATION STATUS: VALID</p>
                  <p className="opacity-50 text-safety">// READY_FOR_DEPLOYMENT</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4 font-display">Request a Quote</h3>
              <form className="flex flex-col gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1">Full Name</label>
                  <input className="w-full rounded bg-slate-50 border border-slate-300 px-3 py-2 text-slate-900 text-sm focus:border-safety focus:ring-1 focus:ring-safety outline-none" placeholder="John Doe" type="text"/>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1">Email Address</label>
                  <input className="w-full rounded bg-slate-50 border border-slate-300 px-3 py-2 text-slate-900 text-sm focus:border-safety focus:ring-1 focus:ring-safety outline-none" placeholder="john@company.com" type="email"/>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1">Service Interest</label>
                  <select className="w-full rounded bg-slate-50 border border-slate-300 px-3 py-2 text-slate-900 text-sm focus:border-safety focus:ring-1 focus:ring-safety outline-none appearance-none">
                    <option>Ultrasonic Testing (UT)</option>
                    <option>Radiographic Testing (RT)</option>
                    <option>Magnetic Particle (MPI)</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
                <button className="mt-2 w-full rounded bg-safety py-3 text-sm font-bold text-white hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20" type="button">
                  Submit Request
                </button>
              </form>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-slate-900 font-medium text-sm mb-2">Need immediate assistance?</p>
              <a className="flex items-center gap-2 text-safety hover:text-slate-900 transition-colors" href="tel:+1234567890">
                <span className="material-symbols-outlined text-sm">call</span>
                <span className="font-bold">+1 (800) 555-0199</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      <section className="w-full bg-slate-100 py-16 px-6 md:px-12 lg:px-20 xl:px-40">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3 font-display">Sector Applications</h2>
              <p className="text-slate-600 max-w-2xl font-body">Tailored NDT solutions engineered for the specific demands of major industrial sectors.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map((sector, index) => (
              <SectorCard key={index} sector={sector} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NDT;