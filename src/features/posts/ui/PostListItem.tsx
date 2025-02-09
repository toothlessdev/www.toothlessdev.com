import Link from "next/link";
import { findColorByLabel } from "@/entities/filter/utils/findColorByLabel";
import { PostFrontMatter } from "@/features/posts/model";
import { parseDate } from "@/shared/lib/dayjs";

export const PostListItem = ({
    slug,
    title,
    description,
    category,
    createdAt,
}: PostFrontMatter) => {
    return (
        <Link href={`/posts/${slug}`}>
            <div className="border-b-[1px] border-[#3d444d] py-4">
                <h1 className="pb-2 text-xl font-bold text-[#3f87e5] hover:underline">{title}</h1>
                <p className="line-clamp-2 text-sm text-[#9198a1]">{description}</p>
                <div className="flex items-center justify-between">
                    <div className="flex items-center py-2">
                        <div
                            className={`mr-1 aspect-square h-[12px] w-[12px] rounded-full`}
                            style={{
                                backgroundColor: findColorByLabel(category),
                            }}
                        />
                        <p className="text-sm text-[#9198a1]">{category}</p>
                    </div>

                    <p className="flex text-sm text-[#9198a1]">{parseDate(createdAt)}</p>
                </div>
            </div>
        </Link>
    );
};
