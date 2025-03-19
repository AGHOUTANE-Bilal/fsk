import * as React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Container, Row, Col, Breadcrumb, Badge } from "react-bootstrap"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import politiqueSanteImg from "../../images/PolitiqueNationaledeSante.jpg"

const RamadanDesSciencesSante = () => {
  return (
    <Layout>
      <Container className="py-5">
        {/* Breadcrumb Navigation */}
        <Breadcrumb className="mb-4">
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Accueil</Breadcrumb.Item>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/actualites" }}>Actualités</Breadcrumb.Item>
          <Breadcrumb.Item active>Ramadan des Sciences - Politique Nationale de Santé</Breadcrumb.Item>
        </Breadcrumb>
        
        <Row>
          <Col lg={8}>
            <article>
              <header className="mb-4">
                <h1 className="mb-3" style={{ 
                  fontWeight: '700',
                  color: '#003366'
                }}>Ramadan des Sciences 4ème édition - Politique Nationale de Santé</h1>
                
                <div className="d-flex flex-wrap gap-3 mb-3">
                  <div className="d-flex align-items-center">
                    <FontAwesomeIcon icon="calendar-alt" className="me-2 text-primary" />
                    <span>10 Mars 2025 - 10h</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <FontAwesomeIcon icon="map-marker-alt" className="me-2 text-primary" />
                    <span>Amphithéâtre des Conférences</span>
                  </div>
                </div>
                
                <Badge bg="primary" className="mb-3 px-3 py-2">Séminaire</Badge>
              </header>
              
              {/* Event Image */}
              <div className="mb-4 text-center">
                <img 
                  src={politiqueSanteImg} 
                  alt="Ramadan des Sciences 4ème édition - Politique Nationale de Santé" 
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
                  Le Laboratoire Ressources Naturelles et Développement Durables organise une journée scientifique 
                  sous le thème de la Politique Nationale de Santé, dans le cadre de la 4ème édition de Ramadan des Sciences.
                </p>
                
                <h2 className="h4 mb-3 mt-4">Programme</h2>
                <div className="program-details p-4 mb-4" style={{ backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                  <h3 className="h5 mb-3">Organisateur</h3>
                  <p>Laboratoire Ressources Naturelles et Développement Durables</p>
                  
                  <h3 className="h5 mb-3 mt-4">Thème</h3>
                  <p>Politique Nationale de Santé</p>
                  
                  <h3 className="h5 mb-3 mt-4">Intervenants</h3>
                  <ul>
                    <li>Mounia ELHAMRAOUI</li>
                    <li>Khalil BOUBHI</li>
                    <li>Abderrahim ANBI</li>
                    <li>Ouail OUCHENE</li>
                    <li>Mohammed OUHSSINE</li>
                  </ul>
                  
                  <h3 className="h5 mb-3 mt-4">Date et Lieu</h3>
                  <p>10 Mars 2025 à 10h - Amphithéâtre des Conférences</p>
                  
                  <div className="alert alert-info mt-4">
                    <FontAwesomeIcon icon="certificate" className="me-2" />
                    Attestation de participation à la fin du séminaire
                  </div>
                </div>
              </div>
              
              {/* Contact Information */}
              <div className="contact-info p-4" style={{ backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                <h3 className="h5 mb-3">Pour plus d'informations</h3>
                <p>
                  Veuillez contacter le Laboratoire Ressources Naturelles et Développement Durables ou 
                  le comité d'organisation de l'événement.
                </p>
                <Link to="/contact" className="btn btn-primary">
                  <FontAwesomeIcon icon="envelope" className="me-2" />
                  Nous contacter
                </Link>
              </div>
            </article>
          </Col>
          
          <Col lg={4} className="mt-5 mt-lg-0">
            <div className="sticky-top" style={{ top: '2rem' }}>
              <div className="card border-0 shadow-sm mb-4">
                <div className="card-header bg-primary text-white">
                  <h3 className="h5 mb-0">Détails de l'événement</h3>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled mb-0">
                    <li className="mb-3">
                      <FontAwesomeIcon icon="calendar-alt" className="me-2 text-primary" />
                      <strong>Date:</strong> 10 Mars 2025
                    </li>
                    <li className="mb-3">
                      <FontAwesomeIcon icon="clock" className="me-2 text-primary" />
                      <strong>Heure:</strong> 10h
                    </li>
                    <li className="mb-3">
                      <FontAwesomeIcon icon="map-marker-alt" className="me-2 text-primary" />
                      <strong>Lieu:</strong> Amphithéâtre des Conférences
                    </li>
                    <li>
                      <FontAwesomeIcon icon="tag" className="me-2 text-primary" />
                      <strong>Catégorie:</strong> Séminaire
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="card border-0 shadow-sm">
                <div className="card-header bg-primary text-white">
                  <h3 className="h5 mb-0">Partagez cet événement</h3>
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
  title="Ramadan des Sciences 4ème édition - Politique Nationale de Santé" 
  description="Le Laboratoire Ressources Naturelles et Développement Durables organise une journée scientifique sous le thème de la Politique Nationale de Santé, avec Mounia ELHAMRAOUI, Khalil BOUBHI, Abderrahim ANBI, Ouail OUCHENE et Mohammed OUHSSINE comme intervenants."
/>

export default RamadanDesSciencesSante 