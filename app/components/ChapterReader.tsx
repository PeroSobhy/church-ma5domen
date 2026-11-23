"use client";

import Link from "next/link";
import { Amiri, Noto_Naskh_Arabic } from "next/font/google";
import { BibleChapter } from "../lib/bible";

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

interface Props {
    data: BibleChapter;
    testament: "new-chapter" | "old-chapter";
}

export default function ChapterReader({
    data,
    testament,
}: Props) {
    const verses = data.arr ?? (
        data.text ? [data.text] : []
    );

    // Old Testament = burgundy, New Testament = royal blue (same as the other pages)
    const isNew = testament === "new-chapter";
    const accent = isNew ? "text-[#16295A]" : "text-[#7A1F2B]";
    const buttonColors = isNew
        ? "text-[#16295A] hover:bg-[#16295A] focus-visible:bg-[#16295A]"
        : "text-[#7A1F2B] hover:bg-[#7A1F2B] focus-visible:bg-[#7A1F2B]";

    return (
        <main
            dir="rtl"
            className={`${body.className} min-h-screen bg-[#FAF5E9] text-[#2B2118] px-6 py-12 md:py-16`}
        >
            <div className="max-w-4xl mx-auto">

                {/* Header */}
                <div className="text-center mb-10">
                    <h1
                        className={`${heading.className} text-4xl md:text-6xl font-bold mb-4 ${accent}`}
                    >
                        {data.bookName}
                    </h1>

                    <div className="mx-auto mb-4 flex max-w-xs items-center gap-3 text-[#C9A227]">
                        <span className="h-px flex-1 bg-current" />
                        <Cross className="h-5 w-5" />
                        <span className="h-px flex-1 bg-current" />
                    </div>

                    <h2 className={`${heading.className} text-2xl md:text-3xl text-[#4A3B2C]`}>
                        الأصحاح {data.id}
                    </h2>

                    {data.title && (
                        <p className="mt-3 text-lg text-[#4A3B2C]">
                            {data.title}
                        </p>
                    )}
                </div>

                {/* Reading panel: parchment with double gold frame */}
                <div className="rounded-sm border border-[#C9A227] bg-[#FFFDF6] p-2 shadow-[0_8px_30px_rgba(43,33,24,0.08)]">
                    <div className="space-y-5 border border-[#C9A227]/50 px-6 py-8 md:px-12 md:py-12">

                        {verses.map((verse, index) => (
                            <p
                                key={index}
                                className={`${heading.className} text-2xl md:text-[1.7rem] leading-[2.3] text-[#2B2118] text-right`}
                                dir="rtl"
                            >
                                {verse}
                            </p>
                        ))}

                    </div>
                </div>

                {/* Back to chapters */}
                <div className="flex justify-center mt-10">

                    <Link
                        href={`/${testament}/${data.bookID}`}
                        className={`${heading.className} rounded-md border-2 border-[#C9A227] bg-[#FFFDF6] px-8 py-2.5 text-xl font-bold transition-colors hover:text-[#FAF5E9] focus-visible:text-[#FAF5E9] focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#C9A227] ${buttonColors}`}
                    >
                        قائمة الأصحاحات
                    </Link>

                </div>

            </div>
        </main>
    );
}
