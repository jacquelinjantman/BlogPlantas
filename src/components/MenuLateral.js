import { useState } from "react";
import { Link } from "react-router-dom";
import familias from "../data/plantas";

function MenuLateral() {
  const [abierto, setAbierto] = useState(false);

  return (
    <>
      <button
        className="boton-menu"
        onClick={() => setAbierto(!abierto)}
        aria-expanded={abierto}
      >
        {abierto ? "× Cerrar" : "☘ Plantas" }
      </button>

      <aside className={`menu-lateral ${abierto ? "menu-abierto" : ""}`}>
        <div className="menu-cabecera">
          <p>HERBARIO PERSONAL</p>

          <button onClick={() => setAbierto(false)} aria-label="Cerrar menú">
            ×
          </button>
        </div>

        <nav>
          <Link
            className="enlace-inicio"
            to="/"
            onClick={() => setAbierto(false)}
          >
            Inicio
          </Link>

          <p className="menu-titulo">Familias</p>

          {familias.map((familia) => (
            <div className="grupo-familia" key={familia.id}>
              <Link
                to={`/familia/${familia.id}`}
                onClick={() => setAbierto(false)}
              >
                {familia.nombre}
              </Link>

              {familia.variantes
                .filter((variante) => variante.nombre)
                .map((variante) => (
                 <Link
                 className="menu-variante"
                 to={`/familia/${familia.id}/planta/${variante.id}`}
                 onClick={() => setAbierto(false)}
                 >
                  {variante.nombre}
                 </Link>
                ))}
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}

export default MenuLateral;
