"use client"

import NavBar from "@/components/navbar";
import { useRouter } from "next/navigation";

export default function DoctorPage(){
    const router = useRouter();
    return (
        <div className="min-h-screen bg-slate-50">
            <NavBar />
            <main className="max-w-4xl mx-auto p-6">
                <button onClick={()=>router.back()} className="mb-4 text-sm text-blue-600">← Back</button>
                <h1 className="text-3xl font-bold">Doctor Page</h1>
                <p className="mt-4 text-slate-600">Simple doctor view — placeholder content.</p>
            </main>
        </div>
    )
}
