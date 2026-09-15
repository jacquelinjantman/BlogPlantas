import { Link, useParams } from "react-router-dom";
import familias from "../data/plantas";

function DetalleFamilia() {
  const { id } = useParams();

  const familia = familias.find((familia) => familia.id === id);

  if (!familia) {
    return (
      <main className="detalle-familia">
        <p>Familia no encontrada.</p>

        <Link className="volver" to="/">
          ← Volver al blog
        </Link>
      </main>
    );
  }

  const variantesDisponibles = familia.variantes.filter(
    (variante) => variante.nombre
  );

  return (
    <main className="detalle-familia">
      <Link className="volver" to="/">
        ← Volver al blog
      </Link>

      <header className="cabecera-detalle">
        <p className="etiqueta-origen">Origen · {familia.origen}</p>
        <h1>{familia.nombre}</h1>
        <p>{familia.descripcionFamilia}</p>
      </header>

      <section>
        <h2 className="titulo-variantes">Variantes</h2>

        {variantesDisponibles.map((variante) => (
          <Link
            className="enlace-variante"
            key={variante.id}
            to={`/familia/${familia.id}/planta/${variante.id}`}
          >
            <article className="variante">
              <img
                className="variante-imagen"
                src={variante.imagen}
                alt={variante.nombre}
              />

              <h3 className="variante-nombre">{variante.nombre}</h3>

              <p className="variante-descripcion">
                {variante.descripcion || "Ver ficha de la planta."}
              </p>

              <p className="ver-ficha">Ver ficha completa →</p>
            </article>
          </Link>
        ))}
      </section>
    </main>
  );
}

export default DetalleFamilia;