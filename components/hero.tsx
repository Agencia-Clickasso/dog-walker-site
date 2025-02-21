import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-[#1A1A3D] leading-tight">Olá, meu nome é Lucas</h1>
          <p className="text-gray-600 max-w-lg">
            Nascido e criado em São Paulo, há 7 anos dedico-me ao cuidado de cães nos bairros da Zona Leste. Minha
            equipe é composta por dois profissionais que possuem 22 anos de experiência na área de cuidados e passeios
            de animais.
          </p>
          <p className="text-gray-600 max-w-lg">
            Resido na Zona Leste e atendo em grande parte de São Paulo, conforme a disponibilidade de horários. Cuidar
            dos cães é minha paixão – sou abençoado com dois amigos de quatro patas, um de 38 quilos e um Rottweiler de
            22 quilos, que são minha inspiração diária.
          </p>
          <Button className="bg-[#FF6B51] hover:bg-[#FF6B51]/90">Agendar Serviço</Button>
        </div>

        <div className="relative">
          <div className="relative aspect-square rounded-full overflow-hidden border-4 border-dashed border-gray-200">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-19%20at%2021.31.18-0QtsdJgBUdS8Z4T2caL8lnkDcwrnzi.jpeg"
              alt="Lucas com seus cães"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute bottom-4 left-4 bg-[#A8D6CF] rounded-full p-4 w-24 h-24 flex items-center justify-center">
            <p className="text-sm font-medium text-center">
              🐾<br />7 Anos de
              <br />
              Experiência
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

