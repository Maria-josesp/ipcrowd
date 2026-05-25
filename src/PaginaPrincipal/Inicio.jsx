import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import logo from "../assets/imagenes/logo_ipcrowd.png"

import avesAudio from "../assets/imagenes/aves-audio.png"
import comics from "../assets/imagenes/comics.png"
import cuidadores from "../assets/imagenes/cuidadores-responsables.jpg"
import teatro from "../assets/imagenes/obra-teatro.jpg"

import "../App.css"

const slides = [avesAudio, comics, cuidadores, teatro]
const campaigns = [
  {
    categoria: "IMPULSO ESCÉNICO",
    titulo: "Lanzamiento de Nuevos Talentos en Teatro y Danza",
    imagen: teatro,
    porcentaje: 62,
    descripcion:
      "Apoyo financiero inicial para la producción de obras, espectáculos de danza y eventos culturales que impulsan el arte y la expresión creativa.",
    recaudado: "$9,300",
    meta: "$15,000",
    donantes: "128",
    fecha: "15 Jul 2025",
  },
  {
    categoria: "CIENCIA Y TECNOLOGÍA",
    titulo: "Investigación con Impacto Social",
    imagen: comics,
    porcentaje: 48,
    descripcion:
      "Apoyo a iniciativas científicas y tecnológicas que buscan resolver problemas reales mediante innovación aplicada.",
    recaudado: "$7,200",
    meta: "$15,000",
    donantes: "94",
    fecha: "22 Ago 2025",
  },
  {
    categoria: "SALUD Y CUIDADO",
    titulo: "Red de Apoyo para Cuidadores",
    imagen: cuidadores,
    porcentaje: 75,
    descripcion:
      "Campaña dirigida a fortalecer programas de acompañamiento, salud y bienestar para personas cuidadoras.",
    recaudado: "$11,250",
    meta: "$15,000",
    donantes: "210",
    fecha: "30 Sep 2025",
  },
]

function Inicio() { 


 const [slideActual, setSlideActual] = useState(0)
  const [campaignActual, setCampaignActual] = useState(0)

  useEffect(() => {
  const interval = setInterval(() => {
    setCampaignActual((actual) => (actual + 1) % campaigns.length)
  }, 5000)

  return () => clearInterval(interval)
}, [])

  const campaign = campaigns[campaignActual]

  const nextCampaign = () => {
  setCampaignActual((actual) => (actual + 1) % campaigns.length)
}

  const prevCampaign = () => {
  setCampaignActual((actual) =>
    actual === 0 ? campaigns.length - 1 : actual - 1
  )
}
  const esencia = [
  {
    titulo: "Misión",
    imagen: avesAudio,
    icono: "◎",
    texto:
      "IPcrowd nace con el objetivo de conectar investigaciones, proyectos creativos e iniciativas de impacto con oportunidades reales de financiación.",
  },
  {
    titulo: "Compromiso",
    imagen: comics,
    icono: "↗",
    texto:
      "Impulsamos campañas verificadas en ciencia, tecnología, cultura, salud e innovación para que cada proyecto alcance su objetivo.",
  },
  {
    titulo: "Metodología",
    imagen: cuidadores,
    icono: "☷",
    texto:
      "Evaluamos la viabilidad, el impacto social, el liderazgo y la capacidad técnica antes de presentar cada proyecto a nuestra comunidad.",
  },
]


  useEffect(() => {
    const intervalo = setInterval(() => {
      setSlideActual((actual) => (actual + 1) % slides.length)
    }, 5000)

    return () => clearInterval(intervalo)
  }, [])

  return (
    <div className="home">
      
      {/* HERO*/ }
      <section className="hero">

         {/* HEADER */}
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
        {slides.map((imagen, index) => (
          <div
            key={index}
            className={`hero-slide ${
              index === slideActual ? "active" : ""
            }`}
            style={{
              backgroundImage: `url(${imagen})`,
            }}
          ></div>
        ))}

        <div className="overlay"></div>

        <div className="hero-content">
          <p>
            CIENCIA, TECNOLOGÍA, CULTURA,
            SALUD E INNOVACIÓN CON IMPACTO REAL
          </p>

          <h1>
            IMPULSAMOS <br />
            INVESTIGACIONES QUE <br />
            {" "}
            <span className="highlight">
              TRANSFORMAN EL FUTURO
            </span>
          </h1>

          <span>
            Conectamos proyectos verificados
            con personas, empresas e instituciones
            que desean impulsar innovación real.
          </span>

          <button>
            DESCUBRE NUESTROS PROYECTOS
          </button>
        </div>

        <div className="dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={
                index === slideActual
                  ? "dot active-dot"
                  : "dot"
              }
              onClick={() =>
                setSlideActual(index)
              }
            ></button>
          ))}
        </div>
      </section>
      
<section className="essence-section">
  <div className="essence-header">
    <p>NUESTRA ESENCIA</p>
    <h2>Ciencia, innovación y compromiso</h2>
    <span>
      Trabajamos para conectar ideas con oportunidades y generar impacto real en la sociedad.
    </span>
  </div>

  <div className="essence-grid">
    {esencia.map((item, index) => (
      <article className="essence-card" key={index}>
        <div className="essence-image">
          <img src={item.imagen} alt={item.titulo} />
        </div>

        <div className="essence-icon">
          {item.icono}
        </div>

        <div className="essence-content">
          <h3>{item.titulo}</h3>
          <div className="essence-line"></div>
          <p>{item.texto}</p>
        </div>
      </article>
    ))}
  </div>
</section>


