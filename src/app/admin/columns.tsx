"use client"

import { format } from "date-fns"
import { User } from "@/types/user"
import { ColumnDef } from "@tanstack/react-table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu"
import { DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { MoreHorizontal } from "lucide-react"

export const columns: ColumnDef<User>[] = [
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
        enableHiding: false,
        cell: ({ row }) => {
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-white rounded p-4 shadow-md flex flex-col gap-2">
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    }
]