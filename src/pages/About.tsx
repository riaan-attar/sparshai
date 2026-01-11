import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Heart, Users, Target, Award, Sparkles } from "lucide-react";

const team = [
  {
    name: "Dr. Sarah Chen",
    role: "Clinical Psychologist & Founder",
    bio: "15+ years in mental health, passionate about making therapy accessible to all.",
  },
  {
    name: "Michael Torres",
    role: "AI Research Lead",
    bio: "Former Google AI researcher, focused on empathetic AI systems.",
  },
  {
    name: "Dr. Emily Patel",
    role: "Chief Wellness Officer",
    bio: "Holistic health expert specializing in stress management.",
  },
];

const values = [
  {
    icon: Heart,
    title: "Compassion First",
    description: "We approach every interaction with empathy and understanding.",
  },
  {
    icon: Users,
    title: "Accessibility",
    description: "Mental health support should be available to everyone, everywhere.",
  },
  {
    icon: Target,
    title: "Evidence-Based",
    description: "Our approaches are grounded in proven therapeutic methods.",
  },
  {
    icon: Award,
    title: "Privacy & Trust",
    description: "Your data is encrypted and your conversations are confidential.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-calm">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-primary/20 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Our Story</span>
            </div>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6">
              About MindfulPath
            </h1>
            <p className="text-lg text-muted-foreground">
              We believe that everyone deserves access to mental health support.
              Our mission is to create a safe, accessible, and compassionate space
              where healing begins.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display font-bold text-3xl text-foreground mb-4">
                  Our Mission
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  MindfulPath was born from a simple belief: no one should face
                  their mental health struggles alone. We combine cutting-edge AI
                  technology with evidence-based therapeutic approaches to create
                  a platform that's always there when you need it.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our AI companion is designed to listen without judgment, provide
                  gentle guidance, and connect you with the right resources —
                  whether that's a calming meditation, a helpful article, or a
                  professional therapist.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-sage-light via-sky-light to-lavender-light flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-sage-dark flex items-center justify-center shadow-glow">
                    <Heart className="w-16 h-16 text-primary-foreground" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do at MindfulPath.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-6 bg-card rounded-2xl border border-border/50 shadow-soft hover:shadow-medium transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A diverse group of mental health professionals, technologists,
              and wellness experts united by a common goal.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member) => (
              <div
                key={member.name}
                className="text-center p-6 bg-card rounded-2xl border border-border/50 shadow-soft"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-sage-dark mx-auto mb-4 flex items-center justify-center text-primary-foreground font-bold text-2xl">
                  {member.name.charAt(0)}
                </div>
                <h3 className="font-display font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-primary mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
