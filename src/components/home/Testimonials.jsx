import React from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Jessika Borges",
    date: "2022",
    text: "Ótimo atendimento. Entrega rápida e produtos com valores negociáveis.",
    rating: 5,
  },
  {
    name: "Patrícia Alvores",
    date: "2024",
    text: "O melhor de nossa cidade em loja de material de construção",
    rating: 5,
  },
  {
    name: "Wallace Oliveira",
    date: "2020",
    text: "Local com diversos materiais de construção e atendimento exemplar.",
    rating: 5,
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#3A3D82] to-[#8184C2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            O que Dizem
            <span className="text-[#ECDE2D]"> Nossos Clientes</span>
          </h2>
          <p className="text-xl text-[#A7A8B6] max-w-3xl mx-auto">
            A satisfação dos nossos clientes é nossa maior recompensa
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Quote Icon */}
              <div className="flex justify-center mb-6">
                <div className="bg-[#ECDE2D] p-3 rounded-full">
                  <Quote className="w-6 h-6 text-[#3A3D82]" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#ECDE2D] fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-center mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="text-center">
                <h4 className="font-bold text-[#3A3D82] text-lg">
                  {testimonial.name}
                </h4>
                <p className="text-[#8184C2] font-medium">
                  {testimonial.project}
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  {testimonial.date}
                </p>
              </div>

              {/* Decorative element */}
              <div className="w-16 h-1 bg-gradient-to-r from-[#D65C3E] to-[#BA3934] rounded-full mx-auto mt-6"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-2xl border border-white border-opacity-20">
            <h3 className="text-2xl font-bold text-[var(--neutral-dark)] mb-4">
              Quer ser nosso próximo cliente satisfeito?
            </h3>
            <a 
              href="https://wa.me/5588996088200" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20B85A] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Solicite seu Orçamento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}