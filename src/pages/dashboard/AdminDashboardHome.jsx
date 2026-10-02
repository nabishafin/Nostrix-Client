import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useGetProjectsQuery } from '../../redux/features/projects/projectsApi';
import { useGetBlogsQuery } from '../../redux/features/blogs/blogsApi';
import { useGetAnalyticsSummaryQuery } from '../../redux/features/analytics/analyticsApi';

const RANGES = [7, 14, 30];

// Simple SVG bar chart: views per day, with the unique visitors drawn as a line
const TrafficChart = ({ series }) => {
    const W = 600, H = 180, PAD = 24;
    const max = Math.max(1, ...series.map((d) => d.views));
    const step = (W - PAD * 2) / series.length;
    const barW = Math.max(2, step * 0.6);
    const y = (v) => H - PAD - (v / max) * (H - PAD * 2);
    const line = series.map((d, i) => `${PAD + i * step + step / 2},${y(d.visitors)}`).join(' ');

    return (
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label="Page views and unique visitors per day">
            {[0, 0.5, 1].map((t) => (
                <g key={t}>
                    <line x1={PAD} x2={W - PAD} y1={y(max * t)} y2={y(max * t)} stroke="rgba(255,255,255,0.08)" />
                    <text x={PAD - 6} y={y(max * t) + 3} textAnchor="end" fontSize="9" fill="#6b7280">{Math.round(max * t)}</text>
                </g>
            ))}
            {series.map((d, i) => (
                <g key={d.date}>
                    <rect x={PAD + i * step + (step - barW) / 2} y={y(d.views)} width={barW} height={Math.max(0, H - PAD - y(d.views))} rx="2" fill="#20D374" fillOpacity="0.85">
                        <title>{`${d.date}: ${d.views} views, ${d.visitors} visitors`}</title>
                    </rect>
                    {(series.length <= 14 || i % 3 === 0) && (
                        <text x={PAD + i * step + step / 2} y={H - 8} textAnchor="middle" fontSize="9" fill="#6b7280">{d.date.slice(5)}</text>
                    )}
                </g>
            ))}
            <polyline points={line} fill="none" stroke="#60a5fa" strokeWidth="1.5" />
        </svg>
    );
};

const StatCard = ({ label, value, to, accent = 'text-white' }) => {
    const body = (
        <>
            <p className="text-xs text-gray-500 uppercase tracking-wider">{label}</p>
            <p className={`text-3xl font-bold mt-1 ${accent}`}>{value ?? '-'}</p>
        </>
    );
    const cls = 'bg-[#111] border border-white/10 rounded-lg p-4';
    return to
        ? <Link to={to} className={`${cls} hover:border-primary/40 transition-colors`}>{body}</Link>
        : <div className={cls}>{body}</div>;
};

const RecentList = ({ title, items, to, render }) => (
    <div className="bg-[#111] border border-white/10 rounded-lg">
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
            <h3 className="font-semibold text-white">{title}</h3>
            <Link to={to} className="text-xs text-primary hover:underline">Manage</Link>
        </div>
        <ul className="divide-y divide-white/5">
            {items.length === 0 && <li className="px-4 py-6 text-center text-gray-500">Nothing here yet</li>}
            {items.slice(0, 5).map((item) => (
                <li key={item._id} className="flex items-center gap-3 px-4 py-2.5">
                    {item.image
                        ? <img src={item.image} alt="" className="w-9 h-9 rounded object-cover shrink-0" />
                        : <div className="w-9 h-9 rounded bg-white/5 shrink-0" />}
                    {render(item)}
                </li>
            ))}
        </ul>
    </div>
);

