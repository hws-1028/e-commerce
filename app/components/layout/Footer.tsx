import "../../styles/Fooder.css"

export default function Footer() {
  return (
    <footer className="w-full border-t py-6 px-6 text-center text-sm opacity-70">
      © {new Date().getFullYear()} Fundas para el Hogar – Todos los derechos reservados.
    </footer>
  );
}
