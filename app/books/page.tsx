import Link from "next/link";

export default function Home() {
    const sections = [
        {
            title: "العهد الجديد",
            description: "اكتشف أسفار العهد الجديد واقرأ محتوياته.",
            href: "/new-chapter",
        },
        {
            title: "العهد القديم",
            description: "اكتشف أسفار العهد القديم واقرأ محتوياته.",
            href: "/old-chapter",
        },
    ];

    return (
        <main className="min-h-screen">

            {/* Page Content */}
            <section className="max-w-7xl mx-auto px-6 py-20">

                <h1 className="text-3xl md:text-4xl font-bold text-blue-600 text-center mb-4">
                    الكتاب المقدس
                </h1>

                <p className="text-gray-600 text-center mb-12">
                    اختر القسم الذي تريد تصفحه
                </p>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {sections.map((section) => (
                        <div
                            key={section.title}
                            className="bg-white shadow-md rounded-2xl p-10 mt-10 text-center border-2 border-black hover:shadow-xl transition duration-300"
                        >
                            <h2 className="text-3xl font-bold text-blue-600 mb-5">
                                {section.title}
                            </h2>

                            <p className="text-gray-600 mb-8">
                                {section.description}
                            </p>

                            <Link
                                href={section.href}
                                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
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
