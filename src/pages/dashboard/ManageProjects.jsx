import React, { useState } from 'react';
import { useGetProjectsQuery, useDeleteProjectMutation, useCreateProjectMutation, useUpdateProjectMutation } from '../../redux/features/projects/projectsApi';
import toast from 'react-hot-toast';

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
            } catch (err) {
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

    if (isLoading) return <div className="flex justify-center p-20"><span className="loading loading-spinner text-[#20D374]"></span></div>;

    return (
        <div className="p-6 md:p-10 space-y-10 bg-[#FAF9F6] min-h-screen">
            {/* Sync Header with Blog Style */}
            <div className="flex flex-col md:flex-row justify-between items-center bg-white p-8 rounded-2xl shadow-sm border border-gray-200 gap-6">
                <div>
                    <h2 className="text-3xl font-bold text-[#111827]">Project Index</h2>
                    <p className="text-gray-500 text-sm mt-1">Manage your professional case studies and digital deliverables</p>
                </div>
                <button 
                    onClick={() => openModal('add')} 
                    className="btn bg-[#20D374] hover:bg-[#1bb865] text-white border-none normal-case px-8"
                >
                    + Add New Project
                </button>
            </div>

            {/* Table View Matching Blog Style */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead className="bg-[#FAF9F6] text-[#4B5563] font-bold uppercase text-[11px] tracking-wider">
                            <tr>
                                <th className="py-5 px-6">Project Assets</th>
                                <th>Category & Client</th>
                                <th>Operational Progress</th>
                                <th className="text-right px-8">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {projects.map((project) => (
                                <tr key={project._id} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="py-5 px-6">
                                        <div className="flex items-center gap-4">
                                            <div className="avatar">
                                                <div className="w-12 h-12 rounded-xl">
                                                    {project.image && <img src={project.image} alt={project.title} />}
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold text-[#111827]">{project.title}</div>
                                                <div className="text-xs text-gray-400">ID: {project._id.slice(-6).toUpperCase()}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="space-y-1">
                                            <span className="px-2 py-0.5 bg-green-50 text-[#20D374] text-[9px] font-bold uppercase rounded">{project.category || 'Case Study'}</span>
                                            <div className="text-xs text-gray-500 font-medium">{project.clientInfo?.name || "Global Partner"}</div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="flex flex-wrap gap-1">
                                            {project.tags?.slice(0, 3).map((tag, i) => (
                                                <span key={i} className="text-[10px] text-gray-400">#{tag}</span>
                                            ))}
                                        </div>
                                    </td>
                                    <td className="text-right px-8 space-x-3">
                                        <button onClick={() => openModal('edit', project)} className="btn btn-ghost btn-xs text-[#20D374] normal-case font-bold">Configure</button>
                                        <button onClick={() => handleDelete(project._id)} className="btn btn-ghost btn-xs text-red-500 normal-case font-bold">Remove</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal - Already Consistent Vertical Layout */}
            {isModalOpen && (
                <div className="modal modal-open">
                    <div className="modal-box bg-white max-w-4xl p-0 overflow-hidden rounded-2xl shadow-2xl border border-gray-200">
                        <div className="p-6 border-b flex justify-between items-center bg-[#FAF9F6]">
                            <h3 className="text-xl font-bold text-[#111827]">
                                {modalMode === 'add' ? 'New Project Deployment' : 'Edit Project Config'}
                            </h3>
                            <button onClick={() => setIsModalOpen(false)} className="btn btn-ghost btn-sm btn-circle text-[#111827]">✕</button>
                        </div>

                        <form onSubmit={handleSubmit} className="p-8 space-y-8 max-h-[75vh] overflow-y-auto">
                            
                            <div className="space-y-6">
                                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest border-b pb-3">Basic Information</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="form-control w-full">
                                        <label className="mb-2 block text-xs font-bold text-[#4B5563] uppercase">Project Title</label>
                                        <input name="title" required defaultValue={currentData?.title} className="input input-bordered w-full bg-white text-[#111827] border-gray-300 focus:border-[#20D374]" placeholder="Internal Name" />
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="mb-2 block text-xs font-bold text-[#4B5563] uppercase">Category</label>
                                        <input name="category" defaultValue={currentData?.category} className="input input-bordered w-full bg-white text-[#111827] border-gray-300 focus:border-[#20D374]" placeholder="e.g. Web Development" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="form-control w-full">
                                        <label className="mb-2 block text-xs font-bold text-[#4B5563] uppercase">Live URL</label>
                                        <input name="liveLink" required defaultValue={currentData?.liveLink} className="input input-bordered w-full bg-white text-[#111827] border-gray-300 focus:border-[#20D374]" placeholder="https://" />
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="mb-2 block text-xs font-bold text-[#4B5563] uppercase">Tags (comma separated)</label>
                                        <input name="tags_input" defaultValue={currentData?.tags?.join(', ')} className="input input-bordered w-full bg-white text-[#111827] border-gray-300 focus:border-[#20D374]" placeholder="React, Figma" />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest border-b pb-3">Client Details</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="form-control w-full">
                                        <label className="mb-2 block text-xs font-bold text-[#4B5563] uppercase">Client Name</label>
                                        <input name="clientName" required defaultValue={currentData?.clientInfo?.name} className="input input-bordered w-full bg-white text-[#111827] border-gray-300 focus:border-[#20D374]" placeholder="Acme Corp" />
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="mb-2 block text-xs font-bold text-[#4B5563] uppercase">Timeline</label>
                                        <input name="duration" required defaultValue={currentData?.clientInfo?.duration} className="input input-bordered w-full bg-white text-[#111827] border-gray-300 focus:border-[#20D374]" placeholder="3 Months" />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest border-b pb-3">Project Narrative</h4>
                                <div className="form-control w-full">
                                    <label className="mb-2 block text-xs font-bold text-[#4B5563] uppercase">Main Description</label>
                                    <textarea name="description" required defaultValue={currentData?.description} className="textarea textarea-bordered h-24 w-full bg-white text-[#111827] border-gray-300 focus:border-[#20D374]" placeholder="Brief project summary"></textarea>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="form-control w-full">
                                        <label className="mb-2 block text-xs font-bold text-red-500 uppercase">The Challenge</label>
                                        <textarea name="challenge" required defaultValue={currentData?.caseStudy?.challenge} className="textarea textarea-bordered h-32 w-full bg-white text-[#111827] border-red-200 focus:border-red-500" placeholder="Problems solved"></textarea>
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="mb-2 block text-xs font-bold text-[#20D374] uppercase">The Solution</label>
                                        <textarea name="solution" required defaultValue={currentData?.caseStudy?.solution} className="textarea textarea-bordered h-32 w-full bg-white text-[#111827] border-green-200 focus:border-[#20D374]" placeholder="Implementation details"></textarea>
                                    </div>
                                </div>

                                <div className="form-control w-full">
                                    <label className="mb-2 block text-xs font-bold text-[#4B5563] uppercase">Result Impact</label>
                                    <textarea name="resultImpact" required defaultValue={currentData?.caseStudy?.resultImpact} className="textarea textarea-bordered h-24 w-full bg-white text-[#111827] border-gray-300 focus:border-[#20D374]" placeholder="Outcome and feedback"></textarea>
                                </div>
                                
                                <div className="form-control w-full">
                                    <label className="mb-2 block text-xs font-bold text-[#4B5563] uppercase">Key Features (One per line)</label>
                                    <textarea name="keyFeatures" defaultValue={currentData?.caseStudy?.keyFeatures?.join('\n')} className="textarea textarea-bordered h-32 w-full bg-white text-[#111827] border-gray-300 font-mono text-sm" placeholder="AI Integration&#10;Mobile Responsive"></textarea>
                                </div>
                            </div>

                            <div className="form-control w-full p-6 border-2 border-dashed border-gray-200 rounded-xl bg-[#FAF9F6]">
                                <label className="mb-2 block text-xs font-bold text-[#4B5563] uppercase">Project Display Asset</label>
                                <input type="file" name="image" className="file-input file-input-bordered w-full bg-white text-[#111827]" />
                            </div>

                            <div className="flex justify-end gap-3 pt-6 border-t mt-4">
                                <button type="button" onClick={() => setIsModalOpen(false)} className="btn btn-ghost normal-case text-[#4B5563]">Cancel</button>
                                <button type="submit" className="btn bg-[#20D374] hover:bg-[#1bb865] text-white border-none normal-case px-12">
                                    {modalMode === 'add' ? 'Confirm Addition' : 'Save Changes'}
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
