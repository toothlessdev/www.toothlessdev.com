import { SortKey, SortOrder } from "@/entities/filter/models";
import { MdxRepository } from "@/entities/mdx/repository/dd";
import { readMdx, readMdxContent } from "@/entities/mdx/utils/readMdx";
import { Post } from "@/features/posts/model";

export class PostsService {
    private mdxRepository: MdxRepository;

    constructor(mdxRepository: MdxRepository) {
        this.mdxRepository = mdxRepository;
    }

    public readPostsPreview(
        page: number,
        perPage: number,
        categoryParam: string,
        sortKey: SortKey,
        sortOrder: SortOrder,
    ): Post[] {
        const mdxPaths = this.mdxRepository
            .filter("category", categoryParam)
            .paginate(page, perPage)
            .sort(sortKey, sortOrder)
            .getMdxPath();

        const posts = mdxPaths.map((mdxPath) => {
            const { frontMatter, content } = readMdx(mdxPath);
            return {
                title: frontMatter.title,
                slug: frontMatter.slug,
                createdAt: frontMatter.createdAt,
                category: frontMatter.category,
                pinned: frontMatter.pinned,
                content,
            };
        });

        return posts;
    }

    public readPostBySlug(slug: string) {
        const post = this.mdxRepository.filter("slug", slug).getMdxPath();
        return readMdxContent(post[0]);
    }

    public readPinnedPosts(size: number): Post[] {
        const mdxPaths = this.mdxRepository.filter("pinned", true).getMdxPath();

        const posts = mdxPaths.slice(0, size).map((mdxPath) => {
            const { frontMatter, content } = readMdx(mdxPath);
            return {
                title: frontMatter.title,
                slug: frontMatter.slug,
                createdAt: frontMatter.createdAt,
                category: frontMatter.category,
                pinned: frontMatter.pinned,
                content,
            };
        });

        return posts;
    }
}
