import Link from "next/link";

export default function Home() {
    return (
        <main className="min-h-screen bg-gray-50">

            <section className="max-w-5xl mx-auto px-6 py-20 text-center mt-24">

                <h1 className="text-3xl md:text-5xl font-bold text-blue-600 mb-8">
                    أهلاً بيك ❤️
                </h1>

                <div className="bg-white rounded-2xl p-8 md:p-12">

                    <p className="text-gray-700 text-lg md:text-xl leading-loose mb-6">
                        منورنا! ❤️
                        <br />
                        إحنا هنا علشان نساعدك تتعرف أكتر على الكتاب المقدس،
                        وتكتشف جمال كلام ربنا ومعانيه بطريقة بسيطة وسهلة.
                    </p>

                    <p className="text-gray-700 text-lg md:text-xl leading-loose mb-6">
                        سواء حابب تبدأ رحلتك مع العهد القديم أو العهد الجديد،
                        هتلاقي هنا فرصة تقرأ وتتعلم وتفهم أكتر عن كلمة ربنا،
                        وتعيش مع كل قصة وكل آية بمعنى جديد.
                    </p>

                    <p className="text-blue-600 text-xl font-bold">
                        يلا نبدأ رحلتنا مع بعض! 🙏
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

                        <Link
                            href="/new-testament"
                            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
                        >
                            العهد الجديد
                        </Link>

                        <Link
                            href="/old-testament"
                            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
                        >
                            العهد القديم
                        </Link>

                    </div>


                </div>
            </section>
        </main>
    );
}
