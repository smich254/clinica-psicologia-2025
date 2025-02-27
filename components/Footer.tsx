import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-psych-blue-dark text-white py-6">
      <div className="section-container text-center">
        <p className="text-sm">
          © 2025 CLÍNICA INTERNACIONAL DE PSICOLOGÍA. Todos los derechos reservados.
        </p>
        <ul className="flex justify-center space-x-6 mt-3">
          <li>
            <Link
              href="/politica-privacidad"
              className="text-psych-gray-light hover:text-psych-blue-light transition-colors duration-200"
            >
              Política de Privacidad
            </Link>
          </li>
          <li>
            <Link
              href="/terminos-servicio"
              className="text-psych-gray-light hover:text-psych-blue-light transition-colors duration-200"
            >
              Términos de Servicio
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;