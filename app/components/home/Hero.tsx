import Button from "../ui/Button";
import "../../styles/Hero.css"

export default function Hero() {
  return (
    <section className="hero-section">
      {/* Contenido (alineado a la izquierda) */}
      <div className="relative max-w-7xl mx-auto px-6 flex items-center min-h-[560px]">
        <div className="w-full md:w-1/2 lg:w-2/5">

          <h1>
            Transforma tu
            <br />
            Espacio con
            <br />
            Elegantes Fundas
          </h1>

          <p className="max-w-lg text-lg text-neutral-700 mt-6">
            Descubre nuestra colección exclusiva de fundas premium para camas, sofás
            y cojines. Elaboradas con cuidado, diseñadas para tu comodidad.
          </p>

          <div className="buttons">
            <Button variant="primary" size="lg">
              Ver Colección
            </Button>
            <Button variant="secondary" size="lg">
              Ver Catálogo
            </Button>
          </div>

        </div>
      </div>

    </section>
  );
}
