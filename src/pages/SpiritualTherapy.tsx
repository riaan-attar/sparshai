import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Sparkles, BookOpen, Users, MapPin, Calendar } from "lucide-react";

const SpiritualTherapy = () => {
  const holyQuotes = [
    { text: "Peace comes from within. Do not seek it without.", source: "Buddha", book: "Buddhist Teachings" },
    { text: "Be still and know that I am God.", source: "Psalms 46:10", book: "The Bible" },
    { text: "The soul is neither born, nor does it ever die.", source: "Bhagavad Gita 2.20", book: "Bhagavad Gita" },
    { text: "Verily, in the remembrance of Allah do hearts find rest.", source: "Quran 13:28", book: "The Quran" },
    { text: "Love your neighbor as yourself.", source: "Mark 12:31", book: "The Bible" },
    { text: "The mind is everything. What you think, you become.", source: "Buddha", book: "Buddhist Teachings" }
  ];

  const spiritualLeaders = [
    { name: "Dalai Lama", teaching: "Compassion and kindness are the foundation of happiness", image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=300&h=300&fit=crop" },
    { name: "Mahatma Gandhi", teaching: "Be the change you wish to see in the world", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop" },
    { name: "Mother Teresa", teaching: "Spread love everywhere you go", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop" },
    { name: "Thich Nhat Hanh", teaching: "The present moment is filled with joy and happiness", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop" }
  ];

  const nearbyEvents = [
    { name: "Morning Meditation Session", location: "Shanti Temple", date: "Every Sunday, 6:00 AM", type: "Hindu" },
    { name: "Sunday Mass", location: "St. Mary's Church", date: "Every Sunday, 9:00 AM", type: "Christian" },
    { name: "Friday Prayer", location: "Central Mosque", date: "Every Friday, 1:00 PM", type: "Islamic" },
    { name: "Kirtan Evening", location: "Gurudwara Sahib", date: "Every Saturday, 6:00 PM", type: "Sikh" },
    { name: "Buddhist Meditation", location: "Zen Center", date: "Daily, 5:00 AM", type: "Buddhist" },
    { name: "Sabbath Service", location: "Beth Israel Synagogue", date: "Every Saturday, 10:00 AM", type: "Jewish" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 mb-6">
            <Sparkles className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Spiritual Therapy
          </h1>
          <p className="text-xl md:text-2xl text-primary italic max-w-3xl mx-auto">
            "The spiritual journey is the unlearning of fear and the acceptance of love."
          </p>
        </div>
      </section>

      {/* Quotes from Holy Books */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-primary" />
            Wisdom from Holy Books
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {holyQuotes.map((quote, i) => (
              <div key={i} className="bg-card/50 border border-border rounded-xl p-6">
                <p className="text-lg text-foreground italic mb-4">"{quote.text}"</p>
                <p className="text-primary font-medium">{quote.source}</p>
                <p className="text-sm text-muted-foreground">{quote.book}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spiritual Leaders */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <Users className="w-8 h-8 text-primary" />
            Inspirations from Great Spiritual Leaders
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {spiritualLeaders.map((leader, i) => (
              <div key={i} className="bg-background/50 border border-border rounded-xl p-6 text-center">
                <img 
                  src={leader.image} 
                  alt={leader.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-primary/30"
                />
                <h3 className="text-xl font-semibold text-foreground mb-2">{leader.name}</h3>
                <p className="text-muted-foreground italic">"{leader.teaching}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Spiritual Events */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <MapPin className="w-8 h-8 text-primary" />
            Nearby Spiritual Events
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nearbyEvents.map((event, i) => (
              <div key={i} className="bg-card/50 border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-foreground">{event.name}</h3>
                  <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">{event.type}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{event.date}</span>
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

export default SpiritualTherapy;
