import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { BookOpen, FileText, Quote, Library, BookMarked } from "lucide-react";

const articles = [
  {
    title: "Understanding Anxiety: What It Is and How to Manage It",
    excerpt: "Learn about the nature of anxiety and practical strategies to cope with it in daily life.",
    readTime: "5 min read",
    category: "Anxiety",
  },
  {
    title: "The Science of Mindfulness Meditation",
    excerpt: "Discover how mindfulness practices can physically change your brain and improve mental health.",
    readTime: "7 min read",
    category: "Mindfulness",
  },
  {
    title: "Building Resilience: Bouncing Back from Life's Challenges",
    excerpt: "Practical tips for developing emotional resilience and coping with adversity.",
    readTime: "6 min read",
    category: "Resilience",
  },
  {
    title: "The Connection Between Sleep and Mental Health",
    excerpt: "How quality sleep impacts your emotional well-being and tips for better rest.",
    readTime: "4 min read",
    category: "Sleep",
  },
  {
    title: "Breaking the Cycle of Negative Thinking",
    excerpt: "Cognitive techniques to identify and change unhelpful thought patterns.",
    readTime: "8 min read",
    category: "CBT",
  },
  {
    title: "Self-Compassion: Being Kind to Yourself",
    excerpt: "Why self-criticism doesn't work and how to develop a kinder inner voice.",
    readTime: "5 min read",
    category: "Self-Care",
  },
];

const motivationalQuotes = [
  {
    quote: "You are stronger than you know. More capable than you ever dreamed. And you are loved more than you could possibly imagine.",
    author: "Unknown",
  },
  {
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    quote: "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle",
  },
  {
    quote: "You don't have to control your thoughts. You just have to stop letting them control you.",
    author: "Dan Millman",
  },
  {
    quote: "Mental health is not a destination, but a process. It's about how you drive, not where you're going.",
    author: "Noam Shpancer",
  },
  {
    quote: "What mental health needs is more sunlight, more candor, and more unashamed conversation.",
    author: "Glenn Close",
  },
];

const books = [
  {
    title: "Man's Search for Meaning",
    author: "Viktor E. Frankl",
    description: "A profound exploration of finding purpose even in the darkest circumstances.",
    category: "Psychology",
  },
  {
    title: "The Gifts of Imperfection",
    author: "Brené Brown",
    description: "Let go of who you think you're supposed to be and embrace who you are.",
    category: "Self-Help",
  },
  {
    title: "Mindfulness in Plain English",
    author: "Bhante Gunaratana",
    description: "A classic guide to mindfulness meditation practices and techniques.",
    category: "Meditation",
  },
  {
    title: "Lost Connections",
    author: "Johann Hari",
    description: "Uncovering the real causes of depression and unexpected solutions.",
    category: "Mental Health",
  },
];

const bookSummaries = [
  {
    title: "Atomic Habits - Summary",
    author: "James Clear",
    keyPoints: [
      "Small habits compound into remarkable results",
      "Focus on systems, not goals",
      "Make good habits obvious, attractive, easy, and satisfying",
      "Identity change is the key to lasting habits",
    ],
  },
  {
    title: "The Power of Now - Summary",
    author: "Eckhart Tolle",
    keyPoints: [
      "The present moment is all you ever have",
      "The mind creates suffering through past regrets and future anxieties",
      "Observe your thoughts without judgment",
      "True peace comes from accepting the present",
    ],
  },
  {
    title: "Thinking, Fast and Slow - Summary",
    author: "Daniel Kahneman",
    keyPoints: [
      "Two systems of thinking: fast (intuitive) and slow (deliberate)",
      "Cognitive biases affect our decisions",
      "Overconfidence is a common mental trap",
      "Understanding our biases helps us make better choices",
    ],
  },
];

const ReadingTherapy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-lavender/20 rounded-full mb-6">
            <BookOpen className="w-10 h-10 text-lavender" />
          </div>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
            Reading Therapy
          </h1>
          <p className="text-xl md:text-2xl text-primary font-medium mb-4">
            "A book is a dream you hold in your hands."
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore articles, quotes, books, and summaries that inspire, heal, and transform 
            your perspective on life and mental wellness.
          </p>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="font-display font-bold text-2xl text-foreground">Mental Health Articles</h2>
              <p className="text-muted-foreground">Informative reads for your well-being</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <div 
                key={index}
                className="p-6 bg-secondary/50 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 cursor-pointer group"
              >
                <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full mb-4">
                  {article.category}
                </span>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {article.excerpt}
                </p>
                <span className="text-xs text-muted-foreground">{article.readTime}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Motivational Quotes Section */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-peach/20 rounded-xl flex items-center justify-center">
              <Quote className="w-6 h-6 text-peach" />
            </div>
            <div>
              <h2 className="font-display font-bold text-2xl text-foreground">Motivational Quotes</h2>
              <p className="text-muted-foreground">Words that inspire and uplift</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {motivationalQuotes.map((item, index) => (
              <div 
                key={index}
                className="p-6 bg-secondary/50 rounded-2xl border border-border/50 relative"
              >
                <Quote className="w-8 h-8 text-primary/20 absolute top-4 left-4" />
                <p className="text-foreground italic pt-6 mb-4 leading-relaxed">
                  "{item.quote}"
                </p>
                <p className="text-sm text-muted-foreground font-medium">— {item.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Books Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-sky/20 rounded-xl flex items-center justify-center">
              <Library className="w-6 h-6 text-sky" />
            </div>
            <div>
              <h2 className="font-display font-bold text-2xl text-foreground">Recommended Books</h2>
              <p className="text-muted-foreground">Essential reads for mental wellness</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {books.map((book, index) => (
              <div 
                key={index}
                className="p-6 bg-secondary/50 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                <span className="inline-block px-3 py-1 bg-sky/20 text-sky text-xs font-medium rounded-full mb-4">
                  {book.category}
                </span>
                <h3 className="font-display font-semibold text-xl text-foreground mb-1">
                  {book.title}
                </h3>
                <p className="text-sm text-primary mb-3">By {book.author}</p>
                <p className="text-muted-foreground">
                  {book.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Summaries Section */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-mint/20 rounded-xl flex items-center justify-center">
              <BookMarked className="w-6 h-6 text-mint" />
            </div>
            <div>
              <h2 className="font-display font-bold text-2xl text-foreground">Book Summaries</h2>
              <p className="text-muted-foreground">Key insights in minutes</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {bookSummaries.map((summary, index) => (
              <div 
                key={index}
                className="p-6 bg-secondary/50 rounded-2xl border border-border/50"
              >
                <h3 className="font-display font-semibold text-lg text-foreground mb-1">
                  {summary.title}
                </h3>
                <p className="text-sm text-primary mb-4">By {summary.author}</p>
                <h4 className="text-sm font-semibold text-foreground mb-3">Key Takeaways:</h4>
                <ul className="space-y-2">
                  {summary.keyPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ReadingTherapy;
