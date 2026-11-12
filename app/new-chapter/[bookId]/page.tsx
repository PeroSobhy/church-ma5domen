import { getBooks } from "../../lib/bible.ts";
import ChapterList from "../../components/ChapterList.tsx";
import { notFound } from "next/navigation";

interface Props {
    params: Promise<{ bookId: string }>;
}

export default async function NewBookPage({ params }: Props) {
    const { bookId } = await params;
    const id = Number(bookId);

    const books = await getBooks();

    const book = books.find(
        (item) => item.id === id && item.id >= 50
    );

    if (!book) notFound();

    return (
        <ChapterList
            book={book}
            testament="new-chapter"
        />
    );
}
