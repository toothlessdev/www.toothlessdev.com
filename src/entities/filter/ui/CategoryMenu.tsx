import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { PostCategoryLabel, postCategory } from "@/entities/filter/config/category";
import { Category } from "@/entities/filter/ui/Category";
import { cn } from "@/shared/lib/utils";

export const CategoryMenu = () => {
    const router = useRouter();

    const { pathname } = router;
    const searchParams = useSearchParams();

    const getCategorySearchParams = useCallback(() => {
        const category = searchParams.get("category");
        return category ? category : "";
    }, [searchParams]);

    const setCategorySearchParams = useCallback(
        (category: PostCategoryLabel) => {
            const params = new URLSearchParams(searchParams.toString());
            params.set("category", category);
            return params.toString();
        },
        [searchParams],
    );

    return (
        <aside className="sticky top-0 p-2 text-white lg:w-[30%]">
            <h2 className="flex h-[36px] items-center font-semibold">Categories</h2>
            <nav className="flex flex-col gap-1 py-2">
                {postCategory.map((category, index) => {
                    return (
                        <Category
                            key={index}
                            label={category.label}
                            color={category.color}
                            onClick={() => {
                                router.push(
                                    pathname + "?" + setCategorySearchParams(category.label),
                                );
                            }}
                            className={cn(
                                "rounded-sm px-2 py-1 hover:cursor-pointer hover:bg-[#161a21]",
                                getCategorySearchParams() === category.label.toLowerCase()
                                    ? "bg-[#161a21]"
                                    : "bg-transparent",
                            )}
                        />
                    );
                })}
            </nav>
        </aside>
    );
};
