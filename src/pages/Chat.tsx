import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import {
  Send,
  Heart,
  RotateCcw,
  AlertCircle,
} from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const quickPrompts = [
  "I'm feeling anxious today",
  "I need someone to talk to",
  "Help me relax",
  "I can't sleep",
  "I'm feeling overwhelmed",
  "I need motivation",
];

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Hello, I'm here to support you. 💚 How are you feeling today? Remember, this is a safe space — you can share anything without judgment.",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes("anxious") || lowerMessage.includes("anxiety")) {
      return "I hear you, and anxiety can feel overwhelming. 💙 Take a slow, deep breath with me. In through your nose for 4 counts... hold for 4... and out through your mouth for 6. You're doing great. Would you like to try a guided breathing exercise, or would you prefer to talk about what's on your mind?";
    }

    if (lowerMessage.includes("sad") || lowerMessage.includes("depressed")) {
      return "I'm really sorry you're feeling this way. 💚 Your feelings are valid, and it takes courage to share them. Remember, even in dark moments, you're not alone. Would you like to talk more about what's weighing on you, or shall I share some gentle activities that might help lift your spirits?";
    }

    if (lowerMessage.includes("sleep") || lowerMessage.includes("insomnia")) {
      return "Trouble sleeping can be so frustrating. 🌙 Your mind deserves rest, and I'm here to help. Would you like me to guide you through a calming sleep meditation, or would you prefer to talk about what's keeping you awake?";
    }

    if (lowerMessage.includes("stressed") || lowerMessage.includes("overwhelmed")) {
      return "It sounds like you're carrying a heavy load right now. 💜 Let's take this one step at a time. What feels like the biggest pressure on you right now? Sometimes just naming it can help lighten the weight.";
    }

    if (lowerMessage.includes("lonely") || lowerMessage.includes("alone")) {
      return "Feeling lonely can be really painful, and I want you to know — you matter, and you're not as alone as you might feel right now. 💛 I'm here with you. Would you like to share what's been making you feel this way?";
    }

    if (lowerMessage.includes("thank") || lowerMessage.includes("helpful")) {
      return "You're so welcome. 🌸 I'm always here whenever you need to talk. Remember, taking care of your mental health is an act of courage. Is there anything else on your mind?";
    }

    if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("hey")) {
      return "Hello! 😊 It's good to see you here. How are you feeling today? I'm here to listen and support you in any way I can.";
    }

    return "Thank you for sharing that with me. 💚 Your feelings are valid, and I'm here to listen without judgment. Can you tell me more about how this has been affecting you? Sometimes talking through things can help us see them more clearly.";
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: "assistant",
      content: generateResponse(userMessage.content),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, assistantMessage]);
    setIsTyping(false);
  };

  const handleQuickPrompt = (prompt: string) => {
    setInput(prompt);
    inputRef.current?.focus();
  };

  const clearChat = () => {
    setMessages([
      {
        id: "welcome-new",
        role: "assistant",
        content:
          "Hello again! 💚 I've cleared our previous conversation. How can I support you today?",
        timestamp: new Date(),
      },
    ]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 pt-16 flex flex-col">
        {/* Chat Header */}
        <div className="border-b border-border/50 bg-card/80 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-sky flex items-center justify-center shadow-soft">
                  <Heart className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="font-display font-bold text-lg text-foreground">
                    sparsh.ai
                  </h1>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    <span className="text-sm text-muted-foreground">
                      Always here for you
                    </span>
                  </div>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={clearChat}
                className="text-muted-foreground hover:text-foreground"
              >
                <RotateCcw className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto">
          <div className="container mx-auto px-4 py-6 max-w-3xl">
            <div className="space-y-6">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  } animate-slide-up`}
                >
                  {message.role === "assistant" && (
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-sky flex items-center justify-center flex-shrink-0">
                      <Heart className="w-5 h-5 text-primary-foreground" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] p-4 rounded-2xl ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground rounded-tr-md"
                        : "bg-secondary text-foreground rounded-tl-md border border-border/50"
                    }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">
                      {message.content}
                    </p>
                    <span
                      className={`text-xs mt-2 block ${
                        message.role === "user"
                          ? "text-primary-foreground/70"
                          : "text-muted-foreground"
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex gap-3 animate-slide-up">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-sky flex items-center justify-center flex-shrink-0">
                    <Heart className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div className="bg-secondary rounded-2xl rounded-tl-md p-4 border border-border/50">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-primary rounded-full animate-bounce" />
                      <span
                        className="w-2 h-2 bg-primary rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      />
                      <span
                        className="w-2 h-2 bg-primary rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          </div>
        </div>

        {/* Quick Prompts */}
        {messages.length <= 2 && (
          <div className="border-t border-border/50 bg-card/50">
            <div className="container mx-auto px-4 py-3 max-w-3xl">
              <p className="text-xs text-muted-foreground mb-2">
                Quick prompts to get started:
              </p>
              <div className="flex flex-wrap gap-2">
                {quickPrompts.map((prompt) => (
                  <button
                    key={prompt}
                    onClick={() => handleQuickPrompt(prompt)}
                    className="px-3 py-1.5 bg-secondary border border-border/50 rounded-full text-xs text-muted-foreground hover:text-foreground hover:border-primary/30 hover:bg-primary/10 transition-all duration-200"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Input Area */}
        <div className="border-t border-border/50 bg-card/80 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4 max-w-3xl">
            {/* Disclaimer */}
            <div className="flex items-start gap-2 mb-3 p-3 bg-rose-light/30 rounded-xl border border-rose/20">
              <AlertCircle className="w-4 h-4 text-rose flex-shrink-0 mt-0.5" />
              <p className="text-xs text-muted-foreground">
                This AI is for support only, not medical advice. If you're in crisis,
                please contact emergency services or a crisis helpline.
              </p>
            </div>

            <div className="flex gap-3">
              <div className="flex-1 relative">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Share what's on your mind..."
                  rows={1}
                  className="w-full px-4 py-3 bg-secondary border border-border/50 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 text-sm placeholder:text-muted-foreground text-foreground"
                  style={{ minHeight: "48px", maxHeight: "120px" }}
                />
              </div>
              <Button
                variant="hero"
                size="icon"
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                className="w-12 h-12 rounded-2xl"
              >
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Chat;
