"use client"

import { useState } from "react"
import { users as userData } from "@/constants/users"
import { User } from "@/types/user"
import UserDataTable from "./data-table"
import NavBar from "@/components/navbar"

export default function Page() {

    const [users, setUsers] = useState<User[]>(userData);

    return (
        <>
        <NavBar variant="withLogout"/>
        
        <main className="min-h-screen bg-slate-50 my-12">
            <div className="max-w-7xl mx-auto p-6">
                <UserDataTable users={users} setUsers={setUsers} />
            </div>
        </main>
        </>
    )
}