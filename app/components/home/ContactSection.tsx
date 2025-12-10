import Button from "../ui/Button";
import "../../styles/ContactSection.css"

export default function ContactSection() {
  return (
    <section className="section-contact bg-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-6 text-center flex flex-col items-center gap-6">

        <h2 className="text-3xl font-bold text-gray-900">
          ¿Necesitas ayuda o tienes alguna duda?
        </h2>

        <p className="max-w-xl text-gray-700">
          Nuestro equipo está listo para ayudarte con cualquier consulta sobre nuestros productos o tu pedido.
        </p>

        {/* Botón */}
        <Button
          variant="outline"
          size="lg"
          
        >
          Contáctanos
        </Button>

      </div>
    </section>
  );
}
