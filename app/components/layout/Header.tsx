"use client";

import { useState } from "react";
import "../../styles/Header.css";
import Button from "../ui/Button";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="header-container">

        {/* LOGO */}
        <h1 className="logo">Cozy Home</h1>

        {/* NAV DESKTOP */}
        <nav className="nav-desktop">
          <a href="/" className="nav-link">Inicio</a>
          <a href="/productos" className="nav-link">Productos</a>
          <a href="/ofertas" className="nav-link">Ofertas</a>
          <a href="/contacto" className="nav-link">Contacto</a>
        </nav>

        {/* BOTÓN DESKTOP */}
        <div className="header-actions nav-desktop">
          <Button variant="primary" size="md">Comprar Ahora</Button>
        </div>

        {/* MENÚ HAMBURGUESA (solo móvil) */}
        <button 
          className="hamburger-btn"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* MENU MOBILE */}
      {open && (
        <div className="mobile-menu">
          <a href="/" className="mobile-link">Inicio</a>
          <a href="/productos" className="mobile-link">Productos</a>
          <a href="/ofertas" className="mobile-link">Ofertas</a>
          <a href="/contacto" className="mobile-link">Contacto</a>

          <Button 
            variant="secondary" 
            size="md" 
            className="w-full mt-3"
          >
            Comprar Ahora
          </Button>
        </div>
      )}
    </header>
  );
}
