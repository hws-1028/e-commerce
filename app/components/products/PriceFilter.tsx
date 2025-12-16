"use client";

import { useState } from "react";
import "../../styles/PriceFilter.css";

interface PriceRange {
  min: number;
  max: number;
}

interface Props {
  value: PriceRange;
  onChange: (range: PriceRange) => void;
}

const presets = [
  { label: "Todos", min: 0, max: Infinity },
  { label: "Hasta $100k", min: 0, max: 100000 },
  { label: "$100k – $300k", min: 100000, max: 300000 },
  { label: "Custom", min: 0, max: Infinity },
];

export default function PriceFilter({ value, onChange }: Props) {
  const [active, setActive] = useState("Todos");

  const handleSelect = (label: string, min: number, max: number) => {
    setActive(label);
    onChange({ min, max });
  };

  return (
    <div className="price-filter-wrapper">

      {/* Pills */}
      <div className="price-filter">
        {presets.map((p) => (
          <button
            key={p.label}
            className={`filter-pill ${active === p.label ? "active" : ""}`}
            onClick={() => handleSelect(p.label, p.min, p.max)}
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* Custom range (only visible when Custom is active) */}
      {active === "Custom" && (
        <div className="price-custom-range">
          <input
            type="number"
            placeholder="Min"
            value={value.min || ""}
            onChange={(e) =>
              onChange({
                min: Number(e.target.value),
                max: value.max,
              })
            }
          />

          <span>—</span>

          <input
            type="number"
            placeholder="Max"
            value={value.max === Infinity ? "" : value.max}
            onChange={(e) =>
              onChange({
                min: value.min,
                max: e.target.value ? Number(e.target.value) : Infinity,
              })
            }
          />
        </div>
      )}

    </div>
  );
}
