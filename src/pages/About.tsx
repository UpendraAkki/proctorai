import { Button } from "@/components/ui/button";
import Navigation from "@/components/landing/Navigation";
import Footer from "@/components/landing/Footer";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">About Proctor AI</h1>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg mb-6">
              Proctor AI is revolutionizing academic evaluation through cutting-edge artificial intelligence technology. Our mission is to empower educators and institutions with tools that enhance the integrity and efficiency of academic assessment.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Vision</h2>
            <p className="mb-6">
              We envision a future where academic evaluation is not just efficient but also unquestionably fair and accurate. By leveraging advanced AI algorithms, we're making this vision a reality, helping institutions maintain high academic standards while saving valuable time and resources.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">What Sets Us Apart</h2>
            <ul className="list-disc pl-6 mb-6 space-y-3">
              <li>Advanced AI-powered forgery detection</li>
              <li>Comprehensive evaluation analytics</li>
              <li>Seamless integration with existing systems</li>
              <li>Time-saving automated assessment tools</li>
              <li>Robust academic integrity measures</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Commitment</h2>
            <p className="mb-6">
              At Proctor AI, we're committed to maintaining the highest standards of academic integrity while making evaluation processes more efficient. Our platform is continuously evolving, incorporating feedback from educators and institutions to better serve the academic community.
            </p>

            <div className="mt-12 text-center">
              <Link to="/">
                <Button className="mr-4">Back to Home</Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline">Contact Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;