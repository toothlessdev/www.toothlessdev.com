import { useRouter } from "next/router";
import { AlertCircle } from "lucide-react";
import { Button } from "@/shared/ui/button";

export const AdminFallback = () => {
    const router = useRouter();

    return (
        <div className="mx-auto flex w-full flex-col items-center text-center">
            <h1 className="my-2 flex items-center gap-2 text-2xl font-bold">
                <AlertCircle />
                <span>접근 권한이 없습니다</span>
            </h1>

            <p>관리자 페이지는 개발 환경에서만 접근 가능합니다.</p>

            <Button
                className="my-4 font-semibold"
                variant="destructive"
                onClick={() => router.push("/")}
            >
                홈 페이지로 돌아가기
            </Button>
        </div>
    );
};
