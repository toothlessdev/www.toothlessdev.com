"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { category, CategoryLabel } from "@/entities/category/config/category";
import { Category } from "@/entities/category/ui/Category";
import { cn } from "@/shared/lib/utils";

export const CategoryMenu = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const getCategorySearchParams = useCallback(() => {
        const category = searchParams.get("category")?.toLowerCase();
        return category ? category : "";
    }, [searchParams]);

    const setCategorySearchParams = useCallback(
        (category: CategoryLabel) => {
            const params = new URLSearchParams(searchParams.toString());
            params.set("category", category.toLowerCase());
            return params.toString();
        },
        [searchParams],
    );

    return (
        <aside className="sticky top-0 w-[30%] p-2 text-white">
            <h2 className="flex h-[36px] items-center font-semibold">Categories</h2>
            <nav className="flex flex-col gap-1 py-2">
                {category.map((category, index) => {
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
