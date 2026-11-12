import { getBooks } from "../lib/bible.ts";
import BookList from "../components/BooksList.tsx";

export default async function NewChapterPage() {
    const books = await getBooks();

    const newTestament = books.filter(
        (book) => book.id >= 50 && book.id <= 76
    );

    return (
        <BookList
            books={newTestament}
            testament="new-chapter"
        />
    );
}
