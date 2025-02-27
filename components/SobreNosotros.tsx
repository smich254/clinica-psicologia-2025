import Image from "next/image";
import psicologos from "@/data/psicologos.json";

const SobreNosotros = () => {
  return (
    <section id="sobre-nosotros" className="py-12 bg-psych-gray-light">
      <div className="section-container">
        <h2 className="text-3xl font-bold text-psych-blue-dark text-center mb-8">
          Expertos en psicología online
        </h2>
        <p className="text-psych-gray-dark text-center mb-10 max-w-2xl mx-auto">
          Cada miembro de nuestro equipo es un psicólogo dedicado a brindar...
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {psicologos.map((psicologo, index) => (
            <div key={index} className="card text-center p-6">
              <Image
                src={psicologo.imagen}
                alt={psicologo.nombre}
                width={300}
                height={300}
                className="rounded-full mx-auto mb-4 shadow-md"
              />
              <h4 className="text-xl font-semibold text-psych-blue-dark">
                {psicologo.nombre}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SobreNosotros;