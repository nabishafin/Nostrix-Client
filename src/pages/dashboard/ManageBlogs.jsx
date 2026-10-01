import React, { useState } from 'react';
import { useGetBlogsQuery, useDeleteBlogMutation, useCreateBlogMutation, useUpdateBlogMutation } from '../../redux/features/blogs/blogsApi';
import toast from 'react-hot-toast';
import ImageUpload from '../../components/shared/ImageUpload';

const inputCls = 'input input-bordered input-sm h-10 w-full bg-black text-white border-white/10 rounded-md focus:border-primary';
const areaCls = 'textarea textarea-bordered w-full bg-black text-white border-white/10 rounded-md focus:border-primary';
const labelCls = 'mb-1 block text-xs font-medium text-gray-400';

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
            } catch {
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

    if (isLoading) return <div className="flex justify-center p-16"><span className="loading loading-spinner text-primary"></span></div>;

    return (
        <div className="space-y-4">
            <div className="flex items-end justify-between gap-4">
                <div>
                    <h1 className="text-xl font-bold text-white">Blogs</h1>
                    <p className="text-gray-500 mt-1">Add, edit or delete articles.</p>
                </div>
                <button onClick={() => openModal('add')} className="btn btn-sm h-9 bg-primary hover:bg-primary/80 text-black border-none rounded-md">
                    + New post
                </button>
            </div>

            <div className="bg-[#111] border border-white/10 rounded-lg overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr className="text-xs uppercase tracking-wider text-gray-500 border-white/10">
                            <th>Article</th>
                            <th>Category</th>
                            <th>Tags</th>
                            <th className="text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {blogs.length === 0 && (
                            <tr><td colSpan={4} className="text-center text-gray-500 py-8">No blog posts yet</td></tr>
                        )}
                        {blogs.map((blog) => (
                            <tr key={blog._id} className="border-white/5 hover:bg-white/[0.03]">
                                <td>
                                    <div className="flex items-center gap-3">
                                        {blog.image
                                            ? <img src={blog.image} alt="" className="w-10 h-10 rounded object-cover shrink-0" />
                                            : <div className="w-10 h-10 rounded bg-white/5 shrink-0" />}
                                        <div className="min-w-0">
                                            <p className="font-medium text-white truncate max-w-xs">{blog.title}</p>
                                            <p className="text-xs text-gray-500">{blog.date}</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span className="px-2 py-0.5 bg-primary/15 text-primary text-[11px] font-semibold rounded">{blog.category}</span>
                                </td>
                                <td className="text-xs text-gray-500">
                                    {blog.tags?.slice(0, 3).map((tag) => `#${tag}`).join(' ')}
                                </td>
                                <td className="text-right whitespace-nowrap">
                                    <button onClick={() => openModal('edit', blog)} className="btn btn-ghost btn-xs text-primary">Edit</button>
                                    <button onClick={() => handleDelete(blog._id)} className="btn btn-ghost btn-xs text-red-400">Delete</button>
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
                            <h3 className="font-semibold text-white">{modalMode === 'add' ? 'New post' : 'Edit post'}</h3>
                            <button onClick={() => setIsModalOpen(false)} className="btn btn-ghost btn-sm btn-square text-gray-400">✕</button>
                        </div>

                        <form onSubmit={handleSubmit} className="p-5 space-y-4 max-h-[70vh] overflow-y-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className={labelCls}>Title</label>
                                    <input name="title" required defaultValue={currentData?.title} className={inputCls} />
                                </div>
                                <div>
                                    <label className={labelCls}>Category</label>
                                    <input name="category" required defaultValue={currentData?.category} className={inputCls} placeholder="e.g. Technology" />
                                </div>
                                <div>
                                    <label className={labelCls}>Subtitle</label>
                                    <input name="subtitle" defaultValue={currentData?.subtitle} className={inputCls} />
                                </div>
                                <div>
                                    <label className={labelCls}>Tags (comma separated)</label>
                                    <input name="tags_input" defaultValue={currentData?.tags?.join(', ')} className={inputCls} placeholder="React, Node, CSS" />
                                </div>
                            </div>

                            <div>
                                <label className={labelCls}>Short description</label>
                                <textarea name="description" required defaultValue={currentData?.description} className={`${areaCls} h-20`}></textarea>
                            </div>
                            <div>
                                <label className={labelCls}>Main content</label>
                                <textarea name="content" required defaultValue={currentData?.content} className={`${areaCls} h-40`}></textarea>
                            </div>
                            <div>
                                <label className={labelCls}>Conclusion</label>
                                <textarea name="conclusion" defaultValue={currentData?.conclusion} className={`${areaCls} h-20`}></textarea>
                            </div>
                            <div>
                                <label className={labelCls}>Featured image</label>
                                <ImageUpload name="image" currentUrl={currentData?.image} />
                            </div>

                            <div className="flex justify-end gap-2 pt-4 border-t border-white/10">
                                <button type="button" onClick={() => setIsModalOpen(false)} className="btn btn-ghost btn-sm text-gray-400">Cancel</button>
                                <button type="submit" className="btn btn-sm bg-primary hover:bg-primary/80 text-black border-none rounded-md px-6">
                                    {modalMode === 'add' ? 'Publish' : 'Save'}
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
