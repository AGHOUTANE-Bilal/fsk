import React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Seo from '../components/seo';

const EtudiantsPage = () => {
  return (
    <Layout>
      <Container className="py-5">
        <h1 className="mb-4">Espace Étudiants</h1>
        
        <Row className="mb-4">
          <Col lg={8}>
            <Card className="shadow-sm mb-4">
              <Card.Body>
                <h2 className="h4 mb-3">Services aux étudiants</h2>
                <p>
                  La Faculté des Sciences de Kénitra met à la disposition des étudiants une variété de 
                  services pour faciliter leur parcours académique et leur vie étudiante.
                </p>
                
                <ListGroup variant="flush" className="mb-4">
                  <ListGroup.Item action as={Link} to="/etudiants/licences" className="d-flex align-items-center">
                    <FontAwesomeIcon icon="graduation-cap" className="me-3 text-primary" />
                    Avis aux étudiants du cycle Licence
                  </ListGroup.Item>
                  <ListGroup.Item action as={Link} to="/etudiants/masters" className="d-flex align-items-center">
                    <FontAwesomeIcon icon="user-graduate" className="me-3 text-primary" />
                    Avis aux étudiants du cycle Master
                  </ListGroup.Item>
                  <ListGroup.Item action as={Link} to="/etudiants/doctorats" className="d-flex align-items-center">
                    <FontAwesomeIcon icon="microscope" className="me-3 text-primary" />
                    Avis aux étudiants du cycle Doctorat
                  </ListGroup.Item>
                  <ListGroup.Item action as={Link} to="/etudiants/bourses" className="d-flex align-items-center">
                    <FontAwesomeIcon icon="money-bill-wave" className="me-3 text-primary" />
                    Bourses
                  </ListGroup.Item>
                  <ListGroup.Item action as={Link} to="/etudiants/logement" className="d-flex align-items-center">
                    <FontAwesomeIcon icon="home" className="me-3 text-primary" />
                    Logement et Restauration
                  </ListGroup.Item>
                  <ListGroup.Item action as={Link} to="/etudiants/ressources" className="d-flex align-items-center">
                    <FontAwesomeIcon icon="book" className="me-3 text-primary" />
                    Ressources et Outils
                  </ListGroup.Item>
                  <ListGroup.Item action as={Link} to="/etudiants/cv-theque" className="d-flex align-items-center">
                    <FontAwesomeIcon icon="file-alt" className="me-3 text-primary" />
                    CV-Thèque
                  </ListGroup.Item>
                  <ListGroup.Item action as={Link} to="/etudiants/accessibilite" className="d-flex align-items-center">
                    <FontAwesomeIcon icon="universal-access" className="me-3 text-primary" />
                    Accessibilité
                  </ListGroup.Item>
                  <ListGroup.Item action as={Link} to="/etudiants/centres" className="d-flex align-items-center">
                    <FontAwesomeIcon icon="building" className="me-3 text-primary" />
                    Centres
                  </ListGroup.Item>
                  <ListGroup.Item action as={Link} to="/etudiants/theatre" className="d-flex align-items-center">
                    <FontAwesomeIcon icon="theater-masks" className="me-3 text-primary" />
                    Théatre Universitaire
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
          
          <Col lg={4}>
            <Card className="shadow-sm mb-4">
              <Card.Header className="bg-primary text-white">
                <h3 className="h5 mb-0">Liens rapides</h3>
              </Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item action as={Link} to="/etudiants/examens">
                  <FontAwesomeIcon icon="calendar-alt" className="me-2" /> Calendrier des examens
                </ListGroup.Item>
                <ListGroup.Item action as={Link} to="/etudiants/emploi-temps">
                  <FontAwesomeIcon icon="clock" className="me-2" /> Emplois du temps
                </ListGroup.Item>
                <ListGroup.Item action as={Link} to="/etudiants/stages">
                  <FontAwesomeIcon icon="briefcase" className="me-2" /> Stages et emplois
                </ListGroup.Item>
                <ListGroup.Item action as={Link} to="/etudiants/programmes">
                  <FontAwesomeIcon icon="list-alt" className="me-2" /> Programmes d'études
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default EtudiantsPage; 

export const Head = () => <Seo title="Espace Étudiants | Faculté des Sciences de Kénitra" description="Services et ressources pour les étudiants de la Faculté des Sciences de Kénitra." /> 