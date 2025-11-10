import Link from "next/link";

export default function NavBar() {
    return (
        <header className="sticky top-0 p-4">
            <nav className="flex gap-5">
                <Link href="#hero">Home</Link>
                <Link href="#services">Services</Link>
                <Link href="#about">About</Link>
                <Link href="#contact">Contact</Link>
            </nav>
        </header>
    )
} 