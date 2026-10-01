import React, { useState } from 'react';
import { useGetProjectsQuery, useDeleteProjectMutation, useCreateProjectMutation, useUpdateProjectMutation } from '../../redux/features/projects/projectsApi';
import toast from 'react-hot-toast';
import ImageUpload from '../../components/shared/ImageUpload';

const inputCls = 'input input-bordered input-sm h-10 w-full bg-black text-white border-white/10 rounded-md focus:border-primary';
const areaCls = 'textarea textarea-bordered w-full bg-black text-white border-white/10 rounded-md focus:border-primary';
const labelCls = 'mb-1 block text-xs font-medium text-gray-400';
const sectionCls = 'text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-white/10 pb-2';

const ManageProjects = () => {
    const { data: projects = [], isLoading } = useGetProjectsQuery();
    const [deleteProject] = useDeleteProjectMutation();
    const [createProject] = useCreateProjectMutation();
    const [updateProject] = useUpdateProjectMutation();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMode, setModalMode] = useState('add');
    const [currentData, setCurrentData] = useState(null);

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this project?')) {
            try {
                await deleteProject(id).unwrap();
                toast.success('Project Removed');
            } catch {
                toast.error('Deletion Failed');
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const rawFormData = new FormData(e.target);
        const finalFormData = new FormData();

        finalFormData.append('title', rawFormData.get('title'));
        finalFormData.append('category', rawFormData.get('category'));
        finalFormData.append('liveLink', rawFormData.get('liveLink'));
        finalFormData.append('description', rawFormData.get('description'));

        const imageFile = rawFormData.get('image');
        if (imageFile && imageFile.size > 0) {
            finalFormData.append('image', imageFile);
        }

        const tagsString = rawFormData.get('tags_input');
        const tagsArray = tagsString ? tagsString.split(',').map(tag => tag.trim()) : [];
        finalFormData.append('tags', JSON.stringify(tagsArray));

        const clientInfo = {
            name: rawFormData.get('clientName'),
            duration: rawFormData.get('duration')
        };
        finalFormData.append('clientInfo', JSON.stringify(clientInfo));

        const caseStudy = {
            challenge: rawFormData.get('challenge'),
            solution: rawFormData.get('solution'),
            resultImpact: rawFormData.get('resultImpact'),
            keyFeatures: rawFormData.get('keyFeatures') ? rawFormData.get('keyFeatures').split('\n').map(f => f.trim()).filter(f => f) : []
        };
        finalFormData.append('caseStudy', JSON.stringify(caseStudy));

        try {
            if (modalMode === 'add') {
                await createProject(finalFormData).unwrap();
                toast.success('Project Added');
            } else {
                await updateProject({ id: currentData._id, data: finalFormData }).unwrap();
                toast.success('Project Updated');
            }
            setIsModalOpen(false);
        } catch (err) {
            const errorMessage = err?.data?.message || err?.message || 'Execution failed';
            toast.error(errorMessage);
        }
    };

    const openModal = (mode, data = null) => {
        setModalMode(mode);
        setCurrentData(data);
        setIsModalOpen(true);
    };

    if (isLoading) return <div className="flex justify-center p-16"><span className="loading loading-spinner text-primary"></span></div>;

    return (
        <div className="space-y-4">
            <div className="flex items-end justify-between gap-4">
                <div>
                    <h1 className="text-xl font-bold text-white">Projects</h1>
                    <p className="text-gray-500 mt-1">Manage your portfolio case studies.</p>
                </div>
                <button onClick={() => openModal('add')} className="btn btn-sm h-9 bg-primary hover:bg-primary/80 text-black border-none rounded-md">
                    + New project
                </button>
            </div>

            <div className="bg-[#111] border border-white/10 rounded-lg overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr className="text-xs uppercase tracking-wider text-gray-500 border-white/10">
                            <th>Project</th>
                            <th>Category / Client</th>
                            <th>Tags</th>
                            <th className="text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.length === 0 && (
                            <tr><td colSpan={4} className="text-center text-gray-500 py-8">No projects yet</td></tr>
                        )}
                        {projects.map((project) => (
                            <tr key={project._id} className="border-white/5 hover:bg-white/[0.03]">
                                <td>
                                    <div className="flex items-center gap-3">
                                        {project.image
                                            ? <img src={project.image} alt={project.title} className="w-10 h-10 rounded object-cover shrink-0" />
                                            : <div className="w-10 h-10 rounded bg-white/5 shrink-0" />}
                                        <p className="font-medium text-white truncate max-w-xs">{project.title}</p>
                                    </div>
                                </td>
                                <td>
                                    <p className="text-primary text-xs font-semibold">{project.category || 'Case Study'}</p>
                                    <p className="text-xs text-gray-500">{project.clientInfo?.name || '-'}</p>
                                </td>
                                <td className="text-xs text-gray-500">
                                    {project.tags?.slice(0, 3).map((tag) => `#${tag}`).join(' ')}
                                </td>
                                <td className="text-right whitespace-nowrap">
                                    <button onClick={() => openModal('edit', project)} className="btn btn-ghost btn-xs text-primary">Edit</button>
                                    <button onClick={() => handleDelete(project._id)} className="btn btn-ghost btn-xs text-red-400">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {isModalOpen && (
                <div className="modal modal-open">
                    <div className="modal-box bg-[#111] border border-white/10 rounded-lg max-w-3xl p-0 text-gray-200">
                        <div className="px-5 py-3 border-b border-white/10 flex justify-between items-center">
                            <h3 className="font-semibold text-white">{modalMode === 'add' ? 'New project' : 'Edit project'}</h3>
                            <button onClick={() => setIsModalOpen(false)} className="btn btn-ghost btn-sm btn-square text-gray-400">✕</button>
                        </div>

                        <form onSubmit={handleSubmit} className="p-5 space-y-5 max-h-[75vh] overflow-y-auto">
                            <div className="space-y-3">
                                <h4 className={sectionCls}>Basic information</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className={labelCls}>Title</label>
                                        <input name="title" required defaultValue={currentData?.title} className={inputCls} />
                                    </div>
                                    <div>
                                        <label className={labelCls}>Category</label>
                                        <input name="category" defaultValue={currentData?.category} className={inputCls} placeholder="e.g. Web Development" />
                                    </div>
                                    <div>
                                        <label className={labelCls}>Live URL</label>
                                        <input name="liveLink" required defaultValue={currentData?.liveLink} className={inputCls} placeholder="https://" />
                                    </div>
                                    <div>
                                        <label className={labelCls}>Tags (comma separated)</label>
                                        <input name="tags_input" defaultValue={currentData?.tags?.join(', ')} className={inputCls} placeholder="React, Figma" />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <h4 className={sectionCls}>Client</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className={labelCls}>Client name</label>
                                        <input name="clientName" required defaultValue={currentData?.clientInfo?.name} className={inputCls} />
                                    </div>
                                    <div>
                                        <label className={labelCls}>Timeline</label>
                                        <input name="duration" required defaultValue={currentData?.clientInfo?.duration} className={inputCls} placeholder="3 Months" />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <h4 className={sectionCls}>Case study</h4>
                                <div>
                                    <label className={labelCls}>Description</label>
                                    <textarea name="description" required defaultValue={currentData?.description} className={`${areaCls} h-20`}></textarea>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className={labelCls}>Challenge</label>
                                        <textarea name="challenge" required defaultValue={currentData?.caseStudy?.challenge} className={`${areaCls} h-28`}></textarea>
                                    </div>
                                    <div>
                                        <label className={labelCls}>Solution</label>
                                        <textarea name="solution" required defaultValue={currentData?.caseStudy?.solution} className={`${areaCls} h-28`}></textarea>
                                    </div>
                                </div>
                                <div>
                                    <label className={labelCls}>Result / impact</label>
                                    <textarea name="resultImpact" required defaultValue={currentData?.caseStudy?.resultImpact} className={`${areaCls} h-20`}></textarea>
                                </div>
                                <div>
                                    <label className={labelCls}>Key features (one per line)</label>
                                    <textarea name="keyFeatures" defaultValue={currentData?.caseStudy?.keyFeatures?.join('\n')} className={`${areaCls} h-24 font-mono text-xs`}></textarea>
                                </div>
                            </div>

                            <div>
                                <label className={labelCls}>Project image</label>
                                <ImageUpload name="image" currentUrl={currentData?.image} />
                            </div>

                            <div className="flex justify-end gap-2 pt-4 border-t border-white/10">
                                <button type="button" onClick={() => setIsModalOpen(false)} className="btn btn-ghost btn-sm text-gray-400">Cancel</button>
                                <button type="submit" className="btn btn-sm bg-primary hover:bg-primary/80 text-black border-none rounded-md px-6">
                                    {modalMode === 'add' ? 'Add project' : 'Save'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManageProjects;
