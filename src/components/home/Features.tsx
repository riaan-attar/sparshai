import { Brain, Shield, Clock, Heart, Users, Sparkles } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Understanding",
    description: "Our empathetic AI learns from your conversations to provide personalized, meaningful support.",
    color: "primary",
  },
  {
    icon: Shield,
    title: "Complete Privacy",
    description: "Your conversations are encrypted and private. We never share your data with anyone.",
    color: "sage",
  },
  {
    icon: Clock,
    title: "Available 24/7",
    description: "Day or night, our AI companion is always ready to listen and support you.",
    color: "lavender",
  },
  {
    icon: Heart,
    title: "No Judgment",
    description: "Express yourself freely in a safe space designed for healing and growth.",
    color: "rose",
  },
  {
    icon: Users,
    title: "Professional Guidance",
    description: "Access to certified therapists and mental health professionals when you need more.",
    color: "sky",
  },
  {
    icon: Sparkles,
    title: "Holistic Therapies",
    description: "Audio therapy, yoga, meditation, and more — all in one calming platform.",
    color: "peach",
  },
];

const colorClasses = {
  primary: "bg-primary/20 text-primary",
  sage: "bg-primary/15 text-primary",
  lavender: "bg-lavender-light text-lavender",
  rose: "bg-rose-light text-rose",
  sky: "bg-sky-light text-sky",
  peach: "bg-peach-light text-peach",
};

const Features = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
            Why Choose sparsh.ai?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We combine cutting-edge AI technology with proven therapeutic approaches 
            to create a supportive environment for your mental wellness journey.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 bg-secondary/50 rounded-2xl border border-border/50 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`w-12 h-12 rounded-xl ${
                  colorClasses[feature.color as keyof typeof colorClasses]
                } flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
