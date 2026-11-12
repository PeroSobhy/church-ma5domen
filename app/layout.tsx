import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Image from "next/image";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "St.Mary Church",
    description: "St.Mary Church",
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html
            lang="en"
            className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
        >
            <body className="relative min-h-screen flex flex-col">

                {/* Background image */}
                <div className="absolute inset-0 -z-10">
                    <Image
                        src="/cross.jpg"
                        alt="Church background"
                        fill
                        priority
                        className="object-contain object-center"
                    />
                </div>

                <Navbar />

                <main className="relative flex-1">
                    {children}
                </main>

            </body>
        </html>
    );
}

