import Image from "next/image"
import { Search, User } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#b1c8e8]">
      {/* Header */}
      <header className="container mx-auto p-4 flex justify-between items-center">
        <div className="w-10 h-10 rounded-full bg-[#d9d9d9] flex items-center justify-center">
          <User className="text-[#67839d]" />
        </div>
        <div className="flex gap-2">
          <Link href="#" className="w-8 h-8">
            <Image
              src="/whatsapp-icon.png"
              alt="WhatsApp"
              width={32}
              height={32}
              className="w-full h-full object-contain"
            />
          </Link>
          <Link href="#" className="w-8 h-8">
            <Image
              src="/instagram-icon.png"
              alt="Instagram"
              width={32}
              height={32}
              className="w-full h-full object-contain"
            />
          </Link>
        </div>
      </header>

      {/* Tagline */}
      <div className="text-center my-6">
        <h1 className="text-3xl text-[#587a94] font-medium">"Hecho a mano con alma"</h1>
      </div>

      {/* Search Bar */}
      <div className="container mx-auto px-4 mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="explora nuestros productos ..."
            className="w-full p-4 rounded bg-white text-[#000000] placeholder-[#000000] border-none"
          />
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <Search className="text-[#000000]" />
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
        {/* Product 1 */}
        <div className="flex flex-col">
          <div className="aspect-square mb-2">
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="Taza artesanal diseño 110"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-xl font-bold text-[#000000]">$11</p>
            <p className="text-[#000000]">taza artesanal</p>
            <p className="text-[#000000]">diseño 110</p>
          </div>
        </div>

        {/* Product 2 */}
        <div className="flex flex-col">
          <div className="aspect-square mb-2">
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="Taza artesanal diseño 74"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-xl font-bold text-[#000000]">$80</p>
            <p className="text-[#000000]">taza artesanal</p>
            <p className="text-[#000000]">diseño 74</p>
          </div>
        </div>

        {/* Product 3 */}
        <div className="flex flex-col">
          <div className="aspect-square mb-2">
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="Taza artesanal diseño 32"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-xl font-bold text-[#000000]">$45</p>
            <p className="text-[#000000]">taza artesanal</p>
            <p className="text-[#000000]">diseño 32</p>
          </div>
        </div>

        {/* Product 4 */}
        <div className="flex flex-col">
          <div className="aspect-square mb-2">
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="Taza artesanal diseño 90"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-xl font-bold text-[#000000]">$67</p>
            <p className="text-[#000000]">taza artesanal</p>
            <p className="text-[#000000]">diseño 90</p>
          </div>
        </div>

        {/* Product 5 */}
        <div className="flex flex-col">
          <div className="aspect-square mb-2">
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="Taza artesanal diseño 30"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-xl font-bold text-[#000000]">$62</p>
            <p className="text-[#000000]">taza artesanal</p>
            <p className="text-[#000000]">diseño 30</p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-[#d1dff4] py-6">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold text-[#000000] mb-2">Quiénes somos</h2>
          <p className="text-[#000000] mb-4">
            Somos un pequeño emprendimiento dedicado a la creación de productos artesanales hechos con amor, paciencia y
            mucho detalle.
          </p>
          <p className="text-[#000000]">Creemos en la belleza de lo simple, en lo que lleva historia y alma.</p>
        </div>
      </div>

      {/* How We Work Section */}
      <div className="bg-[#b1c8e8] py-6">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold text-[#000000] mb-2">Cómo trabajamos</h2>
          <p className="text-[#000000]">
            Cada producto está hecho de forma artesanal, utilizando materiales naturales y técnicas tradicionales.
            Detrás de cada pieza hay un proceso lento, pensado, y un pedacito de nuestra historia.
          </p>
        </div>
      </div>
    </main>
  )
}
