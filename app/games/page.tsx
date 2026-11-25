import Image from "next/image";
import { Amiri } from "next/font/google";

const heading = Amiri({
    subsets: ["arabic", "latin"],
    weight: ["400", "700"],
    display: "swap",
});

type Game = {
    name: string;
    image: string;
    href: string;
};

const games: Game[] = [
    {
        name: "امين أنا؟",
        image: "/whoami.jpeg",
        href: "https://ebraam-sobhy.itch.io/whoami",
    },
    {
        name: "لعبة الذاكرة",
        image: "/memorygame.jpeg",
        href: "https://ebraam-sobhy.itch.io/memorygame",
    },
    {
        name: "تنس الطاولة",
        image: "/pingpong.png",
        href: "https://ebraam-sobhy.itch.io/pong-game",
    },
];

export default function GamesPage() {
    return (
        <main dir="rtl" className="min-h-screen bg-[#FAF5E9]">
            <div className="max-w-7xl mx-auto px-6 py-12">
                {/* Page title */}
                <h1
                    className={`${heading.className} mb-3 text-center text-4xl md:text-5xl font-bold text-[#16295A]`}
                >
                    ألعاب
                </h1>
                <div className="mx-auto mb-10 h-1 w-24 border-y-2 border-[#C9A227]" />

                {games.length === 0 ? (
                    <p
                        className={`${heading.className} text-center text-xl text-[#4A3B2C]`}
                    >
                        الألعاب جاية قريب
                    </p>
                ) : (
                    <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {games.map((game) => (
                            <li key={game.href}>
                                <a
                                    href={game.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group block overflow-hidden rounded-t-[3rem] rounded-b-lg border-2 border-[#C9A227] bg-white shadow-[0_4px_20px_rgba(43,33,24,0.08)] transition-shadow hover:shadow-[0_8px_28px_rgba(43,33,24,0.18)] focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-[#7A1F2B]"
                                >
                                    {/* Image */}
                                    <div className="relative aspect-[4/3] w-full bg-[#16295A]">
                                        <Image
                                            src={game.image}
                                            alt={game.name}
                                            fill
                                            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                                            className="object-cover"
                                        />
                                    </div>

                                    {/* Name + play button */}
                                    <div className="flex items-center justify-between gap-4 border-t-4 border-double border-[#C9A227] bg-[#FAF5E9] px-5 py-4">
                                        <h2
                                            className={`${heading.className} text-2xl font-bold text-[#16295A]`}
                                        >
                                            {game.name}
                                        </h2>
                                        <span
                                            className={`${heading.className} shrink-0 rounded-t-full rounded-b-md border-2 border-[#C9A227] bg-[#16295A] px-5 pt-1.5 pb-1 text-lg text-[#FAF5E9] transition-colors group-hover:bg-[#0E1B3F]`}
                                        >
                                            العب
                                        </span>
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </main>
    );
}
