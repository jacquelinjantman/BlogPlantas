import { Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import DetalleFamilia from "./pages/DetalleFamilia";
import MenuLateral from "./components/MenuLateral";
import DetallePlanta from "./pages/DetallePlanta";
import Vinilo from "./components/Vinilo";
import "./App.css";

function App() {
  return (
    <>
      <MenuLateral />
      <Vinilo />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/familia/:id" element={<DetalleFamilia />} />
        <Route path="/familia/:familiaId/planta/:plantaId" 
        element={<DetallePlanta />}
        />
      </Routes>
    </>
  );
}

export default App;
