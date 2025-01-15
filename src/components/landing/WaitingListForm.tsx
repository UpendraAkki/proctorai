import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

const WaitingListForm = () => {
  const [email, setEmail] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send this to your backend
    console.log("Email submitted:", email);
    toast({
      title: "Successfully joined waiting list!",
      description: "We'll notify you when Proctor AI launches.",
    });
    setEmail("");
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size="default" className="h-8">Join Waiting List</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Join the Waiting List</DialogTitle>
          <DialogDescription>
            Be the first to know when Proctor AI launches. Enter your email below.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit" className="w-full">Submit</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default WaitingListForm;