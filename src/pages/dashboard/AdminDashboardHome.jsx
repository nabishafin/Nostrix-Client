import React from 'react';
import { Link } from 'react-router-dom';
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
        { name: 'Users', value: users.length, to: '/admin/users' },
        { name: 'Projects', value: projects.length, to: '/admin/projects' },
        { name: 'Blog posts', value: blogs.length, to: '/admin/blogs' },
    ];

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

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-xl font-bold text-white">Hi, <span className="text-primary">{user?.name}</span></h1>
                <p className="text-gray-500 mt-1">Overview of your site content.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {stats.map((s) => (
                    <Link key={s.name} to={s.to} className="bg-[#111] border border-white/10 hover:border-primary/40 rounded-lg p-4 transition-colors">
                        <p className="text-xs text-gray-500 uppercase tracking-wider">{s.name}</p>
                        <p className="text-3xl font-bold text-white mt-1">{s.value}</p>
                    </Link>
                ))}
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
