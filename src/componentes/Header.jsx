import { Link } from "react-router-dom"
import logo from "../assets/imagenes/logo_ipcrowd.png"


function Header() {  
{/* HEADER */}

return ( 
      <header className="header">
        <div className="header-top">
          <a className="social-link" href="#">
            in
          </a>

          <img src={logo} alt="IPcrowd" className="logo" />

          <a className="contact-link" href="#">
            Contáctanos
          </a>
        </div>

         {/* BOTÓN HAMBURGUESA */}
         <button className="menu-toggle">
           ☰
         </button>

        <nav className="main-menu">
          <a href="#">Sobre Nosotros</a>
          <a href="#">Descubrir Proyectos</a>
          <a href="#">Cómo Funciona</a>
          <a href="#">Contacto</a>
        </nav>

          <Link to="/formulario-proyecto" className="support-btn">
           Crear campaña
        </Link>
       
      </header>
          )
      }
      export default Header