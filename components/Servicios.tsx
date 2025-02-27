import Link from "next/link";
import Image from "next/image";

const Servicios = () => {
  return (
    <section id="servicios" className="py-12 bg-psych-gray-light">
      <div className="section-container">
        <h2 className="text-3xl font-bold text-psych-blue-dark text-center mb-8">
          Servicios
        </h2>

        {/* Tu salud mental */}
        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-psych-blue-dark mb-4">
              Tu salud mental es nuestra prioridad
            </h3>
            <p className="text-psych-gray-dark mb-4">
              Especialistas comprometidos con tu bienestar...
            </p>
            <Link
              href="/agenda-consulta"
              className="bg-psych-blue text-white px-6 py-3 rounded-md hover:bg-psych-blue-dark transition-colors duration-200"
            >
              Agenda Tu Consulta
            </Link>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <Image
              src="/images/salud-mental.png"
              alt="Salud Mental"
              width={500}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* División en 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="card text-center">
            <h4 className="text-xl font-semibold text-psych-blue-dark mb-2">
              Terapia individual en línea
            </h4>
            <p className="text-psych-gray-dark mb-3">
              Ofrecemos sesiones personalizadas para abordar...
            </p>
            <Link
              href="/terapia"
              className="text-psych-blue hover:text-psych-blue-dark transition-colors duration-200"
            >
              Más información
            </Link>
          </div>
          <div className="card text-center">
            <h4 className="text-xl font-semibold text-psych-blue-dark mb-2">
              Consejería de Pareja Virtual
            </h4>
            <p className="text-psych-gray-dark mb-3">
              Fortalece tu relación con la ayuda de nuestros expertos...
            </p>
            <Link
              href="/consejeria"
              className="text-psych-blue hover:text-psych-blue-dark transition-colors duration-200"
            >
              Más información
            </Link>
          </div>
          <div className="card text-center">
            <h4 className="text-xl font-semibold text-psych-blue-dark mb-2">
              Apoyo psicológico para Familia
            </h4>
            <p className="text-psych-gray-dark mb-3">
              Encuentra equilibrio familiar con sesión virtual...
            </p>
            <Link
              href="/apoyo-psicologico"
              className="text-psych-blue hover:text-psych-blue-dark transition-colors duration-200"
            >
              Más información
            </Link>
          </div>
        </div>

        {/* Consulta Online Segura */}
        <div className="mb-12 text-center">
          <h3 className="text-2xl font-semibold text-psych-blue-dark mb-4">
            Consulta Psicológica Online Segura
          </h3>
          <p className="text-psych-gray-dark mb-4">
            Accede a terapia psicológica en línea de manera segura...
          </p>
          <Link
            href="/psicologia-online"
            className="text-psych-blue hover:text-psych-blue-dark transition-colors duration-200"
          >
            Más información
          </Link>
        </div>

        {/* Transforma tu Bienestar */}
        <div className="mb-12 text-center">
          <h3 className="text-2xl font-semibold text-psych-blue-dark mb-4">
            Transforma tu Bienestar Mental
          </h3>
          <p className="text-psych-gray-dark mb-4">
            Accede a consultas psicológicas profesionales...
          </p>
          <Link
            href="/reservacion"
            className="bg-psych-blue text-white px-6 py-3 rounded-md hover:bg-psych-blue-dark transition-colors duration-200"
          >
            Reserva ahora
          </Link>
        </div>

        {/* Segunda división en 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card text-center">
            <h4 className="text-xl font-semibold text-psych-blue-dark mb-2">
              Apoyo Psicológico para Adolescentes
            </h4>
            <p className="text-psych-gray-dark mb-3">
              Acompañamiento especializado para jóvenes...
            </p>
            <Link
              href="/apoyo-psicologico-adolecente"
              className="text-psych-blue hover:text-psych-blue-dark transition-colors duration-200"
            >
              Más información
            </Link>
          </div>
          <div className="card text-center">
            <h4 className="text-xl font-semibold text-psych-blue-dark mb-2">
              Manejo del estrés y la ansiedad
            </h4>
            <p className="text-psych-gray-dark mb-3">
              Técnicas comprobadas para reducir el estrés...
            </p>
            <Link
              href="/mano-estres-ansiedad"
              className="text-psych-blue hover:text-psych-blue-dark transition-colors duration-200"
            >
              Más información
            </Link>
          </div>
          <div className="card text-center">
            <h4 className="text-xl font-semibold text-psych-blue-dark mb-2">
              Desarrollo personal y coaching
            </h4>
            <p className="text-psych-gray-dark mb-3">
              Potencia tus habilidades personales como profesional...
            </p>
            <Link
              href="/desarrollo-personal-coaching"
              className="text-psych-blue hover:text-psych-blue-dark transition-colors duration-200"
            >
              Más información
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicios;