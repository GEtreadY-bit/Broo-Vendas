
import { useEffect } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { AspectRatio } from "@/components/ui/aspect-ratio";


const produtos = [
  {
    nome: "Creme Oleoban",
    imagem: "/fotos/Imagem WhatsApp 2025-04-03 às 16.20.53_49d06144.jpg",
    descricao: "Versão maior do creme Oleoban, ideal para uso familiar ou para quem utiliza o produto diariamente.",
  },
  {
    nome: "Creme Cerave",
    imagem: "/fotos/Imagem WhatsApp 2025-04-03 às 18.45.20_9e7c5360.jpg",
    descricao: "Creme de tratamento intensivo que hidrata e restaura a barreira cutânea natural da pele.",
  },
  {
    nome: "Sabonete Oleoban",
    imagem: "/fotos/Imagem WhatsApp 2025-04-03 às 16.32.56_12d36084.jpg",
    descricao: "Sabonete suave e delicado formulado especialmente para a pele sensível dos bebês.",
  }
];
const Index = () => {
  useEffect(() => {
    // Hero section animation
    gsap.fromTo(
      ".hero-content > *",
      { 
        y: 50, 
        opacity: 0 
      },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        stagger: 0.2,
        ease: "power2.out" 
      }
    );
  }, []);
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 hero-content">
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-cantina-text-dark mb-4">
                BROO-VENDAS 
              </h1>
              <p className="text-cantina-text-light mb-8 max-w-md">
                Produtos naturais para cuidados com a pele, feitos com ingredientes selecionados para nutrir e revitalizar.
              </p>
              <Link 
                to="/products" 
                className="inline-block bg-cantina-sage hover:bg-cantina-brown text-white font-medium py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105"
              >
                Ver Produtos
              </Link>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0 animate-image-float">
              <AspectRatio ratio={16/9} className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/fotos/ChatGPT Image 3_04_2025, 15_27_56.png" 
                  alt="Produtos de skincare Cantina da Rosa" 
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      </section>
      


<section className="py-16 bg-cantina-mint">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-serif text-center text-cantina-text-dark mb-12 animate-on-scroll">
      Nossos Destaques
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {produtos.map((produto, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md animate-on-scroll">
          <AspectRatio ratio={1/1} className="bg-cantina-rose rounded-md mb-4 overflow-hidden">
            <img src={produto.imagem} alt={produto.nome} className="w-full h-full object-cover" />
          </AspectRatio>
          <h3 className="text-xl font-serif font-medium text-cantina-text-dark mb-2">
            {produto.nome}
          </h3>
          <p className="text-cantina-text-light mb-4">
            {produto.descricao}
          </p>
          <Link 
            to="/products" 
            className="text-cantina-brown hover:text-cantina-text-dark font-medium transition-colors"
          >
            Ver detalhes →
          </Link>
        </div>
      ))}
    </div>
  </div>
</section>

      
      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-serif text-cantina-text-dark mb-6">
                Sobre a BROO-VENDAS
              </h2>
              <p className="text-cantina-text-light mb-4">
                Somos uma empresa dedicada à vendas de produtos para cuidados com a pele. 
                Cada fórmula é cuidadosamente elaborada para oferecer o melhor em tratamento e bem-estar.
              </p>
              <p className="text-cantina-text-light">
                Nossos produtos são livres de componentes nocivos e aprovados por Dermatologistas.
                Valorizamos a sustentabilidade e garantimos alta qualidades em nossos produtos.
              </p>
            </div>
            <div className="md:w-1/2 animate-on-scroll">
              <div className="bg-cantina-rose p-1 rounded-lg">
                <AspectRatio ratio={4/3} className="rounded-lg overflow-hidden">
                  <img 
                    src="/fotos/Imagem WhatsApp 2025-04-03 às 17.25.44_bdb0a25d.jpg" 
                    alt="Sobre a Cantina da Rosa" 
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-cantina-mint">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-cantina-text-dark mb-6 animate-on-scroll">
            Comece sua jornada de cuidados para pele
          </h2>
          <p className="text-cantina-text-light max-w-2xl mx-auto mb-8 animate-on-scroll">
            Experimente a diferença dos produtos da BROO-VENDAS
            e descubra como a sua pele pode se sentir renovada e radiante.
          </p>
          <div className="animate-on-scroll">
            <Link 
              to="/how-to-buy" 
              className="inline-block bg-cantina-brown hover:bg-cantina-sage text-white font-medium py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105 mx-2"
            >
              Como Comprar
            </Link>
            <Link 
              to="/products" 
              className="inline-block bg-cantina-sage hover:bg-cantina-brown text-white font-medium py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105 mx-2 mt-4 md:mt-0"
            >
              Ver Produtos
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
