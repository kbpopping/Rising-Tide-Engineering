import React from 'react';
import { Link } from 'react-router-dom';

const History: React.FC = () => {
  return (
    <div className="w-full bg-slate-50 min-h-screen">
      <header className="relative bg-slate-900 py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
            <Link to="/about" className="inline-flex items-center text-white/70 hover:text-white mb-8 transition-colors">
                <span className="material-symbols-outlined mr-2">arrow_back</span> Back to About Us
            </Link>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">Our History</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
                From a small consultancy in Port Harcourt to a nationwide leader in engineering infrastructure. This is the story of The Rising Tide.
            </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-20">
        <article className="prose prose-lg prose-slate mx-auto mb-20">
            <h2 className="font-display text-3xl font-bold text-primary">The Beginning</h2>
            <p>
                In 2010, amid the bustling industrial landscape of Port Harcourt, Engr. Tunde Okafor and Engr. Amara Diop identified a critical gap. While international firms dominated major infrastructure projects, there was a severe lack of local engineering consultancies that could deliver comparable technical rigour with better cost efficiency and local adaptability.
            </p>
            <p>
                They established The Rising Tide Engineering (TRTEL) in a modest shared office space in Trans Amadi. The initial years were defined by grit and relentless pursuit of excellence. Their first projects were small-scale civil works and maintenance audits, but they treated each with the same level of precision as a megaproject.
            </p>
            <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQRYeDjD5hnCqWTuAdAckU7qOSkSbikLD2IFsp-OBV07KdbNSJnO_R9scnqV-uQyQ4Ef4jD2x6gcZ-JVRtfud__8lhUU5Luz4JTU1lVVOYhgLVdL271NetJsOBoVg97U8_HiGGaZHCUA8NUE7om1CfJqm3q7c4KjnIGwclKMEOQ3I-4Z4e4AF4CNFZ_PySgsyLv6MmoAYBJOcuRXIrq-wV-wqXrhJykRKOKFjcvZJ0VSadHXD6zU0nVv4WZhSkvw0-pmN_WD5xsFk" 
                alt="Early days at TRTEL"
                className="w-full h-80 object-cover rounded-xl shadow-lg my-8 grayscale hover:grayscale-0 transition-all duration-700"
            />
            <h2 className="font-display text-3xl font-bold text-primary">Scaling Up</h2>
            <p>
                By 2015, the company had earned a reputation for reliability. The turning point came when TRTEL secured a complex pipeline integrity contract that international competitors had struggled to execute due to community relations issues. TRTEL's approach—combining engineering expertise with deep community engagement—proved successful.
            </p>
            <p>
                This success catalyzed rapid expansion. We invested heavily in training our workforce, acquiring state-of-the-art NDT equipment, and adopting ISO 9001 standards long before it was an industry requirement for local firms.
            </p>
            <h2 className="font-display text-3xl font-bold text-primary">Looking Ahead</h2>
            <p>
                Today, TRTEL is pioneering the transition to renewable energy in Nigeria's industrial sector. We are not just maintaining the infrastructure of today; we are designing the sustainable systems of tomorrow.
            </p>
        </article>

        <div className="border-t border-slate-200 pt-16">
            <h2 className="font-display text-3xl font-bold text-slate-900 mb-12 text-center">Milestones Timeline</h2>
             {/* Reusing the Our Journey Section visuals for continuity */}
             <div className="space-y-16 border-l-2 border-slate-200 pl-8 ml-4 md:ml-0 md:pl-0 md:border-l-0">
                <div className="md:flex md:justify-between items-center group">
                    <div className="md:w-5/12 text-right pr-8 hidden md:block group-hover:-translate-x-2 transition-transform duration-500">
                        <span className="text-4xl font-bold text-primary font-display block">2010</span>
                        <span className="text-lg font-bold text-slate-700">Incorporation</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-primary border-4 border-white shadow-lg absolute left-0 md:relative md:left-auto transform -translate-x-[21px] md:translate-x-0 z-10"></div>
                    <div className="md:w-5/12 pl-8 md:group-hover:translate-x-2 transition-transform duration-500">
                        <span className="md:hidden text-4xl font-bold text-primary font-display block mb-1">2010</span>
                        <h3 className="md:hidden font-bold text-xl text-slate-900 mb-2">Incorporation</h3>
                        <p className="text-slate-600">The Rising Tide Engineering Ltd. founded in Port Harcourt.</p>
                    </div>
                </div>

                <div className="md:flex md:justify-between items-center group">
                    <div className="md:w-5/12 text-right pr-8 hidden md:block group-hover:-translate-x-2 transition-transform duration-500">
                        <p className="text-slate-600">First major IOC contract secured for pipeline maintenance.</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-secondary border-4 border-white shadow-lg absolute left-0 md:relative md:left-auto transform -translate-x-[21px] md:translate-x-0 z-10"></div>
                    <div className="md:w-5/12 pl-8 md:group-hover:translate-x-2 transition-transform duration-500">
                        <span className="text-4xl font-bold text-secondary font-display block">2015</span>
                        <span className="text-lg font-bold text-slate-700">Expansion Phase</span>
                        <p className="md:hidden text-slate-600 mt-2">First major IOC contract secured for pipeline maintenance.</p>
                    </div>
                </div>

                <div className="md:flex md:justify-between items-center group">
                    <div className="md:w-5/12 text-right pr-8 hidden md:block group-hover:-translate-x-2 transition-transform duration-500">
                         <span className="text-4xl font-bold text-primary font-display block">2018</span>
                        <span className="text-lg font-bold text-slate-700">Diversification</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-primary border-4 border-white shadow-lg absolute left-0 md:relative md:left-auto transform -translate-x-[21px] md:translate-x-0 z-10"></div>
                    <div className="md:w-5/12 pl-8 md:group-hover:translate-x-2 transition-transform duration-500">
                        <span className="md:hidden text-4xl font-bold text-primary font-display block mb-1">2018</span>
                        <h3 className="md:hidden font-bold text-xl text-slate-900 mb-2">Diversification</h3>
                        <p className="text-slate-600">Launched Renewable Energy division serving Northern Nigeria.</p>
                    </div>
                </div>

                 <div className="md:flex md:justify-between items-center group">
                    <div className="md:w-5/12 text-right pr-8 hidden md:block group-hover:-translate-x-2 transition-transform duration-500">
                        <p className="text-slate-600">Achieved ISO 9001:2015 and grew to 200+ employees.</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-secondary border-4 border-white shadow-lg absolute left-0 md:relative md:left-auto transform -translate-x-[21px] md:translate-x-0 z-10"></div>
                    <div className="md:w-5/12 pl-8 md:group-hover:translate-x-2 transition-transform duration-500">
                        <span className="text-4xl font-bold text-secondary font-display block">Present</span>
                        <span className="text-lg font-bold text-slate-700">National Leader</span>
                         <p className="md:hidden text-slate-600 mt-2">Achieved ISO 9001:2015 and grew to 200+ employees.</p>
                    </div>
                </div>
             </div>
        </div>
      </main>
    </div>
  );
};

export default History;