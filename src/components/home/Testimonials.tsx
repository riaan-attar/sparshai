import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Anxiety Recovery",
    content:
      "MindfulPath has been a game-changer for me. The AI chatbot feels like talking to a friend who truly understands. It helped me through some really tough nights.",
    rating: 5,
    avatar: "S",
  },
  {
    name: "James K.",
    role: "Stress Management",
    content:
      "I was skeptical at first, but the audio therapy sessions are incredibly soothing. I use them every morning and my stress levels have dropped significantly.",
    rating: 5,
    avatar: "J",
  },
  {
    name: "Emily R.",
    role: "Depression Support",
    content:
      "The combination of AI support and professional guidance is exactly what I needed. It's like having a safety net that's always there for you.",
    rating: 5,
    avatar: "E",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
            Stories of Healing
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real experiences from people who found support and hope through MindfulPath.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="relative p-6 bg-card rounded-2xl border border-border/50 shadow-soft hover:shadow-medium transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <Quote className="w-4 h-4 text-primary" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-peach text-peach"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-sage-dark flex items-center justify-center text-primary-foreground font-semibold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
