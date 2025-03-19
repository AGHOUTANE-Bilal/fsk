import * as React from "react"
import { Link } from "gatsby"
import { Container, Row, Col, Breadcrumb, Form, Tab, Nav, Button, Card } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const EmploiTempsPage = () => {
  const [filiere, setFiliere] = React.useState("SMI")
  const [semestre, setSemestre] = React.useState("S1")
  
  const filieres = [
    { id: "SMI", name: "Sciences Mathématiques et Informatique" },
    { id: "SMA", name: "Sciences Mathématiques Appliquées" },
    { id: "SMP", name: "Sciences Matière Physique" },
    { id: "SMC", name: "Sciences Matière Chimie" },
    { id: "SVI", name: "Sciences de la Vie" },
    { id: "STU", name: "Sciences de la Terre et de l'Univers" }
  ]
  
  const semestres = [
    { id: "S1", name: "Semestre 1" },
    { id: "S2", name: "Semestre 2" },
    { id: "S3", name: "Semestre 3" },
    { id: "S4", name: "Semestre 4" },
    { id: "S5", name: "Semestre 5" },
    { id: "S6", name: "Semestre 6" }
  ]

  return (
    <Layout>
      <Container className="py-5">
        {/* Breadcrumb Navigation */}
        <Breadcrumb className="mb-4">
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Accueil</Breadcrumb.Item>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/etudiants" }}>Étudiants</Breadcrumb.Item>
          <Breadcrumb.Item active>Emploi du temps</Breadcrumb.Item>
        </Breadcrumb>
        
        <h1 className="mb-4">Emploi du temps</h1>
        
        <Row className="mb-4">
          <Col lg={8}>
            <p className="lead">
              Consultez les emplois du temps pour chaque filière et semestre. 
              Les emplois du temps sont mis à jour régulièrement, veuillez vérifier 
              les dates de dernière mise à jour.
            </p>
          </Col>
        </Row>
        
        <Card className="shadow-sm mb-5">
          <Card.Header className="bg-light">
            <h3 className="h5 mb-0">Sélectionnez votre filière et semestre</h3>
          </Card.Header>
          <Card.Body>
            <Row className="mb-4">
              <Col md={6} className="mb-3 mb-md-0">
                <Form.Group>
                  <Form.Label>Filière</Form.Label>
                  <Form.Select 
                    value={filiere} 
                    onChange={(e) => setFiliere(e.target.value)}
                  >
                    {filieres.map(f => (
                      <option key={f.id} value={f.id}>{f.name}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Semestre</Form.Label>
                  <Form.Select 
                    value={semestre} 
                    onChange={(e) => setSemestre(e.target.value)}
                  >
                    {semestres.map(s => (
                      <option key={s.id} value={s.id}>{s.name}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            
            <div className="text-center">
              <Button variant="primary" className="px-4">
                <FontAwesomeIcon icon="search" className="me-2" />
                Afficher l'emploi du temps
              </Button>
            </div>
          </Card.Body>
        </Card>
        
        <Row>
          <Col lg={12}>
            <Card className="shadow-sm mb-4">
              <Card.Header className="d-flex justify-content-between align-items-center bg-light">
                <h3 className="h5 mb-0">Emploi du temps {filiere} - {semestre}</h3>
                <div>
                  <Button variant="outline-secondary" size="sm" className="me-2">
                    <FontAwesomeIcon icon="print" className="me-1" />
                    Imprimer
                  </Button>
                  <Button variant="outline-primary" size="sm">
                    <FontAwesomeIcon icon="download" className="me-1" />
                    Télécharger PDF
                  </Button>
                </div>
              </Card.Header>
              <Card.Body>
                <div className="text-center py-5">
                  <FontAwesomeIcon icon="calendar-alt" size="4x" className="text-muted mb-3" />
                  <p className="mb-0">
                    Sélectionnez une filière et un semestre pour afficher l'emploi du temps.
                  </p>
                  <p className="text-muted">
                    <small>Dernière mise à jour: 05 Mars 2025</small>
                  </p>
                </div>
                
                {/* Here you would display the actual timetable based on filiere and semestre */}
                {/* This is a placeholder for demonstration */}
                <div className="d-none">
                  <table className="table table-bordered timetable">
                    <thead className="table-light">
                      <tr>
                        <th>Horaire</th>
                        <th>Lundi</th>
                        <th>Mardi</th>
                        <th>Mercredi</th>
                        <th>Jeudi</th>
                        <th>Vendredi</th>
                        <th>Samedi</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Timetable rows would go here */}
                    </tbody>
                  </table>
                </div>
              </Card.Body>
              <Card.Footer className="bg-white">
                <small className="text-muted">
                  <FontAwesomeIcon icon="info-circle" className="me-1" />
                  Note: Les emplois du temps peuvent être sujets à des modifications. 
                  Veuillez vérifier régulièrement pour les mises à jour.
                </small>
              </Card.Footer>
            </Card>
            
            <div className="alert alert-info">
              <FontAwesomeIcon icon="bell" className="me-2" />
              Pour toute question concernant les emplois du temps, 
              veuillez contacter le secrétariat de votre département.
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export const Head = () => <Seo 
  title="Emploi du temps" 
  description="Consultez les emplois du temps des cours pour les différentes filières et semestres de la Faculté des Sciences de Kénitra."
/>

export default EmploiTempsPage 