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

    public findAllPostsFrontMatter() {
        return super.findAllMdxFrontMatter();
    }

    public findPostBySlug(slug: string) {
        return this.mdxQueryTemplate.createQueryBuilder(this.findAllMdx())
            .filter("slug", slug)
            .build();
    }

    public findPinnedPosts() {
        return this.mdxQueryTemplate.createQueryBuilder(this.findAllMdx())
            .filter("pinned", true)
            .build()
    }

    public findPostsFrontmatterByCategoryAndPage(category: string, page: number, perPage: number) {
        return this.mdxQueryTemplate.createQueryBuilder(this.findAllMdx())
            .filter("category", category)
            .paginate(page, perPage)
            .build()
            .map((post) => post.frontMatter);
    }
}