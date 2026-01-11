import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Headphones,
  BookOpen,
  Activity,
  Smile,
  MessageSquare,
  Stethoscope,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Headphones,
    title: "Audio Therapy",
    description: "Guided meditations & relaxation sounds",
    color: "bg-sky-light text-sky",
  },
  {
    icon: BookOpen,
    title: "Reading Therapy",
    description: "Motivational articles & affirmations",
    color: "bg-lavender-light text-lavender",
  },
  {
    icon: Activity,
    title: "Yoga Therapy",
    description: "Stress-relief poses & breathing",
    color: "bg-primary/20 text-primary",
  },
  {
    icon: Smile,
    title: "Laughing Therapy",
    description: "Mood-lifting content & activities",
    color: "bg-peach-light text-peach",
  },
  {
    icon: MessageSquare,
    title: "Talking Therapy",
    description: "Guided self-reflection sessions",
    color: "bg-mint-light text-mint",
  },
  {
    icon: Stethoscope,
    title: "Consultant Doctor",
    description: "Professional mental health support",
    color: "bg-rose-light text-rose",
  },
];

const ServicesPreview = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
            Explore Our Therapy Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose from a variety of evidence-based therapeutic approaches 
            designed to support your unique mental health journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to="/services"
              className="group p-4 bg-card/80 backdrop-blur-sm rounded-2xl border border-border/50 hover:bg-card hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`w-12 h-12 ${service.color} rounded-xl flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display font-semibold text-sm text-foreground text-center mb-1">
                {service.title}
              </h3>
              <p className="text-xs text-muted-foreground text-center">
                {service.description}
              </p>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/services">
            <Button variant="calm" size="lg" className="gap-2">
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
