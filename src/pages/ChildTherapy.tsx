import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Baby, Heart, Sparkles, Play } from "lucide-react";

const ChildTherapy = () => {
  const benefits = [
    { title: "Emotional Expression", desc: "Children learn to express their feelings in healthy ways through play and activities" },
    { title: "Behavioral Improvement", desc: "Therapy helps address behavioral issues and develop positive habits" },
    { title: "Coping Skills", desc: "Kids learn age-appropriate strategies to handle stress and anxiety" },
    { title: "Social Skills", desc: "Improves communication and interaction with peers and family" },
    { title: "Self-Esteem", desc: "Builds confidence and a positive self-image in children" },
    { title: "Trauma Recovery", desc: "Safe space to process difficult experiences with professional support" }
  ];

  const babyImages = [
    "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1504151932400-72d4384f04b3?w=400&h=300&fit=crop"
  ];

  const videos = [
    { id: "RVA2N6tX2cg", title: "Child Therapy Techniques" },
    { id: "15GaKTP0gFE", title: "Play Therapy for Kids" },
    { id: "Cj3bApPQk7k", title: "Helping Children with Anxiety" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 mb-6">
            <Baby className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Child Therapy
          </h1>
          <p className="text-xl md:text-2xl text-primary italic max-w-3xl mx-auto">
            "Every child deserves a chance to grow, heal, and thrive. Early support creates lasting positive change."
          </p>
        </div>
      </section>

      {/* How It Helps */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <Heart className="w-8 h-8 text-primary" />
            How Child Therapy Helps
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="bg-card/50 border border-border rounded-xl p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Happy Children Gallery */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <Sparkles className="w-8 h-8 text-primary" />
            Joy of Childhood
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {babyImages.map((img, i) => (
              <div key={i} className="rounded-xl overflow-hidden border border-border">
                <img 
                  src={img} 
                  alt={`Happy child ${i + 1}`}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Videos */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <Play className="w-8 h-8 text-primary" />
            Educational Videos for Parents
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, i) => (
              <div key={i} className="bg-card/50 border border-border rounded-xl overflow-hidden">
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-foreground font-medium">{video.title}</h3>
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

export default ChildTherapy;
