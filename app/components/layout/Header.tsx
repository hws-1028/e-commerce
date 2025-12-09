"use client";
import "../../styles/Header.css"
import Button from "../ui/Button";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm">
        <h1 className="text-2xl font-bold text-gray-800">Cozy Home</h1>

          <nav>
            <a href="/" className="text-gray-700 hover:text-blue-600 transition font-medium text-lg">
              Inicio
            </a>
            <a href="/productos" className="text-gray-700 hover:text-blue-600 transition font-medium text-lg">
              Productos
            </a>
            <a href="/ofertas" className="text-gray-700 hover:text-blue-600 transition font-medium text-lg">
              Ofertas
            </a>
            <a href="/contacto" className="text-gray-700 hover:text-blue-600 transition font-medium text-lg">
              Contacto
            </a>
          </nav>

        <div className="flex items-center gap-6">
          <Button variant="primary" size="md" className="whitespace-nowrap">
            Comprar Ahora
          </Button>
        </div>
    </header>
  );
}
