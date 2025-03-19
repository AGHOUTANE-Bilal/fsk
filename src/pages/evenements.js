import * as React from "react"
import { Link } from "gatsby"
import { Container, Row, Col, Form, InputGroup } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Layout from "../components/layout"
import Seo from "../components/seo"
import EvenementCard from "../components/EvenementCard"
import fskColors from "../utils/colors"
import pageStyles from "../utils/pageStyles"

// Sample data (will be replaced with dynamic data)
const evenements = [
  {
    id: 1,
    title: "Journée portes ouvertes",
    excerpt: "Venez découvrir notre faculté et nos formations lors de notre journée portes ouvertes.",
    day: "20",
    month: "Juin",
    time: "09:00 - 17:00",
    location: "Campus universitaire",
    slug: "journee-portes-ouvertes",
    image: "https://via.placeholder.com/600x400?text=Portes+Ouvertes",
  },
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
  {
    id: 4,
    title: "Conférence sur la biodiversité marine",
    excerpt: "Conférence sur la biodiversité marine et les enjeux de sa préservation.",
    day: "10",
    month: "Juil",
    time: "15:00 - 17:00",
    location: "Amphithéâtre B",
    slug: "conference-biodiversite-marine",
    image: "https://via.placeholder.com/600x400?text=Biodiversité+Marine",
  },
  {
    id: 5,
    title: "Hackathon: Solutions numériques pour l'environnement",
    excerpt: "Participez à notre hackathon et développez des solutions numériques pour les défis environnementaux.",
    day: "15",
    month: "Juil",
    time: "09:00 - 20:00",
    location: "Laboratoire d'informatique",
    slug: "hackathon-environnement",
    image: "https://via.placeholder.com/600x400?text=Hackathon",
  },
  {
    id: 6,
    title: "Cérémonie de remise des diplômes",
    excerpt: "Cérémonie annuelle de remise des diplômes pour les étudiants de la promotion 2023.",
    day: "20",
    month: "Juil",
    time: "16:00 - 19:00",
    location: "Grand amphithéâtre",
    slug: "ceremonie-remise-diplomes",
    image: "https://via.placeholder.com/600x400?text=Remise+Diplômes",
  },
]

const EvenementsPage = () => {
  const [searchTerm, setSearchTerm] = React.useState("");

  // Filter evenements based on search term
  const filteredEvenements = evenements.filter(evenement => {
    return evenement.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
           evenement.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
           evenement.location.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <Layout>
      <section style={pageStyles.pageHeaderStyle}>
        <Container>
          <h1 style={pageStyles.pageTitleStyle}>ÉVÉNEMENTS</h1>
          <p className="lead mb-0">Découvrez les événements à venir à la Faculté des Sciences de Kénitra</p>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <Row className="mb-4">
            <Col md={8} className="mx-auto">
              <InputGroup>
                <InputGroup.Text style={{ backgroundColor: fskColors.primary, color: 'white' }}>
                  <FontAwesomeIcon icon="search" />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Rechercher des événements..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{ borderColor: fskColors.primary }}
                />
              </InputGroup>
            </Col>
          </Row>

          <h2 style={pageStyles.sectionTitleStyle}>Événements à venir</h2>

          <Row>
            {filteredEvenements.length > 0 ? (
              filteredEvenements.map(evenement => (
                <Col md={6} key={evenement.id} className="mb-4">
                  <EvenementCard evenement={evenement} />
                </Col>
              ))
            ) : (
              <Col>
                <div className="text-center py-5">
                  <FontAwesomeIcon icon="calendar-times" size="3x" style={{ color: fskColors.primary }} className="mb-3" />
                  <h3 style={{ color: fskColors.primary }}>Aucun événement trouvé</h3>
                  <p>Essayez de modifier vos critères de recherche.</p>
                </div>
              </Col>
            )}
          </Row>
        </Container>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo 
  title="Événements | Faculté des Sciences de Kénitra" 
  description="Découvrez les événements à venir à la Faculté des Sciences de Kénitra, Université Ibn Tofail."
/>

export default EvenementsPage 