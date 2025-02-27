import Header from "@/components/Header";
import Servicios from "@/components/Servicios";
import SobreNosotros from "@/components/SobreNosotros";
import Reseñas from "@/components/Reseñas";
import Contactos from "@/components/Contactos";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-20"> {/* Espacio para el header fijo */}
        <Servicios />
        <SobreNosotros />
        <Reseñas />
        <Contactos />
      </main>
      <Footer />
    </>
  );
}