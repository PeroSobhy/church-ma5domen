const API_URL = "https://arabic-bible.onrender.com";

export interface BibleBook {
    id: number;
    name: string;
    chapters: number;
}

export interface BibleChapter {
    bookName: string;
    bookID: string;
    id: string;
    verses_count: number;
    title?: string;
    arr?: string[];
    text?: string;
}

export async function getBooks(): Promise<BibleBook[]> {
    const [booksResponse, chaptersResponse] = await Promise.all([
        fetch(`${API_URL}/api/json/books`, {
            next: { revalidate: 3600 },
        }),
        fetch(`${API_URL}/api/json/chapters`, {
            next: { revalidate: 3600 },
        }),
    ]);

    if (!booksResponse.ok || !chaptersResponse.ok) {
        throw new Error("Failed to fetch Bible books");
    }

    const rawBooks: unknown = await booksResponse.json();
    const chapterCounts: Record<string, number> =
        await chaptersResponse.json();

    let books: BibleBook[] = [];

    if (Array.isArray(rawBooks)) {
        books = rawBooks.map((item, index) => {
            if (typeof item === "string") {
                return {
                    id: index + 1,
                    name: item,
                    chapters: chapterCounts[String(index + 1)] ?? 0,
                };
            }

            const book = item as Record<string, unknown>;
            const id = Number(book.bookID ?? book.id ?? index + 1);

            return {
                id,
                name: String(
                    book.bookName ?? book.name ?? book.title ?? ""
                ),
                chapters: chapterCounts[String(id)] ?? 0,
            };
        });
    } else if (
        typeof rawBooks === "object" &&
        rawBooks !== null
    ) {
        books = Object.entries(rawBooks).map(([key, value]) => {
            const book =
                typeof value === "object" && value !== null
                    ? value as Record<string, unknown>
                    : {};

            return {
                id: Number(book.bookID ?? book.id ?? key),
                name: String(
                    typeof value === "string"
                        ? value
                        : book.bookName ?? book.name ?? book.title ?? ""
                ),
                chapters: chapterCounts[key] ?? 0,
            };
        });
    }

    books = await Promise.all(
        books.map(async (book) => {
            if (book.name) return book;

            const response = await fetch(
                `${API_URL}/api?book=${book.id}`
            );

            if (!response.ok) return book;

            const data = await response.json();

            return {
                ...book,
                name: data.bookName ?? `Book ${book.id}`,
                chapters: Number(data.chapters ?? book.chapters),
            };
        })
    );

    return books.filter((book) => book.id > 0 && book.chapters > 0);
}

export async function getChapter(
    bookId: number,
    chapter: number
): Promise<BibleChapter> {
    const response = await fetch(
        `${API_URL}/api?book=${bookId}&ch=${chapter}`,
        {
            next: { revalidate: 3600 },
        }
    );

    if (!response.ok) {
        throw new Error("Failed to fetch chapter");
    }

    return response.json();
}
