import Header from "../componentes/Header"
import Footer from "../componentes/Footer"
import bannerFormulario from "../assets/imagenes/banner-formulario.jpg";

import "./FormularioProyecto.css"
import { useState } from "react"

function FormularioProyecto() {

  const [pasoActual, setPasoActual] = useState(1)

  const siguientePaso = () => {
    if (pasoActual < 4) {
      setPasoActual(pasoActual + 1)
    }
  }

  const pasoAnterior = () => {
    if (pasoActual > 1) {
      setPasoActual(pasoActual - 1)
    }
  }

  return (

     <>
    <div className="formulario-layout">
    <Header />
    
     {/* HERO BANNER */}
      <section className="form-hero">
        <img src={bannerFormulario} alt="Banner formulario" />
           <div className="form-hero-overlay">
           <h1> CREA TU CAMPAÑA </h1>
           <p>  Presenta tu proyecto y conecta con personas que quieran impulsar el cambio. </p>
         </div>
      </section>

      <section className="formulario-page">
           <div className="formulario-container">

        {/* HEADER */}
        <div className="formulario-header">
           <h2> Inicia tu proyecto </h2>
         </div>
       

        {/* PASOS */}

        <div className="formulario-steps">

          <div className={pasoActual >= 1 ? "step active" : "step"}>
            <div className="step-circle">1</div>
            <span>Datos</span>
          </div>

          <div className={pasoActual >= 2 ? "step active" : "step"}>
            <div className="step-circle">2</div>
            <span>Perfil</span>
          </div>

          <div className={pasoActual >= 3 ? "step active" : "step"}>
            <div className="step-circle">3</div>
            <span>Proyecto</span>
          </div>

          <div className={pasoActual >= 4 ? "step active" : "step"}>
            <div className="step-circle">4</div>
            <span>Confirmación</span>
          </div>

        </div>

        {/* FORMULARIO */}

        <div className="formulario-card">

          {/* PASO 1 */}

          {pasoActual === 1 && (

            <div className="form-step">

              <h2>Datos personales</h2>

              <div className="form-grid">

                <div className="input-group">
                  <label>Nombre completo</label>
                  <input type="text" placeholder="Tu nombre" />
                </div>

                <div className="input-group">
                  <label>Email</label>
                  <input type="email" placeholder="correo@email.com" />
                </div>

                <div className="input-group">
                  <label>Teléfono</label>
                  <input type="text" placeholder="+34..." />
                </div>

                <div className="input-group">
                  <label>País</label>
                  <input type="text" placeholder="España" />
                </div>

                <div className="input-group full">
                  <label>Tipo de creador</label>

                  <select>
                    <option>Selecciona una opción</option>
                    <option>Investigador/a</option>
                    <option>Artista / Creativo</option>
                    <option>Startup / Empresa</option>
                    <option>ONG / Fundación</option>
                    <option>Educador/a</option>
                    <option>Colectivo</option>
                    <option>Estudiante</option>
                    <option>Institución</option>
                    <option>Otro</option>
                  </select>

                </div>

              </div>

            </div>

          )}

          {/* PASO 2 */}

          {pasoActual === 2 && (

            <div className="form-step">

              <h2>Perfil público</h2>

              <div className="form-grid">

                <div className="input-group full">
                  <label>Nombre público</label>
                  <input type="text" placeholder="Nombre visible" />
                </div>

                <div className="input-group full">
                  <label>Biografía corta</label>
                  <textarea placeholder="Cuéntanos sobre ti..." />
                </div>

                <div className="input-group">
                  <label>Instagram</label>
                  <input type="text" placeholder="@usuario" />
                </div>

                <div className="input-group">
                  <label>Sitio web</label>
                  <input type="text" placeholder="www..." />
                </div>

              </div>

            </div>

          )}

          {/* PASO 3 */}

          {pasoActual === 3 && (

            <div className="form-step">

              <h2>Tu proyecto</h2>

              <div className="form-grid">

                <div className="input-group full">
                  <label>Título del proyecto</label>
                  <input type="text" placeholder="Nombre del proyecto" />
                </div>

                <div className="input-group">
                  <label>Categoría</label>

                  <select>
                    <option>Selecciona categoría</option>
                    <option>Ciencia y Tecnología</option>
                    <option>Salud y Bienestar</option>
                    <option>Cultura y Arte</option>
                    <option>Medio Ambiente</option>
                    <option>Educación</option>
                  </select>

                </div>

                <div className="input-group">
                  <label>Objetivo económico (€)</label>
                  <input type="number" placeholder="5000" />
                </div>

                <div className="input-group full">
                  <label>Descripción breve</label>
                  <textarea placeholder="Describe tu proyecto..." />
                </div>

                <div className="input-group full">
                  <label>Impacto esperado</label>
                  <textarea placeholder="¿Qué cambio quieres generar?" />
                </div>

              </div>

            </div>

          )}

          {/* PASO 4 */}

          {pasoActual === 4 && (

            <div className="form-step confirmacion">

              <h2>Confirmación</h2>

              <p>
                Tu propuesta está lista para enviarse al equipo de IPCROWD.
              </p>

              <div className="confirm-box">

                <h3>
                  Proyecto preparado correctamente ✨
                </h3>

                <span>
                  Revisaremos tu propuesta y nos pondremos en contacto contigo.
                </span>

              </div>

            </div>

          )}

          {/* BOTONES */}

          <div className="form-buttons">

            {pasoActual > 1 && (
              <button
                className="btn-secundario"
                onClick={pasoAnterior}
              >
                Volver
              </button>
            )}

            {pasoActual < 4 ? (
              <button
                className="btn-principal"
                onClick={siguientePaso}
              >
                Siguiente paso
              </button>
            ) : (
              <button className="btn-principal">
                Enviar proyecto
              </button>
            )}

          </div>

        </div>

      </div>

    </section>

    <Footer />
    </div>
</>
  )
}

export default FormularioProyecto