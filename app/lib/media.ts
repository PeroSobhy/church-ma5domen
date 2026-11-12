export interface ChapterMedia {
    id: number;
    bookId: number;
    chapter: number;
    title: string;
    description: string;
    youtubeId: string;
}

export const chapterMedia: ChapterMedia[] = [
    {
        id: 1,
        bookId: 50,
        chapter: 1,
        title: "شرح الأصحاح الأول",
        description: "تفسير وشرح الأصحاح الأول من إنجيل متى",
        youtubeId: "Aie0nYktsNA",
    },
];

export function getChapterMedia(
    bookId: number,
    chapter: number
): ChapterMedia[] {
    return chapterMedia.filter(
        (video) =>
            video.bookId === bookId &&
            video.chapter === chapter
    );
}
