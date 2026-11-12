import { getChapter } from "../../../lib/bible.ts";
import ChapterReader from "../../../components/ChapterReader.tsx";
import { notFound } from "next/navigation";

interface Props {
    params: Promise<{
        bookId: string;
        chapter: string;
    }>;
}

export default async function OldChapterReader({ params }: Props) {
    const { bookId, chapter } = await params;

    const id = Number(bookId);
    const chapterNumber = Number(chapter);

    if (
        !Number.isInteger(id) ||
        id < 1 ||
        id > 49 ||
        !Number.isInteger(chapterNumber) ||
        chapterNumber < 1
    ) {
        notFound();
    }

    const data = await getChapter(id, chapterNumber);

    return (
        <ChapterReader
            data={data}
            testament="old-chapter"
        />
    );
}

