import * as React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Badge } from "react-bootstrap"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import fskColors from "../../utils/colors"
import pageStyles from "../../utils/pageStyles"

const ConseilPage = () => {
  const [activeTab, setActiveTab] = React.useState('direction');
  const [animated, setAnimated] = React.useState(false);
  
  React.useEffect(() => {
    setAnimated(true);
    
    const handleScroll = () => {
      document.querySelectorAll('.reveal').forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < window.innerHeight - elementVisible) {
          el.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger once on load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <Layout>
      {/* Modern Page Header with Animations */}
      <section style={pageStyles.pageHeaderStyle}>
        <div className="container">
          <div className={`row ${animated ? 'fade-in active' : 'fade-in'}`}>
            <div className="col-lg-8">
              <div className="d-flex align-items-center mb-2">
                <div style={{ 
                  width: '55px',
                  height: '55px',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '1rem'
                }}>
                  <FontAwesomeIcon 
                    icon="sitemap" 
                    style={{ 
                      fontSize: '1.8rem', 
                      color: 'white'
                    }} 
                  />
                </div>
                <h1 style={pageStyles.pageTitleStyle}>CONSEIL DE LA FACULTÉ</h1>
              </div>
              <p className="text-white mb-0 opacity-90" style={{ maxWidth: '800px', fontWeight: '300', fontSize: '1.1rem', lineHeight: '1.6' }}>
                L'instance de gouvernance principale qui élabore et adopte les décisions stratégiques relatives à la gestion administrative, pédagogique et scientifique de notre établissement
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
                      <Link to="/structures" className="text-white opacity-75">
                        <FontAwesomeIcon icon="university" className="me-1" /> Structures
                      </Link>
                    </li>
                    <li className="breadcrumb-item active text-white" aria-current="page">
                      Conseil de la Faculté
                    </li>
                  </ol>
                </nav>
              </div>
              
              <div className="mt-4 d-flex gap-3">
                <Badge bg="light" text="dark" className="px-3 py-2 rounded-pill">
                  <FontAwesomeIcon icon="user-tie" className="me-2" />
                  Direction
                </Badge>
                <Badge bg="light" text="dark" className="px-3 py-2 rounded-pill">
                  <FontAwesomeIcon icon="users" className="me-2" />
                  Corps Professoral
                </Badge>
                <Badge bg="light" text="dark" className="px-3 py-2 rounded-pill">
                  <FontAwesomeIcon icon="tasks" className="me-2" />
                  Commissions
                </Badge>
              </div>
            </div>
            <div className="col-lg-4 d-none d-lg-flex align-items-center justify-content-end">
              <div className="position-relative">
                <div className={`position-absolute ${animated ? 'pulse-anim' : ''}`} style={{
                  width: '200px',
                  height: '200px',
                  borderRadius: '50%',
                  border: '15px solid rgba(255,255,255,0.1)',
                  top: '-25px',
                  right: '-25px',
                  zIndex: 1
                }}></div>
                <div className="circle-chart" style={{
                  width: '180px',
                  height: '180px',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${fskColors.secondary}, ${fskColors.accent})`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  position: 'relative',
                  zIndex: 2,
                  boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
                }}>
                  <FontAwesomeIcon icon="clipboard-list" style={{ fontSize: '3rem', color: 'white' }} className="mb-3" />
                  <span style={{ color: 'white', fontWeight: 'bold', fontSize: '1.4rem' }}>Organisation</span>
                  <span style={{ color: 'white', fontSize: '0.9rem', opacity: '0.8' }}>Administrative</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave divider */}
        <div className="wave-divider">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
            <path fill="#ffffff" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </section>
      
      <div className="container py-5 position-relative" style={{ zIndex: 2 }}>
        <div className="row">
          <div className="col-md-12">
            {/* Intro Card with Animation */}
            <div className="card mb-5 border-0 rounded-lg overflow-hidden reveal fade-bottom shadow-lg">
              <div className="card-body p-4 p-md-5" style={{ 
                background: `linear-gradient(135deg, ${fskColors.light}, #e9ecef)`,
                borderLeft: `5px solid ${fskColors.primary}`
              }}>
                <div className="d-flex mb-4">
                  <Badge 
                    bg="primary" 
                    className="rounded-pill px-3 py-2 me-3 align-self-start"
                    style={{ fontSize: '0.8rem' }}
                  >
                    PRÉSENTATION
                  </Badge>
                  <p className="lead text-center mb-0" style={{ color: fskColors.text, fontWeight: '500', lineHeight: '1.6' }}>
                    Le Conseil de la Faculté constitue l'instance de gouvernance principale de notre établissement. 
                    Il élabore et adopte les décisions stratégiques relatives à la gestion administrative, 
                    pédagogique et scientifique de la Faculté des Sciences de Kénitra, conformément aux 
                    orientations nationales en matière d'enseignement supérieur et de recherche scientifique.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mb-5 reveal fade-bottom">
              <ul className="nav nav-pills nav-fill mb-4" id="councilTabs" role="tablist">
                <li className="nav-item" role="presentation">
                  <button 
                    className={`nav-link ${activeTab === 'direction' ? 'active' : ''}`} 
                    onClick={() => setActiveTab('direction')}
                    style={{ 
                      transition: 'all 0.3s ease',
                      backgroundColor: activeTab === 'direction' ? fskColors.primary : 'transparent',
                      color: activeTab === 'direction' ? 'white' : fskColors.primary,
                      border: 'none',
                      margin: '0 2px',
                      fontWeight: '500'
                    }}
                  >
                    <FontAwesomeIcon icon="user-tie" className="me-2" />Direction
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button 
                    className={`nav-link ${activeTab === 'professors' ? 'active' : ''}`} 
                    onClick={() => setActiveTab('professors')}
                    style={{ 
                      transition: 'all 0.3s ease',
                      backgroundColor: activeTab === 'professors' ? fskColors.primary : 'transparent',
                      color: activeTab === 'professors' ? 'white' : fskColors.primary,
                      border: 'none',
                      margin: '0 2px',
                      fontWeight: '500'
                    }}
                  >
                    <FontAwesomeIcon icon="graduation-cap" className="me-2" />Corps Professoral
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button 
                    className={`nav-link ${activeTab === 'commissions' ? 'active' : ''}`} 
                    onClick={() => setActiveTab('commissions')}
                    style={{ 
                      transition: 'all 0.3s ease',
                      backgroundColor: activeTab === 'commissions' ? fskColors.primary : 'transparent',
                      color: activeTab === 'commissions' ? 'white' : fskColors.primary,
                      border: 'none',
                      margin: '0 2px',
                      fontWeight: '500'
                    }}
                  >
                    <FontAwesomeIcon icon="users-cog" className="me-2" />Commissions
                  </button>
                </li>
              </ul>
              
              <div className="tab-content" id="councilTabContent">
                {/* Direction Tab */}
                <div className={`tab-pane fade ${activeTab === 'direction' ? 'show active' : ''}`} style={{ transition: 'opacity 0.5s ease' }}>
                  <h2 style={pageStyles.sectionTitleStyle}>Direction et Administration</h2>
                  
                  {/* Doyen */}
                  <div className="card border-0 shadow-sm rounded-lg overflow-hidden mb-5 transform-on-hover">
                    <div className="card-header py-3" style={pageStyles.cardHeaderStyle}>
                      <h3 className="h5 mb-0 text-center fw-bold">Doyen</h3>
                    </div>
                    <div className="card-body d-flex flex-column align-items-center justify-content-center p-4">
                      <div className="rounded-circle p-3 mb-3" style={{ 
                        width: '80px', 
                        height: '80px', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        backgroundColor: fskColors.light
                      }}>
                        <FontAwesomeIcon icon="user-tie" style={{ fontSize: '2rem', color: fskColors.primary }}></FontAwesomeIcon>
                      </div>
                      <p className="card-text text-center fw-bold mb-0 fs-5">Pr. EBN TOUHAMI Mohamed</p>
                      <p className="text-muted small">Doyen de la Faculté des Sciences de Kénitra</p>
                    </div>
                  </div>
                  
                  {/* Vice-Doyens */}
                  <div className="card border-0 shadow-sm rounded-lg overflow-hidden mb-5 transform-on-hover">
                    <div className="card-header py-3" style={pageStyles.cardHeaderStyle}>
                      <h3 className="h5 mb-0 text-center fw-bold">Vice-Doyens</h3>
                    </div>
                    <div className="card-body p-4">
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <div className="d-flex align-items-center p-3 rounded" style={{ backgroundColor: fskColors.light }}>
                            <div className="rounded-circle p-2 me-3" style={{ 
                              width: '50px', 
                              height: '50px', 
                              display: 'flex', 
                              alignItems: 'center', 
                              justifyContent: 'center',
                              backgroundColor: fskColors.primary,
                              color: 'white'
                            }}>
                              <FontAwesomeIcon icon="user" style={{ fontSize: '1.5rem' }}></FontAwesomeIcon>
                            </div>
                            <div>
                              <span className="fw-bold d-block fs-6">Pr. EL WAHBI Bouazza</span>
                              <small className="text-muted">Vice-Doyen chargé des Affaires pédagogiques</small>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 mb-3">
                          <div className="d-flex align-items-center p-3 rounded" style={{ backgroundColor: fskColors.light }}>
                            <div className="rounded-circle p-2 me-3" style={{ 
                              width: '50px', 
                              height: '50px', 
                              display: 'flex', 
                              alignItems: 'center', 
                              justifyContent: 'center',
                              backgroundColor: fskColors.primary,
                              color: 'white'
                            }}>
                              <FontAwesomeIcon icon="user" style={{ fontSize: '1.5rem' }}></FontAwesomeIcon>
                            </div>
                            <div>
                              <span className="fw-bold d-block fs-6">Pr. CHAKIRI Saïd</span>
                              <small className="text-muted">Vice-Doyen chargé de la Recherche Scientifique</small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Chefs de Départements */}
                  <div className="card border-0 shadow-sm rounded-lg overflow-hidden mb-5 transform-on-hover">
                    <div className="card-header py-3" style={pageStyles.cardHeaderStyle}>
                      <h3 className="h5 mb-0 fw-bold">Chefs de Départements</h3>
                    </div>
                    <div className="card-body p-4">
                      <p className="text-muted mb-4">Les chefs de départements sont responsables de la coordination des activités pédagogiques et scientifiques au sein de leurs unités respectives.</p>
                      <div className="row">
                        {[
                          "Pr. MANSOURI Mohammed Wadia",
                          "Pr. FAKHRI Youssef",
                          "Pr. CHAKIR El Mahjoub",
                          "Pr. OUHSSINE Mohammed",
                          "Pr. El YOUBI Mohamed Salahdine",
                          "Pr. BENAMMI Mohamed"
                        ].map((chef, index) => (
                          <div key={index} className="col-md-4 mb-3">
                            <div className="d-flex align-items-center p-3 rounded" style={{ backgroundColor: fskColors.light }}>
                              <div className="rounded-circle p-2 me-3" style={{ 
                                width: '40px', 
                                height: '40px', 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center',
                                backgroundColor: fskColors.primary,
                                color: 'white'
                              }}>
                                <FontAwesomeIcon icon="building" style={{ fontSize: '1.2rem' }}></FontAwesomeIcon>
                              </div>
                              <span className="fw-semibold">{chef}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Personnel Administratif */}
                  <div className="card border-0 shadow-sm rounded-lg overflow-hidden mb-5 transform-on-hover">
                    <div className="card-header py-3" style={pageStyles.cardHeaderStyle}>
                      <h3 className="h5 mb-0 text-center fw-bold">Personnel Administratif</h3>
                    </div>
                    <div className="card-body p-4">
                      <p className="text-muted mb-4">Le personnel administratif assure le bon fonctionnement des services de la faculté et contribue à la qualité de l'environnement académique.</p>
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <div className="d-flex align-items-center p-3 rounded" style={{ backgroundColor: fskColors.light }}>
                            <div className="rounded-circle p-2 me-3" style={{ 
                              width: '50px', 
                              height: '50px', 
                              display: 'flex', 
                              alignItems: 'center', 
                              justifyContent: 'center',
                              backgroundColor: fskColors.primary,
                              color: 'white'
                            }}>
                              <FontAwesomeIcon icon="user" style={{ fontSize: '1.5rem' }}></FontAwesomeIcon>
                            </div>
                            <div>
                              <span className="fw-bold d-block fs-6">Mr. OUBASSOU M'Barek</span>
                              <small className="text-muted">Secrétaire Général</small>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 mb-3">
                          <div className="d-flex align-items-center p-3 rounded" style={{ backgroundColor: fskColors.light }}>
                            <div className="rounded-circle p-2 me-3" style={{ 
                              width: '50px', 
                              height: '50px', 
                              display: 'flex', 
                              alignItems: 'center', 
                              justifyContent: 'center',
                              backgroundColor: fskColors.primary,
                              color: 'white'
                            }}>
                              <FontAwesomeIcon icon="user" style={{ fontSize: '1.5rem' }}></FontAwesomeIcon>
                            </div>
                            <div>
                              <span className="fw-bold d-block fs-6">Mme. OUALLA Aicha</span>
                              <small className="text-muted">Responsable des Affaires Administratives</small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Professors Tab */}
                <div className={`tab-pane fade ${activeTab === 'professors' ? 'show active' : ''}`} style={{ transition: 'opacity 0.5s ease' }}>
                  <h2 style={pageStyles.sectionTitleStyle}>Corps Professoral</h2>
                  
                  <p className="text-muted mb-4">
                    Notre faculté bénéficie d'un corps professoral hautement qualifié, composé d'enseignants-chercheurs 
                    reconnus dans leurs domaines de spécialité respectifs. Leur expertise et leur dévouement 
                    contribuent à l'excellence de notre enseignement et de notre recherche.
                  </p>
                  
                  <div className="row mb-5">
                    <div className="col-md-4 mb-4">
                      <div className="card h-100 border-0 shadow-sm rounded-lg overflow-hidden transform-on-hover">
                        <div className="card-header py-3" style={pageStyles.cardHeaderStyle}>
                          <h3 className="h5 mb-0 text-center fw-bold">Professeurs de l′Enseignement Supérieur</h3>
                        </div>
                        <div className="card-body p-0">
                          <ul className="list-group list-group-flush">
                            {[
                              "Pr. ABOUCHABAKA Jaafar",
                              "Pr. EL KAFSSAOUI El Hassan",
                              "Pr. AHD Mohamed",
                              "Pr. GHAILANE Rachida"
                            ].map((prof, index) => (
                              <li key={index} className="list-group-item d-flex align-items-center">
                                <div className="rounded-circle p-2 me-3" style={{ 
                                  width: '36px', 
                                  height: '36px', 
                                  display: 'flex', 
                                  alignItems: 'center', 
                                  justifyContent: 'center',
                                  backgroundColor: fskColors.light,
                                  color: fskColors.primary
                                }}>
                                  <FontAwesomeIcon icon="graduation-cap" style={{ fontSize: '1rem' }}></FontAwesomeIcon>
                                </div>
                                <span className="fw-semibold">{prof}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-md-4 mb-4">
                      <div className="card h-100 border-0 shadow-sm rounded-lg overflow-hidden transform-on-hover">
                        <div className="card-header py-3" style={pageStyles.cardHeaderStyle}>
                          <h3 className="h5 mb-0 text-center fw-bold">Professeurs Habilités</h3>
                        </div>
                        <div className="card-body p-0">
                          <ul className="list-group list-group-flush">
                            {[
                              "Pr. AKHIAT Fettah",
                              "Pr. SHAIM Abdelillah",
                              "Pr. TKATEK Said",
                              "Pr. SADOUNE Zouhair"
                            ].map((prof, index) => (
                              <li key={index} className="list-group-item d-flex align-items-center">
                                <div className="rounded-circle p-2 me-3" style={{ 
                                  width: '36px', 
                                  height: '36px', 
                                  display: 'flex', 
                                  alignItems: 'center', 
                                  justifyContent: 'center',
                                  backgroundColor: fskColors.light,
                                  color: fskColors.primary
                                }}>
                                  <FontAwesomeIcon icon="graduation-cap" style={{ fontSize: '1rem' }}></FontAwesomeIcon>
                                </div>
                                <span className="fw-semibold">{prof}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-md-4 mb-4">
                      <div className="card h-100 border-0 shadow-sm rounded-lg overflow-hidden transform-on-hover">
                        <div className="card-header py-3" style={pageStyles.cardHeaderStyle}>
                          <h3 className="h5 mb-0 text-center fw-bold">Professeurs Assistants</h3>
                        </div>
                        <div className="card-body p-0">
                          <ul className="list-group list-group-flush">
                            {[
                              "Pr. EL MAKRANI Adil",
                              "Pr. HBAIZ EL Mahdi",
                              "Pr. RAMDAN Rajae",
                              "Pr. BENDOUMOU Abdallah"
                            ].map((prof, index) => (
                              <li key={index} className="list-group-item d-flex align-items-center">
                                <div className="rounded-circle p-2 me-3" style={{ 
                                  width: '36px', 
                                  height: '36px', 
                                  display: 'flex', 
                                  alignItems: 'center', 
                                  justifyContent: 'center',
                                  backgroundColor: fskColors.light,
                                  color: fskColors.primary
                                }}>
                                  <FontAwesomeIcon icon="graduation-cap" style={{ fontSize: '1rem' }}></FontAwesomeIcon>
                                </div>
                                <span className="fw-semibold">{prof}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Commissions Tab */}
                <div className={`tab-pane fade ${activeTab === 'commissions' ? 'show active' : ''}`} style={{ transition: 'opacity 0.5s ease' }}>
                  <h2 style={pageStyles.sectionTitleStyle}>Commissions du conseil de l'établissement</h2>
                  
                  <p className="text-muted mb-4">
                    Les commissions du conseil sont des organes consultatifs qui assistent le Conseil de la Faculté 
                    dans l'élaboration et le suivi des politiques dans leurs domaines respectifs. Chaque commission 
                    est présidée par un coordinateur et comprend des membres représentant différentes disciplines et entités.
                  </p>
                  
                  <div className="row">
                    {[
                      {
                        name: "Commission pédagogique",
                        coordinator: "Pr. EL KAFSSAOUI El Hassan",
                        icon: "book",
                        color: fskColors.primary,
                        description: "Chargée de l'évaluation et de l'amélioration des programmes d'enseignement.",
                        members: [
                          "Pr. El YOUBI Mohamed Salahdine",
                          "Pr. AKHIAT Fettah",
                          "Mme. OUALLA Aicha",
                          "Pr. GHAILANE Rachida",
                          "Pr. AHD Mohamed",
                          "Pr. EL WAHBI Bouazza",
                          "Pr. TKATEK Said",
                          "Pr. BENAMMI Mohamed"
                        ]
                      },
                      {
                        name: "Commission du budget",
                        coordinator: "Pr. SHAIM Abdelillah",
                        icon: "coins",
                        color: fskColors.primary,
                        description: "Responsable de l'élaboration et du suivi du budget de la faculté.",
                        members: [
                          "Pr. El YOUBI Mohamed Salahdine",
                          "Pr. EL WAHBI Bouazza",
                          "Pr. AKHIAT Fettah",
                          "Pr. EL MAKRANI Adil",
                          "Pr. SADOUNE Zouhair",
                          "Pr. BENDOUMOU Abdallah"
                        ]
                      },
                      {
                        name: "Commission Scientifique",
                        coordinator: "Pr. RAMDAN Rajae",
                        icon: "chart-line",
                        color: fskColors.primary,
                        description: "Évalue les dossiers de promotion et de recrutement des enseignants-chercheurs.",
                        members: [
                          "Pr. EL KAFSSAOUI El Hassan",
                          "Pr. AHD Mohamed",
                          "Pr. ABOUCHABAKA Jaafar",
                          "Pr. CHAKIR El Mahjoub",
                          "Pr. FAKHRI Youssef",
                          "Pr. OUHSSINE Mohammed"
                        ]
                      },
                      {
                        name: "Commission de la Recherche",
                        coordinator: "Pr. ABOUCHABAKA Jaafar",
                        icon: "search",
                        color: fskColors.primary,
                        description: "Coordonne et promeut les activités de recherche au sein de la faculté.",
                        members: [
                          "Pr. TKATEK Said",
                          "Pr. BENAMMI Mohamed",
                          "Pr. FAKHRI Youssef",
                          "Pr. OUHSSINE Mohammed",
                          "Pr. RAMDAN Rajae",
                          "Pr. SHAIM Abdelillah",
                          "Pr. GHAILANE Rachida",
                          "Pr. HBAIZ EL Mahdi"
                        ]
                      },
                      {
                        name: "Commission Culturelle et Sportives",
                        coordinator: "Pr. SADOUNE Zouhair",
                        icon: "music",
                        color: fskColors.primary,
                        description: "Organise et soutient les activités culturelles et sportives pour les étudiants.",
                        members: [
                          "Pr. CHAKIR El Mahjoub",
                          "Pr. EL MAKRANI Adil",
                          "Mme. OUALLA Aicha",
                          "Pr. BENDOUMOU Abdallah",
                          "Pr. HBAIZ EL Mahdi",
                          "Mr. OUBASSOU M'Barek"
                        ]
                      }
                    ].map((commission, index) => (
                      <div key={index} className="col-lg-6 mb-4">
                        <div className="card border-0 shadow-sm rounded-lg overflow-hidden transform-on-hover">
                          <div className="card-header py-3 d-flex align-items-center" style={pageStyles.cardHeaderStyle}>
                            <FontAwesomeIcon icon={commission.icon} className="me-2" style={{ fontSize: '1.2rem' }}></FontAwesomeIcon>
                            <h3 className="h5 mb-0 fw-bold">{commission.name}</h3>
                          </div>
                          <div className="card-body p-4">
                            <div className="d-flex align-items-center mb-3 p-3 rounded" style={{ backgroundColor: fskColors.light }}>
                              <div className="rounded-circle p-2 me-3" style={{ 
                                width: '40px', 
                                height: '40px', 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center',
                                backgroundColor: fskColors.primary,
                                color: 'white'
                              }}>
                                <FontAwesomeIcon icon="user-check" style={{ fontSize: '1.2rem' }}></FontAwesomeIcon>
                              </div>
                              <div>
                                <small className="text-muted d-block">Coordinateur</small>
                                <strong className="fs-6">{commission.coordinator}</strong>
                              </div>
                            </div>
                            <p className="text-muted small mb-3">{commission.description}</p>
                            <h6 className="mb-3 fw-bold">Membres:</h6>
                            <div className="row">
                              {commission.members.map((member, idx) => (
                                <div key={idx} className="col-md-6 mb-2">
                                  <div className="d-flex align-items-center">
                                    <FontAwesomeIcon icon="circle" className="me-2 text-primary" style={{ fontSize: '0.5rem' }}></FontAwesomeIcon>
                                    <small className="fw-semibold">{member}</small>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="d-flex gap-3 mt-5 justify-content-center">
              <Link 
                to="/structures/departements" 
                className="btn rounded-pill shadow-sm hover-float" 
                style={pageStyles.buttonStyle}
              >
                <FontAwesomeIcon icon="building" className="me-2" />
                Départements
              </Link>
              <Link 
                to="/structures/commission" 
                className="btn rounded-pill shadow-sm hover-float" 
                style={pageStyles.buttonStyle}
              >
                <FontAwesomeIcon icon="users" className="me-2" />
                Commission Scientifique
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .transform-on-hover {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .transform-on-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
        }
        .nav-link {
          border: none;
          margin: 0 2px;
          padding: 0.75rem 1.5rem;
          font-weight: 500;
          transition: all 0.3s ease;
        }
        .nav-link:hover {
          background-color: ${fskColors.light} !important;
          color: ${fskColors.primary} !important;
        }
        
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
        
        /* Responsive styles */
        @media (max-width: 767.98px) {
          .breadcrumb-wrapper, .mt-4.d-flex.gap-3 {
            display: none !important;
          }
        }
      `}</style>
    </Layout>
  )
}

export const Head = () => <Seo 
  title="Conseil de la Faculté | Faculté des Sciences de Kénitra" 
  description="Découvrez la composition et les missions du Conseil de la Faculté des Sciences de Kénitra, Université Ibn Tofail"
/>

export default ConseilPage 