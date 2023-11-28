import { NavigationMenuDemo as NavigationMenuDesktop } from "../../ui/NavigationMenu-Desktop";

import Headers from "@/components/ui/Headers";
import { NavigationMenuMobile } from "@/components/ui/NavigationMenu-Mobile";
import { Button } from "@/components/ui/chad-cn/button";

function Navigation() {
  return (
    <nav className="sticky top-0 z-50 flex h-20 max-w-full items-center justify-between bg-inherit p-4 opacity-90 drop-shadow-md">
      <Headers
        size="xxl"
        className="hidden text-base uppercase md:block md:text-xl lg:text-5xl"
      >
        psycho
      </Headers>

      <NavigationMenuDesktop />
      <NavigationMenuMobile />

      <Button
        size="lg"
        variant="outline"
        className="hidden uppercase transition-all duration-150 hover:bg-primary hover:text-primary-foreground md:block"
      >
        Get Help Now
      </Button>

      <Button
        size="sm"
        variant="outline"
        className="block uppercase transition-all duration-150 hover:bg-primary hover:text-primary-foreground md:hidden"
      >
        Get Help Now
      </Button>
    </nav>
  );
}

export default Navigation;
