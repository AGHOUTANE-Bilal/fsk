import * as React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Badge, Row, Col } from "react-bootstrap"

import Layout from "../components/layout"
import Seo from "../components/seo"

const fskColors = {
  primary: '#003366',
  secondary: '#004080',
  accent: '#0056b3',
  light: '#f8f9fa',
  muted: '#6c757d',
  gradient: {
    start: '#003366',
    end: '#0056b3'
  },
  overlay: 'rgba(0, 51, 102, 0.7)'
};

const latestActualites = [
  {
    id: 1,
    title: "Ramadan des Sciences 4ème édition - La Science et l'Innovation au Service de l'Agriculture",
    excerpt: "Le Laboratoire Ressources Naturelles et Développement Durables organise une journée scientifique sur l'innovation agricole, avec Dr. Ouafa ABBA (ONCA) et Dr. Nouredine ESSAFI comme intervenants.",
    date: "15 Mars 2025",
    day: "15",
    month: "MAR",
    year: "2025",
    time: "10h",
    publishDate: "09 Mars 2025",
    category: "Séminaire",
    slug: "ramadan-des-sciences-4-edition",
    icon: "microscope",
    location: "Amphithéâtre des Conférences"
  },
  {
    id: 2,
    title: "Ramadan des Sciences 4ème édition - Politique Nationale de Santé",
    excerpt: "Le Laboratoire Ressources Naturelles et Développement Durables organise une journée scientifique sous le thème de la Politique Nationale de Santé.",
    date: "10 Mars 2025",
    day: "10",
    month: "MAR",
    year: "2025",
    time: "10h",
    publishDate: "08 Mars 2025",
    category: "Séminaire",
    slug: "ramadan-des-sciences-sante",
    icon: "microscope",
    location: "Amphithéâtre des Conférences"
  },
  {
    id: 3,
    title: "Ramadan des Sciences 4ème édition - Les Applications Nucléaires dans le Domaine de l'Agriculture",
    excerpt: "Le Laboratoire Physique des Matériaux et Subatomique et l'Association Moroccan Young Generation in Nuclear organisent un séminaire sur les applications nucléaires.",
    date: "12 Mars 2025",
    day: "12",
    month: "MAR",
    year: "2025",
    time: "9h30-12h30",
    publishDate: "07 Mars 2025",
    category: "Séminaire",
    slug: "ramadan-des-sciences-applications-nucleaires",
    icon: "atom",
    location: "Amphithéâtre des Conférences"
  },
  {
    id: 4,
    title: "DySyX'2025 Workshop",
    excerpt: "Ibn Tofail & Le Havre Normandie Universities organize a two-day workshop focused on recent advances in dynamical systems and complex networks.",
    date: "22-23 Mai 2025",
    day: "22",
    month: "MAI",
    year: "2025",
    time: "",
    publishDate: "05 Mars 2025",
    category: "Workshop International",
    slug: "dysyx-2025-workshop",
    icon: "project-diagram",
    location: "Faculté des Sciences, Kénitra"
  }
];

const quickLinks = [
  {
    title: "Formation",
    description: "Découvrez nos programmes de Licence, Master et Doctorat",
    icon: "graduation-cap",
    link: "/formation",
    color: "#2ecc71"
  },
  {
    title: "Recherche",
    description: "Explorez nos laboratoires et projets de recherche",
    icon: "flask",
    link: "/recherche",
    color: "#3498db"
  },
  {
    title: "Étudiants",
    description: "Ressources et informations pour la vie étudiante",
    icon: "users",
    link: "/etudiants",
    color: "#e74c3c"
  },
  {
    title: "International",
    description: "Nos partenariats et programmes d'échange",
    icon: "globe",
    link: "/international",
    color: "#9b59b6"
  }
];

