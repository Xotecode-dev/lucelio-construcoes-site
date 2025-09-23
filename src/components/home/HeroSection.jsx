import React from "react";
import { Button } from "../ui/button";
import { MessageCircle, Award, Users, Clock } from "lucide-react";
import Frente from "../../assets/img/imagem da frente.png"

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#E1E0EB] to-[#A7A8B6] py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-[#3A3D82] to-transparent"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-[#3A3D82] mb-6 leading-tight">
              Materiais de 
              <span className="text-[#D65C3F]"> Qualidade</span><br />
              para sua Obra
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl">
              Há 20 anos fornecendo os melhores materiais de construção 
              com preços competitivos e atendimento personalizado.
            </p>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap gap-6 mb-8 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-[#3A3D82]">
                <Award className="w-5 h-5 text-[#ECDE2D]" />
                <span className="font-semibold">20 Anos</span>
              </div>
              <div className="flex items-center gap-2 text-[#3A3D82]">
                <Users className="w-5 h-5 text-[#ECDE2D]" />
                <span className="font-semibold">5000+ Clientes</span>
              </div>
              <div className="flex items-center gap-2 text-[#3A3D82]">
                <Clock className="w-5 h-5 text-[#ECDE2D]" />
                <span className="font-semibold">Entrega Rápida</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="https://wa.me/5588996088200" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20B85A] text-white px-8 py-4 rounded-xl flex items-center justify-center gap-3 font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <MessageCircle className="w-5 h-5" />
                Solicitar Orçamento
              </a>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-[#3A3D82] text-[#3A3D82] hover:bg-[#3A3D82] hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
              >
                Ver Produtos
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src={Frente} 
                alt="Materiais de Construção" 
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-[#3A3D82] text-xl mb-2">
                  Produtos de Qualidade Premium
                </h3>
                <p className="text-gray-600">
                  Das marcas mais confiáveis do mercado
                </p>
              </div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-4 -left-4 bg-[#ECDE2D] text-[#3A3D82] p-4 rounded-xl shadow-lg">
              <div className="font-bold text-2xl">+5000</div>
              <div className="text-sm font-semibold">Clientes Satisfeitos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}