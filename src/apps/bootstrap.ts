import "reflect-metadata";
import { container } from "tsyringe";
import { MdxQueryTemplate } from "@/entities/mdx/repository/MdxQueryTemplate";
import { MdxQueryBuilder } from "@/entities/mdx/utils/MdxQueryBuilder";
import { PostRepository } from "@/features/posts/repository/PostRepository";
import { PostService } from "@/features/posts/service/PostService";

export function bootstrap() {
    container.register(MdxQueryTemplate, { useClass: MdxQueryTemplate });
    container.register(MdxQueryBuilder, { useClass: MdxQueryBuilder });

    container.register(PostRepository, { useClass: PostRepository });
    container.register(PostService, { useClass: PostService });
}
