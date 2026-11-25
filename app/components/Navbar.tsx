"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Amiri } from "next/font/google";

const heading = Amiri({
    subsets: ["arabic", "latin"],
    weight: ["400", "700"],
    display: "swap",
});

/* Same Coptic-inspired cross used on the home page */
function Cross({ className = "" }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 100 100"
            className={className}
            fill="currentColor"
            aria-hidden="true"
        >
            <rect x="44" y="12" width="12" height="76" rx="2" />
            <rect x="12" y="44" width="76" height="12" rx="2" />
            <rect x="35" y="10" width="30" height="6" rx="2" />
            <rect x="35" y="84" width="30" height="6" rx="2" />
            <rect x="10" y="35" width="6" height="30" rx="2" />
            <rect x="84" y="35" width="6" height="30" rx="2" />
            <circle cx="50" cy="50" r="5" fill="#16295A" />
        </svg>
    );
}

const navLinks = [
    { name: "يسوع", href: "/" },
    { name: "خدام", href: "/5odam" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (href: string) =>
        href === "/" ? pathname === "/" : pathname.startsWith(href);

    return (
        <nav className="w-full bg-[#FAF5E9] border-b-4 border-double border-[#C9A227] shadow-[0_4px_20px_rgba(43,33,24,0.08)]">
            <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

                {/* Logo: small arched window + church name */}
                <Link
                    href="/"
                    className="flex items-center gap-3 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#16295A]"
                >
                    <span className="flex h-11 w-9 items-center justify-center rounded-t-full border-2 border-[#C9A227] bg-[#16295A]">
                        <Cross className="h-6 w-6 text-[#E8C45A]" />
                    </span>
                    <span
                        className={`${heading.className} text-2xl md:text-3xl font-bold text-[#16295A]`}
                    >
                        St.Mary Church
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            aria-current={isActive(link.href) ? "page" : undefined}
                            className={`${heading.className} text-xl py-1 border-b-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#16295A] ${isActive(link.href)
                                ? "border-[#C9A227] text-[#7A1F2B] font-bold"
                                : "border-transparent text-[#4A3B2C] hover:text-[#7A1F2B]"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Desktop Button */}
                <Link
                    href="/books"
                    className={`${heading.className} hidden md:flex items-center gap-2 rounded-t-full rounded-b-md border-2 border-[#C9A227] bg-[#16295A] px-7 pt-2 pb-1.5 text-xl text-[#FAF5E9] transition-colors hover:bg-[#0E1B3F] focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-[#7A1F2B]`}
                >
                    يلا نبدأ
                </Link>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden flex h-11 w-11 items-center justify-center rounded-md border-2 border-[#C9A227] text-2xl text-[#16295A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#16295A]"
                    aria-label="Toggle navigation"
                    aria-expanded={isOpen}
                >
                    {isOpen ? "✕" : "☰"}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden border-t border-[#C9A227]/50 px-6 pb-5 pt-3 flex flex-col gap-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            aria-current={isActive(link.href) ? "page" : undefined}
                            className={`${heading.className} rounded-md py-2 text-center text-xl transition-colors ${isActive(link.href)
                                ? "bg-[#7A1F2B]/10 text-[#7A1F2B] font-bold"
                                : "text-[#4A3B2C] hover:text-[#7A1F2B]"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <Link
                        href="/books"
                        onClick={() => setIsOpen(false)}
                        className={`${heading.className} mt-2 rounded-md border-2 border-[#C9A227] bg-[#16295A] px-5 py-2 text-center text-xl text-[#FAF5E9] transition-colors hover:bg-[#0E1B3F]`}
                    >
                        يلا نبدأ
                    </Link>
                </div>
            )}
        </nav>
    );
}
