import Button from "./Button";
import "../../styles/Cards.css"

interface CardProps {
  image: string;
  title: string;
  price: number;
}

export default function Card({ image, title, price }: CardProps) {
  return (
    <div className="card">
      <div className="card-container">

        {/* Imagen */}
        <div className="card-image bg-neutral-100">
          <img
            src={image}
            alt={title}
            className="object-cover"
          />
        </div>

        {/* Info */}
        <div className="card-body p-4 flex flex-col gap-2">

          <h3 className="font-semibold text-lg line-clamp-1">{title}</h3>

          <span className="text-xl font-bold text-[#a47e1b]">
            ${price.toLocaleString()}
          </span>

          <Button
            variant="primary"
            size="md"
            className="mt-2"
          >
            Ver producto
          </Button>

        </div>
      </div>
    </div>
  );
}
