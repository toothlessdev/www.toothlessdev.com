interface SectionProps {
    title?: React.ReactNode;
    children?: React.ReactNode;
}

export const Section = ({ title, children }: Readonly<SectionProps>) => {
    return (
        <section>
            <h2 className="text-md my-1 text-white">{title}</h2>
            {children}
        </section>
    );
};
