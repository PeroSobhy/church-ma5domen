import Image from "next/image";

export default function ContentPage() {
    return (
        <main
            dir="rtl"
            className="min-h-screen"
        >
            <section className="max-w-5xl mx-auto px-6 py-20 mt-24">

                {/* Page Header */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-5xl font-bold text-blue-600 mb-6">
                        محتوى تعليمي ❤️
                    </h1>

                    <p className="text-gray-700 text-lg md:text-xl leading-loose">
                        اقرأ وتعلم واكتشف المزيد من خلال النصوص والصور والفيديوهات.
                    </p>
                </div>

                {/* Content Card */}
                <div className="rounded-2xl p-8 md:p-12 shadow-sm space-y-12">

                    {/* Text Section */}
                    <section>
                        <h2 className="text-2xl font-bold text-blue-600 mb-5">
                            مقدمة عن الكتاب المقدس
                        </h2>

                        <p className="text-gray-700 text-lg leading-loose">
                            الكتاب المقدس هو كلمة الله، ومن خلاله نتعرف
                            على محبته وتعاليمه وقصص الأنبياء والرسل.
                            هنا يمكنك إضافة النصوص والشروحات التي تريدها
                            لمساعدة الزوار على فهم كلمة الله.
                        </p>
                    </section>

                    {/* Image Section */}
                    <section>
                        <h2 className="text-2xl font-bold text-blue-600 mb-5">
                            صور تعليمية 📖
                        </h2>

                        <div className="rounded-xl overflow-hidden">
                            <Image
                                src="/image.jpg"
                                alt="الكتاب المقدس"
                                width={200}
                                height={300}
                                className="w-full max-h-[450px] object-cover"
                            />
                        </div>

                        <p className="text-gray-600 text-base mt-4 leading-loose">
                            يمكنك إضافة وصف للصورة هنا.
                        </p>
                    </section>

                    {/* YouTube Video Section */}
                    <section>
                        <h2 className="text-2xl font-bold text-blue-600 mb-5">
                            فيديوهات تعليمية 🎥
                        </h2>

                        <div className="aspect-video w-full overflow-hidden rounded-xl">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/PvtZkQIbE2g"
                                title="YouTube video"
                                allowFullScreen
                            />
                        </div>

                        <p className="text-gray-600 text-base mt-4 leading-loose">
                            شاهد الفيديو وتعرف على المزيد من تعاليم الكتاب المقدس.
                        </p>
                    </section>

                    {/* Uploaded Video Section */}
                    <section>
                        <h2 className="text-2xl font-bold text-blue-600 mb-5">
                            فيديو إضافي 🎬
                        </h2>

                        <video
                            controls
                            className="w-full rounded-xl"
                        >
                            <source
                                src="/videos/lesson.mp4"
                                type="video/mp4"
                            />
                            متصفحك لا يدعم تشغيل الفيديو.
                        </video>
                    </section>

                    {/* Another Text Section */}
                    <section>
                        <h2 className="text-2xl font-bold text-blue-600 mb-5">
                            ماذا تعلمنا اليوم؟ ❤️
                        </h2>

                        <p className="text-gray-700 text-lg leading-loose">
                            من خلال هذا الدرس نتعلم أهمية المحبة والإيمان
                            والصلاة، وكيف نطبق تعاليم الكتاب المقدس في حياتنا اليومية.
                        </p>
                    </section>

                    {/* Bible Verse */}
                    <section className="rounded-xl p-6 md:p-8 text-center">
                        <p className="text-blue-700 text-xl md:text-2xl font-bold leading-loose">
                            &ldquo;أَنَا هُوَ الطَّرِيقُ وَالْحَقُّ وَالْحَيَاةُ&rdquo;
                        </p>

                        <p className="text-blue-600 mt-4 font-semibold">
                            يوحنا 14: 6
                        </p>
                    </section>

                </div>
            </section >
        </main >
    );
}

