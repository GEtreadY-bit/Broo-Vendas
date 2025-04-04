
import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-cantina-mint py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-medium text-cantina-brown">BROO-VENDAS</h3>
            <p className="text-cantina-text-light max-w-xs">
              Produtos para cuidados com a pele, desenvolvidos com amor para realçar sua beleza natural.
            </p>
            <p className="text-cantina-text-light">
              Angola, Luanda-Gamek
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-medium text-cantina-brown">Links Rápidos</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-cantina-text-light hover:text-cantina-brown transition-colors">
                Início
              </Link>
              <Link to="/products" className="text-cantina-text-light hover:text-cantina-brown transition-colors">
                Produtos
              </Link>
              <Link to="/how-to-buy" className="text-cantina-text-light hover:text-cantina-brown transition-colors">
                Como Comprar
              </Link>
              <Link to="/contact" className="text-cantina-text-light hover:text-cantina-brown transition-colors">
                Contato
              </Link>
            </nav>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-medium text-cantina-brown">Siga-nos</h3>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/rosantonio22?igsh=dHk1ejRxbjNqdGZ5" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cantina-brown hover:text-cantina-sage transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=100067625144422" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cantina-brown hover:text-cantina-sage transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="mailto:rosantonio1709@gmail.com" 
                className="text-cantina-brown hover:text-cantina-sage transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-cantina-sage/30 mt-8 pt-8 text-center text-cantina-text-light text-sm">
          <p>© {new Date().getFullYear()} BROO-VENDAS. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
