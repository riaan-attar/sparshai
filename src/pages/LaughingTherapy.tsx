import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Smile, Lightbulb, MessageCircle, Play } from "lucide-react";

const LaughingTherapy = () => {
  const tips = [
    "Watch a funny movie or TV show daily",
    "Spend time with people who make you laugh",
    "Practice laughing yoga exercises",
    "Read funny books or comics",
    "Share jokes with friends and family",
    "Don't take yourself too seriously"
  ];

  const jokes = [
    { setup: "Why don't scientists trust atoms?", punchline: "Because they make up everything!" },
    { setup: "What do you call a fake noodle?", punchline: "An impasta!" },
    { setup: "Why did the scarecrow win an award?", punchline: "He was outstanding in his field!" },
    { setup: "What do you call a bear with no teeth?", punchline: "A gummy bear!" },
    { setup: "Why don't eggs tell jokes?", punchline: "They'd crack each other up!" },
    { setup: "What do you call a sleeping dinosaur?", punchline: "A dino-snore!" }
  ];

  const memes = [
    "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=300&fit=crop"
  ];

  const standupVideos = [
    { id: "UtV80ZdpTY0", title: "Best Stand-up Comedy Moments" },
    { id: "O9YL04v-J5U", title: "Hilarious Comedy Special" },
    { id: "Rl5JDGk3Yfw", title: "Laugh Out Loud Comedy" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 mb-6">
            <Smile className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Laughing Therapy
          </h1>
          <p className="text-xl md:text-2xl text-primary italic max-w-3xl mx-auto">
            "Laughter is the best medicine. It boosts immunity, relieves pain, and connects us to others."
          </p>
        </div>
      </section>

      {/* Why It's Important */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <Lightbulb className="w-8 h-8 text-primary" />
            Why Laughter is Important
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Reduces Stress", desc: "Laughter decreases stress hormones and triggers the release of endorphins" },
              { title: "Boosts Immunity", desc: "Regular laughter strengthens the immune system and fights illness" },
              { title: "Improves Mood", desc: "Laughing releases dopamine and serotonin, natural mood elevators" },
              { title: "Strengthens Bonds", desc: "Shared laughter creates stronger connections with others" },
              { title: "Relieves Pain", desc: "Laughter can temporarily relieve physical pain naturally" },
              { title: "Burns Calories", desc: "10-15 minutes of laughter can burn up to 40 calories" }
            ].map((item, i) => (
              <div key={i} className="bg-card/50 border border-border rounded-xl p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Basic Tips */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8">Basic Tips for More Laughter</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tips.map((tip, i) => (
              <div key={i} className="flex items-center gap-3 bg-background/50 border border-border rounded-lg p-4">
                <span className="text-2xl">😄</span>
                <p className="text-foreground">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jokes Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <MessageCircle className="w-8 h-8 text-primary" />
            Jokes Corner
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jokes.map((joke, i) => (
              <div key={i} className="bg-card/50 border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
                <p className="text-foreground font-medium mb-3">{joke.setup}</p>
                <p className="text-primary italic">{joke.punchline}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Memes Section */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8">😂 Meme Gallery</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {memes.map((meme, i) => (
              <div key={i} className="rounded-xl overflow-hidden border border-border">
                <img 
                  src={meme} 
                  alt={`Funny meme ${i + 1}`}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stand-up Comedy */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <Play className="w-8 h-8 text-primary" />
            Stand-up Comedy
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {standupVideos.map((video, i) => (
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

export default LaughingTherapy;
