import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import {
  Send,
  Heart,
  RotateCcw,
  AlertCircle,
} from "lucide-react";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize Gemini AI - for testing purposes only
// In production, move this to a backend service
const API_KEY = "AIzaSyCoC2Tgad_3_-tefANqvnCfoidVBeYKhRA";
const genAI = new GoogleGenerativeAI(API_KEY);

const SYSTEM_PROMPT = `You are sparsh.ai, a compassionate and empathetic mental health support companion. Your role is to:
- Listen with empathy and without judgment
- Provide emotional support and validation
- Offer gentle coping strategies and mindfulness techniques
- Use warm, caring language with occasional emojis (💚, 💙, 🌸, ✨)
- Keep responses concise but meaningful (2-4 sentences usually)
- Never provide medical diagnoses or replace professional help
- If someone mentions self-harm or crisis, gently encourage them to reach out to emergency services or a crisis helpline

Remember: You're a supportive friend, not a therapist. Be warm, genuine, and helpful.`;

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface ChatMessage {
  role: "user" | "model";
  parts: { text: string }[];
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

  const generateAIResponse = async (userMessage: string, chatHistory: Message[]): Promise<string> => {
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
      
      // Build conversation history for context
      const history: ChatMessage[] = chatHistory
        .filter(msg => msg.id !== "welcome")
        .map(msg => ({
          role: msg.role === "user" ? "user" : "model",
          parts: [{ text: msg.content }]
        }));

      const chat = model.startChat({
        history: [
          {
            role: "user",
            parts: [{ text: "Please follow these instructions for our conversation: " + SYSTEM_PROMPT }]
          },
          {
            role: "model", 
            parts: [{ text: "I understand. I'm sparsh.ai, and I'm here to provide compassionate mental health support. I'll listen with empathy, offer gentle coping strategies, and be a supportive presence. How can I help you today? 💚" }]
          },
          ...history
        ],
      });

      const result = await chat.sendMessage(userMessage);
      const response = result.response;
      return response.text();
    } catch (error) {
      console.error("Error generating AI response:", error);
      return "I'm having a little trouble connecting right now. 💙 Please try again in a moment. Remember, I'm here for you.";
    }
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
    const currentMessages = [...messages, userMessage];
    setInput("");
    setIsTyping(true);

    try {
      const aiResponse = await generateAIResponse(userMessage.content, currentMessages);
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: aiResponse,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "I'm sorry, I couldn't process that. 💚 Please try again.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
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
