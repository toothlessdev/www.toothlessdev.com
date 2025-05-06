import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { SlidersHorizontal } from "lucide-react";
import { useCallback } from "react";
import { siteConfiguration } from "@/apps/config/site";
import { PostCategoryLabel } from "@/entities/filter/config/category";
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

    const isCategoryActive = useCallback(
        (category: string) => getCategorySearchParams() === category,
        [getCategorySearchParams],
    );

    return (
        <aside className="sticky top-0 p-2 text-white lg:w-[30%]">
            <h2 className="flex h-[36px] items-center gap-2 font-semibold">
                <SlidersHorizontal size={14} />
                Categories
            </h2>
            <nav className="flex flex-row flex-nowrap gap-1 overflow-x-scroll py-2 lg:flex-col">
                {siteConfiguration.category.map((category, index) => {
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
                                isCategoryActive(category.label)
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
