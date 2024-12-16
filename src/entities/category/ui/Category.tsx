import React from "react";
import { CategoryType } from "@/entities/category";
import { cn } from "@/shared/lib/utils";

interface CategoryProps extends CategoryType {
    className?: string;
    onClick?: React.EventHandler<React.MouseEvent<HTMLDivElement>>;
}

export const Category = ({ className, label, color, onClick }: Readonly<CategoryProps>) => {
    return (
        <div className={cn(className, "flex items-center")} onClick={onClick}>
            <div
                className={`mr-1 aspect-square h-[12px] w-[12px] rounded-full`}
                style={{ backgroundColor: color }}
            />
            <p className="text-sm">{label}</p>
        </div>
    );
};
