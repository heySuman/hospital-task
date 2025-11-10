"use client"

import { toast } from "sonner"
import { motion } from "motion/react"
import { Hospital } from "lucide-react"
import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Toaster } from "@/components/ui/sonner"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Login() {

    const router = useRouter();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [role, setRole] = useState<"admin" | "doctor" | "user" | null>(null)

    const onSubmit = (e: FormEvent) => {
        e.preventDefault()

        if (!role) {
            toast.error("Please select your role")
            return
        }

        if (role === "admin") router.push("/admin")
        if (role === "doctor") router.push("/doctor")
        if (role === "user") router.push("/user")

    }

    return (
        <main className="w-full h-screen grid items-center justify-center">
            <div>
                <motion.div
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="flex items-center p-4 my-6"
                >
                    <div className="flex gap-2 items-center">
                        <Hospital />
                        <h1 className="text-2xl font-bold text-primary">Hospital</h1>
                    </div>
                </motion.div>
                <Card className="md:w-md max-w-md mx-auto border-none">
                    <CardHeader>
                        <CardTitle className="text-3xl text-primary">
                            Login
                        </CardTitle>
                        <CardDescription className="text-md">Get started with Hospital</CardDescription>
                    </CardHeader>

                    <CardContent>
                        <form className="w-full flex flex-col gap-3" onSubmit={onSubmit}>
                            <Label>Email</Label>
                            <Input
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                name="email"
                                required
                            />

                            <Label>Password</Label>
                            <Input
                                placeholder="Enter your password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />

                            <Label>Role</Label>
                            <Select onValueChange={(value: "admin" | "doctor" | "user") => setRole(value)}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select your role" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="admin">Admin</SelectItem>
                                        <SelectItem value="doctor">Doctor</SelectItem>
                                        <SelectItem value="user">User</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Button type="submit">Login</Button>
                        </form>

                    </CardContent>
                </Card>
                <Toaster position="top-center" />
            </div>
        </main>)
}
