import React from "react";
import { Phone, MessageCircle, MapPin, Mail, Clock, Car } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#3A3D82] to-[#8184C2] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Entre em Contato
            </h1>
            <p className="text-xl text-[#A7A8B6] max-w-3xl mx-auto">
              Estamos aqui para ajudar você com sua obra ou reforma
            </p>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Cards */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#3A3D82] mb-8">
                Fale Conosco
              </h2>

              {/* WhatsApp */}
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-[#25D366] p-3 rounded-xl">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-[#3A3D82] text-lg mb-2">WhatsApp</h3>
                    <p className="text-gray-600 mb-4">
                      Método mais rápido para orçamentos e dúvidas
                    </p>
                    <a 
                      href="https://wa.me/5588996088200" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-[#25D366] hover:bg-[#20B85A] text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-300"
                    >
                      (88) 99608-8200
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-[#D65C3E] p-3 rounded-xl">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-[#3A3D82] text-lg mb-2">Telefone</h3>
                    <p className="text-gray-600 mb-4">
                      Atendimento de segunda a sábado
                    </p>
                    <p className="text-[#3A3D82] font-semibold">
                      (88) 3683-3786
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-[#8184C2] p-3 rounded-xl">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-[#3A3D82] text-lg mb-2">E-mail</h3>
                    <p className="text-gray-600 mb-4">
                      Para orçamentos e informações gerais
                    </p>
                    <p className="text-[#3A3D82] font-semibold">
                      lucelioconstrucoes@hotmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Location & Hours */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#3A3D82] mb-8">
                Localização e Horários
              </h2>

              {/* Address */}
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-[#BA3934] p-3 rounded-xl">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#3A3D82] text-lg mb-2">Endereço</h3>
                    <p className="text-gray-600 leading-relaxed">
                      R. Padre Mororó, 1053<br />
                      Bairro da Caixa D'água<br />
                      Ipu - CE, 62250-000
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-[#ECDE2D] p-3 rounded-xl">
                    <Clock className="w-6 h-6 text-[#3A3D82]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#3A3D82] text-lg mb-2">Horário de Funcionamento</h3>
                    <div className="text-gray-600 space-y-1">
                      <p><strong>Segunda a Sexta:</strong> 7h às 18h</p>
                      <p><strong>Sábado:</strong> 7h às 13h</p>
                      <p><strong>Domingo:</strong> Fechado</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-[#D65C3E] to-[#BA3934] p-6 rounded-2xl text-white text-center">
                <h3 className="text-xl font-bold mb-4">
                  Precisa de um orçamento?
                </h3>
                <p className="mb-6 opacity-90">
                  Entre em contato agora mesmo via WhatsApp
                </p>
                <a 
                  href="https://wa.me/5588996088200" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-[#D65C3E] px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}