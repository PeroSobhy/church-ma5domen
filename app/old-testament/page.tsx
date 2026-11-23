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

export default function OldTestament() {
    return (
        <main
            dir="rtl"
            className={`${body.className} min-h-screen bg-[#FAF5E9] text-[#2B2118]`}
        >
            <section className="max-w-4xl mx-auto px-6 py-16 md:py-20 text-center">

                {/* Arched window badge (burgundy for the Old Testament) */}
                <div className="mx-auto mb-8 w-28 md:w-32">
                    <div className="rounded-t-full border-[4px] border-[#C9A227] bg-[#FAF5E9] p-1.5 shadow-[0_8px_24px_rgba(122,31,43,0.3)]">
                        <div className="relative flex aspect-[3/4] items-center justify-center overflow-hidden rounded-t-full bg-[linear-gradient(180deg,#9A2A3A_0%,#7A1F2B_60%,#4A1019_100%)]">
                            <div className="absolute inset-0 bg-[repeating-conic-gradient(from_0deg_at_50%_45%,rgba(255,224,130,0.12)_0deg_6deg,transparent_6deg_18deg)]" />
                            <Tablets className="relative h-14 w-14 md:h-16 md:w-16 text-[#E8C45A] drop-shadow-[0_0_10px_rgba(232,196,90,0.8)]" />
                        </div>
                    </div>
                </div>

                <h1
                    className={`${heading.className} text-4xl md:text-6xl font-bold text-[#7A1F2B] mb-4`}
                >
                    العهد القديم
                </h1>

                <div className="mx-auto mb-10 flex max-w-xs items-center gap-3 text-[#C9A227]">
                    <span className="h-px flex-1 bg-current" />
                    <Cross className="h-5 w-5" />
                    <span className="h-px flex-1 bg-current" />
                </div>

                {/* Parchment panel with double gold frame */}
                <div className="rounded-sm border border-[#C9A227] bg-[#FFFDF6] p-2 shadow-[0_8px_30px_rgba(43,33,24,0.08)]">
                    <div className="border border-[#C9A227]/50 px-6 py-10 md:px-12 md:py-14">

                        <p className="text-xl md:text-2xl leading-[2.2] mb-6">
                            أهلاً بيك في قسم العهد القديم!
                        </p>

                        <p className="text-lg md:text-xl leading-[2.2] text-[#4A3B2C] mb-6">
                            العهد القديم مليان قصص عظيمة ومواقف نتعلم منها
                            كتير عن ربنا ومحبته لشعبه، وعن الإيمان والطاعة
                            والثقة فيه حتى في أصعب الظروف.
                        </p>

                        <p className="text-lg md:text-xl leading-[2.2] text-[#4A3B2C] mb-6">
                            هنا هتتعرف على قصص الأنبياء، وحياة الآباء زي
                            إبراهيم وإسحاق ويعقوب ويوسف، وقصة موسى وخروج
                            شعب بني إسرائيل من مصر، وكمان هتكتشف المزامير
                            والحكمة والنبوّات.
                        </p>

                        <p className="text-lg md:text-xl leading-[2.2] text-[#4A3B2C] mb-10">
                            كل قصة وكل سفر جواه درس مهم يقدر يقربك من ربنا
                            ويساعدك تفهم محبته وتدبيره في حياة الإنسان.
                        </p>

                        <p
                            className={`${heading.className} text-2xl md:text-3xl font-bold text-[#7A1F2B]`}
                        >
                            يلا نبدأ رحلتنا مع العهد القديم!
                        </p>

                    </div>
                </div>
            </section>
        </main>
    );
}
