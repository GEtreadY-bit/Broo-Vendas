
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { AspectRatio } from "./ui/aspect-ratio";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const tl = gsap.timeline();
    
    if (heroRef.current) {
      // Animate hero elements
      tl.fromTo(
        ".hero-text h1",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );
      
      tl.fromTo(
        ".hero-text p",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.6"
      );
      
      tl.fromTo(
        ".hero-text .btn-primary",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        "-=0.6"
      );
      
      tl.fromTo(
        ".hero-image",
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 1, ease: "power2.out" },
        "-=0.8"
      );
      
      // Add floating animation to the image
      gsap.to(".hero-image", {
        y: -15,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
    }
  }, []);

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-20 pb-12 bg-gradient-to-br from-cantina-cream via-white to-cantina-rose/20"
    >
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="hero-text order-2 lg:order-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight text-cantina-brown mb-6">
            Cuide da sua pele <br />
            <span className="text-gradient">naturalmente</span>
          </h1>
          <p className="text-cantina-text-light text-lg mb-8 max-w-lg">
            Produtos artesanais de skincare, feitos com ingredientes naturais 
            selecionados para nutrir e realçar a beleza da sua pele.
          </p>
          <Link to="/products" className="btn-primary">
            Ver Produtos
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              className="w-5 h-5 ml-2"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M14 5l7 7m0 0l-7 7m7-7H3" 
              />
            </svg>
          </Link>
        </div>
        
        <div className="hero-image order-1 lg:order-2 mx-auto max-w-md">
          <div className="relative">
            <div className="absolute inset-0 -z-10 bg-cantina-sage/20 rounded-full blur-3xl transform scale-75 translate-x-1/4 -translate-y-1/4"></div>
            <AspectRatio ratio={1/1} className="rounded-2xl shadow-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Produtos naturais para a pele" 
                className="object-cover w-full h-full"
              />
            </AspectRatio>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor" 
          className="w-6 h-6 text-cantina-brown"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
