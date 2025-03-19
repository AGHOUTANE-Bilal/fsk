import * as React from "react"
import { Link } from "gatsby"
import { Container, Row, Col, Form, InputGroup, Table, Badge } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Layout from "../components/layout"
import Seo from "../components/seo"
import SoutenanceCard from "../components/SoutenanceCard"
import fskColors from "../utils/colors"
import pageStyles from "../utils/pageStyles"

// Sample data (will be replaced with dynamic data)
const soutenances = [
  {
    id: 1,
    title: "Étude des propriétés électroniques des matériaux bidimensionnels",
    student: "Ahmed Benali",
    type: "Doctorat",
    date: "2023-06-25",
    time: "14:00",
    location: "Amphithéâtre A",
    jury: [
      "Pr. Mohamed El Khatib (Président)",
      "Pr. Fatima Zahra Saadi (Directrice de thèse)",
      "Pr. Karim Benabdallah (Rapporteur)",
      "Pr. Nadia El Kissi (Rapporteur)",
      "Pr. Hassan El Moussaoui (Examinateur)"
    ],
    abstract: "Cette thèse porte sur l'étude des propriétés électroniques des matériaux bidimensionnels, en particulier le graphène et les dichalcogénures de métaux de transition. Des méthodes de calcul ab initio ont été utilisées pour explorer les effets de la contrainte mécanique sur la structure de bande électronique de ces matériaux."
  },
  {
    id: 2,
    title: "Développement d'algorithmes d'apprentissage profond pour la détection d'anomalies dans les images médicales",
    student: "Leila Mansouri",
    type: "Doctorat",
    date: "2023-06-28",
    time: "10:00",
    location: "Salle de conférences",
    jury: [
      "Pr. Rachid El Alami (Président)",
      "Pr. Jamal Bennouna (Directeur de thèse)",
      "Pr. Samira El Moutaouakil (Rapporteur)",
      "Pr. Khalid El Mahjoub (Rapporteur)",
      "Pr. Nawal El Harti (Examinateur)"
    ],
    abstract: "Cette thèse propose de nouvelles approches basées sur l'apprentissage profond pour la détection automatique d'anomalies dans les images médicales. Des architectures de réseaux de neurones convolutifs et des méthodes d'apprentissage par transfert ont été développées et évaluées sur différentes modalités d'imagerie médicale."
  },
  {
    id: 3,
    title: "Contribution à l'étude de la biodiversité des écosystèmes côtiers du Maroc",
    student: "Karim Benjelloun",
    type: "Doctorat",
    date: "2023-07-05",
    time: "15:00",
    location: "Amphithéâtre B",
    jury: [
      "Pr. Fatima El Khalil (Président)",
      "Pr. Mohammed Lahlou (Directeur de thèse)",
      "Pr. Amina Benkaddour (Rapporteur)",
      "Pr. Youssef El Kamel (Rapporteur)",
      "Pr. Samir El Jazouli (Examinateur)"
    ],
    abstract: "Cette thèse présente une étude approfondie de la biodiversité des écosystèmes côtiers du Maroc, avec un focus particulier sur les zones humides littorales. Des inventaires floristiques et faunistiques ont été réalisés, et les facteurs environnementaux influençant la distribution des espèces ont été analysés."
  },
  {
    id: 4,
    title: "Synthèse et caractérisation de nouveaux matériaux nanocomposites pour le stockage d'énergie",
    student: "Salma El Ouazzani",
    type: "Doctorat",
    date: "2023-07-10",
    time: "09:30",
    location: "Salle de conférences",
    jury: [
      "Pr. Hassan El Mrabet (Président)",
      "Pr. Noureddine El Aoufi (Directeur de thèse)",
      "Pr. Khadija El Amrani (Rapporteur)",
      "Pr. Mustapha El Youssfi (Rapporteur)",
      "Pr. Laila El Ghorfi (Examinateur)"
    ],
    abstract: "Cette thèse porte sur la synthèse et la caractérisation de nouveaux matériaux nanocomposites pour des applications dans le domaine du stockage d'énergie. Des méthodes de synthèse innovantes ont été développées, et les propriétés électrochimiques des matériaux obtenus ont été étudiées en détail."
  },
  {
    id: 5,
    title: "Modélisation et simulation numérique des écoulements à surface libre",
    student: "Omar El Moutawakil",
    type: "Master",
    date: "2023-06-30",
    time: "11:00",
    location: "Salle 23",
    jury: [
      "Pr. Khalid El Harrouni (Président)",
      "Pr. Samira El Moudden (Encadrante)",
      "Pr. Jamal El Bahri (Examinateur)"
    ],
    abstract: "Ce travail de master porte sur la modélisation et la simulation numérique des écoulements à surface libre, avec une application aux problèmes d'inondation. Des méthodes numériques basées sur les volumes finis ont été implémentées et validées sur des cas tests de référence."
  },
  {
    id: 6,
    title: "Étude de la qualité des eaux souterraines dans la région de Kénitra",
    student: "Fatima Zahra El Mourabit",
    type: "Master",
    date: "2023-07-03",
    time: "14:30",
    location: "Salle 15",
    jury: [
      "Pr. Mohammed El Khattabi (Président)",
      "Pr. Naima El Ghazouani (Encadrante)",
      "Pr. Rachid El Bouari (Examinateur)"
    ],
    abstract: "Ce mémoire présente une étude de la qualité physico-chimique et microbiologique des eaux souterraines dans la région de Kénitra. Des échantillons ont été prélevés dans différents puits et analysés pour évaluer leur conformité aux normes de qualité et identifier les sources potentielles de pollution."
  }
];

