import * as React from "react"
import { Link } from "gatsby"
import { Container, Row, Col, Form, InputGroup } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ActualiteCard from "../components/ActualiteCard"
import fskColors from "../utils/colors"
import pageStyles from "../utils/pageStyles"

// Sample data (will be replaced with dynamic data)
const actualites = [
  {
    id: 1,
    title: "Inscription ouverte pour l'année académique 2023-2024",
    excerpt: "Les inscriptions pour l'année académique 2023-2024 sont maintenant ouvertes. Veuillez consulter le calendrier des inscriptions.",
    date: "15 Juin 2023",
    category: "Administratif",
    slug: "inscription-2023-2024",
    image: "https://fs.uit.ac.ma/wp-content/uploads/2025/02/POSTER-of-ICBDAIA25-860x1216.png",
  },
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
  {
    id: 4,
    title: "Nouvelle convention de partenariat avec l'industrie",
    excerpt: "La faculté a signé une nouvelle convention de partenariat avec plusieurs entreprises du secteur industriel.",
    date: "25 Mai 2023",
    category: "Partenariat",
    slug: "convention-partenariat-industrie",
    image: "https://via.placeholder.com/600x400?text=Partenariat",
  },
  {
    id: 5,
    title: "Lancement d'un nouveau master en Data Science",
    excerpt: "La faculté lance un nouveau programme de master en Data Science et Intelligence Artificielle pour la rentrée 2023.",
    date: "20 Mai 2023",
    category: "Formation",
    slug: "nouveau-master-data-science",
    image: "https://via.placeholder.com/600x400?text=Master+Data+Science",
  },
  {
    id: 6,
    title: "Publication d'un article dans Nature",
    excerpt: "Des chercheurs de notre faculté ont publié un article important dans la prestigieuse revue Nature.",
    date: "15 Mai 2023",
    category: "Recherche",
    slug: "publication-nature",
    image: "https://via.placeholder.com/600x400?text=Publication",
  },
]

// Get unique categories
const categories = ["Tous", ...new Set(actualites.map(item => item.category))];

const ActualitesPage = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState("Tous");

  // Filter actualites based on search term and category
  const filteredActualites = actualites.filter(actualite => {
    const matchesSearch = actualite.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          actualite.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Tous" || actualite.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <section style={pageStyles.pageHeaderStyle}>
        <Container>
          <h1 style={pageStyles.pageTitleStyle}>ACTUALITÉS</h1>
          <p className="lead mb-0">Restez informé des dernières nouvelles et annonces de la Faculté des Sciences de Kénitra</p>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <Row className="mb-4">
            <Col md={6} lg={8}>
              <InputGroup>
                <InputGroup.Text style={{ backgroundColor: fskColors.primary, color: 'white' }}>
                  <FontAwesomeIcon icon="search" />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Rechercher des actualités..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{ borderColor: fskColors.primary }}
                />
              </InputGroup>
            </Col>
            <Col md={6} lg={4}>
              <Form.Select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                style={{ borderColor: fskColors.primary }}
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </Form.Select>
            </Col>
          </Row>

          <h2 style={pageStyles.sectionTitleStyle}>Dernières actualités</h2>

          <Row>
            {filteredActualites.length > 0 ? (
              filteredActualites.map(actualite => (
                <Col md={6} lg={4} key={actualite.id} className="mb-4">
                  <ActualiteCard actualite={actualite} />
                </Col>
              ))
            ) : (
              <Col>
                <div className="text-center py-5">
                  <FontAwesomeIcon icon="search" size="3x" style={{ color: fskColors.primary }} className="mb-3" />
                  <h3 style={{ color: fskColors.primary }}>Aucun résultat trouvé</h3>
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
  title="Actualités | Faculté des Sciences de Kénitra" 
  description="Découvrez les dernières actualités et annonces de la Faculté des Sciences de Kénitra, Université Ibn Tofail."
/>

export default ActualitesPage 