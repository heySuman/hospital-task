"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page(){
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("User");

    function onLogin(e: React.FormEvent) {
        e.preventDefault();
        if(role === 'Admin') router.push('/admin');
        else if(role === 'Doctor') router.push('/doctor');
        else router.push('/user');
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50">
            <div className="max-w-md w-full bg-white p-8 rounded shadow">
                <h2 className="text-2xl font-semibold">Sign in to your account</h2>
                <p className="text-sm text-slate-600 mt-1">Use any email/password — this is a demo. Select role to simulate redirect.</p>
                <form onSubmit={onLogin} className="mt-6 space-y-4">
                    <div>
                        <label className="block text-sm text-slate-700">Email</label>
                        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required className="mt-1 w-full px-3 py-2 border rounded" />
                    </div>
                    <div>
                        <label className="block text-sm text-slate-700">Password</label>
                        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required className="mt-1 w-full px-3 py-2 border rounded" />
                    </div>
                    <div>
                        <label className="block text-sm text-slate-700">Role</label>
                        <select value={role} onChange={(e)=>setRole(e.target.value)} className="mt-1 w-full px-3 py-2 border rounded">
                            <option>Admin</option>
                            <option>Doctor</option>
                            <option>User</option>
                        </select>
                    </div>
                    <div className="flex items-center justify-between">
                        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}