import { InferGetStaticPropsType } from "next";
import { container } from "tsyringe";
import { MdxService } from "@/entities/mdx/services/MdxService";
import { Section } from "@/entities/section/ui/Section";
import { Post } from "@/features/posts/model";
import { PostCard } from "@/features/posts/ui/PostCard";
import { PostCardContainer } from "@/features/posts/ui/PostCardContainer";

export default function HomePage({
    postsMetaData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <div>
            <Section title="Pinned Posts">
                <PostCardContainer>
                    {postsMetaData.map((post, index) => (
                        <PostCard
                            key={index}
                            slug={post.slug}
                            title={post.title}
                            createdAt={post.createdAt}
                            category={post.category}
                            description={post.description}
                        />
                    ))}
                </PostCardContainer>
            </Section>
        </div>
    );
}

export const getStaticProps = async () => {
    const mdxService = container.resolve(MdxService);

    const postsMetaData = mdxService
        .readMdxFiles<Post[]>(1, 10, "createdAt", "asc", "category", "All")
        .map((post: Post) => post.frontMatter);

    return { props: { postsMetaData } };
};
