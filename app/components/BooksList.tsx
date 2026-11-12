import Link from "next/link";
import { BibleBook } from "../lib/bible.ts";

interface BookListProps {
    books: BibleBook[];
    testament: "new-chapter" | "old-chapter";
}

export default function BookList({
    books,
    testament,
}: BookListProps) {
    return (
        <main className="min-h-screen bg-gray-50 px-6 py-16">
            <div className="max-w-7xl mx-auto">

                <h1 className="text-3xl font-bold text-blue-600 text-center mb-4">
                    {testament === "new-chapter"
                        ? "العهد الجديد"
                        : "العهد القديم"}
                </h1>

                <p className="text-gray-600 text-center mb-12">
                    اختر السفر الذي تريد قراءته
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                    {books.map((book) => (
                        <Link
                            key={book.id}
                            href={`/${testament}/${book.id}`}
                            className="bg-white p-6 rounded-xl shadow-md border-2 border-gray-200 hover:border-blue-500 hover:shadow-xl transition text-center"
                        >
                            <h2 className="text-xl font-bold text-blue-600 mb-3">
                                {book.name}
                            </h2>

                            <p className="text-gray-500">
                                عدد الأصحاحات: {book.chapters}
                            </p>

                            <span className="inline-block mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg">
                                عرض الأصحاحات
                            </span>
                        </Link>
                    ))}

                </div>
            </div>
        </main>
    );
}
