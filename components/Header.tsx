"use client"; // Añade esta línea al inicio

import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi"; // Icono de hamburguesa
import { IoClose } from "react-icons/io5"; // Icono de cerrar

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-20">
      <div className="section-container flex justify-between items-center py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-psych-blue-dark tracking-tight">
          CLÍNICA INTERNACIONAL DE PSICOLOGÍA
        </div>

        {/* Botón Hamburguesa (visible solo en móvil) */}
        <button
          className="md:hidden text-psych-gray-dark focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <IoClose size={28} /> : <GiHamburgerMenu size={28} />}
        </button>

        {/* Navegación y Redes Sociales (Escritorio) */}
        <div className="hidden md:flex items-center space-x-8">
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

        {/* Menú Desplegable (Móvil) */}
        <div
          className={`fixed inset-0 bg-white md:hidden transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out z-30`}
        >
          <div className="flex justify-end p-4">
            <button
              className="text-psych-gray-dark focus:outline-none"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <IoClose size={28} />
            </button>
          </div>
          <nav className="flex flex-col items-center space-y-6 mt-10">
            <Link
              href="#servicios"
              className="text-psych-gray-dark text-lg hover:text-psych-blue transition-colors duration-200"
              onClick={toggleMenu}
            >
              Servicios
            </Link>
            <Link
              href="#sobre-nosotros"
              className="text-psych-gray-dark text-lg hover:text-psych-blue transition-colors duration-200"
              onClick={toggleMenu}
            >
              Sobre nosotros
            </Link>
            <Link
              href="#reseñas"
              className="text-psych-gray-dark text-lg hover:text-psych-blue transition-colors duration-200"
              onClick={toggleMenu}
            >
              Reseñas
            </Link>
            <Link
              href="#contactos"
              className="text-psych-gray-dark text-lg hover:text-psych-blue transition-colors duration-200"
              onClick={toggleMenu}
            >
              Contactos
            </Link>
            <div className="flex space-x-6 text-psych-gray-dark mt-8">
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
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;