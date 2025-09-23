import React from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import CimentoImg from "../../assets/img/cimento.png";

const categories = [
  {
    title: "Cimento e Argamassa",
    description: "Cimentos, argamassas, cal e produtos para fundação",
    image: CimentoImg,
    color: "#D65C3E"
  },
  {
    title: "Tijolos e Blocos",
    description: "Tijolos cerâmicos, blocos de concreto e estruturais",
    image: "",
    color: "#BA3934"
  },
  {
    title: "Telhas e Coberturas",
    description: "Telhas cerâmicas, fibrocimento e acessórios",
    image: "",
    color: "#3A3D82"
  },
  {
    title: "Ferragens e Ferramentas",
    description: "Pregos, parafusos, ferramentas e acessórios",
    image: "",
    color: "#8184C2"
  },
  {
    title: "Tintas e Vernizes",
    description: "Tintas para parede, madeira e proteção",
    image: "",
    color: "#ECDE2D"
  },
  {
    title: "Materiais Elétricos",
    description: "Fios, cabos, disjuntores e instalações",
    image: "",
    color: "#D65C3E"
  }
];

export default function ProductCategories() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#E1E0EB] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#3A3D82] mb-6">
            Nossos 
            <span className="text-[#D65C3E]"> Produtos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Amplo catálogo com tudo que você precisa para sua construção ou reforma
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
            >
              {/* Image */}
              <div className="relative overflow-hidden bg-white h-48">
                <img 
                  src={CimentoImg} 
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#3A3D82] mb-3">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* CTA Button */}
                <a 
                  href="https://wa.me/5588996088200" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                  style={{ backgroundColor: category.color }}
                >
                  <MessageCircle className="w-4 h-4" />
                  Solicitar Orçamento
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>

              {/* Decorative bottom border */}
              <div 
                className="h-2"
                style={{ backgroundColor: category.color }}
              ></div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 bg-white p-2 rounded-2xl shadow-lg">
            <span className="text-[#3A3D82] font-semibold text-lg px-4">
              Quer ver todos os produtos?
            </span>
            <a 
              href="https://wa.me/5588996088200" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#3A3D82] hover:bg-[#8184C2] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2"
            >
              Fale Conosco
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}