import { useEffect, useRef } from "react";
import "./CursorBrillos.css";


function CursorBrillos() {
  const ultimaPosicion = useRef({ x: 0, y: 0 });

  useEffect(() => {
    function crearBrillito(x, y) {
      const brillito = document.createElement("span");
      brillito.className = "brillito";

   
      const simbolos = ["✦", "✧", "✵", "·"];
      brillito.textContent =
        simbolos[Math.floor(Math.random() * simbolos.length)];

      const tamano = 10 + Math.random() * 12;
      const desplazamientoX = (Math.random() - 0.5) * 30;
      const desplazamientoY = (Math.random() - 0.5) * 30;

      brillito.style.left = `${x}px`;
      brillito.style.top = `${y}px`;
      brillito.style.fontSize = `${tamano}px`;
      brillito.style.setProperty("--dx", `${desplazamientoX}px`);
      brillito.style.setProperty("--dy", `${desplazamientoY}px`);
      brillito.style.color = Math.random() > 0.5 ? "var(--crema)" : "var(--cobre)";

      document.body.appendChild(brillito);

    
      brillito.addEventListener("animationend", () => brillito.remove());
    }

    function alMoverMouse(evento) {
      const dx = evento.clientX - ultimaPosicion.current.x;
      const dy = evento.clientY - ultimaPosicion.current.y;
      const distancia = Math.sqrt(dx * dx + dy * dy);

    
      if (distancia > 24) {
        crearBrillito(evento.clientX, evento.clientY);
        ultimaPosicion.current = { x: evento.clientX, y: evento.clientY };
      }
    }

    window.addEventListener("mousemove", alMoverMouse);
    return () => window.removeEventListener("mousemove", alMoverMouse);
  }, []);

  return null;
}

export default CursorBrillos;