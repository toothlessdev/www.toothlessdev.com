import fs from "fs";
import path from "path";
import { readMdxFrontMatter } from "@/entities/mdx/utils/readMdx";

export class MdxBuilder {
    public mdxFiles: string[] = [];
    private directoryPath: string;

    constructor(directoryPath: string) {
        this.directoryPath = path.join(directoryPath);
    }

    public readMdxFiles() {
        if (!fs.existsSync(this.directoryPath))
            throw new Error(`Directory not found: ${this.directoryPath}`);

        const mdxFiles = fs.readdirSync(this.directoryPath);
        this.mdxFiles = mdxFiles.filter((file) => file.endsWith(".mdx"));
    }

    public filterMdxFiles(frontMatterKey: string, frontMatterValue: unknown) {
        this.mdxFiles = this.mdxFiles.filter((file) => {
            const frontMatter = readMdxFrontMatter(path.join(this.directoryPath, file));
            return frontMatter[frontMatterKey] === frontMatterValue;
        });
    }

    public sortMdxFiles(sortKey: string, sortOrder: "asc" | "desc") {
        this.mdxFiles = this.mdxFiles.sort((mdx1, mdx2) => {
            const mdxFrontmatter1 = readMdxFrontMatter(path.join(this.directoryPath, mdx1));
            const mdxFrontmatter2 = readMdxFrontMatter(path.join(this.directoryPath, mdx2));

            const mdxSortValue1 = mdxFrontmatter1[sortKey];
            const mdxSortValue2 = mdxFrontmatter2[sortKey];

            if (mdxSortValue1 < mdxSortValue2) return sortOrder === "asc" ? -1 : 1;
            if (mdxSortValue1 > mdxSortValue2) return sortOrder === "asc" ? 1 : -1;
            return 0;
        });
    }

    public paginateMdxFiles(page: number, perPage: number) {
        const start = (page - 1) * perPage;
        const end = start + perPage;
        this.mdxFiles = this.mdxFiles.slice(start, end);
    }
}
