import "../../styles/Colections.css"
import Button from "../ui/Button";

interface CollectionItem {
  title: string;
  image: string;
  link: string;
  description: string;
  list?: string[];
}

const collections: CollectionItem[] = [
  {
    title: "Fundas para la Cama",
    image: "/img/e-commerce-colection-bed.jpg",
    link: "/productos?categoria=cama",
    description: "Juegos de cama lujosos que combinan comodidad con estilo",
    list: ["Telas premium", "Múltiples tamaños", "Fácil cuidado"]
  },
  {
    title: "Fundas para Sofá",
    image: "/img/e-commerce-colection-sofa.jpg",
    link: "/productos?categoria=sofa",
    description: "Protege y embellece tus muebles con nuestros diseños elegantes",
    list: ["Ajuste perfecto", "Resistente a manchas", "Opciones reversibles"]
  },
  {
    title: "Fundas para Almohadas",
    image: "/img/e-commerce-colection-pillows.jpg",
    link: "/productos?categoria=almohadas",
    description: "Añade personalidad a cualquier habitación con nuestros cojines decorativos",
    list: ["Colores vibrantes", "Combina y mezcla", "Detalles artesanales"]
  },
];

export default function Collections() {
  return (
    <section className="section-collection">

        {/* Título */}
        <div>
            <h2 className="text-5xl font-bold  text-center">
                Nuestras Colecciones
            </h2>
            <p className="text-center">Explora nuestra cuidada selección de fundas para el hogar diseñadas para elevar tus espacios</p>
        </div>

        {/* Grid de tarjetas */}
        <div className="cards-collection">

          {collections.map((item) => (
            <article key={item.title} className="collection-card">

              {/* Imagen superior con fondo claro */}
              <div className="card-image-area ">
                <img src={item.image} alt={item.title} className="h-24 w-auto object-contain" />
              </div>

              {/* Contenido */}
              <div className="card-content">
                <h3>{item.title}</h3>

                <p className="text-neutral-600">{item.description}</p>

                <ul>
                  {item.list?.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <Button
                    variant="primary"
                    size="lg"
                    className="mx-auto mt-6 w-full"
                >
                    Explorar Colección
                </Button>

              </div>

            </article>
          ))}


        </div>
    </section>
  );
}
