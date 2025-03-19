import * as React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Container, Row, Col, Breadcrumb, Badge } from "react-bootstrap"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import applicationsNucleairesImg from "../../images/Lab-Mater-SubAtom-Seminaire-1.jpg"

const RamadanDesSciencesNucleairePage = () => {
  return (
    <Layout>
      <Container className="py-5">
        {/* Breadcrumb Navigation */}
        <Breadcrumb className="mb-4">
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Accueil</Breadcrumb.Item>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/actualites" }}>Actualités</Breadcrumb.Item>
          <Breadcrumb.Item active>Ramadan des Sciences - Les Applications Nucléaires dans le Domaine de l'Agriculture</Breadcrumb.Item>
        </Breadcrumb>
        
        <Row>
          <Col lg={8}>
            <article>
              <header className="mb-4">
                <h1 className="mb-3" style={{ 
                  fontWeight: '700',
                  color: '#003366'
                }}>Ramadan des Sciences 4ème édition - Les Applications Nucléaires dans le Domaine de l'Agriculture</h1>
                
                <div className="d-flex flex-wrap gap-3 mb-3">
                  <div className="d-flex align-items-center">
                    <FontAwesomeIcon icon="calendar-alt" className="me-2 text-primary" />
                    <span>12 Mars 2025 - 9h30-12h30</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <FontAwesomeIcon icon="map-marker-alt" className="me-2 text-primary" />
                    <span>Amphithéâtre des Conférences</span>
                  </div>
                </div>
                
                <Badge bg="primary" className="mb-3 px-3 py-2">Séminaire</Badge>
              </header>
              
              {/* Event Image - Use a placeholder until you have an actual image */}
              <div className="mb-4 text-center">
                <img 
                  src={applicationsNucleairesImg} 
                  alt="Ramadan des Sciences 4ème édition - Les Applications Nucléaires dans le Domaine de l'Agriculture" 
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
                  Le Laboratoire Physique des Matériaux et Subatomique et l'Association Moroccan Young Generation in Nuclear 
                  organisent un séminaire intitulé "Les Applications Nucléaires dans le Domaine de l'Agriculture", 
                  dans le cadre de la 4ème édition de Ramadan des Sciences.
                </p>
                
                <h2 className="h4 mb-3 mt-4">Programme</h2>
                <div className="program-details p-4 mb-4" style={{ backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                  <h3 className="h5 mb-3">Organisateurs</h3>
                  <ul>
                    <li>Laboratoire Physique des Matériaux et Subatomique</li>
                    <li>Association Moroccan Young Generation in Nuclear</li>
                  </ul>
                  
                  <h3 className="h5 mb-3 mt-4">Thème</h3>
                  <p>Les Applications Nucléaires dans le Domaine de l'Agriculture</p>
                  
                  <h3 className="h5 mb-3 mt-4">Intervenants</h3>
                  <ul>
                    <li>Dr. Mohammed MOUHIB (INRA – centre de Tanger)</li>
                    <li>Dr. Noureddine AMANZOU (Lab, Physique des Matériaux et Subatomique-FSK)</li>
                  </ul>
                  
                  <h3 className="h5 mb-3 mt-4">Date et Lieu</h3>
                  <p>12 Mars 2025 de 9h30 à 12h30 - Amphithéâtre des Conférences</p>
                  
                  <div className="alert alert-info mt-4">
                    <FontAwesomeIcon icon="certificate" className="me-2" />
                    Attestation de participation à la fin du séminaire
                  </div>
                </div>
              </div>
              
              {/* Contact Information */}
              <div className="contact-info p-4" style={{ backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                <h3 className="h5 mb-3">Contact</h3>
                <p>
                  <strong>Pr. El Mahjoub CHAKIR</strong><br />
                  Email: <a href="mailto:elmahjoub.chakir@uit.ac.ma">elmahjoub.chakir@uit.ac.ma</a><br />
                  Directeur du Laboratoire Physique des Matériaux et Subatomique
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
                      <strong>Date:</strong> 12 Mars 2025
                    </li>
                    <li className="mb-3">
                      <FontAwesomeIcon icon="clock" className="me-2 text-primary" />
                      <strong>Heure:</strong> 9h30-12h30
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
  title="Ramadan des Sciences 4ème édition - Les Applications Nucléaires dans le Domaine de l'Agriculture" 
  description="Le Laboratoire Physique des Matériaux et Subatomique et l'Association Moroccan Young Generation in Nuclear organisent un séminaire sur les applications nucléaires dans l'agriculture."
/>

export default RamadanDesSciencesNucleairePage 