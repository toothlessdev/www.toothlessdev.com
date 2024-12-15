import { CategoryColor, CategoryLabel } from "@/entities/category/config/category";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/shared/ui/accordion";

interface CategoryMenuItemProps {
    categoryLabel: CategoryLabel;
    categoryColor: CategoryColor;
}

export const CategoryMenuItem = ({ categoryLabel, categoryColor }: CategoryMenuItemProps) => {
    return (
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-none">
                <AccordionTrigger className="h-[22px] rounded-[4px] border-none px-2 hover:bg-[#161a21]">
                    <div className="flex items-center justify-start hover:no-underline">
                        <div
                            className="mr-1 h-[12px] w-[12px] rounded-full"
                            style={{ backgroundColor: categoryColor }}
                        />
                        <p className="hover:no-underline">{categoryLabel}</p>
                    </div>
                </AccordionTrigger>

                <AccordionContent className="pb-2">
                    {/* {contents.map((content, index) => {
                        return (
                            <Link href={`/posts${content.slug}`} key={index}>
                                <p className="overflow-hidden text-ellipsis text-nowrap py-2 pl-8 hover:underline">
                                    {content.title}
                                </p>
                            </Link>
                        );
                    })} */}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
};
