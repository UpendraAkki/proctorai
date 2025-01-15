import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import WaitingListForm from "./WaitingListForm";

const Navigation = () => (
  <nav className="border-b">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center">
          <span className="text-xl font-bold">Proctor AI</span>
          <NavigationMenu className="ml-8 hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink className="px-3 py-2" href="#features">Features</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="px-3 py-2" href="#how-it-works">How It Works</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="px-3 py-2" href="#pricing">Pricing</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="px-3 py-2" href="#faq">FAQ</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center gap-4">
          <WaitingListForm />
        </div>
      </div>
    </div>
  </nav>
);

export default Navigation;