const IndexPage = () => {
  return (
    <Layout>
      {/* Hero Section avec effets améliorés */}
      <div 
        className="hero-section position-relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${fskColors.gradient.start}, ${fskColors.gradient.end})`,
          minHeight: "70vh",
          marginTop: "-2rem",
          paddingBottom: "2rem"
        }}
      >
        {/* Motifs d'arrière-plan dynamiques */}
        <div 
          className="position-absolute w-100 h-100"
          style={{
            background: `
              radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.08) 0%, transparent 20%),
              radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.05) 0%, transparent 20%),
              linear-gradient(45deg, transparent 48%, rgba(255, 255, 255, 0.02) 49%, rgba(255, 255, 255, 0.02) 51%, transparent 52%) 0 0 / 30px 30px
            `,
            opacity: 1,
            top: 0,
            left: 0
          }}
        ></div>

        {/* Particules flottantes */}
        <div className="floating-particles">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                position: "absolute",
                width: Math.random() * 25 + 10 + "px",
                height: Math.random() * 25 + 10 + "px",
                background: "rgba(255, 255, 255, 0.02)",
                borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                animation: `float-${i} ${Math.random() * 8 + 12}s infinite linear`,
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
                zIndex: 1
              }}
            />
          ))}
        </div>
        
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row align-items-center" style={{ minHeight: "calc(70vh - 4rem)" }}>
            <div className="col-lg-7 text-white">
              {/* Logo ou symbole de la faculté */}
              <div 
                className="mb-3 hero-symbol"
                style={{
                  width: "60px",
                  height: "60px",
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  animation: "fadeInDown 0.8s ease-out"
                }}
              >
                <FontAwesomeIcon 
                  icon="university" 
                  style={{ 
                    fontSize: "1.8rem",
                    color: "rgba(255, 255, 255, 0.95)"
                  }} 
                />
              </div>

              <h1 
                className="hero-title display-4 fw-bold mb-3"
                style={{
                  fontSize: "3.2rem",
                  letterSpacing: "-0.5px",
                  position: "relative",
                  display: "inline-block"
                }}
              >
                <span 
                  className="d-block hero-text-1"
                  style={{
                    color: '#ffffff',
                    textShadow: '1px 1px 3px rgba(0,0,0,0.12)',
                    position: 'relative',
                    zIndex: 2,
                    animation: "slideInLeft 0.8s ease-out"
                  }}
                >
                  Faculté des Sciences
                </span>
                <span 
                  className="d-block hero-text-2"
                  style={{
                    color: '#ffffff',
                    fontSize: '2.8rem',
                    opacity: 0.95,
                    textShadow: '1px 1px 3px rgba(0,0,0,0.12)',
                    position: 'relative',
                    zIndex: 2,
                    animation: "slideInRight 0.8s ease-out"
                  }}
                >
                  de Kénitra
                </span>
                <div 
                  className="position-absolute hero-line"
                  style={{
                    bottom: "-10px",
                    left: "0",
                    width: "100px",
                    height: "3px",
                    background: "linear-gradient(to right, #ffffff, transparent)",
                    borderRadius: "2px",
                    animation: "expandWidth 1.2s ease-out"
                  }}
                ></div>
              </h1>

              <p 
                className="lead mb-4 hero-description" 
                style={{ 
                  fontSize: "1.15rem", 
                  maxWidth: "540px",
                  textShadow: "1px 1px 2px rgba(0,0,0,0.12)",
                  lineHeight: "1.5",
                  color: 'rgba(255, 255, 255, 0.95)',
                  animation: "fadeInUp 0.8s ease-out 0.3s both"
                }}
              >
                Excellence académique, innovation et recherche au service du développement durable et du progrès scientifique
              </p>

              <div 
                className="d-flex gap-3 hero-buttons"
                style={{
                  animation: "fadeInUp 0.8s ease-out 0.5s both"
                }}
              >
                <Link 
                  to="/formation" 
                  className="btn btn-light btn-lg px-4 py-2 hero-btn-primary"
                  style={{
                    fontWeight: "500",
                    boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
                    borderRadius: "10px",
                    fontSize: "0.95rem",
                    transition: "all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)",
                    background: "rgba(255, 255, 255, 0.95)",
                    backdropFilter: "blur(10px)"
                  }}
                >
                  <FontAwesomeIcon icon="book-open" className="me-2" />
                  Nos formations
                </Link>
                <Link 
                  to="/contact" 
                  className="btn btn-outline-light btn-lg px-4 py-2 hero-btn-secondary"
                  style={{
                    fontWeight: "500",
                    borderRadius: "10px",
                    fontSize: "0.95rem",
                    borderWidth: "1.5px",
                    transition: "all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)",
                    backdropFilter: "blur(10px)"
                  }}
                >
                  <FontAwesomeIcon icon="envelope" className="me-2" />
                  Nous contacter
                </Link>
              </div>
            </div>

            {/* Actualités défilantes */}
            <div className="col-lg-5 d-none d-lg-block">
              <div 
                className="news-scroll-container"
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "16px",
                  padding: "1.25rem",
                  maxHeight: "380px",
                  overflowY: "auto",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.08)"
                }}
              >
                <div className="d-flex align-items-center mb-4">
                  <FontAwesomeIcon 
                    icon="newspaper" 
                    className="me-2" 
                    style={{ color: "rgba(255, 255, 255, 0.9)" }} 
                  />
                  <h3 
                    className="mb-0" 
                    style={{ 
                      fontSize: "1.25rem",
                      color: "rgba(255, 255, 255, 0.9)",
                      fontWeight: "600"
                    }}
                  >
                    Dernières Actualités
                  </h3>
                </div>

                <div className="news-items">
                  {latestActualites.map((actualite, index) => (
                    <Link 
                      key={actualite.id}
                      to={`/actualites/${actualite.slug}`}
                      className="text-decoration-none"
                    >
                      <div 
                        className="news-item mb-3"
                        style={{
                          background: "rgba(255, 255, 255, 0.05)",
                          borderRadius: "12px",
                          padding: "1rem",
                          transition: "all 0.3s ease",
                          border: "1px solid rgba(255, 255, 255, 0.08)"
                        }}
                      >
                        <div className="d-flex align-items-center mb-2">
                          <div 
                            className="date-badge me-2"
                                      style={{ 
                              background: "rgba(255, 255, 255, 0.1)",
                              padding: "0.3rem 0.8rem",
                              borderRadius: "8px",
                              fontSize: "0.8rem",
                              color: "rgba(255, 255, 255, 0.9)"
                            }}
                          >
                            {actualite.day} {actualite.month}
                          </div>
                          <Badge 
                            bg="primary" 
                            className="rounded-pill"
                            style={{
                              background: `linear-gradient(135deg, ${fskColors.primary}88, ${fskColors.accent}88)`,
                              fontSize: "0.75rem",
                              border: "1px solid rgba(255, 255, 255, 0.1)"
                            }}
                          >
                            {actualite.category}
                          </Badge>
                            </div>
                        <h4 
                          className="mb-2"
                          style={{
                            fontSize: "0.95rem",
                            color: "rgba(255, 255, 255, 0.9)",
                            fontWeight: "500",
                            lineHeight: "1.4"
                          }}
                        >
                          {actualite.title}
                        </h4>
                        <p 
                          className="mb-0"
                          style={{
                            fontSize: "0.85rem",
                            color: "rgba(255, 255, 255, 0.7)",
                            display: "-webkit-box",
                            WebkitLineClamp: "2",
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            textOverflow: "ellipsis"
                          }}
                        >
                          {actualite.excerpt}
                        </p>
                  </div>
                    </Link>
                  ))}
                </div>

                <Link 
                  to="/actualites"
                  className="btn btn-link text-decoration-none w-100 mt-2"
                  style={{
                    color: "rgba(255, 255, 255, 0.9)",
                    fontSize: "0.9rem",
                    fontWeight: "500"
                  }}
                >
                  Voir toutes les actualités
                  <FontAwesomeIcon icon="arrow-right" className="ms-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container position-relative" style={{ marginTop: "2rem" }}>
        {/* Quick Links Section avec effet de survol amélioré */}
        <div className="py-5">
          <Row className="g-4">
            {quickLinks.map((link, index) => (
              <Col key={index} md={6} lg={3}>
                <Link to={link.link} className="text-decoration-none">
                  <div 
                    className="card border-0 h-100 shadow-sm quick-link-card"
                    style={{ 
                      transition: "all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)",
                      borderRadius: "15px",
                      background: "linear-gradient(135deg, white, #fafafa)"
                    }}
                  >
                    <div className="card-body p-4">
                      <div 
                        className="icon-circle mb-3 d-inline-flex align-items-center justify-content-center"
                        style={{
                          width: "70px",
                          height: "70px",
                          background: `linear-gradient(135deg, ${link.color}15, ${link.color}25)`,
                          color: link.color,
                          borderRadius: "20px",
                          transition: "all 0.3s ease"
                        }}
                      >
                        <FontAwesomeIcon icon={link.icon} size="2x" />
                      </div>
                      <h3 
                        className="h5 mb-2"
                        style={{
                          color: "#2c3e50",
                          fontWeight: "600",
                          transition: "color 0.3s ease"
                        }}
                      >
                        {link.title}
                      </h3>
                      <p 
                        className="mb-0" 
                        style={{ 
                          fontSize: "0.95rem",
                          color: "#505c6c",
                          lineHeight: "1.6"
                        }}
                      >
                        {link.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </Col>
            ))}
          </Row>
              </div>

        {/* Stats Section avec animation au défilement */}
        <div className="py-5 my-4">
          <div 
            className="card border-0 overflow-hidden position-relative"
                              style={{ 
              borderRadius: "20px",
              background: "linear-gradient(135deg, #f8f9fa, #ffffff)",
              boxShadow: "0 15px 35px rgba(0,0,0,0.05)"
            }}
          >
            <div 
              className="position-absolute"
              style={{
                              top: 0,
                left: 0,
                              right: 0,
                height: "5px",
                background: `linear-gradient(to right, ${fskColors.gradient.start}, ${fskColors.gradient.end})`
              }}
            ></div>
            
            <div className="card-body p-5">
              <Row className="text-center g-4">
                <Col md={3}>
                  <div className="stat-item">
                    <div 
                      className="display-4 fw-bold mb-2"
                      style={{ color: fskColors.primary }}
                    >
                      12K+
                    </div>
                    <div className="text-muted">Étudiants</div>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="stat-item">
                    <div 
                      className="display-4 fw-bold mb-2"
                      style={{ color: fskColors.primary }}
                    >
                      300+
                    </div>
                    <div className="text-muted">Enseignants-chercheurs</div>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="stat-item">
                    <div 
                      className="display-4 fw-bold mb-2"
                      style={{ color: fskColors.primary }}
                    >
                      25+
                    </div>
                    <div className="text-muted">Laboratoires</div>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="stat-item">
                    <div 
                      className="display-4 fw-bold mb-2"
                      style={{ color: fskColors.primary }}
                    >
                      50+
                    </div>
                    <div className="text-muted">Partenariats</div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>

        {/* Actualités Section */}
        <div className="mb-5 d-flex align-items-center">
          <div 
            className="border-start border-primary ps-3 position-relative"
            style={{ borderLeftWidth: "6px !important" }}
          >
            <span 
              className="position-absolute" 
              style={{ 
                left: "-6px",
                top: "-8px",
                bottom: "-8px",
                width: "6px",
                background: `linear-gradient(to bottom, transparent, ${fskColors.primary}, transparent)`,
                opacity: 0.5
              }}
            ></span>
            <h2 className="mb-0 text-primary fw-bold">Actualité</h2>
          </div>
        </div>
        
        <div className="actualites-list position-relative">
          <div 
            className="position-absolute" 
            style={{
              left: "calc(8.33333% + 60px)",
              top: 0,
              bottom: 0,
              width: "1px",
              background: `linear-gradient(to bottom, transparent, ${fskColors.muted}22, ${fskColors.muted}22, transparent)`,
              zIndex: 0
            }}
          ></div>
          
          {latestActualites.map((actualite, index) => (
            <div key={actualite.id} className="mb-4 actualite-item">
              <div className="row g-0">
                <div className="col-lg-2 col-md-3 d-flex align-items-center justify-content-center">
                  <div 
                    className="date-box text-center p-3 rounded-3 position-relative bg-white"
                    style={{
                      width: "100%",
                      maxWidth: "120px",
                      border: "1px solid rgba(0,0,0,0.08)",
                      boxShadow: "0 3px 15px rgba(0,0,0,0.05)",
                      zIndex: 1
                    }}
                  >
                    <div 
                      className="day fw-bold" 
                      style={{ 
                        fontSize: "2.75rem", 
                        color: fskColors.primary,
                        lineHeight: "1",
                        letterSpacing: "-1px"
                      }}
                    >
                      {actualite.day}
                    </div>
                    <div 
                      className="month text-uppercase" 
                      style={{ 
                        fontSize: "1.1rem", 
                        color: fskColors.accent,
                        fontWeight: "600",
                        letterSpacing: "2px",
                        marginTop: "2px"
                      }}
                    >
                      {actualite.month}
                    </div>
                    <div 
                      className="year" 
                      style={{ 
                        fontSize: "0.9rem", 
                        color: fskColors.muted,
                        marginTop: "2px"
                      }}
                    >
                      {actualite.year}
                    </div>
                    <div 
                      className="position-absolute" 
                      style={{ 
                        top: "4px", 
                        right: "4px", 
                        bottom: "4px", 
                        width: "3px", 
                        background: `linear-gradient(to bottom, ${fskColors.primary}, ${fskColors.accent})`,
                        borderRadius: "6px",
                        opacity: 0.8
                      }}
                    ></div>
                  </div>
                </div>
                
                <div className="col-lg-10 col-md-9">
                  <Link 
                    to={`/actualites/${actualite.slug}`} 
                    className="text-decoration-none actualite-card-link"
                  >
                    <div 
                      className="card border-0 h-100 shadow-sm actualite-card"
                      style={{ 
                        borderLeft: `4px solid ${fskColors.primary}`,
                        transition: "all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)",
                        marginLeft: "-1px",
                        background: "linear-gradient(to right, white, white)",
                        overflow: "hidden"
                      }}
                    >
                      <div className="card-body p-4">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <Badge 
                            bg="primary" 
                            className="rounded-pill px-3 py-2"
                            style={{
                              fontSize: "0.8rem",
                              fontWeight: "500",
                              letterSpacing: "0.3px",
                              background: `linear-gradient(135deg, ${fskColors.primary}, ${fskColors.accent})`,
                              border: "none",
                              boxShadow: "0 2px 8px rgba(0, 51, 102, 0.15)"
                            }}
                          >
                            <FontAwesomeIcon icon={actualite.icon} className="me-2" />
                            {actualite.category}
                          </Badge>
                          
                          {actualite.time && (
                            <small 
                              className="text-muted d-flex align-items-center"
                              style={{ fontSize: "0.85rem" }}
                            >
                              <FontAwesomeIcon icon="clock" className="me-2" fixedWidth />
                              {actualite.time}
                            </small>
                          )}
                        </div>
                        
                        <h3 
                          className="h5 card-title fw-bold mb-3 actualite-title"
                          style={{
                            color: "#2c3e50",
                            transition: "color 0.3s ease"
                          }}
                        >
                          {actualite.title}
                        </h3>
                        
                        <p 
                          className="card-text mb-3" 
                          style={{ 
                            fontSize: "0.95rem", 
                            lineHeight: "1.7",
                            color: "#505c6c"
                          }}
                        >
                          {actualite.excerpt}
                        </p>
                        
                        <div 
                          className="d-flex align-items-center justify-content-between mt-3 pt-3"
                          style={{
                            borderTop: "1px solid rgba(0,0,0,0.05)"
                          }}
                        >
                          <small 
                            className="d-flex align-items-center"
                            style={{
                              color: fskColors.muted,
                              fontSize: "0.85rem"
                            }}
                          >
                            <FontAwesomeIcon icon="map-marker-alt" className="me-2" fixedWidth />
                            {actualite.location}
                          </small>
                          
                          <div 
                            className="text-primary d-flex align-items-center read-more" 
                            style={{ 
                              fontSize: "0.9rem", 
                              fontWeight: "500",
                              color: fskColors.accent
                            }}
                          >
                            <span>Lire la suite</span>
                            <div className="ms-2 arrow-container">
                              <FontAwesomeIcon icon="arrow-right" />
                            </div>
                          </div>
              </div>
            </div>
          </div>
                </Link>
              </div>
              </div>
            </div>
          ))}
          </div>
        
        <div className="text-center mt-5">
          <Link 
            to="/actualites" 
            className="btn btn-primary px-5 py-2"
            style={{
              background: `linear-gradient(135deg, ${fskColors.primary}, ${fskColors.accent})`,
              border: "none",
              boxShadow: "0 4px 15px rgba(0, 51, 102, 0.15)",
              fontWeight: "500",
              fontSize: "0.95rem",
              letterSpacing: "0.3px",
              borderRadius: "50px",
              transition: "all 0.3s ease"
            }}
          >
            <FontAwesomeIcon icon="newspaper" className="me-2" />
            Voir toutes les actualités
          </Link>
        </div>
      </div>
      
      {/* Call to Action Section */}
      <div 
        className="py-5 mt-5"
        style={{
          background: `linear-gradient(135deg, ${fskColors.primary}11, ${fskColors.accent}11)`
        }}
      >
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h2 className="mb-4">Rejoignez notre communauté académique</h2>
              <p className="lead mb-4 text-muted">
                Découvrez nos programmes d'études, nos activités de recherche et notre vie étudiante dynamique
              </p>
              <Link 
                to="/contact" 
                className="btn btn-primary btn-lg px-5"
                style={{
                  background: `linear-gradient(135deg, ${fskColors.primary}, ${fskColors.accent})`,
                  border: "none",
                  boxShadow: "0 4px 15px rgba(0, 51, 102, 0.15)",
                  fontWeight: "500",
                  borderRadius: "50px"
                }}
              >
                <FontAwesomeIcon icon="arrow-right" className="me-2" />
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float-0 { 0% { transform: translate(0, 0) rotate(0deg); } 100% { transform: translate(60px, -60px) rotate(360deg); } }
        @keyframes float-1 { 0% { transform: translate(0, 0) rotate(0deg); } 100% { transform: translate(-80px, -50px) rotate(-360deg); } }
        @keyframes float-2 { 0% { transform: translate(0, 0) rotate(0deg); } 100% { transform: translate(50px, 70px) rotate(360deg); } }
        @keyframes float-3 { 0% { transform: translate(0, 0) rotate(0deg); } 100% { transform: translate(-70px, 60px) rotate(-360deg); } }

        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes expandWidth {
          from { width: 0; opacity: 0; }
          to { width: 120px; opacity: 1; }
        }

        .hero-btn-primary:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 8px 25px rgba(0,0,0,0.2) !important;
          background: #ffffff !important;
        }

        .hero-btn-secondary:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 8px 25px rgba(0,0,0,0.2) !important;
          background: rgba(255, 255, 255, 0.1) !important;
        }

        .particle {
          pointer-events: none;
          mix-blend-mode: overlay;
        }

        .quick-link-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.12) !important;
        }
        
        .quick-link-card:hover .icon-circle {
          transform: scale(1.1) rotate(5deg);
        }
        
        .hero-title {
          animation: fadeInUp 1s ease-out;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.15) !important;
        }
        
        .stat-item {
          position: relative;
        }
        
        .stat-item:not(:last-child)::after {
          content: "";
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          height: 50px;
          width: 1px;
          background: rgba(0,0,0,0.1);
        }
        
        @media (max-width: 768px) {
          .stat-item:not(:last-child)::after {
            display: none;
          }
        }
        
        .actualite-card-link:hover .actualite-card {
          transform: translateY(-2px) translateX(2px);
          box-shadow: 0 10px 30px rgba(0, 51, 102, 0.1) !important;
        }
        
        .actualite-card-link:hover .actualite-title {
          color: ${fskColors.accent} !important;
        }
        
        .actualite-card-link:hover .read-more {
          color: ${fskColors.primary} !important;
        }
        
        .actualite-card-link:hover .read-more .arrow-container {
          transform: translateX(6px);
        }
        
        .arrow-container {
          transition: transform 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        
        .actualite-item {
          position: relative;
          z-index: 1;
        }
        
        .date-box {
          transition: transform 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        
        .actualite-card-link:hover .date-box {
          transform: scale(1.02);
        }

        .news-scroll-container {
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 255, 255, 0.2) transparent;
        }

        .news-scroll-container::-webkit-scrollbar {
          width: 6px;
        }

        .news-scroll-container::-webkit-scrollbar-track {
          background: transparent;
        }

        .news-scroll-container::-webkit-scrollbar-thumb {
          background-color: rgba(255, 255, 255, 0.2);
          border-radius: 3px;
        }

        .news-item {
          cursor: pointer;
        }

        .news-item:hover {
          background: rgba(255, 255, 255, 0.08) !important;
          transform: translateX(4px);
        }
      `}</style>
    </Layout>
  )
}

export const Head = () => <Seo title="Accueil | Faculté des Sciences de Kénitra" />

export default IndexPage
