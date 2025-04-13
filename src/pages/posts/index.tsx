import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { container } from "tsyringe";
import { CategoryMenu } from "@/entities/filter/ui/CategoryMenu";
import { PageInfo } from "@/entities/filter/ui/PageInfo";
import { PostService } from "@/features/posts/service/PostService";
import { PostListItem } from "@/features/posts/ui/PostListItem";
import { Section } from "@/widgets/Section/Section";

export default function PostsPage({
    postsFrontmatter,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <div className="lg:flex">
            <CategoryMenu />
            <Section title="Posts" className="flex-1 p-2">
                {postsFrontmatter.map((post, index) => {
                    return (
                        <PostListItem
                            key={index}
                            title={post.title}
                            slug={post.slug}
                            createdAt={post.createdAt}
                            category={post.category}
                            description={post.description}
                        />
                    );
                })}
                <PageInfo totalPage={27} pageGroupSize={5} />
            </Section>
        </div>
    );
}

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const { query } = context;

    const category = (query.category as string) || "All";
    const page = Number(query.page as string) || 1;

    const postService = container.resolve(PostService);
    const postsFrontmatter = await postService.findPostsFrontmatterByCategoryAndPage(
        category,
        page,
        20,
    );

    return { props: { postsFrontmatter } };
};
