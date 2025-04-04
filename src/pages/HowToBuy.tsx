
import { useEffect } from "react";
import Layout from "../components/Layout";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const steps = [
  {
    number: "01",
    title: "Escolha os Produtos",
    description: "Navegue pelo nosso catálogo e escolha os produtos que deseja adquirir.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
    )
  },
  {
    number: "02",
    title: "Entre em Contato",
    description: "Envie uma mensagem pelo WhatsApp informando os produtos desejados, quantidade e seu endereço.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
      </svg>
    )
  },
  {
    number: "03",
    title: "Confirme o Pagamento",
    description: "Realize o pagamento por Express ou transferência bancária e envie o comprovante.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    )
  },
  {
    number: "04",
    title: "Receba em Casa",
    description: "Após a confirmação do pagamento, enviaremos seu pedido por entrega.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    )
  }
];

const HowToBuy = () => {
  useEffect(() => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    
    // Animate title
    gsap.fromTo(
      ".how-to-buy-title",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      }
    );
    
    // Animate steps
    gsap.fromTo(
      ".step-card",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".steps-container",
          start: "top 75%",
        }
      }
    );
    
    // Animate FAQ section
    gsap.fromTo(
      ".faq-title",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".faq-section",
          start: "top 75%",
        }
      }
    );
    
    gsap.fromTo(
      ".faq-item",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".faq-content",
          start: "top 80%",
        }
      }
    );
  }, []);

  return (
    <Layout>
      <div className="pt-24 pb-16">
        <div className="container-custom">
          {/* Hero Section */}
          <div className="text-center mb-16 how-to-buy-title">
            <h1 className="text-4xl md:text-5xl font-serif text-cantina-brown mb-4">
              Como Comprar
            </h1>
            <p className="text-cantina-text-light max-w-2xl mx-auto">
              Adquirir os produtos da BROO-VENDAS é simples e prático.
              Siga os passos abaixo para realizar sua compra.
            </p>
          </div>
          
          {/* Steps Section */}
          <div className="steps-container grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {steps.map((step, index) => (
              <div key={index} className="step-card glass-card p-8 relative overflow-hidden">
                <span className="absolute -right-4 -top-4 text-6xl font-serif font-bold text-cantina-sage/10">
                  {step.number}
                </span>
                <div className="flex items-start gap-6">
                  <div className="text-cantina-sage flex-shrink-0">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-medium text-cantina-brown mb-3">
                      {step.title}
                    </h3>
                    <p className="text-cantina-text-light">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Direct Purchase CTA */}
          <div className="bg-cantina-mint/30 rounded-2xl p-8 md:p-12 text-center mb-20">
            <h2 className="text-2xl md:text-3xl font-serif text-cantina-brown mb-4">
              Quer fazer seu pedido agora?
            </h2>
            <p className="text-cantina-text-light max-w-2xl mx-auto mb-8">
              Entre em contato pelo WhatsApp e faça seu pedido diretamente. Estamos prontos para atendê-lo e tirar todas as suas dúvidas.
            </p>
            <a 
              href="https://wa.me/244944264319" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Comprar pelo WhatsApp
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 ml-2"
              >
                <path
                  d="M17.6 6.32A7.85 7.85 0 0 0 12.04 4a7.94 7.94 0 0 0-7.95 7.95c0 1.43.37 2.82 1.08 4.05l-1.15 4.18 4.29-1.13a7.92 7.92 0 0 0 3.79.96h.01a7.95 7.95 0 0 0 7.95-7.94c0-2.12-.83-4.12-2.34-5.63v-.12z"
                />
              </svg>
            </a>
          </div>
          
          {/* FAQ Section */}
          <div className="faq-section">
            <div className="text-center mb-12 faq-title">
              <h2 className="text-3xl font-serif text-cantina-brown mb-4">
                Perguntas Frequentes
              </h2>
              <p className="text-cantina-text-light max-w-2xl mx-auto">
                Tire suas principais dúvidas sobre o processo de compra na BROO-VENDAS.
              </p>
            </div>
            
            <div className="faq-content space-y-6 max-w-3xl mx-auto">
              {[
                {
                  question: "Qual o prazo de entrega?",
                  answer: "O prazo de entrega varia conforme a sua localização. Após a confirmação do pagamento, enviamos o pedido em até 2 dias úteis por entrega."
                },
                {
                  question: "Quais são as formas de pagamento aceitas?",
                  answer: "Aceitamos pagamentos via Express e transferência bancária. O envio do pedido é realizado após a confirmação do pagamento."
                },
                {
                  question: "Os produtos são recomentados?",
                  answer: "Sim! os produtos todos recomentados por especialistas em Dermatologia."
                },
                {
                  question: "Qual a validade dos produtos?",
                  answer: "A data de fabricação e validade está indicada no rótulo de cada produto."
                }
              ].map((item, index) => (
                <div key={index} className="faq-item glass-card p-6 rounded-xl">
                  <h3 className="text-lg font-serif font-medium text-cantina-brown mb-2">
                    {item.question}
                  </h3>
                  <p className="text-cantina-text-light">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HowToBuy;
