import { category } from "@/entities/category/config/category";
import { CategoryMenuItem } from "@/entities/category/ui/CategoryMenuItem";

export const CategoryMenu = () => {
    return (
        <aside className="sticky top-0 w-[30%] p-2 text-white">
            <h2 className="flex h-[36px] items-center font-bold">Categories</h2>
            <nav className="py-2">
                {category.map((category, index) => {
                    return (
                        <CategoryMenuItem
                            key={index}
                            categoryLabel={category.label}
                            categoryColor={category.color}
                        />
                    );
                })}
            </nav>
        </aside>
    );
};
