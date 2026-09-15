import CardPlants from './cardPlants';

function listaPlantas({ lista}) {
  return (
    <>
    {lista.map((familia) => (
     <CardPlants
    key={familia.id}
id={familia.id}
nombre={familia.nombre}
    origen={familia.origen}
descripcionFamilia={familia.descripcionFamilia}
imagenPortada={familia.variantes[0].imagen}
/>
    ))  }



    </>
);
}
export default listaPlantas;