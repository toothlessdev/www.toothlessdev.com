import { Fragment } from "react";
import { Button } from "@/shared/ui/button";
import { Checkbox } from "@/shared/ui/checkbox";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/shared/ui/dialog";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import {
    BoldItalicUnderlineToggles,
    CodeToggle,
    InsertCodeBlock,
    InsertTable,
    ListsToggle,
    UndoRedo,
} from "@mdxeditor/editor";

export const PostEditorToolbar = () => {
    return (
        <Fragment>
            <UndoRedo />
            <BoldItalicUnderlineToggles />
            <CodeToggle />
            <ListsToggle />
            <InsertTable />
            <InsertCodeBlock />

            <Dialog>
                <DialogTrigger className="ml-auto mr-2 rounded-sm bg-secondary p-1 px-3 font-semibold text-primary">
                    글쓰기
                </DialogTrigger>
                <DialogContent className="bg-primary">
                    <DialogHeader>
                        <DialogTitle className="mb-2">새글 작성하기</DialogTitle>
                        <Label>제목</Label>
                        <Input className="bg-primary"></Input>
                        <Label>파일명</Label>
                        <Input className="bg-primary"></Input>
                        <Label>작성날짜</Label>
                        <Input type="date" className="bg-primary"></Input>
                        <Label>카테고리</Label>

                        <div className="my-4 flex items-center gap-2">
                            <Checkbox id="pinned" className="h-5 w-5 border-white" />
                            <Label htmlFor="pinned" className="font-semibold">
                                고정하기
                            </Label>
                        </div>
                    </DialogHeader>
                    <div className="flex gap-2">
                        <Button variant="destructive">취소하기</Button>
                        <Button variant="secondary">발행하기</Button>
                    </div>
                </DialogContent>
            </Dialog>
        </Fragment>
    );
};
