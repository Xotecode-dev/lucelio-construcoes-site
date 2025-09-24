import React from "react";
import { Button } from "../ui/button";
import { MessageCircle, Award, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Frente from "../../assets/img/imagem da frente.png"

export default function HeroSection() {
  return (
    <section 
      className="py-20 lg:py-32 overflow-hidden bg-black flex relative"
    >
      {/* Background Pattern */}
      <img 
        src={Frente} 
        alt="Materiais de Construção" 
        className="absolute top-0 left-0 w-full h-full object-cover opacity-10"
      />
            
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" gap-12 items-center">
          {/* Content */}
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-[var(--color-white)]">Materiais de</span>{' '}
              <span className="text-[var(--accent-main)]">Qualidade</span><br />
              <span className="text-[var(--color-white)]">para sua Obra</span>
            </h1>
            <p className="text-xl text-[var(--color-white)] mb-8 max-w-2xl">
              Há 20 anos fornecendo os melhores materiais de construção 
              com preços competitivos e atendimento personalizado.
            </p>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap gap-6 mb-8 justify-center">
              <div className="flex items-center gap-2 text-[var(--color-white)]">
                <Award className="w-5 h-5 text-[var(--color-warning)]"/>
                <span className="font-semibold">20 Anos</span>
              </div>
              <div className="flex items-center gap-2 text-[var(--color-white)]">
                <Users className="w-5 h-5 text-[var(--color-warning)]"/>
                <span className="font-semibold">5000+ Clientes</span>
              </div>
              <div className="flex items-center gap-2 text-[var(--color-white)]">
                <Clock className="w-5 h-5 text-[var(--color-warning)]"/>
                <span className="font-semibold">Entrega Rápida</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://wa.me/5588996088200" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl flex items-center bg-[var(--color-whatsapp)] justify-center gap-3 font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-[var(--color-white)]"
              >
                <MessageCircle className="w-5 h-5" />
                Solicitar Orçamento
              </a>

              <Link 
                to={"/Products"}
                className="border-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 border-[var(--neutral-lightest)] text-[var(--neutral-lightest)]"
              >
                Nossos Produtos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}