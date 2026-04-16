import Navbar       from "@/components/Navbar";
import Hero         from "@/components/Hero";
import SobreNosotros from "@/components/SobreNosotros";
import Carta        from "@/components/Carta";
import Galeria      from "@/components/Galeria";
import Ubicacion    from "@/components/Ubicacion";
import Footer       from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SobreNosotros />
        <Carta />
        <Galeria />
        <Ubicacion />
      </main>
      <Footer />
    </>
  );
}
