import Link from "next/link";

export const mdxComponents = {
    Link: Link,
    h1: (props: any) => <h1 className="my-5 text-2xl font-bold" {...props} />,
    h2: (props: any) => <h2 className="my-4 text-xl font-bold" {...props} />,
    h3: (props: any) => <h3 className="my-4 text-lg font-bold" {...props} />,
    h4: (props: any) => <h4 className="text-md my-1 font-bold" {...props} />,
    h5: (props: any) => <h5 className="my-3 text-sm font-bold" {...props} />,
    h6: (props: any) => <h6 className="my-3 text-xs font-bold" {...props} />,
    p: (props: any) => <p className="my-3 text-[#d8d8d8]" {...props} />,
    a: (props: any) => <a className="text-blue-500" {...props} />,
    ul: (props: any) => <ul className="list-inside list-disc" {...props} />,
    ol: (props: any) => <ol className="list-inside list-decimal" {...props} />,
    li: (props: any) => <li className="my-2 text-[#d8d8d8]" {...props} />,
    blockquote: (props: any) => (
        <blockquote className="border-l-4 border-blue-500 pl-2" {...props} />
    ),
    pre: (props: any) => <pre className="rounded-[8px] bg-gray-800" {...props} />,
    code: (props: any) => <code className="rounded-[6px] bg-gray-800 p-1 text-sm" {...props} />,
    img: (props: any) => <img className="my-2 block p-4" {...props} alt="image" />,
    table: (props: any) => <table className="table-auto" {...props} />,
    th: (props: any) => <th className="border px-4 py-2" {...props} />,
    td: (props: any) => <td className="border px-4 py-2" {...props} />,
    tr: (props: any) => <tr className="border px-4 py-2" {...props} />,
    wrapper: ({ children }: { children: any }) => {
        return <div style={{ width: "100%" }}>{children}</div>;
    },
};
