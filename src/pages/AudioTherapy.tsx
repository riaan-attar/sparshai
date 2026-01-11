import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Headphones, Music, Mic, BookOpen } from "lucide-react";

const AudioTherapy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-sky/20 rounded-full mb-6">
            <Headphones className="w-10 h-10 text-sky" />
          </div>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
            Audio Therapy
          </h1>
          <p className="text-xl md:text-2xl text-primary font-medium mb-4">
            "Sound heals the soul when words fail."
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Immerse yourself in calming sounds, guided meditations, insightful podcasts, 
            and enriching audiobooks designed to nurture your mental well-being.
          </p>
        </div>
      </section>

      {/* Songs Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
              <Music className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="font-display font-bold text-2xl text-foreground">Relaxing Music</h2>
              <p className="text-muted-foreground">Curated playlists for peace and calm</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Spotify Embed - Calm Playlist */}
            <div className="rounded-2xl overflow-hidden border border-border/50">
              <iframe 
                src="https://open.spotify.com/embed/playlist/37i9dQZF1DWZd79rJ6a7lp?utm_source=generator&theme=0" 
                width="100%" 
                height="352" 
                frameBorder="0" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
                title="Calm Vibes Playlist"
              />
            </div>
            
            {/* Spotify Embed - Sleep Playlist */}
            <div className="rounded-2xl overflow-hidden border border-border/50">
              <iframe 
                src="https://open.spotify.com/embed/playlist/37i9dQZF1DWYcDQ1hSjOpY?utm_source=generator&theme=0" 
                width="100%" 
                height="352" 
                frameBorder="0" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
                title="Deep Sleep Playlist"
              />
            </div>
            
            {/* Spotify Embed - Meditation */}
            <div className="rounded-2xl overflow-hidden border border-border/50">
              <iframe 
                src="https://open.spotify.com/embed/playlist/37i9dQZF1DX9uKNf5jGX6m?utm_source=generator&theme=0" 
                width="100%" 
                height="352" 
                frameBorder="0" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
                title="Meditation Music"
              />
            </div>
            
            {/* Spotify Embed - Nature Sounds */}
            <div className="rounded-2xl overflow-hidden border border-border/50">
              <iframe 
                src="https://open.spotify.com/embed/playlist/37i9dQZF1DX4PP3DA4J0N8?utm_source=generator&theme=0" 
                width="100%" 
                height="352" 
                frameBorder="0" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
                title="Nature Sounds"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Podcasts Section */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-lavender/20 rounded-xl flex items-center justify-center">
              <Mic className="w-6 h-6 text-lavender" />
            </div>
            <div>
              <h2 className="font-display font-bold text-2xl text-foreground">Mental Health Podcasts</h2>
              <p className="text-muted-foreground">Insightful conversations for your mind</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Podcast Embed 1 */}
            <div className="rounded-2xl overflow-hidden border border-border/50">
              <iframe 
                src="https://open.spotify.com/embed/show/5rgumWEx4FsqIY8e1wJNAk?utm_source=generator&theme=0" 
                width="100%" 
                height="352" 
                frameBorder="0" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
                title="Mental Health Podcast 1"
              />
            </div>
            
            {/* Podcast Embed 2 */}
            <div className="rounded-2xl overflow-hidden border border-border/50">
              <iframe 
                src="https://open.spotify.com/embed/show/7sZS7MWZpmQMpiAYFRW7Gl?utm_source=generator&theme=0" 
                width="100%" 
                height="352" 
                frameBorder="0" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
                title="Mental Health Podcast 2"
              />
            </div>
            
            {/* Podcast Embed 3 */}
            <div className="rounded-2xl overflow-hidden border border-border/50">
              <iframe 
                src="https://open.spotify.com/embed/show/1VXcH8QHkjRcTCEd88U3ti?utm_source=generator&theme=0" 
                width="100%" 
                height="352" 
                frameBorder="0" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
                title="Mental Health Podcast 3"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Audiobooks Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-peach/20 rounded-xl flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-peach" />
            </div>
            <div>
              <h2 className="font-display font-bold text-2xl text-foreground">Audiobooks</h2>
              <p className="text-muted-foreground">Listen to transformative books for mental wellness</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Audiobook Cards with Audible Links */}
            <a 
              href="https://www.audible.com/pd/The-Power-of-Now-Audiobook/B002V0PN36" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-6 bg-secondary/50 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 group"
            >
              <h3 className="font-display font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                The Power of Now
              </h3>
              <p className="text-sm text-muted-foreground mb-3">By Eckhart Tolle</p>
              <p className="text-sm text-muted-foreground">
                A guide to spiritual enlightenment that helps you discover the importance of living in the present moment.
              </p>
              <span className="inline-block mt-4 text-primary text-sm font-medium">Listen on Audible →</span>
            </a>
            
            <a 
              href="https://www.audible.com/pd/Atomic-Habits-Audiobook/1524779261" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-6 bg-secondary/50 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 group"
            >
              <h3 className="font-display font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                Atomic Habits
              </h3>
              <p className="text-sm text-muted-foreground mb-3">By James Clear</p>
              <p className="text-sm text-muted-foreground">
                Build good habits and break bad ones with this practical guide to behavior change.
              </p>
              <span className="inline-block mt-4 text-primary text-sm font-medium">Listen on Audible →</span>
            </a>
            
            <a 
              href="https://www.audible.com/pd/The-Untethered-Soul-Audiobook/B006HU5TZC" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-6 bg-secondary/50 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 group"
            >
              <h3 className="font-display font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                The Untethered Soul
              </h3>
              <p className="text-sm text-muted-foreground mb-3">By Michael A. Singer</p>
              <p className="text-sm text-muted-foreground">
                A journey beyond yourself to discover inner peace and freedom from limiting thoughts.
              </p>
              <span className="inline-block mt-4 text-primary text-sm font-medium">Listen on Audible →</span>
            </a>
            
            <a 
              href="https://www.audible.com/pd/Feeling-Good-Audiobook/B07TTZPCRL" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-6 bg-secondary/50 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 group"
            >
              <h3 className="font-display font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                Feeling Good
              </h3>
              <p className="text-sm text-muted-foreground mb-3">By David D. Burns</p>
              <p className="text-sm text-muted-foreground">
                The clinically proven drug-free treatment for depression through cognitive therapy.
              </p>
              <span className="inline-block mt-4 text-primary text-sm font-medium">Listen on Audible →</span>
            </a>
            
            <a 
              href="https://www.audible.com/pd/The-Body-Keeps-the-Score-Audiobook/B00OAOQJXY" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-6 bg-secondary/50 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 group"
            >
              <h3 className="font-display font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                The Body Keeps the Score
              </h3>
              <p className="text-sm text-muted-foreground mb-3">By Bessel van der Kolk</p>
              <p className="text-sm text-muted-foreground">
                Understanding trauma and how it affects the brain, mind, and body for healing.
              </p>
              <span className="inline-block mt-4 text-primary text-sm font-medium">Listen on Audible →</span>
            </a>
            
            <a 
              href="https://www.audible.com/pd/10-Happier-Audiobook/B00IHNVYGQ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-6 bg-secondary/50 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 group"
            >
              <h3 className="font-display font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                10% Happier
              </h3>
              <p className="text-sm text-muted-foreground mb-3">By Dan Harris</p>
              <p className="text-sm text-muted-foreground">
                How meditation changed a skeptic's life and why it might change yours.
              </p>
              <span className="inline-block mt-4 text-primary text-sm font-medium">Listen on Audible →</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AudioTherapy;
