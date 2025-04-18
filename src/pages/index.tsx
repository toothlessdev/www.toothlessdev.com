import { InferGetStaticPropsType } from "next";
import { Pin } from "lucide-react";
import { container } from "tsyringe";
import { PostService } from "@/features/posts/service/PostService";
import { PostCard } from "@/features/posts/ui/PostCard";
import { PostCardContainer } from "@/features/posts/ui/PostCardContainer";
import { Section } from "@/widgets/Section/Section";

export default function HomePage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <div>
            <Section titleIcon={<Pin size={14} />} title="Pinned Posts">
                <PostCardContainer>
                    {posts.map(({ frontMatter }, index) => {
                        const { slug, title, createdAt, category, description } = frontMatter;
                        return (
                            <PostCard
                                key={index}
                                slug={slug}
                                title={title}
                                createdAt={createdAt}
                                category={category}
                                description={description}
                            />
                        );
                    })}
                </PostCardContainer>
            </Section>
        </div>
    );
}

export const getStaticProps = async () => {
    const postService = container.resolve(PostService);

    const posts = await postService.findPinnedPosts();

    return { props: { posts } };
};
