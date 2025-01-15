import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, FileText, Clock, Shield, ChartBar, Pencil } from "lucide-react";

const Features = () => {
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

  return (
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
  );
};

export default Features;