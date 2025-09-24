import React from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import CimentoImg from "../../assets/img/cimento.png";
import { colors } from "../theme/colors";
import Corredor from "../../assets/img/corredor.png"
import Tintas from "../../assets/img/tintas.png"

const categories = [
  {
    title: "Cimento e Argamassa",
    description: "Cimentos, argamassas, cal e produtos para fundação",
    image: CimentoImg,
    color: colors.accent.main
  },
  {
    title: "Tijolos e Blocos",
    description: "Tijolos cerâmicos, blocos de concreto e estruturais",
    image: "https://i.pinimg.com/736x/80/0c/e8/800ce80a37aaa08f67768dfb1a7b040a.jpg",
    color: colors.accent.dark
  },
  {
    title: "Telhas e Coberturas",
    description: "Telhas cerâmicas, fibrocimento e acessórios",
    image: "https://i.pinimg.com/736x/5e/66/08/5e66084149a7b4ea614be5b31cbe1650.jpg",
    color: colors.primary.main
  },
  {
    title: "Lajes e Pré-moldados",
    description: "Lajes, blocos, vigas e estruturas pré-moldadas",
    image: "https://i.pinimg.com/736x/bc/2e/4d/bc2e4d10fb3d0f58c16828c5eb96e438.jpg",
    color: colors.primary.light
  },
  {
    title: "Tintas e Vernizes",
    description: "Tintas para parede, madeira e proteção",
    image: Tintas,
    color: colors.warning
  },
  {
    title: "Materiais Elétricos",
    description: "Fios, cabos, disjuntores e instalações",
    image: "https://i.pinimg.com/736x/22/08/a4/2208a438414acfd98b56f110b7e0f19b.jpg",
    color: colors.accent.main
  }
];

export default function ProductCategories() {
  return (
    <section 
      className="linear bg-gradient-to-b from-[var(--neutral-lightest)] to-[var(--neutral-dark)] z-1 relative overflow-hidden"
    >
      <img 
        src={Corredor}
        alt="Corredor da Loja"
        className="absolute top-auto left-0 w-full h-full object-cover opacity-15 z-0"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-1 relative py-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span style={{ color: colors.primary.main }}>Nossos </span>
            <span style={{ color: colors.accent.main }}>Produtos</span>
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
              <div className="relative overflow-hidden h-48">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6 grid grid-rows-3 justify-between h-56">
                <h3 className="text-xl font-bold mb-3" style={{ color: colors.primary.main }}>
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
                  className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 bg-[var(--color-whatsapp)]"
                >
                  <MessageCircle className="w-4 h-4" />
                  Solicitar Orçamento
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>

              {/* Decorative bottom border */}
              <div 
                className="h-2 bg-[var(--primary-main)] rounded-b-xl top-10"
              ></div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 bg-white p-2 rounded-2xl shadow-lg">
            <span className="font-semibold text-lg px-4" style={{ color: colors.primary.main }}>
              Quer ver todos os produtos?
            </span>
            <a 
              href="https://wa.me/5588996088200" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2"
              style={{ backgroundColor: colors.primary.main }}
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