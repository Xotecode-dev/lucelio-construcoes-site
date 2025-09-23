import React from "react";
import { MessageCircle, ArrowRight } from "lucide-react";
import CimentoImg from "../assets/img/cimento.png";

const productCategories = [
  {
    title: "Cimento e Argamassa",
    items: ["Cimento Portland", "Argamassa AC-I", "Argamassa AC-II", "Cal Hidratada"],
    image: CimentoImg,
    color: "#D65C3E"
  },
  {
    title: "Tijolos e Blocos",
    items: ["Tijolo Cerâmico", "Bloco de Concreto", "Bloco Estrutural", "Tijolo Refratário"],
    image: "https://i.pinimg.com/736x/2f/09/33/2f0933c44f13f34950c3f635966bfc08.jpg",
    color: "#BA3934"
  },
  {
    title: "Telhas e Coberturas",
    items: ["Telha Cerâmica", "Telha Fibrocimento", "Cumeeira", "Caixa d'Água"],
    image: "https://i.pinimg.com/736x/2f/09/33/2f0933c44f13f34950c3f635966bfc08.jpg",
    color: "#3A3D82"
  },
  {
    title: "Ferragens e Ferramentas",
    items: ["Pregos", "Parafusos", "Martelo", "Furadeira"],
    image: "https://i.pinimg.com/736x/2f/09/33/2f0933c44f13f34950c3f635966bfc08.jpg",
    color: "#8184C2"
  },
  {
    title: "Tintas e Vernizes",
    items: ["Tinta Acrílica", "Tinta PVA", "Verniz", "Primer"],
    image: "https://i.pinimg.com/736x/2f/09/33/2f0933c44f13f34950c3f635966bfc08.jpg",
    color: "#ECDE2D"
  },
  {
    title: "Materiais Elétricos",
    items: ["Fios e Cabos", "Disjuntores", "Tomadas", "Interruptores"],
    image: "https://i.pinimg.com/736x/2f/09/33/2f0933c44f13f34950c3f635966bfc08.jpg",
    color: "#D65C3E"
  }
];

export default function Products() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#3A3D82] to-[#8184C2] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Nossos Produtos
            </h1>
            <p className="text-xl text-[#A7A8B6] max-w-3xl mx-auto">
              Catálogo completo com os melhores materiais de construção do mercado
            </p>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {productCategories.map((category, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="md:flex">
                  {/* Image */}
                  <div className="md:w-1/2">
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="md:w-1/2 p-8">
                    <h3 className="text-2xl font-bold text-[#3A3D82] mb-4">
                      {category.title}
                    </h3>
                    
                    <ul className="space-y-2 mb-6">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center gap-2 text-gray-600">
                          <div 
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: category.color }}
                          ></div>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <a 
                      href="https://wa.me/5588996088200" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg"
                      style={{ backgroundColor: category.color }}
                    >
                      <MessageCircle className="w-4 h-4" />
                      Solicitar Orçamento
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 text-center">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#3A3D82] mb-4">
                Não encontrou o que procura?
              </h3>
              <p className="text-gray-600 mb-6">
                Entre em contato conosco! Temos muito mais produtos disponíveis.
              </p>
              <a 
                href="https://wa.me/5588996088200" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20B85A] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-3"
              >
                <MessageCircle className="w-5 h-5" />
                Falar com Especialista
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}