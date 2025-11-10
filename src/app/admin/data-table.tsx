"use client"

import { useState } from "react";
import { User } from "@/types/user";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell, TableFooter } from "@/components/ui/table";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogHeader, DialogFooter } from "@/components/ui/dialog";
import { users as dummyUsers } from "@/constants/users";
import { doctors } from "@/constants/doctors";

export default function UserDataTable({ users, setUsers }: { users: User[]; setUsers: React.Dispatch<React.SetStateAction<User[]>> }) {
    const [open, setOpen] = useState(false);
    const [editing, setEditing] = useState<User | null>(null);

    function openNew() {
        setEditing({
            id: Date.now().toString(),
            fullName: "",
            email: "",
            phone: "",
            role: 'User',
            gender: 'Male',
            address: "",
            appointmentTime: null,
            assignedDoctor: null,
        });
        setOpen(true);
    }

    function onSave(e: React.FormEvent) {
        e.preventDefault();
        if (!editing) return;
        setUsers(prev => {
            const exists = prev.find(u => u.id === editing.id);
            if (exists) {
                return prev.map(u => u.id === editing.id ? editing : u);
            }
            return [editing, ...prev];
        });
        setOpen(false);
        setEditing(null);
    }

    function onDelete(id: string) {
        if (!confirm('Delete this user?')) return;
        setUsers(prev => prev.filter(u => u.id !== id));
    }

    return (
        <div>
            <div className="flex items-center justify-between mb-4">
                <div className="text-sm text-slate-600">Showing {users.length} users</div>
                <div className="flex items-center gap-2">
                    <button onClick={() => { setUsers(dummyUsers); }} className="text-sm px-3 py-1 border rounded">Reset Data</button>
                    <button onClick={openNew} className="bg-blue-600 text-white px-3 py-1 rounded">Add New User</button>
                </div>
            </div>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Full Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Phone</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Gender</TableHead>
                        <TableHead>Appointment Time</TableHead>
                        <TableHead>Assigned Doctor</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {users.map((user) => (
                        <TableRow key={user.id}>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.fullName}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>{user.role}</TableCell>
                            <TableCell>{user.gender}</TableCell>
                            <TableCell>{user.appointmentTime || "-"}</TableCell>
                            <TableCell>{user.assignedDoctor || "-"}</TableCell>
                            <TableCell>
                                <div className="flex gap-2">
                                    <button onClick={() => { setEditing(user); setOpen(true); }} className="text-sm px-2 py-1 border rounded">Edit</button>
                                    <button onClick={() => onDelete(user.id)} className="text-sm px-2 py-1 border rounded text-red-600">Delete</button>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter></TableFooter>
            </Table>

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <span />
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>{editing && users.find(u => u.id === editing.id) ? 'Edit User' : 'Create User'}</DialogTitle>
                    </DialogHeader>

                    <form onSubmit={onSave} className="mt-4 space-y-3">
                        <div>
                            <label className="block text-sm">Full name</label>
                            <input required value={editing?.fullName || ''} onChange={(e) => setEditing(editing ? { ...editing, fullName: e.target.value } : editing)} className="w-full px-3 py-2 border rounded" />
                        </div>
                        <div>
                            <label className="block text-sm">Email</label>
                            <input required type="email" value={editing?.email || ''} onChange={(e) => setEditing(editing ? { ...editing, email: e.target.value } : editing)} className="w-full px-3 py-2 border rounded" />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <div>
                                <label className="block text-sm">Phone</label>
                                <input value={editing?.phone || ''} onChange={(e) => setEditing(editing ? { ...editing, phone: e.target.value } : editing)} className="w-full px-3 py-2 border rounded" />
                            </div>
                            <div>
                                <label className="block text-sm">Role</label>
                                <select value={editing?.role || 'User'} onChange={(e) => setEditing(editing ? { ...editing, role: e.target.value as any } : editing)} className="w-full px-3 py-2 border rounded">
                                    <option>User</option>
                                    <option>Doctor</option>
                                </select>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <div>
                                <label className="block text-sm">Gender</label>
                                <select value={editing?.gender || 'Male'} onChange={(e) => setEditing(editing ? { ...editing, gender: e.target.value as any } : editing)} className="w-full px-3 py-2 border rounded">
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm">Appointment Time</label>
                                <input type="datetime-local" value={editing?.appointmentTime ? editing.appointmentTime.replace(':00.000Z', '') : ''} onChange={(e) => setEditing(editing ? { ...editing, appointmentTime: e.target.value || null } : editing)} className="w-full px-3 py-2 border rounded" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm">Assigned Doctor</label>
                            <select value={editing?.assignedDoctor || ''} onChange={(e) => setEditing(editing ? { ...editing, assignedDoctor: e.target.value || null } : editing)} className="w-full px-3 py-2 border rounded">
                                <option value="">-- Not assigned --</option>
                                {doctors.map(d => <option key={d.name} value={d.name}>{d.name} — {d.department}</option>)}
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm">Address</label>
                            <input value={editing?.address || ''} onChange={(e) => setEditing(editing ? { ...editing, address: e.target.value } : editing)} className="w-full px-3 py-2 border rounded" />
                        </div>

                        <DialogFooter>
                            <div className="flex gap-2 justify-end">
                                <button type="button" onClick={() => { setOpen(false); setEditing(null); }} className="px-3 py-1 border rounded">Cancel</button>
                                <button type="submit" className="px-3 py-1 bg-blue-600 text-white rounded">Save</button>
                            </div>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}