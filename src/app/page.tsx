import menuPage from "@/app/menuPage/menuPage";
import Link from "next/link";

export default function page() {
  return (
    <>
      <h1 className="text-6xl text-red-700 font-bold pt-5">
        Esto sería la página principal
      </h1>

      <div>
        <Link href="/menuPage/menuPage">
          <button className="bg-red-700 text-white px-4 py-2 rounded">
            Botón de prueba
          </button>
        </Link>
      </div>
    </>
  );
}
