import Link from "next/link";
import { LucideCalendarDays, NotebookPen } from "lucide-react";
import { Category, CategoryColor, CategoryLabel } from "@/entities/category";
import { Card, CardContent, CardFooter, CardHeader } from "@/shared/ui/card";

interface PostCardProps {
    id: number;
    title: string;
    content: string;
    date: string;

    categoryLabel: CategoryLabel;
    categoryColor: CategoryColor;
}

export const PostCard = ({ id, title, content, date, categoryLabel, categoryColor }: PostCardProps) => {
    return (
        <Link href={`/posts/${id}`} className="hover:cursor-pointer">
            <Card className="border-base rounded-[8px] bg-[#0e1117] px-6 text-white hover:cursor-pointer">
                <CardHeader className="flex flex-row items-center px-0 py-2">
                    <div className="mt-[6px] flex h-fit justify-end">
                        <NotebookPen size={16} className="mr-1 flex items-center" />
                    </div>
                    <h1 className="text-md line-clamp-1 font-semibold hover:underline">{title}</h1>
                </CardHeader>

                <CardContent className="p-0">
                    <p className="line-clamp-2 text-sm text-[#9198a1]">{content}</p>
                </CardContent>

                <CardFooter className="mb-[6px] flex justify-between px-0 py-2 text-[#9198a1]">
                    <Category label={categoryLabel} color={categoryColor} />
                    <span className="ml-2 flex items-center gap-1 text-sm">
                        <LucideCalendarDays size={16} />
                        {date}
                    </span>
                </CardFooter>
            </Card>
        </Link>
    );
};
