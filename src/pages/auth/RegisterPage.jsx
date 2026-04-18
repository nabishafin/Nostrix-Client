import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import PageBanner from '../../components/shared/PageBanner';
import { useRegisterMutation } from '../../redux/features/auth/authApi';

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();
    const [register, { isLoading }] = useRegisterMutation();

    const handleRegister = async (e) => {
        e.preventDefault();
        
        if (password !== confirmPassword) {
            toast.error("Passwords do not match!");
            return;
        }

        try {
            await register({ name, email, password }).unwrap();
            toast.success('Registration successful! Please login.');
            navigate('/login');
        } catch (error) {
            console.error('Registration error:', error);
            const errMsg = error?.data?.message || 'Registration failed! Please try again.';
            toast.error(errMsg);
        }
    };

    return (
        <section className="bg-black text-white min-h-screen pb-20 flex flex-col">
            <PageBanner title="Register" subtitle="Join Nostrix" />
            <div className="w-full max-w-md mx-auto my-auto p-8 bg-gray-900 rounded-3xl shadow-2xl border border-gray-800 backdrop-blur-3xl lg:mt-10">
                <h2 className="text-3xl font-bold text-center mb-8">Create an <span className="text-primary">Account</span></h2>
                
                <form onSubmit={handleRegister} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium mb-2 text-gray-300">Full Name</label>
                        <input 
                            type="text" 
                            className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-primary text-white"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
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
                    <div>
                        <label className="block text-sm font-medium mb-2 text-gray-300">Password</label>
                        <input 
                            type="password" 
                            className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-primary text-white"
                            placeholder="Create a password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2 text-gray-300">Confirm Password</label>
                        <input 
                            type="password" 
                            className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-primary text-white"
                            placeholder="Confirm your password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    
                    <button 
                        type="submit" 
                        disabled={isLoading}
                        className="w-full bg-primary text-black font-bold py-3 px-4 rounded-lg hover:bg-green-600 transition duration-300 mt-4 shadow-lg shadow-primary/20 disabled:opacity-50"
                    >
                        {isLoading ? 'Creating Account...' : 'Sign Up'}
                    </button>
                </form>

                <p className="mt-8 text-center text-gray-400">
                    Already have an account? <Link to="/login" className="text-primary hover:underline font-semibold">Login Here</Link>
                </p>
            </div>
        </section>
    );
};

export default RegisterPage;
