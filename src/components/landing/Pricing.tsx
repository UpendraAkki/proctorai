import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

const Pricing = () => {
  const [billingInterval, setBillingInterval] = useState("monthly");

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
  );
};

export default Pricing;