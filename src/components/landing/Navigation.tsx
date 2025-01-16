import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { useNavigate, useLocation } from "react-router-dom";
import WaitingListForm from "./WaitingListForm";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <img 
              src="https://9e38803f74ddb504334f22284cd158ed.cdn.bubble.io/f1736994810080x309177236220420350/LOGO.jpg?_gl=1*1r0ttmm*_gcl_au*MjEzOTIzMjUzNS4xNzM0NjY4Mzgz*_ga*MTkzMjQ5Nzg5OC4xNzExMTk0Mzcw*_ga_BFPVR2DEE2*MTczNjk5NDQwNi4xNDcuMC4xNzM2OTk0NDA3LjU5LjAuMA.." 
              alt="Proctor AI Logo" 
              className="w-6 h-6 rounded-md"
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