
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { AspectRatio } from "./ui/aspect-ratio";

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  description: string;
  index: number;
}

const ProductCard = ({ image, name, price, description, index }: ProductCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    
    if (card) {
      // Set up hover animations
      card.addEventListener("mouseenter", () => {
        gsap.to(card.querySelector(".product-image"), {
          scale: 1.05,
          duration: 0.4,
          ease: "power2.out"
        });
        
        gsap.to(card.querySelector(".product-info"), {
          y: -5,
          duration: 0.3,
          ease: "power2.out"
        });
      });
      
      card.addEventListener("mouseleave", () => {
        gsap.to(card.querySelector(".product-image"), {
          scale: 1,
          duration: 0.4,
          ease: "power2.out"
        });
        
        gsap.to(card.querySelector(".product-info"), {
          y: 0,
          duration: 0.3,
          ease: "power2.out"
        });
      });
    }
  }, []);

  // Format price with thousand separators
  const formattedPrice = price.includes("AOA") 
    ? price 
    : `${price.replace(/\B(?=(\d{3})+(?!\d))/g, ".")} AOA`;

  return (
    <div 
      ref={cardRef}
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="overflow-hidden">
        <AspectRatio ratio={4/3}>
          <img 
            src={image} 
            alt={name} 
            className="product-image w-full h-full object-cover transition-all duration-300"
          />
        </AspectRatio>
      </div>
      <div className="product-info p-6 space-y-3 transition-all duration-300">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-serif font-medium text-cantina-brown">{name}</h3>
          <span className="text-lg font-medium text-cantina-sage">{formattedPrice}</span>
        </div>
        <p className="text-cantina-text-light text-sm">{description}</p>
        <a 
          href="https://wa.me/244944264319" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-secondary text-sm py-2 px-6 inline-flex mt-3"
        >
          Comprar
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4 ml-2"
          >
            <path
              d="M17.6 6.32A7.85 7.85 0 0 0 12.04 4a7.94 7.94 0 0 0-7.95 7.95c0 1.43.37 2.82 1.08 4.05l-1.15 4.18 4.29-1.13a7.92 7.92 0 0 0 3.79.96h.01a7.95 7.95 0 0 0 7.95-7.94c0-2.12-.83-4.12-2.34-5.63v-.12z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
