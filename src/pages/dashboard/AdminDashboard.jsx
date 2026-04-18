import React, { useState } from 'react';
import PageBanner from '../../components/shared/PageBanner';
import Heading from '../../components/shared/Heading';
import { useGetUsersQuery, useUpdateUserRoleMutation } from '../../redux/features/auth/authApi';
import { useGetProjectsQuery, useDeleteProjectMutation, useCreateProjectMutation, useUpdateProjectMutation } from '../../redux/features/projects/projectsApi';
import { useGetBlogsQuery, useDeleteBlogMutation, useCreateBlogMutation, useUpdateBlogMutation } from '../../redux/features/blogs/blogsApi';
import toast from 'react-hot-toast';

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('users');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMode, setModalMode] = useState('add'); // 'add' or 'edit'
    const [currentData, setCurrentData] = useState(null);

    // Queries
    const { data: users = [], isLoading: usersLoading } = useGetUsersQuery();
    const { data: projects = [], isLoading: projectsLoading } = useGetProjectsQuery();
    const { data: blogs = [], isLoading: blogsLoading } = useGetBlogsQuery();

    // Mutations
    const [updateUserRole, { isLoading: isUpdatingRole }] = useUpdateUserRoleMutation();
    
    const [deleteProject] = useDeleteProjectMutation();
    const [createProject] = useCreateProjectMutation();
    const [updateProject] = useUpdateProjectMutation();

    const [deleteBlog] = useDeleteBlogMutation();
    const [createBlog] = useCreateBlogMutation();
    const [updateBlog] = useUpdateBlogMutation();

    // Handlers
    const handleRoleChange = async (id, newRole) => {
        try {
            await updateUserRole({ id, role: newRole }).unwrap();
            toast.success(`Role updated to ${newRole}`);
        } catch (err) {
            toast.error(err?.data?.message || 'Failed to update role');
        }
    };

    const handleDeleteProject = async (id) => {
        if (window.confirm('Are you sure you want to delete this project?')) {
            try {
                await deleteProject(id).unwrap();
                toast.success('Project deleted');
            } catch (err) {
                toast.error('Failed to delete project');
            }
        }
    };

    const handleDeleteBlog = async (id) => {
        if (window.confirm('Are you sure you want to delete this blog?')) {
            try {
                await deleteBlog(id).unwrap();
                toast.success('Blog deleted');
            } catch (err) {
                toast.error('Failed to delete blog');
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        
        try {
            if (activeTab === 'projects') {
                if (modalMode === 'add') {
                    await createProject(formData).unwrap();
                    toast.success('Project created');
                } else {
                    await updateProject({ id: currentData._id, data: formData }).unwrap();
                    toast.success('Project updated');
                }
            } else if (activeTab === 'blogs') {
                // For blogs, we might need to append the date if it's missing
                if (!formData.get('date')) {
                    const today = new Date();
                    const options = { day: 'numeric', month: 'long', year: 'numeric' };
                    formData.append('date', today.toLocaleDateString('en-US', options));
                }

                if (modalMode === 'add') {
                    await createBlog(formData).unwrap();
                    toast.success('Blog created');
                } else {
                    await updateBlog({ id: currentData._id, data: formData }).unwrap();
                    toast.success('Blog updated');
                }
            }
            setIsModalOpen(false);
            setCurrentData(null);
        } catch (err) {
            toast.error(err?.data?.message || 'Failed to save');
        }
    };

    const openModal = (mode, data = null) => {
        setModalMode(mode);
        setCurrentData(data);
        setIsModalOpen(true);
    };

    const isLoading = usersLoading || projectsLoading || blogsLoading;

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen bg-black">
                <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
        );
    }

    return (
        <section className="bg-black min-h-screen text-white pb-20">
            <PageBanner title="Admin Dashboard" subtitle="Manage Content & Users" />

            <div className="flex justify-center mt-12 mb-8">
                <div className="tabs tabs-boxed bg-gray-900 p-2 rounded-xl border border-gray-800">
                    <button 
                        className={`tab tab-lg transition-all ${activeTab === 'users' ? 'tab-active bg-primary text-black' : 'text-gray-400 hover:text-white'}`}
                        onClick={() => setActiveTab('users')}
                    >
                        Users
                    </button>
                    <button 
                        className={`tab tab-lg transition-all ${activeTab === 'projects' ? 'tab-active bg-primary text-black' : 'text-gray-400 hover:text-white'}`}
                        onClick={() => setActiveTab('projects')}
                    >
                        Projects
                    </button>
                    <button 
                        className={`tab tab-lg transition-all ${activeTab === 'blogs' ? 'tab-active bg-primary text-black' : 'text-gray-400 hover:text-white'}`}
                        onClick={() => setActiveTab('blogs')}
                    >
                        Blogs
                    </button>
                </div>
            </div>

            <div className="md:w-10/12 w-full px-4 md:px-0 mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <Heading 
                        title={activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} 
                        subtitle={`Manage your website ${activeTab}`} 
                    />
                    {activeTab !== 'users' && (
                        <button 
                            onClick={() => openModal('add')}
                            className="btn btn-primary btn-sm md:btn-md"
                        >
                            + Add {activeTab === 'projects' ? 'Project' : 'Blog'}
                        </button>
                    )}
                </div>

                <div className="overflow-x-auto bg-gray-900 rounded-2xl border border-gray-800 shadow-2xl">
                    <table className="table w-full">
                        {/* Users Tab */}
                        {activeTab === 'users' && (
                            <>
                                <thead className="bg-gray-800 text-primary text-lg">
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Role</th>
                                        <th className="text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    {users.map(user => (
                                        <tr key={user._id} className="hover:bg-gray-800/50 border-b border-gray-800">
                                            <td className="font-bold text-white">{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>
                                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${user.role === 'admin' ? 'bg-primary/20 text-primary' : 'bg-blue-500/20 text-blue-400'}`}>
                                                    {user.role?.toUpperCase()}
                                                </span>
                                            </td>
                                            <td className="text-center">
                                                <select 
                                                    className="select select-bordered select-sm bg-black text-white"
                                                    value={user.role}
                                                    onChange={(e) => handleRoleChange(user._id, e.target.value)}
                                                    disabled={isUpdatingRole}
                                                >
                                                    <option value="admin">Admin</option>
                                                    <option value="editor">Editor</option>
                                                    <option value="user">User</option>
                                                </select>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </>
                        )}

                        {/* Projects Tab */}
                        {activeTab === 'projects' && (
                            <>
                                <thead className="bg-gray-800 text-primary text-lg">
                                    <tr>
                                        <th>Project</th>
                                        <th>Client</th>
                                        <th>Category</th>
                                        <th className="text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    {projects.map(project => (
                                        <tr key={project._id} className="hover:bg-gray-800/50 border-b border-gray-800">
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12 bg-gray-700">
                                                            {project.image && <img src={project.image} alt={project.title} />}
                                                        </div>
                                                    </div>
                                                    <div className="font-bold text-white">{project.title}</div>
                                                </div>
                                            </td>
                                            <td>{project.client}</td>
                                            <td>{project.category}</td>
                                            <td className="text-center space-x-2">
                                                <button onClick={() => openModal('edit', project)} className="btn btn-ghost btn-xs text-primary">Edit</button>
                                                <button onClick={() => handleDeleteProject(project._id)} className="btn btn-ghost btn-xs text-red-500">Delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </>
                        )}

                        {/* Blogs Tab */}
                        {activeTab === 'blogs' && (
                            <>
                                <thead className="bg-gray-800 text-primary text-lg">
                                    <tr>
                                        <th>Title</th>
                                        <th>Category</th>
                                        <th>Date</th>
                                        <th className="text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    {blogs.map(blog => (
                                        <tr key={blog._id} className="hover:bg-gray-800/50 border-b border-gray-800">
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12 bg-gray-700">
                                                            {blog.image && <img src={blog.image} alt={blog.title} />}
                                                        </div>
                                                    </div>
                                                    <div className="font-bold text-white max-w-[200px] truncate">{blog.title}</div>
                                                </div>
                                            </td>
                                            <td>{blog.category}</td>
                                            <td>{blog.date}</td>
                                            <td className="text-center space-x-2">
                                                <button onClick={() => openModal('edit', blog)} className="btn btn-ghost btn-xs text-primary">Edit</button>
                                                <button onClick={() => handleDeleteBlog(blog._id)} className="btn btn-ghost btn-xs text-red-500">Delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </>
                        )}
                    </table>
                </div>
            </div>

            {/* Modal for Add/Edit */}
            {isModalOpen && (
                <div className="modal modal-open">
                    <div className="modal-box bg-gray-900 border border-gray-800 max-w-2xl text-white">
                        <h3 className="font-bold text-2xl text-primary mb-6">
                            {modalMode === 'add' ? 'Add New' : 'Edit'} {activeTab === 'projects' ? 'Project' : 'Blog'}
                        </h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="form-control">
                                    <label className="label"><span className="label-text text-gray-400">Title</span></label>
                                    <input name="title" required defaultValue={currentData?.title} className="input input-bordered bg-black border-gray-700" />
                                </div>
                                <div className="form-control">
                                    <label className="label"><span className="label-text text-gray-400">Category</span></label>
                                    <input name="category" required defaultValue={currentData?.category} className="input input-bordered bg-black border-gray-700" placeholder="e.g. Web Development" />
                                </div>
                            </div>

                            {activeTab === 'projects' ? (
                                <>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="form-control">
                                            <label className="label"><span className="label-text text-gray-400">Client</span></label>
                                            <input name="client" defaultValue={currentData?.client} className="input input-bordered bg-black border-gray-700" />
                                        </div>
                                        <div className="form-control">
                                            <label className="label"><span className="label-text text-gray-400">Live Link</span></label>
                                            <input name="liveLink" defaultValue={currentData?.liveLink} className="input input-bordered bg-black border-gray-700" />
                                        </div>
                                    </div>
                                    <div className="form-control">
                                        <label className="label"><span className="label-text text-gray-400">Description</span></label>
                                        <textarea name="description" required defaultValue={currentData?.description} className="textarea textarea-bordered bg-black border-gray-700 h-24"></textarea>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="form-control">
                                        <label className="label"><span className="label-text text-gray-400">Short Description</span></label>
                                        <input name="description" required defaultValue={currentData?.description} className="input input-bordered bg-black border-gray-700" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label"><span className="label-text text-gray-400">Full Content (HTML Supported)</span></label>
                                        <textarea name="content" required defaultValue={currentData?.content} className="textarea textarea-bordered bg-black border-gray-700 h-48"></textarea>
                                    </div>
                                </>
                            )}

                            <div className="form-control">
                                <label className="label"><span className="label-text text-gray-400">Upload Image</span></label>
                                <input type="file" name="image" className="file-input file-input-bordered file-input-primary w-full bg-black" />
                                {currentData?.image && <p className="text-xs text-gray-500 mt-1">Current: {currentData.image.split('/').pop()}</p>}
                            </div>

                            <div className="modal-action">
                                <button type="button" onClick={() => setIsModalOpen(false)} className="btn btn-ghost">Cancel</button>
                                <button type="submit" className="btn btn-primary">Save Changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </section>
    );
};

export default AdminDashboard;
