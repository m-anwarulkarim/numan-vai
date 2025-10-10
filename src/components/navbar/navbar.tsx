// import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
// import { NavigationSheet } from "./navigation-sheet";

const NavbarPage = () => {
  return (
    <div className=" bg-muted">
      <nav className="fixed top-6 inset-x-4 h-16 bg-background border dark:border-slate-700/70 max-w-(--breakpoint-xl) mx-auto rounded-full">
        <div className="h-full flex items-center justify-between mx-auto px-4">
          <Logo />

          {/* Desktop Menu */}
          <NavMenu className="hidden md:block" />
        </div>
      </nav>
    </div>
  );
};

export default NavbarPage;
