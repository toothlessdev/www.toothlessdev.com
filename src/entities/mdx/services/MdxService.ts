import { MdxRepository } from "@/entities/mdx/repository/MdxRepository";
import { MdxProcessor } from "@/entities/mdx/utils/MdxProcessor";
import { injectable } from "tsyringe";

@injectable()
export class MdxService {
    constructor(
        private readonly mdxProcessor: MdxProcessor,
        private readonly mdxRepository: MdxRepository
    ){}

    public readMdxFilesWithMetadata() {
        return this.mdxRepository.readMdxFiles()
            .map((mdxPath) => {
                return {
                    path: mdxPath,
                    frontMatter: this.mdxRepository.readMdxFrontMatter(mdxPath),
                }
            });
    }

    public readMdxFiles<D>(
        page: number, perPage: number,
        sortKey: string, sortOrder: "asc" | "desc",
        filterKey: string, filterValue: unknown
    ): D{
        return this.mdxProcessor
            .filter(filterKey, filterValue)
            .sort(sortKey, sortOrder)
            .paginate(page, perPage)
            .getMdxData() as D;
    }
}
