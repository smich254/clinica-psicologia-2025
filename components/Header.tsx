import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-psych-blue-dark tracking-tight">
          CLÍNICA INTERNACIONAL DE PSICOLOGÍA
        </div>

        {/* Navegación */}
        <nav>
          <ul className="flex space-x-6 text-psych-gray-dark">
            <li>
              <Link
                href="#servicios"
                className="hover:text-psych-blue transition-colors duration-200"
              >
                Servicios
              </Link>
            </li>
            <li>
              <Link
                href="#sobre-nosotros"
                className="hover:text-psych-blue transition-colors duration-200"
              >
                Sobre nosotros
              </Link>
            </li>
            <li>
              <Link
                href="#reseñas"
                className="hover:text-psych-blue transition-colors duration-200"
              >
                Reseñas
              </Link>
            </li>
            <li>
              <Link
                href="#contactos"
                className="hover:text-psych-blue transition-colors duration-200"
              >
                Contactos
              </Link>
            </li>
          </ul>
        </nav>

        {/* Iconos de redes sociales */}
        <div className="flex space-x-4 text-psych-gray-dark">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-psych-blue transition-colors duration-200"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-psych-blue transition-colors duration-200"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-psych-blue transition-colors duration-200"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-psych-blue transition-colors duration-200"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;