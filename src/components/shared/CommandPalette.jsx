import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetProjectsQuery } from '../../redux/features/projects/projectsApi';
import { useGetBlogsQuery } from '../../redux/features/blogs/blogsApi';

const PAGES = [
    { label: 'Home', path: '/', hint: 'Page' },
    { label: 'Services', path: '/services', hint: 'Page' },
    { label: 'Projects', path: '/projects', hint: 'Page' },
    { label: 'Blogs', path: '/blogs', hint: 'Page' },
    { label: 'About Us', path: '/aboutus', hint: 'Page' },
    { label: 'Resume', path: '/resume', hint: 'Page' },
    { label: 'Contact', path: '/contact', hint: 'Page' },
    { label: 'Web Development', path: '/services/web', hint: 'Service' },
    { label: 'UI/UX Design', path: '/services/uiux', hint: 'Service' },
    { label: 'Graphics Design', path: '/services/graphics', hint: 'Service' },
    { label: 'Digital Marketing', path: '/services/digital', hint: 'Service' },
];

/** Ctrl/Cmd + K quick navigation. Also opens from the navbar via a "open-command-palette" window event. */
const CommandPalette = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [active, setActive] = useState(0);
    const inputRef = useRef(null);

    // Only fetch content once the palette is first opened
    const { data: projects = [] } = useGetProjectsQuery(undefined, { skip: !open });
    const { data: blogs = [] } = useGetBlogsQuery(undefined, { skip: !open });

    const close = useCallback(() => { setOpen(false); setQuery(''); setActive(0); }, []);

    useEffect(() => {
        const onKey = (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
                e.preventDefault();
                setOpen((o) => !o);
            } else if (e.key === 'Escape') {
                close();
            }
        };
        const onOpen = () => setOpen(true);
        window.addEventListener('keydown', onKey);
        window.addEventListener('open-command-palette', onOpen);
        return () => {
            window.removeEventListener('keydown', onKey);
            window.removeEventListener('open-command-palette', onOpen);
        };
    }, [close]);

    useEffect(() => { if (open) setTimeout(() => inputRef.current?.focus(), 0); }, [open]);

    const items = useMemo(() => {
        const all = [
            ...PAGES,
            ...projects.map((p) => ({ label: p.title, path: `/projects/${p._id}`, hint: 'Project' })),
            ...blogs.map((b) => ({ label: b.title, path: `/blogs/${b._id}`, hint: 'Blog' })),
        ];
        const q = query.trim().toLowerCase();
        return (q ? all.filter((i) => `${i.label} ${i.hint}`.toLowerCase().includes(q)) : all).slice(0, 30);
    }, [projects, blogs, query]);

    const go = (item) => {
        close();
        navigate(item.path);
    };

    const onInputKey = (e) => {
        if (e.key === 'ArrowDown') { e.preventDefault(); setActive((a) => Math.min(a + 1, items.length - 1)); }
        else if (e.key === 'ArrowUp') { e.preventDefault(); setActive((a) => Math.max(a - 1, 0)); }
        else if (e.key === 'Enter' && items[active]) go(items[active]);
    };

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4" role="dialog" aria-modal="true" aria-label="Command palette">
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={close} />
            <div className="relative w-full max-w-xl bg-[#111] border border-white/10 rounded-lg shadow-2xl overflow-hidden">
                <input
                    ref={inputRef}
                    value={query}
                    onChange={(e) => { setQuery(e.target.value); setActive(0); }}
                    onKeyDown={onInputKey}
                    placeholder="Search pages, projects, blog posts..."
                    className="w-full bg-transparent text-white placeholder-gray-500 px-4 py-3 border-b border-white/10 outline-none"
                />
                <ul className="max-h-80 overflow-y-auto py-1">
                    {items.length === 0 && <li className="px-4 py-6 text-center text-gray-500 text-sm">No results</li>}
                    {items.map((item, i) => (
                        <li key={`${item.path}-${i}`}>
                            <button
                                onClick={() => go(item)}
                                onMouseEnter={() => setActive(i)}
                                className={`w-full flex items-center justify-between gap-3 px-4 py-2 text-left text-sm ${
                                    i === active ? 'bg-primary/15 text-primary' : 'text-gray-300'
                                }`}
                            >
                                <span className="truncate">{item.label}</span>
                                <span className="text-[10px] uppercase tracking-wider text-gray-500 shrink-0">{item.hint}</span>
                            </button>
                        </li>
                    ))}
                </ul>
                <div className="flex justify-between px-4 py-2 border-t border-white/10 text-[11px] text-gray-500">
                    <span>↑↓ navigate · Enter open · Esc close</span>
                    <span>Ctrl K</span>
                </div>
            </div>
        </div>
    );
};

export default CommandPalette;
