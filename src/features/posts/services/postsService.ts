import { MdxRepository } from "@/entities/mdx/services/mdxRepository";
import { readMdxContent } from "@/entities/mdx/utils/readMdx";

type SortKey = "createdAt";
type SortOrder = "asc" | "desc";

export interface Post {
    title: string;
    slug: string;
    createdAt: string;
    content: string;
    category?: string;
    pinned?: boolean;
}

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
    ) {
        const filteredMdxPaths = this.mdxRepository
            .filter("category", categoryParam)
            .paginate(page, perPage)
            .sort(sortKey, sortOrder)
            .getMdxPath();

        return filteredMdxPaths;
    }

    public readPostBySlug(slug: string) {
        const post = this.mdxRepository.filter("slug", slug).getMdxPath();
        return readMdxContent(post[0]);
    }
}
