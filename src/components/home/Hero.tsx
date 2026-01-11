import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles, Heart } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Subtle animated dots */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 animate-float" style={{ animationDelay: "0s" }}>
          <div className="w-2 h-2 bg-primary/40 rounded-full" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float" style={{ animationDelay: "1s" }}>
          <div className="w-3 h-3 bg-lavender/40 rounded-full" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 animate-float" style={{ animationDelay: "2s" }}>
          <div className="w-2 h-2 bg-sky/40 rounded-full" />
        </div>
        <div className="absolute bottom-1/4 right-1/3 animate-float" style={{ animationDelay: "3s" }}>
          <div className="w-2 h-2 bg-peach/40 rounded-full" />
        </div>
      </div>

      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/80 backdrop-blur-sm rounded-full border border-border/50 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">
              AI-Powered Mental Health Support
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-foreground mb-6 animate-slide-up">
            You don't have to{" "}
            <span className="relative">
              <span className="relative z-10 bg-gradient-to-r from-primary via-sky to-lavender bg-clip-text text-transparent">
                face it alone
              </span>
              <span className="absolute bottom-2 left-0 right-0 h-3 bg-primary/20 -rotate-1 rounded" />
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            A safe, calming space where you can talk, heal, and grow. 
            Our AI companion is here to listen without judgment, 24/7.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Link to="/chat">
              <Button variant="hero" size="xl" className="gap-3">
                <MessageCircle className="w-5 h-5" />
                Talk to AI Now
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="xl" className="gap-2">
                <Heart className="w-5 h-5" />
                Explore Therapies
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">100% Private & Secure</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-sky rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
              <span className="text-sm text-muted-foreground">Available 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-lavender rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
              <span className="text-sm text-muted-foreground">Non-Judgmental Support</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
