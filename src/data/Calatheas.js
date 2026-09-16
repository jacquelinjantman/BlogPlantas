import Calatheas from "../assets/images/Calatheas.jpg";
import CalatheaMakoyana from "../assets/images/makoyana.jpg";
import CalatheaPink from "../assets/images/calatheaPink.jpg";

export const calathea = [
  {
    id: "3",
    nombre: "Calatheas",
    origen: "Selvas tropicales de América Central y del Sur",
    imagen: Calatheas,
    descripcionFamilia: ` Pertenecen a la familia Marantaceae. Son plantas herbáceas de crecimiento terrestre y compacto que crecen a ras de suelo. Sus raíces no son muy largas ni profundas.
       En lugar de una raíz , tienen rizomas (tallos subterráneos horizontales) de donde brotan raíces delgadas y superficiales. Por eso prefieren macetas más anchas que profundas.`,
    fechaAgregado: "2026-09-15",
    variantes: [
      {
        id: "calathea-mayokana",
        nombre: "Calathea Mayokana",
        imagen: CalatheaMakoyana,
        descripcion:
          "Proviene de las selvas de America del Sur, centrandose en todo Brasil. Es una de las que mas se usan para la decoracion de interior. Son llamadas tambien planta de pavo real por la fomra ovalada de sus hojas y el parecido que tiene el patron de las hojas con plumas de pavo real. DATO CURIOSO! por la noche sus plantas se mueven constantemente, hasta cerrarse y por el dia vuelven a abrirse buscando luz",
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

             -Tiene la hoja manchas amarillas en distintas zonas y la tierra humeda, es por exceso de riego.\n
             -Si las hojas amarillas se secan y curvan por los bordes: es por falta de humedad ambiental o riego insuficiente.\n
             -Hojas palidas, amarillentas o con manchas quemadas: demasiada luz directa.\n
             -Hojas amarillas con aspecto apagado: por falta de nutrientes.\n
             -Si solo es una sola hoja: es NORMAL, es un proceso natural.`,
        },
        sustrato:
          "Fibra de coco/turba negra, humus de lombriz, perlita, vermiculita,corteza de pino",
        corientesDeAire: "EVITARLAS",
        reproduccion:
          "Se reproduce por rizomas, para poder separar la rizoma, se debe sacar todo el sustrato y con MUCHO CUIDADO separarlas",
      },
      {
        id: "calathea-triostar",
        nombre: "Calathea Triostar",
        imagen: CalatheaPink,
        descripcion:
          "Originaria de America del Sur, es conocida como planta rezadeita porque realiza un movimiento nictinastico, sus hojas se elevan y cierran de noche",
        cuidados: {
          luz: "Mucha luz indirecta",
          riego: "Mantener el sustrato humedo pero sin encharcar",
          humedad: "Alta humedad ambiental",
          temperatura:
            "Clima calido, no tolera el frio intenso ni las corrientes de aire",
        },

        problemas: {
          hojasAmarillas: `Hojas amarillas, exceso de riego.
          Bordes y puntas marrones, por falta de humedad.
          Hojas que se enrollan sobre si mismas, mecanismo de defensa, indica que tiene sed o que el ambiente esta seco`,
        },
        sustrato: "Fibra de coco/turba negra, humus de lombriz, perlita, pomez",
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
        ],
      },
    ],
  },
];
