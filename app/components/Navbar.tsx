"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "5odam", href: "/5odam" },
    ];

    return (
        <nav className="w-full bg-white shadow-md border-b-2">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="text-2xl font-bold text-blue-600">
                    St.Mary Church
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-gray-700 hover:text-blue-600 transition"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Desktop Button */}
                <Link
                    href="/books"
                    className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                    يلا نبدأ
                </Link>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-gray-700 text-2xl"
                    aria-label="Toggle navigation"
                    aria-expanded={isOpen}
                >
                    {isOpen ? "✕" : "☰"}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden px-6 pb-4 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-gray-700 hover:text-blue-600 transition text-center"
                        >
                            {link.name}
                        </Link>
                    ))}

                    <Link
                        href="/books"
                        onClick={() => setIsOpen(false)}
                        className="bg-blue-600 text-white px-5 py-2 rounded-lg text-center hover:bg-blue-700 transition"
                    >
                        يلا نبدأ

                    </Link>
                </div>
            )}
        </nav>
    );
}
