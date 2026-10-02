import React, { useState } from 'react';
import toast from 'react-hot-toast';
import {
    useGetContactMessagesQuery,
    useUpdateMessageStatusMutation,
    useDeleteMessageMutation,
} from '../../redux/features/contact/contactApi';

const statusStyles = {
    unread: 'bg-primary/15 text-primary',
    read: 'bg-white/10 text-gray-400',
    replied: 'bg-blue-500/15 text-blue-400',
};

const FILTERS = ['all', 'unread', 'read', 'replied'];

const formatDate = (d) =>
    new Date(d).toLocaleString('en-US', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });

const ManageMessages = () => {
    const { data: messages = [], isLoading } = useGetContactMessagesQuery();
    const [updateStatus] = useUpdateMessageStatusMutation();
    const [deleteMessage] = useDeleteMessageMutation();
    const [filter, setFilter] = useState('all');
    const [selected, setSelected] = useState(null);

    const filtered = filter === 'all' ? messages : messages.filter((m) => m.status === filter);
    const unreadCount = messages.filter((m) => m.status === 'unread').length;

    const setStatus = async (msg, status) => {
        try {
            const updated = await updateStatus({ id: msg._id, status }).unwrap();
            if (selected?._id === msg._id) setSelected({ ...selected, status: updated.status });
        } catch (err) {
            toast.error(err?.data?.message || 'Failed to update status');
        }
    };

    const open = (msg) => {
        setSelected(msg);
        if (msg.status === 'unread') setStatus(msg, 'read');
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Delete this message?')) return;
        try {
            await deleteMessage(id).unwrap();
            toast.success('Message deleted');
            if (selected?._id === id) setSelected(null);
        } catch {
            toast.error('Delete failed');
        }
    };

    if (isLoading) return <div className="flex justify-center p-16"><span className="loading loading-spinner text-primary"></span></div>;

    return (
        <div className="space-y-4">
            <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                    <h1 className="text-xl font-bold text-white">Inbox</h1>
                    <p className="text-gray-500 mt-1">{unreadCount} unread of {messages.length} messages.</p>
                </div>
                <div className="flex gap-1 bg-[#111] border border-white/10 rounded-md p-1">
                    {FILTERS.map((f) => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`px-3 py-1 rounded text-xs capitalize transition-colors ${
                                filter === f ? 'bg-primary text-black font-semibold' : 'text-gray-400 hover:text-white'
                            }`}
                        >
                            {f}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
                <div className="lg:col-span-2 bg-[#111] border border-white/10 rounded-lg divide-y divide-white/5 max-h-[70vh] overflow-y-auto">
                    {filtered.length === 0 && <p className="text-center text-gray-500 py-10">No messages</p>}
                    {filtered.map((m) => (
                        <button
                            key={m._id}
                            onClick={() => open(m)}
                            className={`w-full text-left px-4 py-3 hover:bg-white/[0.04] transition-colors ${selected?._id === m._id ? 'bg-white/[0.06]' : ''}`}
                        >
                            <div className="flex items-center justify-between gap-2">
                                <span className={`truncate ${m.status === 'unread' ? 'font-semibold text-white' : 'text-gray-300'}`}>
                                    {m.firstName} {m.lastName}
                                </span>
                                <span className={`px-1.5 py-0.5 rounded text-[10px] font-semibold uppercase shrink-0 ${statusStyles[m.status]}`}>{m.status}</span>
                            </div>
                            <p className="text-xs text-gray-400 truncate mt-0.5">{m.subject || '(no subject)'}</p>
                            <p className="text-[11px] text-gray-600 mt-0.5">{formatDate(m.createdAt)}</p>
                        </button>
                    ))}
                </div>

                <div className="lg:col-span-3 bg-[#111] border border-white/10 rounded-lg p-5 min-h-[260px]">
                    {!selected ? (
                        <p className="text-gray-500 text-center py-16">Select a message to read it</p>
                    ) : (
                        <div className="space-y-4">
                            <div className="flex flex-wrap items-start justify-between gap-3">
                                <div>
                                    <h2 className="text-lg font-semibold text-white">{selected.subject || '(no subject)'}</h2>
                                    <p className="text-xs text-gray-500 mt-1">{formatDate(selected.createdAt)}</p>
                                </div>
                                <span className={`px-2 py-0.5 rounded text-[11px] font-semibold uppercase ${statusStyles[selected.status]}`}>{selected.status}</span>
                            </div>
                            <div className="text-sm space-y-1 text-gray-300">
                                <p><span className="text-gray-500">From:</span> {selected.firstName} {selected.lastName}</p>
                                <p><span className="text-gray-500">Email:</span> <a href={`mailto:${selected.email}`} className="text-primary hover:underline">{selected.email}</a></p>
                                {selected.phone && <p><span className="text-gray-500">Phone:</span> {selected.phone}</p>}
                            </div>
                            <p className="whitespace-pre-wrap text-gray-200 border-t border-white/10 pt-4">{selected.message}</p>
                            <div className="flex flex-wrap gap-2 pt-2">
                                <a
                                    href={`mailto:${selected.email}?subject=${encodeURIComponent('Re: ' + (selected.subject || ''))}`}
                                    onClick={() => setStatus(selected, 'replied')}
                                    className="btn btn-sm bg-primary hover:bg-primary/80 text-black border-none rounded-md"
                                >
                                    Reply by email
                                </a>
                                {selected.status !== 'unread' && (
                                    <button onClick={() => setStatus(selected, 'unread')} className="btn btn-sm btn-ghost text-gray-300">Mark unread</button>
                                )}
                                <button onClick={() => handleDelete(selected._id)} className="btn btn-sm btn-ghost text-red-400 ml-auto">Delete</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ManageMessages;
