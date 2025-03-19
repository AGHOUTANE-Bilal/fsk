import * as React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Container, Row, Col, Breadcrumb, Badge } from "react-bootstrap"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const TutorialsStartPage = () => {
  return (
    <Layout>
      <Container className="py-5">
        {/* Breadcrumb Navigation */}
        <Breadcrumb className="mb-4">
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Accueil</Breadcrumb.Item>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/actualites" }}>Actualités</Breadcrumb.Item>
          <Breadcrumb.Item active>Commencement des travaux dirigés</Breadcrumb.Item>
        </Breadcrumb>
        
        <Row>
          <Col lg={8}>
            <article>
              <header className="mb-4">
                <h1 className="mb-3" style={{ 
                  fontWeight: '700',
                  color: '#003366'
                }}>Avis aux étudiants du cycle Licence fondamentale – commencement des travaux dirigés</h1>
                
                <div className="d-flex flex-wrap gap-3 mb-3">
                  <div className="d-flex align-items-center">
                    <FontAwesomeIcon icon="calendar-alt" className="me-2 text-primary" />
                    <span>À partir du 10 Mars 2025</span>
                  </div>
                </div>
                
                <Badge bg="primary" className="mb-3 px-3 py-2">Annonce</Badge>
              </header>
              
              {/* Announcement Content */}
              <div className="event-details mb-5">
                <div className="alert alert-info p-4">
                  <FontAwesomeIcon icon="info-circle" className="me-2" size="lg" />
                  <strong>Avis important</strong>
                </div>
                
                <p className="lead">
                  Le Doyen de la Faculté des Sciences porte à la connaissance des étudiants du cycle de la licence 
                  fondamentale que les travaux dirigés débuteront à partir du lundi 10 mars 2025, selon les emplois 
                  du temps ci-dessous.
                </p>
                
                <h2 className="h4 mb-3 mt-5">Emplois du temps</h2>
                <div className="program-details p-4 mb-4" style={{ backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                  <h3 className="h5 mb-3">Les emplois des semestres pour la session du printemps 2025:</h3>
                  
                  <div className="list-group">
                    <Link to="#" className="list-group-item list-group-item-action d-flex align-items-center">
                      <FontAwesomeIcon icon="file-pdf" className="me-3 text-danger" size="lg" />
                      <div>
                        <strong>Semestre 2 (S2)</strong>
                        <div className="small text-muted">Emploi du temps des travaux dirigés</div>
                      </div>
                      <FontAwesomeIcon icon="download" className="ms-auto" />
                    </Link>
                    
                    <Link to="#" className="list-group-item list-group-item-action d-flex align-items-center">
                      <FontAwesomeIcon icon="file-pdf" className="me-3 text-danger" size="lg" />
                      <div>
                        <strong>Semestre 4 (S4)</strong>
                        <div className="small text-muted">Emploi du temps des travaux dirigés</div>
                      </div>
                      <FontAwesomeIcon icon="download" className="ms-auto" />
                    </Link>
                    
                    <Link to="#" className="list-group-item list-group-item-action d-flex align-items-center">
                      <FontAwesomeIcon icon="file-pdf" className="me-3 text-danger" size="lg" />
                      <div>
                        <strong>Semestre 6 (S6)</strong>
                        <div className="small text-muted">Emploi du temps des travaux dirigés</div>
                      </div>
                      <FontAwesomeIcon icon="download" className="ms-auto" />
                    </Link>
                  </div>
                  
                  <div className="alert alert-warning mt-4">
                    <FontAwesomeIcon icon="exclamation-triangle" className="me-2" />
                    Les étudiants sont priés de consulter régulièrement les tableaux d'affichage et le site web de la faculté 
                    pour tout changement éventuel dans les emplois du temps.
                  </div>
                </div>
              </div>
            </article>
          </Col>
          
          <Col lg={4} className="mt-5 mt-lg-0">
            <div className="sticky-top" style={{ top: '2rem' }}>
              <div className="card border-0 shadow-sm mb-4">
                <div className="card-header bg-primary" style={{ fontWeight: 'bold' }}>
                  <h3 className="h5 mb-0" style={{ color: 'white' }}>Détails de l'annonce</h3>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled mb-0">
                    <li className="mb-3">
                      <FontAwesomeIcon icon="calendar-alt" className="me-2 text-primary" />
                      <strong>Date de début:</strong> 10 Mars 2025
                    </li>
                    <li className="mb-3">
                      <FontAwesomeIcon icon="university" className="me-2 text-primary" />
                      <strong>Concerne:</strong> Étudiants Licence (S2, S4, S6)
                    </li>
                    <li>
                      <FontAwesomeIcon icon="tag" className="me-2 text-primary" />
                      <strong>Catégorie:</strong> Annonce
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="card border-0 shadow-sm">
                <div className="card-header bg-primary" style={{ fontWeight: 'bold' }}>
                  <h3 className="h5 mb-0" style={{ color: 'white' }}>Partagez cette annonce</h3>
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
  title="Commencement des travaux dirigés - Licence fondamentale" 
  description="Le Doyen de la Faculté des Sciences annonce le début des travaux dirigés pour les étudiants du cycle de licence fondamentale à partir du 10 mars 2025."
/>

export default TutorialsStartPage 