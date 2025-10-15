import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { SearchBar } from "@/utils/SearchBar";
import type { ComponentProps } from "react";
import { Link } from "react-router";

export const NavMenu = (props: ComponentProps<typeof NavigationMenu>) => (
  <NavigationMenu {...props}>
    <NavigationMenuList className="gap-3 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start data-[orientation=vertical]:justify-start">
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link to="/">মূলপাতা</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger>প্রবন্ধ ও রচনা</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid w-[200px] gap-4">
            <li>
              <NavigationMenuLink asChild>
                <Link to="/">প্রবন্ধ</Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link to="/">রচনা</Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link to="/">Blocks</Link>
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>স্কুলিং</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link to="/">স্কুলিং</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link to="/">স্কুলিং</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link to="/">স্কুলিং</Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>প্রকাশনা</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link to="/">প্রকাশনা</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link to="/">প্রকাশনা</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link to="/">প্রকাশনা</Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>

      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link to="/">যোগাযোগ</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link to="/">
            <SearchBar />
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
);
