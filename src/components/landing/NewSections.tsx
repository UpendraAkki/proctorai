import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartBar, MessageSquare, Shield, Brain } from "lucide-react";

const NewSections = () => {
  const metrics = [
    { label: "Assignments Evaluated", value: "10,000+", description: "submissions processed" },
    { label: "Accuracy Rate", value: "98%", description: "in evaluations" },
    { label: "Time Saved", value: "70%", description: "reduction in evaluation time" },
    { label: "Institutions", value: "10+", description: "trust Proctor AI" }
  ];

  const faqs = [
    {
      question: "How does Proctor AI detect forgery?",
      answer: "Proctor AI uses advanced AI algorithms to analyze handwriting patterns, content similarity, and image authenticity, ensuring reliable forgery detection."
    },
    {
      question: "Is my data secure?",
      answer: "Yes, we implement enterprise-grade security measures and encryption to protect all your data. We are compliant with educational data protection standards."
    },
    {
      question: "What types of content can Proctor AI evaluate?",
      answer: "Proctor AI can evaluate handwritten assignments, typed submissions, mathematical equations, diagrams, and multiple-choice questions."
    },
    {
      question: "Can Proctor AI integrate with my LMS?",
      answer: "Yes, Proctor AI offers seamless integration with major Learning Management Systems through our API and dedicated plugins."
    }
  ];

  const roadmap = [
    "Multilingual Question Generation",
    "Advanced Rubric Customization",
    "Real-time Collaboration Tools",
    "Enhanced Analytics Dashboard"
  ];

  return (
    <>
      {/* Success Metrics */}
      <section className="py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Success Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-primary">{metric.value}</CardTitle>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold mb-2">{metric.label}</h3>
                  <p className="text-muted-foreground">{metric.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>REVA University</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Saved 200+ hours for educators across departments</p>
                <p className="text-muted-foreground">
                  "Proctor AI transformed our evaluation process, making it more efficient and accurate."
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>UIIC Institute</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Reduced evaluation errors by 85% in 3 months</p>
                <p className="text-muted-foreground">
                  "The accuracy and speed of Proctor AI have significantly improved our assessment quality."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Roadmap */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Product Roadmap</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {roadmap.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <Brain className="w-10 h-10 mx-auto mb-4 text-primary" />
                  <CardTitle className="text-lg">Coming Soon</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Transform Academic Evaluation?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="hover-scale">Try Proctor AI for Free</Button>
            <Button size="lg" variant="outline" className="hover-scale">Request a Demo</Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewSections;