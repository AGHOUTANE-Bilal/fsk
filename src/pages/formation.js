import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { Card, Row, Col, Alert, Button } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function FormationPage() {
  return (
    <Layout>
      <div className="container py-4">
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Accueil</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Formations
            </li>
          </ol>
        </nav>

        <h1 className="mb-4">Formations</h1>
        
        <div className="alert alert-primary mb-4">
          <div className="d-flex">
            <div className="me-3">
              <FontAwesomeIcon icon="info-circle" size="lg" />
            </div>
            <div>
              <p className="mb-0">
                La Faculté des Sciences de Kénitra propose des formations de qualité selon le système LMD 
                (Licence-Master-Doctorat), conformément aux standards internationaux et aux besoins du marché du travail.
              </p>
            </div>
          </div>
        </div>
        
        <Row className="row-cols-1 row-cols-md-3 g-4 mb-5">
          <Col>
            <Card className="h-100 shadow-sm text-center">
              <Card.Header className="bg-primary">
                <h2 className="h4 mb-0 text-white fw-bold">Licence</h2>
              </Card.Header>
              <Card.Body className="d-flex flex-column">
                <div className="mb-3 text-primary">
                  <FontAwesomeIcon icon="graduation-cap" size="4x" />
                </div>
                <Card.Title className="h5">Bac + 3</Card.Title>
                <Card.Text>
                  Formations fondamentales et professionnelles en sciences et techniques, 
                  organisées en 6 semestres (3 ans).
                </Card.Text>
                <div className="mt-auto">
                  <Link to="/formation/licence" className="btn btn-outline-primary">
                    <FontAwesomeIcon icon="arrow-right" className="me-2" />
                    Détails des licences
                  </Link>
                </div>
              </Card.Body>
              <Card.Footer className="text-muted">
                <small>Ouvert aux bacheliers scientifiques</small>
              </Card.Footer>
            </Card>
          </Col>
          
          <Col>
            <Card className="h-100 shadow-sm text-center">
              <Card.Header className="bg-success">
                <h2 className="h4 mb-0 text-white fw-bold">Master</h2>
              </Card.Header>
              <Card.Body className="d-flex flex-column">
                <div className="mb-3 text-success">
                  <FontAwesomeIcon icon="user-graduate" size="4x" />
                </div>
                <Card.Title className="h5">Bac + 5</Card.Title>
                <Card.Text>
                  Masters de recherche et spécialisés dans divers domaines scientifiques, 
                  organisés en 4 semestres (2 ans).
                </Card.Text>
                <div className="mt-auto">
                  <Link to="/formation/master" className="btn btn-outline-success">
                    <FontAwesomeIcon icon="arrow-right" className="me-2" />
                    Détails des masters
                  </Link>
                </div>
              </Card.Body>
              <Card.Footer className="text-muted">
                <small>Admission sélective pour les titulaires d'une licence</small>
              </Card.Footer>
            </Card>
          </Col>
          
          <Col>
            <Card className="h-100 shadow-sm text-center">
              <Card.Header className="bg-info">
                <h2 className="h4 mb-0 text-white fw-bold">Doctorat</h2>
              </Card.Header>
              <Card.Body className="d-flex flex-column">
                <div className="mb-3 text-info">
                  <FontAwesomeIcon icon="microscope" size="4x" />
                </div>
                <Card.Title className="h5">Bac + 8</Card.Title>
                <Card.Text>
                  Formation par la recherche organisée au sein des Centres d'Études Doctorales, 
                  d'une durée de 3 ans minimum.
                </Card.Text>
                <div className="mt-auto">
                  <Link to="/formation/doctorat" className="btn btn-outline-info">
                    <FontAwesomeIcon icon="arrow-right" className="me-2" />
                    Formation doctorale
                  </Link>
                </div>
              </Card.Body>
              <Card.Footer className="text-muted">
                <small>Pour les titulaires d'un master ou équivalent</small>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        
        <Card className="shadow-sm mb-4">
          <Card.Header className="bg-warning">
            <h2 className="h5 mb-0 text-white fw-bold">Système LMD</h2>
          </Card.Header>
          <Card.Body>
            <Row className="g-4">
              <Col md={6}>
                <Card className="h-100 border-warning">
                  <Card.Header className="bg-light">
                    <h3 className="h6 mb-0 fw-bold text-warning">Architecture pédagogique</h3>
                  </Card.Header>
                  <Card.Body>
                    <p>
                      Le système LMD (Licence-Master-Doctorat) est structuré en trois niveaux de diplômes reconnus 
                      internationalement :
                    </p>
                    <ul>
                      <li><strong>Licence :</strong> 6 semestres (180 crédits ECTS)</li>
                      <li><strong>Master :</strong> 4 semestres après la Licence (120 crédits ECTS)</li>
                      <li><strong>Doctorat :</strong> 3 ans minimum après le Master</li>
                    </ul>
                    <p>
                      Cette organisation facilite la mobilité des étudiants et la comparabilité des diplômes 
                      au niveau international.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              
              <Col md={6}>
                <Card className="h-100 border-warning">
                  <Card.Header className="bg-light">
                    <h3 className="h6 mb-0 fw-bold text-warning">Organisation des études</h3>
                  </Card.Header>
                  <Card.Body>
                    <p>
                      Les formations sont organisées en semestres, modules et filières :
                    </p>
                    <ul>
                      <li><strong>Semestre :</strong> Unité de découpage de l'année universitaire (16 semaines)</li>
                      <li><strong>Module :</strong> Unité d'enseignement avec un volume horaire défini</li>
                      <li><strong>Filière :</strong> Cursus de formation cohérent dans un domaine spécifique</li>
                    </ul>
                    <p>
                      L'évaluation est basée sur un contrôle continu et des examens finaux, avec possibilité de rattrapage.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        
        <Card className="shadow-sm mb-4">
          <Card.Header className="bg-secondary">
            <h2 className="h5 mb-0 text-white fw-bold">Formation continue</h2>
          </Card.Header>
          <Card.Body>
            <p>
              En plus des formations initiales, la Faculté des Sciences de Kénitra propose des formations continues 
              destinées aux professionnels souhaitant développer leurs compétences ou obtenir une qualification 
              supplémentaire. Ces formations sont adaptées aux contraintes des personnes en activité professionnelle.
            </p>
            
            <div className="row mt-4">
              <div className="col-md-6">
                <div className="card mb-3">
                  <div className="card-body">
                    <h3 className="h6 fw-bold">Licence d'Université Spécialisée (LUS)</h3>
                    <p className="small">Formation de niveau Bac+3 destinée aux professionnels</p>
                  </div>
                </div>
              </div>
              
              <div className="col-md-6">
                <div className="card mb-3">
                  <div className="card-body">
                    <h3 className="h6 fw-bold">Master d'Université Spécialisé (MUS)</h3>
                    <p className="small">Formation de niveau Bac+5 pour l'expertise professionnelle</p>
                  </div>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
        
        <Alert variant="info" className="mt-4">
          <div className="d-flex">
            <div className="me-3">
              <FontAwesomeIcon icon="calendar-alt" size="lg" />
            </div>
            <div>
              <p className="mb-0">
                Pour connaître les dates d'inscription et les modalités de candidature aux différentes formations, 
                veuillez consulter régulièrement notre rubrique <Link to="/actualites">Actualités</Link> ou 
                contacter le <Link to="/contact">service de scolarité</Link>.
              </p>
            </div>
          </div>
        </Alert>
      </div>
    </Layout>
  )
} 