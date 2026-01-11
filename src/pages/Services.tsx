import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  Headphones,
  BookOpen,
  Activity,
  Smile,
  MessageSquare,
  Stethoscope,
  Baby,
  Leaf,
  Heart,
  Sparkles,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

const services = [
  {
    icon: Headphones,
    title: "Audio Therapy",
    description:
      "Immerse yourself in guided meditations, relaxation sounds, and stress-relief audio designed to calm your mind and body.",
    features: ["Guided meditations", "Relaxation sounds", "Sleep stories", "Breathing exercises"],
    color: "sky",
    gradient: "from-sky to-sky-light",
  },
  {
    icon: BookOpen,
    title: "Reading Therapy",
    description:
      "Explore curated articles, motivational content, and daily affirmations to nurture your emotional well-being.",
    features: ["Motivational articles", "Daily affirmations", "Emotional healing content", "Self-help guides"],
    color: "lavender",
    gradient: "from-lavender to-lavender-light",
  },
  {
    icon: Activity,
    title: "Yoga Therapy",
    description:
      "Discover beginner-friendly yoga routines and breathing exercises designed to release tension and promote inner peace.",
    features: ["Beginner-friendly poses", "Breathing exercises", "Stress relief routines", "Mindful movement"],
    color: "mint",
    gradient: "from-primary to-mint",
  },
  {
    icon: Smile,
    title: "Laughing Therapy",
    description:
      "Boost your mood with uplifting content, humor clips, and dopamine-boosting activities that bring joy.",
    features: ["Mood-lifting content", "Humor clips", "Dopamine activities", "Joy exercises"],
    color: "peach",
    gradient: "from-peach to-peach-light",
  },
  {
    icon: MessageSquare,
    title: "Talking Therapy",
    description:
      "Engage in guided self-reflection sessions and AI-led emotional conversations in a safe, judgment-free space.",
    features: ["Self-reflection", "Emotional conversations", "Venting sessions", "AI support"],
    color: "sage",
    gradient: "from-sage to-sage-light",
  },
  {
    icon: Stethoscope,
    title: "Consultant Doctor",
    description:
      "Connect with certified mental health professionals for expert guidance and personalized treatment plans.",
    features: ["Licensed therapists", "Personalized plans", "Expert guidance", "Confidential sessions"],
    color: "rose",
    gradient: "from-rose to-rose-light",
  },
  {
    icon: Baby,
    title: "Child Therapy",
    description:
      "Safe, child-friendly activities designed to help young ones understand emotions and build resilience.",
    features: ["Child-friendly UI", "Emotional learning", "Calm storytelling", "Fun exercises"],
    color: "sky",
    gradient: "from-sky to-lavender",
  },
  {
    icon: Leaf,
    title: "Spiritual Therapy",
    description:
      "Explore mindfulness practices and inner peace content designed to connect you with your deeper self.",
    features: ["Mindfulness", "Inner peace", "Spiritual reflections", "Inclusive practices"],
    color: "sage",
    gradient: "from-sage to-mint",
  },
  {
    icon: Heart,
    title: "Special Therapy",
    description:
      "Specialized support for trauma recovery, burnout, sleep improvement, and anxiety & depression management.",
    features: ["Trauma support", "Burnout recovery", "Sleep improvement", "Anxiety relief"],
    color: "lavender",
    gradient: "from-lavender to-rose",
  },
  {
    icon: MessageCircle,
    title: "AI Chatbot",
    description:
      "Your 24/7 AI companion that listens without judgment, provides support, and guides you through difficult moments.",
    features: ["24/7 availability", "Non-judgmental", "Personalized support", "Crisis detection"],
    color: "primary",
    gradient: "from-primary to-sage-dark",
    highlighted: true,
  },
];

const colorClasses = {
  primary: "bg-primary/10 text-primary border-primary/20",
  sage: "bg-sage-light text-sage-dark border-sage/20",
  lavender: "bg-lavender-light text-lavender-dark border-lavender/20",
  rose: "bg-rose-light text-destructive border-rose/20",
  sky: "bg-sky-light text-sky-dark border-sky/20",
  peach: "bg-peach-light text-peach-dark border-peach/20",
  mint: "bg-mint-light text-primary border-mint/20",
};

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-calm">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-primary/20 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">
                Holistic Mental Health Support
              </span>
            </div>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6">
              Our Therapy Services
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore our comprehensive range of evidence-based therapeutic approaches,
              each designed to support your unique mental wellness journey.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`group relative p-6 bg-card rounded-2xl border shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 overflow-hidden ${
                  service.highlighted
                    ? "border-primary/30 ring-2 ring-primary/10"
                    : "border-border/50"
                }`}
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                {/* Highlighted Badge */}
                {service.highlighted && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                    Featured
                  </div>
                )}

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-2xl ${
                      colorClasses[service.color as keyof typeof colorClasses]
                    } border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="w-7 h-7" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-xl text-foreground mb-2">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-lg"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link to={service.title === "AI Chatbot" ? "/chat" : "#"}>
                    <Button variant="calm" size="sm" className="w-full gap-2">
                      {service.title === "AI Chatbot" ? "Start Chatting" : "Explore"}
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-calm">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display font-bold text-3xl text-foreground mb-4">
              Not Sure Where to Start?
            </h2>
            <p className="text-muted-foreground mb-8">
              Talk to our AI companion. It can help you explore your feelings 
              and suggest the right therapy path for you.
            </p>
            <Link to="/chat">
              <Button variant="hero" size="xl" className="gap-3">
                <MessageCircle className="w-5 h-5" />
                Talk to AI Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
