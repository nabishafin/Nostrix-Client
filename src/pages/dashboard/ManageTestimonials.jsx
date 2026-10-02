import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FaStar } from 'react-icons/fa';
import {
    useGetTestimonialsQuery,
    useCreateTestimonialMutation,
    useUpdateTestimonialMutation,
    useDeleteTestimonialMutation,
} from '../../redux/features/testimonials/testimonialsApi';
import ImageUpload from '../../components/shared/ImageUpload';

const inputCls = 'input input-bordered input-sm h-10 w-full bg-black text-white border-white/10 rounded-md focus:border-primary';
const areaCls = 'textarea textarea-bordered w-full bg-black text-white border-white/10 rounded-md focus:border-primary';
const labelCls = 'mb-1 block text-xs font-medium text-gray-400';

const Stars = ({ value = 5 }) => (
    <span className="inline-flex gap-0.5">
        {[1, 2, 3, 4, 5].map((n) => (
            <FaStar key={n} size={12} className={n <= value ? 'text-[#FCAF23]' : 'text-white/15'} />
        ))}
    </span>
);

const ManageTestimonials = () => {
    const { data: testimonials = [], isLoading } = useGetTestimonialsQuery();
    const [createTestimonial, { isLoading: creating }] = useCreateTestimonialMutation();
    const [updateTestimonial, { isLoading: updating }] = useUpdateTestimonialMutation();
    const [deleteTestimonial] = useDeleteTestimonialMutation();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMode, setModalMode] = useState('add');
    const [currentData, setCurrentData] = useState(null);

    const openModal = (mode, data = null) => {
        setModalMode(mode);
        setCurrentData(data);
        setIsModalOpen(true);
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Delete this testimonial?')) return;
        try {
            await deleteTestimonial(id).unwrap();
            toast.success('Testimonial deleted');
        } catch {
            toast.error('Delete failed');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const raw = new FormData(e.target);
        const body = new FormData();
        ['clientName', 'designation', 'review', 'rating'].forEach((k) => body.append(k, raw.get(k)));
        const image = raw.get('image');
        if (image && image.size > 0) body.append('image', image);

        try {
            if (modalMode === 'add') {
                await createTestimonial(body).unwrap();
                toast.success('Testimonial added');
            } else {
                await updateTestimonial({ id: currentData._id, data: body }).unwrap();
                toast.success('Testimonial updated');
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
                    <h1 className="text-xl font-bold text-white">Testimonials</h1>
                    <p className="text-gray-500 mt-1">Client reviews shown on the home and services pages.</p>
                </div>
                <button onClick={() => openModal('add')} className="btn btn-sm h-9 bg-primary hover:bg-primary/80 text-black border-none rounded-md">
                    + New testimonial
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {testimonials.length === 0 && (
                    <p className="md:col-span-2 text-center text-gray-500 py-10 bg-[#111] border border-white/10 rounded-lg">No testimonials yet</p>
                )}
                {testimonials.map((t) => (
                    <div key={t._id} className="bg-[#111] border border-white/10 rounded-lg p-4 flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                            {t.image
                                ? <img src={t.image} alt={t.clientName} className="w-10 h-10 rounded-full object-cover" />
                                : <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-primary font-semibold">{t.clientName?.charAt(0)}</div>}
                            <div className="min-w-0">
                                <p className="font-medium text-white truncate">{t.clientName}</p>
                                <p className="text-xs text-gray-500 truncate">{t.designation}</p>
                            </div>
                            <div className="ml-auto"><Stars value={t.rating} /></div>
                        </div>
                        <p className="text-gray-400 text-sm line-clamp-4">“{t.review}”</p>
                        <div className="flex justify-end gap-1 mt-auto">
                            <button onClick={() => openModal('edit', t)} className="btn btn-ghost btn-xs text-primary">Edit</button>
                            <button onClick={() => handleDelete(t._id)} className="btn btn-ghost btn-xs text-red-400">Delete</button>
                        </div>
                    </div>
                ))}
            </div>

            {isModalOpen && (
                <div className="modal modal-open">
                    <div className="modal-box bg-[#111] border border-white/10 rounded-lg max-w-xl p-0 text-gray-200">
                        <div className="px-5 py-3 border-b border-white/10 flex justify-between items-center">
                            <h3 className="font-semibold text-white">{modalMode === 'add' ? 'New testimonial' : 'Edit testimonial'}</h3>
                            <button onClick={() => setIsModalOpen(false)} className="btn btn-ghost btn-sm btn-square text-gray-400">✕</button>
                        </div>
                        <form onSubmit={handleSubmit} className="p-5 space-y-4 max-h-[75vh] overflow-y-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className={labelCls}>Client name</label>
                                    <input name="clientName" required defaultValue={currentData?.clientName} className={inputCls} />
                                </div>
                                <div>
                                    <label className={labelCls}>Designation</label>
                                    <input name="designation" required defaultValue={currentData?.designation} className={inputCls} placeholder="CEO at Company" />
                                </div>
                            </div>
                            <div>
                                <label className={labelCls}>Rating</label>
                                <select name="rating" defaultValue={currentData?.rating || 5} className="select select-bordered select-sm h-10 bg-black text-white border-white/10 rounded-md">
                                    {[5, 4, 3, 2, 1].map((n) => <option key={n} value={n}>{n} star{n > 1 ? 's' : ''}</option>)}
                                </select>
                            </div>
                            <div>
                                <label className={labelCls}>Review</label>
                                <textarea name="review" required defaultValue={currentData?.review} className={`${areaCls} h-28`}></textarea>
                            </div>
                            <div>
                                <label className={labelCls}>Client photo</label>
                                <ImageUpload name="image" currentUrl={currentData?.image} />
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

export default ManageTestimonials;
