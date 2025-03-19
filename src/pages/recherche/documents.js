import React from "react";
import { Container, Row, Col, Card, Breadcrumb, ListGroup, Button } from "react-bootstrap";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Layout from "../../components/Layout";
import SEO from "../../components/seo";

const DocumentsPage = () => {
  return (
    <Layout>
      <SEO title="Documents - Recherche" />
      
      <Container className="py-5">
        <Breadcrumb className="mb-4">
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Accueil</Breadcrumb.Item>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/recherche" }}>Recherche</Breadcrumb.Item>
          <Breadcrumb.Item active>Documents</Breadcrumb.Item>
        </Breadcrumb>
        
        <h1 className="display-4 mb-4">Documents Utiles</h1>
        
        <Row>
          <Col lg={8}>
            <Card className="shadow-sm mb-4">
              <Card.Body>
                <h2 className="h4 mb-4">Dossier de Soutenance</h2>
                
                <h3 className="h5 mb-3">Les pièces à fournir :</h3>
                
                <ListGroup variant="flush" className="mb-4">
                  <ListGroup.Item>
                    <div className="d-flex align-items-baseline">
                      <span className="me-2">•</span>
                      <span>Demande d'autorisation de dépôt du dossier de soutenance et Proposition du Jury de Thèse</span>
                    </div>
                  </ListGroup.Item>
                  
                  <ListGroup.Item>
                    <div className="d-flex align-items-baseline">
                      <span className="me-2">•</span>
                      <span>Une Demande Manuscrite adressée au chef de l'établissement d'inscription</span>
                    </div>
                  </ListGroup.Item>
                  
                  <ListGroup.Item>
                    <div className="d-flex align-items-baseline">
                      <span className="me-2">•</span>
                      <span>Une Copie de la thèse + CD</span>
                    </div>
                  </ListGroup.Item>
                  
                  <ListGroup.Item>
                    <div className="d-flex align-items-baseline">
                      <span className="me-2">•</span>
                      <span>Un Rapport Anti-Plagiat établit et signé par le directeur de thèse</span>
                    </div>
                  </ListGroup.Item>
                  
                  <ListGroup.Item>
                    <div className="d-flex align-items-baseline">
                      <span className="me-2">•</span>
                      <span>02 publications Indexées en tant que premier auteur, portant l'affilation de l'Université Ibn Tofail dont le Directeur de Thèse fait partie des co-auteurs</span>
                    </div>
                  </ListGroup.Item>
                  
                  <ListGroup.Item>
                    <div className="d-flex align-items-baseline">
                      <span className="me-2">•</span>
                      <span>02 communications dans des congrès nationaux ou internationaux</span>
                    </div>
                  </ListGroup.Item>
                  
                  <ListGroup.Item>
                    <div className="d-flex align-items-baseline">
                      <span className="me-2">•</span>
                      <span>Copie des attestations de 200 Heures justifiants les formations complémentaires</span>
                    </div>
                  </ListGroup.Item>
                </ListGroup>
                
                <h3 className="h5 mt-4 mb-3">Documents à télécharger :</h3>
                
                <ListGroup variant="flush">
                  <ListGroup.Item className="d-flex align-items-center">
                    <FontAwesomeIcon icon="file-pdf" className="text-danger me-3" />
                    <div>
                      <h5 className="h6 mb-0">Autorisation de soutenance de thèse de Doctorat</h5>
                      <small className="text-muted">Formulaire à remplir</small>
                    </div>
                    <Button variant="link" className="ms-auto">
                      <FontAwesomeIcon icon="download" /> Télécharger
                    </Button>
                  </ListGroup.Item>
                  
                  <ListGroup.Item className="d-flex align-items-center">
                    <FontAwesomeIcon icon="file-word" className="text-primary me-3" />
                    <div>
                      <h5 className="h6 mb-0">Dossier de préparation de la soutenance</h5>
                      <small className="text-muted">Instructions détaillées</small>
                    </div>
                    <Button variant="link" className="ms-auto">
                      <FontAwesomeIcon icon="download" /> Télécharger
                    </Button>
                  </ListGroup.Item>
                  
                  <ListGroup.Item className="d-flex align-items-center">
                    <FontAwesomeIcon icon="file-pdf" className="text-danger me-3" />
                    <div>
                      <h5 className="h6 mb-0">Couverture de Thèse</h5>
                      <small className="text-muted">Template officiel</small>
                    </div>
                    <Button variant="link" className="ms-auto">
                      <FontAwesomeIcon icon="download" /> Télécharger
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
          
          <Col lg={4}>
            <Card className="shadow-sm mb-4 bg-light">
              <Card.Body>
                <h3 className="h5 mb-3">Informations importantes</h3>
                <p>
                  Le dossier complet doit être déposé au secrétariat de la Formation Doctorale 
                  au moins 2 mois avant la date prévue de soutenance.
                </p>
                <p>
                  Pour toute question concernant votre soutenance de thèse, veuillez contacter 
                  le secrétariat du Centre d'Études Doctorales.
                </p>
                
                <div className="d-flex align-items-center mt-4">
                  <FontAwesomeIcon icon="envelope" className="text-primary me-2" />
                  <span>doctorat@uit.ac.ma</span>
                </div>
                <div className="d-flex align-items-center mt-2">
                  <FontAwesomeIcon icon="phone" className="text-primary me-2" />
                  <span>+212 5XX XX XX XX</span>
                </div>
                
                <div className="mt-4 p-3 bg-warning bg-opacity-10 rounded border border-warning">
                  <div className="d-flex">
                    <FontAwesomeIcon icon="exclamation-triangle" className="text-warning mt-1 me-2" />
                    <div>
                      <h4 className="h6 text-warning">Rappel important</h4>
                      <p className="mb-0 small">Assurez-vous que tous les documents sont dûment complétés et signés par les parties concernées avant le dépôt de votre dossier.</p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default DocumentsPage; 