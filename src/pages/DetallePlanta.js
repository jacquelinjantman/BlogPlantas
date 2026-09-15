import { Link, useParams } from "react-router-dom";
import familias from "../data/plantas";

function DetallePlanta() {
  const { familiaId, plantaId } = useParams();

  const familia = familias.find((familia) => familia.id === familiaId);

  const planta = familia?.variantes.find(
    (variante) => variante.id === plantaId,
  );

  if (!familia || !planta) {
    return (
      <main className="detalle-familia">
        <p>Planta no encontrada.</p>
        <Link className="volver" to="/">
          ← Volver al blog
        </Link>
      </main>
    );
  }

  const cuidados = planta.cuidados || {};
  const plagasEnfermedades = Array.isArray(planta.plagasEnfermedades)
 ? planta.plagasEnfermedades
 : [];

  return (
    <main className="ficha-planta">
      <Link className="volver" to={`/familia/${familia.id}`}>
        ← Volver a {familia.nombre}
      </Link>

      <header className="poster-planta">
        <div>
          <p className="etiqueta-origen">Origen · {familia.origen}</p>
          <h1>{planta.nombre}</h1>

          <p className="texto-poster">
            {planta.descripcion || "Proximamente: historia de esta planta."}
          </p>
        </div>

        <img
          className="imagen-principal-planta"
          src={planta.imagen}
          alt={planta.nombre}
        />
      </header>

      <section className="bloque-cuidados">
        <h2>Cuidados esenciales</h2>

        <div className="rejilla-cuidados">
          <p>
            <strong>Luz</strong>
            {cuidados.luz}
          </p>
          <p>
            <strong>Riego</strong>
            {cuidados.riego}
          </p>
          <p>
            <strong>Humedad</strong>
            {cuidados.humedad}
          </p>
          <p>
            <strong>Temperatura</strong>
            {cuidados.temperatura}
          </p>
        </div>
      </section>

      {planta.ubicacion && (
        <section className="bloque-anotacion">
          <h2>Donde dejarla</h2>
          <p>{planta.ubicacion}</p>
        </section>
      )}

      {planta.problemas?.hojasAmarillas && (
        <section className="bloque-anotacion">
          <h2>Hojas Amarillas?</h2>
          <p>{planta.problemas.hojasAmarillas}</p>
        </section>
      )}

        {planta.sustrato && (
            <section className="bloque-anotacion">
            <h2>Sustrato ideal</h2>
            <p>{planta.sustrato}</p>
            </section>
        )}

        {planta.corrienteAire && (
            <section className= "bloque-anotacion">
                <h2>Corriente de aire</h2>
                <p>{planta.corrienteAire}</p>
            </section>
        )}

        {planta.reproduccion && (
            <section className="bloque-anotacion">
                <h2>Como reproducirla</h2>
                <p>{planta.reproduccion}</p>
            </section>
        )}

   {plagasEnfermedades.length > 0 && (
        <section className="bloque-anotacion">
          <h2>Plagas y enfermedades</h2>

          <div className="lista-alertas">
            {plagasEnfermedades.map((problema) => (
              <article className="alerta-planta" key={problema.nombre}>
                {problema.imagen && (
                  <img
                    className="imagen-alerta"
                    src={problema.imagen}
                    alt={problema.nombre}
                  />
                )}

                <h3>{problema.nombre}</h3>

                <p>
                  <strong>Señales:</strong> {problema.senales}
                </p>

                <p>
                  <strong>Qué hacer:</strong> {problema.accion}
                </p>
              </article>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

export default DetallePlanta;
