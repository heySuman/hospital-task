"use client"

import { toast } from "sonner"
import { useState } from "react"
import { User } from "@/types/user"
import { DataTable } from "./data-table"
import NavBar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"
import { AddUser } from "@/components/admin/add-user"
import { users as userData } from "@/constants/users"
import { format } from "date-fns"
import { Pencil, Trash } from "lucide-react"
import {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogCancel,
    AlertDialogAction,
    AlertDialogHeader,
    AlertDialogFooter,
} from "@/components/ui/alert-dialog"

export default function Page() {

    const [users, setUsers] = useState<User[]>(userData);


    const columns: ColumnDef<User>[] = [
        {
            accessorKey: "id",
            header: "Id"
        },
        {
            accessorKey: "fullName",
            header: "Name",
            enableColumnFilter: true
        },
        {
            accessorKey: "email",
            header: "Email",
            enableColumnFilter: true
        },
        {
            accessorKey: "phone",
            header: "Phone"
        },
        {
            accessorKey: "role",
            header: "Role"
        },
        {
            accessorKey: "gender",
            header: "Gender",
        },
        {
            accessorKey: "address",
            header: "Address"
        },
        {
            accessorKey: "appointmentTime",
            header: "Appointment Time",
            cell: ({ row }) => {
                const appointmentTime = row.getValue("appointmentTime")
                if (appointmentTime) {
                    const formattedDate = format(appointmentTime as string, "dd MMMM, yyyy")
                    return formattedDate
                }

                return "-"
            }
        },
        {
            accessorKey: "assignedDoctor",
            header: "Assigned Doctor"
        },
        {
            id: "actions",
            header: "Actions",
            cell: ({ row }) => {
                const user = row.original as User
                return (
                    <div className="relative flex gap-2">
                        <AddUser
                            initialUser={user}
                            onSave={(u) => {
                                setUsers(prev => prev.map(p => p.id === u.id ? u : p))
                                toast.success("User updated")
                            }}
                            trigger={<Button size="sm" variant="outline">
                                <Pencil />
                            </Button>}
                        />

                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <Button variant="destructive"><Trash /></Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent className="">
                                <AlertDialogHeader>
                                    <AlertDialogTitle>Do you want to delete this user?</AlertDialogTitle>
                                    <AlertDialogDescription>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction onClick={() => {
                                        setUsers(prev => prev.filter(p => p.id !== user.id))
                                        toast.success("User deleted")
                                    }}>Delete</AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </div>
                )
            }
        }
    ]

    const addNewUser = (newUser: User) => {
        setUsers([...users, newUser])
        toast.success("User added successfully.")
    }

    return (
        <>
            <NavBar variant="withLogout" />

            <main className="min-h-screen bg-slate-50 my-12">
                <div className="max-w-7xl mx-auto p-6">
                    <div className="flex  items-center justify-between">
                        <div>
                            <h2 className="text-2xl font-bold">User List</h2>
                            <p className="text-slate-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>

                        <div>
                            <AddUser onSave={addNewUser} />
                        </div>

                    </div>
                    <DataTable columns={columns} data={users} />
                </div>
            </main>
        </>
    )
}