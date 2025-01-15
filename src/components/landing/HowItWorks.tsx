import { Pencil, Upload, Brain, FileText } from "lucide-react";

const HowItWorks = () => {
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

  return (
    <section className="py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
  );
};

export default HowItWorks;