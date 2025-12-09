import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import "./globals.css"

export const metadata = {
  title: "Cozy Home | Fundas para el Hogar",
  description: "Compra fundas Premium para tu hogar.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Header />
          <main className="min-h-screen">
            {children}
          </main>
        <Footer />
      </body>
    </html>
  );
}
