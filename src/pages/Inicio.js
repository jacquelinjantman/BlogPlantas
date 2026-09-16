import { useState } from "react";
import familias from "../data/plantas";
import CardPlants from "../components/cardPlants";


function Inicio() {
  const [busqueda, setBusqueda] = useState("");

  const ultimasAgregadas = [...familias]
    .sort((a, b) => new Date(b.fechaAgregado) - new Date(a.fechaAgregado))
    .slice(0, 3);

  const familiasFiltradas = familias.filter((familia) =>
    familia.nombre.toLowerCase().includes(busqueda.toLowerCase()),
  );

  return (
    <div className="pagina-inicio">
      <div className="luciernagas" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <header className="encabezado">
        <p className="marca">BLOG DE PLANTAS</p>
        <a className="enlace-explorar" href="#especies">
          Explorar especies
        </a>
      </header>
      <section className="hero">
        <h1>Bienvenido a mi blog de plantas</h1>
        <p>
          Un espacio dedicado a explorar el fascinante mundo de las plantas,
          desde especies comunes de interior hasta variedades exóticas.
        </p>
      </section>

      <section className="buscador">
        <input
          type="text"
          placeholder="Buscar planta por nombre..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="campo-busqueda"
        />
      </section>

      {busqueda ? (
        <section>
          <h2>Resultados de búsqueda</h2>
          {familiasFiltradas.length === 0 ? (
            <p>No se encontraron plantas con ese nombre.</p>
          ) : (
            familiasFiltradas.map((familia) => (
              <CardPlants
                key={familia.id}
                id={familia.id}
                nombre={familia.nombre}
                origen={familia.origen}
                descripcionFamilia={familia.descripcionFamilia}
                imagenPortada={familia.variantes[0].imagen}
              />
            ))
          )}
        </section>
      ) : (
        <>
          <section className="coleccion coleccion-destacada">
            <h2>Últimas plantas agregadas</h2>
            <div className="rejilla-plantas">
              {ultimasAgregadas.map((familia) => (
                <CardPlants
                  key={familia.id}
                  id={familia.id}
                  nombre={familia.nombre}
                  origen={familia.origen}
                  descripcionFamilia={familia.descripcionFamilia}
                  imagenPortada={familia.variantes[0].imagen}
                />
              ))}
            </div>
          </section>

          <section className="coleccion" id="especies">
            <h2>Todas las especies</h2>
            {familias.map((familia) => (
              <CardPlants
                key={familia.id}
                id={familia.id}
                nombre={familia.nombre}
                origen={familia.origen}
                descripcionFamilia={familia.descripcionFamilia}
                imagenPortada={familia.variantes[0].imagen}
              />
            ))}
          </section>
          
        </>
      )}
    </div>
  );
}

export default Inicio;
