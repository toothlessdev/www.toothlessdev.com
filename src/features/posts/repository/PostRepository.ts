import path from "path";
import { MdxQueryTemplate } from "@/entities/mdx/repository/MdxQueryTemplate";
import { MdxRepository } from "@/entities/mdx/repository/MdxRepository";
import { PostModel } from "@/features/posts/model";
import { singleton } from "tsyringe";

@singleton()
export class PostRepository extends MdxRepository<PostModel> {
    private static readonly POSTS_PATH = path.resolve("contents/posts");

    constructor(
        private readonly mdxQueryTemplate: MdxQueryTemplate<PostModel>
    ) {
        super(PostRepository.POSTS_PATH);
    }

    public async findAllPostsFrontMatter() {
        return await super.findAllMdxFrontMatter();
    }

    public async findPostBySlug(slug: string) {
        const allMdx = await this.findAllMdx();
        return this.mdxQueryTemplate.createQueryBuilder(allMdx)
            .filter("slug", slug)
            .build();
    }

    public async findPinnedPosts() {
        const allMdx = await this.findAllMdx();
        return this.mdxQueryTemplate.createQueryBuilder(allMdx)
            .filter("pinned", true)
            .build();
    }

    public async findPostsFrontmatterByCategoryAndPage(category: string, page: number, perPage: number) {
        const allMdx = await this.findAllMdx();
        return this.mdxQueryTemplate.createQueryBuilder(allMdx)
            .filter("category", category)
            .paginate(page, perPage)
            .build()
            .map((post) => post.frontMatter);
    }
}