export interface SectionTitleProps {
    titleIcon?: React.ReactNode;
    title?: React.ReactNode;
}

export const SectionTitle = ({ titleIcon, title }: SectionTitleProps) => {
    return (
        <h2 className="text-md my-1 flex items-center gap-1 text-white">
            {titleIcon}
            {title}
        </h2>
    );
};
