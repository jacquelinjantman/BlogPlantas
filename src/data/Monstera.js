import monstera from "../assets/images/monstera.jpg";
import MonsteraVariegada from "../assets/images/MonsteraVariegada.jpg";
import Adansoni from "../assets/images/Adansoni.jpg";
import thai from "../assets/images/thai1.jpg";
import aurea from "../assets/images/aureaVariegata.jpg";
import obliqua from "../assets/images/Oblicua.jpg";
import siltepecana from "../assets/images/siltepecana.jpg";
import burle from "../assets/images/burle.jpg";
import dubia from "../assets/images/dubia.jpg";
import peru from "../assets/images/peru.jpg";
export const monsteras = [
  {
    id: "1",
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
          riego: "Regar cuando se seque la capa superior del sustrato.",
          humedad: "Prefiere humedad media o alta.",
          temperatura: "Entre 18 °C y 28 °C; protégela del frío.",
        },

        problemas: {
          hojasAmarillas: `Hojas amarillas y blandas, exceso de riego.\n
         Hoja amarilla en toda la planta, por falta de humedad o de agua.\n
          Hojas con machas amarillas lavadas, quemadura de sol.\n
          Hojas con manchas amarillas diminutas acompanada de telarana, plaga(arana roja).\n
          TODAS LAS MONSTERAS REACCIONAN DE ESA MANERA`,
        },
        sustrato:
          "Mezcla ligera, aireada y con buen drenaje (corteza, perlita)",
      },
      {
        id: "monstera-thai",
        nombre: "Monstera Thai Constellation",
        imagen: thai,
        descripcion: `Una de las plantas más deseadas del mundo por su espectacular variegación color crema que simula un cielo estrellado. Al no tener clorofila en sus zonas claras, sus cuidados con mas exigentes y precisos que los de una monstera comun.\n
          A diferencia de la monstera comun. La Thai es una planta cultivada e identificada mediante la ciencia, desarrollado en un laboratorio de cultivo de tejidos en Tailandia.`,
        cuidados: {
          luz: "Mucha luz indirecta brillante. Al tener menos areas verdes, necesita mas luz para hacer la fotosintesis y mantener su patron crema. Evitar SOL DIRECTO",
          riego:
            "Muy propenso a la pudricion de raices. Regar unicamente cuando el sustrato ese casi seco por completo",
          humedad: "Prefiere humedad  alta (60%-80%).",
          temperatura: "Entre 18 °C y 28 °C; protégela del frío.",
        },

        problemas: {
          hojasAmarillas: `Hojas inferiores amarillas: exceso de riego/pudricion de raices.\n
          Puntas o bordes amarillos: falta de humedad ambiental (agruparlas con otras plantas o poner un humificador).\n
          Manchas color crema se vuelven amarillas y opacas: Falta de luz. (Acercarla a ventana con luz brillante, no directo).
       `,
        },
        sustrato:
          "Mezcla aireado y poroso. Mucha perlita, corteza de orquidea y carbon vegetal. Recomiendo usar Tutor para todas las monsteras para que sus raices puedan treparse y que sus hojas crezcan mas",
        corientesDeAire: "Afectan muchisimo las corrientes de aire",
        plagasEnfermedades: [
          {
            nombre: "Trips",
            senales: "Puntos negros sobre las hojas. Hojas nuevas deformes",
            accion:
              " Separalas de las demas plantas, tratarla con aceite de neem o insecticida sistemico",
          },
        ],
      },
      {
        id: "monstera-variegada",
        nombre: "Monstera Variegada",
        imagen: MonsteraVariegada,
        descripcion: `Esta planta espectacular tiene una historia que mezcla la botanica con la ciencia de laboratorio. Sus manchas blancas nacen de una mutacion genetica espontanea que causa que algunas partes de la planta no produzcan clorofila./n
           Esta variedad se descubrio y comenzo a propagar a traves de esquejes en invernaderos y cultivos.`,
        cuidados: {
          luz: "Cerca de la venana muy iluminada pero protegida, los rayos directo queman facilmente las partes blancas",
          riego:
            "Dejar secar 3 a 5cm de tierra antes de regas, evital encharcamiento, regar solo cuando la tierra esta ceca al tacto",
          humedad: "Ambiente humedo (60%)",
          temperatura: "18°C - 27°C",
        },
        problemas: {
          hojasAmarillas: `Las partes blancas se vuelven amarillas y despues marrones: luz insuficiente.\n
          Toda la hoja se vuelve amarilla: exceso de riego.\n
          Hojas nuevas nacen amarillas o palidas: falta de nutrientes.`,
        },
        sustrato:
          "Mezcla ligera, aireada y con buen drenaje (corteza, perlita)",
      },

      {
        id: "monstera-aurea",
        nombre: "Monstera Aurea Variegata",
        imagen: aurea,
        descripcion: `Se caracteriza por tener una variegacion de un color amarillo vribante o dorado.\n
        A diferencia de la Thai, proviene de una mutacion quimerica natural. Significa que esa causa se puede revertir. Si empieza a sacar hojas verdes, pierde el color amarillo para siempre, a menos que se pode.`,
        cuidados: {
          luz: "Tolera incluso prefiere un poco menos de intensidad luminica. Mucha luz brillante hace que sus partes amarillas se quemen. ",
          riego:
            "Muy propensa a la pudricion. Regar cuando el sustrato este seco de arriba a abajo.",
          humedad: "Ambiente humedo (60%-80%)",
          temperatura: "18°C - 25°C",
        },
        problemas: {
          hojasAmarillas: `Fenomeno Melt: si las partes amarillas naturales de la hoja se vuelven marrones, negras y crujientes, se debe a exceso de luz o humedad baja.\n
          Hojas amarillas de arriba a abajo: asfixia por exceso de riego.\n
         Perdida de hojas basales: si solo se amarillea la hoja mas chica y vieja de la parte inferior de la planta, es un proceso natural de envejecimiento.`,
        },
        sustrato:
          "2 partes de corteza de orquidea, sustrato universal, 1 parte de perlita, humus y carbon vegetal",
      },
      {
        id: "monstera-obliqua",
        nombre: "Monstera Obliqua",
        imagen: obliqua,
        descripcion: `El "santo grial" de las monsteras, una de las mas extremas del mundo.\n
        Sus hojas muy delgadas como el papel, tiene tanta fenestracion que estan compuesta por hasta un 90% de agujeros vacios.\n
        Planta muy delicada y de crecimiento lento`,
        cuidados: {
          luz: "Luz filtrada o indirecta de media a brillante. Al ser nativa del suelo profundo de la selva amazonica, el solo directo le desintegra por completo. ",
          riego:
            "El musgo o sustrato tiene que estar siempre ligeramente humedo, JAMAS encharcado.",
          humedad: "Ambiente muy humedo (85%-95%)",
          temperatura: "21°C - 26°C",
        },
        problemas: {
          hojasAmarillas: `Bordes amarillos, curvatura hacia abajo: falta de humedad.\n
          Hoja amarilla entera: exceso de agua o falta de oxigeno.\n
          Manchas amarillas: Hongo foliar, por falta de ventilacion, cortar la hoja afectada.\n
          Hoja decolorada o palida amarilla: Falta de nutrientes, pasarla a un lugar con mejor luz.`,
        },
        sustrato:
          "Los expertos recomiedan 100% de musgo sphagnum mezclado con perlita.",
      },

      {
        id: "monstera-adansoni",
        nombre: "Monstera Adansonii",
        imagen: Adansoni,
        descripcion:
          "Conocida como esqueleto, es una planta trepadora tropical famosa por las perforaciones naturales de sus hojas(fenestraciones) son de origen tropical y se distribuye por Centroamerica y Sudamerica",
        cuidados: {
          luz: "Requiere abundante luz indirecta, NO DIRECTO, si no recibe la luz necesaria sus hojas van a crecer cada vez mas chicas y sin sus caracteristicos agujeros",
          riego:
            "Cuando los primero centimetros del sustrato esten secos. Es sensible al exceso de agua, pudriendo sus raices facilmente",
          humedad:
            "Ambiente humedo (60%). Si el aire es muy seco, las puntas de sus hojas comienzan a ponerse marrones",
          temperatura: "18°C - 27°C",
        },

        sustrato:
          "Mezcla ligera, aireada y con buen drenaje (corteza, perlita)",
      },
      {
        id: "monstera-siltepecana",
        nombre: "Monstera Siltepecana",
        imagen: siltepecana,
        descripcion: `Variedad que tiene dos etapas de vida:\n
  Etapa juvenil: sus hojas son de color verde azulado con patron plateado, sin ninguna fenestracion.\n
  Etapa adulta: si trepa, las hojas pierden el color plateado, se vuelven gigantes y desarrollan grandes fenestraciones.\n
  Es una planta nativa de los bosques tropicales humedos del sur de Mexico y America Central. Su nombre cientifico por el municipio de Siltepec, ubicado en el estado Chiapas, Mexico.`,
        cuidados: {
          luz: "Luz indirecta brillante",
          riego:
            "Dejar secar la mitad superior del sustrato antes de volver a regar.",
          humedad:
            "Se adapta muy bien a la humedad normal de una casa, pero va a crecer mas rapido si su humedad por encima del 60%.",
          temperatura: "18°C - 25°C",
        },

        sustrato: "Tierra de hojas, perlita, corteza de orquidea.",
        problemas: {
          hojasAmarillas: `Hoja amarilla y blanda cerca de la base: sustrato reteniendo agua.\n
          Puntas amarillas que se vuelvan marrones: falta de humedad o agua.\n
          Hoja palida, amarilla y alargada: falta de luz.`,
        },
      },
      {
        id: "monstera-Burle",
        nombre: "Monstera Burle Marx Flame",
        imagen: burle,
        descripcion: `Personalmente la que mas me gusta. Una de las plantas mas misticas y deseadas del mundo. Su nombre rinde homenaje al famoso paisajista brasileno Roberto Burle Marx.\n
  Sus hojas maduras son gruesas, coriaceas y tienen cortes tan profundos que recuerdan a la silueta de una llama verde o una caja toracica.`,
        cuidados: {
          luz: "Luz indirecta brillante.",
          riego: "Sustrato completamente seco antes de regar.",
          humedad: "Humedad superior al 60%.",
          temperatura: "18°C - 28°C",
        },

        sustrato:
          "Corteza de orquidea, perlita, turba/fibra de coco, carbon vegetal, humus de lombriz.",
        problemas: {
          hojasAmarillas: `Hojas inferiores amarillas y sustrato humedo: exceso de riego o principio de pudricion de raices.\n
          Hojas palidas y amarillentas o tallos largos: Falta de luz.\n
          Bordes amarillos que se vuelven marrones y crujientes: humedad ambiental baja.\n
          `,
        },
      },
      {
        id: "monstera-Dubia",
        nombre: "Monstera Dubia",
        imagen: dubia,
        descripcion: `Conocida como planta teja. En su etapa juvenil, sus hojas tienen forma de corazon, son de color verde con patron plateado y crecen pegadas y planas contra la superficie.\n
  Si llega a lo alto de un arbol, sus hojas se separan de la superficie y desarrollan  grandes perforaciones.\n
  Nativa de las densas selvas de America Central y del Sur.`,
        cuidados: {
          luz: "Luz indirecta brillante. Necesita buena iluminacion para mantener el plateado y verde de sus hojas.No directo.",
          riego:
            "Moderado, regar cuando los primeros 3 a 5cm de sustrato esten secos.",
          humedad: "Humedad superior al 60%.",
          temperatura: "18°C - 28°C",
        },

        sustrato:
          "Corteza de orquidea, perlita, turba/fibra de coco, humus de lombriz.",
        problemas: {
          hojasAmarillas: `Hojas amarillas y blandas: exceso de riego.\n
          Hojas palidas o amarillentas: falta de luz.\n
          Borde amarillo volviendose marron y crujiente: falta de humedad.
          `,
        },
      },
      {
        id: "monstera-Peru",
        nombre: "Monstera Peru",
        imagen: peru,
        descripcion: `Una de las variedades mas inusuales.Sus hojas no desarrollan fenestraciones, sino que son gruesas, coriaceas y tienen una textura rugosa y tridimensional.\n
 Es nativa de las selvas tropicales de America Central y Sur, principalmente asociadas a regiones humedas de Peru. Crece trepando por los troncos de los arboles. `,
        cuidados: {
          luz: "Luz indirecta brillante, al tener hojas gruesas tolera mejor los espacios de luz media en comparacion con las monsteras variegadas.",
          riego:
            "Al tener hojas gruesas, retiene mejor el agua, solamente regar cuando el sustrato este seco al tacto.",
          humedad: "Humedad superior al 60%.",
          temperatura: "18°C - 28°C",
        },

        sustrato: "Sustrato suelto, perlita, corteza de orquidea.",
        problemas: {
          hojasAmarillas: `Hojas inferiores amarilla, blandas y translucidas: exceso de riego severo.\n
          Hojas que pierden el verde y se vuelven palida o amarillenta: falta de nutrientes.\n
          Puntas amarillas que se vuelven marrones: falta de humedad.
          `,
        },
      },
    ],
  },
];
