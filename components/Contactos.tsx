import { FaWhatsapp, FaFacebookMessenger } from "react-icons/fa";

const Contactos = () => {
  return (
    <section id="contactos" className="py-12 bg-psych-gray-light">
      <div className="section-container">
        <h2 className="text-3xl font-bold text-psych-blue-dark text-center mb-6">
          Contactos
        </h2>
        <form
          action="https://formspree.io/f/your-form-id" // Reemplaza con tu ID de Formspree
          method="POST"
          className="max-w-lg mx-auto space-y-6"
        >
          <div>
            <label
              htmlFor="name"
              className="block mb-1 text-psych-gray-dark font-medium"
            >
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-3 border border-psych-gray-dark/20 rounded-md focus:outline-none focus:ring-2 focus:ring-psych-blue-light focus:border-psych-blue transition-all duration-200"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-1 text-psych-gray-dark font-medium"
            >
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 border border-psych-gray-dark/20 rounded-md focus:outline-none focus:ring-2 focus:ring-psych-blue-light focus:border-psych-blue transition-all duration-200"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block mb-1 text-psych-gray-dark font-medium"
            >
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full p-3 border border-psych-gray-dark/20 rounded-md focus:outline-none focus:ring-2 focus:ring-psych-blue-light focus:border-psych-blue transition-all duration-200"
              rows={4}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-psych-blue text-white px-6 py-3 rounded-md hover:bg-psych-blue-dark transition-colors duration-200 w-full md:w-auto"
          >
            Enviar
          </button>
        </form>
        <div className="mt-8 flex justify-center space-x-6">
          <a
            href="https://wa.me/your-number"
            target="_blank"
            rel="noopener noreferrer"
            className="text-psych-gray-dark hover:text-psych-blue transition-colors duration-200"
          >
            <FaWhatsapp size={28} />
          </a>
          <a
            href="https://m.me/your-page"
            target="_blank"
            rel="noopener noreferrer"
            className="text-psych-gray-dark hover:text-psych-blue transition-colors duration-200"
          >
            <FaFacebookMessenger size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contactos;