import * as React from "react"
import { Link } from "gatsby"
import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Layout from "../components/layout"
import Seo from "../components/seo"

// This template will be used to generate dynamic pages for each soutenance
// In a real application, this would use Gatsby's GraphQL data layer
const SoutenanceTemplate = ({ pageContext }) => {
  // In a real application, pageContext would contain the soutenance data
  // For now, we'll use a sample soutenance
  const soutenance = {
    id: 1,
    title: "Étude des propriétés physico-chimiques des matériaux composites",
    abstract: `
      <p>Cette thèse porte sur l'étude des propriétés physico-chimiques des matériaux composites à base de polymères et de charges minérales. L'objectif principal est de comprendre les relations entre la structure, la composition et les propriétés mécaniques et thermiques de ces matériaux.</p>
      
      <p>Les matériaux composites étudiés ont été élaborés par différentes méthodes de mise en œuvre, notamment le mélange en solution, la polymérisation in situ et le mélange à l'état fondu. Les propriétés structurales ont été caractérisées par diffraction des rayons X, microscopie électronique à balayage et spectroscopie infrarouge. Les propriétés mécaniques ont été évaluées par des essais de traction, de flexion et d'impact, tandis que les propriétés thermiques ont été analysées par calorimétrie différentielle à balayage et analyse thermogravimétrique.</p>
      
      <p>Les résultats montrent que l'incorporation de charges minérales dans la matrice polymère améliore significativement les propriétés mécaniques et thermiques des matériaux composites. Une corrélation entre la dispersion des charges, leur taux d'incorporation et les propriétés finales des matériaux a été établie. Des modèles prédictifs ont été développés pour optimiser la formulation des matériaux en fonction des propriétés recherchées.</p>
      
      <p>Cette étude contribue à une meilleure compréhension des mécanismes de renforcement dans les matériaux composites et ouvre des perspectives pour le développement de nouveaux matériaux aux propriétés améliorées pour diverses applications industrielles.</p>
    `,
    date: "22 Juin 2023",
    time: "10:00",
    location: "Salle des soutenances, Faculté des sciences de Kénitra",
    type: "Doctorat",
    discipline: "Sciences des matériaux",
    candidate: "Mohammed Alami",
    supervisors: "Pr. Ahmed Bensouda, Pr. Fatima Zohra El Mansouri",
    jury: [
      { name: "Pr. Karim Bennani", role: "Président", affiliation: "Université Mohammed V, Rabat" },
      { name: "Pr. Ahmed Bensouda", role: "Directeur de thèse", affiliation: "Université Ibn Tofail, Kénitra" },
      { name: "Pr. Fatima Zohra El Mansouri", role: "Co-directrice de thèse", affiliation: "Université Ibn Tofail, Kénitra" },
      { name: "Pr. Nadia Lahrach", role: "Rapporteur", affiliation: "Université Hassan II, Casablanca" },
      { name: "Pr. Mohammed El Idrissi", role: "Rapporteur", affiliation: "Université Cadi Ayyad, Marrakech" },
      { name: "Pr. Samir Mounir", role: "Examinateur", affiliation: "Université Abdelmalek Essaâdi, Tétouan" },
    ],
    keywords: ["Matériaux composites", "Polymères", "Charges minérales", "Propriétés mécaniques", "Propriétés thermiques"],
  }

  // Related soutenances (in a real application, these would be fetched based on discipline or keywords)
  const relatedSoutenances = [
    {
      id: 2,
      title: "Développement d'algorithmes d'optimisation pour les réseaux de capteurs sans fil",
      excerpt: "Soutenance de thèse de doctorat en informatique.",
      date: "28 Juin 2023",
      time: "14:00",
      location: "Amphithéâtre B",
      type: "Doctorat",
      candidate: "Karim Benjelloun",
      supervisors: "Pr. Hassan Ouahbi",
      slug: "these-algorithmes-optimisation",
    },
    {
      id: 3,
      title: "Analyse des écosystèmes marins de la côte atlantique marocaine",
      excerpt: "Soutenance de thèse de doctorat en biologie marine.",
      date: "05 Juillet 2023",
      time: "09:30",
      location: "Salle des soutenances",
      type: "Doctorat",
      candidate: "Leila Benkirane",
      supervisors: "Pr. Rachid El Amrani",
      slug: "these-ecosystemes-marins",
    },
  ]

  return (
    <Layout>
      <article>
        <section className="py-5 bg-primary text-light">
          <Container>
            <Badge bg={soutenance.type === "Doctorat" ? "light" : "info"} text={soutenance.type === "Doctorat" ? "dark" : "light"} className="mb-2">
              {soutenance.type} en {soutenance.discipline}
            </Badge>
            <h1 className="text-light">{soutenance.title}</h1>
            <div className="mt-3">
              <div className="d-flex align-items-center mb-2">
                <FontAwesomeIcon icon="user-graduate" className="me-2" />
                <span className="me-2">Candidat(e):</span>
                <strong>{soutenance.candidate}</strong>
              </div>
              <div className="d-flex align-items-center mb-2">
                <FontAwesomeIcon icon="users" className="me-2" />
                <span className="me-2">Directeur(s) de thèse:</span>
                <strong>{soutenance.supervisors}</strong>
              </div>
              <div className="d-flex align-items-center">
                <span className="me-3">
                  <FontAwesomeIcon icon="calendar-alt" className="me-1" />
                  {soutenance.date}
                </span>
                <span className="me-3">
                  <FontAwesomeIcon icon="clock" className="me-1" />
                  {soutenance.time}
                </span>
                <span>
                  <FontAwesomeIcon icon="map-marker-alt" className="me-1" />
                  {soutenance.location}
                </span>
              </div>
            </div>
          </Container>
        </section>

        {/* Content section */}
        <section className="section">
          <Container>
            <Row>
              <Col lg={8}>
                <div className="mb-5">
                  <h3>Résumé</h3>
                  <div className="content" dangerouslySetInnerHTML={{ __html: soutenance.abstract }}></div>
                </div>
                
                <div className="mb-5">
                  <h3>Jury</h3>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Nom</th>
                        <th>Rôle</th>
                        <th>Affiliation</th>
                      </tr>
                    </thead>
                    <tbody>
                      {soutenance.jury.map((member, index) => (
                        <tr key={index}>
                          <td>{member.name}</td>
                          <td>{member.role}</td>
                          <td>{member.affiliation}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="mb-5">
                  <h3>Mots-clés</h3>
                  <div className="d-flex flex-wrap">
                    {soutenance.keywords.map((keyword, index) => (
                      <Badge bg="secondary" className="m-1" key={index}>
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                </div>
                
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
                      <h4>Informations pratiques</h4>
                      <hr />
                      <div className="mb-3">
                        <h5>Date et heure</h5>
                        <p className="mb-0">
                          <FontAwesomeIcon icon="calendar-alt" className="me-2" />
                          {soutenance.date} à {soutenance.time}
                        </p>
                      </div>
                      <div className="mb-3">
                        <h5>Lieu</h5>
                        <p className="mb-0">
                          <FontAwesomeIcon icon="map-marker-alt" className="me-2" />
                          {soutenance.location}
                        </p>
                      </div>
                      <Button variant="primary" className="w-100">
                        <FontAwesomeIcon icon="calendar-plus" className="me-2" />
                        Ajouter à mon calendrier
                      </Button>
                    </Card.Body>
                  </Card>
                  
                  <Card>
                    <Card.Body>
                      <h4>Soutenances à venir</h4>
                      <hr />
                      {relatedSoutenances.map(item => (
                        <div key={item.id} className="mb-3">
                          <Link to={`/soutenances/${item.slug}`} className="text-decoration-none">
                            <h6 className="mb-1">{item.title}</h6>
                          </Link>
                          <div>
                            <small className="text-muted d-block">
                              <FontAwesomeIcon icon="user-graduate" className="me-1" />
                              {item.candidate}
                            </small>
                            <div className="d-flex align-items-center">
                              <small className="text-muted me-3">
                                <FontAwesomeIcon icon="calendar-alt" className="me-1" />
                                {item.date}
                              </small>
                              <small className="text-muted">
                                <FontAwesomeIcon icon="clock" className="me-1" />
                                {item.time}
                              </small>
                            </div>
                          </div>
                        </div>
                      ))}
                      <div className="text-center mt-3">
                        <Link to="/soutenances" className="btn btn-outline-primary btn-sm">
                          Toutes les soutenances
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

export const Head = () => <Seo title="Soutenance de thèse" />

export default SoutenanceTemplate 