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

interface ChapterListProps {
    book: BibleBook;
    testament: "new-chapter" | "old-chapter";
}

export default function ChapterList({
    book,
    testament,
}: ChapterListProps) {
    const chapters = Array.from(
        { length: book.chapters },
        (_, index) => index + 1
    );

    // Old Testament = burgundy, New Testament = royal blue (same as the other pages)
    const isNew = testament === "new-chapter";
    const accent = isNew ? "text-[#16295A]" : "text-[#7A1F2B]";
    const hoverBg = isNew
        ? "hover:bg-[#16295A] focus-visible:bg-[#16295A]"
        : "hover:bg-[#7A1F2B] focus-visible:bg-[#7A1F2B]";

    return (
        <main
            dir="rtl"
            className={`${body.className} min-h-screen bg-[#FAF5E9] text-[#2B2118] px-6 py-16`}
        >
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="text-center mb-12">
                    <h1
                        className={`${heading.className} text-4xl md:text-6xl font-bold mb-5 ${accent}`}
                    >
                        {book.name}
                    </h1>

                    <div className="mx-auto mb-6 flex max-w-xs items-center gap-3 text-[#C9A227]">
                        <span className="h-px flex-1 bg-current" />
                        <Cross className="h-5 w-5" />
                        <span className="h-px flex-1 bg-current" />
                    </div>

                    <p className="text-[#4A3B2C] text-lg md:text-xl">
                        اختر الأصحاح الذي تريد قراءته
                    </p>
                </div>

                {/* Chapters */}
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">

                    {chapters.map((chapter) => (
                        <Link
                            key={chapter}
                            href={`/${testament}/${book.id}/${chapter}`}
                            className={`${heading.className} flex aspect-square items-center justify-center rounded-t-full rounded-b-sm border-2 border-[#C9A227] bg-[#FFFDF6] text-2xl font-bold shadow-[0_2px_8px_rgba(43,33,24,0.08)] transition-colors hover:text-[#FAF5E9] focus-visible:text-[#FAF5E9] focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-[#C9A227] ${accent} ${hoverBg}`}
                        >
                            {chapter}
                        </Link>
                    ))}

                </div>

                {/* Back link */}
                <div className="text-center mt-12">
                    <Link
                        href={`/${testament}`}
                        className={`${heading.className} text-xl underline decoration-[#C9A227] decoration-2 underline-offset-8 hover:decoration-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9A227] ${accent}`}
                    >
                        العودة إلى قائمة الأسفار
                    </Link>
                </div>

            </div>
        </main>
    );
}
