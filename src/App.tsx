import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Chat from "./pages/Chat";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import AudioTherapy from "./pages/AudioTherapy";
import ReadingTherapy from "./pages/ReadingTherapy";
import YogaTherapy from "./pages/YogaTherapy";
import LaughingTherapy from "./pages/LaughingTherapy";
import TalkingTherapy from "./pages/TalkingTherapy";
import ChildTherapy from "./pages/ChildTherapy";
import SpiritualTherapy from "./pages/SpiritualTherapy";
import ConsultDoctor from "./pages/ConsultDoctor";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/audio-therapy" element={<AudioTherapy />} />
          <Route path="/services/reading-therapy" element={<ReadingTherapy />} />
          <Route path="/services/yoga-therapy" element={<YogaTherapy />} />
          <Route path="/services/laughing-therapy" element={<LaughingTherapy />} />
          <Route path="/services/talking-therapy" element={<TalkingTherapy />} />
          <Route path="/services/child-therapy" element={<ChildTherapy />} />
          <Route path="/services/spiritual-therapy" element={<SpiritualTherapy />} />
          <Route path="/services/consult-doctor" element={<ConsultDoctor />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
