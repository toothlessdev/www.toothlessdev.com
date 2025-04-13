import fs from "fs/promises";
import path from "path";
import { MdxDirectoryNotFoundException } from "@/entities/mdx/error/MdxException";
import { BaseMdxModel } from "@/entities/mdx/model";
import { injectable } from "tsyringe";
import { MdxParser } from "@/entities/mdx/utils/MdxParser";

@injectable()
export class MdxRepository<Model extends BaseMdxModel> {
    constructor(
        private readonly mdxDirectoryPath: string,
    ) {}
    
    protected async findAllMdx(): Promise<Model[]> {
        const filePaths = await this.readMdxDirectory();
        const mdxFiles = await Promise.all(
            filePaths.map(async (filePath) => {
                const mdx = await fs.readFile(filePath, "utf8");
                return MdxParser.parse<Model>(mdx);
            })
        );
        return mdxFiles;
    }
    
    protected async findAllMdxFrontMatter(): Promise<Array<Model["frontMatter"]>> {
        const filePaths = await this.readMdxDirectory();
        const frontMatters = await Promise.all(
            filePaths.map(async (filePath) => {
                const mdx = await fs.readFile(filePath, "utf8");
                return MdxParser.parseFrontMatter(mdx);
            })
        );
        return frontMatters as Array<Model["frontMatter"]>;
    }
    
    private async readMdxDirectory(): Promise<string[]> {
        const exists = await fs.stat(this.mdxDirectoryPath).then(() => true).catch(() => false);
        if (!exists) 
            throw new MdxDirectoryNotFoundException(this.mdxDirectoryPath);

        const files = await fs.readdir(this.mdxDirectoryPath);
        return files
            .filter((file) => file.endsWith(".mdx"))
            .map((file) => path.join(this.mdxDirectoryPath, file));
    }
}
