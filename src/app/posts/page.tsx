import { Suspense } from "react";
import { CategoryMenu } from "@/entities/category/ui/CategoryMenu";
import { PageInfo } from "@/entities/filter/ui/PageInfo";
import { Section } from "@/entities/section/ui/Section";
import { usePostPreviews } from "@/features/posts/hooks/usePostPreviews";
import { PostListItem } from "@/features/posts/ui/PostListItem";

export default function PostsPage() {
    const { posts } = usePostPreviews();

    return (
        <Suspense>
            <div className="flex">
                <CategoryMenu />
                <Section
                    title={<h1 className="font-semibold">JavaScript Posts</h1>}
                    className="flex-1 p-2"
                >
                    {posts.map((post, index) => {
                        return (
                            <PostListItem
                                key={index}
                                title={post.title}
                                slug={post.slug}
                                content={post.content}
                                category={post.category}
                                createdAt={post.createdAt}
                            />
                        );
                    })}
                    <PageInfo totalPage={27} pageGroupSize={5} />
                </Section>
            </div>
        </Suspense>
    );
}
