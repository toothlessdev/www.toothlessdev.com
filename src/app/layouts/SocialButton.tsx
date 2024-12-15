interface SocialButtonProps {
    icon: React.ReactNode;
    href: string;
}

export const SocialButton = ({ icon, href }: Readonly<SocialButtonProps>) => {
    return (
        <a
            target="_blank"
            rel="noopener noreferrer"
            href={href}
            className="flex h-[30px] w-[30px] items-center justify-center rounded-[8px] border-[1px] border-[#9098a1]"
        >
            {icon}
        </a>
    );
};
