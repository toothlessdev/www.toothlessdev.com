import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import rehypeHighlight from "rehype-highlight";
import rehypeKatex from "rehype-katex";
import rehypeMathjax from "rehype-mathjax";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import { container } from "tsyringe";
import { mdxComponents } from "@/entities/mdx/config/MdxComponents";
import { PostService } from "@/features/posts/service/PostService";
import "katex/dist/katex.min.css";

export default function PostDetailPage({
    frontMatter,
    serializedPostContent,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    console.log(frontMatter);

    return (
        <article className="prose prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg dark:prose-headings:text-white">
            <MDXRemote components={mdxComponents} {...serializedPostContent} />
        </article>
    );
}

export const getStaticPaths = async () => {
    const postService = container.resolve(PostService);

    const postsFrontmatter = await postService.findAllPostsFrontMatter();

    const paths = postsFrontmatter.map((post) => {
        return { params: { id: post.slug } };
    });

    return { paths, fallback: false };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
    const { params } = context;

    const postService = container.resolve(PostService);
    const { frontMatter, content } = await postService.findPostBySlug(params?.id as string);

    const serializedPostContent = await serialize(content, {
        mdxOptions: {
            remarkPlugins: [remarkGfm, remarkMath],
            rehypePlugins: [rehypeHighlight, rehypeKatex, rehypeMathjax],
        },
    });

    return { props: { frontMatter, serializedPostContent } };
};
