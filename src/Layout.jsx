import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, MessageCircle, MapPin, Mail, Instagram, Facebook, Clock } from "lucide-react";
import { Button } from "./components/ui/button.jsx";

export default function Layout({ children, currentPageName }) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to={"Home"} className="flex items-center">
              <div className="bg-gradient-to-r from-[#3A3D82] to-[#8184C2] text-white px-4 py-2 rounded-lg font-bold text-xl">
                Lucélio
              </div>
              <span className="ml-2 text-[#3A3D82] font-semibold text-lg">Construções</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link to={"Home"} className="text-gray-700 hover:text-[#3A3D82] transition-colors font-medium">
                Início
              </Link>
              <Link to={"Products"} className="text-gray-700 hover:text-[#3A3D82] transition-colors font-medium">
                Produtos
              </Link>
              <Link to={"About"} className="text-gray-700 hover:text-[#3A3D82] transition-colors font-medium">
                Sobre Nós
              </Link>
              <Link to={"Contact"} className="text-gray-700 hover:text-[#3A3D82] transition-colors font-medium">
                Contato
              </Link>
            </nav>

            {/* WhatsApp CTA */}
            <a 
              href="https://wa.me/5588996088200" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20B85A] text-white px-4 py-2 rounded-lg flex items-center gap-2 font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">Orçamento</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#3A3D82] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-white text-[#3A3D82] px-3 py-2 rounded font-bold text-lg">
                  Lucélio
                </div>
                <span className="ml-2 font-semibold">Construções</span>
              </div>
              <p className="text-[#A7A8B6] mb-4">
                Sua parceira de confiança em materiais de construção há 20 anos.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-[#A7A8B6] hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-[#A7A8B6] hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Contato</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[#A7A8B6]">
                  <Phone className="w-4 h-4" />
                  <span>(11) 99999-9999</span>
                </div>
                <div className="flex items-center gap-2 text-[#A7A8B6]">
                  <Mail className="w-4 h-4" />
                  <span>contato@lucelioconstrucoes.com.br</span>
                </div>
                <div className="flex items-start gap-2 text-[#A7A8B6]">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>Rua das Construções, 123<br />Centro - São Paulo/SP</span>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Horário de Funcionamento</h3>
              <div className="space-y-2 text-[#A7A8B6]">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <div>
                    <p>Seg a Sex: 7h às 18h</p>
                    <p>Sábado: 7h às 16h</p>
                    <p>Domingo: Fechado</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
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
              <p>&copy; 2024 Lucélio Construções. Todos os direitos reservados.</p>
              <p className="mt-2 md:mt-0">CNPJ: 12.345.678/0001-90</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}