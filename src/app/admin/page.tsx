"use client"

import { useState } from "react"
import { users as userData } from "@/constants/users"
import { User } from "@/types/user"
import UserDataTable from "./data-table"

export default function Page() {

    const [users, setUsers] = useState<User[]>(userData);

    return (
        <main className="min-h-screen bg-slate-50">
            <div className="max-w-7xl mx-auto p-6">
                <header className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-bold">Admin Dashboard</h1>
                </header>

                <UserDataTable users={users} setUsers={setUsers} />
            </div>
        </main>
    )
}