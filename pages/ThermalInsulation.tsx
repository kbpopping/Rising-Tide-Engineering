import React from 'react';

const ThermalInsulation: React.FC = () => {
  const sectors = [
    {
      title: "Oil & Gas",
      icon: "oil_barrel",
      desc: "Upstream & downstream insulation.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAFruvrhMo9QA2kQyfMxGRVqPushT_NcoBQsiZ4BEoWYEw6fI685uHD8O9_piRHT3gvux9u72y2JyPRyQggxIA8LekETKR21Iq1iyWUcQya_fn95-02eDmA9XsBdfLG4OGtJht7ejo879GOZtXdP1PBaRQE2tERSSnW8yLMRs4uSCX__BirBSpiLjMV0Rn6oUbKba34qZCvEbWa7fKaMCioktuF_8hyCv6Uo1DMTCppy8r_ML17r7FpBqOLDdRT_RN9J8rx1JUpmmo"
    },
    {
      title: "Power Generation",
      icon: "bolt",
      desc: "Thermal efficiency for turbines.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4D2Y1dqFSztjZgKtKRiYWHvoTZu3j4HtvvHbceMLs8O3L5zAwFaoplIk_YYW1Epfo4fXpWNNf1g8JcGWi53H5SvslgKQD5Pc9Q4f5zpzxRY0XJO1VmIEGGE8SC7hLuzCYKtxXsxnKSUfzHYoJEvUVD276VWG4ZR6aHUm6XNyXv2F2WFHB1J8MS4TneTBXZE82e2w_r4kq8H0cDK6_YAoREZdUuFypZwbmsrXdtkazhMowHwh08w1k68VgteOkzYg8yPkI_i9phI0"
    },
    {
      title: "Petrochemical",
      icon: "science",
      desc: "Chemical processing insulation.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD97zT51b9Dp9C5ItC6trtYPvrD8TY1XBf91d6LwZASxKHWCDyi-YRmX-4Q3EGQQAMpamFr-G-KcY2fDnjuTNICc8D5JpoxClOByl23zg3SSxs0v1qZoLu_fNr-WZ-4_C3I4ETc65cu2zMrXUmPaAYD8q7H2C6FnQFU7Zudqt_xuFF5czQ_Lk-4w49a5DA2Bu20gSjBZRstUyxij30Y6VP_XZxnNr-XO4VOhw15GjPBXM22I2775jvZCHMeDBUJGUJKKRoq5WcDWjM"
    },
    {
      title: "Construction",
      icon: "construction",
      desc: "Building envelope efficiency.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCjPhtMTwze3oHh-1zgBf5fpzv4AWOegSVHiCG8BM0lM8k_az1VF-ifiDp-Nv0cV_uXTWNp8ABDMOXS5MBVlaDJ1VtBdvsC-320HC6exExqt3y-yBKrAqaQUDUhR6IBCs6D84dlO2x4tDFcmTT2Jch5DyF8_U7Wohk1prJuTE8R8FgNpofVJ0owa4XwNJFaIdwjnkFTgBqttt75KqgK3wVoqZ5RIYseqqCoDq07jZaQk8uB6eHj4khgOk_RkQSgklHwmeEkNNe6VO0"
    },
    {
      title: "Telecom",
      icon: "cell_tower",
      desc: "Equipment shelter insulation.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJbj5yyi0ByaUxJIVNNi0_NZduCjrTyyx4zXhl_rNgf-10-SfcXd4MCtKZnrtJjImLcRtjipNbDGoFL8Eijl7cD3hm8DGhg3jxfn3c9_JOZ_9dJ2_twuH9RtrGwXMI9L2vTi6MuqmtcTPKQxv9c7cBEGI4jDHLfac0bOIrTIfvFqN-GdgNIbeHWqEDPnafwq1VRsAfh58B15md1jiUmPENqRcIlAPSs13NIaxzCnVAcYeYd1fUflMhKBZnPDkDxenHL8G76fZ4QjU"
    },
    {
      title: "Mining",
      icon: "diamond",
      desc: "Process temperature control.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHykfoO9kUo7zqwonhvl3ZEpBxSw_48dMxWfvjI5qwjMUbD53w6Gobkq_4a8PMo6g7GAIG3nUw7pcENeaZ21BhyS5J6u-L_JdZtN0ktKbIEtqMuoBwUu3GkJYx8zhZg2UIKSObIAySEomMrULpWG7zuYPaNc7Ft-qL5NnlRiSTC1DdvrPTt0xuNN2tlgf_4f8fjWUUkNr5Q3M3SdnN9SygUBz4ofsr1ij_3viGPympHp0uzV0qp8-Sp4I_ZfMB3Z9Y6Sj7BKX4tBs"
    },
    {
      title: "Marine",
      icon: "anchor",
      desc: "Vessel thermal management.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYWhTJRQcIRdaEcjjnKei1Vt-fxkxhQSLZCM8MrxT48CKoEsP6dp_WYELRoLprVxOKQfDJEfFxC2CMm8-By3NJ1GzvyHz4SSk3Mwbk1RC_iWuGQDSbs2dGhJRX9LMfir60SSZglKisW3TfNBmn-Tg_-7j7bC4tbn_xLAM_qhAyZCM76bubLuWB4XKzOcFhSfyNV1rVve-cBbo0oMv1YbCdbOyqMXiHrthledRlUfMH6p6J1T0pqkRaDrdeGD2qQszYPsUAHENsVDY"
    },
    {
      title: "Public Service",
      icon: "water_drop",
      desc: "Utility infrastructure insulation.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAk_g0lR9IoPgV6sla0TZpKnj6pbIZM2t9ihjHkYgfIjbXeu1m2GgNhyEtYTFe0eu-gAG8O-PC0Ks2VgzxgRFyxoEo9rXNj5s0tWcYtENuBrArZBdQrPWl9nQelbW8hbqmeCUAx3HYKc8DhXv265P5Mkh2XRVnJibUwgAUfgw9gjvxWadB81B9zt5z_DA_my6qIlN2aGdDg-evFvFxLewG6TEJCVChV7uR1Y0bC5NW52uyzXvTF2YSjgfUklt8OElWPbKN6Ko4OzPk"
    }
  ];

  return (
    <div className="w-full bg-slate-50">
      <div className="relative w-full overflow-hidden h-[500px] flex items-center justify-center bg-primary">
        <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDvnimRGqPdw18A_LZeiL0n9geFcIQ3klZpD4X0u68n5RWYqncQou3OTgxj4uVVMBs9AGInh1Z9JAHWqCvrn08yV3Kd5OvRdOu15bIy7WJNuvvhAOK1_n1FkNYgB74wcqDrA6NM42wo_ZT1wC7OVnOy5yb-yNQLSf6PdXvwjb39MebiL2oLSBZCNmBCOA9zrzBAOpUG4eyavJ0WljFNzFjDFaOz8Wcz-equI7ybU1wqJChBMlC8FW5GweMQtGCyYwnE5wUWBK-SXOc')" }}>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent z-10"></div>
        <div className="relative z-20 flex w-full max-w-7xl flex-col px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full px-0 py-1 text-xs font-bold text-safety uppercase tracking-wider">
              Industrial Services
            </div>
            <h1 className="text-4xl lg:text-6xl font-black leading-tight tracking-tight text-white mb-6 font-display">Thermal Insulation Solutions</h1>
            <p className="text-lg text-white/90 max-w-2xl font-light font-body">
              Maximizing energy efficiency, process control, and personnel safety for complex industrial infrastructure.
            </p>
          </div>
        </div>
      </div>

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 py-16 lg:flex-row lg:px-8">
        <div className="flex flex-col gap-10 lg:w-2/3">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold text-slate-900 mb-2 font-display border-b-2 border-safety pb-2 w-fit">
              Insulation Materials &amp; Efficiency
            </h2>
            <p className="text-slate-900 text-lg leading-relaxed mb-6 font-body">
              Our industrial insulation solutions are meticulously designed to minimize heat transfer, strictly control condensation, and ensure robust personnel protection in hazardous environments. We utilize advanced materials specifically selected for your operational constraints, including temperature extremes and chemical exposure.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <span className="material-symbols-outlined text-safety text-3xl">thermostat</span>
                  <h3 className="font-bold text-xl text-slate-900 font-display">Heat Conservation</h3>
                </div>
                <p className="text-sm text-slate-900 font-body">Drastically reduce energy costs by maintaining optimal process temperatures in piping and vessels.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <span className="material-symbols-outlined text-safety text-3xl">shield</span>
                  <h3 className="font-bold text-xl text-slate-900 font-display">Personnel Protection</h3>
                </div>
                <p className="text-sm text-slate-900 font-body">Shielding surfaces exceeding 60°C to prevent burns and ensure compliance with safety regulations.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <span className="material-symbols-outlined text-safety text-3xl">water_drop</span>
                  <h3 className="font-bold text-xl text-slate-900 font-display">Condensation Control</h3>
                </div>
                <p className="text-sm text-slate-900 font-body">Preventing moisture buildup on cold systems (cryogenic) to avoid corrosion under insulation (CUI).</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <span className="material-symbols-outlined text-safety text-3xl">volume_off</span>
                  <h3 className="font-bold text-xl text-slate-900 font-display">Acoustic Damping</h3>
                </div>
                <p className="text-sm text-slate-900 font-body">Reducing noise pollution from high-pressure lines to meet environmental and OHS standards.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold font-display text-slate-900 mb-2">Premium Materials</h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3 p-4 bg-white rounded-lg border border-slate-100 shadow-sm">
                <span className="material-symbols-outlined text-safety mt-1">check_circle</span>
                <div>
                  <strong className="block text-slate-900 font-bold">Mineral Wool / Rockwool</strong>
                  <span className="text-sm text-slate-900">Excellent fire resistance and acoustic properties. Ideal for high-temp piping.</span>
                </div>
              </li>
              <li className="flex items-start gap-3 p-4 bg-white rounded-lg border border-slate-100 shadow-sm">
                <span className="material-symbols-outlined text-safety mt-1">check_circle</span>
                <div>
                  <strong className="block text-slate-900 font-bold">Cellular Glass</strong>
                  <span className="text-sm text-slate-900">Impermeable to moisture, non-combustible, and high compressive strength. Best for tank bases.</span>
                </div>
              </li>
              <li className="flex items-start gap-3 p-4 bg-white rounded-lg border border-slate-100 shadow-sm">
                <span className="material-symbols-outlined text-safety mt-1">check_circle</span>
                <div>
                  <strong className="block text-slate-900 font-bold">Aerogel</strong>
                  <span className="text-sm text-slate-900">Ultra-thin profile with superior thermal performance. Perfect for tight spaces.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="lg:w-1/3">
          <div className="sticky top-24 flex flex-col gap-6">
            <div className="rounded-lg border border-primary bg-primary p-6 shadow-xl border-t-4 border-t-safety">
              <h3 className="text-white text-lg font-bold font-mono mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-safety text-sm">terminal</span>
                Technical Specs
              </h3>
              <div className="flex flex-col gap-3 font-mono text-xs text-white/80">
                <div className="flex justify-between border-b border-primary-dark/50 pb-2">
                  <span>Temp Range:</span>
                  <span className="text-safety font-bold">-160°C to +800°C</span>
                </div>
                <div className="flex justify-between border-b border-primary-dark/50 pb-2">
                  <span>Efficiency:</span>
                  <span className="text-white">Up to 98%</span>
                </div>
                <div className="flex justify-between border-b border-primary-dark/50 pb-2">
                  <span>Standards:</span>
                  <span className="text-white">ASTM C547, ISO 12241</span>
                </div>
                <div className="flex justify-between border-b border-primary-dark/50 pb-2">
                  <span>Install:</span>
                  <span className="text-white">On-site / Pre-fab</span>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-lg border border-slate-200">
              <h3 className="text-2xl font-bold mb-4 text-slate-900 font-display">Request a Quote</h3>
              <p className="text-sm text-slate-600 mb-6 font-body">Tell us about your project requirements.</p>
              <form className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Full Name</label>
                  <input className="w-full rounded bg-slate-50 border border-slate-300 px-3 py-2 text-slate-900 text-sm focus:border-safety focus:ring-1 focus:ring-safety outline-none" placeholder="John Doe" type="text"/>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Company</label>
                  <input className="w-full rounded bg-slate-50 border border-slate-300 px-3 py-2 text-slate-900 text-sm focus:border-safety focus:ring-1 focus:ring-safety outline-none" placeholder="Engineering Ltd." type="text"/>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Email</label>
                  <input className="w-full rounded bg-slate-50 border border-slate-300 px-3 py-2 text-slate-900 text-sm focus:border-safety focus:ring-1 focus:ring-safety outline-none" placeholder="john@example.com" type="email"/>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Service Type</label>
                  <select className="w-full rounded bg-slate-50 border border-slate-300 px-3 py-2 text-slate-900 text-sm focus:border-safety focus:ring-1 focus:ring-safety outline-none">
                    <option>Thermal Insulation</option>
                    <option>Acoustic Insulation</option>
                    <option>Cryogenic Insulation</option>
                    <option>Fireproofing</option>
                  </select>
                </div>
                <button className="mt-2 w-full rounded bg-safety py-3 text-sm font-bold text-white hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20" type="button">
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <section className="w-full bg-slate-100 py-16 px-6 md:px-12 lg:px-20 xl:px-40">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3 font-display border-b-2 border-safety pb-2 w-fit">Sector Applications</h2>
              <p className="text-slate-600 max-w-2xl font-body mt-4">Tailored insulation solutions engineered for the specific demands of major industrial sectors.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map((sector, index) => (
              <div key={index} className="group relative h-64 w-full overflow-hidden rounded-lg cursor-pointer bg-slate-900">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" 
                  style={{ backgroundImage: `url("${sector.img}")` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <span className="material-symbols-outlined text-safety mb-2 text-3xl">{sector.icon}</span>
                  <h3 className="text-xl font-bold text-white font-display">{sector.title}</h3>
                  <div className="h-0 overflow-hidden group-hover:h-auto group-hover:mt-2 transition-all duration-300">
                    <p className="text-sm text-gray-300 font-body">{sector.desc}</p>
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

export default ThermalInsulation;