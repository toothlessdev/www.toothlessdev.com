interface ExternalLinkProps {
    href: string;
    children: React.ReactNode;
}

export const ExternalLink = ({ href, children }: ExternalLinkProps) => {
    return (
        <a
            target="_blank"
            rel="noopener noreferrer"
            href={href}
            className="flex h-[30px] w-[30px] items-center justify-center rounded-[8px] border-[1px] border-[#9098a1]"
        >
            {children}
        </a>
    );
};
