import monstera from "../assets/images/monstera.jpg";
import MonsteraVariegada from "../assets/images/MonsteraVariegada.jpg";
import Calatheas from "../assets/images/Calatheas.jpg";
import CalatheaMakoyana from "../assets/images/makoyana.jpg";
import PhiloBrasil from "../assets/images/PhiloBrasil.jpg";

const familias = [
  {
    id: "monstera",
    nombre: "Monstera",
    origen: "Selva tropical de Centroamerica",
    descripcionFamilia:
      "Plantas trepadoras conocidas por sus hojas grandes con perforaciones naturales (fenestraciones), muy populares como plantas de interior.",
    fechaAgregado: "2026-07-25",
    variantes: [
      {
        id: "monstera-deliciosa",
        nombre: "Monstera Deliciosa",
        imagen: monstera,
        descripcion:
          "Es una trepadora tropical de hojas grandes y perforadas. Crece muy bien en interiores luminosos.",
        cuidados: {
          luz: "Luz indirecta brillante. Evita el sol directo intenso.",
          riego: "Riega cuando se seque la capa superior del sustrato.",
          humedad: "Prefiere humedad media o alta.",
          temperatura: "Entre 18 °C y 28 °C; protégela del frío.",
        },
      },
      {
        id: "monstera-variegada",
        nombre: "Monstera Variegada",
        imagen: MonsteraVariegada,
        descripcion:
          "esta planta espectacular tiene una historia que mezcla la botanica con la ciencia de laboratorio. Sus manchas blancas nacen de una mutacion genetica espontanea que causa que algunas partes de la planta no produzcan clorofila. Esta variedad se descubrio y comenzo a propagar a traves de esquejes en invernaderos y cultivos.",
        cuidados: {
          luz: "cerca de la venana muy iluminada pero protegida, los rayos directo queman facilmente las partes blancas",
          riego:
            "dejar secar 3 a 5cm de tierra antes de regas, evital encharcamiento, regar solo cuando la tierra esta ceca al tacto",
          humedad: "Ambiente humedo (60%)",
          temperatura: "18°C - 27°C",
        },
        ubicacion:
          "Colócala cerca de una ventana luminosa con una cortina fina. Necesita mucha luz indirecta, pero el sol directo puede quemar sus zonas blancas.",
        problemas: {
          hojasAmarillas:
            "Revisa primero el riego: las hojas amarillas suelen aparecer por exceso de agua o por un sustrato que retiene demasiada humedad. También pueden indicar poca luz.",
        },
        sustrato:
          "usar mezcla gruesa con turba, perlita, fibra de coco, corteza de pino.",
        corientesDeAire:
          "Las Monsteras variegadas odian las corrientes de aire (tanto frías como calientes) porque resecan el ambiente de forma drástica y estresan a la planta. NUNCA AL LADO DE AIRES O CALEFACTORES",
        reproduccion: `Mediante esquejes de tallo con un nodo (o nudo)
        Paso 1: Identifica el nudo y la raíz aéreaBusca en el tallo una zona abultada de donde sale una pequeña raíz de color marrón (raíz aérea) y donde se une el pecíolo de la hoja. Ese es el nudo.
        Paso 2: Haz el corteCon unas tijeras o cúter previamente desinfectados con alcohol, haz un corte limpio aproximadamente 2 cm por debajo del nudo.
        Paso 3: El enraizamiento (Tienes 3 opciones) en agua, en musgo o en perlita.
        `,
        plagasEnfermedades: [
          {
            nombre: "Cochinilla algodonosa",
            senales:
              "Pequeños copos blancos en los tallos, uniones de las hojas o parte inferior de las hojas.",
            accion:
              "Aísla la planta y retira los insectos con cuidado antes de que se propaguen.",
          },
          {
            nombre: "Araña roja",
            senales:
              "Puntos claros en las hojas, aspecto apagado o telarañas muy finas.",
            accion:
              "Revisa especialmente el reverso de las hojas y mejora la humedad ambiental.",
          },
          {
            nombre: "Pudrición de raíces",
            senales:
              "Hojas amarillas, tallos blandos o sustrato húmedo durante demasiado tiempo.",
            accion:
              "Revisa el drenaje y evita regar si el sustrato todavía está mojado.",
          },
        ],
      },
    ],
  },

  {
    id: "Calatheas",
    nombre: "Calatheas",
    origen: "Selvas tropicales de América Central y del Sur",
    imagen: Calatheas,
    descripcionFamilia:
      " Pertenecen a la familia Marantaceae. Son plantas herbáceas de crecimiento terrestre y compacto que crecen a ras de suelo. Sus raíces no son muy largas ni profundas. En lugar de una raíz central larga, tienen rizomas (tallos subterráneos horizontales) de donde brotan raíces delgadas y superficiales. Por eso prefieren macetas más anchas que profundas.",
    fechaAgregado: "2026-09-15",
    variantes: [
      {
        id: "calathea-mayokana",
        nombre: "Calathea Mayokana",
        imagen: CalatheaMakoyana,
        descripcion:
          "proviene de las selvas de America del Sur, centrandose en todo Brasil. Es una de las que mas se usan para la decoracion de interior. Son llamadas tambien planta de pavo real por la fomra ovalada de sus hojas y el parecido que tiene el patron de las hojas con plumas de pavo real. DATO CURIOSO! por la noche sus plantas se mueven constantemente, hasta cerrarse y por el dia vuelven a abrirse buscando luz",
        cuidados: {
          luz: "Se adapta a cualquier lugar, cuanta mas luz indirecta le de, mejor, ya que los rayos director pueden quemar las hojas",
          riego:
            "Dejar secar MUCHO el sustrato, no regar en exceso. COMO SABERLO? introducir un palito de madera en el sustrato y si sale seco, es hora de regar!",
          humedad:
            "Prefieren entornos cálidos con altos niveles de humedad y sombra parcial. TIP unirlas con tus otras plantas o poner un humificador cerca",
          temperatura: "Tiene muy poca resistencia al frio - Ideal 18°C - 24°C",
        },
        ubicacion:
          "Cerca de una ventana a 2 metros de distancia. Baño con ventana y buena iluminacion, gracias a su alta humedad. EVITAR ESQUINAS OSCURAS, JUNTO A FUENTES DE CALOR O FRIO",
        problemas: {
          hojasAmarillas: `Es una planta muy sensible en lo personal, suelen ponerse amarillos por estres y tambien depende de la zona amarilla.
             SI: 

             -Tiene la hoja manchas amarillas en distintas zonas y la tierra humeda, es por exceso de riego. 
             -Si las hojas amarillas se secan y curvan por los bordes: es por falta de humedad ambiental o riego insuficiente.
             -Hojas palidas, amarillentas o con manchas quemadas: demasiada luz directa
             -Hojas amarillas con aspecto apagado: por falta de nutrientes
             -Si solo es una sola hoja: es NORMAL, es un proceso natural.`,
        },
        sustrato:
          "Fibra de coco/turba negra, humus de lombriz, perlita, vermiculita,corteza de pino",
        corientesDeAire: "EVITARLAS",
        reproduccion:
          "Se reproduce por rizomas, para poder separar la rizoma, se debe sacar todo el sustrato y con MUCHO CUIDADO separarlas",
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
    ],
  },
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
        luz: "Mucha luz indirecta y brillante",
        riego:
          "Ideal solo cuando los primeros 2 o 3 centimetros del sustrato este completamente seco, como toda planta tropical, en invierno reducir el riego",
        humedad:
          "Se adapta muy bien a la humedad normal de una casa (45% a 60%)",
        temperatura: "18°C a 24°C.",
        ubicacion:
          "Cerca de una ventana, 1 o 2 metros, sobre estanterias, repisas o colgado del techo",
        problemas: {
          hojasAmarillas: `Es una planta muy sensible en lo personal, suelen ponerse amarillos por estres y tambien depende de la zona amarilla.
             SI: 

             -Tiene la hoja manchas amarillas en distintas zonas y la tierra humeda, es por exceso de riego. 
             -Si las hojas amarillas se secan y curvan por los bordes: es por falta de humedad ambiental o riego insuficiente.
             -Hojas palidas, amarillentas o con manchas quemadas: demasiada luz directa
             -Hojas amarillas con aspecto apagado: por falta de nutrientes
             -Si solo es una sola hoja: es NORMAL, es un proceso natural.`,
        },
        sustrato:
          "Fibra de coco/turba negra, humus de lombriz, perlita, vermiculita,corteza de pino",
        corientesDeAire: "EVITARLAS",
        reproduccion:
          "Se reproduce por rizomas, para poder separar la rizoma, se debe sacar todo el sustrato y con MUCHO CUIDADO separarlas",
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
    ],
  },
];

export default familias;
