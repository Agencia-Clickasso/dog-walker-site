import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-[#FF6B51] via-[#FF8F7D] to-[#FFD15C] shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-white">Lucas Dog Walker</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-white/90 hover:text-white transition-colors relative group">
            Início
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/sobre" className="text-white/90 hover:text-white transition-colors relative group">
            Sobre
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/servicos" className="text-white/90 hover:text-white transition-colors relative group">
            Serviços
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/contato" className="text-white/90 hover:text-white transition-colors relative group">
            Contato
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Button asChild className="bg-white text-[#FF6B51] hover:bg-white/90">
            <a
              href="https://wa.me/5511948611033?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os%20de%20dog%20walker!"
              target="_blank"
              rel="noopener noreferrer"
            >
              Agendar Passeio
            </a>
          </Button>
        </div>
      </div>
    </nav>
  )
}

