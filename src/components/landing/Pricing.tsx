import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight, Check, X } from "lucide-react";
import { useState } from "react";
import WaitingListForm from "./WaitingListForm";

const Pricing = () => {
  const [billingInterval, setBillingInterval] = useState<"monthly" | "yearly">("monthly");
  const [showWaitingList, setShowWaitingList] = useState(false);

  const monthlyPrice = 59;
  const yearlyPrice = 49;
  const savingsPercentage = Math.round(((monthlyPrice - yearlyPrice) / monthlyPrice) * 100);

  const pricingPlans = [
    {
      name: "Free",
      price: "$0",
      description: "For individuals to get started with basic evaluation tools",
      features: [
        { name: "10 Evaluations/month", included: true },
        { name: "Simple Evaluation", included: true },
        { name: "LMS management", included: true },
        { name: "Report Generations", included: true },
        { name: "1 GB storage", included: true },
        { name: "Forgery Detections", included: false },
        { name: "AI Rubrics Generation", included: false }
      ],
      buttonText: "Get started",
      buttonVariant: "outline" as const
    },
    {
      name: "Plus",
      price: billingInterval === "monthly" ? "$59" : "$49",
      priceDetail: `per month${billingInterval === "yearly" ? ", billed annually" : ""}`,
      description: "For teams that need advanced features and priority support",
      features: [
        { name: "Everything in Free plan", included: true },
        { name: "Unlimited Evaluations", included: true },
        { name: "Improved Evaluation", included: true },
        { name: "Bulk Evaluation", included: true },
        { name: "Forgery Detections", included: true },
        { name: "AI Rubrics Generation", included: true },
        { name: "5GB storage", included: true }
      ],
      buttonText: "Get started",
      buttonVariant: "default" as const,
      popular: true
    },
    {
      name: "Institution",
      price: "Custom",
      description: "For organizations that need enterprise-grade features and support",
      features: [
        { name: "Everything in Plus plan", included: true },
        { name: "Unlimited Storage", included: true },
        { name: "Unlimited Evaluations", included: true },
        { name: "Institution Integration", included: true },
        { name: "Priority Support", included: true },
        { name: "Organization Dashboard", included: true },
        { name: "Organization Growth Metrics", included: true },
        { name: "Training", included: true }
      ],
      buttonText: "Contact sales",
      buttonVariant: "outline" as const
    }
  ];

  return (
    <section id="pricing" className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, transparent pricing</h2>
          <p className="text-lg text-muted-foreground">Choose the plan that's right for you</p>
          <div className="flex justify-center gap-2 mt-6">
            <Button
              variant={billingInterval === "monthly" ? "default" : "ghost"}
              onClick={() => setBillingInterval("monthly")}
              className={`rounded-full px-6 py-2 ${
                billingInterval === "monthly" 
                  ? "bg-primary text-primary-foreground shadow-sm" 
                  : "bg-muted/50 hover:bg-muted"
              }`}
            >
              Pay monthly
            </Button>
            <Button
              variant={billingInterval === "yearly" ? "default" : "ghost"}
              onClick={() => setBillingInterval("yearly")}
              className={`rounded-full px-6 py-2 ${
                billingInterval === "yearly" 
                  ? "bg-primary text-primary-foreground shadow-sm" 
                  : "bg-muted/50 hover:bg-muted"
              }`}
            >
              Pay yearly{" "}
              <span className="ml-1 text-sm font-normal">
                (save {savingsPercentage}%)
              </span>
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
                <WaitingListForm />
                <ul className="space-y-3 mt-8">
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