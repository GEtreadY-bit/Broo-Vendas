
import { ReactNode, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsappButton from "./WhatsappButton";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Register ScrollTrigger with GSAP
    gsap.registerPlugin(ScrollTrigger);
    
    // Scroll to top on route change
    window.scrollTo(0, 0);
    
    // Basic page entry animation
    gsap.fromTo(
      "main > *",
      { 
        opacity: 0,
        y: 20
      },
      { 
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out"
      }
    );
    
    // Setup scroll animations
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    animateElements.forEach((element) => {
      gsap.fromTo(
        element,
        { 
          y: 30, 
          opacity: 0 
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
    });
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-cantina-cream">
      <Navbar />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <WhatsappButton />
      <Footer />
    </div>
  );
};

export default Layout;
