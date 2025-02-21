import Image from "next/image"
import { Users, Crown, Heart, Star } from "lucide-react"

export default function Features() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A3D] text-center mb-16">
        Seu Pet Será Muito
        <br />
        Feliz Conosco
      </h2>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left features */}
          <div className="space-y-16">
            <div className="flex items-center gap-4">
              <div className="relative shrink-0 w-16 h-16 border-2 border-gray-200 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-[#9333E9]" />
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-xl text-[#1A1A3D]">Profissional Experiente</h3>
                <p className="text-sm text-gray-600 max-w-xs">
                  7 anos de experiência no cuidado de cães, com equipe especializada de 22 anos na área.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative shrink-0 w-16 h-16 border-2 border-gray-200 rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-[#9333E9]" />
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-xl text-[#1A1A3D]">Ambiente Acolhedor</h3>
                <p className="text-sm text-gray-600 max-w-xs">
                  Cuidado personalizado e atencioso para cada pet, respeitando suas necessidades individuais.
                </p>
              </div>
            </div>
          </div>

          {/* Center image */}
          <div className="relative aspect-square">
            <div className="absolute inset-0 bg-[#FFF5EB] rounded-full overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-19%20at%2021.31.18%20(2)-EMbOSmX8vPhLP2cR2uWHok5NqYmeJ6.jpeg"
                alt="Lucas com seus cães"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right features */}
          <div className="space-y-16">
            <div className="flex items-center gap-4 flex-row-reverse text-right">
              <div className="relative shrink-0 w-16 h-16 border-2 border-gray-200 rounded-full flex items-center justify-center">
                <Crown className="w-8 h-8 text-[#9333E9]" />
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-xl text-[#1A1A3D]">Serviços Completos</h3>
                <p className="text-sm text-gray-600 max-w-xs">
                  Desde passeios até acompanhamento veterinário, com primeiros socorros e adestramento.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 flex-row-reverse text-right">
              <div className="relative shrink-0 w-16 h-16 border-2 border-gray-200 rounded-full flex items-center justify-center">
                <Star className="w-8 h-8 text-[#9333E9]" />
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-xl text-[#1A1A3D]">Atendimento Especializado</h3>
                <p className="text-sm text-gray-600 max-w-xs">
                  Experiência com cães de todos os portes e temperamentos, incluindo casos especiais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

