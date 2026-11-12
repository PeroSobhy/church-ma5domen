import { getBooks } from "../lib/bible";
import BookList from "../components/BooksList";

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
