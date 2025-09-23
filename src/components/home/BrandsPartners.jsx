import React from "react";

const brands = [
  { name: "Votorantim", logo: "" },
  { name: "Tigre", logo: "" },
  { name: "Eternit", logo: "" },
  { name: "Suvinil", logo: "" },
  { name: "Coral", logo: "" },
  { name: "Quartzolit", logo: "" },
  { name: "Gerdau", logo: "" },
  { name: "Brasilit", logo: "" }
];

export default function BrandsPartners() {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#3A3D82] mb-4">
            Marcas
            <span className="text-[#D65C3E]"> Parceiras</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trabalhamos com as marcas mais confiáveis do mercado
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 items-center">
          {brands.map((brand, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <img 
                src={brand.logo} 
                alt={`Logo ${brand.name}`}
                className="w-full h-12 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#E1E0EB] to-[#A7A8B6] text-[#3A3D82] px-6 py-3 rounded-full font-semibold">
            <div className="w-2 h-2 bg-[#ECDE2D] rounded-full animate-pulse"></div>
            Parcerias sólidas para garantir sua satisfação
          </div>
        </div>
      </div>
    </section>
  );
}