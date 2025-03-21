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
    description: "Informations et services pour nos étudiants",
    icon: "user-graduate",
    link: "/etudiants",
    color: "#9b59b6"
  }
];

const facultyHighlights = [
  {
    title: "Excellence Académique",
    description: "Une formation de qualité dispensée par des professeurs hautement qualifiés dans divers domaines scientifiques.",
    icon: "medal",
    color: "#4361ee"
  },
  {
    title: "Recherche Innovante",
    description: "Des laboratoires bien équipés pour conduire des recherches de pointe dans des domaines scientifiques variés.",
    icon: "microscope",
    color: "#3a0ca3"
  },
  {
    title: "Parcours Internationaux",
    description: "Des partenariats avec des universités internationales offrant des opportunités d'échanges et de mobilité.",
    icon: "globe-europe",
    color: "#4895ef"
  },
  {
    title: "Insertion Professionnelle",
    description: "Des formations alignées avec les besoins du marché du travail et un réseau d'entreprises partenaires.",
    icon: "briefcase",
    color: "#560bad"
  }
];

const departments = [
  { name: "Mathématiques", icon: "square-root-alt", color: "#3498db" },
  { name: "Informatique", icon: "laptop-code", color: "#2ecc71" },
  { name: "Physique", icon: "atom", color: "#9b59b6" },
  { name: "Chimie", icon: "flask", color: "#e74c3c" },
  { name: "Biologie", icon: "dna", color: "#1abc9c" },
  { name: "Géologie", icon: "mountain", color: "#d35400" },
  { name: "Sciences Économiques", icon: "chart-line", color: "#f39c12" }
];

