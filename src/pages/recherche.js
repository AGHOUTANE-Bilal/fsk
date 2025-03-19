import React from "react";
import { Container, Row, Col, Card, Button, Breadcrumb, ListGroup } from "react-bootstrap";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Layout from "../components/layout";
import SEO from "../components/seo";

const ResearchPage = () => {
  return (
    <Layout>
      <SEO title="Recherche Scientifique" />
      
      <Container className="py-5">
        <Breadcrumb className="mb-4">
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Accueil</Breadcrumb.Item>
          <Breadcrumb.Item active>Recherche</Breadcrumb.Item>
        </Breadcrumb>
        
        <h1 className="display-4 mb-4">Recherche Scientifique</h1>
        
        <Row className="mb-5">
          <Col lg={8}>
            <Card className="shadow-sm mb-4">
              <Card.Body>
                <h2 className="h4 mb-3">Vision de recherche</h2>
                <p>
                  La Faculté des Sciences de Kenitra s'engage à promouvoir une recherche scientifique 
                  de qualité, multidisciplinaire et innovante. Nos équipes de chercheurs travaillent 
                  sur des projets fondamentaux et appliqués qui répondent aux enjeux scientifiques, 
                  technologiques et sociétaux actuels.
                </p>
                <p>
                  Notre ambition est de contribuer au développement scientifique et technologique 
                  national et international à travers des projets de recherche à fort impact, des 
                  partenariats stratégiques avec les acteurs socio-économiques et des collaborations 
                  internationales.
                </p>
              </Card.Body>
            </Card>
          </Col>
          
          <Col lg={4}>
            <Card className="shadow-sm mb-4 bg-light">
              <Card.Body>
                <h3 className="h5 mb-3">Axes de recherche</h3>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <FontAwesomeIcon icon="flask" className="me-2 text-primary" />
                    Sciences fondamentales
                  </li>
                  <li className="mb-2">
                    <FontAwesomeIcon icon="microscope" className="me-2 text-primary" />
                    Biotechnologies et sciences de la vie
                  </li>
                  <li className="mb-2">
                    <FontAwesomeIcon icon="laptop-code" className="me-2 text-primary" />
                    Technologies de l'information
                  </li>
                  <li className="mb-2">
                    <FontAwesomeIcon icon="seedling" className="me-2 text-primary" />
                    Environnement et développement durable
                  </li>
                  <li className="mb-2">
                    <FontAwesomeIcon icon="atom" className="me-2 text-primary" />
                    Matériaux et énergies
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        
        <h2 className="h3 mb-4">Structures de recherche</h2>
        
        <Row>
          <Col md={4} className="mb-4">
            <Card className="shadow-sm h-100">
              <Card.Body>
                <div className="d-flex align-items-center mb-3">
                  <div className="rounded-circle bg-primary p-3 me-3">
                    <FontAwesomeIcon icon="flask" className="text-white" />
                  </div>
                  <h3 className="h5 mb-0">Laboratoires</h3>
                </div>
                <p>
                  Découvrez nos laboratoires de recherche dans les différents départements 
                  de la faculté, leurs équipes et leurs axes de recherche.
                </p>
              </Card.Body>
              <Card.Footer className="bg-white border-0">
                <Link to="/recherche/laboratoires">
                  <Button variant="outline-primary" size="sm">
                    <FontAwesomeIcon icon="arrow-right" className="me-2" />
                    Voir les laboratoires
                  </Button>
                </Link>
              </Card.Footer>
            </Card>
          </Col>
          
          <Col md={4} className="mb-4">
            <Card className="shadow-sm h-100">
              <Card.Body>
                <div className="d-flex align-items-center mb-3">
                  <div className="rounded-circle bg-warning p-3 me-3">
                    <FontAwesomeIcon icon="graduation-cap" className="text-white" />
                  </div>
                  <h3 className="h5 mb-0">Formation doctorale</h3>
                </div>
                <p>
                  Informations sur nos programmes doctoraux, les équipes d'encadrement 
                  et les procédures d'inscription.
                </p>
              </Card.Body>
              <Card.Footer className="bg-white border-0">
                <Link to="/formation/doctorat">
                  <Button variant="outline-warning" size="sm">
                    <FontAwesomeIcon icon="arrow-right" className="me-2" />
                    Formation doctorale
                  </Button>
                </Link>
              </Card.Footer>
            </Card>
          </Col>
          
          <Col md={4} className="mb-4">
            <Card className="shadow-sm h-100">
              <Card.Body>
                <div className="d-flex align-items-center mb-3">
                  <div className="rounded-circle bg-secondary p-3 me-3">
                    <FontAwesomeIcon icon="calendar-alt" className="text-white" />
                  </div>
                  <h3 className="h5 mb-0">Événements scientifiques</h3>
                </div>
                <p>
                  Calendrier des conférences, colloques et séminaires organisés par notre faculté.
                </p>
              </Card.Body>
              <Card.Footer className="bg-white border-0">
                <Link to="/evenements">
                  <Button variant="outline-secondary" size="sm">
                    <FontAwesomeIcon icon="arrow-right" className="me-2" />
                    Voir les événements
                  </Button>
                </Link>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default ResearchPage; 