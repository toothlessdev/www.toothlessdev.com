export interface TimeLineContainerProps {
    year: string;
    month: string;
    children: React.ReactNode;
}

export const TimeLineContainer = ({ year, month, children }: TimeLineContainerProps) => {
    return (
        <div>
            <div className="flex items-center py-3">
                <p className="flex gap-2 text-sm">
                    <span>{month}</span>
                    <span className="font-bold">{year}</span>
                </p>
                <hr className="ml-4 w-full border-[#252b31]" />
            </div>
            <ul className="flex flex-col">{children}</ul>
        </div>
    );
};
