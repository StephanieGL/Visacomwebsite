import { Button } from "@/components/ui/button";
import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="striped-bg-horizontal py-16 lg:py-20">
      <div className="container-wide mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground text-center md:text-left">
            JOIN OUR MONTHLY<br className="hidden md:block" /> NEWSLETTER
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <input
              type="email"
              placeholder="email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-background border-2 border-foreground rounded-full px-6 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary min-w-[280px]"
            />
            <Button 
              className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 py-6 text-sm font-semibold tracking-wide"
            >
              SUBSCRIBE
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;