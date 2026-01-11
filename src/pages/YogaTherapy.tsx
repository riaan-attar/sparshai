import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Activity, Heart, Sparkles, Play } from "lucide-react";

const yogaBenefits = [
  {
    title: "Reduces Stress & Anxiety",
    description: "Yoga activates the parasympathetic nervous system, lowering cortisol levels and promoting relaxation.",
    icon: "🧘",
  },
  {
    title: "Improves Mental Clarity",
    description: "Regular practice enhances focus, concentration, and cognitive function through mindful movement.",
    icon: "🧠",
  },
  {
    title: "Boosts Mood",
    description: "Yoga increases serotonin and GABA levels, naturally improving mood and reducing depression symptoms.",
    icon: "😊",
  },
  {
    title: "Better Sleep Quality",
    description: "Evening yoga routines help calm the mind and prepare the body for restful, restorative sleep.",
    icon: "😴",
  },
  {
    title: "Increases Body Awareness",
    description: "Develop a deeper connection with your body, recognizing stress signals before they escalate.",
    icon: "✨",
  },
  {
    title: "Builds Resilience",
    description: "Challenging poses teach patience and perseverance, building mental strength for life's challenges.",
    icon: "💪",
  },
];

const yogaAsanas = [
  {
    name: "Child's Pose (Balasana)",
    benefits: "Calms the mind, relieves stress, gently stretches the hips and back.",
    difficulty: "Beginner",
    image: "🧒",
  },
  {
    name: "Cat-Cow Stretch",
    benefits: "Releases spine tension, improves posture, coordinates breath with movement.",
    difficulty: "Beginner",
    image: "🐱",
  },
  {
    name: "Downward Dog (Adho Mukha Svanasana)",
    benefits: "Energizes the body, relieves back pain, calms the nervous system.",
    difficulty: "Beginner",
    image: "🐕",
  },
  {
    name: "Tree Pose (Vrikshasana)",
    benefits: "Improves balance, builds focus, strengthens legs and core.",
    difficulty: "Beginner",
    image: "🌳",
  },
  {
    name: "Warrior II (Virabhadrasana II)",
    benefits: "Builds strength and stamina, opens hips, improves concentration.",
    difficulty: "Intermediate",
    image: "⚔️",
  },
  {
    name: "Bridge Pose (Setu Bandhasana)",
    benefits: "Reduces anxiety, opens chest, strengthens back muscles.",
    difficulty: "Beginner",
    image: "🌉",
  },
  {
    name: "Legs Up The Wall (Viparita Karani)",
    benefits: "Deep relaxation, reduces swelling in legs, calms nervous system.",
    difficulty: "Beginner",
    image: "🦵",
  },
  {
    name: "Corpse Pose (Savasana)",
    benefits: "Complete relaxation, integrates practice benefits, reduces blood pressure.",
    difficulty: "Beginner",
    image: "🛏️",
  },
];

const yogaTutorials = [
  {
    title: "Yoga for Complete Beginners",
    description: "A gentle 20-minute introduction to yoga basics",
    videoId: "v7AYKMP6rOE",
  },
  {
    title: "Yoga for Stress Relief",
    description: "Release tension and calm your mind",
    videoId: "hJbRpHZr_d0",
  },
  {
    title: "Morning Yoga Flow",
    description: "Energize your body to start the day right",
    videoId: "UEEsdXn8oG8",
  },
  {
    title: "Yoga for Anxiety",
    description: "Soothing poses to ease anxious thoughts",
    videoId: "bJJWArRfKa0",
  },
  {
    title: "Bedtime Yoga for Better Sleep",
    description: "Gentle stretches to prepare for restful sleep",
    videoId: "v7SN-d4qXx0",
  },
  {
    title: "Breathing Exercises (Pranayama)",
    description: "Master breathing techniques for mental calm",
    videoId: "acUZdGd_3Dg",
  },
];

const YogaTherapy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/20 rounded-full mb-6">
            <Activity className="w-10 h-10 text-primary" />
          </div>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
            Yoga Therapy
          </h1>
          <p className="text-xl md:text-2xl text-primary font-medium mb-4">
            "The body benefits from movement, and the mind benefits from stillness."
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the ancient practice of yoga that unites body, mind, and spirit 
            for complete mental and physical wellness.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-rose/20 rounded-xl flex items-center justify-center">
              <Heart className="w-6 h-6 text-rose" />
            </div>
            <div>
              <h2 className="font-display font-bold text-2xl text-foreground">Benefits of Yoga</h2>
              <p className="text-muted-foreground">How yoga transforms your mental health</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {yogaBenefits.map((benefit, index) => (
              <div 
                key={index}
                className="p-6 bg-secondary/50 rounded-2xl border border-border/50"
              >
                <span className="text-4xl mb-4 block">{benefit.icon}</span>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Yoga Asanas Section */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-lavender/20 rounded-xl flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-lavender" />
            </div>
            <div>
              <h2 className="font-display font-bold text-2xl text-foreground">Yoga Asanas & Their Benefits</h2>
              <p className="text-muted-foreground">Essential poses for mental wellness</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {yogaAsanas.map((asana, index) => (
              <div 
                key={index}
                className="p-6 bg-secondary/50 rounded-2xl border border-border/50"
              >
                <span className="text-4xl mb-4 block">{asana.image}</span>
                <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full mb-3 ${
                  asana.difficulty === "Beginner" 
                    ? "bg-primary/20 text-primary" 
                    : "bg-peach/20 text-peach"
                }`}>
                  {asana.difficulty}
                </span>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {asana.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {asana.benefits}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Yoga Tutorials Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-sky/20 rounded-xl flex items-center justify-center">
              <Play className="w-6 h-6 text-sky" />
            </div>
            <div>
              <h2 className="font-display font-bold text-2xl text-foreground">Yoga Tutorials</h2>
              <p className="text-muted-foreground">Follow along with guided video sessions</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {yogaTutorials.map((tutorial, index) => (
              <div 
                key={index}
                className="rounded-2xl overflow-hidden border border-border/50 bg-secondary/50"
              >
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${tutorial.videoId}`}
                    title={tutorial.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-display font-semibold text-foreground mb-1">
                    {tutorial.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {tutorial.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default YogaTherapy;
