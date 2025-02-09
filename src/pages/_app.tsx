import type { AppProps } from "next/app";
import { Fragment } from "react";
import { bootstrap } from "@/apps/bootstrap";
import "@/apps/styles/atom-one-dark.css";
import "@/apps/styles/globals.css";
import "@/apps/styles/theme.css";
import { Header } from "@/shared/layouts/Header";
import { NavProgressBar } from "@/shared/layouts/NavProgressBar";

bootstrap();

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Fragment>
            <Header />
            <NavProgressBar />
            <main className="bg-base w-base mx-auto p-3">
                <Component {...pageProps} />
            </main>
        </Fragment>
    );
}
