import React from "react";
import { Shield, Truck, Users, Award, Clock, Calculator } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Qualidade Garantida",
    description: "Trabalhamos com marcas reconhecidas e produtos certificados",
    color: "#D65C3E"
  },
  {
    icon: Truck,
    title: "Entrega Rápida",
    description: "Logística eficiente para entrega no prazo que você precisa",
    color: "#3A3D82"
  },
  {
    icon: Calculator,
    title: "Preços Competitivos",
    description: "Melhores preços do mercado com condições especiais de pagamento",
    color: "#BA3934"
  },
  {
    icon: Users,
    title: "Atendimento FPersonalizado",
    description: "Equipe especializada para te ajudar na escolha certa",
    color: "#8184C2"
  },
  {
    icon: Award,
    title: "20 Anos de Experiência",
    description: "Tradição e confiança construída ao longo de décadas",
    color: "#ECDE2D"
  },
  {
    icon: Clock,
    title: "Acompanhamento Completo",
    description: "Desde a escolha até a pós-venda, estamos com você",
    color: "#D65C3E"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#3A3D82] mb-6">
            Por que Escolher a 
            <span className="text-[#D65C3E]"> Lucélio</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mais de duas décadas construindo relacionamentos sólidos e fornecendo 
            os melhores materiais para suas obras
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-[#E1E0EB] p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
            >
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: benefit.color }}
              >
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-[#3A3D82] mb-4">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>

              {/* Decorative element */}
              <div 
                className="w-12 h-1 rounded-full mt-6 opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: benefit.color }}
              ></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <a 
            href="https://wa.me/5588996088200" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20B85A] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Fale Conosco Agora
          </a>
        </div>
      </div>
    </section>
  );
}