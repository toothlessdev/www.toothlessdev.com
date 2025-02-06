import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { PageInfoProps } from "@/entities/filter/ui/PageInfo";
import { getCurrentPageGroup, PAGE_KEY, updatePageParam } from "@/entities/filter/utils/pageParam";

export const usePageInfo = ({ totalPage, pageGroupSize }: PageInfoProps) => {
    const router = useRouter();
    const pathName = usePathname();
    const searchParams = useSearchParams();

    const currentPage = useMemo(() => {
        const page = searchParams.get(PAGE_KEY);
        return page ? parseInt(page) : 1;
    }, [searchParams]);

    const currentGroupPages: number[] = useMemo(() => {
        const currentPageGroup = getCurrentPageGroup(currentPage, pageGroupSize);
        const startPage = (currentPageGroup - 1) * pageGroupSize + 1;
        const endPage = Math.min(currentPageGroup * pageGroupSize, totalPage);
        return Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);
    }, [currentPage, pageGroupSize, totalPage]);

    const isFirstPageGroup = useMemo(() => {
        const currentPageGroup = getCurrentPageGroup(currentPage, pageGroupSize);
        return currentPageGroup === 1;
    }, [currentPage, pageGroupSize]);

    const isLastPageGroup = useMemo(() => {
        const currentPageGroup = getCurrentPageGroup(currentPage, pageGroupSize);
        const totalPageGroup = getCurrentPageGroup(totalPage, pageGroupSize);
        return currentPageGroup === totalPageGroup;
    }, [currentPage, pageGroupSize, totalPage]);

    const handlePage = useCallback(
        (page: number) => {
            const updatedSearchParam = updatePageParam(page);
            router.push(pathName + updatedSearchParam);
        },
        [pathName, router],
    );

    // TODO: handle 네이밍 변경 필요.
    const handleNextPage = useCallback(() => {
        if (currentPage === totalPage) return;
        handlePage(currentPage + 1);
    }, [currentPage, handlePage, totalPage]);

    const handlePrevPage = useCallback(() => {
        if (currentPage === 1) return;
        handlePage(currentPage - 1);
    }, [currentPage, handlePage]);

    const handleNextPageGroup = useCallback(() => {
        if (isLastPageGroup) return;
        const currentPageGroup = getCurrentPageGroup(currentPage, pageGroupSize);

        const nextPage = currentPageGroup * pageGroupSize + 1;
        const updatedSearchParam = updatePageParam(nextPage);
        router.push(pathName + updatedSearchParam);
    }, [currentPage, isLastPageGroup, pageGroupSize, pathName, router]);

    const handlePrevPageGroup = useCallback(() => {
        if (isFirstPageGroup) return;
        const currentPageGroup = getCurrentPageGroup(currentPage, pageGroupSize);

        const prevPage = (currentPageGroup - 1) * pageGroupSize;
        const updatedSearchParam = updatePageParam(prevPage);
        router.push(pathName + updatedSearchParam);
    }, [currentPage, isFirstPageGroup, pageGroupSize, pathName, router]);

    return {
        currentPage,
        currentGroupPages,

        isFirstPageGroup,
        isLastPageGroup,

        handlePage,
        handleNextPage,
        handlePrevPage,
        handleNextPageGroup,
        handlePrevPageGroup,
    };
};
