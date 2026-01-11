import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-primary/20">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Ready to Start Your Healing Journey?
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Take the first step today. Our AI companion is ready to listen, 
            support, and guide you towards better mental wellness.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/chat">
              <Button
                variant="hero"
                size="xl"
                className="gap-3"
              >
                <MessageCircle className="w-5 h-5" />
                Start Talking Now
              </Button>
            </Link>
            <Link to="/services">
              <Button
                variant="outline"
                size="xl"
                className="gap-2"
              >
                Explore Services
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>

          {/* Privacy Note */}
          <p className="mt-8 text-sm text-muted-foreground">
            🔒 Your privacy is our priority. All conversations are encrypted and confidential.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
