
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import gsap from "gsap";

const categories = ["Todos", "Hidratantes", "Séruns", "Máscaras", "Limpeza", "Kits"];

// Products data with updated product list
const productsData = [
  {
    id: 1,
    name: "Creme Oleoban (pequeno)",
    price: "7500",
    description: "Creme hidratante de tamanho pequeno, ideal para uso diário e fácil transporte.",
    image: "fotos/Imagem WhatsApp 2025-04-03 às 16.19.26_59881041.jpg",
    category: "Hidratantes"
  },
  {
    id: 2,
    name: "Creme Cerave",
    price: "23000",
    description: "Creme de tratamento intensivo que hidrata e restaura a barreira cutânea natural da pele.",
    image: "fotos/Imagem WhatsApp 2025-04-03 às 18.45.20_9e7c5360.jpg",
    category: "Hidratantes"
  },  
  {
    id: 3,
    name: "Creme Estricure",
    price: "3000",
    description: "Creme específico para tratamento de estrias, ajudando a reduzir sua aparência.",
    image: "fotos/ChatGPT Image 4_04_2025, 19_56_03.png",
    category: "Hidratantes"
  },
  {
    id: 4,
    name: "Creme ButsMax",
    price: "2000",
    description: "Creme especial para firmeza e volume dos seios e glúteos, com fórmula nutritiva.",
    image: "fotos/Imagem WhatsApp 2025-04-03 às 17.03.15_c40fe0fc.jpg",
    category: "Hidratantes"
  },
  {
    id: 5,
    name: "Creme Leoderme",
    price: "9500",
    description: "Kit completo com creme e sabonete para bebê, com fórmula suave e hipoalergênica.",
    image: "fotos/Imagem WhatsApp 2025-04-04 às 19.58.06_00c80d16.jpg",
    category: "Hidratantes"
  },
  {
    id: 6,
    name: "Creme ATL",
    price: "38000",
    description: "Creme premium com ativos avançados para tratamento intensivo e rejuvenescimento da pele.",
    image: "fotos/Imagem WhatsApp 2025-04-03 às 19.03.04_9c772798.jpg",
    category: "Hidratantes"
  },
  {
    id: 7,
    name: "Sabonete Oleoban",
    price: "5000",
    description: "Sabonete suave e delicado formulado especialmente para a pele sensível dos bebês.",
    image: "fotos/Imagem WhatsApp 2025-04-03 às 16.32.56_12d36084.jpg",
    category: "Limpeza"
  },
  {
    id: 8,
    name: "Kit Oleoban",
    price: "26000",
    description: "Kit completo com creme diário,gel de banho e sabonete para uma rotina de cuidados completa.",
    image: "fotos/Imagem WhatsApp 2025-04-04 às 22.19.23_3f588831.jpg",
    category: "Kits"
  },
  {
    id: 9,
    name: "Creme Oleoban (grande)",
    price: "22000",
    description: "Versão maior do creme Oleoban, ideal para uso familiar ou para quem utiliza o produto diariamente.",
    image: "fotos/Imagem WhatsApp 2025-04-03 às 16.20.53_49d06144.jpg",
    category: "Hidratantes"
  },
  {
    id: 10,
    name: "Creme Oleoban (medio)",
    price: "12000",
    description: "Ideal para uso familiar ou para quem utiliza o produto diariamente.",
    image: "fotos/Imagem WhatsApp 2025-04-04 às 21.55.13_d40e77f2.jpg",
    category: "Hidratantes"
  },
  {
    id: 11,
    name: "Bum Blast (xarope)",
    price: "1500",
    description: "É vitamina especialmente formulada para ajudar no ganho de volume corporal",
    image: "fotos/Imagem WhatsApp 2025-04-04 às 21.58.09_c2709a05.jpg",
    category: "Hidratantes"
  }
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  
  useEffect(() => {
    // Filter products based on selected category
    if (selectedCategory === "Todos") {
      setFilteredProducts(productsData);
    } else {
      setFilteredProducts(productsData.filter(product => product.category === selectedCategory));
    }
    
    // Animate products when filtered
    gsap.fromTo(
      ".product-grid .product-card",
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.5, 
        stagger: 0.1, 
        ease: "power2.out" 
      }
    );
  }, [selectedCategory]);

  return (
    <Layout>
      <div className="pt-24 pb-16 bg-gradient-to-b from-cantina-mint/20 to-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif text-cantina-brown mb-4">
              Nossos Produtos
            </h1>
            <p className="text-cantina-text-light max-w-2xl mx-auto">
              Descubra nossa linha completa de produtos para cuidados com a pele,
              desenvolvidos para nutrir, proteger e realçar sua beleza natural.
            </p>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-cantina-sage text-white"
                    : "bg-white text-cantina-text-dark hover:bg-cantina-mint hover:text-cantina-brown"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Products Grid */}
          <div className="product-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <div key={product.id} className="product-card">
                <ProductCard 
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  description={product.description}
                  index={index}
                />
              </div>
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-cantina-text-light">
                Nenhum produto encontrado nesta categoria.
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Products;
