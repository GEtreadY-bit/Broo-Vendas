
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Pages
import Index from "./pages/Index";
import Products from "./pages/Products";
import HowToBuy from "./pages/HowToBuy";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Create a client
const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Register plugins
    gsap.registerPlugin(ScrollTrigger);
    
    // Global initialization
    document.body.classList.add('bg-cantina-cream');
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/products" element={<Products />} />
            <Route path="/how-to-buy" element={<HowToBuy />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
