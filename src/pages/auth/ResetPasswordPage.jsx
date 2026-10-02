import React, { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import PageBanner from '../../components/shared/PageBanner';
import Seo from '../../components/shared/Seo';
import { useResetPasswordMutation } from '../../redux/features/auth/authApi';

const ResetPasswordPage = () => {
    const [params] = useSearchParams();
    const token = params.get('token') || '';
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [resetPassword, { isLoading }] = useResetPasswordMutation();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password.length < 6) return toast.error('Password must be at least 6 characters');
        if (password !== confirm) return toast.error('Passwords do not match!');

        try {
            await resetPassword({ token, password }).unwrap();
            toast.success('Password updated. Please log in.');
            navigate('/login');
        } catch (error) {
            toast.error(error?.data?.message || 'Reset link is invalid or has expired');
        }
    };

    return (
        <section className="bg-black text-white min-h-screen pb-20 flex flex-col">
            <Seo title="Reset password" />
            <PageBanner title="Reset Password" subtitle="New Password" />
            <div className="w-full max-w-md mx-auto my-auto p-8 bg-gray-900 rounded-3xl shadow-2xl border border-gray-800 lg:mt-10">
                <h2 className="text-3xl font-bold text-center mb-6">Choose a <span className="text-primary">new password</span></h2>

                {!token ? (
                    <div className="text-center space-y-4">
                        <p className="text-gray-300">This reset link is missing its token. Please request a new one.</p>
                        <Link to="/forgot-password" className="inline-block text-primary hover:underline font-semibold">Request a new link</Link>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium mb-2 text-gray-300">New password</label>
                            <input
                                type="password"
                                className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-primary text-white"
                                placeholder="At least 6 characters"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2 text-gray-300">Confirm password</label>
                            <input
                                type="password"
                                className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-primary text-white"
                                placeholder="Repeat the password"
                                value={confirm}
                                onChange={(e) => setConfirm(e.target.value)}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-primary text-black font-bold py-3 px-4 rounded-lg hover:bg-green-600 transition duration-300 disabled:opacity-50"
                        >
                            {isLoading ? 'Saving...' : 'Update password'}
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
};

export default ResetPasswordPage;
