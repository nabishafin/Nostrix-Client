import React, { useState } from 'react';
import toast from 'react-hot-toast';
import {
    useGetTeamQuery,
    useCreateTeamMemberMutation,
    useUpdateTeamMemberMutation,
    useDeleteTeamMemberMutation,
} from '../../redux/features/content/contentApi';
import ImageUpload from '../../components/shared/ImageUpload';

const inputCls = 'input input-bordered input-sm h-10 w-full bg-black text-white border-white/10 rounded-md focus:border-primary';
const labelCls = 'mb-1 block text-xs font-medium text-gray-400';
const SOCIAL_KEYS = ['facebook', 'twitter', 'linkedin', 'github'];

const ManageTeam = () => {
    const { data: team = [], isLoading } = useGetTeamQuery();
    const [createMember, { isLoading: creating }] = useCreateTeamMemberMutation();
    const [updateMember, { isLoading: updating }] = useUpdateTeamMemberMutation();
    const [deleteMember] = useDeleteTeamMemberMutation();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMode, setModalMode] = useState('add');
    const [current, setCurrent] = useState(null);

    const openModal = (mode, data = null) => {
        setModalMode(mode);
        setCurrent(data);
        setIsModalOpen(true);
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Remove this team member?')) return;
        try {
            await deleteMember(id).unwrap();
            toast.success('Team member removed');
        } catch {
            toast.error('Delete failed');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const raw = new FormData(e.target);
        const body = new FormData();
        ['name', 'role', 'title', 'order'].forEach((k) => body.append(k, raw.get(k) ?? ''));
        const socials = Object.fromEntries(SOCIAL_KEYS.map((k) => [k, raw.get(k) || '']));
        body.append('socials', JSON.stringify(socials));
        const image = raw.get('image');
        if (image && image.size > 0) body.append('image', image);

        try {
            if (modalMode === 'add') {
                await createMember(body).unwrap();
                toast.success('Team member added');
            } else {
                await updateMember({ id: current._id, data: body }).unwrap();
                toast.success('Team member updated');
            }
            setIsModalOpen(false);
        } catch (err) {
            toast.error(err?.data?.message || 'Failed to save');
        }
    };

    if (isLoading) return <div className="flex justify-center p-16"><span className="loading loading-spinner text-primary"></span></div>;

    return (
        <div className="space-y-4">
            <div className="flex items-end justify-between gap-4">
                <div>
                    <h1 className="text-xl font-bold text-white">Team</h1>
                    <p className="text-gray-500 mt-1">Shown on the About page. Until you add members, the default team is shown.</p>
                </div>
                <button onClick={() => openModal('add')} className="btn btn-sm h-9 bg-primary hover:bg-primary/80 text-black border-none rounded-md">+ New member</button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {team.length === 0 && <p className="sm:col-span-2 lg:col-span-3 text-center text-gray-500 py-10 bg-[#111] border border-white/10 rounded-lg">No team members yet</p>}
                {team.map((m) => (
                    <div key={m._id} className="bg-[#111] border border-white/10 rounded-lg p-4 flex items-center gap-3">
                        {m.image
                            ? <img src={m.image} alt={m.name} className="w-14 h-14 rounded-lg object-cover object-top shrink-0" />
                            : <div className="w-14 h-14 rounded-lg bg-white/10 shrink-0 flex items-center justify-center text-primary font-semibold">{m.name?.charAt(0)}</div>}
                        <div className="min-w-0 flex-1">
                            <p className="font-medium text-white truncate">{m.name}</p>
                            <p className="text-xs text-gray-500 truncate">{m.role}</p>
                        </div>
                        <div className="flex flex-col">
                            <button onClick={() => openModal('edit', m)} className="btn btn-ghost btn-xs text-primary">Edit</button>
                            <button onClick={() => handleDelete(m._id)} className="btn btn-ghost btn-xs text-red-400">Delete</button>
                        </div>
                    </div>
                ))}
            </div>

            {isModalOpen && (
                <div className="modal modal-open">
                    <div className="modal-box bg-[#111] border border-white/10 rounded-lg max-w-xl p-0 text-gray-200">
                        <div className="px-5 py-3 border-b border-white/10 flex justify-between items-center">
                            <h3 className="font-semibold text-white">{modalMode === 'add' ? 'New team member' : 'Edit team member'}</h3>
                            <button onClick={() => setIsModalOpen(false)} className="btn btn-ghost btn-sm btn-square text-gray-400">✕</button>
                        </div>
                        <form onSubmit={handleSubmit} className="p-5 space-y-4 max-h-[75vh] overflow-y-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div><label className={labelCls}>Name</label><input name="name" required defaultValue={current?.name} className={inputCls} /></div>
                                <div><label className={labelCls}>Role</label><input name="role" required defaultValue={current?.role} className={inputCls} placeholder="Web Developer" /></div>
                                <div><label className={labelCls}>Title (optional)</label><input name="title" defaultValue={current?.title} className={inputCls} placeholder="CEO, Nostrix Creative" /></div>
                                <div><label className={labelCls}>Order</label><input name="order" type="number" defaultValue={current?.order ?? 0} className={inputCls} /></div>
                            </div>
                            <div>
                                <label className={labelCls}>Photo</label>
                                <ImageUpload name="image" currentUrl={current?.image} />
                            </div>
                            <div>
                                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-white/10 pb-2 mb-3">Social links (optional)</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {SOCIAL_KEYS.map((k) => (
                                        <div key={k}>
                                            <label className={`${labelCls} capitalize`}>{k}</label>
                                            <input name={k} type="url" defaultValue={current?.socials?.[k]} className={inputCls} placeholder="https://" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex justify-end gap-2 pt-4 border-t border-white/10">
                                <button type="button" onClick={() => setIsModalOpen(false)} className="btn btn-ghost btn-sm text-gray-400">Cancel</button>
                                <button type="submit" disabled={creating || updating} className="btn btn-sm bg-primary hover:bg-primary/80 text-black border-none rounded-md px-6">
                                    {creating || updating ? 'Saving...' : modalMode === 'add' ? 'Add' : 'Save'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManageTeam;
