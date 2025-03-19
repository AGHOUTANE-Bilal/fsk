import React from "react";
import { Container, Row, Col, Card, Breadcrumb } from "react-bootstrap";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Layout from "../../components/layout";
import SEO from "../../components/seo";

const FacultyPage = () => {
  return (
    <Layout>
      <SEO title="Faculté des Sciences" />
      
      <Container className="py-5">
        <Breadcrumb className="mb-4">
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Accueil</Breadcrumb.Item>
          <Breadcrumb.Item active>Faculté</Breadcrumb.Item>
        </Breadcrumb>
        
        <h1 className="display-4 mb-4">Faculté des Sciences</h1>
        
        <Row className="mb-4">
          <Col lg={8}>
            <Card className="shadow-sm mb-4">
              <Card.Body>
                <p className="lead">
                  La Faculté des Sciences de Kenitra est un établissement d'enseignement supérieur 
                  dédié à l'excellence académique, à la recherche scientifique et à l'innovation.
                </p>
                <p>
                  Notre mission est de former des scientifiques et des chercheurs compétents, 
                  capables de relever les défis technologiques et de contribuer au développement 
                  socio-économique du Maroc.
                </p>
              </Card.Body>
            </Card>
          </Col>
          
          <Col lg={4}>
            <Card className="shadow-sm h-100 bg-light">
              <Card.Body className="d-flex flex-column justify-content-center">
                <h3 className="h5 mb-3 text-center">Explorer la Faculté</h3>
                <p className="text-center mb-0">
                  Découvrez notre histoire, notre structure administrative et nos engagements 
                  envers l'excellence académique et la qualité.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        
        <h2 className="h3 mb-4">En savoir plus sur notre faculté</h2>
        
        <Row>
          <Col lg={4} md={6} className="mb-4">
            <Card className="shadow-sm h-100">
              <Card.Body>
                <div className="d-flex align-items-center mb-3">
                  <div className="rounded-circle bg-primary p-3 me-3">
                    <FontAwesomeIcon icon="user-tie" className="text-white" />
                  </div>
                  <h3 className="h5 mb-0">Mot du Doyen</h3>
                </div>
                <p>
                  Découvrez la vision et les engagements de notre doyen pour l'avenir 
                  de la Faculté des Sciences.
                </p>
              </Card.Body>
              <Card.Footer className="bg-white border-0">
                <Link to="/about/mot-du-doyen" className="btn btn-outline-primary btn-sm">
                  <FontAwesomeIcon icon="arrow-right" className="me-2" />
                  Lire le message
                </Link>
              </Card.Footer>
            </Card>
          </Col>
          
          <Col lg={4} md={6} className="mb-4">
            <Card className="shadow-sm h-100">
              <Card.Body>
                <div className="d-flex align-items-center mb-3">
                  <div className="rounded-circle bg-success p-3 me-3">
                    <FontAwesomeIcon icon="sitemap" className="text-white" />
                  </div>
                  <h3 className="h5 mb-0">Administration</h3>
                </div>
                <p>
                  Consultez l'organigramme administratif et découvrez les équipes 
                  qui assurent le bon fonctionnement de notre faculté.
                </p>
              </Card.Body>
              <Card.Footer className="bg-white border-0">
                <Link to="/about/administration" className="btn btn-outline-success btn-sm">
                  <FontAwesomeIcon icon="arrow-right" className="me-2" />
                  Voir l'administration
                </Link>
              </Card.Footer>
            </Card>
          </Col>
          
          <Col lg={4} md={6} className="mb-4">
            <Card className="shadow-sm h-100">
              <Card.Body>
                <div className="d-flex align-items-center mb-3">
                  <div className="rounded-circle bg-info p-3 me-3">
                    <FontAwesomeIcon icon="history" className="text-white" />
                  </div>
                  <h3 className="h5 mb-0">Historique</h3>
                </div>
                <p>
                  Retracez l'évolution de la Faculté des Sciences depuis sa création 
                  jusqu'à aujourd'hui, à travers ses moments clés.
                </p>
              </Card.Body>
              <Card.Footer className="bg-white border-0">
                <Link to="/about/historique" className="btn btn-outline-info btn-sm">
                  <FontAwesomeIcon icon="arrow-right" className="me-2" />
                  Explorer notre histoire
                </Link>
              </Card.Footer>
            </Card>
          </Col>
          
          <Col lg={4} md={6} className="mb-4">
            <Card className="shadow-sm h-100">
              <Card.Body>
                <div className="d-flex align-items-center mb-3">
                  <div className="rounded-circle bg-warning p-3 me-3">
                    <FontAwesomeIcon icon="chart-pie" className="text-white" />
                  </div>
                  <h3 className="h5 mb-0">La FSK en chiffre</h3>
                </div>
                <p>
                  Découvrez les statistiques et les indicateurs clés de notre faculté : 
                  effectifs, programmes, résultats et infrastructures.
                </p>
              </Card.Body>
              <Card.Footer className="bg-white border-0">
                <Link to="/about/chiffres" className="btn btn-outline-warning btn-sm">
                  <FontAwesomeIcon icon="arrow-right" className="me-2" />
                  Voir les chiffres
                </Link>
              </Card.Footer>
            </Card>
          </Col>
          
          <Col lg={4} md={6} className="mb-4">
            <Card className="shadow-sm h-100">
              <Card.Body>
                <div className="d-flex align-items-center mb-3">
                  <div className="rounded-circle bg-secondary p-3 me-3">
                    <FontAwesomeIcon icon="gavel" className="text-white" />
                  </div>
                  <h3 className="h5 mb-0">Règlements et Politiques</h3>
                </div>
                <p>
                  Consultez les règlements intérieurs, la charte éthique et les 
                  différentes politiques qui régissent notre faculté.
                </p>
              </Card.Body>
              <Card.Footer className="bg-white border-0">
                <Link to="/about/reglements" className="btn btn-outline-secondary btn-sm">
                  <FontAwesomeIcon icon="arrow-right" className="me-2" />
                  Consulter les règlements
                </Link>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default FacultyPage; 