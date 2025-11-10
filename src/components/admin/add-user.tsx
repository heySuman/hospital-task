import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { User } from "@/types/user"
import { doctors } from "@/constants/doctors"
import React, { useState } from "react"
import { toast } from "sonner"

type Props = {
    initialUser?: User | null
    onSave: (user: User) => void
    trigger?: React.ReactNode
    count?: number
}

export function AddUser({ initialUser = null, onSave, trigger, count }: Props) {
    const [open, setOpen] = useState(false)

    const [fullName, setFullName] = useState(initialUser?.fullName ?? "")
    const [email, setEmail] = useState(initialUser?.email ?? "")
    const [phone, setPhone] = useState(initialUser?.phone ?? "")
    const [role, setRole] = useState<User["role"]>(initialUser?.role ?? "User")
    const [gender, setGender] = useState<User["gender"]>(initialUser?.gender ?? "Male")
    const [address, setAddress] = useState(initialUser?.address ?? "")
    const [appointmentTime, setAppointmentTime] = useState<string | null>(initialUser?.appointmentTime ?? null)
    const [assignedDoctor, setAssignedDoctor] = useState<string | null>(initialUser?.assignedDoctor ?? null)

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()

        if (!fullName || !email) {
            toast.error("Please provide at least name and email")
            return
        }

        const user: User = {
            id: initialUser?.id ?? (count ? String(count + 1) : Date.now().toString()),
            fullName,
            email,
            phone,
            role,
            gender,
            address,
            appointmentTime: appointmentTime || null,
            assignedDoctor: assignedDoctor || null,
        }

        onSave(user)
        setOpen(false)
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {trigger ?? <Button>Add User</Button>}
            </DialogTrigger>

            <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                    <DialogTitle>{initialUser ? "Edit User" : "Add User"}</DialogTitle>
                    <DialogDescription>
                        Fill details to create a new user. Lorem ipsum dolor sit amet.
                    </DialogDescription>
                </DialogHeader>

                <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-3">
                        <Label htmlFor="fullName">Full name</Label>
                        <Input id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                    </div>
                    <div className="flex flex-col gap-3">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="flex flex-col gap-3">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className="flex flex-col gap-3">
                        <Label htmlFor="role">Role</Label>
                        <Select onValueChange={(v) => setRole(v as any)}>
                            <SelectTrigger aria-label="role" className="w-full">
                                <SelectValue>{role}</SelectValue>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="User">User</SelectItem>
                                <SelectItem value="Doctor">Doctor</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="flex flex-col gap-3">
                        <Label htmlFor="gender">Gender</Label>
                        <Select onValueChange={(v) => setGender(v as any)}>
                            <SelectTrigger aria-label="gender" className="w-full">
                                <SelectValue>{gender}</SelectValue>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Male">Male</SelectItem>
                                <SelectItem value="Female">Female</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex flex-col gap-3">
                        <Label htmlFor="appointment">Appointment Time</Label>
                        <Input id="appointment" type="datetime-local" value={appointmentTime ?? ""} onChange={(e) => setAppointmentTime(e.target.value || null)} />
                    </div>

                    <div className="sm:col-span-2 flex flex-col gap-3">
                        <Label htmlFor="assigned">Assigned Doctor</Label>
                        <Select onValueChange={(v) => setAssignedDoctor(v === "__none__" ? null : v)}>
                            <SelectTrigger aria-label="assigned" className="w-full">
                                <SelectValue>{assignedDoctor ?? "-- Not assigned --"}</SelectValue>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="__none__">-- Not assigned --</SelectItem>
                                {doctors.map((d) => (
                                    <SelectItem key={d.name} value={d.name}>
                                        {d.name} — {d.department}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="sm:col-span-2 flex flex-col gap-3">
                        <Label htmlFor="address">Address</Label>
                        <Input id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
                    </div>

                    <DialogFooter className="sm:col-span-2">
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button type="submit">Save</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}
