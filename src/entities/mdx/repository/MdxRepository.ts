import fs from "fs";
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
    
    protected findAllMdx(): Model[] {
        return this.readMdxDirectory()
            .map((path) => {
                const mdx = fs.readFileSync(path, "utf8")
                return MdxParser.parse<Model>(mdx);
            });
    }
    
    protected findAllMdxFrontMatter(): Array<Model["frontMatter"]> {
        return this.readMdxDirectory()
            .map((path) => {
                const mdx = fs.readFileSync(path, "utf8")
                return MdxParser.parseFrontMatter(mdx)
            }) as Array<Model["frontMatter"]>;
    }
    
    private readMdxDirectory(): string[] {
        if (!fs.existsSync(this.mdxDirectoryPath))
            throw new MdxDirectoryNotFoundException(this.mdxDirectoryPath);

        return fs
            .readdirSync(this.mdxDirectoryPath)
            .filter((file) => file.endsWith(".mdx"))
            .map((file) => path.join(this.mdxDirectoryPath, file));
    }
}