const AdminDashboardHome = () => {
    const { user } = useSelector((state) => state.auth);
    const [days, setDays] = useState(14);
    const { data: stats, isLoading: statsLoading } = useGetAnalyticsSummaryQuery(days);
    const { data: projects = [] } = useGetProjectsQuery();
    const { data: blogs = [] } = useGetBlogsQuery();

    const deviceTotal = (stats?.devices || []).reduce((n, d) => n + d.views, 0) || 1;

    return (
        <div className="space-y-6">
            <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                    <h1 className="text-xl font-bold text-white">Hi, <span className="text-primary">{user?.name}</span></h1>
                    <p className="text-gray-500 mt-1">Site traffic and content overview.</p>
                </div>
                <div className="flex gap-1 bg-[#111] border border-white/10 rounded-md p-1">
                    {RANGES.map((r) => (
                        <button
                            key={r}
                            onClick={() => setDays(r)}
                            className={`px-3 py-1 rounded text-xs transition-colors ${days === r ? 'bg-primary text-black font-semibold' : 'text-gray-400 hover:text-white'}`}
                        >
                            {r} days
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
                <StatCard label="Page views" value={stats?.totalViews} accent="text-primary" />
                <StatCard label="Visitors" value={stats?.uniqueVisitors} accent="text-blue-400" />
                <StatCard label="Projects" value={stats?.counts.projects ?? projects.length} to="/admin/projects" />
                <StatCard label="Blog posts" value={stats?.counts.blogs ?? blogs.length} to="/admin/blogs" />
                <StatCard label="Users" value={stats?.counts.users} to="/admin/users" />
                <StatCard label="Unread messages" value={stats?.counts.unreadMessages} to="/admin/messages" accent={stats?.counts.unreadMessages ? 'text-primary' : 'text-white'} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="lg:col-span-2 bg-[#111] border border-white/10 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold text-white">Traffic</h3>
                        <div className="flex gap-3 text-[11px] text-gray-400">
                            <span className="flex items-center gap-1"><i className="w-2 h-2 rounded-sm bg-primary inline-block" /> Views</span>
                            <span className="flex items-center gap-1"><i className="w-2 h-0.5 bg-blue-400 inline-block" /> Visitors</span>
                        </div>
                    </div>
                    {statsLoading
                        ? <div className="flex justify-center py-16"><span className="loading loading-spinner text-primary"></span></div>
                        : stats?.totalViews === 0
                            ? <p className="text-center text-gray-500 py-16">No visits recorded yet. Browse the public site and they will appear here.</p>
                            : <TrafficChart series={stats.series} />}
                </div>

                <div className="space-y-4">
                    <div className="bg-[#111] border border-white/10 rounded-lg p-4">
                        <h3 className="font-semibold text-white mb-3">Top pages</h3>
                        <ul className="space-y-2 text-sm">
                            {(stats?.topPages || []).length === 0 && <li className="text-gray-500">No data yet</li>}
                            {(stats?.topPages || []).map((p) => (
                                <li key={p.path} className="flex justify-between gap-3">
                                    <span className="truncate text-gray-300">{p.path}</span>
                                    <span className="text-gray-500 shrink-0">{p.views}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-[#111] border border-white/10 rounded-lg p-4">
                        <h3 className="font-semibold text-white mb-3">Devices</h3>
                        <div className="space-y-2 text-sm">
                            {(stats?.devices || []).length === 0 && <p className="text-gray-500">No data yet</p>}
                            {(stats?.devices || []).map((d) => (
                                <div key={d.device}>
                                    <div className="flex justify-between capitalize text-gray-300">
                                        <span>{d.device}</span><span className="text-gray-500">{Math.round((d.views / deviceTotal) * 100)}%</span>
                                    </div>
                                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden mt-1"><div className="h-full bg-primary" style={{ width: `${(d.views / deviceTotal) * 100}%` }} /></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <RecentList
                    title="Recent projects"
                    items={projects}
                    to="/admin/projects"
                    render={(p) => (
                        <div className="min-w-0">
                            <p className="font-medium text-white truncate">{p.title}</p>
                            <p className="text-xs text-gray-500 truncate">{p.clientInfo?.name}</p>
                        </div>
                    )}
                />
                <RecentList
                    title="Recent blog posts"
                    items={blogs}
                    to="/admin/blogs"
                    render={(b) => (
                        <div className="min-w-0">
                            <p className="font-medium text-white truncate">{b.title}</p>
                            <p className="text-xs text-gray-500 truncate">{b.category} · {b.date}</p>
                        </div>
                    )}
                />
            </div>
        </div>
    );
};

export default AdminDashboardHome;
