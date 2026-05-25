import { Routes, Route } from "react-router-dom"
import FormularioProyecto from "./formulario/FormularioProyecto"
import Inicio from "./PaginaPrincipal/Inicio"


function App() {

  return ( 
    <Routes>
      <Route path="/" element={<Inicio/>} />
      <Route path="/formulario-proyecto" element={<FormularioProyecto />} />
    </Routes>
  )
    }
 export default App
