import type { Metadata } from "next";
import { Header } from "@/app/layouts/Header";
import "@/app/styles/globals.css";
import "@/app/styles/theme.css";

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
                <main className="bg-base w-base mx-auto p-3">{children}</main>
            </body>
        </html>
    );
}
