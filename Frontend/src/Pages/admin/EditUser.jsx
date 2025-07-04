import React, { useEffect, useState } from 'react';

const API_BASE = '/api/users';

const EditUser = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  // Fetch all users
  useEffect(() => {
    fetch(API_BASE)
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => alert('Failed to load users'));
  }, []);

  // Handle field changes
  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Start editing
  const handleEditClick = (user) => {
    setEditingUser(user);
    setFormData({ name: user.name, email: user.email, password: '' });
  };

  // Cancel edit
  const cancelEdit = () => {
    setEditingUser(null);
    setFormData({ name: '', email: '', password: '' });
  };

  // Update user
  const handleUpdate = async () => {
    if (!formData.name || !formData.email) {
      alert('Please fill all required fields');
      return;
    }

    try {
      const response = await fetch(`${API_BASE}/${editingUser._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to update user');

      alert('User updated successfully');
      const updated = await response.json();
      setUsers(users.map(u => (u._id === updated._id ? updated : u)));
      cancelEdit();
    } catch (err) {
      alert(err.message);
    }
  };

  // Delete user
  const handleDelete = async (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this user?');
    if (!confirmed) return;

    try {
      const res = await fetch(`${API_BASE}/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete user');

      alert('User deleted');
      setUsers(users.filter(user => user._id !== id));
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 md:px-10 lg:px-20 py-12 relative top-24">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-cyan-400">
        Manage Users
      </h1>

      {/* Edit Form */}
      {editingUser && (
        <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-700 max-w-2xl mx-auto shadow-lg space-y-6 mb-10">
          <h2 className="text-xl font-bold text-cyan-400 mb-4 text-center">Edit User</h2>

          <div>
            <label className="block text-sm font-semibold text-cyan-400 mb-2">Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-black border border-zinc-600 text-white outline-none focus:border-cyan-500"
              placeholder="User name"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-cyan-400 mb-2">Email</label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-black border border-zinc-600 text-white outline-none focus:border-cyan-500"
              placeholder="User email"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-cyan-400 mb-2">Password</label>
            <input
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-black border border-zinc-600 text-white outline-none focus:border-cyan-500"
              placeholder="New password (optional)"
              type="password"
            />
          </div>

          <div className="flex gap-4 justify-center pt-2">
            <button
              onClick={handleUpdate}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black font-bold px-6 py-2 rounded-md"
            >
              Save Changes
            </button>
            <button
              onClick={cancelEdit}
              className="bg-zinc-700 hover:bg-zinc-600 text-white font-bold px-6 py-2 rounded-md"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* User List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map(user => (
          <div
            key={user._id}
            className="bg-zinc-900 border border-zinc-700 rounded-xl p-5 shadow-md space-y-2"
          >
            <p className="text-cyan-400 font-semibold">Name: <span className="text-white">{user.name}</span></p>
            <p className="text-cyan-400 font-semibold">Email: <span className="text-white">{user.email}</span></p>
            <p className="text-cyan-400 font-semibold">Role: <span className="text-white capitalize">{user.role}</span></p>

            <div className="flex gap-3 pt-3">
              <button
                onClick={() => handleEditClick(user)}
                className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-1 rounded-md text-sm"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(user._id)}
                className="bg-red-600 hover:bg-red-500 text-white px-4 py-1 rounded-md text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditUser;