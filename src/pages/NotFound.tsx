
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-serif font-bold text-cantina-text-dark mb-4">404</h1>
          <p className="text-xl text-cantina-text-light mb-8">
            Oops! Página não encontrada
          </p>
          <Link 
            to="/" 
            className="inline-block bg-cantina-sage hover:bg-cantina-brown text-white font-medium py-3 px-8 rounded-md transition-colors"
          >
            Voltar ao Início
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
