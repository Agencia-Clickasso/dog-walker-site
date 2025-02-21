import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  bgColor: string
}

function ServiceCard({ title, description, icon, bgColor }: ServiceCardProps) {
  return (
    <div
      className={`${bgColor} rounded-full p-8 text-center max-w-[320px] aspect-square flex flex-col items-center justify-center transition-transform hover:scale-105`}
    >
      <div className="mb-4 relative w-24 h-24 rounded-full overflow-hidden">
        <Image src={icon || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  )
}

export default function Services() {
  const services = [
    {
      title: "Passeios Personalizados",
      description: "Passeios adaptados às necessidades do seu pet, respeitando seu ritmo e personalidade.",
      icon: "https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg",
      bgColor: "bg-[#BDFFC9]",
    },
    {
      title: "Acompanhamento Veterinário",
      description: "Agendamento e acompanhamento em consultas, exames e procedimentos veterinários.",
      icon: "https://images.pexels.com/photos/6235233/pexels-photo-6235233.jpeg",
      bgColor: "bg-[#FF8F7D]",
    },
    {
      title: "Primeiros Socorros",
      description: "Profissional certificado em primeiros socorros para cães e gatos, garantindo segurança extra.",
      icon: "https://images.pexels.com/photos/7469214/pexels-photo-7469214.jpeg",
      bgColor: "bg-[#7DD6FF]",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <p className="text-[#FF6B51] text-sm font-medium mb-2">NOSSOS SERVIÇOS</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A3D]">
          Cuidado Especializado
          <br />
          para Seu Pet
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center max-w-5xl mx-auto mb-12">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>

      <div className="text-center max-w-2xl mx-auto mt-8">
        <p className="text-gray-600 mb-6">
          "Meu serviço é realizado com total atenção ao seu pet, independentemente da raça ou porte. Se seu cão é
          agressivo, muito agitado ou sedentário, estou preparado para ajudar!"
        </p>
        <Button asChild className="bg-[#FF6B51] hover:bg-[#FF6B51]/90 inline-flex items-center gap-2">
          <a
            href="https://wa.me/5511948611033?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os%20de%20dog%20walker!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2"
          >
            Ver Todos os Serviços
            <ArrowRight className="w-4 h-4" />
          </a>
        </Button>
      </div>
    </section>
  )
}

