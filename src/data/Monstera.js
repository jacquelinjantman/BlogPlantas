import monstera from "../assets/images/monstera.jpg";
import MonsteraVariegada from "../assets/images/MonsteraVariegada.jpg";
import Adansoni from "../assets/images/Adansoni.jpg";
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
    ],
  },
];
