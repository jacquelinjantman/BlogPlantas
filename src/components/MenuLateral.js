import { useState } from "react";
import { Link } from "react-router-dom";
import familias from "../data/plantas";

function MenuLateral() {
  const [abierto, setAbierto] = useState(false);
  const [familiaActiva, setFamiliaActiva] = useState(null);

  const familiaSeleccionada = familias.find((f) => f.id === familiaActiva);

  function alternarFamilia(id) {
    setFamiliaActiva((actual) => (actual === id ? null : id));
  }

  function cerrarMenu() {
    setAbierto(false);
    setFamiliaActiva(null);
  }

  return (
    <>
      <button
        className="boton-menu"
        onClick={() => setAbierto(!abierto)}
        aria-expanded={abierto}
      >
        {abierto ? "× Cerrar" : "☘ Plantas"}
      </button>

      <aside
        className={`menu-lateral ${abierto ? "menu-abierto" : ""} ${
          familiaSeleccionada ? "menu-ancho" : ""
        }`}
      >
        <div className="menu-cabecera">
          <p>HERBARIO PERSONAL</p>

          <button onClick={() => setAbierto(false)} aria-label="Cerrar menú">
            ×
          </button>
        </div>

        <div className="menu-columnas">
          <nav className="columna-familias">
            <Link className="enlace-inicio" to="/" onClick={cerrarMenu}>
              Inicio
            </Link>

            <p className="menu-titulo">Familias</p>

            {familias.map((familia) => (
              <button
                key={familia.id}
                className={
                  "boton-familia-menu" +
                  (familia.id === familiaActiva ? "Activa" : "")
                }
                onClick={() => alternarFamilia(familia.id)}
              >
                {familia.nombre}
              </button>
            ))}
          </nav>

          {familiaSeleccionada && (
            <nav className="columna-variantes">
              <p className="menu-titulo">{familiaSeleccionada.nombre}</p>

              <Link
                className="menu-variante menu-ver-familia"
                to={`/familia/${familiaSeleccionada.id}`}
                onClick={cerrarMenu}
              >
                Ver toda la familia →
              </Link>

              {familiaSeleccionada.variantes
                .filter((variante) => variante.nombre)
                .map((variante) => (
                  <Link
                    key={variante.id}
                    className="menu-variante"
                    to={`/familia/${familiaSeleccionada.id}/planta/${variante.id}`}
                    onClick={cerrarMenu}
                  >
                    {variante.nombre}
                  </Link>
                ))}
            </nav>
          )}
        </div>
      </aside>
    </>
  );
}

export default MenuLateral;
