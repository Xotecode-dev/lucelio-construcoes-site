import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, MessageCircle, MapPin, Mail, Instagram, Facebook, Clock, Menu, X } from "lucide-react";
import { colors } from "./components/theme/colors.jsx";

// Importado o ícone X para fechar o menu
// Importado o ícone Menu para abrir o menu

// A importação de Button não foi usada no header original, mas mantida
// caso seja necessária em outro local.
// import { Button } from "./components/ui/button.jsx"; 

export default function Layout({ children }) {
  // 1. Estado para controlar se o menu mobile está aberto ou fechado
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 2. Função para alternar o estado do menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // 3. Array de links para reutilização
  const navLinks = [
    { to: "Home", label: "Início" },
    { to: "Products", label: "Produtos" },
    { to: "About", label: "Sobre Nós" },
    { to: "Contact", label: "Contato" },
  ];

  useEffect(() => {
      const root = document.documentElement;
  
      root.style.setProperty('--primary-light', colors.primary.light);
      root.style.setProperty('--primary-main', colors.primary.main);
      root.style.setProperty('--primary-dark', colors.primary.dark);
      root.style.setProperty('--primary-red', colors.primary.red);

      root.style.setProperty('--accent-main', colors.accent.main);
      root.style.setProperty('--accent-dark', colors.accent.dark);

      root.style.setProperty('--color-warning', colors.warning);

      root.style.setProperty('--neutral-lightest', colors.neutral.lightest);
      root.style.setProperty('--neutral-light', colors.neutral.light);
      root.style.setProperty('--neutral-gray', colors.neutral.gray);
      root.style.setProperty('--neutral-dark', colors.neutral.dark);
      root.style.setProperty('--neutral-darkest', colors.neutral.darkest);

      root.style.setProperty('--color-success', colors.success);
      root.style.setProperty('--color-error', colors.error);
      root.style.setProperty('--color-whatsapp', colors.whatsapp);
      root.style.setProperty('--color-white', colors.white);
      root.style.setProperty('--color-black', colors.black);
    }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to={"Home"} className="flex items-center" onClick={() => setIsMenuOpen(false)}>
              <div className="bg-gradient-to-r from-[var(--accent-main)] to-[var(--accent-dark)] text-white px-4 py-2 rounded-lg font-bold text-xl">
                Lucélio
              </div>
              <span className="ml-2 text-[#3A3D82] font-semibold text-lg">Construções</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-gray-700 hover:text-[#3A3D82] transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              {/* WhatsApp CTA (Visível em Mobile também) */}
              <a 
                href="https://wa.me/5588996088200" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20B85A] text-white px-4 py-2 rounded-lg flex items-center gap-2 font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="hidden sm:inline">Orçamento</span>
              </a>

              {/* Botão do Menu Hamburguer (Aparece somente em Mobile) */}
              <button 
                onClick={toggleMenu} 
                className="md:hidden text-[#3A3D82] p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
              >
                {/* Altera o ícone baseado no estado do menu */}
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* --- Menu Mobile (Aparece abaixo do Header) --- */}
        <nav 
          // Classes de transição para animação suave
          className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden z-40 ${
            // Condicional para mostrar/esconder
            isMenuOpen ? 'max-h-60 opacity-100 border-t border-gray-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col space-y-2 p-4">
            {navLinks.map((link) => (
              <Link
                key={`mobile-${link.to}`}
                to={link.to}
                // Adiciona um estilo que destaca o link
                className="text-gray-800 hover:bg-gray-50 py-2 px-3 rounded-md font-medium transition-colors border-l-4 border-transparent hover:border-[#3A3D82]"
                onClick={toggleMenu} // Fecha o menu ao clicar em um link
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
        {/* --- Fim Menu Mobile --- */}

      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer (Mantido inalterado) */}
      <footer className="bg-[#3A3D82] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col items-center md:grid md:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="flex flex-col items-center">
              <div className="flex items-center mb-4">
                <div className="bg-white text-[#3A3D82] px-3 py-2 rounded font-bold text-lg">
                  Lucélio
                </div>
                <span className="ml-2 font-semibold">Construções</span>
              </div>
              <p className="text-[#A7A8B6] mb-4 text-center">
                Sua parceira de confiança em materiais de construção há 20 anos.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/lucelioconstrucoes" target="_blank" className="text-[#A7A8B6] hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/lucelioconstrucoes/" target="_blank" className="text-[#A7A8B6] hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="text-center">
              <h3 className="font-semibold text-lg mb-4 text-center">Contato</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-center gap-2 text-[#A7A8B6]">
                  <Phone className="w-4 h-4" />
                  <span>(88) 99608-8200</span>
                </div>
                <div className="flex items-center justify-center  gap-2 text-[#A7A8B6]">
                  <Mail className="w-4 h-4" />
                  <span>lucelioconstrucoes@hotmail.com</span>
                </div>
                <div className="flex justify-center gap-2 text-[#A7A8B6]">
                  <div className="flex flex-col items-center">
                    <span className="flex justify-center gap-2">
                      <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />   
                      R. Padre Mororó, 1053</span>
                    <span>Bairro da Caixa D'água Ipu - CE</span>   
                  </div>
                                   
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="flex flex-col text-center">
              <h3 className="font-semibold text-lg mb-4">Horário de Funcionamento</h3>
              <div className="flex flex-col justify-center items-center space-y-2 text-[#A7A8B6]">
                  <Clock className="w-4 h-4" />
                <div className="flex items-center justify-center gap-2">
                  <div className="text-center">
                    <p>Seg a Sex: 7h às 18h</p>
                    <p>Sábado: 7h às 13h</p>
                    <p>Domingo: Fechado</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h3 className="font-semibold text-lg mb-4">Links Rápidos</h3>
              <div className="space-y-2">
                <Link to={"Products"} className="block text-[#A7A8B6] hover:text-white transition-colors">
                  Nossos Produtos
                </Link>
                <Link to={"About"} className="block text-[#A7A8B6] hover:text-white transition-colors">
                  Sobre a Empresa
                </Link>
                <Link to={"Contact"} className="block text-[#A7A8B6] hover:text-white transition-colors">
                  Entre em Contato
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#8184C2] bg-[#2A2D5F]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-[#A7A8B6]">
              <p>&copy; 2025 Lucélio Construções. Todos os direitos reservados.</p>
              <p className="mt-2 md:mt-0">CNPJ: 07.660.463/0001-29</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}