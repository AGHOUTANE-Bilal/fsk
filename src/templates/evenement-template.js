import * as React from "react"
import { Link } from "gatsby"
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Layout from "../components/layout"
import Seo from "../components/seo"

// This template will be used to generate dynamic pages for each événement
// In a real application, this would use Gatsby's GraphQL data layer
const EvenementTemplate = ({ pageContext }) => {
  // In a real application, pageContext would contain the événement data
  // For now, we'll use a sample événement
  const evenement = {
    id: 1,
    title: "Journée portes ouvertes",
    content: `
      <p>La Faculté des sciences de Kénitra organise sa journée portes ouvertes annuelle le 20 juin 2023. Cet événement est l'occasion pour les futurs étudiants et leurs parents de découvrir notre faculté, nos formations et nos installations.</p>
      
      <h3>Programme de la journée</h3>
      <ul>
        <li><strong>9h00 - 10h00 :</strong> Accueil et inscription des visiteurs</li>
        <li><strong>10h00 - 11h00 :</strong> Présentation de la faculté et des formations par le Doyen</li>
        <li><strong>11h00 - 12h30 :</strong> Visite guidée des départements et laboratoires</li>
        <li><strong>12h30 - 14h00 :</strong> Pause déjeuner</li>
        <li><strong>14h00 - 16h00 :</strong> Ateliers thématiques et démonstrations scientifiques</li>
        <li><strong>16h00 - 17h00 :</strong> Séance de questions-réponses avec les responsables pédagogiques</li>
      </ul>
      
      <h3>Informations pratiques</h3>
      <p>L'entrée est libre et gratuite. Aucune inscription préalable n'est nécessaire. Des stands d'information seront disponibles tout au long de la journée pour répondre à vos questions sur les admissions, les bourses, le logement étudiant, etc.</p>
      
      <p>Pour plus d'informations, veuillez contacter le service de communication de la faculté.</p>
    `,
    day: "20",
    month: "Juin",
    year: "2023",
    time: "09:00 - 17:00",
    location: "Campus universitaire, Faculté des sciences de Kénitra",
    organizer: "Service de communication",
    contact: "communication@fs.uit.ac.ma",
    image: "https://via.placeholder.com/1200x600?text=Journée+Portes+Ouvertes",
  }

  // Related événements (in a real application, these would be fetched based on category or tags)
  const relatedEvenements = [
    {
      id: 2,
      title: "Séminaire sur l'intelligence artificielle",
      excerpt: "Un séminaire sur les avancées récentes en intelligence artificielle et leurs applications.",
      day: "25",
      month: "Juin",
      time: "14:00 - 16:00",
      location: "Amphithéâtre A",
      slug: "seminaire-ia",
      image: "https://via.placeholder.com/600x400?text=Séminaire+IA",
    },
    {
      id: 3,
      title: "Workshop sur les énergies renouvelables",
      excerpt: "Workshop international sur les dernières avancées dans le domaine des énergies renouvelables.",
      day: "02",
      month: "Juil",
      time: "09:00 - 18:00",
      location: "Salle de conférences",
      slug: "workshop-energies-renouvelables",
      image: "https://via.placeholder.com/600x400?text=Workshop+Énergies",
    },
  ]

  return (
    <Layout>
      <article>
        {/* Hero section with image */}
        <div className="position-relative">
          <img
            src={evenement.image}
            alt={evenement.title}
            className="w-100"
            style={{ maxHeight: "500px", objectFit: "cover" }}
          />
          <div className="position-absolute bottom-0 w-100 p-4" style={{ background: "rgba(0,0,0,0.6)" }}>
            <Container>
              <h1 className="text-light">{evenement.title}</h1>
            </Container>
          </div>
        </div>

        {/* Content section */}
        <section className="section">
          <Container>
            <Row>
              <Col lg={8}>
                <div className="content" dangerouslySetInnerHTML={{ __html: evenement.content }}></div>
                
                <div className="mt-5 pt-4 border-top">
                  <h4>Partager</h4>
                  <div className="d-flex">
                    <a href="#" className="me-3 text-primary">
                      <FontAwesomeIcon icon={["fab", "facebook"]} size="lg" />
                    </a>
                    <a href="#" className="me-3 text-primary">
                      <FontAwesomeIcon icon={["fab", "twitter"]} size="lg" />
                    </a>
                    <a href="#" className="me-3 text-primary">
                      <FontAwesomeIcon icon={["fab", "linkedin"]} size="lg" />
                    </a>
                    <a href="#" className="text-primary">
                      <FontAwesomeIcon icon="envelope" size="lg" />
                    </a>
                  </div>
                </div>
              </Col>
              
              <Col lg={4}>
                <div className="sticky-top" style={{ top: "2rem" }}>
                  <Card className="mb-4">
                    <Card.Body>
                      <h4>Détails de l'événement</h4>
                      <hr />
                      <div className="mb-3">
                        <div className="d-flex align-items-center mb-3">
                          <div className="bg-primary text-light text-center p-2 me-3" style={{ width: "60px" }}>
                            <div className="fw-bold fs-4">{evenement.day}</div>
                            <div>{evenement.month}</div>
                          </div>
                          <div>
                            <div className="fw-bold">{evenement.day} {evenement.month} {evenement.year}</div>
                            <div>{evenement.time}</div>
                          </div>
                        </div>
                        <div className="mb-3">
                          <h5>Lieu</h5>
                          <p className="mb-0">
                            <FontAwesomeIcon icon="map-marker-alt" className="me-2" />
                            {evenement.location}
                          </p>
                        </div>
                        <div className="mb-3">
                          <h5>Organisateur</h5>
                          <p className="mb-0">
                            <FontAwesomeIcon icon="user" className="me-2" />
                            {evenement.organizer}
                          </p>
                        </div>
                        <div>
                          <h5>Contact</h5>
                          <p className="mb-0">
                            <FontAwesomeIcon icon="envelope" className="me-2" />
                            {evenement.contact}
                          </p>
                        </div>
                      </div>
                      <Button variant="primary" className="w-100">
                        <FontAwesomeIcon icon="calendar-plus" className="me-2" />
                        Ajouter à mon calendrier
                      </Button>
                    </Card.Body>
                  </Card>
                  
                  <Card>
                    <Card.Body>
                      <h4>Événements à venir</h4>
                      <hr />
                      {relatedEvenements.map(item => (
                        <div key={item.id} className="mb-3">
                          <Link to={`/evenements/${item.slug}`} className="text-decoration-none">
                            <h6 className="mb-1">{item.title}</h6>
                          </Link>
                          <div className="d-flex align-items-center">
                            <small className="text-muted me-3">
                              <FontAwesomeIcon icon="calendar-alt" className="me-1" />
                              {item.day} {item.month}
                            </small>
                            <small className="text-muted">
                              <FontAwesomeIcon icon="map-marker-alt" className="me-1" />
                              {item.location}
                            </small>
                          </div>
                        </div>
                      ))}
                      <div className="text-center mt-3">
                        <Link to="/evenements" className="btn btn-outline-primary btn-sm">
                          Tous les événements
                        </Link>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </article>
    </Layout>
  )
}

export const Head = () => <Seo title="Événement" />

export default EvenementTemplate 