import Image from "next/image"
import { Facebook, Instagram } from "lucide-react"

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
        <div className="flex items-center justify-center gap-3">
          <a href="#" className="p-2 bg-black/10 rounded-full hover:bg-black/20 transition-colors">
            <Facebook className="w-4 h-4" />
          </a>
          <a href="#" className="p-2 bg-black/10 rounded-full hover:bg-black/20 transition-colors">
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
      name: "Lucas",
      role: "Especialista em Cães de Grande Porte",
      description:
        "Sou abençoado com dois amigos de quatro patas, um de 38 quilos e um Rottweiler de 22 quilos, que são minha inspiração diária.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-19%20at%2021.31.18%20(1)-G9egm0hPBYXSuvyyVIFniKYeDJyORu.jpeg",
      bgColor: "bg-[#FF8F7D]",
    },
    {
      name: "Lucas",
      role: "Passeador Profissional",
      description:
        "Atendo em grande parte de São Paulo, oferecendo serviços de passeio, acompanhamento veterinário e cuidados personalizados.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-19%20at%2021.31.18%20(2)-EMbOSmX8vPhLP2cR2uWHok5NqYmeJ6.jpeg",
      bgColor: "bg-[#FFE07D]",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A3D] text-center mb-16">
        Conheça Nosso Time de
        <br />
        Cuidadores Profissionais
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>

      <div className="text-center max-w-2xl mx-auto mt-8">
        <p className="text-gray-600 mb-6">
          "Cuidar dos cães é minha paixão. Independentemente da raça ou porte, o cuidado é sempre personalizado: se seu
          cão é agressivo, muito agitado ou sedentário, estou preparado para ajudar!"
        </p>
        <p className="text-[#FF6B51] font-medium">Os cães são melhores que os humanos! 🐾🐾</p>
      </div>
    </section>
  )
}

