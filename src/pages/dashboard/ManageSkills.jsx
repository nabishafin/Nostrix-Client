import React, { useState } from 'react';
import toast from 'react-hot-toast';
import {
    useGetSkillsQuery,
    useCreateSkillMutation,
    useUpdateSkillMutation,
    useDeleteSkillMutation,
} from '../../redux/features/content/contentApi';

const inputCls = 'input input-bordered input-sm h-10 w-full bg-black text-white border-white/10 rounded-md focus:border-primary';
const labelCls = 'mb-1 block text-xs font-medium text-gray-400';

const emptyForm = { name: '', level: 80, category: 'Frontend', order: 0 };

const ManageSkills = () => {
    const { data: skills = [], isLoading } = useGetSkillsQuery();
    const [createSkill, { isLoading: creating }] = useCreateSkillMutation();
    const [updateSkill, { isLoading: updating }] = useUpdateSkillMutation();
    const [deleteSkill] = useDeleteSkillMutation();

    const [form, setForm] = useState(emptyForm);
    const [editingId, setEditingId] = useState(null);

    const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

    const reset = () => { setForm(emptyForm); setEditingId(null); };

    const startEdit = (s) => {
        setEditingId(s._id);
        setForm({ name: s.name, level: s.level, category: s.category, order: s.order ?? 0 });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const level = Number(form.level);
        if (Number.isNaN(level) || level < 0 || level > 100) return toast.error('Level must be between 0 and 100');
        const data = { ...form, level, order: Number(form.order) || 0 };
        try {
            if (editingId) {
                await updateSkill({ id: editingId, data }).unwrap();
                toast.success('Skill updated');
            } else {
                await createSkill(data).unwrap();
                toast.success('Skill added');
            }
            reset();
        } catch (err) {
            toast.error(err?.data?.message || 'Failed to save skill');
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Delete this skill?')) return;
        try {
            await deleteSkill(id).unwrap();
            toast.success('Skill deleted');
            if (editingId === id) reset();
        } catch {
            toast.error('Delete failed');
        }
    };

    if (isLoading) return <div className="flex justify-center p-16"><span className="loading loading-spinner text-primary"></span></div>;

    return (
        <div className="space-y-4">
            <div>
                <h1 className="text-xl font-bold text-white">Skills</h1>
                <p className="text-gray-500 mt-1">Shown as animated bars on the About page and as tags on the Resume. Until you add skills, a default list is used.</p>
            </div>

            <form onSubmit={handleSubmit} className="bg-[#111] border border-white/10 rounded-lg p-4 grid grid-cols-2 md:grid-cols-6 gap-3 items-end">
                <div className="col-span-2">
                    <label className={labelCls}>Name</label>
                    <input required value={form.name} onChange={set('name')} className={inputCls} placeholder="React" />
                </div>
                <div>
                    <label className={labelCls}>Category</label>
                    <input required value={form.category} onChange={set('category')} className={inputCls} placeholder="Frontend" />
                </div>
                <div>
                    <label className={labelCls}>Level (0-100)</label>
                    <input type="number" min="0" max="100" required value={form.level} onChange={set('level')} className={inputCls} />
                </div>
                <div>
                    <label className={labelCls}>Order</label>
                    <input type="number" value={form.order} onChange={set('order')} className={inputCls} />
                </div>
                <div className="flex gap-2">
                    <button type="submit" disabled={creating || updating} className="btn btn-sm h-10 flex-1 bg-primary hover:bg-primary/80 text-black border-none rounded-md">
                        {editingId ? 'Save' : 'Add'}
                    </button>
                    {editingId && <button type="button" onClick={reset} className="btn btn-sm h-10 btn-ghost text-gray-400">Cancel</button>}
                </div>
            </form>

            <div className="bg-[#111] border border-white/10 rounded-lg overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr className="text-xs uppercase tracking-wider text-gray-500 border-white/10">
                            <th>Skill</th><th>Category</th><th className="w-1/3">Level</th><th className="text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {skills.length === 0 && <tr><td colSpan={4} className="text-center text-gray-500 py-8">No skills yet. The default list is shown on the site.</td></tr>}
                        {skills.map((s) => (
                            <tr key={s._id} className="border-white/5 hover:bg-white/[0.03]">
                                <td className="font-medium text-white">{s.name}</td>
                                <td className="text-gray-400">{s.category}</td>
                                <td>
                                    <div className="flex items-center gap-2">
                                        <div className="h-1.5 flex-1 bg-white/10 rounded-full overflow-hidden"><div className="h-full bg-primary" style={{ width: `${s.level}%` }} /></div>
                                        <span className="text-xs text-gray-400 w-8">{s.level}%</span>
                                    </div>
                                </td>
                                <td className="text-right whitespace-nowrap">
                                    <button onClick={() => startEdit(s)} className="btn btn-ghost btn-xs text-primary">Edit</button>
                                    <button onClick={() => handleDelete(s._id)} className="btn btn-ghost btn-xs text-red-400">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageSkills;
