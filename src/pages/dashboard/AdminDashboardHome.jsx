import React from 'react';
import { useSelector } from 'react-redux';
import { useGetUsersQuery } from '../../redux/features/auth/authApi';
import { useGetProjectsQuery } from '../../redux/features/projects/projectsApi';
import { useGetBlogsQuery } from '../../redux/features/blogs/blogsApi';

const AdminDashboardHome = () => {
    const { user } = useSelector((state) => state.auth);
    const { data: users = [] } = useGetUsersQuery();
    const { data: projects = [] } = useGetProjectsQuery();
    const { data: blogs = [] } = useGetBlogsQuery();

    const stats = [
        { 
            name: 'Total Users', 
            value: users.length, 
            icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ),
            color: 'from-blue-500/20 to-blue-600/5',
            iconColor: 'text-blue-400',
            glowColor: 'group-hover:shadow-blue-500/10'
        },
        { 
            name: 'Projects', 
            value: projects.length, 
            icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            ),
            color: 'from-primary/20 to-primary/5',
            iconColor: 'text-primary',
            glowColor: 'group-hover:shadow-primary/10'
        },
        { 
            name: 'Blog Posts', 
            value: blogs.length, 
            icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l4 4v10a2 2 0 01-2 2z" />
                </svg>
            ),
            color: 'from-green-500/20 to-green-600/5',
            iconColor: 'text-green-400',
            glowColor: 'group-hover:shadow-green-500/10'
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 animate-in fade-in duration-700 pb-10">
            {/* Welcome Tile - Big & Bold (Span 3) */}
            <div className="md:col-span-3 bg-gradient-to-br from-[#0a0a0a] to-[#111111] p-10 lg:p-12 rounded-[2.5rem] border border-white/5 relative overflow-hidden group min-h-[250px] flex flex-col justify-center shadow-2xl">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -mr-48 -mt-48 transition-all group-hover:bg-primary/10"></div>
                <div className="relative z-10 space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="w-1.5 h-10 bg-primary rounded-full shadow-[0_0_15px_rgba(32,211,116,0.6)]"></div>
                        <h2 className="text-4xl lg:text-5xl font-black tracking-tighter text-white uppercase">
                            Hi, <span className="text-primary">{user?.name}</span>
                        </h2>
                    </div>
                    <p className="text-gray-500 text-lg font-medium max-w-xl pl-4 border-l border-white/10">
                        Everything is running smoothly. Here's a quick pulse check on your agency's operations.
                    </p>
                </div>
            </div>

            {/* Total Users - Tall & Interactive (Span 1, Row 2) */}
            <div className="md:col-span-1 md:row-span-2 bg-[#0a0a0a] p-8 rounded-[2.5rem] border border-white/5 flex flex-col items-center justify-between text-center group hover:border-primary/30 transition-all duration-500 shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="space-y-2 relative z-10 w-full">
                    <div className="flex justify-between items-center w-full mb-4">
                         <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400 border border-blue-500/20 shadow-lg shadow-blue-500/5">
                            {stats[0].icon}
                        </div>
                        <span className="text-[10px] font-bold text-blue-400 bg-blue-500/10 px-2 py-1 rounded-full uppercase tracking-widest">Active</span>
                    </div>
                    <h4 className="text-xl font-bold text-white tracking-tight text-left">Community</h4>
                </div>
                
                {/* Decorative Circular Progress */}
                <div className="relative w-40 h-40 flex items-center justify-center my-8 shrink-0">
                    <svg className="w-full h-full transform -rotate-90">
                        <circle cx="80" cy="80" r="70" stroke="currentColor" strokeWidth="6" fill="transparent" className="text-white/5" />
                        <circle cx="80" cy="80" r="70" stroke="currentColor" strokeWidth="6" fill="transparent" className="text-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]" strokeDasharray="440" strokeDashoffset="100" strokeLinecap="round" />
                    </svg>
                    <div className="absolute flex flex-col items-center">
                        <span className="text-5xl font-black text-white tracking-tighter">{users.length}</span>
                        <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">Users</span>
                    </div>
                </div>

                <div className="w-full py-3 bg-white/5 hover:bg-blue-500/10 transition-colors rounded-2xl border border-white/5 text-blue-400 font-bold text-[10px] uppercase tracking-widest mt-auto cursor-pointer">
                    View Network
                </div>
            </div>

            {/* Projects Overview - Wide Tile (Span 2) */}
            <div className="md:col-span-2 bg-[#0a0a0a] p-8 lg:p-10 rounded-[2.5rem] border border-white/5 relative overflow-hidden group hover:border-primary/30 transition-all duration-500 shadow-2xl flex flex-col justify-between min-h-[220px]">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[50px] rounded-full group-hover:bg-primary/20 transition-colors"></div>
                 <div className="flex items-start justify-between relative z-10 w-full">
                    <div className="space-y-1">
                        <p className="text-gray-500 font-bold uppercase tracking-[.2em] text-[10px]">Portfolio Scale</p>
                        <h3 className="text-3xl font-black text-white tracking-tighter">Project Archive</h3>
                    </div>
                    <div className="bg-primary/10 p-4 rounded-2xl border border-primary/20 text-primary group-hover:scale-110 transition-transform shadow-lg shadow-primary/10">
                         {stats[1].icon}
                    </div>
                </div>
                <div className="mt-8 flex items-baseline gap-3 relative z-10">
                     <span className="text-7xl font-black text-white tracking-tighter leading-none">{projects.length}</span>
                     <span className="text-primary font-bold uppercase text-xs tracking-widest">Active Works</span>
                </div>
            </div>

            {/* Blog Highlight - Square Tile (Span 1) */}
            <div className="md:col-span-1 bg-[#0a0a0a] p-8 lg:p-10 rounded-[2.5rem] border border-white/5 flex flex-col justify-between group hover:border-green-400/30 transition-all duration-500 shadow-2xl min-h-[220px] relative overflow-hidden">
                 <div className="absolute bottom-0 right-0 w-32 h-32 bg-green-500/10 blur-[50px] rounded-full group-hover:bg-green-500/20 transition-colors"></div>
                 <div className="flex justify-between items-start z-10 relative">
                     <div className="bg-green-500/10 w-fit p-3.5 rounded-2xl border border-green-500/20 text-green-400 shadow-lg shadow-green-500/10">
                          {stats[2].icon}
                     </div>
                     <span className="text-5xl font-black text-white tracking-tighter group-hover:text-green-400 transition-colors">{blogs.length}</span>
                 </div>
                 <div className="space-y-1 mt-6 z-10 relative">
                      <h3 className="text-xl font-bold text-white tracking-tight">Publications</h3>
                      <p className="text-xs font-medium text-gray-500">Live articles & news</p>
                 </div>
                 <div className="mt-6 h-1.5 w-full bg-white/5 rounded-full overflow-hidden z-10 relative">
                      <div className="h-full bg-green-500 w-[60%] shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                 </div>
            </div>

            {/* System Intel - Wide Information Block (Span 3) */}
            <div className="md:col-span-3 bg-[#0a0a0a] p-8 lg:p-10 rounded-[2.5rem] border border-white/5 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden shadow-2xl group">
                <div className="w-20 h-20 bg-white/5 rounded-[1.5rem] flex items-center justify-center text-primary border border-white/5 shrink-0 group-hover:rotate-12 transition-transform duration-500 shadow-inner">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <div className="text-center md:text-left space-y-2">
                    <div className="flex items-center justify-center md:justify-start gap-3">
                         <h4 className="text-2xl font-bold text-white tracking-tight">System Intelligence</h4>
                         <span className="px-2.5 py-1 bg-primary/10 text-primary text-[9px] font-bold uppercase tracking-widest rounded-full border border-primary/20">Optimized</span>
                    </div>
                    <p className="text-gray-500 font-medium leading-relaxed max-w-2xl text-sm">
                        All core modules are running standard security protocols. No threats detected. Performance is currently within the top 98 percentile globally.
                    </p>
                </div>
            </div>

            {/* Support Tile - Compact CTA (Span 1) */}
            <div className="md:col-span-1 bg-primary p-8 lg:p-10 rounded-[2.5rem] flex flex-col justify-between items-start group cursor-pointer hover:shadow-[0_0_40px_rgba(32,211,116,0.25)] transition-all duration-500 relative overflow-hidden">
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/20 blur-3xl rounded-full"></div>
                <div className="space-y-2 relative z-10">
                    <h4 className="text-3xl font-black text-black leading-none uppercase tracking-tighter">Support<br/>Hub</h4>
                    <p className="text-black/60 font-bold text-[10px] uppercase tracking-widest mt-2">Technical Guides</p>
                </div>
                <div className="w-full flex justify-end mt-8 relative z-10">
                     <button className="w-14 h-14 bg-black text-primary rounded-full flex items-center justify-center group-hover:scale-110 group-hover:-rotate-45 transition-all shadow-[0_10px_20px_rgba(0,0,0,0.3)]">
                         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                         </svg>
                     </button>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboardHome;
