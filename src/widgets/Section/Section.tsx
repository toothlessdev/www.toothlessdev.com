interface SectionProps {
    title?: string;
    children?: React.ReactNode;
    className?: string;
}

export const Section = ({ title, className, children }: Readonly<SectionProps>) => {
    return (
        <section className={className}>
            <h2 className="text-md my-1 text-white">{title}</h2>
            {children}
        </section>
    );
};
