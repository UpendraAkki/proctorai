import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import WaitingListForm from "./WaitingListForm";

const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <img 
              src="public/lovable-uploads/60c9e505-3d89-4aaa-88da-08d0dab38ae0.png" 
              alt="Proctor AI Logo" 
              className="w-8 h-8 rounded-md"
            />
            <span className="text-xl font-bold">Proctor AI</span>
            <NavigationMenu className="ml-8 hidden md:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink 
                    className="px-3 py-2 cursor-pointer" 
                    onClick={() => scrollToSection('features')}
                  >
                    Features
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink 
                    className="px-3 py-2 cursor-pointer" 
                    onClick={() => scrollToSection('how-it-works')}
                  >
                    How It Works
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink 
                    className="px-3 py-2 cursor-pointer" 
                    onClick={() => scrollToSection('pricing')}
                  >
                    Pricing
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink 
                    className="px-3 py-2 cursor-pointer" 
                    onClick={() => scrollToSection('faq')}
                  >
                    FAQ
                  </NavigationMenuLink>
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
};

export default Navigation;