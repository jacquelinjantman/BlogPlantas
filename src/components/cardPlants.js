import { Link } from "react-router-dom";

function CardPlants({ id, nombre, origen, descripcionFamilia, imagenPortada }) {
  return (
    <Link to={`/familia/${id}`} className="tarjeta-enlace">
      <div>
        <article className="tarjeta-planta"></article>
        {imagenPortada && (
          <img src={imagenPortada} alt={nombre} className="tarjeta-imagen" />
        )}
        <h2 className="tarjeta-nombre">{nombre}</h2>
        <p className="tarjeta-origen">
          <strong>Origen:</strong> {origen}
        </p>
        <p className="tarjeta-descripcion">{descripcionFamilia}</p>
      </div>
    </Link>
  );
}

export default CardPlants;
