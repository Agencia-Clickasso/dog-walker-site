import Image from "next/image"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#FF6B51] mt-16">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <div className="text-center py-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A3D] mb-2">Inscreva-se em Nossa Newsletter</h2>
          <p className="text-gray-700 mb-6">Receba dicas e novidades sobre cuidados com seu pet.</p>
          <div className="max-w-xl mx-auto flex gap-2">
            <Input type="email" placeholder="Digite seu email..." className="bg-white rounded-full" />
            <Button className="bg-[#FFD15C] hover:bg-[#FFD15C]/90 text-[#1A1A3D] rounded-full px-6">INSCREVER</Button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12 border-t border-white/20">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAApklEQVR42mNgGAWjYBSMAkbGZiD+D8T/kfB/KJ8FiP8C8T+y3QCU+A/E/5D4/6EYxP8Hpf+TH4BQ8AeI/0HxPygfhEH8/0D8n1I//EfCID4I/wPif5QGIJD/D4j/Q8P9P5QPwjD8j9IYAEr+BeJ/UPwPykfGfyiKAaDAXyD+B8X/oHwQBvH/AfF/Sj0/CkbBKBgFDAwAi5K0uWu5/qQAAAAASUVORK5CYII="
                alt="Lucas Dog Walker Logo"
                width={40}
                height={40}
              />
              <span className="text-2xl font-bold text-white">Lucas Dog Walker</span>
            </Link>
            <p className="text-white/80 text-sm">
              Cuidados profissionais e dedicados para seu pet na Zona Leste de São Paulo.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Facebook className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Instagram className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h3 className="font-bold text-white mb-4">Páginas</h3>
            <ul className="space-y-2">
              {["Home", "Sobre", "Serviços", "Time", "Blog"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-white/80 hover:text-white text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-white mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-white/80 text-sm">
                <MapPin className="w-4 h-4" />
                Zona Leste, São Paulo - SP
              </li>
              <li className="flex items-center gap-2 text-white/80 text-sm">
                <Phone className="w-4 h-4" />
                <a
                  href="https://wa.me/5511948611033?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os%20de%20dog%20walker!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  (11) 94861-1033
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/80 text-sm">
                <Mail className="w-4 h-4" />
                lucas@dogwalker.com
              </li>
            </ul>
            <a
              href="https://wa.me/5511948611033?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os%20de%20dog%20walker!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 bg-[#25D366] text-white px-4 py-2 rounded-full hover:bg-[#25D366]/90 transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Fale conosco no WhatsApp
            </a>
          </div>

          {/* Working Hours */}
          <div className="bg-[#FFD15C] p-6 rounded-lg">
            <h3 className="font-bold text-[#1A1A3D] mb-4">Horário de Atendimento</h3>
            <ul className="space-y-2">
              <li className="flex justify-between text-sm">
                <span>Segunda - Sexta:</span>
                <span>7h - 18h</span>
              </li>
              <li className="flex justify-between text-sm">
                <span>Sábado:</span>
                <span>9h - 16h</span>
              </li>
              <li className="flex justify-between text-sm">
                <span>Domingo:</span>
                <span className="text-[#FF6B51]">Fechado</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-6 border-t border-white/20 text-center text-white/80 text-sm">
          © {new Date().getFullYear()} Lucas Dog Walker | Todos os direitos reservados
        </div>
      </div>
    </footer>
  )
}

