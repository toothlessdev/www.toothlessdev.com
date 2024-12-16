import path from "path";
import { MdxBuilder } from "@/entities/mdx/services/mdxBuilder";

export class MdxRepository {
    private mdxDirectoryPath: string;
    private mdxBuilder: MdxBuilder;

    constructor(mdxDirectoryPath: string) {
        this.mdxDirectoryPath = mdxDirectoryPath;

        this.mdxBuilder = new MdxBuilder(mdxDirectoryPath);
        this.mdxBuilder.readMdxFiles();
    }

    public sort(sortKey: string, sortOrder: "asc" | "desc"): this {
        this.mdxBuilder.sortMdxFiles(sortKey, sortOrder);
        return this;
    }

    public filter(key: string, value: unknown): this {
        this.mdxBuilder.filterMdxFiles(key, value);
        return this;
    }

    public paginate(page: number, perPage: number): this {
        this.mdxBuilder.paginateMdxFiles(page, perPage);
        return this;
    }

    public getMdxPath() {
        return this.mdxBuilder.mdxFiles.map((file) => {
            return path.join(this.mdxDirectoryPath, file);
        });
    }
}
