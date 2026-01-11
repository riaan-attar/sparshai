import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { MessageSquare, Heart, BookOpen, Play } from "lucide-react";

const TalkingTherapy = () => {
  const benefits = [
    { title: "Safe Space", desc: "Express your feelings without judgment in a confidential environment" },
    { title: "Gain Perspective", desc: "A therapist helps you see situations from different angles" },
    { title: "Develop Coping Skills", desc: "Learn practical strategies to manage stress and emotions" },
    { title: "Improve Relationships", desc: "Better communication skills lead to healthier connections" },
    { title: "Process Trauma", desc: "Work through difficult experiences at your own pace" },
    { title: "Build Self-Awareness", desc: "Understand your patterns, triggers, and behaviors" }
  ];

  const blogs = [
    { title: "The Power of Talking: Why Therapy Works", url: "https://www.psychologytoday.com", source: "Psychology Today" },
    { title: "How Talking Therapy Changed My Life", url: "https://www.mind.org.uk", source: "Mind UK" },
    { title: "Breaking the Stigma Around Mental Health", url: "https://www.nami.org", source: "NAMI" },
    { title: "Finding the Right Therapist for You", url: "https://www.healthline.com", source: "Healthline" }
  ];

  const videos = [
    { id: "NQcYZplTXnQ", title: "What is Talk Therapy?" },
    { id: "tIATzLf-y04", title: "Benefits of Counseling" },
    { id: "rkZl2gsLup4", title: "Your First Therapy Session" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 mb-6">
            <MessageSquare className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Talking Therapy
          </h1>
          <p className="text-xl md:text-2xl text-primary italic max-w-3xl mx-auto">
            "Sometimes the bravest thing you can do is ask for help. Your voice matters, and your story deserves to be heard."
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <Heart className="w-8 h-8 text-primary" />
            About Talking Therapy
          </h2>
          <div className="bg-card/50 border border-border rounded-xl p-8">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Talking therapy, also known as psychotherapy or counseling, is a way of treating emotional 
              difficulties by talking to a trained professional. It provides a safe, confidential space 
              where you can explore your feelings, thoughts, and behaviors.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you are dealing with anxiety, depression, relationship issues, or just need someone 
              to talk to, talking therapy can help you understand yourself better and develop healthier 
              ways of coping with life's challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Why It's Important */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8">Why It's Important</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="bg-background/50 border border-border rounded-xl p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blogs Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-primary" />
            Recommended Blogs & Articles
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {blogs.map((blog, i) => (
              <a 
                key={i} 
                href={blog.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-card/50 border border-border rounded-xl p-6 hover:border-primary/50 transition-colors block"
              >
                <h3 className="text-xl font-semibold text-foreground mb-2">{blog.title}</h3>
                <p className="text-primary text-sm">{blog.source}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Videos */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <Play className="w-8 h-8 text-primary" />
            Educational Videos
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, i) => (
              <div key={i} className="bg-background/50 border border-border rounded-xl overflow-hidden">
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

export default TalkingTherapy;
