import { dump } from "js-yaml";

type Scalar = string | number | boolean | null;

export type YAMLValue = Scalar | YAMLValue[] | { [key: string]: YAMLValue };

export type FrontMatter<T extends Record<string, unknown>> = {
    [K in keyof T]: T[K] extends (...args: unknown[]) => unknown
        ? never
        : T[K] extends Date | Map<unknown, unknown>
          ? never
          : T[K] extends YAMLValue
            ? T[K]
            : never;
};

export class MdxSerializer {
    public static serializeFrontMatter<T extends Record<string, unknown>>(
        frontMatter: FrontMatter<T>,
    ): string {
        const yaml = dump(frontMatter, { lineWidth: 80 }).trimEnd();
        return `---\n${yaml}\n---`;
    }
}
