import path from "path";
import { MdxRepository } from "@/entities/mdx/services/mdxRepository";
import { MdxTemplate } from "@/entities/mdx/ui/MdxTemplate";
import { PostsService } from "@/features/posts/services/postsService";

interface PostDetailPageProps {
    params: { slug: string };
}

export default function PostDetailPage({ params }: Readonly<PostDetailPageProps>) {
    const postsService = new PostsService(
        new MdxRepository(path.join(process.cwd(), "contents", "posts")),
    );
    const content = postsService.readPostBySlug(params.slug);

    return <MdxTemplate content={content} />;
}
