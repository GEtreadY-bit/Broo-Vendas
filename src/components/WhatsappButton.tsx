
import { useEffect } from 'react';
import gsap from 'gsap';

const WhatsappButton = () => {
  useEffect(() => {
    // Animate WhatsApp button entry
    gsap.fromTo(
      ".whatsapp-button",
      { scale: 0.8, opacity: 0 },
      { 
        scale: 1, 
        opacity: 1, 
        duration: 0.6, 
        ease: "elastic.out(1, 0.5)",
        delay: 1.5
      }
    );
    
    // Add hover animation
    const button = document.querySelector(".whatsapp-button");
    
    button?.addEventListener("mouseenter", () => {
      gsap.to(".whatsapp-button", { 
        scale: 1.1, 
        duration: 0.3, 
        ease: "power1.out" 
      });
    });
    
    button?.addEventListener("mouseleave", () => {
      gsap.to(".whatsapp-button", { 
        scale: 1, 
        duration: 0.3, 
        ease: "power1.out" 
      });
    });
    
  }, []);

  return (
    <a
      href="https://wa.me/244944264319" // Replace with actual WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button fixed bottom-6 right-6 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg flex items-center justify-center"
      aria-label="Contato pelo WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path
          d="M17.6 6.32A7.85 7.85 0 0 0 12.04 4a7.94 7.94 0 0 0-7.95 7.95c0 1.43.37 2.82 1.08 4.05l-1.15 4.18 4.29-1.13a7.92 7.92 0 0 0 3.79.96h.01a7.95 7.95 0 0 0 7.95-7.94c0-2.12-.83-4.12-2.34-5.63v-.12zm-5.56 12.2h-.01a6.6 6.6 0 0 1-3.36-.92l-.24-.14-2.49.65.66-2.41-.16-.25a6.59 6.59 0 0 1-1.01-3.49 6.6 6.6 0 0 1 6.6-6.6c1.76 0 3.42.69 4.66 1.94a6.57 6.57 0 0 1 1.94 4.66 6.6 6.6 0 0 1-6.6 6.6l.01-.04zm3.68-4.93c-.2-.1-1.18-.58-1.36-.65-.18-.07-.32-.1-.45.1-.13.2-.5.65-.62.78-.11.14-.23.15-.43.05-.2-.1-.85-.31-1.62-.99-.6-.53-1-1.2-1.12-1.4-.12-.2 0-.31.08-.41.1-.1.2-.25.3-.37.1-.12.13-.21.2-.35.07-.14.03-.25-.01-.36-.05-.1-.44-1.06-.61-1.45-.16-.38-.32-.33-.43-.33-.12 0-.25-.02-.38-.02a.72.72 0 0 0-.53.24c-.18.2-.69.67-.69 1.64 0 .96.7 1.9.8 2.03.1.13 1.4 2.13 3.39 2.99.47.2.84.33 1.13.42.48.15.9.13 1.24.08.38-.06 1.17-.48 1.33-.95.17-.46.17-.86.12-.95-.04-.09-.18-.14-.37-.24z"
        />
      </svg>
    </a>
  );
};

export default WhatsappButton;
