'use client';

export default function MenuPage() {
  return (
    <div className="relative overflow-hidden h-screen bg-slate-300 menu-section">
      <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md">
        <h2 className="text-4xl font-bold text-center">Menú</h2>
        <div className="p-6">
          <ul className="list-disc list-inside">
            <li>Comida 1: Descripción</li>
            <li>Comida 2: Descripción</li>
            <li>Comida 3: Descripción</li>
            <li>Comida 4: Descripción</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
