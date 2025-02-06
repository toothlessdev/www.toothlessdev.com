import { InferGetStaticPropsType } from "next";
import { container } from "tsyringe";
import { CategoryMenu } from "@/entities/category/ui/CategoryMenu";
import { PageInfo } from "@/entities/filter/ui/PageInfo";
import { MdxService } from "@/entities/mdx/services/MdxService";
import { Post } from "@/features/posts/model";
import { PostListItem } from "@/features/posts/ui/PostListItem";
import { Section } from "@/widgets/Section/Section";

export default function PostsPage({
    postsMetaData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <div className="flex">
            <CategoryMenu />
            <Section
                title={<h1 className="font-semibold">JavaScript Posts</h1>}
                className="flex-1 p-2"
            >
                {postsMetaData.map((post, index) => {
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

export const getStaticProps = async () => {
    const mdxService = container.resolve(MdxService);

    const postsMetaData = mdxService
        .readMdxFiles<Post[]>(1, 10, "createdAt", "asc", "category", "All")
        .map((post: Post) => post.frontMatter);

    return { props: { postsMetaData } };
};
