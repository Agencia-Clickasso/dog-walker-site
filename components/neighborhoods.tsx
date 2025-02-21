import { MapPin } from "lucide-react"

interface RegionProps {
  name: string
  neighborhoods: string[]
  bgColor: string
}

function Region({ name, neighborhoods, bgColor }: RegionProps) {
  return (
    <div className={`${bgColor} rounded-2xl p-6 h-full`}>
      <div className="flex items-center gap-2 mb-4">
        <MapPin className="w-5 h-5 text-[#1A1A3D]" />
        <h3 className="text-xl font-bold text-[#1A1A3D]">{name}</h3>
      </div>
      <ul className="space-y-2">
        {neighborhoods.map((neighborhood) => (
          <li key={neighborhood} className="text-gray-700">
            {neighborhood}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Neighborhoods() {
  const regions = [
    {
      name: "Zona Leste",
      neighborhoods: ["Belenzinho", "Tatuapé", "Carrão", "Guaianazes", "Itaquera", "Itaquaquecetuba"],
      bgColor: "bg-[#BDFFC9]",
    },
    {
      name: "Zona Norte",
      neighborhoods: ["Vila Guilherme"],
      bgColor: "bg-[#FF8F7D]",
    },
    {
      name: "Centro",
      neighborhoods: ["Brás", "Pari", "Brigadeiro"],
      bgColor: "bg-[#7DD6FF]",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <p className="text-[#FF6B51] text-sm font-medium mb-2">ÁREA DE ATUAÇÃO</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A3D]">
          Bairros
          <br />
          Atendidos
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {regions.map((region) => (
          <Region key={region.name} {...region} />
        ))}
      </div>

      <div className="text-center max-w-2xl mx-auto mt-12">
        <p className="text-gray-600">
          Atendemos também outros bairros próximos às regiões indicadas. Entre em contato para verificar a
          disponibilidade para sua localização!
        </p>
      </div>
    </section>
  )
}

