import React from 'react';
import { useGetUsersQuery, useUpdateUserRoleMutation } from '../../redux/features/auth/authApi';
import toast from 'react-hot-toast';

const ManageUsers = () => {
    const { data: users = [], isLoading, refetch } = useGetUsersQuery();
    const [updateUserRole, { isLoading: isUpdating }] = useUpdateUserRoleMutation();

    const handleRoleChange = async (id, newRole) => {
        try {
            await updateUserRole({ id, role: newRole }).unwrap();
            toast.success(`Role updated to ${newRole}`);
            refetch();
        } catch (error) {
            toast.error(error?.data?.message || 'Failed to update role');
        }
    };

    if (isLoading) return <div className="flex justify-center p-20"><span className="loading loading-spinner text-[#20D374]"></span></div>;

    return (
        <div className="p-6 md:p-10 space-y-10 bg-[#FAF9F6] min-h-screen">
            {/* Sync Header with Blog/Project Style */}
            <div className="flex flex-col md:flex-row justify-between items-center bg-white p-8 rounded-2xl shadow-sm border border-gray-200 gap-6">
                <div>
                    <h2 className="text-3xl font-bold text-[#111827]">User Directory</h2>
                    <p className="text-gray-500 text-sm mt-1">Manage platform access, roles and organizational hierarchy</p>
                </div>
                <div className="stats bg-[#FAF9F6] border border-gray-100 rounded-xl px-6 py-2">
                    <div className="stat p-0">
                        <div className="stat-title text-[10px] uppercase font-bold text-gray-400">Total Personnel</div>
                        <div className="stat-value text-2xl text-[#20D374]">{users.length}</div>
                    </div>
                </div>
            </div>

            {/* Table View Matching Blog/Project Style */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead className="bg-[#FAF9F6] text-[#4B5563] font-bold uppercase text-[11px] tracking-wider">
                            <tr>
                                <th className="py-5 px-6">Identity</th>
                                <th>Access Role</th>
                                <th>Authentication Email</th>
                                <th className="text-right px-8">Administrative Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {users.map((user) => (
                                <tr key={user._id} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="py-5 px-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-[#FAF9F6] border border-gray-100 flex items-center justify-center text-[#20D374] font-bold text-lg shadow-inner">
                                                {user.name?.charAt(0).toUpperCase()}
                                            </div>
                                            <div>
                                                <div className="font-bold text-[#111827]">{user.name}</div>
                                                <div className="text-[10px] text-gray-400 uppercase tracking-widest leading-none mt-1">Personnel ID: {user._id.slice(-6).toUpperCase()}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span className={`px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${
                                            user.role === 'admin' 
                                            ? 'bg-green-50 text-[#20D374]' 
                                            : user.role === 'editor' 
                                            ? 'bg-blue-50 text-blue-500' 
                                            : 'bg-gray-50 text-gray-500'
                                        }`}>
                                            {user.role || 'User'}
                                        </span>
                                    </td>
                                    <td className="text-sm text-[#4B5563] font-medium">
                                        {user.email}
                                    </td>
                                    <td className="text-right px-8">
                                        <div className="flex items-center justify-end gap-3">
                                            <select 
                                                className="select select-bordered select-xs bg-white text-[#111827] border-gray-200 focus:border-[#20D374] h-8 text-[11px] font-bold uppercase rounded-lg"
                                                value={user.role}
                                                onChange={(e) => handleRoleChange(user._id, e.target.value)}
                                                disabled={isUpdating}
                                            >
                                                <option value="user">User Access</option>
                                                <option value="editor">Editor Access</option>
                                                <option value="admin">Root Admin</option>
                                            </select>
                                            <button className="btn btn-ghost btn-xs text-red-500 normal-case font-bold h-8 flex items-center">Restrict</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageUsers;
