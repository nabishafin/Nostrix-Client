import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import PageBanner from '../../components/shared/PageBanner';
import { useDispatch } from 'react-redux';
import { useLoginMutation } from '../../redux/features/auth/authApi';
import { setLogin } from '../../redux/slices/authSlice';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [login, { isLoading }] = useLoginMutation();

    const handleLogin = async (e) => {
        e.preventDefault();
        
        try {
            const response = await login({ email, password }).unwrap();
            
            // Assuming backend returns { data: { user, tokens: { accessToken, refreshToken } } } 
            // or { user, accessToken, refreshToken }
            const userData = response?.data?.user || response?.user || response;
            const token = response?.data?.tokens?.accessToken || response?.accessToken || response?.data?.token || response?.token;
            const refreshToken = response?.data?.tokens?.refreshToken || response?.refreshToken;

            if (token) {
                localStorage.setItem('token', token);
                if (refreshToken) localStorage.setItem('refreshToken', refreshToken);
                
                // Store full user data for persistence on reload
                localStorage.setItem('user', JSON.stringify(userData));
                
                // Explicitly store role as requested
                localStorage.setItem('role', userData.role);

                dispatch(setLogin({
                    user: userData,
                    token: token,
                    refreshToken: refreshToken
                }));

                toast.success('Logged in successfully!');
                
                // Role-based redirection
                if (userData.role === 'admin') {
                    navigate('/admin/dashboard');
                } else {
                    navigate('/'); // Regular users go to Home
                }
            } else {
                toast.error('Login failed! No token received.');
            }
        } catch (error) {
            console.error('Login error:', error);
            const errMsg = error?.data?.message || 'Login failed! Please check your credentials.';
            toast.error(errMsg);
        }
    };

    return (
        <section className="bg-black text-white min-h-screen pb-20 flex flex-col">
            <PageBanner title="Login" subtitle="Welcome Back" />
            <div className="w-full max-w-md mx-auto my-auto p-8 bg-gray-900 rounded-3xl shadow-2xl border border-gray-800 backdrop-blur-3xl lg:mt-10">
                <h2 className="text-3xl font-bold text-center mb-8">Sign In to <span className="text-primary">Nostrix</span></h2>
                
                <form onSubmit={handleLogin} className="space-y-6">
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
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <div className="text-right mt-2">
                            <Link to="#" className="text-sm text-gray-400 hover:text-primary transition">Forgot Password?</Link>
                        </div>
                    </div>
                    
                    <button 
                        type="submit" 
                        disabled={isLoading}
                        className="w-full bg-primary text-black font-bold py-3 px-4 rounded-lg hover:bg-green-600 transition duration-300 shadow-lg shadow-primary/20 disabled:opacity-50"
                    >
                        {isLoading ? 'Signing In...' : 'Sign In'}
                    </button>
                </form>

                <p className="mt-8 text-center text-gray-400">
                    Don't have an account? <Link to="/register" className="text-primary hover:underline font-semibold">Register Here</Link>
                </p>
            </div>
        </section>
    );
};

export default LoginPage;
