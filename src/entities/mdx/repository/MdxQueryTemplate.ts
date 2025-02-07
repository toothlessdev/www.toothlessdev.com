import { BaseMdxModel } from "@/entities/mdx/model";
import { MdxQueryBuilder } from "@/entities/mdx/utils/MdxQueryBuilder";

export class MdxQueryTemplate<Model extends BaseMdxModel> {
    public createQueryBuilder(mdx: Model[]) {
        return new MdxQueryBuilder<Model>(mdx);
    }
}
