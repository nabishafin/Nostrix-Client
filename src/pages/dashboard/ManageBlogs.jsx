import React, { useState } from 'react';
import { useGetBlogsQuery, useDeleteBlogMutation, useCreateBlogMutation, useUpdateBlogMutation } from '../../redux/features/blogs/blogsApi';
import toast from 'react-hot-toast';

const ManageBlogs = () => {
    const { data: blogs = [], isLoading } = useGetBlogsQuery();
    const [deleteBlog] = useDeleteBlogMutation();
    const [createBlog] = useCreateBlogMutation();
    const [updateBlog] = useUpdateBlogMutation();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMode, setModalMode] = useState('add');
    const [currentData, setCurrentData] = useState(null);

    const handleDelete = async (id) => {
        if (window.confirm('Delete this article?')) {
            try {
                await deleteBlog(id).unwrap();
                toast.success('Article Deleted');
            } catch (err) {
                toast.error('Delete Failed');
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const rawFormData = new FormData(e.target);
        const finalFormData = new FormData();

        finalFormData.append('title', rawFormData.get('title'));
        finalFormData.append('category', rawFormData.get('category'));
        finalFormData.append('subtitle', rawFormData.get('subtitle'));
        finalFormData.append('description', rawFormData.get('description'));
        finalFormData.append('content', rawFormData.get('content'));
        finalFormData.append('conclusion', rawFormData.get('conclusion'));

        const imageFile = rawFormData.get('image');
        if (imageFile && imageFile.size > 0) {
            finalFormData.append('image', imageFile);
        }

        const tagsString = rawFormData.get('tags_input');
        const tagsArray = tagsString ? tagsString.split(',').map(tag => tag.trim()) : [];
        finalFormData.append('tags', JSON.stringify(tagsArray));

        if (rawFormData.get('date')) {
            finalFormData.append('date', rawFormData.get('date'));
        } else {
            finalFormData.append('date', new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' }));
        }

        try {
            if (modalMode === 'add') {
                await createBlog(finalFormData).unwrap();
                toast.success('Post Published');
            } else {
                await updateBlog({ id: currentData._id, data: finalFormData }).unwrap();
                toast.success('Post Updated');
            }
            setIsModalOpen(false);
        } catch (err) {
            const errorMessage = err?.data?.message || err?.message || 'Update failed';
            toast.error(errorMessage);
        }
    };

    const openModal = (mode, data = null) => {
        setModalMode(mode);
        setCurrentData(data);
        setIsModalOpen(true);
    };

    if (isLoading) return <div className="flex justify-center p-20"><span className="loading loading-spinner text-primary"></span></div>;

    return (
        <div className="p-6 md:p-10 space-y-10 bg-[#FAF9F6] min-h-screen">
            {/* Simple Header */}
            <div className="flex flex-col md:flex-row justify-between items-center bg-white p-8 rounded-2xl shadow-sm border border-gray-200 gap-6">
                <div>
                    <h2 className="text-3xl font-bold text-[#111827]">Blog Management</h2>
                    <p className="text-gray-500 text-sm mt-1">Add, edit or delete your portfolio articles</p>
                </div>
                <button 
                    onClick={() => openModal('add')} 
                    className="btn btn-primary text-white normal-case px-8 bg-[#20D374] border-none hover:bg-[#1bb865]"
                >
                    + Create New Post
                </button>
            </div>

            {/* Content List */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead className="bg-[#FAF9F6] text-[#4B5563] font-bold uppercase text-[11px] tracking-wider">
                            <tr>
                                <th className="py-5 px-6">Article</th>
                                <th>Category</th>
                                <th>Tags</th>
                                <th className="text-right px-8">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {blogs.map((blog) => (
                                <tr key={blog._id} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="py-5 px-6">
                                        <div className="flex items-center gap-4">
                                            <div className="avatar">
                                                <div className="w-12 h-12 rounded-xl">
                                                    {blog.image && <img src={blog.image} alt="" />}
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold text-[#111827]">{blog.title}</div>
                                                <div className="text-xs text-gray-400">{blog.date}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span className="px-3 py-1 bg-green-50 text-green-600 text-[10px] font-bold uppercase rounded-md">{blog.category}</span>
                                    </td>
                                    <td>
                                        <div className="flex flex-wrap gap-1">
                                            {blog.tags?.slice(0, 2).map((tag, i) => (
                                                <span key={i} className="text-[10px] text-gray-400">#{tag}</span>
                                            ))}
                                        </div>
                                    </td>
                                    <td className="text-right px-8 space-x-3">
                                        <button onClick={() => openModal('edit', blog)} className="btn btn-ghost btn-xs text-[#20D374] normal-case font-bold">Edit</button>
                                        <button onClick={() => handleDelete(blog._id)} className="btn btn-ghost btn-xs text-red-500 normal-case font-bold">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Premium Modal */}
            {isModalOpen && (
                <div className="modal modal-open">
                    <div className="modal-box bg-white max-w-4xl p-0 overflow-hidden rounded-2xl shadow-2xl border border-gray-200">
                        <div className="p-6 border-b flex justify-between items-center bg-[#FAF9F6]">
                            <h3 className="text-xl font-bold text-[#111827]">
                                {modalMode === 'add' ? 'Create New Post' : 'Edit Post'}
                            </h3>
                            <button onClick={() => setIsModalOpen(false)} className="btn btn-ghost btn-sm btn-circle text-[#111827]">✕</button>
                        </div>

                        <form onSubmit={handleSubmit} className="p-8 space-y-6 max-h-[70vh] overflow-y-auto">
                            
                            <div className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="form-control w-full">
                                        <label className="mb-2 block text-xs font-bold text-[#4B5563] uppercase">Article Title</label>
                                        <input name="title" required defaultValue={currentData?.title} className="input input-bordered w-full bg-white text-[#111827] border-gray-300 focus:border-[#20D374]" placeholder="Enter title" />
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="mb-2 block text-xs font-bold text-[#4B5563] uppercase">Category</label>
                                        <input name="category" required defaultValue={currentData?.category} className="input input-bordered w-full bg-white text-[#111827] border-gray-300 focus:border-[#20D374]" placeholder="e.g. Technology" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="form-control w-full">
                                        <label className="mb-2 block text-xs font-bold text-[#4B5563] uppercase">Subtitle</label>
                                        <input name="subtitle" defaultValue={currentData?.subtitle} className="input input-bordered w-full bg-white text-[#111827] border-gray-300 focus:border-[#20D374]" placeholder="Optional subtitle" />
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="mb-2 block text-xs font-bold text-[#4B5563] uppercase">Tags (comma separated)</label>
                                        <input name="tags_input" defaultValue={currentData?.tags?.join(', ')} className="input input-bordered w-full bg-white text-[#111827] border-gray-300 focus:border-[#20D374]" placeholder="React, Node, CSS" />
                                    </div>
                                </div>

                                <div className="form-control w-full">
                                    <label className="mb-2 block text-xs font-bold text-[#4B5563] uppercase">Short Description</label>
                                    <textarea name="description" required defaultValue={currentData?.description} className="textarea textarea-bordered h-24 w-full bg-white text-[#111827] border-gray-300 focus:border-[#20D374]" placeholder="A brief hook for the article"></textarea>
                                </div>

                                <div className="form-control w-full">
                                    <label className="mb-2 block text-xs font-bold text-[#4B5563] uppercase">Main Content</label>
                                    <textarea name="content" required defaultValue={currentData?.content} className="textarea textarea-bordered h-48 w-full bg-white text-[#111827] border-gray-300 focus:border-[#20D374]" placeholder="Write your full article content here"></textarea>
                                </div>

                                <div className="form-control w-full">
                                    <label className="mb-2 block text-xs font-bold text-[#4B5563] uppercase">Conclusion</label>
                                    <textarea name="conclusion" defaultValue={currentData?.conclusion} className="textarea textarea-bordered h-24 w-full bg-white text-[#111827] border-gray-300 focus:border-[#20D374]" placeholder="Final takeaway"></textarea>
                                </div>

                                <div className="form-control w-full p-6 border-2 border-dashed border-gray-200 rounded-xl bg-[#FAF9F6]">
                                    <label className="mb-2 block text-xs font-bold text-[#4B5563] uppercase">Featured Image</label>
                                    <input type="file" name="image" className="file-input file-input-bordered w-full bg-white text-[#111827]" />
                                </div>
                            </div>

                            <div className="flex justify-end gap-3 pt-6 border-t">
                                <button type="button" onClick={() => setIsModalOpen(false)} className="btn btn-ghost normal-case text-[#4B5563]">Cancel</button>
                                <button type="submit" className="btn bg-[#20D374] hover:bg-[#1bb865] text-white border-none normal-case px-10">
                                    {modalMode === 'add' ? 'Publish Now' : 'Save Changes'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManageBlogs;
