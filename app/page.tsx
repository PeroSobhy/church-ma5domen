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

/* Equal-armed cross with flared ends (Coptic-inspired) */
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
        <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="4" aria-hidden="true">
            <path d="M18 88V34a16 16 0 0 1 32 0v54z" />
            <path d="M50 88V34a16 16 0 0 1 32 0v54z" />
            <path d="M28 46h12M28 58h12M28 70h12M60 46h12M60 58h12M60 70h12" strokeLinecap="round" />
        </svg>
    );
}

export default function Home() {
    return (
        <main
            dir="rtl"
            className={`${body.className} min-h-screen bg-[#FAF5E9] text-[#2B2118] overflow-hidden`}
        >
            {/* ───────── Hero: stained-glass arch with the cross ───────── */}
            <section className="relative px-6 pt-16 pb-10 text-center">
                {/* soft light behind the window */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(ellipse_at_top,rgba(201,162,39,0.28),transparent_65%)]" />

                <div className="relative mx-auto mb-10 w-52 md:w-64">
                    <div className="rounded-t-full border-[5px] border-[#C9A227] p-2 shadow-[0_10px_40px_rgba(22,41,90,0.35)] bg-[#FAF5E9]">
                        <div className="relative flex aspect-[3/4] items-center justify-center rounded-t-full bg-[linear-gradient(180deg,#1F3A7A_0%,#16295A_60%,#0E1B3F_100%)] overflow-hidden">
                            {/* light rays */}
                            <div className="absolute inset-0 bg-[repeating-conic-gradient(from_0deg_at_50%_45%,rgba(255,224,130,0.12)_0deg_6deg,transparent_6deg_18deg)]" />
                            <Cross className="relative h-28 w-28 md:h-36 md:w-36 text-[#E8C45A] drop-shadow-[0_0_14px_rgba(232,196,90,0.8)] motion-safe:animate-pulse" />
                        </div>
                    </div>
                </div>

                <h1
                    className={`${heading.className} text-5xl md:text-7xl font-bold text-[#16295A] mb-4`}
                >
                    أهلاً بيك
                </h1>

                {/* ornamental divider */}
                <div className="mx-auto flex max-w-xs items-center gap-3 text-[#C9A227]">
                    <span className="h-px flex-1 bg-current" />
                    <Cross className="h-5 w-5" />
                    <span className="h-px flex-1 bg-current" />
                </div>
            </section>

            {/* ───────── Welcome text on parchment ───────── */}
            <section className="mx-auto max-w-3xl px-6">
                <div className="rounded-sm border border-[#C9A227] bg-[#FFFDF6] p-2 shadow-[0_8px_30px_rgba(43,33,24,0.08)]">
                    <div className="border border-[#C9A227]/50 px-6 py-10 md:px-12 md:py-14 text-center">
                        <p className="text-xl md:text-2xl leading-[2.2] mb-6">
                            منورنا!
                            <br />
                            إحنا هنا علشان نساعدك تتعرف أكتر على الكتاب المقدس،
                            وتكتشف جمال كلام ربنا ومعانيه بطريقة بسيطة وسهلة.
                        </p>

                        <p className="text-lg md:text-xl leading-[2.2] text-[#4A3B2C] mb-10">
                            سواء حابب تبدأ رحلتك مع العهد القديم أو العهد الجديد،
                            هتلاقي هنا فرصة تقرأ وتتعلم وتفهم أكتر عن كلمة ربنا،
                            وتعيش مع كل قصة وكل آية بمعنى جديد.
                        </p>

                        {/* verse */}
                        <blockquote className="mx-auto max-w-xl border-r-4 border-[#7A1F2B] bg-[#7A1F2B]/5 px-5 py-4 text-right">
                            <p className={`${heading.className} text-2xl md:text-3xl text-[#7A1F2B] leading-relaxed`}>
                                سِرَاجٌ لِرِجْلِي كَلاَمُكَ وَنُورٌ لِسَبِيلِي
                            </p>
                            <footer className="mt-1 text-sm text-[#4A3B2C]">
                                مزمور ١١٩ : ١٠٥
                            </footer>
                        </blockquote>
                    </div>
                </div>
            </section>

            {/* ───────── Call to action: two arched doors ───────── */}
            <section className="mx-auto max-w-3xl px-6 pt-16 pb-20 text-center">
                <p
                    className={`${heading.className} text-3xl md:text-4xl font-bold text-[#16295A] mb-10`}
                >
                    يلا نبدأ رحلتنا مع بعض!
                </p>

                <div className="grid gap-6 sm:grid-cols-2">
                    <Link
                        href="/old-testament"
                        className="group flex flex-col items-center gap-4 rounded-t-[999px] rounded-b-md border-2 border-[#C9A227] bg-[#7A1F2B] px-8 pt-14 pb-8 text-[#FAF5E9] transition-colors hover:bg-[#611620] focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#16295A]"
                    >
                        <Tablets className="h-14 w-14 text-[#E8C45A]" />
                        <span className={`${heading.className} text-3xl font-bold`}>
                            العهد القديم
                        </span>
                        <span className="text-sm text-[#F1E3B8]">
                            من التكوين إلى ملاخي
                        </span>
                    </Link>

                    <Link
                        href="/new-testament"
                        className="group flex flex-col items-center gap-4 rounded-t-[999px] rounded-b-md border-2 border-[#C9A227] bg-[#16295A] px-8 pt-14 pb-8 text-[#FAF5E9] transition-colors hover:bg-[#0E1B3F] focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#7A1F2B]"
                    >
                        <Cross className="h-14 w-14 text-[#E8C45A]" />
                        <span className={`${heading.className} text-3xl font-bold`}>
                            العهد الجديد
                        </span>
                        <span className="text-sm text-[#D6DEF5]">
                            من متى إلى الرؤيا
                        </span>
                    </Link>
                </div>
            </section>

            <footer className="border-t border-[#C9A227]/40 py-6 text-center text-sm text-[#4A3B2C]">
                نعمة وسلام لكم من الله أبينا
            </footer>
        </main>
    );
}