const IndexPage = () => {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  // Animation for feature cards
  const featureAnimProps = {
    from: { opacity: 0, transform: 'translateY(30px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { mass: 1, tension: 280, friction: 60 },
    delay: 200
  };

  return (
    <Layout>
      {/* Hero Section avec effets améliorés */}
      <div 
        className="hero-section position-relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${fskColors.gradient.start}, ${fskColors.gradient.end})`,
          minHeight: "65vh",
          marginTop: "-2rem",
          paddingBottom: "2rem"
        }}
      >
        {/* Motifs d'arrière-plan dynamiques */}
        <div 
          className="position-absolute w-100 h-100"
          style={{
            background: `
              radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.06) 0%, transparent 20%),
              radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.04) 0%, transparent 20%),
              linear-gradient(45deg, transparent 48%, rgba(255, 255, 255, 0.015) 49%, rgba(255, 255, 255, 0.015) 51%, transparent 52%) 0 0 / 40px 40px
            `,
            opacity: 1,
            top: 0,
            left: 0
          }}
        ></div>

        {/* Particules flottantes */}
        <div className="floating-particles">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                position: "absolute",
                width: Math.random() * 20 + 8 + "px",
                height: Math.random() * 20 + 8 + "px",
                background: "rgba(255, 255, 255, 0.015)",
                borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                animation: `float-${i} ${Math.random() * 6 + 10}s infinite linear`,
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
                zIndex: 1
              }}
            />
          ))}
        </div>
        
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row align-items-center" style={{ minHeight: "calc(65vh - 4rem)" }}>
            <div className="col-lg-7 text-white">
              <h1 
                className="hero-title display-4 fw-bold mb-4"
                style={{
                  fontSize: "3rem",
                  letterSpacing: "-0.5px",
                  position: "relative",
                  display: "inline-block"
                }}
              >
                <span 
                  className="d-block hero-text-1"
                  style={{
                    color: '#ffffff',
                    textShadow: '1px 1px 3px rgba(0,0,0,0.15)',
                    position: 'relative',
                    zIndex: 2,
                    animation: "slideInLeft 0.6s ease-out"
                  }}
                >
                  Faculté des Sciences
                </span>
                <span 
                  className="d-block hero-text-2"
                  style={{
                    color: '#ffffff',
                    fontSize: '2.6rem',
                    opacity: 0.95,
                    textShadow: '1px 1px 3px rgba(0,0,0,0.15)',
                    position: 'relative',
                    zIndex: 2,
                    animation: "slideInRight 0.6s ease-out"
                  }}
                >
                  de Kénitra
                </span>
                <div 
                  className="position-absolute hero-line"
                  style={{
                    bottom: "-8px",
                    left: "0",
                    width: "90px",
                    height: "2px",
                    background: "linear-gradient(to right, #ffffff, transparent)",
                    borderRadius: "2px",
                    animation: "expandWidth 1s ease-out"
                  }}
                ></div>
              </h1>

              <p 
                className="lead mb-4 hero-description" 
                style={{ 
                  fontSize: "1.1rem", 
                  lineHeight: "1.6",
                  color: "rgba(255, 255, 255, 0.9)",
                  maxWidth: "540px",
                  animation: "fadeInUp 0.8s ease-out"
                }}
              >
                Un établissement d'excellence dédié à la formation et à la recherche scientifique, 
                préparant les leaders de demain dans les domaines des sciences et technologies.
              </p>

              <div className="d-flex gap-3" style={{ animation: "fadeInUp 1s ease-out" }}>
                <Link 
                  to="/about" 
                  className="btn btn-light px-4 py-2"
                  style={{
                    borderRadius: "8px",
                    fontWeight: "500",
                    fontSize: "0.95rem",
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
                  }}
                >
                  <FontAwesomeIcon icon="info-circle" className="me-2" />
                  En savoir plus
                </Link>
                <Link 
                  to="/contact" 
                  className="btn btn-outline-light px-4 py-2"
                  style={{
                    borderRadius: "8px",
                    fontWeight: "500",
                    fontSize: "0.95rem",
                    transition: "all 0.3s ease",
                    borderWidth: "2px"
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
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.1)"
                }}
              >
                <h3 
                  className="h5 mb-3 d-flex align-items-center"
                  style={{
                    color: "rgba(255, 255, 255, 0.95)",
                    fontWeight: "600"
                  }}
                >
                  <FontAwesomeIcon icon="newspaper" className="me-2" />
                  Dernières Actualités
                </h3>

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

      {/* Information Sections */}
      <div className="container py-5">
        {/* Information essentielles section removed */}
        
        {/* Modern Feature Section with CSS animations */}
        <div className="feature-section py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Pourquoi Choisir Notre Faculté ?</h2>
            <div className="separator-center mb-4"></div>
            <p className="lead col-lg-8 mx-auto">
              La Faculté des Sciences de Kénitra offre un environnement d'apprentissage 
              stimulant et des opportunités uniques pour votre réussite académique et professionnelle.
            </p>
          </div>
          
          <div className="features-container animate-fade-up">
            <div className="row g-4 py-4">
              {facultyHighlights.map((feature, index) => (
                <div key={index} className="col-md-6 col-lg-3 mb-4 animate-slide-up" style={{animationDelay: `${index * 100}ms`}}>
                  <div 
                    className="card h-100 border-0 feature-card"
                    style={{ 
                      borderRadius: "16px",
                      boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
                      overflow: "hidden",
                      transition: "all 0.4s ease"
                    }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div 
                      className="card-body p-4"
                      style={{
                        background: hoveredIndex === index 
                          ? `linear-gradient(135deg, ${feature.color}05, ${feature.color}15)` 
                          : "white"
                      }}
                    >
                      <div 
                        className="feature-icon-container mb-4"
                        style={{
                          background: `linear-gradient(135deg, ${feature.color}, ${feature.color}cc)`,
                          width: "60px",
                          height: "60px",
                          borderRadius: "12px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "white",
                          boxShadow: `0 10px 15px ${feature.color}33`,
                          transform: hoveredIndex === index ? "translateY(-5px) rotate(5deg)" : "none",
                          transition: "all 0.4s ease"
                        }}
                      >
                        <FontAwesomeIcon icon={feature.icon} size="lg" />
                      </div>
                      
                      <h3 
                        className="h5 mb-3 fw-bold"
                        style={{ 
                          color: feature.color,
                          transition: "all 0.3s ease"
                        }}
                      >
                        {feature.title}
                      </h3>
                      
                      <p 
                        className="mb-3" 
                        style={{ 
                          color: "#4b5563",
                          fontSize: "0.95rem",
                          lineHeight: "1.6"
                        }}
                      >
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Departments Section */}
          <div className="animate-fade-up" style={{animationDelay: "400ms"}}>
            <div className="departments-section py-5 mt-4">
              <div className="text-center mb-5">
                <h2 className="h3 fw-bold">Nos Départements</h2>
                <div className="separator-center mb-4"></div>
                <p className="col-lg-8 mx-auto">
                  La faculté est organisée en départements spécialisés couvrant l'ensemble des disciplines scientifiques
                </p>
              </div>
              
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div className="d-flex justify-content-center flex-wrap gap-3">
                    {departments.map((dept, index) => (
                      <Link 
                        key={index} 
                        to={`/departements/${dept.name.toLowerCase()}`}
                        className="text-decoration-none department-link"
                        style={{animationDelay: `${index * 50}ms`}}
                      >
                        <div 
                          className="department-chip d-flex align-items-center gap-2 px-4 py-2"
                          style={{
                            background: `linear-gradient(135deg, ${dept.color}10, ${dept.color}20)`,
                            border: `1px solid ${dept.color}20`,
                            borderRadius: "50px",
                            color: dept.color,
                            fontWeight: "500",
                            transition: "all 0.3s ease",
                            boxShadow: "0 4px 10px rgba(0,0,0,0.03)"
                          }}
                        >
                          <FontAwesomeIcon icon={dept.icon} />
                          <span>{dept.name}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Key Statistics */}
        <div className="row py-5 mb-5 bg-light rounded-3">
          <div className="col-12 text-center mb-4">
            <h2 className="mb-3">La Faculté des Sciences en chiffres</h2>
            <div className="separator-center mb-4"></div>
            <p className="lead mb-5">Découvrez notre faculté à travers quelques chiffres clés</p>
          </div>
          
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <div className="stat-card text-center">
              <div className="stat-icon-container mx-auto mb-3">
                <FontAwesomeIcon icon="users" />
              </div>
              <h3 className="stat-number">5200+</h3>
              <p className="stat-title">Étudiants</p>
            </div>
          </div>
          
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <div className="stat-card text-center">
              <div className="stat-icon-container mx-auto mb-3">
                <FontAwesomeIcon icon="chalkboard-teacher" />
              </div>
              <h3 className="stat-number">220</h3>
              <p className="stat-title">Enseignants-chercheurs</p>
            </div>
          </div>
          
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <div className="stat-card text-center">
              <div className="stat-icon-container mx-auto mb-3">
                <FontAwesomeIcon icon="microscope" />
              </div>
              <h3 className="stat-number">7</h3>
              <p className="stat-title">Départements</p>
            </div>
          </div>
          
          <div className="col-lg-3 col-md-6">
            <div className="stat-card text-center">
              <div className="stat-icon-container mx-auto mb-3">
                <FontAwesomeIcon icon="flask" />
              </div>
              <h3 className="stat-number">15</h3>
              <p className="stat-title">Laboratoires de recherche</p>
            </div>
          </div>
          
          <div className="col-12 text-center mt-4">
            <Link to="/about/chiffres" className="btn btn-outline-primary">
              Voir tous les chiffres
              <FontAwesomeIcon icon="arrow-right" className="ms-2" />
            </Link>
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

        .separator-center {
          width: 70px;
          height: 3px;
          background: ${fskColors.primary};
          margin: 0 auto;
        }
        
        .info-icon-container {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          background-color: ${fskColors.primary};
          color: white;
        }
        
        .hover-card {
          transition: transform 0.3s, box-shadow 0.3s;
        }
        
        .hover-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1) !important;
        }
        
        .stat-icon-container {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background-color: ${fskColors.primary};
          color: white;
          font-size: 1.8rem;
          margin-bottom: 1rem;
        }
        
        .stat-number {
          font-size: 2.5rem;
          font-weight: bold;
          color: ${fskColors.primary};
          margin-bottom: 0.5rem;
        }
        
        .stat-title {
          font-size: 1.1rem;
          color: #555;
        }
        
        .card-header {
          border-bottom: none;
        }
        
        @media (max-width: 992px) {
          .stat-number {
            font-size: 2rem;
          }
        }

        /* Animation classes */
        .animate-fade-up {
          opacity: 0;
          animation: fadeUp 0.8s ease forwards;
        }
        
        .animate-slide-up {
          opacity: 0;
          transform: translateY(30px);
          animation: slideUp 0.8s ease forwards;
        }
        
        .department-link {
          opacity: 0;
          transform: translateY(10px);
          animation: slideUp 0.5s ease forwards;
        }
        
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Feature card effects */
        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.1);
        }

        /* Department chip effects */
        .department-chip:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 15px rgba(0,0,0,0.08);
        }
      `}</style>
    </Layout>
  )
}

export const Head = () => <Seo title="Accueil | Faculté des Sciences de Kénitra" />

export default IndexPage
