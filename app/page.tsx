import Hero from "./components/home/Hero";
import Collections from "./components/home/Colections";
import ContactSection from "./components/home/ContactSection";

export default function Home() {
  return (
    <main className="p-4">
      <Hero />
      <Collections />
      <ContactSection />
    </main>
  );
}
