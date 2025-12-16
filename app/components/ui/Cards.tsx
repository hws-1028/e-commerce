import Button from "./Button";
import "../../styles/Cards.css";

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
        <div className="card-image">
          <img src={image} alt={title} />
        </div>

        {/* Info */}
        <div className="card-body">
          <h3>{title}</h3>

          <span className="price">
            ${price.toLocaleString()}
          </span>

          <Button variant="primary" size="md">
            Ver producto
          </Button>
        </div>

      </div>
    </div>
  );
}
