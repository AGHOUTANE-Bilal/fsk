import * as React from "react"
import { Link } from "gatsby"
import { Navbar, Nav, Container, NavDropdown, Badge, Tooltip, OverlayTrigger } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { StaticImage } from "gatsby-plugin-image"
import fskColors from "../utils/colors"

const Header = ({ siteTitle }) => {
  const [scrolled, setScrolled] = React.useState(false);
  const [language, setLanguage] = React.useState("fr");
  
  // Handle scroll effect for navbar
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Navbar style that transitions based on scroll
  const navbarStyle = {
    transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
    backgroundColor: scrolled ? 'white' : fskColors.light,
    boxShadow: scrolled ? '0 4px 12px rgba(0,0,0,0.1)' : 'none',
    padding: scrolled ? '0.5rem 0' : '1rem 0',
  };
  
  // Custom styles for nav links with hover effect
  const navLinkStyle = {
    position: 'relative',
    fontWeight: '600',
    color: fskColors.text,
    transition: 'color 0.3s ease',
  };
  
  // Style for active nav link
  const activeNavLinkStyle = {
    ...navLinkStyle,
    color: fskColors.primary,
  };
  
  // Common style for dropdown items
  const dropdownItemStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '0.5rem 1rem',
    color: fskColors.text,
    transition: 'background-color 0.2s ease, color 0.2s ease',
  };
  
  // Toggle language
  const handleLanguageToggle = () => {
    setLanguage(prevLang => prevLang === "fr" ? "en" : "fr");
  };
  
  // Social media tooltip renderer
  const renderTooltip = (props, text) => (
    <Tooltip id={`tooltip-${text.toLowerCase()}`} {...props}>
      {text}
    </Tooltip>
  );
  
  return (
    <header>
      {/* Top utility bar */}
      <div style={{ 
        backgroundColor: fskColors.secondary, 
        color: 'white', 
        padding: '0.35rem 0',
        fontSize: '0.85rem'
      }}>
        <Container>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-none d-md-flex align-items-center">
              <a href="tel:+212537329400" className="text-white text-decoration-none me-3">
                <FontAwesomeIcon icon="phone" className="me-1" />
                <span>+212 537 32 94 00</span>
              </a>
              <a href="mailto:contact@fsk.uit.ac.ma" className="text-white text-decoration-none">
                <FontAwesomeIcon icon="envelope" className="me-1" />
                <span>contact@fsk.uit.ac.ma</span>
              </a>
            </div>
            <div className="d-flex align-items-center">
              <div className="d-none d-md-flex align-items-center me-3">
                <Link to="/actualites" className="text-white text-decoration-none me-3">
                  <FontAwesomeIcon icon="newspaper" className="me-1" />
                  <span>Actualités</span>
                </Link>
                <Link to="/evenements" className="text-white text-decoration-none">
                  <FontAwesomeIcon icon="calendar-alt" className="me-1" />
                  <span>Événements</span>
                </Link>
              </div>
              <div className="d-flex me-3">
                {/* Social media icons */}
                {[
                  { icon: "facebook-f", url: "https://facebook.com", name: "Facebook" },
                  { icon: "twitter", url: "https://twitter.com", name: "Twitter" },
                  { icon: "linkedin-in", url: "https://linkedin.com", name: "LinkedIn" },
                  { icon: "youtube", url: "https://youtube.com", name: "YouTube" }
                ].map((social, idx) => (
                  <OverlayTrigger
                    key={idx}
                    placement="bottom"
                    delay={{ show: 300, hide: 100 }}
                    overlay={(props) => renderTooltip(props, social.name)}
                  >
                    <a 
                      href={social.url} 
                      className="text-white mx-2" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ 
                        transition: 'transform 0.2s ease, opacity 0.2s ease',
                        opacity: 0.9,
                        ':hover': { 
                          transform: 'translateY(-2px)',
                          opacity: 1
                        }
                      }}
                    >
                      <FontAwesomeIcon icon={['fab', social.icon]} />
                    </a>
                  </OverlayTrigger>
                ))}
              </div>
              <div className="border-start ps-3 d-flex align-items-center">
                <button 
                  className="btn btn-link text-white p-0 d-flex align-items-center"
                  style={{ textDecoration: 'none', fontSize: '0.85rem' }}
                  onClick={handleLanguageToggle}
                >
                  <FontAwesomeIcon icon="globe" className="me-1" />
                  <span>{language.toUpperCase()}</span>
                  <FontAwesomeIcon icon="chevron-down" className="ms-1" style={{ fontSize: '0.7rem' }} />
                </button>
              </div>
            </div>
          </div>
        </Container>
      </div>
      
      <Navbar 
        expand="lg" 
        className="border-bottom"
        style={navbarStyle}
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <div className="position-relative">
            <StaticImage
              src="../images/logo.png"
              alt="Faculté des sciences Kénitra Logo"
              height={60}
              placeholder="blurred"
              layout="fixed"
              className="d-inline-block align-top me-2"
            />
              <div 
                className="position-absolute" 
                style={{ 
                  bottom: -4, 
                  right: 0, 
                  height: '4px', 
                  width: '70%', 
                  background: `linear-gradient(to right, ${fskColors.primary}, ${fskColors.accent})`,
                  borderRadius: '2px'
                }} 
              />
            </div>
          </Navbar.Brand>
          
          <div className="d-none d-lg-flex align-items-center ms-auto me-3">
            {/* Quick access dropdown */}
            <NavDropdown 
              title={
                <span className="d-flex align-items-center">
                  <FontAwesomeIcon icon="bolt" className="me-1" />
                  Accès rapide
                </span>
              } 
              id="quick-access-dropdown"
              align="end"
            >
              <NavDropdown.Item 
                as={Link} 
                to="/etudiants/emploi-temps"
                style={dropdownItemStyle}
              >
                <FontAwesomeIcon icon="calendar-alt" className="me-2" fixedWidth />
                Emploi du temps
              </NavDropdown.Item>
              <NavDropdown.Item 
                as={Link} 
                to="/etudiants/resultats"
                style={dropdownItemStyle}
              >
                <FontAwesomeIcon icon="graduation-cap" className="me-2" fixedWidth />
                Résultats
              </NavDropdown.Item>
              <NavDropdown.Item 
            as={Link} 
                to="/etudiants/cours"
                style={dropdownItemStyle}
              >
                <FontAwesomeIcon icon="book" className="me-2" fixedWidth />
                Cours en ligne
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item 
                as="a" 
                href="http://ent.uit.ac.ma/ent/" 
                target="_blank"
                style={dropdownItemStyle}
              >
                <FontAwesomeIcon icon="envelope" className="me-2" fixedWidth />
                Webmail UIT
              </NavDropdown.Item>
            </NavDropdown>
          </div>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 shadow-none">
            <span className="navbar-toggler-icon" style={{ 
              backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='${encodeURIComponent(fskColors.primary)}' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")` 
            }} />
          </Navbar.Toggle>
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-lg-auto">
              <Nav.Link 
                as={Link} 
                to="/" 
                activeClassName="active" 
                className="mx-lg-1 py-2 px-3"
                style={navLinkStyle}
                activeStyle={activeNavLinkStyle}
              >
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon icon="home" className="me-2 d-lg-none" />
                Accueil
                </div>
              </Nav.Link>
              
              <NavDropdown 
                title={<><FontAwesomeIcon icon="university" className="me-2" />Faculté</>}
                id="faculty-dropdown"
                renderMenuOnMount={true}
              >
                <NavDropdown.Item as={Link} to="/about">
                  <FontAwesomeIcon icon="home" className="me-2" />
                  <strong>Faculté des Sciences</strong>
                </NavDropdown.Item>
                
                <NavDropdown.Divider />
                
                <NavDropdown.Item as={Link} to="/about/mot-du-doyen">
                  <FontAwesomeIcon icon="user-tie" className="me-2" />
                  Mot du Doyen
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/about/administration">
                  <FontAwesomeIcon icon="sitemap" className="me-2" />
                  Administration
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/about/historique">
                  <FontAwesomeIcon icon="history" className="me-2" />
                  Historique
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/about/chiffres">
                  <FontAwesomeIcon icon="chart-pie" className="me-2" />
                  La FSK en chiffre
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/about/reglements">
                  <FontAwesomeIcon icon="gavel" className="me-2" />
                  Règlements et Politiques
                </NavDropdown.Item>
              </NavDropdown>
              
              <NavDropdown 
                title={<><FontAwesomeIcon icon="sitemap" className="me-2" />Structures</>}
                id="structures-dropdown"
                renderMenuOnMount={true}
              >
                <NavDropdown.Item as={Link} to="/structures">
                  <FontAwesomeIcon icon="sitemap" className="me-2" />
                  <strong>Structures</strong>
                </NavDropdown.Item>
                
                <NavDropdown.Divider />
                
                <NavDropdown.Item as={Link} to="/structures/organisation">
                  <FontAwesomeIcon icon="project-diagram" className="me-2" />
                  Organisation générale
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/structures/conseil">
                  <FontAwesomeIcon icon="users-cog" className="me-2" />
                  Conseil de la Faculté
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/structures/commission">
                  <FontAwesomeIcon icon="microscope" className="me-2" />
                  Commission scientifique
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/structures/departements">
                  <FontAwesomeIcon icon="building" className="me-2" />
                  Départements
                </NavDropdown.Item>
              </NavDropdown>
              
              <NavDropdown 
                title={<><FontAwesomeIcon icon="user-graduate" className="me-2" />Étudiants</>}
                id="students-dropdown"
                renderMenuOnMount={true}
              >
                <NavDropdown.Item as={Link} to="/etudiants">
                  <FontAwesomeIcon icon="users" className="me-2" />
                  <strong>Espace Étudiants</strong>
                </NavDropdown.Item>
                
                <NavDropdown.Divider />
                
                <NavDropdown.Item as={Link} to="/etudiants/licence">
                  <FontAwesomeIcon icon="user-graduate" className="me-2" />
                  Licence
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/etudiants/master">
                  <FontAwesomeIcon icon="user-graduate" className="me-2" />
                  Master
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/etudiants/doctorat">
                  <FontAwesomeIcon icon="user-graduate" className="me-2" />
                  Doctorat
                </NavDropdown.Item>
                
                <NavDropdown.Divider />
                
                <NavDropdown.Item as={Link} to="/etudiants/bourses">
                  <FontAwesomeIcon icon="hand-holding-usd" className="me-2" />
                  Bourses
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/etudiants/logement">
                  <FontAwesomeIcon icon="home" className="me-2" />
                  Logement
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/etudiants/accessibilite">
                  <FontAwesomeIcon icon="universal-access" className="me-2" />
                  Accessibilité
                </NavDropdown.Item>
              </NavDropdown>
              
              <NavDropdown 
                title={<><FontAwesomeIcon icon="graduation-cap" className="me-2" />Formation</>}
                id="formation-dropdown"
                renderMenuOnMount={true}
              >
                <NavDropdown.Item as={Link} to="/formation">
                  <FontAwesomeIcon icon="book-open" className="me-2" />
                  <strong>Formation</strong>
                </NavDropdown.Item>
                
                <NavDropdown.Divider />
                
                <NavDropdown.Item as={Link} to="/formation/licence">
                  <FontAwesomeIcon icon="user-graduate" className="me-2" />
                  Licence
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/formation/master">
                  <FontAwesomeIcon icon="award" className="me-2" />
                  Master
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/formation/doctorat">
                  <FontAwesomeIcon icon="microscope" className="me-2" />
                  Doctorat
                </NavDropdown.Item>
              </NavDropdown>
              
              <NavDropdown 
                title={<><FontAwesomeIcon icon="flask" className="me-2" />Recherche</>}
                id="research-dropdown"
                renderMenuOnMount={true}
              >
                <NavDropdown.Item as={Link} to="/recherche">
                  <FontAwesomeIcon icon="search" className="me-2" />
                  <strong>Recherche</strong>
                </NavDropdown.Item>
                
                <NavDropdown.Divider />
                
                <NavDropdown.Item as={Link} to="/recherche/laboratoires">
                  <FontAwesomeIcon icon="vial" className="me-2" />
                  Laboratoires
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/recherche/documents">
                  <FontAwesomeIcon icon="file-alt" className="me-2" />
                  Documents
                </NavDropdown.Item>
              </NavDropdown>
              
              {/* 
              <Nav.Item>
                <Nav.Link as={Link} to="/soutenances">
                  <FontAwesomeIcon icon="file-signature" className="me-2" />
                  Soutenances
                </Nav.Link>
              </Nav.Item>
              */}
              
              <div className="d-lg-none mt-3">
                <div className="mb-3">
                  <h6 className="text-uppercase fw-bold text-muted small mb-2">Accès rapide</h6>
                  <div className="list-group list-group-flush">
                    <Link to="/etudiants/emploi-temps" className="list-group-item list-group-item-action">
                      <FontAwesomeIcon icon="calendar-alt" className="me-2" fixedWidth />
                      Emploi du temps
                    </Link>
                    <Link to="/etudiants/resultats" className="list-group-item list-group-item-action">
                      <FontAwesomeIcon icon="graduation-cap" className="me-2" fixedWidth />
                      Résultats
                    </Link>
                    <Link to="/etudiants/cours" className="list-group-item list-group-item-action">
                      <FontAwesomeIcon icon="book" className="me-2" fixedWidth />
                      Cours en ligne
                    </Link>
                    <a href="http://ent.uit.ac.ma/ent/" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">
                      <FontAwesomeIcon icon="envelope" className="me-2" fixedWidth />
                      Webmail UIT
                    </a>
                  </div>
                </div>
                <div className="d-flex justify-content-center mt-4">
                  {[
                    { icon: "facebook-f", url: "https://facebook.com" },
                    { icon: "twitter", url: "https://twitter.com" },
                    { icon: "linkedin-in", url: "https://linkedin.com" },
                    { icon: "youtube", url: "https://youtube.com" }
                  ].map((social, idx) => (
                    <a 
                      key={idx}
                      href={social.url} 
                      className="mx-2" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ 
                        color: fskColors.primary,
                        width: '36px',
                        height: '36px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '50%',
                        backgroundColor: fskColors.light,
                      }}
                    >
                      <FontAwesomeIcon icon={['fab', social.icon]} />
                    </a>
                  ))}
                </div>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
