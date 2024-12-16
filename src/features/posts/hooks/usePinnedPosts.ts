import path from "path";
import { MdxRepository } from "@/entities/mdx/services/mdxRepository";
import { PostsService } from "@/features/posts/services/postsService";

export const usePinnedPosts = (size: number) => {
    const postService = new PostsService(
        new MdxRepository(path.join(process.cwd(), "contents", "posts")),
    );

    const posts = postService.readPinnedPosts(size);

    return { posts };
};
