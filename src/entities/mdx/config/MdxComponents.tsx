import Link from "next/link";

export const mdxComponents = {
    Link: Link,
    h1: (props: Record<string, unknown>) => <h1 className="my-5 text-2xl font-bold" {...props} />,
    h2: (props: Record<string, unknown>) => <h2 className="my-4 text-xl font-bold" {...props} />,
    h3: (props: Record<string, unknown>) => <h3 className="my-4 text-lg font-bold" {...props} />,
    h4: (props: Record<string, unknown>) => <h4 className="text-md my-1 font-bold" {...props} />,
    h5: (props: Record<string, unknown>) => <h5 className="my-3 text-sm font-bold" {...props} />,
    h6: (props: Record<string, unknown>) => <h6 className="my-3 text-xs font-bold" {...props} />,
    p: (props: Record<string, unknown>) => <p className="my-3 text-[#d8d8d8]" {...props} />,
    a: (props: Parameters<typeof Link>[0]) => <Link className="text-blue-500" {...props} />,
    ul: (props: Record<string, unknown>) => <ul className="list-inside list-disc" {...props} />,
    ol: (props: Record<string, unknown>) => <ol className="list-inside list-decimal" {...props} />,
    li: (props: Record<string, unknown>) => <li className="my-2 text-[#d8d8d8]" {...props} />,
    blockquote: (props: Record<string, unknown>) => (
        <blockquote className="border-l-4 border-blue-500 pl-2" {...props} />
    ),
    pre: (props: Record<string, unknown>) => (
        <pre className="rounded-[8px] bg-gray-800" {...props} />
    ),
    code: (props: Record<string, unknown>) => (
        <code className="rounded-[6px] bg-gray-800 p-1 text-sm" {...props} />
    ),
    img: (props: Record<string, unknown>) => (
        <img className="my-2 block p-4" {...props} alt="image" />
    ),
    table: (props: Record<string, unknown>) => <table className="table-auto" {...props} />,
    th: (props: Record<string, unknown>) => <th className="border px-4 py-2" {...props} />,
    td: (props: Record<string, unknown>) => <td className="border px-4 py-2" {...props} />,
    tr: (props: Record<string, unknown>) => <tr className="border px-4 py-2" {...props} />,
    wrapper: ({ children }: { children: React.ReactNode }) => {
        return <div style={{ width: "100%" }}>{children}</div>;
    },
};
