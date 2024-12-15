import { NavGlobal } from "@/app/layouts/NavGlobal";
import { NavTop } from "@/app/layouts/NavTop";

export const Header = () => {
    return (
        <header className="bg-nav sticky top-0 border-b border-[#3d444d]">
            <NavGlobal />
            <NavTop />
        </header>
    );
};
