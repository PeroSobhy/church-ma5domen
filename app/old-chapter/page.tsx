import { getBooks } from "../lib/bible.ts";
import BookList from "../components/BooksList.tsx";

export default async function OldChapterPage() {
    const books = await getBooks();

    // Old Testament: book IDs 1 to 49
    const oldTestament = books.filter(
        (book) => book.id >= 1 && book.id <= 49
    );

    return (
        <BookList
            books={oldTestament}
            testament="old-chapter"
        />
    );
}
