import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { Fragment } from "react";
import { container } from "tsyringe";
import { mdxComponents } from "@/entities/mdx/config/MdxComponents";
import { MdxService } from "@/entities/mdx/services/MdxService";
import { Post } from "@/features/posts/model";
import "highlight.js/styles/atom-one-dark.css";

export default function PostDetailPage({
    postMetaData,
    serializedPostContent,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    console.log(postMetaData);

    return (
        <Fragment>
            <article className="prose prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg dark:prose-headings:text-white">
                <MDXRemote
                    // @ts-expect-error mdxComponents 타입이 일치하지 않음
                    components={mdxComponents}
                    {...serializedPostContent}
                />
            </article>
        </Fragment>
    );
}

export const getStaticPaths = () => {
    const mdxService = container.resolve(MdxService);

    const slugs = mdxService
        .readMdxFiles<Post[]>(1, 10, "createdAt", "asc", "category", "All")
        .map((post: Post) => post.frontMatter.slug);

    const paths = slugs.map((slug) => ({ params: { id: slug } }));

    return { paths, fallback: false };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
    const { params } = context;

    const mdxService = container.resolve(MdxService);

    const post = mdxService
        .readMdxFiles<Post[]>(1, 10, "createdAt", "asc", "category", "All")
        .find((post: Post) => post.frontMatter.slug === params?.id);

    const postMetaData = post?.frontMatter;
    const serializedPostContent = await serialize(post?.content as string);

    return { props: { postMetaData, serializedPostContent } };
};
