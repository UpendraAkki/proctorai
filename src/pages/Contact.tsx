import Navigation from "@/components/landing/Navigation";
import Footer from "@/components/landing/Footer";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 py-12 md:py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Have questions about Proctor AI? We're here to help! Please reach out to us via email:
          </p>
          
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="inline-flex items-center space-x-2 text-lg">
              <Mail className="w-6 h-6" />
              <a href="mailto:upendra@proctorai.io" className="text-primary hover:underline">
                upendra@proctorai.io
              </a>
            </div>
            <div className="inline-flex items-center space-x-2 text-lg">
              <Mail className="w-6 h-6" />
              <a href="mailto:virgil@proctorai.io" className="text-primary hover:underline">
                virgil@proctorai.io
              </a>
            </div>
          </div>

          <p className="mt-8 text-muted-foreground">
            We typically respond to all inquiries within 24-48 hours during business days.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;