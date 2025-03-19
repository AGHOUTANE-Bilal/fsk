import * as React from "react"
import { Link } from "gatsby"
import { Container, Row, Col, Badge, Card } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Layout from "../components/layout"
import Seo from "../components/seo"

// This template will be used to generate dynamic pages for each actualité
// In a real application, this would use Gatsby's GraphQL data layer
const ActualiteTemplate = ({ pageContext }) => {
  // In a real application, pageContext would contain the actualité data
  // For now, we'll use a sample actualité
  const actualite = {
    id: 1,
    title: "Inscription ouverte pour l'année académique 2023-2024",
    content: `
      <p>Les inscriptions pour l'année académique 2023-2024 sont maintenant ouvertes. Veuillez consulter le calendrier des inscriptions ci-dessous.</p>
      
      <h3>Calendrier des inscriptions</h3>
      <ul>
        <li><strong>Licence 1ère année :</strong> du 1er au 15 septembre 2023</li>
        <li><strong>Licence 2ème et 3ème année :</strong> du 5 au 20 septembre 2023</li>
        <li><strong>Master :</strong> du 10 au 25 septembre 2023</li>
        <li><strong>Doctorat :</strong> du 15 au 30 septembre 2023</li>
      </ul>
      
      <h3>Documents requis</h3>
      <ul>
        <li>Copie de la carte d'identité nationale</li>
        <li>Copies certifiées conformes des diplômes</li>
        <li>Relevés de notes</li>
        <li>Photos d'identité</li>
        <li>Formulaire d'inscription dûment rempli</li>
      </ul>
      
      <p>Pour plus d'informations, veuillez contacter le service de scolarité ou consulter le site web de la faculté.</p>
    `,
    date: "15 Juin 2023",
    category: "Administratif",
    author: "Service de scolarité",
    image: "https://fs.uit.ac.ma/wp-content/uploads/2025/02/POSTER-of-ICBDAIA25-860x1216.png",
  }

  // Related actualités (in a real application, these would be fetched based on category or tags)
  const relatedActualites = [
    {
      id: 2,
      title: "Conférence internationale sur les énergies renouvelables",
      excerpt: "La faculté organise une conférence internationale sur les énergies renouvelables du 10 au 12 juillet 2023.",
      date: "5 Juin 2023",
      category: "Recherche",
      slug: "conference-energies-renouvelables",
      image: "https://fs.uit.ac.ma/wp-content/uploads/2025/02/17-Feb-2025-Appel-a%CC%80-Candidature-PostDoc-PyroBioFuel-_1_-860x1216.jpg",
    },
    {
      id: 3,
      title: "Résultats des examens du premier semestre",
      excerpt: "Les résultats des examens du premier semestre sont maintenant disponibles. Consultez votre espace étudiant.",
      date: "1 Juin 2023",
      category: "Académique",
      slug: "resultats-examens-s1",
      image: "https://via.placeholder.com/600x400?text=Résultats",
    },
  ]

  return (
    <Layout>
      <article>
        {/* Hero section with image */}
        <div className="position-relative">
          <img
            src={actualite.image}
            alt={actualite.title}
            className="w-100"
            style={{ maxHeight: "500px", objectFit: "cover" }}
          />
          <div className="position-absolute bottom-0 w-100 p-4" style={{ background: "rgba(0,0,0,0.6)" }}>
            <Container>
              <Badge bg="primary" className="mb-2">{actualite.category}</Badge>
              <h1 className="text-light">{actualite.title}</h1>
              <div className="text-light d-flex align-items-center">
                <span className="me-3">
                  <FontAwesomeIcon icon="calendar-alt" className="me-1" />
                  {actualite.date}
                </span>
                <span>
                  <FontAwesomeIcon icon="user" className="me-1" />
                  {actualite.author}
                </span>
              </div>
            </Container>
          </div>
        </div>

        {/* Content section */}
        <section className="section">
          <Container>
            <Row>
              <Col lg={8}>
                <div className="content" dangerouslySetInnerHTML={{ __html: actualite.content }}></div>
                
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
                      <h4>Actualités récentes</h4>
                      <hr />
                      {relatedActualites.map(item => (
                        <div key={item.id} className="mb-3">
                          <Link to={`/actualites/${item.slug}`} className="text-decoration-none">
                            <h6 className="mb-1">{item.title}</h6>
                          </Link>
                          <small className="text-muted">
                            <FontAwesomeIcon icon="calendar-alt" className="me-1" />
                            {item.date}
                          </small>
                        </div>
                      ))}
                      <div className="text-center mt-3">
                        <Link to="/actualites" className="btn btn-outline-primary btn-sm">
                          Toutes les actualités
                        </Link>
                      </div>
                    </Card.Body>
                  </Card>
                  
                  <Card>
                    <Card.Body>
                      <h4>Catégories</h4>
                      <hr />
                      <div className="d-flex flex-wrap">
                        <Link to="/actualites?category=Administratif" className="badge bg-primary m-1">
                          Administratif
                        </Link>
                        <Link to="/actualites?category=Académique" className="badge bg-primary m-1">
                          Académique
                        </Link>
                        <Link to="/actualites?category=Recherche" className="badge bg-primary m-1">
                          Recherche
                        </Link>
                        <Link to="/actualites?category=Formation" className="badge bg-primary m-1">
                          Formation
                        </Link>
                        <Link to="/actualites?category=Partenariat" className="badge bg-primary m-1">
                          Partenariat
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

export const Head = () => <Seo title="Actualité" />

export default ActualiteTemplate 