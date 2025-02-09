import Link from "next/link";
import { LucideCalendarDays, NotebookPen } from "lucide-react";
import { Category } from "@/entities/filter/ui/Category";
import { findColorByLabel } from "@/entities/filter/utils/findColorByLabel";
import { PostModel } from "@/features/posts/model";
import { parseDate } from "@/shared/lib/dayjs";
import { Card, CardContent, CardFooter, CardHeader } from "@/shared/ui/card";

export const PostCard = ({
    slug,
    title,
    description,
    createdAt,
    category,
}: PostModel["frontMatter"]) => {
    return (
        <Link href={`/posts/${slug}`} className="hover:cursor-pointer">
            <Card className="border-base rounded-[8px] bg-[#0e1117] px-6 text-white hover:cursor-pointer">
                <CardHeader className="flex flex-row items-center px-0 py-2">
                    <div className="mt-[6px] flex h-fit justify-end">
                        <NotebookPen size={16} className="mr-1 flex items-center" />
                    </div>
                    <h1 className="text-md line-clamp-1 font-semibold hover:underline">{title}</h1>
                </CardHeader>

                <CardContent className="p-0">
                    <p className="line-clamp-2 h-10 text-sm text-[#9198a1]">{description}</p>
                </CardContent>

                <CardFooter className="mb-[6px] flex justify-between px-0 py-2 text-[#9198a1]">
                    <Category label={category} color={findColorByLabel(category) as string} />
                    <span className="ml-2 flex items-center gap-1 text-sm">
                        <LucideCalendarDays size={16} />
                        {parseDate(createdAt)}
                    </span>
                </CardFooter>
            </Card>
        </Link>
    );
};
