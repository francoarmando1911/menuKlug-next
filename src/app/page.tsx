import Link from 'next/link';
import Image from "next/image";

export default function FirstPage() {
  return (
    <div className="relative overflow-hidden h-screen">
      <div
        className="h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/portadaklug.png')",
        }}
      >
        <div className="h-full bg-black bg-opacity-50">
          <div className="container mx-auto px-6 py-12 flex flex-col justify-center items-center h-full">
            <Image
              src="/logo1.png"
              alt="Klug Gebräu"
              width={256}
              height={256}
              className="w-48 sm:w-40 md:w-48 lg:w-56 xl:w-64 mb-6"
            />

            <p className="text-xl sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl text-center">
              En Cervecería Klug Gebräu podés encontrar una variedad de comidas
              muy ricas y una buena cerveza para acompañar! 😃🍻🍕🍟
            </p>
            <div className="text-center mt-10">
              <Link href="/menuPage" className="inline-block px-6 py-2 bg-gradient-to-r from-yellow-500 to-yellow-800 text-white text-sm sm:text-base rounded-md shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400">
                CLICK AQUÍ PARA VER NUESTRO MENÚ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
