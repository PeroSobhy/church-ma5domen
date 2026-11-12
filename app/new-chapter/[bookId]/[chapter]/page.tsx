import { getChapter } from "../../../lib/bible.ts";
import ChapterReader from "../../../components/ChapterReader.tsx";
import { notFound } from "next/navigation";

interface Props {
    params: Promise<{
        bookId: string;
        chapter: string;
    }>;
}

export default async function NewChapterReader({ params }: Props) {
    const { bookId, chapter } = await params;

    const id = Number(bookId);
    const chapterNumber = Number(chapter);

    if (
        !Number.isInteger(id) ||
        id < 50 ||
        id > 76 ||
        !Number.isInteger(chapterNumber) ||
        chapterNumber < 1
    ) {
        notFound();
    }

    const data = await getChapter(id, chapterNumber);

    return (
        <ChapterReader
            data={data}
            testament="new-chapter"
        />
    );
}
