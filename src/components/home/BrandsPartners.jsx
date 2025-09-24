import React from "react";
import Arielle from "../../assets/img/Arielle logo transparente.png";
import Cerbras from "../../assets/img/cerbras logo transparente.png";
import Tigre from "../../assets/img/logo tigre transparente.png";
import Verbras from "../../assets/img/verbras logo transparente.png";
import Idealle from "../../assets/img/idealle logo transparente.png";
import TintasMil from "../../assets/img/tintas mil logo transparente.png";
import Mor from "../../assets/img/mor logo transparente.png";

const brands = [
  { name: "Arielle", logo: Arielle },
  { name: "Cerbras", logo: Cerbras },
  { name: "Tigre", logo: Tigre},
  { name: "Verbras", logo: Verbras },
  { name: "Idealle", logo: Idealle },
  { name: "TintasMil", logo: TintasMil },
  { name: "Mor", logo: Mor },
];

export default function BrandsPartners() {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--primary-main)] mb-4">
            Marcas
            <span className="text-[var(--accent-main)]"> Parceiras</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trabalhamos com as marcas mais confiáveis do mercado
          </p>
        </div>

        {/* Brands Grid */}
        <div className="flex flex-wrap flex-row gap-2 items-center justify-center">
          {brands.map((brand, index) => (
            <div 
              key={index}
              className="p-4 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <img 
                src={brand.logo} 
                alt={`Logo ${brand.name}`}
                className="w-32 sm:h-32 md:h-45 lg:h-30 object-contain filter lg:grayscale group-hover:grayscale-0 transition-all duration-300"
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