import { Section } from "@/entities/section/ui/Section";
import { usePinnedPosts } from "@/features/posts/hooks/usePinnedPosts";
import { PostCard } from "@/features/posts/ui/PostCard";
import { PostCardContainer } from "@/features/posts/ui/PostCardContainer";

export default function HomePage() {
    const { posts } = usePinnedPosts(4);

    return (
        <div>
            <Section title="Pinned Posts">
                <PostCardContainer>
                    {posts.map((post, index) => (
                        <PostCard
                            key={index}
                            slug={post.slug}
                            title={post.title}
                            content={post.content}
                            createdAt={post.createdAt}
                            category={post.category}
                        />
                    ))}
                </PostCardContainer>
            </Section>
        </div>
    );
}
