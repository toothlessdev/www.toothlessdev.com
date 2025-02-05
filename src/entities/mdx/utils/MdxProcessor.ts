import { MdxData } from "@/entities/mdx/model/MdxData";
import { MdxRepository } from "@/entities/mdx/repository/MdxRepository";
import { injectable } from "tsyringe";

@injectable()
export class MdxProcessor {
    private mdxData : MdxData[];

    constructor(private readonly mdxRepository: MdxRepository) {
        this.mdxData = this.mdxRepository
            .readMdxFiles()
            .map((path) => {
                const { frontMatter, content } = this.mdxRepository.readMdx(path);
                return { path, frontMatter, content };
            })
    }

    public filter(key: string, value: unknown): this {
        this.mdxData = this.mdxData.filter((mdx) => mdx.frontMatter[key] === value);
        return this;
    }

    public sort(sortKey: string, sortOrder: "asc" | "desc"): this {
        this.mdxData = this.mdxData.sort((mdx1, mdx2) => {
            const key1 = mdx1.frontMatter[sortKey];
            const key2 = mdx2.frontMatter[sortKey];

            if (key1 < key2) return sortOrder === "asc" ? -1 : 1;
            if (key1 > key2) return sortOrder === "asc" ? 1 : -1;
            return 0;
        });

        return this;
    }

    public paginate(page: number, perPage: number): this {
        const start = (page - 1) * perPage;
        const end = start + perPage;
        this.mdxData = this.mdxData.slice(start, end);
        return this;
    }

    public getMdxData() {
        return this.mdxData;
    }
}