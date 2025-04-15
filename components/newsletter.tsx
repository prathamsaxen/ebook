'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
// import { useToast } from "@/components/ui/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
//   const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (email) {
    //   toast({
    //     title: "Thanks for subscribing!",
    //     description: "You'll now receive our latest book recommendations.",
    //   });
      setEmail("");
    }
  };

  return (
    <div className="bg-accent py-14 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <Mail className="w-10 h-10 mx-auto mb-4 text-primary" />
        <h2 className="text-3xl md:text-4xl font-serif font-medium mb-3">
          Join Our Reading Community
        </h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter and be the first to know about new releases, 
          exclusive discounts, author interviews, and reading recommendations.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-grow"
            required
          />
          <Button type="submit">Subscribe</Button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
