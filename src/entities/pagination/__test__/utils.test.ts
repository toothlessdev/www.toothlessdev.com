import { getCurrentPageGroup, updatePageParam } from "@/entities/pagination/utils/pageParam";

describe("updatePageParam", () => {
    test("should return appropriate search param", () => {
        const page = 2;
        const updatedSearchParam = updatePageParam(page);
        expect(updatedSearchParam).toBe(`?page=${page}`);
    });

    describe("should return empty string if page is Falsy", () => {
        test("should return empty string if page is 0", () => {
            const page = 0;
            const updatedSearchParam = updatePageParam(page);
            expect(updatedSearchParam).toBe("?page=1");
        });

        test("should return empty string if page is undefined", () => {
            const page = undefined;
            const updatedSearchParam = updatePageParam(page);
            expect(updatedSearchParam).toBe("?page=1");
        });
    });
});

describe("getCurrentPageGroup", () => {
    test("should return appropriate page group", () => {
        const pageGroupSize = 5;
        let currentPage, currentPageGroup;

        currentPage = 1;
        currentPageGroup = getCurrentPageGroup(currentPage, pageGroupSize);
        expect(currentPageGroup).toBe(1);

        currentPage = 5;
        currentPageGroup = getCurrentPageGroup(currentPage, pageGroupSize);
        expect(currentPageGroup).toBe(1);

        currentPage = 6;
        currentPageGroup = getCurrentPageGroup(currentPage, pageGroupSize);
        expect(currentPageGroup).toBe(2);
    });
});
