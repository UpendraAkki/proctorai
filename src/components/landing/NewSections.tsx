import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartBar, MessageSquare, Shield, Brain } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import WaitingListForm from "./WaitingListForm";
import { Clock, CheckCircle2, Files } from "lucide-react";

const NewSections = () => {
  const metrics = [
    { label: "Assignments Evaluated", value: "10,000+", description: "submissions processed" },
    { label: "Accuracy Rate", value: "98%", description: "in evaluations" },
    { label: "Time Saved", value: "70%", description: "reduction in evaluation time" },
    { label: "Institutions", value: "10+", description: "trust Proctor AI" }
  ];

  const faqs = [
    {
      question: "How does Proctor AI detect forgery in assignments?",
      answer: "Proctor AI uses advanced AI algorithms to compare handwriting, images, and content across submissions. It detects similarities and provides detailed reports to identify potential forgery or plagiarism, ensuring academic integrity."
    },
    {
      question: "Can Proctor AI integrate with our existing LMS?",
      answer: "Yes! Proctor AI seamlessly integrates with popular Learning Management Systems like Google Classroom allowing educators to use it within their existing workflows."
    },
    {
      question: "Is the data uploaded to Proctor AI secure?",
      answer: "Absolutely. Proctor AI follows strict data privacy protocols, including end-to-end encryption and GDPR compliance, to ensure your data is safe and secure."
    },
    {
      question: "What types of content can Proctor AI evaluate?",
      answer: "Proctor AI can evaluate various types of content, including handwritten assignments, scanned documents, typed essays, and even images or charts embedded in assignments."
    },
    {
      question: "How does Proctor AI save time for educators?",
      answer: "Proctor AI automates grading by analyzing assignments in bulk, generating instant feedback, and providing detailed reports. This reduces manual effort and frees up valuable time for educators to focus on teaching."
    },
    {
      question: "Can Proctor AI handle bulk evaluations?",
      answer: "Yes! Proctor AI is designed to handle large volumes of submissions simultaneously, making it ideal for schools, universities, and organizations managing hundreds of assignments at a time."
    },
    {
      question: "How accurate is Proctor AI in handwriting and content analysis?",
      answer: "Proctor AI achieves over 90% accuracy in handwriting analysis, content similarity detection, and forgery identification, thanks to its advanced AI and machine learning models."
    },
    {
      question: "Does Proctor AI provide detailed feedback for students?",
      answer: "Yes, Proctor AI generates instant feedback, including rubrics and insights tailored to the assignment. This helps students understand their performance and improve their learning outcomes."
    },
    {
      question: "Is Proctor AI suitable for organizations outside education?",
      answer: "Absolutely! While Proctor AI is tailored for educators, organizations can also use it for document verification, employee training evaluations, and more."
    },
    {
      question: "What are the pricing options for Proctor AI?",
      answer: "We offer flexible pricing plans based on your individual, institution's or organization's needs. Contact us for a personalized quote or to discuss your requirements."
    },
    {
      question: "Does Proctor AI support multilingual evaluation?",
      answer: "Yes, Proctor AI supports multiple languages, making it suitable for diverse educational and organizational environments worldwide. It supports popular languages like English, German, French, Italian, Portuguese, Hindi, Spanish, and Thai."
    },
    {
      question: "How can I try Proctor AI?",
      answer: "You can use for a free to see how Proctor AI can transform your evaluation process. Visit Proctor AI to get started!"
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
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold">Ready to Transform Academic Evaluation?</h2>
              <p className="text-lg text-muted-foreground">Join our waiting list and be the first to experience the future of grading.</p>
              <WaitingListForm />
            </div>
            <div className="relative flex justify-center">
              <img 
                src="public/lovable-uploads/b2f90fac-8e2f-4449-90f4-40f6e2cf731e.png"
                alt="Students collaborating"
                className="w-full max-w-[500px] h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewSections;
