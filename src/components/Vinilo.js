import { useRef, useState } from "react";


function Vinilo() {
  const audioRef = useRef(null);
  const [reproduciendo, setReproduciendo] = useState(false);

  const alternarMusica = async () => {
    if (reproduciendo) {
      audioRef.current.pause();
      setReproduciendo(false);
    } else {
      await audioRef.current.play();
      setReproduciendo(true);
    }
  };

  return (
      <div className="reproductor-vinilo">
      <audio ref={audioRef} loop>
        <source src="/audio/audio.mp3" type="audio/mpeg" />
      </audio>

      <button
        className={`vinilo ${reproduciendo ? "vinilo-girando" : ""}`}
        onClick={alternarMusica}
        aria-label={reproduciendo ? "Pausar música" : "Reproducir música"}
      >
        <span className="etiqueta-vinilo">
          JARDÍN
          <br />
          NOCTURNO
        </span>
      </button>

      <p>{reproduciendo ? "Pausar ambiente" : "Escuchar ambiente"}</p>
    </div>
  );
}

export default Vinilo;
