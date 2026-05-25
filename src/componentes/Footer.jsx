import { Link } from "react-router-dom"
import logo from "../assets/imagenes/logo_ipcrowd.png"


function Footer() {  
{/* FOOTER */}

return ( 

<footer className="footer">
  <div className="footer-container">
    <div className="footer-top">
      <div className="footer-brand">
        <img src={logo} alt="IPcrowd logo" className="footer-logo" />
        <p>Impulsamos proyectos con impacto real.</p>
      </div>

      <div className="footer-links">
        <h3>Políticas</h3>
        <ul>
          <li><a href="#">Aviso legal</a></li>
          <li><a href="#">Política de privacidad</a></li>
          <li><a href="#">Política de cookies</a></li>
        </ul>
      </div>

      <div className="footer-contact">
        <h3>Envíanos un mensaje</h3>
        <a href="mailto:info@ipcrowd.com">info@ipcrowd.com</a>
      </div>

      <div className="footer-social">
        <h3>Síguenos</h3>
        <div className="social-icons">
          <a href="#">in</a>
          <a href="#">ig</a>
        </div>
      </div>
    </div>

    <div className="footer-bottom">
      <p>Copyright © IPcrowd 2026</p>
      <p>Conectando ideas, innovación e impacto.</p>
    </div>
  </div>
</footer>

  )
      }

export default Footer