import React from 'react';
import { useGetUsersQuery, useUpdateUserRoleMutation } from '../../redux/features/auth/authApi';
import toast from 'react-hot-toast';

const roleStyles = {
    admin: 'bg-primary/15 text-primary',
    editor: 'bg-blue-500/15 text-blue-400',
    user: 'bg-white/10 text-gray-400',
};

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

    if (isLoading) return <div className="flex justify-center p-16"><span className="loading loading-spinner text-primary"></span></div>;

    return (
        <div className="space-y-4">
            <div className="flex items-end justify-between">
                <div>
                    <h1 className="text-xl font-bold text-white">Users</h1>
                    <p className="text-gray-500 mt-1">Manage who can access the admin panel.</p>
                </div>
                <span className="text-xs text-gray-400">{users.length} total</span>
            </div>

            <div className="bg-[#111] border border-white/10 rounded-lg overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr className="text-xs uppercase tracking-wider text-gray-500 border-white/10">
                            <th>User</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th className="text-right">Change role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user._id} className="border-white/5 hover:bg-white/[0.03]">
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center text-primary font-semibold">
                                            {user.name?.charAt(0).toUpperCase()}
                                        </div>
                                        <span className="font-medium text-white">{user.name}</span>
                                    </div>
                                </td>
                                <td className="text-gray-400">{user.email}</td>
                                <td>
                                    <span className={`px-2 py-0.5 rounded text-[11px] font-semibold uppercase ${roleStyles[user.role] || roleStyles.user}`}>
                                        {user.role || 'user'}
                                    </span>
                                </td>
                                <td className="text-right">
                                    <select
                                        className="select select-bordered select-sm bg-black text-white border-white/10 rounded-md"
                                        value={user.role}
                                        onChange={(e) => handleRoleChange(user._id, e.target.value)}
                                        disabled={isUpdating}
                                    >
                                        <option value="user">User</option>
                                        <option value="editor">Editor</option>
                                        <option value="admin">Admin</option>
                                    </select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;
