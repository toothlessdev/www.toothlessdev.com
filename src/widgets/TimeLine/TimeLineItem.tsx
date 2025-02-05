import React from "react";

export interface TimeLineItemProps {
    title?: string;
    date?: string;
    icon: React.ReactNode;
    content?: React.ReactNode;
}

export const TimeLineItem = ({ title, date, icon, content }: TimeLineItemProps) => {
    return (
        <li>
            <div className="flex items-center">
                <div className="relative flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full border-2 border-[#0f1117] bg-[#202830]">
                    {icon}
                </div>
                <div className="ml-[14px] flex h-full w-full justify-between">
                    <h2>{title}</h2>
                    <p className="text-sm">{date}</p>
                </div>
            </div>

            <div className="flex h-fit">
                <div className="relative w-[28px] shrink-0">
                    <div className="absolute left-[50%] h-full border-l-[2px] border-[#202830]"></div>
                </div>
                <div className="ml-[14px] h-fit grow text-sm text-[#9fa6ad]">
                    <div className="mb-6 mt-2">{content}</div>
                </div>
            </div>
        </li>
    );
};