{/* CAMPAÑAS DESTACADAS */}
<section className="campaigns-section">
  <div className="campaigns-header">
    <span>CAMPAÑAS DESTACADAS</span>

    <h2>Apoya proyectos que transforman el mundo</h2>

    <div className="campaign-line"></div>

    <p>
      Explora campañas verificadas en ciencia, tecnología,
      cultura, salud e innovación.
    </p>

    <p>Tu apoyo puede marcar la diferencia.</p>
  </div>

  <div className="campaign-card">
    {/* IMAGEN */}
    <div
      className="campaign-image"
      style={{
        backgroundImage: `url(${campaign.imagen})`,
      }}
    >
      <div className="campaign-category">
        Cultura y Artes
      </div>
    </div>

    {/* CONTENIDO */}
    <div className="campaign-content">
      <div className="campaign-badge">
        {campaign.categoria}
      </div>

      <h3>
        {campaign.titulo}
      </h3>

      <p>
        {campaign.descripcion}
      </p>

      <div className="campaign-verified">
        <div className="verified-icon">✓</div>

        <div>
          <h4>Proyecto verificado</h4>

          <span>
            Este proyecto ha sido revisado y aprobado
            por nuestro equipo.
          </span>
        </div>
      </div>
    </div>

    {/* LADO DERECHO */}
    <div className="campaign-side">
      <div className="progress-circle" 
      style={{
    background: `conic-gradient(#22d3ee ${campaign.porcentaje}%, #1e293b 0)`
       }} 
       > 
        <div className="circle-inner">
          <h2>{campaign.porcentaje}%</h2>
          <span>RECAUDADO</span>
        </div>
      </div>

      <div className="campaign-stats">
        <div>
          <span>RECAUDADO</span>
          <h4>{campaign.recaudado}</h4>
        </div>

        <div>
          <span>META</span>
          <h4>{campaign.meta}</h4>
        </div>

        <div>
          <span>DONANTES</span>
          <h4>{campaign.donantes}</h4>
        </div>

        <div>
          <span>FECHA LÍMITE</span>
          <h4>{campaign.fecha}</h4>
        </div>
      </div>

      <button className="campaign-btn">
        APOYAR ESTE PROYECTO
      </button>
    </div>
  </div>

  <div className="campaign-controls">
  <button className= "campaigm-arrow" onClick={prevCampaign}>‹

  </button>

  <div className="campaign-dots">
    {campaigns.map((_, index) => (
      <span
        key={index}
        className={index === campaignActual ? "campaign-dot active" : "campaign-dot"}
        onClick={() => setCampaignActual(index)}
      ></span>
    ))}
  </div>

  <button className= "campaigm-arrow" onClick={nextCampaign}>›

  </button>
</div>

</section>


{/* ========================= */}
{/* ÁREAS DE IMPACTO */}
{/* ========================= */}

<section className="impact-section">

  <div className="impact-header">
    <span>ÁREAS DE IMPACTO</span>
    <h2>Impulsamos ideas que generan cambio</h2>
  </div>

  <div className="impact-grid">

    <article className="impact-card tech-card">
      <div className="impact-icon">⚗️</div>

      <h3>Ciencia y Tecnología</h3>

      <p>
        Proyectos de investigación que impulsan el conocimiento y el desarrollo.
      </p>
    </article>

    <article className="impact-card health-card">
      <div className="impact-icon">💚</div>

      <h3>Salud y Bienestar</h3>

      <p>
        Innovaciones que mejoran la calidad de vida y el bienestar global.
      </p>
    </article>

    <article className="impact-card art-card">
      <div className="impact-icon">🎭</div>

      <h3>Cultura y Arte</h3>

      <p>
        Iniciativas que preservan, promueven y transforman nuestra cultura.
      </p>
    </article>

    <article className="impact-card eco-card">
      <div className="impact-icon">🌿</div>

      <h3>Medio Ambiente</h3>

      <p>
        Soluciones sostenibles para proteger nuestro planeta y sus recursos.
      </p>
    </article>

    <article className="impact-card edu-card">
      <div className="impact-icon">🎓</div>

      <h3>Educación</h3>

      <p>
        Proyectos que transforman la educación y crean nuevas oportunidades.
      </p>
    </article>

  </div>

</section>



{/* ========================= */}
{/*CÓMO FUNCIONA*/ }
{/* ========================= */}

<section className="how-section">

  <div className="how-header">
    <span>CÓMO FUNCIONA</span>

    <h2>Convierte tu idea en un proyecto real</h2>
  </div>

  <div className="how-grid">

    <article className="how-card">
      <div className="how-icon"> 👤</div>

      <h3>Crea tu perfil</h3>

      <p>
        Únete a IPCrowd y comienza a construir tu propuesta.
      </p>
    </article>

    <div className="how-arrow">→</div>

    <article className="how-card">
      <div className="how-icon">💡</div>

      <h3>Presenta tu proyecto</h3>

      <p>
        Describe tu idea, objetivos y el impacto que deseas generar.
      </p>
    </article>

    <div className="how-arrow">→</div>

    <article className="how-card">
      <div className="how-icon">🔍</div>

      <h3>Revisamos tu campaña</h3>

      <p>
        Nuestro equipo valida la propuesta antes del lanzamiento.
      </p>
    </article>

    <div className="how-arrow">→</div>

    <article className="how-card">
      <div className="how-icon">🚀</div>

      <h3>Lanza y Genera Impacto</h3>

      <p>
       Comparte tu campaña y encuentra personas que impulsen tu visión.
      </p>
    </article>

  </div>

</section>

<section className="future-banner">

  <div className="future-content">

    <div className="future-text">
      <span>ÚNETE AL CAMBIO</span>

      <h2>
        Impulsa innovación junto a una comunidad que transforma ideas en proyectos reales.
      </h2>

    </div>

    <button className="future-btn">
      Empieza tu proyecto
    </button>

  </div>

</section>

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

    </div>
  )
}

export default Inicio