import React, { useState } from 'react';

const AddUsers = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async () => {
        if (!name || !email || !password) {
            alert("Please fill out all fields.");
            return;
        }

        const newUser = {
            name,
            email,
            password,
        };

        try {
            const response = await fetch('https://codeandclass.onrender.com/api/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUser),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Registration failed');
            }

            alert("User added successfully!");

            // Reset fields
            setName('');
            setEmail('');
            setPassword('');
        } catch (error) {
            alert(`Error: ${error.message}`);
        }
    };

    return (
        <div className="min-h-screen bg-black text-white px-4 md:px-10 lg:px-20 py-12 relative top-24">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-cyan-400">
                Add New User
            </h1>

            <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-700 max-w-xl mx-auto shadow-lg space-y-6">
                {/* Name */}
                <div>
                    <label className="block text-sm font-semibold text-cyan-400 mb-2">Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter full name"
                        className="w-full px-4 py-2 rounded-md bg-black border border-zinc-600 text-white outline-none focus:border-cyan-500"
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="block text-sm font-semibold text-cyan-400 mb-2">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email address"
                        className="w-full px-4 py-2 rounded-md bg-black border border-zinc-600 text-white outline-none focus:border-cyan-500"
                    />
                </div>

                {/* Password */}
                <div>
                    <label className="block text-sm font-semibold text-cyan-400 mb-2">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Create a password"
                        className="w-full px-4 py-2 rounded-md bg-black border border-zinc-600 text-white outline-none focus:border-cyan-500"
                    />
                </div>

                {/* Submit Button */}
                <div className="text-center pt-4">
                    <button
                        onClick={handleSubmit}
                        className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black font-bold px-8 py-2 rounded-md transition-all"
                    >
                        Add User
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddUsers;