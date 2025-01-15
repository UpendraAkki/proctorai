import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { ChevronRight, Upload, Brain, FileText, School, Clock, Shield, ChartBar, Pencil, Link, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

const Index = () => {
  const [animatedWord, setAnimatedWord] = useState("Faster");
  const [billingInterval, setBillingInterval] = useState("monthly");
  const words = ["Faster", "Smarter", "Fair"];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedWord((current) => {
        const currentIndex = words.indexOf(current);
        return words[(currentIndex + 1) % words.length];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      title: "Create Assignment",
      description: "Create and customize assignments with AI-powered question generation",
      icon: Pencil
    },
    {
      title: "Upload Submissions",
      description: "Upload student submissions in bulk for evaluation",
      icon: Upload
    },
    {
      title: "AI Grading",
      description: "Let AI analyze and grade submissions with consistent criteria",
      icon: Brain
    },
    {
      title: "Get Instant Reports",
      description: "Access detailed analytics and insights immediately after grading",
      icon: FileText
    }
  ];

  const features = [
    {
      title: "Unique Questions Generation",
      description: "AI-crafted questions tailored to ensure originality and avoid repetition",
      icon: Brain
    },
    {
      title: "Bulk Evaluation",
      description: "Evaluate hundreds of submissions in minutes with AI-powered analysis",
      icon: FileText
    },
    {
      title: "Time Savings",
      description: "Reduce manual effort with automated workflows and smart processing",
      icon: Clock
    },
    {
      title: "Forgery Detection",
      description: "Detect image, handwriting, and content similarity with unparalleled accuracy",
      icon: Shield
    },
    {
      title: "Instant Reports",
      description: "Get detailed insights and analytics at the click of a button",
      icon: ChartBar
    },
    {
      title: "Handwriting Analysis",
      description: "Analyze handwriting patterns to detect originality and ensure authenticity",
      icon: Pencil
    }
  ];

  const pricingPlans = [
    {
      name: "Free",
      price: billingInterval === "monthly" ? "$0" : "$0",
      description: "For individuals to organize personal projects and life",
      features: [
        "Collaborative workspace",
        "Integrate with Slack, GitHub & more",
        "Basic page analytics",
        "7 day page history",
        "Invite 10 guests"
      ],
      buttonText: "Sign up",
      buttonVariant: "outline"
    },
    {
      name: "Plus",
      price: billingInterval === "monthly" ? "$10" : "$8",
      priceDetail: "per seat/month",
      description: "For small teams and professionals to work together",
      features: [
        "Everything in Free +",
        "Unlimited blocks for teams",
        "Unlimited file uploads",
        "30 day page history",
        "Invite 100 guests",
        "Custom websites",
        "Custom automations",
        "Charts & dashboards"
      ],
      buttonText: "Get started",
      buttonVariant: "default",
      popular: true
    },
    {
      name: "Business",
      price: billingInterval === "monthly" ? "$15" : "$12",
      priceDetail: "per seat/month",
      description: "For growing businesses to streamline teamwork",
      features: [
        "Everything in Plus +",
        "SAML SSO",
        "Private teamspaces",
        "Bulk PDF export",
        "Advanced page analytics",
        "90 day page history",
        "Invite 250 guests"
      ],
      buttonText: "Get started",
      buttonVariant: "outline"
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For organizations to operate with scalability, control, and security",
      features: [
        "Everything in Business +",
        "User provisioning (SCIM)",
        "Advanced security & controls",
        "Audit log",
        "Customer success manager",
        "Workspace analytics",
        "Security & Compliance integrations",
        "Invite 250 guests"
      ],
      buttonText: "Contact Sales",
      buttonVariant: "outline"
    }
  ];

  return (
    <div className="min-h-screen">
      <nav className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold">Proctor AI</span>
              <NavigationMenu className="ml-8 hidden md:flex">
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuLink className="px-3 py-2" href="#product">
                      Product
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink className="px-3 py-2" href="#teams">
                      Teams
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink className="px-3 py-2" href="#individuals">
                      Individuals
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink className="px-3 py-2" href="#pricing">
                      Pricing
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost">Request a demo</Button>
              <Button variant="ghost">Log in</Button>
              <Button>Get Proctor AI free</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                Grade
                <span className="block text-primary transition-all duration-300">
                  {animatedWord}
                </span>
                with AI <Sparkles className="inline-block w-6 h-6 text-black align-top" />
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl">
                Efficiently evaluate and analyze handwritten assignments in seconds with Proctor AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="hover-scale">
                  Try Proctor AI for Free
                </Button>
                <Button size="lg" variant="outline" className="hover-scale">
                  Request a demo
                </Button>
              </div>
              <div className="pt-8">
                <p className="text-sm text-muted-foreground mb-4">Trusted by teams at</p>
                <div className="flex gap-8 items-center">
                  <span className="text-muted-foreground font-semibold">Company 1</span>
                  <span className="text-muted-foreground font-semibold">Company 2</span>
                  <span className="text-muted-foreground font-semibold">Company 3</span>
                  <span className="text-muted-foreground font-semibold">Company 4</span>
                </div>
              </div>
            </div>
            <div className="relative flex justify-center items-center gap-4">
              <img 
                src="https://9e38803f74ddb504334f22284cd158ed.cdn.bubble.io/f1736939112516x452796899782004400/Writing-3--Streamline-Milano.png"
                alt="Student writing"
                className="w-[350px] h-auto rounded-lg transform scale-x-[-1]"
              />
              <img 
                src="https://9e38803f74ddb504334f22284cd158ed.cdn.bubble.io/f1736938607195x638189399219338600/Teacher-Grading-Papersprojects--Streamline-Milano.png"
                alt="Teacher grading papers"
                className="w-[400px] h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover-scale border-none shadow-lg">
                <CardHeader>
                  <feature.icon className="w-10 h-10 mb-4 text-primary" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center space-y-4 animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, transparent pricing</h2>
            <p className="text-lg text-muted-foreground">Choose the plan that's right for you</p>
            <div className="flex items-center justify-center mt-6 space-x-4">
              <Button 
                variant={billingInterval === "monthly" ? "default" : "outline"}
                onClick={() => setBillingInterval("monthly")}
              >
                Pay monthly
              </Button>
              <Button 
                variant={billingInterval === "yearly" ? "default" : "outline"}
                onClick={() => setBillingInterval("yearly")}
                className="relative"
              >
                Pay yearly
                <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full">
                  save 20%
                </span>
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-primary' : ''}`}>
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-sm px-3 py-1 rounded-full">
                    Popular
                  </span>
                )}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.priceDetail && (
                      <span className="text-sm text-muted-foreground ml-2">{plan.priceDetail}</span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">{plan.description}</p>
                </CardHeader>
                <CardContent>
                  <Button className="w-full mb-8" variant={plan.buttonVariant as "default" | "outline"}>
                    {plan.buttonText}
                  </Button>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <ChevronRight className="h-4 w-4 text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 md:px-6 lg:px-8 border-t">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-muted-foreground hover:text-foreground">Features</a></li>
              <li><a href="#pricing" className="text-muted-foreground hover:text-foreground">Pricing</a></li>
              <li><a href="#demo" className="text-muted-foreground hover:text-foreground">Request Demo</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-muted-foreground hover:text-foreground">About</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-foreground">Contact</a></li>
              <li><a href="#careers" className="text-muted-foreground hover:text-foreground">Careers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#docs" className="text-muted-foreground hover:text-foreground">Documentation</a></li>
              <li><a href="#blog" className="text-muted-foreground hover:text-foreground">Blog</a></li>
              <li><a href="#support" className="text-muted-foreground hover:text-foreground">Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#privacy" className="text-muted-foreground hover:text-foreground">Privacy Policy</a></li>
              <li><a href="#terms" className="text-muted-foreground hover:text-foreground">Terms of Service</a></li>
              <li><a href="#security" className="text-muted-foreground hover:text-foreground">Security</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Proctor AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
