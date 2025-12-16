import ProductsGrid from "../components/products/ProductsGrid";
import "../styles/ProductsPage.css"

export default function ProductosPage() {
  return (
    <div className="productos-page">
      <h1>Nuestros Productos</h1>
      <ProductsGrid />
    </div>
  );
}
