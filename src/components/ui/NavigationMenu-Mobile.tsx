"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/chad-cn/navigation-menu";
import { MenuIcon } from "lucide-react";
import Headers from "./Headers";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "How it works?",
    href: "/",
    description: "",
  },
  {
    title: "Services",
    href: "/",
    description: "",
  },
  {
    title: "FREE",
    href: "/",
    description: "",
  },
  {
    title: "FAQ",
    href: "/",
    description: "",
  },
  {
    title: "For volunteers",
    href: "/",
    description: "",
  },
  {
    title: "For psychos (losers)",
    href: "/",
    description: "",
  },
];

export function NavigationMenuMobile() {
  return (
    <NavigationMenu className="block bg-inherit md:hidden">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="flex flex-row-reverse gap-1  p-1 text-base">
            Psycho
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-3 p-4 ">
              <Headers size="xl" className="border-b-2 pb-4">
                PSYCHO
              </Headers>
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
