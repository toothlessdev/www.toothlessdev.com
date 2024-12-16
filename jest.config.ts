/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */
import nextJest from "next/jest.js";
import type { Config } from "jest";

const createNextJestConfig = nextJest({
    dir: "./",
});

const config: Config = {
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],

    clearMocks: true,
    coverageProvider: "v8",
    testEnvironment: "jsdom",

    // moduleNameMapper: {
    //     "@/*": "<rootDir>/src/$1",
    // },
};

export default createNextJestConfig(config);
