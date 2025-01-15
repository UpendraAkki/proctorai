import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [animatedWord, setAnimatedWord] = useState("Faster");
  const words = ["Faster", "Smarter", "Fair"];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedWord((current) => {
        const currentIndex = words.indexOf(current);
        return words[(currentIndex + 1) % words.length];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Grade
              <span className="block text-primary transition-all duration-300">
                {animatedWord}
              </span>
              with AI <Sparkles className="inline-block w-6 h-6 text-black align-top" />
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl">
              Efficiently evaluate and analyze handwritten assignments in seconds with Proctor AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="hover-scale">Try Proctor AI for Free</Button>
              <Button size="lg" variant="outline" className="hover-scale">Request a demo</Button>
            </div>
            <div className="pt-8">
              <p className="text-sm text-muted-foreground mb-4">Trusted by teams at</p>
              <div className="flex gap-8 items-center">
                <span className="text-muted-foreground font-semibold">Company 1</span>
                <span className="text-muted-foreground font-semibold">Company 2</span>
                <span className="text-muted-foreground font-semibold">Company 3</span>
                <span className="text-muted-foreground font-semibold">Company 4</span>
              </div>
            </div>
          </div>
          <div className="relative flex justify-center items-center gap-4">
            <img 
              src="https://9e38803f74ddb504334f22284cd158ed.cdn.bubble.io/f1736939112516x452796899782004400/Writing-3--Streamline-Milano.png"
              alt="Student writing"
              className="w-[350px] h-auto rounded-lg transform scale-x-[-1]"
            />
            <img 
              src="https://9e38803f74ddb504334f22284cd158ed.cdn.bubble.io/f1736938607195x638189399219338600/Teacher-Grading-Papersprojects--Streamline-Milano.png"
              alt="Teacher grading papers"
              className="w-[400px] h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;