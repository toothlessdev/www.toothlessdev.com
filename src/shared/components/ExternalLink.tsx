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

export const ExternalLinkButton = ({ href, children }: ExternalLinkProps) => {
    return (
        <a
            target="_blank"
            rel="noopener noreferrer"
            href={href}
            className="inline-flex h-8 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
        >
            {children}
        </a>
    );
};
