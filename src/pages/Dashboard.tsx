import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  MessageCircle,
  Activity,
  BookOpen,
  Headphones,
  Heart,
  TrendingUp,
  Calendar,
  Settings,
  User,
  ChevronRight,
  Sparkles,
  Sun,
  Moon,
  Cloud,
} from "lucide-react";

const moodOptions = [
  { emoji: "😊", label: "Great", color: "bg-primary/20 text-primary" },
  { emoji: "🙂", label: "Good", color: "bg-sage-light text-sage-dark" },
  { emoji: "😐", label: "Okay", color: "bg-sky-light text-sky-dark" },
  { emoji: "😔", label: "Low", color: "bg-lavender-light text-lavender-dark" },
  { emoji: "😢", label: "Struggling", color: "bg-rose-light text-destructive" },
];

const recentChats = [
  {
    id: 1,
    preview: "I've been feeling anxious about work lately...",
    date: "Today, 2:30 PM",
  },
  {
    id: 2,
    preview: "Thank you for the breathing exercise...",
    date: "Yesterday",
  },
  {
    id: 3,
    preview: "I couldn't sleep last night...",
    date: "Jan 9, 2024",
  },
];

const savedTherapies = [
  { id: 1, title: "Morning Meditation", type: "Audio", duration: "10 min" },
  { id: 2, title: "Anxiety Relief Yoga", type: "Video", duration: "15 min" },
  { id: 3, title: "Daily Affirmations", type: "Reading", duration: "5 min" },
];

const Dashboard = () => {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          {/* Welcome Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <Sun className="w-4 h-4 text-peach" />
              <span>Good afternoon</span>
            </div>
            <h1 className="font-display font-bold text-3xl text-foreground mb-2">
              Welcome back, Friend
            </h1>
            <p className="text-muted-foreground">
              How are you feeling today? Let's check in.
            </p>
          </div>

          {/* Mood Check-in Card */}
          <div className="mb-8 p-6 bg-card rounded-2xl border border-border/50 shadow-soft">
            <h2 className="font-display font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
              <Heart className="w-5 h-5 text-primary" />
              Daily Mood Check-in
            </h2>
            <p className="text-sm text-muted-foreground mb-4">
              How are you feeling right now?
            </p>
            <div className="flex flex-wrap gap-3">
              {moodOptions.map((mood, index) => (
                <button
                  key={mood.label}
                  onClick={() => setSelectedMood(index)}
                  className={`flex flex-col items-center gap-1 p-3 rounded-xl border-2 transition-all duration-200 ${
                    selectedMood === index
                      ? `${mood.color} border-current`
                      : "bg-muted border-transparent hover:border-border"
                  }`}
                >
                  <span className="text-2xl">{mood.emoji}</span>
                  <span className="text-xs font-medium">{mood.label}</span>
                </button>
              ))}
            </div>
            {selectedMood !== null && (
              <div className="mt-4 p-4 bg-sage-light/50 rounded-xl animate-fade-in">
                <p className="text-sm text-foreground">
                  {selectedMood <= 1 && "That's wonderful to hear! 🌟 Keep nurturing your well-being."}
                  {selectedMood === 2 && "It's okay to feel neutral. Would you like to talk?"}
                  {selectedMood >= 3 && "I'm here for you. 💚 Would you like to chat or try a calming exercise?"}
                </p>
                <Link to="/chat" className="mt-3 inline-block">
                  <Button variant="calm" size="sm" className="gap-2">
                    <MessageCircle className="w-4 h-4" />
                    Talk to AI
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Quick Actions Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Link
              to="/chat"
              className="group p-4 bg-gradient-to-br from-primary to-sage-dark rounded-2xl text-primary-foreground shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
            >
              <MessageCircle className="w-8 h-8 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-sm mb-1">Talk to AI</h3>
              <p className="text-xs text-primary-foreground/80">24/7 support</p>
            </Link>

            <Link
              to="/services"
              className="group p-4 bg-card border border-border/50 rounded-2xl hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
            >
              <Headphones className="w-8 h-8 mb-3 text-sky group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-sm text-foreground mb-1">Audio Therapy</h3>
              <p className="text-xs text-muted-foreground">Meditations</p>
            </Link>

            <Link
              to="/services"
              className="group p-4 bg-card border border-border/50 rounded-2xl hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
            >
              <Activity className="w-8 h-8 mb-3 text-primary group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-sm text-foreground mb-1">Yoga Therapy</h3>
              <p className="text-xs text-muted-foreground">Exercises</p>
            </Link>

            <Link
              to="/services"
              className="group p-4 bg-card border border-border/50 rounded-2xl hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
            >
              <BookOpen className="w-8 h-8 mb-3 text-lavender group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-sm text-foreground mb-1">Reading</h3>
              <p className="text-xs text-muted-foreground">Articles</p>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Chats */}
            <div className="bg-card rounded-2xl border border-border/50 shadow-soft overflow-hidden">
              <div className="p-4 border-b border-border/50 flex items-center justify-between">
                <h2 className="font-display font-semibold text-foreground flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  Recent Conversations
                </h2>
                <Link to="/chat" className="text-sm text-primary hover:underline">
                  View all
                </Link>
              </div>
              <div className="divide-y divide-border/50">
                {recentChats.map((chat) => (
                  <Link
                    key={chat.id}
                    to="/chat"
                    className="block p-4 hover:bg-muted/50 transition-colors"
                  >
                    <p className="text-sm text-foreground truncate mb-1">
                      {chat.preview}
                    </p>
                    <p className="text-xs text-muted-foreground">{chat.date}</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Saved Therapies */}
            <div className="bg-card rounded-2xl border border-border/50 shadow-soft overflow-hidden">
              <div className="p-4 border-b border-border/50 flex items-center justify-between">
                <h2 className="font-display font-semibold text-foreground flex items-center gap-2">
                  <Heart className="w-5 h-5 text-rose" />
                  Saved Therapies
                </h2>
                <Link to="/services" className="text-sm text-primary hover:underline">
                  Browse all
                </Link>
              </div>
              <div className="divide-y divide-border/50">
                {savedTherapies.map((therapy) => (
                  <div
                    key={therapy.id}
                    className="p-4 flex items-center justify-between hover:bg-muted/50 transition-colors cursor-pointer"
                  >
                    <div>
                      <p className="text-sm font-medium text-foreground mb-1">
                        {therapy.title}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {therapy.type} • {therapy.duration}
                      </p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Wellness Tip */}
          <div className="mt-8 p-6 bg-gradient-to-r from-lavender-light to-sky-light rounded-2xl border border-lavender/20">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-soft">
                <Sparkles className="w-6 h-6 text-lavender" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground mb-1">
                  Today's Wellness Tip
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  "Take a few minutes today to practice gratitude. Write down three things
                  you're thankful for — no matter how small. This simple practice can shift
                  your perspective and boost your mood." 🌱
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
