import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight, Check, X } from "lucide-react";
import { useState } from "react";

const Pricing = () => {
  const [billingInterval, setBillingInterval] = useState("monthly");

  const pricingPlans = [
    {
      name: "Free",
      price: "$0",
      description: "For individuals to get started with basic evaluation tools",
      features: [
        { name: "Simple Evaluation", included: true },
        { name: "LMS management", included: true },
        { name: "Report Generations", included: true },
        { name: "Forgery Detections", included: false },
        { name: "AI Rubrics Generation", included: false }
      ],
      buttonText: "Get started",
      buttonVariant: "outline" as const
    },
    {
      name: "Plus",
      price: "$49",
      priceDetail: "per month",
      description: "For teams that need advanced features and priority support",
      features: [
        { name: "Everything in Free, plus:", included: true },
        { name: "Improved Evaluation", included: true },
        { name: "Bulk Evaluation", included: true },
        { name: "Forgery Detections", included: true }
      ],
      buttonText: "Get started",
      buttonVariant: "default" as const,
      popular: true
    }
  ];

  return (
    <section id="pricing" className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, transparent pricing</h2>
          <p className="text-lg text-muted-foreground">Choose the plan that's right for you</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
                <Button className="w-full mb-8" variant={plan.buttonVariant}>
                  {plan.buttonText}
                </Button>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm">
                      {feature.included ? (
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                      ) : (
                        <X className="h-4 w-4 text-red-500 mr-2" />
                      )}
                      {feature.name}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;