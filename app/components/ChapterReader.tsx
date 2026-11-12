import Link from "next/link";
import { BibleChapter } from "../lib/bible.ts";

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

    return (
        <main className="min-h-screen bg-gray-50 px-6 py-12">
            <div className="max-w-4xl mx-auto">

                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold text-blue-600 mb-3">
                        {data.bookName}
                    </h1>

                    <h2 className="text-xl text-gray-600">
                        الأصحاح {data.id}
                    </h2>

                    {data.title && (
                        <p className="mt-3 text-lg text-gray-500">
                            {data.title}
                        </p>
                    )}
                </div>

                <div className="bg-white rounded-2xl shadow-md p-6 md:p-10 space-y-6">

                    {verses.map((verse, index) => (
                        <p
                            key={index}
                            className="text-xl leading-loose text-gray-800 text-right"
                            dir="rtl"
                        >
                            {verse}
                        </p>
                    ))}

                </div>

                <div className="flex justify-between mt-8">

                    <Link
                        href={`/${testament}/${data.bookID}`}
                        className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700"
                    >
                        قائمة الأصحاحات
                    </Link>

                </div>

            </div>
        </main>
    );
}
