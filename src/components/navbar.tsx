"use client"

import Link from "next/link";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { Hospital } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NavBar({ variant = "withLogin" }: { variant: "withLogout" | "withLogin" }) {
    const links = [
        { href: "#hero", label: "Home" },
        { href: "#services", label: "Services" },
        { href: "#about", label: "About" },
        { href: "#contact", label: "Contact" },
    ]

    const router = useRouter();

    return (
        <header className="fixed inset-x-0 top-0 z-50">
            <motion.div
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-transparent/96 backdrop-blur-sm"
            >
                <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex gap-2 items-center">
                        <Hospital />
                        <h1 className="text-2xl font-bold text-primary">Hospital</h1>
                    </div>
                    {
                        variant === "withLogin" && (
                            <nav className="flex gap-6 items-center">
                                {links.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className="font-medium text-gray-700 hover:text-primary
                           hover:underline underline-offset-4 transition duration-300 ease-in-out hidden sm:block"
                                    >
                                        {item.label}
                                    </Link>
                                ))}

                                <Button onClick={() => router.push("/login")}>Login</Button>
                            </nav>)
                    }
                    {
                        variant === "withLogout" &&
                        <nav className="flex gap-6 items-center">
                            <Button onClick={() => router.push("/")}>Logout</Button>
                        </nav>
                    }
                </div>
            </motion.div>
        </header>
    );
}