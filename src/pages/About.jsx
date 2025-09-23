import React from "react";
import { Award, Users, Clock, Shield, Truck, Calculator } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#3A3D82] to-[#8184C2] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Sobre a Lucélio Construções
            </h1>
            <p className="text-xl text-[#A7A8B6] max-w-3xl mx-auto">
              20 anos construindo sonhos e fornecendo materiais de qualidade
            </p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#3A3D82] mb-6">
                Nossa História
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Fundada em 2004, a Lucélio Construções nasceu do sonho de fornecer 
                materiais de construção de alta qualidade com atendimento personalizado. 
                Começamos como um pequeno depósito e hoje somos referência na região.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Nossa missão é ser a parceira de confiança dos nossos clientes, 
                oferecendo não apenas produtos, mas soluções completas para suas 
                obras e reformas.
              </p>
              <div className="flex items-center gap-4 text-[#D65C3E] font-semibold">
                <Award className="w-6 h-6" />
                <span>Tradição e Confiança desde 2004</span>
              </div>
            </div>
            <div>
              <img 
                src="https://i.pinimg.com/736x/22/1c/a4/221ca4c44dcba6a503261ae751f08e4c.jpg"
                alt="Loja Lucélio Construções"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-[#E1E0EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#3A3D82] mb-6">
              Nossos Valores
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl text-center shadow-lg">
              <Shield className="w-12 h-12 text-[#D65C3E] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#3A3D82] mb-4">Qualidade</h3>
              <p className="text-gray-600">
                Trabalhamos com marcas reconhecidas e produtos certificados
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl text-center shadow-lg">
              <Users className="w-12 h-12 text-[#8184C2] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#3A3D82] mb-4">Atendimento</h3>
              <p className="text-gray-600">
                Atendimento personalizado e suporte técnico especializado
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl text-center shadow-lg">
              <Clock className="w-12 h-12 text-[#BA3934] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#3A3D82] mb-4">Pontualidade</h3>
              <p className="text-gray-600">
                Cumprimento rigoroso de prazos de entrega e compromissos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="py-16 bg-[#3A3D82]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              Números que Impressionam
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold text-[#ECDE2D] mb-2">20</div>
              <div>Anos de Experiência</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#ECDE2D] mb-2">5000+</div>
              <div>Clientes Satisfeitos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#ECDE2D] mb-2">1000+</div>
              <div>Produtos Diferentes</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#ECDE2D] mb-2">24h</div>
              <div>Tempo de Resposta</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}