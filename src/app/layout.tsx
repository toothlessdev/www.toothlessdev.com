import type { Metadata } from "next";
import { Header } from "@/shared/layouts/Header";
import { NavProgressBar } from "@/shared/layouts/NavProgressBar";
import "@/shared/styles/globals.css";
import "@/shared/styles/theme.css";

export const metadata: Metadata = {
    title: "toothlessdev blog",
    description: "toothlessdev blog",
};

type RootLayoutProps = Readonly<{
    children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="ko">
            <body className="bg-base text-white">
                <Header />
                <NavProgressBar />
                <main className="bg-base w-base mx-auto p-3">{children}</main>
            </body>
        </html>
    );
}
