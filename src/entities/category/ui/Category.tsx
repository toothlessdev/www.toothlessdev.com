import { CategoryType } from "@/entities/category";
import { cn } from "@/shared/lib/utils";

interface CategoryProps extends CategoryType {
    className?: string;
}

export const Category = ({ className, label, color }: Readonly<CategoryProps>) => {
    return (
        <div className={(cn(className), "flex items-center")}>
            <div className={`mr-1 aspect-square h-[12px] w-[12px] rounded-full`} style={{ backgroundColor: color }} />
            <p className="text-sm">{label}</p>
        </div>
    );
};
