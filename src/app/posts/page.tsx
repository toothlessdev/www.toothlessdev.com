import path from "path";
import { MdxRepository } from "@/entities/mdx/services/mdxRepository";
import { readMdxContent } from "@/entities/mdx/utils/readMdx";
import { PostsService } from "@/features/posts/services/postsService";

export default function PostsPage() {
    const postsService = new PostsService(
        new MdxRepository(path.join(process.cwd(), "contents", "posts")),
    );

    const post = postsService.readPostsPreview(1, 10, "test", "createdAt", "asc");

    const content = readMdxContent(post[0]);

    return <div>{content}</div>;
}
