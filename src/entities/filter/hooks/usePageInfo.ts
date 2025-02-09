import { useRouter } from "next/router";
import { useCallback, useMemo } from "react";
import { PageInfoProps } from "@/entities/filter/ui/PageInfo";
import { getCurrentPageGroup, PAGE_KEY, updatePageParam } from "@/entities/filter/utils/pageParam";

export const usePageInfo = ({ totalPage, pageGroupSize }: PageInfoProps) => {
    const router = useRouter();
    const pathName = router.pathname;

    const currentPage = useMemo(() => {
        if (!router.isReady) return 1;

        const page = router.query[PAGE_KEY] as string;
        return page ? parseInt(page) : 1;
    }, [router.query, router.isReady]);

    const currentGroupPages: number[] = useMemo(() => {
        if (!router.isReady) return [1];

        const currentPageGroup = getCurrentPageGroup(currentPage, pageGroupSize);
        const startPage = (currentPageGroup - 1) * pageGroupSize + 1;
        const endPage = Math.min(currentPageGroup * pageGroupSize, totalPage);
        return Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);
    }, [currentPage, pageGroupSize, totalPage, router.isReady]);

    const isFirstPageGroup = useMemo(() => {
        if (!router.isReady) return true;

        const currentPageGroup = getCurrentPageGroup(currentPage, pageGroupSize);
        return currentPageGroup === 1;
    }, [currentPage, pageGroupSize, router.isReady]);

    const isLastPageGroup = useMemo(() => {
        if (!router.isReady) return true;

        const currentPageGroup = getCurrentPageGroup(currentPage, pageGroupSize);
        const totalPageGroup = getCurrentPageGroup(totalPage, pageGroupSize);
        return currentPageGroup === totalPageGroup;
    }, [currentPage, pageGroupSize, totalPage, router.isReady]);

    const handlePage = useCallback(
        (page: number) => {
            if (!router.isReady) return;

            const updatedSearchParam = updatePageParam(page);
            router.push(pathName + updatedSearchParam);
        },
        [pathName, router],
    );

    // TODO: handle 네이밍 변경 필요.
    const handleNextPage = useCallback(() => {
        if (!router.isReady || currentPage === totalPage) return;

        handlePage(currentPage + 1);
    }, [currentPage, handlePage, totalPage, router.isReady]);

    const handlePrevPage = useCallback(() => {
        if (!router.isReady || currentPage === 1) return;

        handlePage(currentPage - 1);
    }, [currentPage, handlePage, router.isReady]);

    const handleNextPageGroup = useCallback(() => {
        if (!router.isReady || isLastPageGroup) return;

        const currentPageGroup = getCurrentPageGroup(currentPage, pageGroupSize);

        const nextPage = currentPageGroup * pageGroupSize + 1;
        const updatedSearchParam = updatePageParam(nextPage);
        router.push(pathName + updatedSearchParam);
    }, [currentPage, isLastPageGroup, pageGroupSize, pathName, router]);

    const handlePrevPageGroup = useCallback(() => {
        if (!router.isReady || isFirstPageGroup) return;

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
