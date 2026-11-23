"use client";

import { Amiri } from "next/font/google";

const heading = Amiri({
    subsets: ["arabic"],
    weight: ["400", "700"],
    display: "swap",
});

/* Same Coptic-inspired cross used across the site */
function Cross({ className = "" }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 100 100"
            className={className}
            fill="currentColor"
            aria-hidden="true"
        >
            <rect x="44" y="12" width="12" height="76" rx="2" />
            <rect x="12" y="44" width="76" height="12" rx="2" />
            <rect x="35" y="10" width="30" height="6" rx="2" />
            <rect x="35" y="84" width="30" height="6" rx="2" />
            <rect x="10" y="35" width="6" height="30" rx="2" />
            <rect x="84" y="35" width="6" height="30" rx="2" />
            <circle cx="50" cy="50" r="5" fill="#16295A" />
        </svg>
    );
}

interface YouTubePlayerProps {
    videoId: string;
    title: string;
}

export default function YouTubePlayer({
    videoId,
    title,
}: YouTubePlayerProps) {
    return (
        <div className="mx-auto my-5 w-full max-w-[800px]">
            <h2
                className={`${heading.className} mb-4 flex items-center gap-3 text-2xl md:text-3xl font-bold text-[#16295A]`}
            >
                <Cross className="h-5 w-5 shrink-0 text-[#C9A227]" />
                {title}
            </h2>

            {/* Gold frame around the video */}
            <div className="aspect-video w-full overflow-hidden rounded-md border-4 border-[#C9A227] bg-[#0E1B3F] shadow-[0_8px_30px_rgba(22,41,90,0.25)]">
                <iframe
                    className="h-full w-full border-0"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            </div>
        </div>
    );
}
