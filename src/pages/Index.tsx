import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight, Upload, Brain, FileText, School, Clock, Shield, ChartBar, Pencil, Link } from "lucide-react";

// ... keep existing code (features array until Chart icon usage)

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

  const steps = [
    {
      title: "Upload Submissions",
      description: "Upload assignments, exams, or any content for evaluation",
      icon: Upload
    },
    {
      title: "AI Analysis",
      description: "Let Proctor AI analyze and detect similarities, generate rubrics",
      icon: Brain
    },
    {
      title: "Get Reports",
      description: "Instantly download actionable insights and detailed reports",
      icon: FileText
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center space-y-8 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl mx-auto">
            Revolutionizing Academic Evaluation with AI
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Proctor AI streamlines bulk evaluation, generates unique questions, detects forgery, and delivers instant feedback—all while integrating seamlessly with your LMS.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="hover-scale">
              Try Proctor AI for Free <ChevronRight className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="hover-scale">
              Schedule a Demo <ChevronRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
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

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Transform Your Academic Evaluation?
          </h2>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Join thousands of educators who are saving time and ensuring fair evaluations with Proctor AI.
          </p>
          <Button size="lg" variant="secondary" className="hover-scale">
            Get Started Now <ChevronRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
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
