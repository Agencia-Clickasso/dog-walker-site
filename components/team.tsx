import Image from "next/image"
import { Instagram } from "lucide-react"

interface TeamMemberProps {
  name: string
  role: string
  description: string
  image: string
  bgColor: string
}

function TeamMember({ name, role, description, image, bgColor }: TeamMemberProps) {
  return (
    <div className="relative group">
      <div className="relative w-full aspect-[3/4] overflow-hidden rounded-t-full">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>
      <div className={`${bgColor} p-6 text-center rounded-b-full`}>
        <h3 className="font-bold text-xl text-[#1A1A3D] mb-2">{name}</h3>
        <p className="text-sm text-gray-700 mb-3">{role}</p>
        <p className="text-sm text-gray-600 mb-4 line-clamp-4">{description}</p>
        <div className="flex items-center justify-center">
          <a
            href="https://www.instagram.com/dogwalker_belenzinho?igsh=MW9jaXR5M3ZiNTBoMg%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-black/10 rounded-full hover:bg-black/20 transition-colors"
          >
            <Instagram className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Team() {
  const teamMembers = [
    {
      name: "Lucas",
      role: "Dog Walker & Cuidador",
      description:
        "Há 7 anos dedico-me ao cuidado de cães nos bairros da Zona Leste. Possuo curso de primeiros socorros e experiência em adestramento.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-19%20at%2021.31.18-0QtsdJgBUdS8Z4T2caL8lnkDcwrnzi.jpeg",
      bgColor: "bg-[#BDFFC9]",
    },
    {
      name: "Sandoval Henrique",
      role: "Fundador & Dog Walker Profissional",
      description:
        "Com quase 25 anos de experiência, sou o fundador da prática 'DogWalker' no Brasil. Destaque na Folha de São Paulo em 2007, já cuidei de mais de 90 cães com amor e dedicação.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-21%20at%2019.20.10-Ar2WLscp8LkoSt0r34UJOF3ph1yZgm.jpeg",
      bgColor: "bg-[#FF8F7D]",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A3D] text-center mb-16">
        Conheça Nossa Equipe de
        <br />
        Cuidadores Profissionais
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>

      <div className="text-center max-w-2xl mx-auto mt-8">
        <p className="text-gray-600 mb-6">
          "Optei por deixar o regime CLT para seguir minha verdadeira paixão. Atendo em domicílio e ofereço serviços
          completos de cuidados, incluindo saúde estética para o seu pet, sempre buscando o bem-estar do animal. Conte
          comigo para proporcionar o melhor cuidado para o seu melhor amigo!"
        </p>
        <p className="text-[#FF6B51] font-medium">Sandoval Henrique - Fundador</p>
      </div>
    </section>
  )
}

