import * as React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Badge } from "react-bootstrap"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import fskColors from "../../utils/colors"
import pageStyles from "../../utils/pageStyles"

const ConseilPage = () => {
  const [animated, setAnimated] = React.useState(false)
  
  React.useEffect(() => {
    setAnimated(true)
    
    const handleScroll = () => {
      document.querySelectorAll('.reveal').forEach(el => {
        const elementTop = el.getBoundingClientRect().top
        const elementVisible = 150
        if (elementTop < window.innerHeight - elementVisible) {
          el.classList.add('active')
        }
      })
    }
    
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <Layout>
      {/* Modern Page Header */}
      <section style={pageStyles.pageHeaderStyle}>
        <div className="container">
          <div className={`row ${animated ? 'fade-in active' : 'fade-in'}`}>
            <div className="col-lg-8">
              <div className="d-flex align-items-center mb-2">
                <FontAwesomeIcon 
                  icon="users-cog" 
                  style={{ 
                    fontSize: '2rem', 
                    color: 'white',
                    marginRight: '1rem',
                    padding: '0.7rem',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    borderRadius: '50%'
                  }} 
                />
                <h1 style={pageStyles.pageTitleStyle}>CONSEIL DE LA FACULTÉ</h1>
              </div>
              <p className="text-white mb-0 opacity-90" style={{ maxWidth: '800px', fontWeight: '300', fontSize: '1.1rem' }}>
                L'organe délibérant qui définit les orientations stratégiques de l'établissement et guide son développement académique et scientifique
              </p>
              
              <div className="mt-4 breadcrumb-wrapper">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb bg-transparent mb-0" style={{ fontSize: '0.95rem' }}>
                    <li className="breadcrumb-item">
                      <Link to="/" className="text-white opacity-75">
                        <FontAwesomeIcon icon="home" className="me-1" /> Accueil
                      </Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link to="/about" className="text-white opacity-75">
                        <FontAwesomeIcon icon="university" className="me-1" /> À propos
                      </Link>
                    </li>
                    <li className="breadcrumb-item active text-white" aria-current="page">
                      Conseil de la Faculté
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
            <div className="col-lg-4 d-none d-lg-flex align-items-center justify-content-end">
              <div className="position-relative">
                <div className={`position-absolute ${animated ? 'pulse-anim' : ''}`} style={{
                  width: '180px',
                  height: '180px',
                  borderRadius: '50%',
                  border: '15px solid rgba(255,255,255,0.1)',
                  top: '-20px',
                  right: '-20px',
                  zIndex: 1
                }}></div>
                <div style={{
                  width: '160px',
                  height: '160px',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${fskColors.secondary}, ${fskColors.accent})`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  position: 'relative',
                  zIndex: 2,
                  boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                }}>
                  <FontAwesomeIcon icon="sitemap" style={{ fontSize: '2.5rem', color: 'white' }} className="mb-2" />
                  <span style={{ color: 'white', fontWeight: 'bold', fontSize: '1.2rem' }}>Organisation</span>
                  <span style={{ color: 'white', fontSize: '0.9rem' }}>Facultative</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave divider */}
        <div className="wave-divider">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
            <path fill="#ffffff" fillOpacity="1" d="M0,32L80,37.3C160,43,320,53,480,58.7C640,64,800,64,960,56C1120,48,1280,32,1360,24L1440,16L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </section>
      
      <div className="container py-5 position-relative" style={{ zIndex: 2 }}>
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="card shadow-lg mb-5 border-0 reveal fade-bottom" style={{ borderRadius: '1rem' }}>
              <div className="card-body p-4 p-lg-5">
                <div className="d-flex align-items-center mb-4">
                  <Badge 
                    bg="primary" 
                    className="rounded-pill px-3 py-2 me-3"
                    style={{ fontSize: '0.8rem', fontWeight: '500' }}
                  >
                    PRÉSENTATION
                  </Badge>
                  <h2 className="h4 mb-0" style={{ color: fskColors.primary, fontWeight: '600' }}>
                    À propos du conseil
                  </h2>
                </div>
                
                <p className="lead" style={{ color: fskColors.primary, fontWeight: '500' }}>
                  Le Conseil de la Faculté est l'organe délibérant qui définit les orientations stratégiques 
                  de l'établissement et prend les décisions concernant son fonctionnement pédagogique, 
                  scientifique et administratif.
                </p>
                
                {/* Membres du Conseil */}
                <h2 className="h3 mt-5 mb-4" style={pageStyles.sectionTitleStyle}>Membres du Conseil</h2>
                
                <div className="row g-4">
                  {/* Doyen */}
                  <div className="col-md-4">
                    <div className="card h-100 border-0 shadow-sm hover-card">
                      <div className="card-header border-0" style={pageStyles.cardHeaderStyle}>
                        <h3 className="h5 mb-0">Doyen</h3>
                      </div>
                      <div className="card-body">
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item px-0">
                            <strong>Pr. EBN TOUHAMI Mohamed</strong>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Vice-Doyens */}
                  <div className="col-md-4">
                    <div className="card h-100 border-0 shadow-sm hover-card">
                      <div className="card-header border-0" style={pageStyles.cardHeaderStyle}>
                        <h3 className="h5 mb-0">Vice-Doyens</h3>
                      </div>
                      <div className="card-body">
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item px-0">Pr. EL WAHBI Bouazza</li>
                          <li className="list-group-item px-0">Pr. CHAKIRI Saïd</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Chefs de Départements */}
                  <div className="col-md-4">
                    <div className="card h-100 border-0 shadow-sm hover-card">
                      <div className="card-header border-0" style={pageStyles.cardHeaderStyle}>
                        <h3 className="h5 mb-0">Chefs de Départements</h3>
                      </div>
                      <div className="card-body">
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item px-0">Pr. EL WAHBI Bouazza</li>
                          <li className="list-group-item px-0">Pr. FAKHRI Youssef</li>
                          <li className="list-group-item px-0">Pr. CHAKIR El Mahjoub</li>
                          <li className="list-group-item px-0">Pr. OUHSSINE Mohammed</li>
                          <li className="list-group-item px-0">Pr. El YOUBI Mohamed Salahdine</li>
                          <li className="list-group-item px-0">Pr. BENAMMI Mohamed</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="row g-4 mt-2">
                  {/* Professeurs de l'Enseignement Supérieur */}
                  <div className="col-md-6">
                    <div className="card h-100 border-0 shadow-sm hover-card">
                      <div className="card-header border-0" style={pageStyles.cardHeaderStyle}>
                        <h3 className="h5 mb-0">Professeurs de l′Enseignement Supérieur</h3>
                      </div>
                      <div className="card-body">
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item px-0">Pr. ABOUCHABAKA Jaafar</li>
                          <li className="list-group-item px-0">Pr. EL KAFSSAOUI El Hassan</li>
                          <li className="list-group-item px-0">Pr. AHD Mohamed</li>
                          <li className="list-group-item px-0">Pr. GHAILANE Rachida</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Professeurs Habilités */}
                  <div className="col-md-6">
                    <div className="card h-100 border-0 shadow-sm hover-card">
                      <div className="card-header border-0" style={pageStyles.cardHeaderStyle}>
                        <h3 className="h5 mb-0">Professeurs Habilités</h3>
                      </div>
                      <div className="card-body">
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item px-0">Pr. AKHIAT Fettah</li>
                          <li className="list-group-item px-0">Pr. SHAIM Abdelillah</li>
                          <li className="list-group-item px-0">Pr. TKATEK Said</li>
                          <li className="list-group-item px-0">Pr. SADOUNE Zouhair</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="row g-4 mt-2">
                  {/* Professeurs Assistants */}
                  <div className="col-md-6">
                    <div className="card h-100 border-0 shadow-sm hover-card">
                      <div className="card-header border-0" style={pageStyles.cardHeaderStyle}>
                        <h3 className="h5 mb-0">Professeurs Assistants</h3>
                      </div>
                      <div className="card-body">
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item px-0">Pr. EL MAKRANI Adil</li>
                          <li className="list-group-item px-0">Pr. HBAIZ EL Mahdi</li>
                          <li className="list-group-item px-0">Pr. RAMDAN Rajae</li>
                          <li className="list-group-item px-0">Pr. BENDOUMOU Abdallah</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Personnel Administratif */}
                  <div className="col-md-6">
                    <div className="card h-100 border-0 shadow-sm hover-card">
                      <div className="card-header border-0" style={pageStyles.cardHeaderStyle}>
                        <h3 className="h5 mb-0">Personnel Administratif</h3>
                      </div>
                      <div className="card-body">
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item px-0">Mr. OUBASSOU M'Barek</li>
                          <li className="list-group-item px-0">Mme. OUALLA Aicha</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Commissions */}
                <h2 className="h3 mt-5 mb-4" style={pageStyles.sectionTitleStyle}>Commissions du conseil de l'établissement</h2>
                
                <div className="row g-4">
                  {/* Commission pédagogique */}
                  <div className="col-lg-6">
                    <div className="card h-100 border-0 shadow-sm hover-card">
                      <div className="card-header border-0" style={pageStyles.cardHeaderStyle}>
                        <h3 className="h5 mb-0">Commission pédagogique</h3>
                      </div>
                      <div className="card-body">
                        <p className="fw-bold mb-2">Pr. EL KAFSSAOUI El Hassan (Coordinateur)</p>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item px-0">Pr. El YOUBI Mohamed Salahdine</li>
                          <li className="list-group-item px-0">Pr. AKHIAT Fettah</li>
                          <li className="list-group-item px-0">Mme. OUALLA Aicha</li>
                          <li className="list-group-item px-0">Pr. GHAILANE Rachida</li>
                          <li className="list-group-item px-0">Pr. AHD Mohamed</li>
                          <li className="list-group-item px-0">Pr. EL WAHBI Bouazza</li>
                          <li className="list-group-item px-0">Pr. TKATEK Said</li>
                          <li className="list-group-item px-0">Pr. BENAMMI Mohamed</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Commission du budget */}
                  <div className="col-lg-6">
                    <div className="card h-100 border-0 shadow-sm hover-card">
                      <div className="card-header border-0" style={pageStyles.cardHeaderStyle}>
                        <h3 className="h5 mb-0">Commission du budget</h3>
                      </div>
                      <div className="card-body">
                        <p className="fw-bold mb-2">Pr. SHAIM Abdelillah (Coordinateur)</p>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item px-0">Pr. El YOUBI Mohamed Salahdine</li>
                          <li className="list-group-item px-0">Pr. EL WAHBI Bouazza</li>
                          <li className="list-group-item px-0">Pr. AKHIAT Fettah</li>
                          <li className="list-group-item px-0">Pr. EL MAKRANI Adil</li>
                          <li className="list-group-item px-0">Pr. SADOUNE Zouhair</li>
                          <li className="list-group-item px-0">Pr. BENDOUMOU Abdallah</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="row g-4 mt-2">
                  {/* Commission Scientifique */}
                  <div className="col-lg-6">
                    <div className="card h-100 border-0 shadow-sm hover-card">
                      <div className="card-header border-0" style={pageStyles.cardHeaderStyle}>
                        <h3 className="h5 mb-0">Commission Scientifique</h3>
                      </div>
                      <div className="card-body">
                        <p className="fw-bold mb-2">Pr. RAMDAN Rajae (Coordinatrice)</p>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item px-0">Pr. EL KAFSSAOUI El Hassan</li>
                          <li className="list-group-item px-0">Pr. AHD Mohamed</li>
                          <li className="list-group-item px-0">Pr. ABOUCHABAKA Jaafar</li>
                          <li className="list-group-item px-0">Pr. CHAKIR El Mahjoub</li>
                          <li className="list-group-item px-0">Pr. FAKHRI Youssef</li>
                          <li className="list-group-item px-0">Pr. OUHSSINE Mohammed</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Commission de la Recherche */}
                  <div className="col-lg-6">
                    <div className="card h-100 border-0 shadow-sm hover-card">
                      <div className="card-header border-0" style={pageStyles.cardHeaderStyle}>
                        <h3 className="h5 mb-0">Commission de la Recherche</h3>
                      </div>
                      <div className="card-body">
                        <p className="fw-bold mb-2">Pr. ABOUCHABAKA Jaafar (Coordinateur)</p>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item px-0">Pr. TKATEK Said</li>
                          <li className="list-group-item px-0">Pr. BENAMMI Mohamed</li>
                          <li className="list-group-item px-0">Pr. FAKHRI Youssef</li>
                          <li className="list-group-item px-0">Pr. OUHSSINE Mohammed</li>
                          <li className="list-group-item px-0">Pr. RAMDAN Rajae</li>
                          <li className="list-group-item px-0">Pr. SHAIM Abdelillah</li>
                          <li className="list-group-item px-0">Pr. GHAILANE Rachida</li>
                          <li className="list-group-item px-0">Pr. HBAIZ EL Mahdi</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="row g-4 mt-2">
                  {/* Commission Culturelle et Sportives */}
                  <div className="col-lg-6 mx-auto">
                    <div className="card h-100 border-0 shadow-sm hover-card">
                      <div className="card-header border-0" style={pageStyles.cardHeaderStyle}>
                        <h3 className="h5 mb-0">Commission Culturelle et Sportives</h3>
                      </div>
                      <div className="card-body">
                        <p className="fw-bold mb-2">Pr. SADOUNE Zouhair (Coordinateur)</p>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item px-0">Pr. CHAKIR El Mahjoub</li>
                          <li className="list-group-item px-0">Pr. EL MAKRANI Adil</li>
                          <li className="list-group-item px-0">Mme. OUALLA Aicha</li>
                          <li className="list-group-item px-0">Pr. BENDOUMOU Abdallah</li>
                          <li className="list-group-item px-0">Pr. HBAIZ EL Mahdi</li>
                          <li className="list-group-item px-0">Mr. OUBASSOU M'Barek</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="alert alert-info mt-5">
                  <p className="mb-0">
                    <i className="bi bi-info-circle me-2"></i>
                    Le Conseil de la Faculté se réunit régulièrement pour délibérer sur les questions relatives 
                    à la vie académique, scientifique et administrative de l'établissement. Les commissions 
                    préparent les dossiers et formulent des propositions qui sont soumises au Conseil pour décision.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="d-flex justify-content-between">
              <Link 
                to="/about" 
                className="btn rounded-pill hover-float" 
                style={pageStyles.secondaryButtonStyle}
              >
                <FontAwesomeIcon icon="arrow-left" className="me-2" />
                Retour à À propos
              </Link>
              <Link 
                to="/about/reglements" 
                className="btn rounded-pill hover-float" 
                style={pageStyles.buttonStyle}
              >
                Cadre réglementaire
                <FontAwesomeIcon icon="arrow-right" className="ms-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        /* Animation classes */
        .fade-in {
          opacity: 0;
          transition: opacity 1s ease;
        }
        
        .fade-in.active {
          opacity: 1;
        }
        
        .reveal {
          opacity: 0;
          transition: all 0.8s ease;
        }
        
        .reveal.active {
          opacity: 1;
        }
        
        .fade-bottom {
          transform: translateY(50px);
        }
        
        .fade-bottom.active {
          transform: translateY(0);
        }
        
        /* Wave divider */
        .wave-divider {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          overflow: hidden;
          line-height: 0;
        }
        
        /* Pulse animation for circle */
        .pulse-anim {
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.2);
          }
          70% {
            box-shadow: 0 0 0 15px rgba(255, 255, 255, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
          }
        }
        
        /* Hover effects */
        .hover-float {
          transition: all 0.3s ease;
        }
        
        .hover-float:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
        }
        
        .hover-card {
          transition: all 0.3s ease;
        }
        
        .hover-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.08) !important;
        }
        
        /* Responsive styles */
        @media (max-width: 767.98px) {
          .breadcrumb-wrapper {
            display: none;
          }
        }
      `}</style>
    </Layout>
  )
}

export const Head = () => <Seo 
  title="Conseil de la Faculté | Faculté des Sciences de Kénitra" 
  description="Découvrez la composition du Conseil de la Faculté des Sciences de Kénitra et ses différentes commissions qui guident le développement académique et scientifique de l'établissement."
/>

export default ConseilPage 