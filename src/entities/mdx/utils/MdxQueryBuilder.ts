import { BaseMdxModel, MdxFrontMatter } from "@/entities/mdx/model";
import { ValueOf } from "@/shared/types";

export class MdxQueryBuilder<Model extends BaseMdxModel> {
    private filters: Array<MdxFrontMatter> = [];

    private sortCompareFn?: (model1: Model, model2: Model) => number;

    private page?: number;
    private perPage?: number;

    constructor(private readonly mdx: Model[]) {}

    public filter(key: keyof MdxFrontMatter, value: ValueOf<MdxFrontMatter>): this {
        this.filters.push({ key, value });
        return this;
    }

    public sort(compareFn: (model1: Model, model2: Model) => number): this {
        this.sortCompareFn = compareFn;
        return this;
    }

    public paginate(page: number, perPage: number): this {
        this.page = page;
        this.perPage = perPage;
        return this;
    }

    public build(): Model[] {
        let result = [...this.mdx];

        // 1. 필터 적용
        result = this.applyFilter(result);

        // 2. 정렬 적용 (sortKey가 지정된 경우)
        result = this.applySort(result);

        // 3. 페이지네이션 적용
        result = this.applyPagination(result);

        return result;
    }

    private applyFilter(target: Model[]) {
        for (const { key, value } of this.filters) {
            console.log(key, value);
            target = target.filter((model) => model.frontMatter[key as string] === value);
        }
        return target;
    }

    private applySort(target: Model[]) {
        if (!this.sortCompareFn) return target;

        target.sort(this.sortCompareFn);
        return target;
    }

    private applyPagination(target: Model[]) {
        if (this.page === undefined || this.perPage === undefined) return target;

        const start = (this.page - 1) * this.perPage;
        target = target.slice(start, start + this.perPage);

        return target;
    }
}
