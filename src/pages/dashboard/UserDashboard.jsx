import React from 'react';
import { useSelector } from 'react-redux';
import PageBanner from '../../components/shared/PageBanner';
import Heading from '../../components/shared/Heading';

const UserDashboard = () => {
    const { user } = useSelector((state) => state.auth);

    return (
        <section className="bg-black min-h-screen text-white pb-20">
            <PageBanner title="User Dashboard" subtitle={`Welcome back, ${user?.name || 'User'}`} />
            
            <div className="mt-20">
                <Heading title="My Profile" subtitle="Your basic account information" />
            </div>

            <div className="md:w-8/12 w-full px-4 md:px-0 mx-auto mt-10">
                <div className="bg-gray-900 rounded-2xl border border-gray-800 shadow-2xl p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-500 uppercase tracking-wider">Full Name</label>
                                <p className="text-xl font-semibold text-white mt-1">{user?.name}</p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-500 uppercase tracking-wider">Email Address</label>
                                <p className="text-xl font-semibold text-white mt-1">{user?.email}</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-500 uppercase tracking-wider">Role</label>
                                <p className="mt-1">
                                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-400 border border-blue-500/50 uppercase">
                                        {user?.role}
                                    </span>
                                </p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-500 uppercase tracking-wider">Status</label>
                                <p className="text-xl font-semibold text-green-400 mt-1">Active</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 pt-8 border-t border-gray-800">
                        <h3 className="text-lg font-semibold mb-4 text-primary">Limited Features</h3>
                        <p className="text-gray-400 text-sm">
                            As a regular user, you have access to your profile settings and basic portfolio features. Upgrade to administrative access if you need to manage site content.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-4">
                            <button className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition" disabled>
                                Edit Profile (Coming Soon)
                            </button>
                            <button className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition" disabled>
                                View Activity
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserDashboard;
