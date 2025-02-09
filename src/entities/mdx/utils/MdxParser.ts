import matter from "gray-matter";
import { BaseMdxModel, MdxFrontMatter } from "@/entities/mdx/model";

export class MdxParser {
    public static parse<Model extends BaseMdxModel = BaseMdxModel>(mdx: string): Model {
        const { data: frontMatter, content } = matter(mdx);
        const normalizedFrontMatter = MdxParser.normalizeFrontMatter(frontMatter);

        return { frontMatter: normalizedFrontMatter, content } as Model;
    }

    public static parseFrontMatter(mdx: string) {
        const { data: frontMatter } = matter(mdx);
        return MdxParser.normalizeFrontMatter(frontMatter);
    }

    private static normalizeFrontMatter(frontMatter: MdxFrontMatter) {
        return Object.entries(frontMatter).reduce((normalized, [key, value]) => {
            normalized[key] = value instanceof Date ? value.toISOString() : value;
            return normalized;
        }, {} as MdxFrontMatter);
    }
}
