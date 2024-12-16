import { NavGlobal } from "@/shared/layouts/NavGlobal";
import { NavTop } from "@/shared/layouts/NavTop";

export const Header = () => {
    return (
        <header className="bg-nav sticky top-0 border-b border-[#3d444d]">
            <NavGlobal />
            <NavTop />
        </header>
    );
};
