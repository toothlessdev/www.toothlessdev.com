import path from "path";
import "reflect-metadata";
import { container } from "tsyringe";
import { MdxRepository } from "@/entities/mdx/repository/MdxRepository";
import { MdxService } from "@/entities/mdx/services/MdxService";
import { MdxProcessor } from "@/entities/mdx/utils/MdxProcessor";

export function bootstrap() {
    container.register(MdxRepository, {
        useValue: new MdxRepository(path.resolve("contents/posts")),
    });
    container.register(MdxProcessor, { useClass: MdxProcessor });
    container.register(MdxService, { useClass: MdxService });
}
