import { getBooks } from "../lib/bible";
import BookList from "../components/BooksList";

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
