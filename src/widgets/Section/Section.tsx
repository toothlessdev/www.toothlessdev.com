import { SectionTitle } from "@/widgets/Section/SectionTitle";

interface SectionProps {
    titleIcon?: React.ReactNode;
    title?: React.ReactNode;

    children?: React.ReactNode;
    className?: string;
}

export const Section = ({ titleIcon, title, className, children }: Readonly<SectionProps>) => {
    return (
        <section className={className}>
            <SectionTitle titleIcon={titleIcon} title={title} />
            {children}
        </section>
    );
};