const SoutenancesPage = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [filterType, setFilterType] = React.useState("Tous");

  // Filter soutenances based on search term and type
  const filteredSoutenances = soutenances.filter(soutenance => {
    const matchesSearch = soutenance.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          soutenance.student.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === "Tous" || soutenance.type === filterType;
    return matchesSearch && matchesType;
  });

  // Sort soutenances by date (most recent first)
  const sortedSoutenances = [...filteredSoutenances].sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <Layout>
      <section style={pageStyles.pageHeaderStyle}>
        <Container>
          <h1 style={pageStyles.pageTitleStyle}>SOUTENANCES</h1>
          <p className="lead mb-0">Calendrier des soutenances de thèses et mémoires à la Faculté des Sciences de Kénitra</p>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <Row className="mb-4">
            <Col md={8}>
              <InputGroup>
                <InputGroup.Text style={{ backgroundColor: fskColors.primary, color: 'white' }}>
                  <FontAwesomeIcon icon="search" />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Rechercher par titre ou nom d'étudiant..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{ borderColor: fskColors.primary }}
                />
              </InputGroup>
            </Col>
            <Col md={4}>
              <Form.Select 
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                style={{ borderColor: fskColors.primary }}
              >
                <option value="Tous">Tous les types</option>
                <option value="Doctorat">Doctorat</option>
                <option value="Master">Master</option>
                <option value="Licence">Licence</option>
              </Form.Select>
            </Col>
          </Row>

          <h2 style={pageStyles.sectionTitleStyle}>Prochaines soutenances</h2>

          <Row>
            {sortedSoutenances.length > 0 ? (
              sortedSoutenances.map(soutenance => (
                <Col lg={6} key={soutenance.id} className="mb-4">
                  <div className="card h-100 shadow-sm border-0">
                    <div style={pageStyles.cardHeaderWithColorStyle(
                      soutenance.type === "Doctorat" ? fskColors.primary : 
                      soutenance.type === "Master" ? fskColors.secondary : 
                      fskColors.accent
                    )}>
                      <div className="d-flex justify-content-between align-items-center">
                        <h3 className="h5 mb-0">{soutenance.type}</h3>
                        <Badge bg="light" text="dark">
                          {new Date(soutenance.date).toLocaleDateString('fr-FR', {day: 'numeric', month: 'long', year: 'numeric'})}
                        </Badge>
                      </div>
                    </div>
                    <div className="card-body">
                      <h4 className="h5 mb-3" style={{ color: fskColors.primary }}>{soutenance.title}</h4>
                      <p className="mb-2"><strong>Candidat:</strong> {soutenance.student}</p>
                      <p className="mb-2"><strong>Date et heure:</strong> {new Date(soutenance.date).toLocaleDateString('fr-FR', {day: 'numeric', month: 'long', year: 'numeric'})} à {soutenance.time}</p>
                      <p className="mb-2"><strong>Lieu:</strong> {soutenance.location}</p>
                      <div className="mt-3">
                        <Link to={`/soutenances/${soutenance.id}`} className="btn" style={pageStyles.secondaryButtonStyle}>
                          Voir les détails
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>
              ))
            ) : (
              <Col>
                <div className="text-center py-5">
                  <FontAwesomeIcon icon="calendar-times" size="3x" style={{ color: fskColors.primary }} className="mb-3" />
                  <h3 style={{ color: fskColors.primary }}>Aucune soutenance trouvée</h3>
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
  title="Soutenances | Faculté des Sciences de Kénitra" 
  description="Calendrier des soutenances de thèses et mémoires à la Faculté des Sciences de Kénitra, Université Ibn Tofail."
/>

export default SoutenancesPage 