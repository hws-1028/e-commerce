"use client";

import { useState } from "react";
import "../../styles/CollectionFilter.css";

interface Props {
  active: string;
  onChange: (value: string) => void;
}

const collections = ["Todos", "Cama", "Colchon"];

export default function CollectionFilter({ active, onChange }: Props) {

  return (
    <div className="collection-filter-wrapper">
      <div className="collection-filter">
        {collections.map((item) => (
          <button
            key={item}
            className={`filter-pill ${active === item ? "active" : ""}`}
            onClick={() => onChange(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
