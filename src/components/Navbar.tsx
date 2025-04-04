
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import gsap from "gsap";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
    
    // Animate logo and nav items on mount
    const tl = gsap.timeline();
    tl.fromTo(".nav-logo", 
      { opacity: 0, y: -20 }, 
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    );
    tl.fromTo(".nav-item", 
      { opacity: 0, y: -10 }, 
      { opacity: 1, y: 0, duration: 0.4, stagger: 0.1, ease: "power2.out" },
      "-=0.3"
    );
    
    // Add scroll event listener
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-serif font-bold text-cantina-brown nav-logo">
            BROO-VENDAS
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className={`nav-item nav-link ${pathname === "/" ? "text-cantina-brown after:scale-x-100" : ""}`}>
            Início
          </Link>
          <Link to="/products" className={`nav-item nav-link ${pathname === "/products" ? "text-cantina-brown after:scale-x-100" : ""}`}>
            Produtos
          </Link>
          <Link to="/how-to-buy" className={`nav-item nav-link ${pathname === "/how-to-buy" ? "text-cantina-brown after:scale-x-100" : ""}`}>
            Como Comprar
          </Link>
          <Link to="/contact" className={`nav-item nav-link ${pathname === "/contact" ? "text-cantina-brown after:scale-x-100" : ""}`}>
            Contato
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-cantina-text-dark focus:outline-none" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? (
            <X size={24} className="transition-all" />
          ) : (
            <Menu size={24} className="transition-all" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-md transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col py-4 px-6 space-y-4">
          <Link 
            to="/" 
            className={`py-2 ${pathname === "/" ? "text-cantina-brown font-medium" : ""}`}
            onClick={toggleMenu}
          >
            Início
          </Link>
          <Link 
            to="/products" 
            className={`py-2 ${pathname === "/products" ? "text-cantina-brown font-medium" : ""}`}
            onClick={toggleMenu}
          >
            Produtos
          </Link>
          <Link 
            to="/how-to-buy" 
            className={`py-2 ${pathname === "/how-to-buy" ? "text-cantina-brown font-medium" : ""}`}
            onClick={toggleMenu}
          >
            Como Comprar
          </Link>
          <Link 
            to="/contact" 
            className={`py-2 ${pathname === "/contact" ? "text-cantina-brown font-medium" : ""}`}
            onClick={toggleMenu}
          >
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
