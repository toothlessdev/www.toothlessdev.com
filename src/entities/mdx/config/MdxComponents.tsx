import Image from "next/image";
import Link from "next/link";

export const mdxComponents = {
    h1: (props: React.ComponentProps<"h1">) => (
        <h1 className="my-8 text-3xl font-bold text-[#cecece]" {...props} />
    ),
    h2: (props: React.ComponentProps<"h2">) => (
        <h2 className="my-7 text-2xl font-bold text-[#cecece]" {...props} />
    ),
    h3: (props: React.ComponentProps<"h3">) => (
        <h3 className="my-6 text-xl font-bold text-[#cecece]" {...props} />
    ),
    h4: (props: React.ComponentProps<"h4">) => (
        <h4 className="my-5 text-lg font-bold text-[#cecece]" {...props} />
    ),
    h5: (props: React.ComponentProps<"h5">) => (
        <h5 className="text-md my-4 font-bold text-[#cecece]" {...props} />
    ),
    h6: (props: React.ComponentProps<"h6">) => (
        <h6 className="my-4 text-base font-bold text-[#cecece]" {...props} />
    ),
    p: (props: React.ComponentProps<"p">) => <p className="my-3 text-[#cecece]" {...props} />,
    a: ({ href, children, ...rest }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
        <Link href={href!} legacyBehavior>
            <a className="text-blue-500" {...rest}>
                {children}
            </a>
        </Link>
    ),
    ul: (props: React.ComponentProps<"ul">) => <ul className="list-inside list-disc" {...props} />,
    ol: (props: React.ComponentProps<"ol">) => (
        <ol className="list-inside list-decimal" {...props} />
    ),
    li: (props: React.ComponentProps<"li">) => <li className="my-2 text-[#cecece]" {...props} />,
    blockquote: (props: React.ComponentProps<"blockquote">) => (
        <blockquote className="my-4 border-l-2 border-blue-400 pl-2 text-[#a5a5a5]" {...props} />
    ),
    pre: (props: React.ComponentProps<"pre">) => (
        <pre className="text-wrap rounded-[8px] bg-gray-800 p-3" {...props} />
    ),
    code: (props: React.ComponentProps<"code">) => (
        <code className="rounded-[6px] bg-gray-800 p-0.5 px-1 text-sm" {...props} />
    ),
    img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
        const { src, alt, width, height, className, ...rest } = props;
        return (
            <Image
                src={src as string}
                alt={alt || "image"}
                width={width ? Number(width) : 1000}
                height={height ? Number(height) : 1000}
                className={`my-2 block p-4 ${className || ""}`}
                {...rest}
            />
        );
    },
    table: (props: React.ComponentProps<"table">) => (
        <div className="overflow-hidden rounded-md border text-sm text-[#cecece]">
            <table className="w-full table-auto border-collapse" {...props}>
                {props.children}
            </table>
        </div>
    ),
    th: (props: React.ComponentProps<"th">) => (
        <th className="rounded-md border px-4 py-2" {...props}>
            {props.children}
        </th>
    ),
    td: (props: React.ComponentProps<"td">) => (
        <td className="border px-4 py-2" {...props}>
            {props.children}
        </td>
    ),
    tr: (props: React.ComponentProps<"tr">) => (
        <tr className="border px-4 py-2" {...props}>
            {props.children}
        </tr>
    ),
    wrapper: ({ children }: { children: React.ReactNode }) => {
        return <div style={{ width: "100%" }}>{children}</div>;
    },
};
