import fs from "fs";
import matter from "gray-matter";

export function readMdxFrontMatter(mdxPath: string) {
    const mdxContents = fs.readFileSync(mdxPath, "utf8");
    const frontMatter = matter(mdxContents).data;
    return frontMatter;
}

export function readMdxContent(mdxPath: string) {
    const mdxContents = fs.readFileSync(mdxPath, "utf8");
    const content = matter(mdxContents).content;
    return content;
}

export function readMdx(mdxPath: string): { frontMatter: Record<string, any>; content: string } {
    const mdxContents = fs.readFileSync(mdxPath, "utf8");
    const { data, content } = matter(mdxContents);
    return { frontMatter: data, content };
}
