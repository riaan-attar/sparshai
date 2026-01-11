import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-forest opacity-90" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6">
            Ready to Start Your Healing Journey?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
            Take the first step today. Our AI companion is ready to listen, 
            support, and guide you towards better mental wellness.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/chat">
              <Button
                size="xl"
                className="gap-3 bg-white text-primary hover:bg-white/90 shadow-medium hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                Start Talking Now
              </Button>
            </Link>
            <Link to="/services">
              <Button
                variant="outline"
                size="xl"
                className="gap-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50"
              >
                Explore Services
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>

          {/* Privacy Note */}
          <p className="mt-8 text-sm text-white/60">
            🔒 Your privacy is our priority. All conversations are encrypted and confidential.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
