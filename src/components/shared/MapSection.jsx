import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { MapPin, Phone, MessageCircle } from "lucide-react";
import { colors } from "../theme/colors";
import 'leaflet/dist/leaflet.css';

export default function MapSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header da Seção */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: colors.primary.main }}>
            Nossa <span style={{ color: colors.accent.main }}>Localização</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Visite nossa loja física e conheça nossos produtos pessoalmente
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Informações da Loja */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-4" style={{ color: colors.primary.main }}>
                Lucélio Construções
              </h3>
              
              <div className="space-y-4">
                {/* Endereço */}
                <div className="flex items-start gap-3">
                  <div 
                    className="p-2 rounded-lg"
                    style={{ backgroundColor: colors.accent.main }}
                  >
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold" style={{ color: colors.primary.main }}>
                      Endereço
                    </h4>
                    <p className="text-gray-600">
                      R. Padre Mororó, 1053<br />
                      Bairro da Caixa D'água<br />
                      Ipu - CE, 62250-000
                    </p>
                  </div>
                </div>

                {/* Contato */}
                <div className="flex items-start gap-3">
                  <div 
                    className="p-2 rounded-lg"
                    style={{ backgroundColor: colors.primary.light }}
                  >
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold" style={{ color: colors.primary.main }}>
                      Contato
                    </h4>
                    <p className="text-gray-600">(88) 99608-8200</p>
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <div className="pt-4">
                  <a 
                    href="https://wa.me/5588996088200" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full justify-center"
                    style={{ backgroundColor: colors.whatsapp }}
                  >
                    <MessageCircle className="w-5 h-5 text-white" />
                    <span className="text-white">Como Chegar</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Horário de Funcionamento */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-4" style={{ color: colors.primary.main }}>
                Horário de Funcionamento
              </h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex">
                  <span className="font-medium mr-2">Segunda a Sexta:</span>
                  <span>7h às 18h</span>
                </div>
                <div className="flex">
                  <span className="font-medium mr-2">Sábado:</span>
                  <span>7h às 13h</span>
                </div>
                <div className="flex">
                  <span className="font-medium mr-2">Domingo:</span>
                  <span style={{ color: colors.accent.main }}>Fechado</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mapa Alternativo - Usando iframe do Google Maps */}
          <div className="h-96 lg:h-full min-h-96 rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2813.2215706157626!2d-40.70939323962981!3d-4.317473138775788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x794ffc2b43ba4f1%3A0xef39a52066bf0dc7!2zTFVDw4lMSU8gQ09OU1RSVcOHw5VFUw!5e0!3m2!1spt-BR!2sbr!4v1758593742187!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Lucélio Construções"
              className="rounded-2xl"
            ></iframe>
          </div>
        </div>

        {/* Links úteis */}
        <div className="mt-8 text-center">
          <div className="inline-flex flex-wrap gap-4 justify-center">
            <a 
              href={`https://www.google.com/maps/dir/?api=1&destination=R.+Padre+Mororó,+1053+-+Bairro+da+Caixa+D'agua,+Ipu+-+CE,+62250-000`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-colors duration-300 border-2"
              style={{ 
                borderColor: colors.primary.main, 
                color: colors.primary.main
              }}
            >
              <MapPin className="w-4 h-4" />
              Ver no Google Maps
            </a>
            
            <a 
              href="https://wa.me/5588996088200?text=Olá! Gostaria de saber como chegar até a loja." 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-colors duration-300 text-white"
              style={{ backgroundColor: colors.whatsapp }}
            >
              <MessageCircle className="w-4 h-4" />
              Pedir Direções
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}