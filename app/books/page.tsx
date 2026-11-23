import Link from "next/link";
import { Amiri, Noto_Naskh_Arabic } from "next/font/google";

const heading = Amiri({
    subsets: ["arabic"],
    weight: ["400", "700"],
    display: "swap",
});

const body = Noto_Naskh_Arabic({
    subsets: ["arabic"],
    weight: ["400", "600"],
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

/* Two tablets – Old Testament */
function Tablets({ className = "" }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 100 100"
            className={className}
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            aria-hidden="true"
        >
            <path d="M18 88V34a16 16 0 0 1 32 0v54z" />
            <path d="M50 88V34a16 16 0 0 1 32 0v54z" />
            <path d="M28 46h12M28 58h12M28 70h12M60 46h12M60 58h12M60 70h12" strokeLinecap="round" />
        </svg>
    );
}

type Section = {
    title: string;
    description: string;
    href: string;
    icon: "tablets" | "cross";
    cardClass: string;
    subtitleClass: string;
};

const sections: Section[] = [
    {
        title: "العهد القديم",
        description: "اكتشف أسفار العهد القديم واقرأ محتوياته.",
        href: "/old-chapter",
        icon: "tablets",
        cardClass: "bg-[#7A1F2B]",
        subtitleClass: "text-[#F1E3B8]",
    },
    {
        title: "العهد الجديد",
        description: "اكتشف أسفار العهد الجديد واقرأ محتوياته.",
        href: "/new-chapter",
        icon: "cross",
        cardClass: "bg-[#16295A]",
        subtitleClass: "text-[#D6DEF5]",
    },
];

export default function Home() {
    return (
        <main
            dir="rtl"
            className={`${body.className} min-h-screen bg-[#FAF5E9] text-[#2B2118]`}
        >
            <section className="max-w-5xl mx-auto px-6 py-16 md:py-20">

                {/* Page Header */}
                <div className="text-center mb-14">
                    <h1
                        className={`${heading.className} text-4xl md:text-6xl font-bold text-[#16295A] mb-5`}
                    >
                        الكتاب المقدس
                    </h1>

                    <div className="mx-auto mb-6 flex max-w-xs items-center gap-3 text-[#C9A227]">
                        <span className="h-px flex-1 bg-current" />
                        <Cross className="h-5 w-5" />
                        <span className="h-px flex-1 bg-current" />
                    </div>

                    <p className="text-[#4A3B2C] text-lg md:text-xl">
                        اختر القسم الذي تريد تصفحه
                    </p>
                </div>

                {/* Arched cards */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {sections.map((section) => (
                        <div
                            key={section.title}
                            className={`flex flex-col items-center rounded-t-[999px] rounded-b-md border-2 border-[#C9A227] px-8 pt-16 pb-10 text-center text-[#FAF5E9] shadow-[0_10px_30px_rgba(22,41,90,0.2)] ${section.cardClass}`}
                        >
                            {section.icon === "cross" ? (
                                <Cross className="mb-5 h-14 w-14 text-[#E8C45A] drop-shadow-[0_0_10px_rgba(232,196,90,0.6)]" />
                            ) : (
                                <Tablets className="mb-5 h-14 w-14 text-[#E8C45A] drop-shadow-[0_0_10px_rgba(232,196,90,0.6)]" />
                            )}

                            <h2
                                className={`${heading.className} mb-4 text-3xl md:text-4xl font-bold`}
                            >
                                {section.title}
                            </h2>

                            <p className={`mb-8 text-lg leading-loose ${section.subtitleClass}`}>
                                {section.description}
                            </p>

                            <Link
                                href={section.href}
                                className={`${heading.className} mt-auto inline-block rounded-md border-2 border-[#C9A227] bg-[#E8C45A] px-8 py-2.5 text-xl font-bold text-[#16295A] transition-colors hover:bg-[#FAF5E9] focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#E8C45A]`}
                            >
                                ابدأ الآن
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
