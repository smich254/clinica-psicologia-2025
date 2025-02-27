import reseñas from "@/data/reseñas.json";

const Reseñas = () => {
  return (
    <section id="reseñas" className="py-12 bg-psych-gray-light">
      <div className="section-container">
        <h2 className="text-3xl font-bold text-psych-blue-dark text-center mb-8">
          Reseñas
        </h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          {reseñas.map((reseña, index) => (
            <div
              key={index}
              className="card bg-white p-6 rounded-lg border border-psych-gray-dark/10"
            >
              <p className="text-psych-gray-dark italic">&quot;{reseña.texto}&quot;</p>
              <p className="text-right font-semibold mt-3 text-psych-blue">
                - {reseña.autor}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reseñas;