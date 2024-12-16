import path from "path";
import { MdxRepository } from "@/entities/mdx/services/mdxRepository";
import { PostsService } from "@/features/posts/services/postsService";

export const usePostPreviews = () => {
    const postsService = new PostsService(
        new MdxRepository(path.join(process.cwd(), "contents", "posts")),
    );

    const posts = postsService.readPostsPreview(1, 10, "All", "createdAt", "asc");

    return { posts };
};
