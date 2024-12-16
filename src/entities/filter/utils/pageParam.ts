export const PAGE_KEY = "page";

export function updatePageParam(page?: number) {
    if (!page) page = 1;
    const newSearchParam = new URLSearchParams();
    newSearchParam.set(PAGE_KEY, page.toString());
    return "?" + newSearchParam.toString();
}

export function getCurrentPageGroup(page: number, pageGroupSize: number) {
    return Math.ceil(page / pageGroupSize);
}
