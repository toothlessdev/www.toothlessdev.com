import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import { mdxComponents } from "@/entities/mdx/ui/MdxComponents";

interface MdxTemplateProps {
    content: string;
}

const options = {
    mdxOptions: {
        remarkPlugins: [],
        rehypePlugins: [rehypeHighlight],
    },
};

export const MdxTemplate = async ({ content }: Readonly<MdxTemplateProps>) => {
    return (
        <article className="prose prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg dark:prose-headings:text-white">
            <MDXRemote source={content} components={mdxComponents} options={options} />
        </article>
    );
};
