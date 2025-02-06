import { usePageInfo } from "@/entities/filter/hooks/usePageInfo";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationNext,
    PaginationPrevious,
} from "@/shared/ui/pagination";

export interface PageInfoProps {
    totalPage: number;
    pageGroupSize: number;
}

export const PageInfo = ({ totalPage, pageGroupSize }: PageInfoProps) => {
    const { currentPage, currentGroupPages, handlePage, handlePrevPageGroup, handleNextPageGroup } =
        usePageInfo({
            totalPage,
            pageGroupSize,
        });

    return (
        <Pagination className="my-2">
            <PaginationContent>
                <PaginationItem onClick={() => handlePrevPageGroup()}>
                    <PaginationPrevious className="border-[1px] border-transparent bg-none text-white hover:cursor-pointer hover:border-[#9098a1] hover:bg-transparent hover:text-white hover:no-underline" />
                </PaginationItem>

                {currentGroupPages.map((pageIndex, index) => {
                    return (
                        <PaginationItem key={index} onClick={() => handlePage(pageIndex)}>
                            <Button
                                variant="link"
                                className={cn(
                                    "border-[1px] border-transparent text-white hover:border-[#9098a1] hover:no-underline",
                                    pageIndex === currentPage ? "border-[#9098a1]" : "",
                                )}
                            >
                                {pageIndex}
                            </Button>
                        </PaginationItem>
                    );
                })}

                <PaginationItem onClick={() => handleNextPageGroup()}>
                    <PaginationNext className="border-[1px] border-transparent bg-none text-white hover:cursor-pointer hover:border-[#9098a1] hover:bg-transparent hover:text-white hover:no-underline" />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
};
