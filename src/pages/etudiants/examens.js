import * as React from "react"
import { Link } from "gatsby"
import { Container, Row, Col, Breadcrumb, Tab, Nav, Card, Table, Button, Accordion, Badge } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const ExamensPage = () => {
  const upcomingExams = [
    {
      id: 1,
      module: "Analyse numérique",
      filiere: "SMI",
      semestre: "S4",
      date: "15 Avril 2025",
      heure: "09:00 - 11:00",
      salle: "Amphi A, B, C",
      type: "Examen de mi-semestre"
    },
    {
      id: 2,
      module: "Bases de données avancées",
      filiere: "SMI",
      semestre: "S6",
      date: "17 Avril 2025",
      heure: "14:00 - 16:00",
      salle: "Salle 15-18",
      type: "Examen de mi-semestre"
    },
    {
      id: 3,
      module: "Chimie organique",
      filiere: "SMC",
      semestre: "S4",
      date: "18 Avril 2025",
      heure: "09:00 - 11:00",
      salle: "Amphi C",
      type: "Examen de mi-semestre"
    }
  ]
  
  const examPeriods = [
    {
      id: 1,
      title: "Examens de mi-semestre - Printemps 2025",
      dateRange: "05 Avril - 20 Avril 2025",
      status: "À venir",
      statusColor: "warning"
    },
    {
      id: 2,
      title: "Examens finaux - Printemps 2025",
      dateRange: "20 Juin - 05 Juillet 2025",
      status: "À venir",
      statusColor: "info"
    },
    {
      id: 3,
      title: "Examens de rattrapage - Printemps 2025",
      dateRange: "01 Septembre - 15 Septembre 2025",
      status: "À venir",
      statusColor: "dark"
    },
    {
      id: 4,
      title: "Examens finaux - Automne 2024",
      dateRange: "15 Janvier - 30 Janvier 2025",
      status: "Terminé",
      statusColor: "success"
    }
  ]

  return (
    <Layout>
      <Container className="py-5">
        {/* Breadcrumb Navigation */}
        <Breadcrumb className="mb-4">
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Accueil</Breadcrumb.Item>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/etudiants" }}>Étudiants</Breadcrumb.Item>
          <Breadcrumb.Item active>Examens et évaluations</Breadcrumb.Item>
        </Breadcrumb>
        
        <h1 className="mb-4">Examens et évaluations</h1>
        
        <Row className="mb-4">
          <Col lg={8}>
            <p className="lead">
              Retrouvez ici toutes les informations concernant les examens, les plannings, 
              les règlements et les résultats des évaluations de la Faculté des Sciences.
            </p>
          </Col>
        </Row>
        
        {/* Alert for upcoming exams */}
        <div className="alert alert-warning mb-5 d-flex align-items-center">
          <FontAwesomeIcon icon="exclamation-triangle" size="2x" className="me-3 d-none d-md-block" />
          <div>
            <h4 className="alert-heading">Examens à venir</h4>
            <p className="mb-0">
              Les examens de mi-semestre du printemps 2025 auront lieu du <strong>5 au 20 Avril 2025</strong>. 
              Consultez régulièrement cette page pour les mises à jour des plannings.
            </p>
          </div>
        </div>
        
        <Tab.Container id="examens-tabs" defaultActiveKey="calendrier">
          <Row>
            <Col lg={3} className="mb-4">
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="calendrier" className="d-flex align-items-center">
                    <FontAwesomeIcon icon="calendar-alt" className="me-2" fixedWidth />
                    Calendrier
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="prochain" className="d-flex align-items-center">
                    <FontAwesomeIcon icon="clock" className="me-2" fixedWidth />
                    Prochains examens
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="reglement" className="d-flex align-items-center">
                    <FontAwesomeIcon icon="book" className="me-2" fixedWidth />
                    Règlement
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="resultats" className="d-flex align-items-center">
                    <FontAwesomeIcon icon="chart-bar" className="me-2" fixedWidth />
                    Résultats
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="faq" className="d-flex align-items-center">
                    <FontAwesomeIcon icon="question-circle" className="me-2" fixedWidth />
                    FAQ
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            
            <Col lg={9}>
              <Tab.Content>
                {/* Calendrier des examens */}
                <Tab.Pane eventKey="calendrier">
                  <Card className="shadow-sm">
                    <Card.Header className="bg-light">
                      <h2 className="h5 mb-0">Périodes d'examens</h2>
                    </Card.Header>
                    <Card.Body>
                      <Row>
                        {examPeriods.map(period => (
                          <Col md={6} className="mb-4" key={period.id}>
                            <Card className="h-100 shadow-sm">
                              <Card.Body>
                                <div className="d-flex justify-content-between align-items-start">
                                  <h3 className="h6 mb-2">{period.title}</h3>
                                  <Badge bg={period.statusColor}>{period.status}</Badge>
                                </div>
                                <div className="mb-3 text-muted">
                                  <FontAwesomeIcon icon="calendar-day" className="me-2" />
                                  {period.dateRange}
                                </div>
                                <div className="mt-3">
                                  <Button 
                                    variant="outline-primary" 
                                    size="sm"
                                    as={Link}
                                    to={`/etudiants/examens?period=${period.id}`}
                                  >
                                    Voir le planning
                                  </Button>
                                </div>
                              </Card.Body>
                            </Card>
                          </Col>
                        ))}
                      </Row>
                      
                      <div className="alert alert-info mt-3">
                        <FontAwesomeIcon icon="info-circle" className="me-2" />
                        Les plannings détaillés sont publiés environ 2 semaines avant le début de chaque période d'examen.
                      </div>
                    </Card.Body>
                  </Card>
                </Tab.Pane>
                
                {/* Prochains examens */}
                <Tab.Pane eventKey="prochain">
                  <Card className="shadow-sm">
                    <Card.Header className="bg-light d-flex justify-content-between align-items-center">
                      <h2 className="h5 mb-0">Prochains examens</h2>
                      <span className="text-muted small">Dernière mise à jour: 25 Mars 2025</span>
                    </Card.Header>
                    <Card.Body>
                      <Table responsive hover className="mb-0">
                        <thead className="table-light">
                          <tr>
                            <th>Module</th>
                            <th>Filière</th>
                            <th>Date</th>
                            <th>Heure</th>
                            <th>Salles</th>
                            <th>Type</th>
                          </tr>
                        </thead>
                        <tbody>
                          {upcomingExams.map(exam => (
                            <tr key={exam.id}>
                              <td>{exam.module}</td>
                              <td>{exam.filiere} - {exam.semestre}</td>
                              <td>{exam.date}</td>
                              <td>{exam.heure}</td>
                              <td>{exam.salle}</td>
                              <td>
                                <Badge bg="warning" text="dark">{exam.type}</Badge>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </Card.Body>
                    <Card.Footer className="bg-white">
                      <Button variant="primary" size="sm">
                        <FontAwesomeIcon icon="search" className="me-2" />
                        Rechercher un examen
                      </Button>
                    </Card.Footer>
                  </Card>
                </Tab.Pane>
                
                {/* Règlement des examens */}
                <Tab.Pane eventKey="reglement">
                  <Card className="shadow-sm">
                    <Card.Header className="bg-light">
                      <h2 className="h5 mb-0">Règlement des examens</h2>
                    </Card.Header>
                    <Card.Body>
                      <h3 className="h6 mb-3">Règles générales</h3>
                      <ul className="mb-4">
                        <li>Présence obligatoire avec une carte d'étudiant valide</li>
                        <li>Arriver au moins 15 minutes avant le début de l'examen</li>
                        <li>Aucune entrée ne sera autorisée après 30 minutes du début de l'examen</li>
                        <li>Les téléphones portables doivent être éteints et rangés</li>
                        <li>Les documents ne sont autorisés que si spécifiquement indiqué par l'enseignant</li>
                        <li>Aucun prêt de matériel n'est autorisé pendant l'examen</li>
                      </ul>
                      
                      <h3 className="h6 mb-3">Absence et rattrapage</h3>
                      <p>
                        En cas d'absence justifiée (certificat médical ou cas de force majeure), 
                        les étudiants peuvent soumettre une demande de rattrapage auprès du 
                        secrétariat de leur département dans les 48 heures suivant l'examen.
                      </p>
                      
                      <div className="alert alert-danger">
                        <FontAwesomeIcon icon="exclamation-circle" className="me-2" />
                        <strong>Attention:</strong> Toute fraude ou tentative de fraude entraînera 
                        des sanctions disciplinaires pouvant aller jusqu'à l'exclusion.
                      </div>
                      
                      <div className="mt-4">
                        <Button variant="outline-primary">
                          <FontAwesomeIcon icon="download" className="me-2" />
                          Télécharger le règlement complet (PDF)
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Tab.Pane>
                
                {/* Résultats des examens */}
                <Tab.Pane eventKey="resultats">
                  <Card className="shadow-sm">
                    <Card.Header className="bg-light">
                      <h2 className="h5 mb-0">Résultats des examens</h2>
                    </Card.Header>
                    <Card.Body>
                      <p>
                        Les résultats des examens sont généralement publiés dans les 2 à 3 semaines 
                        suivant la fin de la période d'examens. Les étudiants peuvent consulter leurs 
                        résultats sur leur espace personnel ou sur les tableaux d'affichage.
                      </p>
                      
                      <h3 className="h6 mt-4 mb-3">Dernières publications</h3>
                      <ul className="list-group mb-4">
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                          <div>
                            <FontAwesomeIcon icon="file-alt" className="me-2 text-primary" />
                            Résultats des examens finaux - Automne 2024
                          </div>
                          <Badge bg="success">Publié</Badge>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                          <div>
                            <FontAwesomeIcon icon="file-alt" className="me-2 text-primary" />
                            Résultats des examens de rattrapage - Automne 2024
                          </div>
                          <Badge bg="success">Publié</Badge>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                          <div>
                            <FontAwesomeIcon icon="file-alt" className="me-2 text-primary" />
                            Résultats des examens de mi-semestre - Printemps 2025
                          </div>
                          <Badge bg="secondary">À venir</Badge>
                        </li>
                      </ul>
                      
                      <div className="alert alert-info">
                        <FontAwesomeIcon icon="info-circle" className="me-2" />
                        Les réclamations concernant les résultats doivent être soumises dans les 48 heures 
                        suivant la publication des notes.
                      </div>
                    </Card.Body>
                  </Card>
                </Tab.Pane>
                
                {/* FAQ */}
                <Tab.Pane eventKey="faq">
                  <Card className="shadow-sm">
                    <Card.Header className="bg-light">
                      <h2 className="h5 mb-0">Questions fréquentes</h2>
                    </Card.Header>
                    <Card.Body>
                      <Accordion flush>
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>Comment connaître la date de mes examens ?</Accordion.Header>
                          <Accordion.Body>
                            Les dates des examens sont publiées sur cette page environ 2 semaines avant le début 
                            de la période d'examens. Vous pouvez également consulter les tableaux d'affichage 
                            de votre département ou demander auprès du secrétariat.
                          </Accordion.Body>
                        </Accordion.Item>
                        
                        <Accordion.Item eventKey="1">
                          <Accordion.Header>Que faire en cas d'absence à un examen ?</Accordion.Header>
                          <Accordion.Body>
                            En cas d'absence justifiée (maladie, cas de force majeure), vous devez présenter 
                            un justificatif (certificat médical, etc.) au secrétariat de votre département 
                            dans les 48 heures suivant l'examen. Une demande de rattrapage pourra alors être 
                            envisagée selon les modalités du règlement.
                          </Accordion.Body>
                        </Accordion.Item>
                        
                        <Accordion.Item eventKey="2">
                          <Accordion.Header>Comment contester une note ?</Accordion.Header>
                          <Accordion.Body>
                            Si vous souhaitez contester une note, vous devez soumettre une demande écrite 
                            au secrétariat de votre département dans les 48 heures suivant la publication 
                            des résultats, en précisant le module concerné et les raisons de votre contestation.
                          </Accordion.Body>
                        </Accordion.Item>
                        
                        <Accordion.Item eventKey="3">
                          <Accordion.Header>Quels documents sont autorisés pendant les examens ?</Accordion.Header>
                          <Accordion.Body>
                            Les documents autorisés dépendent de chaque examen et sont spécifiés par l'enseignant 
                            responsable. Par défaut, aucun document n'est autorisé sauf indication contraire. 
                            Cette information est généralement communiquée avant l'examen ou inscrite sur le 
                            sujet de l'examen.
                          </Accordion.Body>
                        </Accordion.Item>
                        
                        <Accordion.Item eventKey="4">
                          <Accordion.Header>Comment se déroulent les examens de rattrapage ?</Accordion.Header>
                          <Accordion.Body>
                            Les examens de rattrapage ont lieu généralement en septembre. Ils concernent les 
                            étudiants n'ayant pas validé certains modules lors des sessions ordinaires. Les 
                            modalités sont les mêmes que pour les examens ordinaires, et les notes obtenues 
                            remplacent les notes précédentes uniquement si elles sont supérieures.
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </Card.Body>
                  </Card>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
        
        {/* Contact Section */}
        <div className="bg-light p-4 rounded-3 mt-5 shadow-sm">
          <Row>
            <Col md={8}>
              <h3 className="h4">Besoin d'informations supplémentaires ?</h3>
              <p className="mb-md-0">
                Pour toute question concernant les examens, veuillez contacter le secrétariat de votre département.
              </p>
            </Col>
            <Col md={4} className="d-flex align-items-center justify-content-md-end mt-3 mt-md-0">
              <Button variant="outline-primary" as={Link} to="/contact">
                <FontAwesomeIcon icon="envelope" className="me-2" />
                Nous contacter
              </Button>
            </Col>
          </Row>
        </div>
      </Container>
    </Layout>
  )
}

export const Head = () => <Seo 
  title="Examens et évaluations" 
  description="Informations sur les examens, plannings, règlements et résultats pour les étudiants de la Faculté des Sciences de Kénitra."
/>

export default ExamensPage 