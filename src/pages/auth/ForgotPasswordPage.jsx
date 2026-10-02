import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import PageBanner from '../../components/shared/PageBanner';
import Seo from '../../components/shared/Seo';
import { useForgotPasswordMutation } from '../../redux/features/auth/authApi';

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState('');
    const [sent, setSent] = useState(false);
    const [forgotPassword, { isLoading }] = useForgotPasswordMutation();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await forgotPassword({ email }).unwrap();
            setSent(true);
        } catch (error) {
            toast.error(error?.data?.message || 'Something went wrong. Please try again.');
        }
    };

    return (
        <section className="bg-black text-white min-h-screen pb-20 flex flex-col">
            <Seo title="Forgot password" />
            <PageBanner title="Forgot Password" subtitle="Reset Access" />
            <div className="w-full max-w-md mx-auto my-auto p-8 bg-gray-900 rounded-3xl shadow-2xl border border-gray-800 lg:mt-10">
                <h2 className="text-3xl font-bold text-center mb-3">Reset your <span className="text-primary">password</span></h2>

                {sent ? (
                    <div className="text-center space-y-4">
                        <p className="text-gray-300">If that email is registered, a reset link is on its way. It expires in 30 minutes.</p>
                        <Link to="/login" className="inline-block text-primary hover:underline font-semibold">Back to login</Link>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6 mt-6">
                        <p className="text-gray-400 text-sm text-center">Enter your account email and we'll send you a link to set a new password.</p>
                        <div>
                            <label className="block text-sm font-medium mb-2 text-gray-300">Email Address</label>
                            <input
                                type="email"
                                className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-primary text-white"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-primary text-black font-bold py-3 px-4 rounded-lg hover:bg-green-600 transition duration-300 disabled:opacity-50"
                        >
                            {isLoading ? 'Sending...' : 'Send reset link'}
                        </button>
                        <p className="text-center text-gray-400 text-sm">
                            Remembered it? <Link to="/login" className="text-primary hover:underline font-semibold">Login</Link>
                        </p>
                    </form>
                )}
            </div>
        </section>
    );
};

export default ForgotPasswordPage;
