import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { MdxDirectoryNotFoundException, MdxFileNotFoundException } from "@/entities/mdx/error/MdxException";
import { injectable } from "tsyringe";

@injectable()
export class MdxRepository {
    private mdxDirectoryPath: string;

    constructor(mdxDirectoryPath: string) {
        this.mdxDirectoryPath = mdxDirectoryPath;
    }

    public readMdxFiles() {
        if (!fs.existsSync(this.mdxDirectoryPath))
            throw new MdxDirectoryNotFoundException(this.mdxDirectoryPath);

        return fs
            .readdirSync(this.mdxDirectoryPath)
            .filter((file) => file.endsWith(".mdx"))
            .map((file) => path.join(this.mdxDirectoryPath, file));
    }

    public readMdxFrontMatter(mdxPath: string) {
        if(!fs.existsSync(mdxPath))
            throw new MdxFileNotFoundException(mdxPath);

        const mdxContents = fs.readFileSync(mdxPath, "utf8");
        const frontMatter = matter(mdxContents).data;
        frontMatter.createdAt = new Date(frontMatter.createdAt).toISOString();
        return frontMatter;
    }

    public readMdxContent(mdxPath: string) {
        if(!fs.existsSync(mdxPath))
            throw new MdxFileNotFoundException(mdxPath);

        const mdxContents = fs.readFileSync(mdxPath, "utf8");
        return matter(mdxContents).content;
    }

    public readMdx(mdxPath: string) {
        const mdxContents = fs.readFileSync(mdxPath, "utf8");
        const { data, content } = matter(mdxContents);
        data.createdAt = new Date(data.createdAt).toISOString();
        return { frontMatter: data, content };
    }
}
