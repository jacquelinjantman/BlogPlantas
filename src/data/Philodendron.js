import PhiloBrasil from "../assets/images/PhiloBrasil.jpg";
import philoComun from "../assets/images/philocomun.jpg";
import PhiloLemon from "../assets/images/PhiloLemon.jpg";
export const philodendro = [

    {
    id: "Philodendron",
    nombre: "Philodendron",
    origen: `Regiones tropicales de América.`,
    descripcionFamilia: `Los Philodendron pertenecen a la familia botánica de las Aráceas (Araceae): no tienen flores comunes, sino una estructura llamada espádice (una especie de espiga carnosa) protegida por una espata (una hoja modificada que parece un pétalo, como la 'flor' blanca de las cunas de Moisés).
    Son plantas trepadoras, se pueden encontrar en bosques, selvas, rios, pantanos. Contiene mas de 700 especias`,
    fechaAgregado: "2026-09-15",
    variantes: [
      {
        id: "philodendron-brasil",
        nombre: "Philodendron Brasil",
        imagen: PhiloBrasil,
        descripcion: `Posee diferentes tonalidades, es una planta colgante, pero tambien se le puede poner tutores, por zonas en la  pared que queramos, o dejarla como colgante.`,
        cuidados: {
        luz: "Mucha luz indirecta y brillante",
        riego:
          "Ideal solo cuando los primeros 2 o 3 centimetros del sustrato este completamente seco, como toda planta tropical, en invierno reducir el riego",
        humedad:
          "Se adapta muy bien a la humedad normal de una casa (45% a 60%)",
        temperatura: "18°C a 24°C.",
        ubicacion:
          "Cerca de una ventana, 1 o 2 metros, sobre estanterias, repisas o colgado del techo",
       },
        problemas: {
          hojasAmarillas: `

            `,
        },
        sustrato: "",
        corientesDeAire: "EVITARLAS",
        reproduccion: "",
      
        plagasEnfermedades: [
          {
            nombre: "Pudricion de raices",
            senales:
              "Raices marrones y blandas (asfixiadas por el agua), planta marchita",
            accion:
              " sacar la planta, cortar las raices podridas, SIN MIEDO, desinfectar con fungicida y transplantarla con sustrato nuevo en una maceta que drene bien",
          },
          {
            nombre: "Mancha foliar (hongo Alternaria o Fusarium)",
            senales:
              "Manchas ciculares de color marron o negro en las hojas, muchas veces rodeadas por un halo amarillo",
            accion:
              "Cortar las hojas afectadas y evitar pulverizar agua directo sobre la planta si no  hay buena ventilacion",
          },
          {
            nombre: "Oidio (Mildiu polvoriento)",
            senales:
              "Fina capa de polvo blanco sobre la superficie de las hojas",
            accion:
              "Limpiar las hojas con agua y aceite de neem o  jabon potasico",
          },
          {
            nombre: "Arana roja",
            senales:
              "Puntitos amarillos en las hojas muy diminutas telaranas en la parte de atras de la hoja",
            accion:
              "Aumentar humedad ambiental, limpiar las hojas con agua y jabon potasico o aceite de neem",
          },
          {
            nombre: "Cochinilla Algodonosa",
            senales:
              "Se esconden en los pliegues donde los tallos se unen con la base. Absorben savia y debilitan la planta",
            accion:
              "Quitar una a una con bastoncillo de algodon empapado en alcohol",
          },
          {
            nombre: "Trip",
            senales:
              "insecto alargado de color negro, dejan las hojas con manchas decoloradas",
            accion:
              "aislar la planta para no contagiar y tratarla con jabon potasico o inseticida adecuada",
          },
        ],
      },
      {
        id: "philodendron-corazon",
        nombre: "Philodendron Corazon",
        imagen: philoComun,
        descripcion: `Cientificamente llamado "Philodendron hederaceum o scandens", nativo de regiones tropicales de America Central, el Caribe y gran parte de America del Sur, en selvas humedas y bosques tropicales. Es una planta epifita o hemiepifita, nace en el suelo pero comienza a trepar por troncos de arboles buscando la luz del sol. \n
        Es una de las mas conocidas y populares por su facil cuidado debido a su alta resistencia y su crecimiento rapido. \n
        Sus hojas tiene una forma de corazon y su textura es suave, es una planta colgante o trepadora. Si lo dejas colgar va a crear una cascada verde, si le pones un tutor sus raices se agarran de el y sus hojas van a crecer mucho mas grande.`,
        cuidados: {
        luz: "Mucha luz indirecta y brillante, pero tambien se adapta a espacios con luz media o baja",
        riego:
          "Moderado. Regar solo cuando los primeros 2 o 3 cm de sustrato esten secos. Soport mejor la falta de agua que el exceso.",
        humedad:
          "Se adapta muy bien a la humedad normal de una casa (45% a 60%), pero tambien seria bueno pulverizar sus hojas de vez en cuando, en los climas secos.",
        temperatura: "16°C a 24°C.",
        ubicacion:
          "Cerca de una ventana, donde reciba claridad del sol pero no le pegue directo a sus hojas",
        },
        problemas: {
          hojasAmarillas: `
           Hojas bajas amarillas y blandas: exceso de riego.\n
           Hojas amarillas secas: falta de riego. \n
           Manchas amarillas: Exceso de sol. \n
           Hojas palidas: falta de luz. \n

            `,
        },
        sustrato: "40% de tierra, 30% de turba, 20% de perlita, 10% de humus.",
        reproduccion: "Se puede propagar por esquejes de tallo. Cortar el tallo justo por debajo del nudo, que tenga al menos 2 o 3 hojas, podes ponerlo en la tierra o con un vaso de perlita o musgo. ",
      },
       {
        id: "philodendron-limon",
        nombre: "Philodendron Limon",
        imagen: PhiloLemon,
        descripcion: `Filodendro Corazón "Lemon Lime" (Philodendron hederaceum 'Lemon Lime') destaca por su follaje de color verde neon, amarillo electrico y verde lima claro, proviene de los bosques y selvas de Centroamerica y el Caribe. \n
        `,
        cuidados: {
        luz:`Indirecta brillante o moderada, si le falta luz sus hojas empiezan a nacer de un color verde apagado y comun, pero evitar el sol, ya que sus hojas son muy delicadas y el sol directo las quema.`,
        riego:
          "Regar solo cuando los primeros 3 a 5cm del sustrato esten secos al tacto. Cada 5 a 7 dis en primavera/verano y cada 10 a 14 dias de invierno. Regar de manera abundante hasta que el agua salga por los agujeros de drenahe de la maceta y retirar el exceso de agua del plato.",
        humedad:
          "Se adapta muy bien a la humedad normal de una casa (45% a 60%), pero tambien seria bueno pulverizar sus hojas de vez en cuando, en los climas secos.",
        temperatura: "16°C a 24°C.",
        ubicacion:
          "Cerca de una ventana, donde reciba claridad del sol pero no le pegue directo a sus hojas",
        },
        problemas: {
          hojasAmarillas: `
           Hojas bajas amarillas y blandas: exceso de riego.\n
           Hojas amarillas secas: falta de riego. \n
          Hojas quemadas y extremadamente amarillas: felta o exceso de luz. \n
         Hojas amarillas las hojas mas viejas: puede requerir nutrientes. \n

            `,
        },
        sustrato: "Fibra de coco o turba, corteza de pino, perlita y humus 10%.",
        reproduccion: "Se puede propagar por esquejes de tallo. Cortar el tallo justo por debajo del nudo, que tenga al menos 2 o 3 hojas, podes ponerlo en la tierra o con un vaso de perlita o musgo. ",
      },
    ],
  },
];