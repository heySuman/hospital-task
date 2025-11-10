"use client"

import { useState } from "react"
import { users as userData } from "@/constants/users"
import { User } from "@/types/user"
import NavBar from "@/components/navbar"
import { DataTable } from "./data-table"
import { columns } from "./columns"

export default function Page() {

    const [users, setUsers] = useState<User[]>(userData);

    return (
        <>
            <NavBar variant="withLogout" />

            <main className="min-h-screen bg-slate-50 my-12">
                <div className="max-w-7xl mx-auto p-6">
                    <div className="">
                        <h2 className="text-2xl font-bold">User List</h2>
                        <p  className="text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <DataTable columns={columns} data={userData} />
                </div>
            </main>
        </>
    )
}