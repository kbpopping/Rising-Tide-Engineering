
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { teamData } from '../data/teamData';

const TeamMemberBio: React.FC = () => {
  const { memberId } = useParams<{ memberId: string }>();
  const member = teamData.find(m => m.id === memberId);

  if (!member) {
    return <Navigate to="/about" replace />;
  }

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      <div className="relative bg-slate-900 py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
            <Link to="/about" className="inline-flex items-center text-white/70 hover:text-white mb-8 transition-colors group">
                <span className="material-symbols-outlined mr-2 group-hover:-translate-x-1 transition-transform">arrow_back</span> Back to Team
            </Link>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-6 -mt-20 relative z-20 pb-20">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/3 relative h-[500px] md:h-auto">
                <img 
                    src={member.img} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden"></div>
            </div>
            <div className="md:w-2/3 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <div className="flex flex-col gap-2 mb-6">
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900">{member.name}</h1>
                    <div className="flex flex-wrap items-center gap-4">
                        <span className="text-xl text-primary font-medium">{member.role}</span>
                        <div className="flex gap-3">
                            <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#0077b5] transition-colors">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                            </a>
                            <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#1DA1F2] transition-colors">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                            </a>
                            <a href={member.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#4267B2] transition-colors">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="h-1 w-20 bg-safety rounded mb-8"></div>
                
                <div className="prose prose-lg text-slate-600">
                    <p className="text-lg leading-relaxed">{member.fullBio}</p>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col sm:flex-row gap-6">
                    <div className="flex-1">
                        <h4 className="font-bold text-slate-900 mb-2">Education</h4>
                        <p className="text-sm text-slate-600">MSc. Engineering<br/>University of Lagos</p>
                    </div>
                    <div className="flex-1">
                        <h4 className="font-bold text-slate-900 mb-2">Expertise</h4>
                        <p className="text-sm text-slate-600">Project Management<br/>Strategic Planning<br/>Infrastructure Development</p>
                    </div>
                    <div className="flex-1">
                        <h4 className="font-bold text-slate-900 mb-2">Memberships</h4>
                        <p className="text-sm text-slate-600">Nigerian Society of Engineers<br/>COREN Registered</p>
                    </div>
                </div>
            </div>
        </div>
      </main>
    </div>
  );
};

export default TeamMemberBio;
