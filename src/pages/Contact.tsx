import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import gsap from "gsap";

const contactInfo = [
  {
    icon: <Phone size={24} />,
    title: "Telefone",
    content: "(+244) 944-264-319",
    link: "tel:+244944264319"
  },
  {
    icon: <Mail size={24} />,
    title: "E-mail",
    content: "rosantonio1709@gmail.com",
    link: "mailto:rosantonio1709@gmail.com"
  },
  {
    icon: <Instagram size={24} />,
    title: "Instagram",
    content: "@rosantonio22",
    link: "https://instagram.com/rosantonio22?igsh=dHk1ejRxbjNqdGZ5"
  },
  {
    icon: <Facebook size={24} />,
    title: "Facebook",
    content: "/BROO-VENDAS",
    link: "https://www.facebook.com/profile.php?id=100067625144422"
  },
  {
    icon: <MapPin size={24} />,
    title: "Endereço",
    content: "Angola, Luanda-Gamek",
    link: "https://maps.google.com/?q=Luanda+Gamek+Angola"
  },
  {
    icon: <Mail size={24} />,
    title: "IBAN",
    content: "AO06.0044.0000.7050.8541.1018.5",
    link: "#" // não redireciona
  }
];

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyIBAN = () => {
    navigator.clipboard.writeText(contactInfo[5].content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(
      ".contact-title",
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        ease: "power3.out" 
      }
    );
    
    tl.fromTo(
      ".contact-card",
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.6, 
        stagger: 0.1, 
        ease: "power2.out" 
      },
      "-=0.4"
    );
  }, []);

  const firstGroup = contactInfo.slice(0, 4);
  const secondGroup = contactInfo.slice(4); // endereço e IBAN

  return (
    <Layout>
      <div className="pt-24 pb-16 bg-gradient-to-b from-cantina-rose/20 to-white">
        <div className="container-custom">
          <div className="text-center mb-16 contact-title">
            <h1 className="text-4xl md:text-5xl font-serif text-cantina-brown mb-4">
              Entre em Contato
            </h1>
            <p className="text-cantina-text-light max-w-2xl mx-auto">
              Estamos sempre prontos para atendê-la em nossa loja em Angola, Luanda-Gamek. 
              Entre em contato pelos canais abaixo para mais informações sobre nossos produtos.
            </p>
          </div>

          {/* Primeiros 4 cards em grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {firstGroup.map((info, index) => (
              <a 
                key={index} 
                href={info.link}
                target={info.link.startsWith('http') ? "_blank" : "_self"}
                rel={info.link.startsWith('http') ? "noopener noreferrer" : ""}
                className="contact-card glass-card p-6 flex flex-col items-center text-center transition-all transform hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="text-cantina-sage mb-3">{info.icon}</div>
                <h3 className="text-lg font-serif font-medium text-cantina-brown mb-1">
                  {info.title}
                </h3>
                <p className="text-cantina-text-light">{info.content}</p>
              </a>
            ))}
          </div>

          {/* Endereço e IBAN centralizados */}
          <div className="flex flex-col md:flex-row justify-center gap-6">
            {/* Endereço */}
            <a 
              href={secondGroup[0].link}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card glass-card p-6 flex flex-col items-center text-center transition-all max-w-xs w-full transform hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="text-cantina-sage mb-3">{secondGroup[0].icon}</div>
              <h3 className="text-lg font-serif font-medium text-cantina-brown mb-1">
                {secondGroup[0].title}
              </h3>
              <p className="text-cantina-text-light">{secondGroup[0].content}</p>
            </a>

            {/* IBAN com botão de copiar */}
            <div 
              onClick={copyIBAN}
              className="contact-card glass-card p-6 flex flex-col items-center text-center transition-all max-w-xs w-full cursor-pointer transform hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="text-cantina-sage mb-3">{secondGroup[1].icon}</div>
              <h3 className="text-lg font-serif font-medium text-cantina-brown mb-1">
                {secondGroup[1].title}
              </h3>
              <p className="text-cantina-text-light">{secondGroup[1].content}</p>
              {copied && (
                <span className="text-green-500 mt-2 text-sm">IBAN copiado!</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
