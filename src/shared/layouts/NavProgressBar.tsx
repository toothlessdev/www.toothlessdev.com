"use client";

import { AppProgressBar } from "next-nprogress-bar";

export const NavProgressBar = () => {
    return (
        <AppProgressBar
            height="2px"
            color="#0076ff"
            options={{ showSpinner: false }}
            shallowRouting
        />
    );
};
