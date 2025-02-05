import matter from "gray-matter";

export class MdxParser {
    public static parseFrontMatter(mdxContents: string) {
        return matter(mdxContents).data;
    }

    public static parseContent(mdxContents: string) {
        return matter(mdxContents).content;
    }

    public static parseMdx(mdxContents: string) {
        const { data, content } = matter(mdxContents);
        return { frontMatter: data, content };
    }
}