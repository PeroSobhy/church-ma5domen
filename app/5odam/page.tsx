"use client";

import Image from "next/image";
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

/* Same Coptic-inspired cross used on the home page and navbar */
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

/* Section title with a small cross marker */
function SectionTitle({ children }: { children: React.ReactNode }) {
    return (
        <h2
            className={`${heading.className} mb-5 flex items-center gap-3 text-2xl md:text-3xl font-bold text-[#16295A]`}
        >
            <Cross className="h-5 w-5 shrink-0 text-[#C9A227]" />
            {children}
        </h2>
    );
}

/* Gold divider between sections */
function Divider() {
    return (
        <div className="flex items-center gap-3 text-[#C9A227]" aria-hidden="true">
            <span className="h-px flex-1 bg-current opacity-60" />
            <Cross className="h-4 w-4" />
            <span className="h-px flex-1 bg-current opacity-60" />
        </div>
    );
}

export default function ContentPage() {
    return (
        <main
            dir="rtl"
            className={`${body.className} min-h-screen bg-[#FAF5E9] text-[#2B2118]`}
        >
            <section className="max-w-5xl mx-auto px-6 py-16 md:py-20">

                {/* Page Header */}
                <div className="text-center mb-12">
                    <h1
                        className={`${heading.className} text-4xl md:text-6xl font-bold text-[#16295A] mb-5`}
                    >
                        محتوى تعليمي
                    </h1>

                    <div className="mx-auto mb-6 flex max-w-xs items-center gap-3 text-[#C9A227]">
                        <span className="h-px flex-1 bg-current" />
                        <Cross className="h-5 w-5" />
                        <span className="h-px flex-1 bg-current" />
                    </div>

                    <p className="text-[#4A3B2C] text-lg md:text-xl leading-loose">
                        اقرأ وتعلم واكتشف المزيد من خلال النصوص والصور والفيديوهات.
                    </p>
                </div>

                {/* Content Card (parchment with double gold frame) */}
                <div className="rounded-sm border border-[#C9A227] bg-[#FFFDF6] p-2 shadow-[0_8px_30px_rgba(43,33,24,0.08)]">
                    <div className="space-y-12 border border-[#C9A227]/50 p-6 md:p-12">

                        {/* Text Section */}
                        <section>
                            <SectionTitle>مقدمة عن الكتاب المقدس</SectionTitle>

                            <p className="text-[#2B2118] text-lg md:text-xl leading-[2.2]">
                                الكتاب المقدس هو كلمة الله، ومن خلاله نتعرف
                                على محبته وتعاليمه وقصص الأنبياء والرسل.
                                هنا يمكنك إضافة النصوص والشروحات التي تريدها
                                لمساعدة الزوار على فهم كلمة الله.
                            </p>
                        </section>

                        <Divider />

                        {/* Image Section */}
                        <section>
                            <SectionTitle>صور تعليمية</SectionTitle>

                            <div className="overflow-hidden rounded-md border-4 border-[#C9A227] p-1 bg-[#FAF5E9]">
                                <Image
                                    src="/image.jpg"
                                    alt="الكتاب المقدس"
                                    width={200}
                                    height={300}
                                    className="w-full max-h-[450px] object-cover"
                                />
                            </div>

                            <p className="text-[#4A3B2C] text-base mt-4 leading-loose">
                                يمكنك إضافة وصف للصورة هنا.
                            </p>
                        </section>

                        <Divider />

                        {/* YouTube Video Section */}
                        <section>
                            <SectionTitle>فيديوهات تعليمية</SectionTitle>

                            <div className="aspect-video w-full overflow-hidden rounded-md border-4 border-[#C9A227] bg-[#0E1B3F]">
                                <iframe
                                    className="w-full h-full"
                                    src="https://www.youtube.com/embed/PvtZkQIbE2g"
                                    title="YouTube video"
                                    allowFullScreen
                                />
                            </div>

                            <p className="text-[#4A3B2C] text-base mt-4 leading-loose">
                                شاهد الفيديو وتعرف على المزيد من تعاليم الكتاب المقدس.
                            </p>
                        </section>

                        <Divider />

                        {/* Uploaded Video Section */}
                        <section>
                            <SectionTitle>فيديو إضافي</SectionTitle>

                            <video
                                controls
                                className="w-full rounded-md border-4 border-[#C9A227] bg-[#0E1B3F]"
                            >
                                <source src="/videos/lesson.mp4" type="video/mp4" />
                                متصفحك لا يدعم تشغيل الفيديو.
                            </video>
                        </section>

                        <Divider />

                        {/* Another Text Section */}
                        <section>
                            <SectionTitle>ماذا تعلمنا اليوم؟</SectionTitle>

                            <p className="text-[#2B2118] text-lg md:text-xl leading-[2.2]">
                                من خلال هذا الدرس نتعلم أهمية المحبة والإيمان
                                والصلاة، وكيف نطبق تعاليم الكتاب المقدس في حياتنا اليومية.
                            </p>
                        </section>

                        {/* Bible Verse: stained-glass panel */}
                        <section className="relative overflow-hidden rounded-t-[999px] rounded-b-md border-2 border-[#C9A227] bg-[linear-gradient(180deg,#1F3A7A_0%,#16295A_60%,#0E1B3F_100%)] px-6 pt-16 pb-10 text-center md:px-12">
                            <div className="pointer-events-none absolute inset-0 bg-[repeating-conic-gradient(from_0deg_at_50%_0%,rgba(255,224,130,0.10)_0deg_6deg,transparent_6deg_18deg)]" />

                            <Cross className="relative mx-auto mb-4 h-8 w-8 text-[#E8C45A] drop-shadow-[0_0_10px_rgba(232,196,90,0.7)]" />

                            <blockquote className="relative">
                                <p
                                    className={`${heading.className} text-[#FAF5E9] text-2xl md:text-4xl font-bold leading-relaxed`}
                                >
                                    &ldquo;أَنَا هُوَ الطَّرِيقُ وَالْحَقُّ وَالْحَيَاةُ&rdquo;
                                </p>

                                <footer className="mt-4 text-[#E8C45A] font-semibold">
                                    يوحنا 14: 6
                                </footer>
                            </blockquote>
                        </section>

                    </div>
                </div>
            </section>
        </main>
    );
}
