"use client"

import NavBar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function UserPage() {
    const router = useRouter();

    return (
        <div className="min-h-screen/2">
            <NavBar variant="withLogout" />
            <main className="my-24 max-w-7xl mx-auto p-4">
                <h1 className="text-3xl font-bold">Doctor Page</h1>
                <p className="my-4 text-slate-600 sm:max-w-1/2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At, quam? Omnis voluptatem quaerat doloribus eveniet alias adipisci placeat? Autem, aliquid.
                </p>
                <Button
                    onClick={() => router.push("/")}
                    className="mb-4 text-sm"
                >
                    Go Back
                </Button>
            </main>
        </div>
    )
}
