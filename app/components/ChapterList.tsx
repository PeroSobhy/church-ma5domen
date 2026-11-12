import Link from "next/link";
import { BibleBook } from "../lib/bible.ts";

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

    return (
        <main className="min-h-screen bg-gray-50 px-6 py-16">
            <div className="max-w-6xl mx-auto">

                <h1 className="text-3xl font-bold text-blue-600 text-center mb-4">
                    {book.name}
                </h1>

                <p className="text-gray-600 text-center mb-10">
                    اختر الأصحاح الذي تريد قراءته
                </p>

                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">

                    {chapters.map((chapter) => (
                        <Link
                            key={chapter}
                            href={`/${testament}/${book.id}/${chapter}`}
                            className="bg-white border-2 border-gray-200 rounded-xl p-5 text-center text-xl font-bold text-blue-600 shadow-sm hover:border-blue-500 hover:bg-blue-50 transition"
                        >
                            {chapter}
                        </Link>
                    ))}

                </div>

                <div className="text-center mt-10">
                    <Link
                        href={`/${testament}`}
                        className="text-blue-600 hover:underline"
                    >
                        العودة إلى قائمة الأسفار
                    </Link>
                </div>

            </div>
        </main>
    );
}

