import { NavigationMenuDemo } from "../../ui/NavigationMenu";

import Headers from "@/components/ui/Headers";
import { Button } from "@/components/ui/chad-cn/button";

function Navigation() {
  return (
    <nav className="sticky top-0 z-50 flex h-20 items-center justify-between bg-inherit p-4 drop-shadow-md">
      <Headers size="lg" className="uppercase">
        psycho
      </Headers>
      <NavigationMenuDemo />

      <Button
        size="lg"
        variant="outline"
        className="uppercase transition-all duration-150 hover:bg-primary hover:text-primary-foreground"
      >
        Get Help Now
      </Button>
    </nav>
  );
}

export default Navigation;
