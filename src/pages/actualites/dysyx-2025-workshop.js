import * as React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Container, Row, Col, Breadcrumb, Badge } from "react-bootstrap"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import dysyxWorkshopImg from "../../images/affiche_dysyx2025-1_page.jpg"

const DySyXWorkshopPage = () => {
  return (
    <Layout>
      <Container className="py-5">
        {/* Breadcrumb Navigation */}
        <Breadcrumb className="mb-4">
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Accueil</Breadcrumb.Item>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/actualites" }}>Actualités</Breadcrumb.Item>
          <Breadcrumb.Item active>DySyX'2025 Workshop</Breadcrumb.Item>
        </Breadcrumb>
        
        <Row>
          <Col lg={8}>
            <article>
              <header className="mb-4">
                <h1 className="mb-3" style={{ 
                  fontWeight: '700',
                  color: '#003366'
                }}>The 2nd International Workshop on Advance in Nonlinear Dynamical Systems, Complex Networks and Applications (DySyX'2025)</h1>
                
                <div className="d-flex flex-wrap gap-3 mb-3">
                  <div className="d-flex align-items-center">
                    <FontAwesomeIcon icon="calendar-alt" className="me-2 text-primary" />
                    <span>22-23 Mai 2025</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <FontAwesomeIcon icon="map-marker-alt" className="me-2 text-primary" />
                    <span>Faculté des Sciences, Kénitra</span>
                  </div>
                </div>
                
                <Badge bg="primary" className="mb-3 px-3 py-2">Workshop International</Badge>
              </header>
              
              {/* Event Image - Placeholder until you have an image */}
              <div className="mb-4 text-center">
                <img 
                  src={dysyxWorkshopImg} 
                  alt="DySyX'2025 - International Workshop on Nonlinear Dynamical Systems" 
                  style={{ 
                    maxWidth: '100%', 
                    height: 'auto',
                    borderRadius: '8px',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                  }} 
                />
              </div>
              
              {/* Event Details */}
              <div className="event-details mb-5">
                <h2 className="h4 mb-3">Présentation</h2>
                <p>
                  Ibn Tofail & Le Havre Normandie Universities organize The 2nd International Workshop on Advance in Nonlinear 
                  Dynamical Systems, Complex Networks and Applications (DySyX'2025).
                </p>
                <p>
                  DySyX'2025 is a two days workshop organized by Faculty of Sciences of Kénitra (LAGA), Ibn Tofail University 
                  and Le Havre Normandie University (LMAH). It will focus on recent advances in dynamical systems, complex 
                  networks, and applications in some fields of science and engineering.
                </p>
                <p>
                  This meeting will provide a joint forum for leading applied mathematicians and scientists actively working in 
                  the diverse fields of life sciences in order to exchange ideas, advance the knowledge of research, discuss 
                  future research challenges, and explore opportunities for collaborative exchange and education.
                </p>
                <p>
                  There will be several guest talks covering such recent trends.
                </p>
                
                <div className="alert alert-info mt-4">
                  <strong>PHC Toubkal:</strong> This workshop is organized in the frame of the PHC-Toubkal project 2025.
                </div>
                
                <h2 className="h4 mb-3 mt-4">Dates importantes</h2>
                <div className="program-details p-4 mb-4" style={{ backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                  <div className="row">
                    <div className="col-md-6">
                      <h3 className="h5 mb-3">Dates du workshop</h3>
                      <p>22-23 Mai 2025</p>
                      
                      <h3 className="h5 mb-3 mt-4">Date limite de soumission</h3>
                      <p>30 Avril 2025</p>
                    </div>
                    <div className="col-md-6">
                      <h3 className="h5 mb-3">Lieu</h3>
                      <p>Faculté des Sciences, Kénitra, Maroc</p>
                      
                      <h3 className="h5 mb-3 mt-4">Site web</h3>
                      <p><a href="https://dysyx2025.sciencesconf.org" target="_blank" rel="noopener noreferrer">
                        https://dysyx2025.sciencesconf.org
                      </a></p>
                    </div>
                  </div>
                </div>
                
                <h2 className="h4 mb-3 mt-4">Inscriptions</h2>
                <div className="program-details p-4 mb-4" style={{ backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                  <h3 className="h5 mb-3">Frais d'inscription</h3>
                  <p>
                    Gratuit, mais le workshop ne prend pas en charge les frais de repas et d'hébergement.
                  </p>
                  
                  <h3 className="h5 mb-3 mt-4">Comment s'inscrire</h3>
                  <p>
                    Pour vous inscrire, envoyez un email à <a href="mailto:dysyx2025@gmail.com">dysyx2025@gmail.com</a>
                  </p>
                </div>
              </div>
              
              {/* Contact Information */}
              <div className="contact-info p-4" style={{ backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                <h3 className="h5 mb-3">Contact</h3>
                <p>
                  Email: <a href="mailto:dysyx2025@gmail.com">dysyx2025@gmail.com</a><br />
                  <a href="mailto:radouane.yafia@uit.ac.ma">radouane.yafia@uit.ac.ma</a>
                </p>
                <div className="mt-3">
                  <a href="https://dysyx2025.sciencesconf.org" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    <FontAwesomeIcon icon="globe" className="me-2" />
                    Visiter le site web
                  </a>
                </div>
              </div>
            </article>
          </Col>
          
          <Col lg={4} className="mt-5 mt-lg-0">
            <div className="sticky-top" style={{ top: '2rem' }}>
              <div className="card border-0 shadow-sm mb-4">
                <div className="card-header bg-primary text-white" style={{ fontWeight: 'bold' }}>
                  <h3 className="h5 mb-0" style={{ color: 'white' }}>Détails de l'événement</h3>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled mb-0">
                    <li className="mb-3">
                      <FontAwesomeIcon icon="calendar-alt" className="me-2 text-primary" />
                      <strong>Date:</strong> 22-23 Mai 2025
                    </li>
                    <li className="mb-3">
                      <FontAwesomeIcon icon="map-marker-alt" className="me-2 text-primary" />
                      <strong>Lieu:</strong> Faculté des Sciences, Kénitra
                    </li>
                    <li className="mb-3">
                      <FontAwesomeIcon icon="clock" className="me-2 text-primary" />
                      <strong>Date limite de soumission:</strong> 30 Avril 2025
                    </li>
                    <li>
                      <FontAwesomeIcon icon="tag" className="me-2 text-primary" />
                      <strong>Catégorie:</strong> Workshop International
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="card border-0 shadow-sm mb-4">
                <div className="card-header bg-primary text-white" style={{ fontWeight: 'bold' }}>
                  <h3 className="h5 mb-0" style={{ color: 'white' }}>Liens importants</h3>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled mb-0">
                    <li className="mb-3">
                      <FontAwesomeIcon icon="globe" className="me-2 text-primary" />
                      <a href="https://dysyx2025.sciencesconf.org" target="_blank" rel="noopener noreferrer">
                        Site officiel du workshop
                      </a>
                    </li>
                    <li className="mb-3">
                      <FontAwesomeIcon icon="envelope" className="me-2 text-primary" />
                      <a href="mailto:dysyx2025@gmail.com">
                        Contact par email
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="card border-0 shadow-sm">
                <div className="card-header bg-primary text-white" style={{ fontWeight: 'bold' }}>
                  <h3 className="h5 mb-0" style={{ color: 'white' }}>Partagez cet événement</h3>
                </div>
                <div className="card-body">
                  <div className="d-flex gap-2">
                    <button className="btn btn-outline-primary">
                      <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                    </button>
                    <button className="btn btn-outline-info">
                      <FontAwesomeIcon icon={['fab', 'twitter']} />
                    </button>
                    <button className="btn btn-outline-success">
                      <FontAwesomeIcon icon={['fab', 'whatsapp']} />
                    </button>
                    <button className="btn btn-outline-secondary">
                      <FontAwesomeIcon icon="envelope" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export const Head = () => <Seo 
  title="DySyX'2025 - International Workshop on Nonlinear Dynamical Systems" 
  description="Ibn Tofail & Le Havre Normandie Universities organize The 2nd International Workshop on Advance in Nonlinear Dynamical Systems, Complex Networks and Applications."
/>

export default DySyXWorkshopPage 