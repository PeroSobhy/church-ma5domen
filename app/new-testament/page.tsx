"use client";

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

export default function NewTestament() {
    return (
        <main
            dir="rtl"
            className={`${body.className} min-h-screen bg-[#FAF5E9] text-[#2B2118]`}
        >
            <section className="max-w-4xl mx-auto px-6 py-16 md:py-20 text-center">

                {/* Arched window badge */}
                <div className="mx-auto mb-8 w-28 md:w-32">
                    <div className="rounded-t-full border-[4px] border-[#C9A227] bg-[#FAF5E9] p-1.5 shadow-[0_8px_24px_rgba(22,41,90,0.3)]">
                        <div className="relative flex aspect-[3/4] items-center justify-center overflow-hidden rounded-t-full bg-[linear-gradient(180deg,#1F3A7A_0%,#16295A_60%,#0E1B3F_100%)]">
                            <div className="absolute inset-0 bg-[repeating-conic-gradient(from_0deg_at_50%_45%,rgba(255,224,130,0.12)_0deg_6deg,transparent_6deg_18deg)]" />
                            <Cross className="relative h-14 w-14 md:h-16 md:w-16 text-[#E8C45A] drop-shadow-[0_0_10px_rgba(232,196,90,0.8)]" />
                        </div>
                    </div>
                </div>

                <h1
                    className={`${heading.className} text-4xl md:text-6xl font-bold text-[#16295A] mb-4`}
                >
                    العهد الجديد
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
                            أهلاً بيك في قسم العهد الجديد!
                        </p>

                        <p className="text-lg md:text-xl leading-[2.2] text-[#4A3B2C] mb-6">
                            العهد الجديد هو رسالة محبة ورجاء لينا كلنا،
                            بنشوف فيه حياة وتعاليم السيد المسيح، ومعجزاته،
                            وإزاي كان بيعلّم الناس المحبة والتسامح والغفران.
                        </p>

                        <p className="text-lg md:text-xl leading-[2.2] text-[#4A3B2C] mb-6">
                            هنا هتقدر تتعرف على حياة المسيح من بداية ميلاده،
                            مروراً بخدمته على الأرض، وصلبه وقيامته،
                            وكمان هتتعرف على قصص التلاميذ وبداية انتشار المسيحية.
                        </p>

                        <p className="text-lg md:text-xl leading-[2.2] text-[#4A3B2C] mb-10">
                            خد وقتك في القراءة، وتأمل في كل آية،
                            وخلي كلام ربنا يكون نور لطريقك وحياتك.
                        </p>

                        <p
                            className={`${heading.className} text-2xl md:text-3xl font-bold text-[#16295A]`}
                        >
                            يلا نبدأ رحلتنا مع العهد الجديد!
                        </p>

                    </div>
                </div>
            </section>
        </main>
    );
}
