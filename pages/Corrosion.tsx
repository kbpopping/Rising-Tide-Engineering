import React from 'react';

const Corrosion: React.FC = () => {
  const sectors = [
    {
      title: "Oil & Gas",
      icon: "oil_barrel",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTb170YUeEcR3iNjCq4VyqFuDjrUFuQPuzQWVC3QMk72eBl0cV5GH7Y_lWUKzoNrMU4DlzzZEy4zPppuE0RHMc-aFt9L0Jk585l2azSoVCaqPskLmcemN3WFD8aQ8ut1QKNJSBwDZE65rHp_njU70ntQ0_dDGZ5VFZG-UR85E9Vgm7zuQLRefiX674uZ6ja-YC6asvTMqkAx8WaPeICzuilKAb-VI63xEDizNgJovl9wirQhVMOipktqAayc9J2TETRA4OsOOBA-4"
    },
    {
      title: "Power Generation",
      icon: "bolt",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCds03ckN1sCj8JZLxgsab8OYYIEOblidx-uOCuo2srBqQY_5QMoVtI2PPYTZDyCyuPUrSR8oXIW5x1bF6R0PQIksJcNbwMeZx4gwn8OCv5RmpAfNMRooiXKG3YrVaXOIYp-JKXzcrXZuaV8QHYiJkaOgIPPmL3P-6R4okOiN2-9pw4bEw9vr4q0H6JtqBtLurRm7IxYCMkNcWMK5UIuWR0JoK23n2zKSN2_QG7OjuPXz_G3oLkfR3cLBQNFCqt4zirxG28QDc5JPw"
    },
    {
      title: "Petrochemical",
      icon: "science",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGoixxKwVkGzEc1FIxMchG-KOUFgF6B659WdGmvErpDuVPsd-QQgVwKhq5a-wP-QaejrwlQE9Cyczk4yyhMmDqNi6-TC0XhDPaJBLGTzNlfHjYi884gWiUt3odb4VjOUA_KYVIl1nBCf08eUqxxhnPTG06ZZJTWt7Y0EflCHRsPT-N5YTn2zbiHw9lCMuzeQyWlDyVs-O0x6xmNv07pvtWqpbY6bECzrllIM3QwpaenRTi4n7-MEsd0sItJFS2iFkbBRMeDNznHIM"
    },
    {
      title: "Construction",
      icon: "architecture",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAsMI7dWgsf4VOHQHwm32NFX2krrGg-BezRXYsWLK2IkTM5TBI1kus7e1ScPS_F2hTa8nvaH10e0D4xzGGCUEq0bkw7f6qpTgBPRhowmVjjQ0MYZFQbazjmOESUoRv4ebLEtJUtx8QEIZYlrFZimWdawvLIpDzzb4umTTFjBvYwxRkQb_fvauhedEXaW_F7Vr98_pSQMq9oL-AxyPnZzl8CtYqvZ9PAgTxE8PjVWe_6ytNlzmMMzWUgY8GHTjcMZLxLp74EBJMpT6w"
    },
    {
      title: "Telecommunications",
      icon: "cell_tower",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5rnXHArDwc9Ig16BpAmb0XKnYj8FMTxDqNHFyIvppVXowIIam_04iG2-JcoPO43-R63QE095GsuuPZhNS7VK5ESt2dsQONpyyxWcN4dDiGBcTZuP4QhD8xpxPrMB2WQKYWPs--7wjYmWnO59pshGRTMN5A5MFcJSMihV5DFd99ElvJsjzZ9nnzjlWkCTGnEWlRdFrJYbYnLi9fP-ZR48W7PHQiuqTG5USDrexD3fjvUAIH2xRiXzFC2iRMs4PoU5YHSsPBFITamI"
    },
    {
      title: "Mining & Minerals",
      icon: "diamond",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB30ByRygWqZDAeica4aJQ90rIcGLxY6oFnVDJNMpgQVx9nUZxbtjuMCJGqPwnuJ-5cMUsd3rjUdc9xlgYPmXJGoFzxF3naES8redBu2LKsBlicfB5znS66KC0iVwqUA1eXMqGnU8gekRwud4tp0bGtxbn8GsITmX4_8HIg7DAMBJErN-ESL5QJtW_RunJHevI8ifgmbHwpq1TMZ63ArPIE5D0RmqBQFmDcNwd1RRDx_077o5ge79tJ7IdbdXRt5LjXMPO6NSMkPiY"
    },
    {
      title: "Marine",
      icon: "sailing",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuARhPhwRGl70BxPbGYR7w6hAnddjKYxvZKsfbMJ2A9sGxQBLyZrAEbBVmOyhwhz8eGsLdT7OlQztIx6D4UcjN9bJj9L-ov73j60VUnl8H7KbgmCjwdd02lt2kHVqON9PCMx8zdwYu7zHunbLT6HpNU6LSDI18spvPRBM2HMOpdgNDeK50iIwdbliKo_2Qyxe_9dVtO2juSQy2Otak7Qr_pG2URhtxkLr7QWyizA-TNvy8MlUGq_owlvXL3kLhi5F1mGRzHffWtkL6w"
    },
    {
      title: "Public Service",
      icon: "public",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDHN_Tkq9QNXDzPVzTi5LdFuuusVRATGVTi_Gn8gs6vZ6_5wM9LIXJNRNPRD0E4uCeyeqz8endXLYDZ4v2iejQuj3KBfmDb7N3FObrOYlLWqo7OeUaPjnZx7d-irLiYcGhlNgkxcQhr9g1MA6YokDuzVPT1ukLbZHQR3S-yzp1FzGIpJcUjvyQMiggTNVF-92OxVWDA__gtMg2qKBmrggbujnxL-T1GyBOiqkCvVQJBx-OiZDp91X0vNDMN0OAcj9QNwkjj1euVyuM"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(20, 30, 22, 0.7) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuATqGw3Cn5w6edy7wdenYiKtwzPwHKbd_u8aTFxka-bO3AhOYlkQ0Kgg_guvE09zjpi4oYpAkyH0p1twgkRoOVD0otaY-lNW904Fd_FBQ6NoIgY050YtLeOnQabE-W8QIYqGRxnrxC6HvavJNZhaMYD08RtZzDm-_XhuiA_cDwsqSeyokEj_yHSFml8LFgGdoLlo4NM-YjiCWU3CdoElkre2YfDhm4l72yLYBhaF51wG_mWRrMS_xKiM57_ZX_VQYvFkr9nKe5n88I")' }}>
        <div className="max-w-[960px] w-full px-6 flex flex-col items-center text-center gap-6">
          <h1 className="text-white text-5xl md:text-6xl font-black leading-tight tracking-[-0.033em] uppercase drop-shadow-lg font-display">
            Corrosion Control Engineering
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-normal leading-relaxed max-w-2xl drop-shadow-md">
            Industry-leading industrial corrosion inspection and advanced protective coating application services ensuring asset longevity.
          </p>
          <div className="mt-4">
            <button className="bg-safety hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg">
              View Capabilities
            </button>
          </div>
        </div>
      </div>

      <main className="w-full max-w-[1440px] mx-auto px-6 py-16 flex flex-col lg:flex-row gap-12">
        <div className="w-full lg:w-2/3 flex flex-col gap-8">
          <div>
            <h2 className="text-slate-900 text-3xl md:text-4xl font-bold leading-tight mb-6 font-display">Technical Expertise</h2>
            <p className="text-slate-700 text-lg leading-relaxed mb-6">
              Corrosion is a pervasive threat to industrial infrastructure, compromising structural integrity and safety. Our engineering team specializes in comprehensive corrosion management, employing a multi-faceted approach that combines advanced materials science with rigorous field application standards. We don't just apply coatings; we engineer longevity.
            </p>
            <p className="text-slate-700 text-lg leading-relaxed">
              From initial surface preparation analysis to the final curing of high-performance polymer composites, every step of our process is monitored and validated against international standards. Our holistic strategy minimizes downtime and maximizes the lifecycle of your critical assets in the harshest environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            {[
              { title: "Material Selection", icon: "science", desc: "Specification of specialized alloys and coating systems tailored to your specific chemical and environmental exposure profile." },
              { title: "Cathodic Protection", icon: "verified_user", desc: "Design and installation of sacrificial anode and impressed current systems to electrically prevent oxidation reactions." },
              { title: "NACE Inspection", icon: "fact_check", desc: "Certified inspectors conducting DFT measurements, holiday testing, and adhesion pull-off tests to verify compliance." },
              { title: "Surface Preparation", icon: "construction", desc: "Abrasive blasting and chemical cleaning to achieve SSPC-SP 10/NACE No. 2 Near-White Metal standards." }
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-lg border border-slate-200 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-safety/10 flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-safety text-3xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-900">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* New Image Section */}
          <div className="mt-8">
            <img 
              className="w-full h-80 object-cover rounded-xl shadow-md" 
              alt="Engineer inspecting a large industrial metal structure with a tablet" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPSVhSGcVdilZBqWo0NwWaPJVWbOLjwHXfT88QddlrqdyTwyr-Ohmwna2LhKhtCSsiorw02zE8EJ7m8hyNVaGtr9zA-7GevOz5Q5ZUJIj3QlhmP7noYAD6sf4XxdSAI7ueQCEqy4_3jtUSjgHlNCJBQv9-GuSDJh1Z9WldJ4MBt0G6aVaROsBxt80ks9jJy_AEemQcuMn2E1RDFNECDLOsX8_F_VuNo5tZ5zU3RE8kfMvh-uJ-JlfUK2Ip16ajQS0qXtXBIT30qUw"
            />
          </div>
        </div>

        <div className="w-full lg:w-1/3 flex flex-col gap-8">
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
            <h3 className="text-lg font-bold uppercase tracking-wide text-primary mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-safety">tune</span>
              Technical Specs
            </h3>
            <ul className="space-y-3 font-body text-sm">
              <li className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-600">Preparation Std</span>
                <span className="font-medium text-slate-900">ISO 8501-1</span>
              </li>
              <li className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-600">Coating Thickness</span>
                <span className="font-medium text-slate-900">ASTM D7091</span>
              </li>
              <li className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-600">Adhesion Test</span>
                <span className="font-medium text-slate-900">ASTM D4541</span>
              </li>
              <li className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-600">Salt Level</span>
                <span className="font-medium text-slate-900">&lt; 20 mg/m²</span>
              </li>
              <li className="flex justify-between pt-1">
                <span className="text-slate-600">Certifications</span>
                <span className="font-medium text-slate-900 text-right">NACE Level 3<br/>SSPC PCI</span>
              </li>
            </ul>
          </div>

          <div className="sticky top-24 bg-white rounded-lg shadow-lg border border-slate-100 overflow-hidden">
            <div className="bg-primary p-4">
              <h3 className="text-white font-bold text-lg flex items-center gap-2">
                <span className="material-symbols-outlined">request_quote</span>
                Request a Quote
              </h3>
            </div>
            <div className="p-6">
              <form className="flex flex-col gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                  <input type="text" className="w-full rounded-md border-slate-300 bg-slate-50 p-2 text-sm focus:border-primary focus:ring-primary" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Company</label>
                  <input type="text" className="w-full rounded-md border-slate-300 bg-slate-50 p-2 text-sm focus:border-primary focus:ring-primary" placeholder="Organization Ltd." />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                  <input type="email" className="w-full rounded-md border-slate-300 bg-slate-50 p-2 text-sm focus:border-primary focus:ring-primary" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Project Details</label>
                  <textarea rows={3} className="w-full rounded-md border-slate-300 bg-slate-50 p-2 text-sm focus:border-primary focus:ring-primary" placeholder="Describe your corrosion issues..."></textarea>
                </div>
                <button type="button" className="mt-2 w-full bg-safety hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
                  Submit Request
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* Sector Application Section */}
      <section className="w-full bg-[#f1f4f1] py-16">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <h2 className="text-slate-900 text-3xl font-bold mb-10 border-l-4 border-safety pl-4">Sector Application</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map((sector, index) => (
              <div key={index} className="group relative h-64 overflow-hidden rounded-lg cursor-pointer">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" 
                  style={{ backgroundImage: `url("${sector.image}")` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <div className="flex items-center gap-2 text-safety mb-1">
                    <span className="material-symbols-outlined">{sector.icon}</span>
                  </div>
                  <h3 className="text-white font-bold text-xl">{sector.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Corrosion;