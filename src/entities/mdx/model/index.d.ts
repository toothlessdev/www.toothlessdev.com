export type MdxFrontMatter = Record<string, unknown>;
export type MdxContent = string;

export interface BaseMdxModel<
    MdxFrontMatter extends Record<string, unknown> = Record<string, unknown>,
    MdxContent extends string = string,
> {
    path?: string;
    frontMatter: MdxFrontMatter;
    content: MdxContent;
}
