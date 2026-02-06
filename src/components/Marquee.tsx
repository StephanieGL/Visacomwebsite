import { Plane } from "lucide-react";

const MarqueeItem = ({ text }: { text: string }) => (
  <div className="flex items-center gap-4 px-6">
    <Plane className="w-4 h-4 text-primary" />
    <span className="text-sm font-medium text-foreground whitespace-nowrap tracking-wide">
      {text}
    </span>
  </div>
);

const Marquee = () => {
  const items = [
    "LET'S GO VISA PLANNING",
    "LET'S GO VISA PLANNING",
    "LET'S GO VISA PLANNING",
    "LET'S GO VISA PLANNING",
    "LET'S GO VISA PLANNING",
    "LET'S GO VISA PLANNING",
  ];

  return (
    <div className="bg-background border-y border-border py-4 overflow-hidden">
      <div className="flex animate-marquee">
        {/* First set */}
        {items.map((item, index) => (
          <MarqueeItem key={`first-${index}`} text={item} />
        ))}
        {/* Duplicate for seamless loop */}
        {items.map((item, index) => (
          <MarqueeItem key={`second-${index}`} text={item} />
        ))}
      </div>
    </div>
  );
};

export default Marquee;