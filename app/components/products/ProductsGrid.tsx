"use client";

import Card from "../ui/Cards";
import "../../styles/ProductsGrid.css"
import { useState } from "react";
import CollectionFilter from "./CollectionFilter";

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  category: "Cama" | "Colchon";
}

const products: Product[] = [
  {
    id: 1,
    title: "Base Cama",
    image: "/img/e-commerce-colection-bed.jpg",
    price: 129900,
    category: "Cama",
  },
  {
    id: 2,
    title: "Colchon",
    image: "/img/e-commerce-colection-colchon.jpg",
    price: 159900,
    category: "Colchon",
  },
  {
    id: 3,
    title: "Cama",
    image: "/img/e-commerce-colection-bed.jpg",
    price: 49900,
    category: "Cama",
  },
  {
    id: 4,
    title: "Colchon Doble",
    image: "/img/e-commerce-colection-colchon.jpg",
    price: 89900,
    category: "Colchon",
  },
  {
    id: 5,
    title: "Colchon Twin",
    image: "/img/e-commerce-colection-colchon.jpg",
    price: 89900,
    category: "Colchon",
  },
  {
    id: 6,
    title: "Base Cama Simple",
    image: "/img/e-commerce-colection-bed.jpg",
    price: 89900,
    category: "Cama",
  },
];

export default function ProductsGrid() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProducts =
    activeCategory === "Todos"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section className="section-products w-full py-12">
      <div className="products-list max-w-7xl mx-auto px-6">

        <CollectionFilter
          active={activeCategory}
          onChange={setActiveCategory}
        />

        <div className="products-grid">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
            />
          ))}
        </div>


      </div>
    </section>
  );
}
