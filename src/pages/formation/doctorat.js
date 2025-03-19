import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import { Card, Row, Col, ListGroup, Alert, Badge, Table, Accordion } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function DoctoratPage() {
  return (
    <Layout>
      <div className="container py-4">
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Accueil</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/formation">Formations</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Doctorat
            </li>
          </ol>
        </nav>

        <h1 className="mb-4">Formation Doctorale</h1>
        
        <div className="alert alert-primary mb-4">
          <div className="d-flex">
            <div className="me-3">
              <FontAwesomeIcon icon="info-circle" size="lg" />
            </div>
            <div>
              <p className="mb-0">
                Le cycle de Doctorat est une formation pour la recherche, sanctionnée par l'obtention du diplôme de doctorat, 
                après une soutenance de travaux de recherche devant un jury.
              </p>
            </div>
          </div>
        </div>
        
        <Card className="shadow-sm mb-4">
          <Card.Header className="bg-primary">
            <h2 className="h5 mb-0 text-white fw-bold">Présentation du Doctorat</h2>
          </Card.Header>
          <Card.Body>
            <p>
              Le cycle de doctorat est organisé au sein des Centres d'études Doctorales (CED).
            </p>
            <p>
              Le doctorat est un diplôme qui sanctionne un cursus doctoral constitué d'un ensemble de travaux de recherche 
              ayant pour objectif de faire acquérir au doctorant des connaissances, des aptitudes et des compétences pour 
              entreprendre et mener à terme une recherche scientifique de haut niveau.
            </p>
            <p>
              En plus des activités de recherche, les doctorants participent aux formations complémentaires obligatoires 
              (enseignements spécifiques, gestion de projets, langues et communication, initiation à la pédagogie universitaire, 
              monitorat et tutorat, forums doctoraux,…). Le volume horaire de la formation complémentaire est de 200 h.
            </p>
          </Card.Body>
        </Card>
        
        <Card className="shadow-sm mb-4">
          <Card.Header className="bg-success">
            <h2 className="h5 mb-0 text-white fw-bold">Formations Doctorales</h2>
          </Card.Header>
          <Card.Body>
            <div className="table-responsive">
              <Table striped bordered hover className="mb-0">
                <thead className="table-success">
                  <tr>
                    <th className="text-center">Formations Doctorales</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Biologie, Nutrition, Santé et Environnement</td></tr>
                  <tr><td>Chimie et Environnement</td></tr>
                  <tr><td>Didactique, Sciences de l'Éducation et Métiers d'Enseignement et de Formation en Mathématiques et en Sciences Expérimentales</td></tr>
                  <tr><td>Géosciences</td></tr>
                  <tr><td>Informatique et applications</td></tr>
                  <tr><td>Mathématiques et Applications</td></tr>
                  <tr><td>Physique et Sciences de l'Ingénieur</td></tr>
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
        
        <Card className="shadow-sm mb-4">
          <Card.Header className="bg-info">
            <h2 className="h5 mb-0 text-white fw-bold">Conditions et Modalités</h2>
          </Card.Header>
          <Card.Body>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <span className="fw-bold">Conditions d'accès</span>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    Pour s'inscrire en doctorat, le candidat doit être titulaire d'un Master, d'un Master spécialisé 
                    ou d'un diplôme reconnu équivalent et répondant aux critères d'admission prévus dans le descriptif 
                    des formations doctorales du Centre d'Etudes Doctorales concerné.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <span className="fw-bold">Durée de préparation du Doctorat</span>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    La préparation du doctorat dure trois ans. Cette durée peut être prorogée exceptionnellement : 
                    d'un an, de deux ans ou de trois ans par le chef de l'établissement sur proposition du directeur 
                    du Centre d'Etudes Doctorales, après avis du directeur de thèse.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <span className="fw-bold">Autorisation de soutenance de la thèse</span>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    L'autorisation de présenter une soutenance de thèse est accordée par le chef de l'établissement, 
                    après avis du directeur du Centre d'Etudes Doctorales et du directeur de thèse.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card.Body>
        </Card>
        
        <Card className="shadow-sm mb-4">
          <Card.Header className="bg-warning">
            <h2 className="h5 mb-0 text-white fw-bold">Charte des thèses</h2>
          </Card.Header>
          <Card.Body>
            <p>
              Chaque université adopte, après consultation de ses Centres d'Etudes Doctorales, une charte des thèses. 
              La charte des thèses définit les engagements réciproques du doctorant, de son directeur de thèse, du directeur 
              du Centre d'Etudes Doctorales et du responsable de la structure de recherche d'accueil du doctorant. 
              Ces engagements portent notamment sur :
            </p>
            
            <ul className="list-group mb-4">
              <li className="list-group-item">la procédure du choix du sujet de la thèse;</li>
              <li className="list-group-item">les conditions de travail nécessaires à l'avancement des travaux de recherche;</li>
              <li className="list-group-item">l'encadrement et le suivi;</li>
              <li className="list-group-item">les droits et devoirs du doctorant;</li>
              <li className="list-group-item">les conditions et modalités de prorogation de la durée de la thèse.</li>
            </ul>
          </Card.Body>
        </Card>
        
        <Row className="g-4 mb-4">
          <Col md={6}>
            <Card className="h-100 shadow-sm">
              <Card.Header className="bg-secondary">
                <h2 className="h5 mb-0 text-white fw-bold">Le Centre d'Etudes Doctorales</h2>
              </Card.Header>
              <Card.Body>
                <p>
                  Le Centre d'Etudes Doctorales est adossé à des structures de recherche reconnues par l'Université, 
                  autour d'un projet qui s'inscrit dans la politique scientifique de l'université et des établissements 
                  associés et répond aux priorités nationales. Il est organisé autour de thématiques communes et/ou 
                  pluridisciplinaires. Le Centre d'Etudes Doctorales est domicilié dans un établissement universitaire. 
                  Il est dirigé par un directeur, assisté par un conseil.
                </p>
                <p>
                  Par convention, d'autres universités ou établissements d'enseignement supérieur ou de recherche 
                  nationaux ou étrangers peuvent être partenaires du Centre d'Etudes Doctorales, pour accueillir 
                  des doctorants ou pour assurer des formations.
                </p>
              </Card.Body>
            </Card>
          </Col>
          
          <Col md={6}>
            <Card className="h-100 shadow-sm">
              <Card.Header className="bg-secondary">
                <h2 className="h5 mb-0 text-white fw-bold">Le conseil du Centre d'Etudes Doctorales</h2>
              </Card.Header>
              <Card.Body>
                <p>Le conseil du Centre d'Etudes Doctorales veille, dans le respect du descriptif à :</p>
                <ul className="list-group">
                  <li className="list-group-item">la sélection des doctorants;</li>
                  <li className="list-group-item">l'organisation, le fonctionnement et l'encadrement scientifique et pédagogique des doctorants;</li>
                  <li className="list-group-item">la répartition des moyens alloués au centre;</li>
                  <li className="list-group-item">la proposition de candidats aux bourses d'études doctorales;</li>
                  <li className="list-group-item">le suivi des doctorants et leur insertion professionnelle;</li>
                  <li className="list-group-item">le respect de la charte des thèses;</li>
                  <li className="list-group-item">le suivi des différentes activités du centre.</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        
        <Alert variant="info" className="mt-4">
          <div className="d-flex">
            <div className="me-3">
              <FontAwesomeIcon icon="user-graduate" size="lg" />
            </div>
            <div>
              <p className="mb-0">
                <strong>Directeur de thèse :</strong> Le directeur de thèse assure l'encadrement et le suivi du doctorant 
                et veille sur la qualité de la thèse.
              </p>
            </div>
          </div>
        </Alert>
      </div>
    </Layout>
  )
} 