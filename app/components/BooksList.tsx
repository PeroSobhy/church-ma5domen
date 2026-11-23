"use client";

import Link from "next/link";
import { Amiri, Noto_Naskh_Arabic } from "next/font/google";
import { BibleBook } from "../lib/bible";

const heading = Amiri({
    subsets: ["arabic"],
    weight: ["400", "700"],
    display: "swap",
});

const body = Noto_Naskh_Arabic({
    subsets: ["arabic"],
    weight: ["400", "600"],
    display: "swap",
});

/* Same Coptic-inspired cross used across the site */
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

/* Two tablets – Old Testament */
function Tablets({ className = "" }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 100 100"
            className={className}
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            aria-hidden="true"
        >
            <path d="M18 88V34a16 16 0 0 1 32 0v54z" />
            <path d="M50 88V34a16 16 0 0 1 32 0v54z" />
            <path d="M28 46h12M28 58h12M28 70h12M60 46h12M60 58h12M60 70h12" strokeLinecap="round" />
        </svg>
    );
}

interface BookListProps {
    books: BibleBook[];
    testament: "new-chapter" | "old-chapter";
}

export default function BookList({
    books,
    testament,
}: BookListProps) {
    const isNew = testament === "new-chapter";

    // Old Testament = burgundy, New Testament = royal blue (same as the other pages)
    const spine = isNew ? "border-s-[#16295A]" : "border-s-[#7A1F2B]";
    const accent = isNew ? "text-[#16295A]" : "text-[#7A1F2B]";
    const hoverBg = isNew
        ? "group-hover:bg-[#16295A] group-focus-visible:bg-[#16295A]"
        : "group-hover:bg-[#7A1F2B] group-focus-visible:bg-[#7A1F2B]";

    return (
        <main
            dir="rtl"
            className={`${body.className} min-h-screen bg-[#FAF5E9] text-[#2B2118] px-6 py-16`}
        >
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-14">
                    {isNew ? (
                        <Cross className="mx-auto mb-4 h-12 w-12 text-[#C9A227]" />
                    ) : (
                        <Tablets className="mx-auto mb-4 h-12 w-12 text-[#C9A227]" />
                    )}

                    <h1
                        className={`${heading.className} text-4xl md:text-6xl font-bold mb-5 ${accent}`}
                    >
                        {isNew ? "العهد الجديد" : "العهد القديم"}
                    </h1>

                    <div className="mx-auto mb-6 flex max-w-xs items-center gap-3 text-[#C9A227]">
                        <span className="h-px flex-1 bg-current" />
                        <Cross className="h-5 w-5" />
                        <span className="h-px flex-1 bg-current" />
                    </div>

                    <p className="text-[#4A3B2C] text-lg md:text-xl">
                        اختر السفر الذي تريد قراءته
                    </p>
                </div>

                {/* Books: each card has a colored spine, like a book on a shelf */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                    {books.map((book) => (
                        <Link
                            key={book.id}
                            href={`/${testament}/${book.id}`}
                            className={`group flex flex-col items-center rounded-md border border-[#C9A227] border-s-[10px] ${spine} bg-[#FFFDF6] p-6 text-center shadow-[0_4px_16px_rgba(43,33,24,0.08)] transition-shadow hover:shadow-[0_8px_24px_rgba(43,33,24,0.18)] focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-[#C9A227]`}
                        >
                            <h2
                                className={`${heading.className} text-2xl font-bold mb-3 ${accent}`}
                            >
                                {book.name}
                            </h2>

                            <p className="text-[#4A3B2C]">
                                عدد الأصحاحات: {book.chapters}
                            </p>

                            <span
                                className={`mt-5 inline-block rounded-md border-2 border-[#C9A227] px-5 py-1.5 text-lg ${heading.className} ${accent} transition-colors group-hover:text-[#FAF5E9] group-focus-visible:text-[#FAF5E9] ${hoverBg}`}
                            >
                                عرض الأصحاحات
                            </span>
                        </Link>
                    ))}

                </div>
            </div>
        </main>
    );
}
