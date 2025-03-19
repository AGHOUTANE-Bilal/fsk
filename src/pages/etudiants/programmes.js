import * as React from "react"
import { Link } from "gatsby"
import { Container, Row, Col, Breadcrumb, Card, Nav, Tab, Button, Accordion, Badge, Table } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const ProgrammesPage = () => {
  const licenceProgrammes = [
    {
      id: "smi",
      title: "Sciences Mathématiques et Informatique (SMI)",
      description: "Formation en mathématiques et informatique avec une forte orientation vers la programmation, les algorithmes, les structures de données et la modélisation mathématique.",
      careers: ["Développeur informatique", "Analyste programmeur", "Administrateur de bases de données", "Data scientist"],
      coordinateur: "Pr. Mohammed AMINE"
    },
    {
      id: "sma",
      title: "Sciences Mathématiques Appliquées (SMA)",
      description: "Formation approfondie en mathématiques appliquées couvrant l'analyse numérique, les statistiques, la recherche opérationnelle et la modélisation mathématique.",
      careers: ["Ingénieur en modélisation", "Analyste quantitatif", "Statisticien", "Chercheur en mathématiques appliquées"],
      coordinateur: "Pr. Nadia BENALI"
    },
    {
      id: "smp",
      title: "Sciences de la Matière Physique (SMP)",
      description: "Programme axé sur la physique fondamentale et appliquée, incluant la mécanique, l'électromagnétisme, la thermodynamique, l'optique et la physique quantique.",
      careers: ["Technicien supérieur en physique", "Assistant ingénieur de laboratoire", "Chercheur en physique", "Enseignant en sciences physiques"],
      coordinateur: "Pr. Ahmed LAHRECH"
    },
    {
      id: "smc",
      title: "Sciences de la Matière Chimie (SMC)",
      description: "Formation spécialisée en chimie générale, organique, inorganique, analytique et physique, avec des travaux pratiques en laboratoire.",
      careers: ["Technicien de laboratoire", "Assistant de recherche en chimie", "Responsable qualité", "Analyste chimiste"],
      coordinateur: "Pr. Fatima ZOUHRA"
    },
    {
      id: "svu",
      title: "Sciences de la Vie (SVI)",
      description: "Programme couvrant la biologie cellulaire, la biochimie, la génétique, la microbiologie, la physiologie et l'écologie.",
      careers: ["Technicien biologiste", "Assistant de recherche en biologie", "Technicien en biotechnologie", "Analyste en environnement"],
      coordinateur: "Pr. Karim FILALI"
    },
    {
      id: "stu",
      title: "Sciences de la Terre et de l'Univers (STU)",
      description: "Formation en géologie, hydrogéologie, géophysique, climatologie et sciences de l'environnement.",
      careers: ["Technicien géologue", "Assistant en géophysique", "Technicien en environnement", "Cartographe"],
      coordinateur: "Pr. Samira KHALIL"
    }
  ]
  
  const masterProgrammes = [
    {
      id: "isiad",
      title: "Ingénierie des Systèmes Informatiques et Aide à la Décision",
      description: "Master spécialisé dans les systèmes d'information, l'intelligence artificielle, la science des données et l'aide à la décision.",
      coordinateur: "Pr. Hassan BADIR"
    },
    {
      id: "ama",
      title: "Analyse Mathématique et Applications",
      description: "Formation approfondie en analyse mathématique avec des applications dans divers domaines comme la finance, la physique et l'ingénierie.",
      coordinateur: "Pr. Rachid MARZOUK"
    },
    {
      id: "energres",
      title: "Énergies Renouvelables et Systèmes Énergétiques",
      description: "Master orienté vers les technologies des énergies renouvelables, l'efficacité énergétique et la gestion des systèmes énergétiques.",
      coordinateur: "Pr. Laila BENNANI"
    },
    {
      id: "biosan",
      title: "Biologie et Santé",
      description: "Programme intégrant des connaissances avancées en biologie moléculaire, génétique, microbiologie et leurs applications dans le domaine de la santé.",
      coordinateur: "Pr. Mounir HASSANI"
    }
  ]
  
  return (
    <Layout>
      <Container className="py-5">
        {/* Breadcrumb Navigation */}
        <Breadcrumb className="mb-4">
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Accueil</Breadcrumb.Item>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/etudiants" }}>Étudiants</Breadcrumb.Item>
          <Breadcrumb.Item active>Cursus et programmes</Breadcrumb.Item>
        </Breadcrumb>
        
        <h1 className="mb-4">Cursus et Programmes</h1>
        
        <Row className="mb-4">
          <Col lg={8}>
            <p className="lead">
              La Faculté des Sciences de Kénitra propose des formations de qualité dans différents 
              domaines scientifiques, adaptées aux besoins du marché du travail et préparant les étudiants 
              à poursuivre leurs études supérieures.
            </p>
          </Col>
        </Row>
        
        {/* Système LMD */}
        <Card className="shadow-sm mb-5">
          <Card.Header className="bg-light">
            <h2 className="h5 mb-0">Système LMD (Licence - Master - Doctorat)</h2>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col md={4} className="mb-4 mb-md-0">
                <div className="text-center p-4">
                  <div className="mb-3" style={{ color: '#003366' }}>
                    <FontAwesomeIcon icon="graduation-cap" size="3x" />
                  </div>
                  <h3 className="h5">Licence (Bac+3)</h3>
                  <p className="mb-0 text-muted">
                    6 semestres | 180 crédits<br />
                    Formation initiale en sciences
                  </p>
                </div>
              </Col>
              <Col md={4} className="mb-4 mb-md-0">
                <div className="text-center p-4">
                  <div className="mb-3" style={{ color: '#006633' }}>
                    <FontAwesomeIcon icon="microscope" size="3x" />
                  </div>
                  <h3 className="h5">Master (Bac+5)</h3>
                  <p className="mb-0 text-muted">
                    4 semestres | 120 crédits<br />
                    Spécialisation avancée
                  </p>
                </div>
              </Col>
              <Col md={4}>
                <div className="text-center p-4">
                  <div className="mb-3" style={{ color: '#990000' }}>
                    <FontAwesomeIcon icon="book-open" size="3x" />
                  </div>
                  <h3 className="h5">Doctorat (Bac+8)</h3>
                  <p className="mb-0 text-muted">
                    3 années minimum<br />
                    Recherche scientifique
                  </p>
                </div>
              </Col>
            </Row>
            
            <div className="alert alert-info mt-4">
              <FontAwesomeIcon icon="info-circle" className="me-2" />
              Le système LMD (Licence-Master-Doctorat) est basé sur des semestres d'études et des crédits. 
              Chaque semestre correspond à 30 crédits, et chaque crédit représente environ 25-30 heures de travail.
            </div>
          </Card.Body>
        </Card>
        
        {/* Programmes proposés */}
        <div className="card-body">
          <h2 className="h4 mb-4 text-dark">Formations initiales</h2>
          
          <div className="card mb-4">
            <div className="card-header bg-primary">
              <h3 className="h5 mb-0 text-white fw-bold">Présentation</h3>
            </div>
            <div className="card-body">
              <p>
                Le système pédagogique LMD est basé sur des cursus de formation appelés filières et fondé sur un enseignement modulaire de trois niveaux :
              </p>
              
              <div className="row mt-4">
                <div className="col-md-4 mb-3">
                  <div className="card h-100 border-primary">
                    <div className="card-header bg-primary">
                      <h4 className="h6 mb-0 text-white fw-bold">Premier niveau</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        Filière Licence (L) comprenant six semestres d'enseignement sanctionnés par le diplôme de licence d'études fondamentales ou professionnelles (Bac+3)
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-4 mb-3">
                  <div className="card h-100 border-success">
                    <div className="card-header bg-success">
                      <h4 className="h6 mb-0 text-white fw-bold">Deuxième niveau</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        Filière Master (M) comprenant quatre semestres d'enseignement après la filière licence aboutissant à l'obtention du diplôme de Master ou Master spécialisé (Bac +5)
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-4 mb-3">
                  <div className="card h-100 border-info">
                    <div className="card-header bg-info">
                      <h4 className="h6 mb-0 text-white fw-bold">Troisième niveau</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        Doctorat (D) comprenant 3 années de formation. Cette durée peut être prorogée d'un an, de deux ans ou de trois ans par le chef de l'établissement sur proposition du conseil du CEDoc (Bac +8 minimum)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card mb-4">
            <div className="card-header bg-primary">
              <h3 className="h5 mb-0 text-white fw-bold">Organisation de l'année universitaire</h3>
            </div>
            <div className="card-body">
              <p>
                L'année universitaire est composée de 2 semestres s'étalant chacun sur 16 semaines d'enseignement et d'évaluation et correspondant à deux sessions :
              </p>
              
              <ul className="list-group mb-3">
                <li className="list-group-item">– une session d'automne de septembre au début de février;</li>
                <li className="list-group-item">– une session de printemps de mi-février à fin juin.</li>
              </ul>
              
              <p>
                Le cycle de licence est organisé en six semestres, les semestres S1, S3 et S5 se déroulant dans la session d'automne et les semestres S2, S4 et S6 se déroulant dans la session de printemps.
              </p>
              
              <div className="alert alert-light border mt-3">
                <ul className="mb-0">
                  <li>Une filière licence comporte 24 modules dont 16 sont réservés pour le DEUG ou DEUP.</li>
                  <li>Chaque semestre comprend 4 modules avec un volume horaire global semestriel de 320 heures.</li>
                  <li>Un module d'enseignement se déroule sur un semestre et correspond à un volume horaire de 80 heures d'enseignement et d'évaluation.</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="card mb-4">
            <div className="card-header bg-primary">
              <h3 className="h5 mb-0 text-white fw-bold">L'architecture pédagogique globale et les diplômes</h3>
            </div>
            <div className="card-body">
              <p>Les diplômes nationaux délivrés par l'Université sont:</p>
              
              <ul className="list-group mb-4">
                <li className="list-group-item list-group-item-primary">
                  <span className="fw-bold">Le DEUG</span> (Diplôme d'Etudes Universitaires Générales) ou le <span className="fw-bold">DEUP</span> (Diplôme d'Etudes Universitaires Professionnelles) correspondant à 4 semestres d'études
                </li>
                <li className="list-group-item list-group-item-success">
                  <span className="fw-bold">La Licence</span>, correspondant à 2 semestres d'études après le niveau DEUG ou DEUP
                </li>
                <li className="list-group-item list-group-item-info">
                  <span className="fw-bold">Le Master ou Master Spécialisé</span> correspondant à 4 semestres d'études après le niveau Licence
                </li>
                <li className="list-group-item list-group-item-warning">
                  <span className="fw-bold">Le Doctorat</span> correspondant à trois années de recherche et des formations complémentaires
                </li>
              </ul>
            </div>
          </div>
          
          <div className="card mb-4">
            <div className="card-header bg-primary">
              <h3 className="h5 mb-0 text-white fw-bold">Mentions</h3>
            </div>
            <div className="card-body">
              <p>Le diplôme de fin de cycle Licence est délivré avec l'une des mentions suivantes :</p>
              
              <div className="row g-3">
                <div className="col-md-6 col-lg-3">
                  <div className="card h-100 border-danger">
                    <div className="card-header bg-danger">
                      <h4 className="h6 mb-0 text-white fw-bold">Très bien</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        si la moyenne générale des notes des modules est au moins égale à 16 sur 20
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-6 col-lg-3">
                  <div className="card h-100 border-primary">
                    <div className="card-header bg-primary">
                      <h4 className="h6 mb-0 text-white fw-bold">Bien</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        si cette moyenne est au moins égale à 14 sur 20 et inférieure à 16 sur 20
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-6 col-lg-3">
                  <div className="card h-100 border-success">
                    <div className="card-header bg-success">
                      <h4 className="h6 mb-0 text-white fw-bold">Assez bien</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        si cette moyenne est au moins égale à 12 sur 20 est inférieure à 14 sur 20
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-6 col-lg-3">
                  <div className="card h-100 border-secondary">
                    <div className="card-header bg-secondary">
                      <h4 className="h6 mb-0 text-white fw-bold">Passable</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        si cette moyenne est au moins égale à 10 sur 20 est inférieure à 12 sur 20
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="alert alert-info">
            <div className="d-flex">
              <div className="me-3">
                <FontAwesomeIcon icon="info-circle" size="lg" />
              </div>
              <div>
                Les formations sont régulièrement mises à jour pour s'adapter aux évolutions scientifiques et aux besoins du marché du travail.
              </div>
            </div>
          </div>
        </div>
        
        <hr className="my-5" />

        <h2 className="h4 mb-4 text-dark">Formations continues</h2>

        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-header bg-secondary">
                <h3 className="h5 mb-0 text-white fw-bold">Licence d'Université Spécialisée (LUS)</h3>
              </div>
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <div className="me-3">
                    <FontAwesomeIcon icon="graduation-cap" size="2x" className="text-secondary" />
                  </div>
                  <div>
                    <p className="mb-0">
                      Formation de niveau Bac+3 destinée aux professionnels souhaitant acquérir une spécialisation ou compléter leur formation initiale.
                    </p>
                  </div>
                </div>
                <div className="alert alert-light border">
                  <ul className="mb-0">
                    <li>Accessible aux titulaires d'un Bac+2 ou équivalent</li>
                    <li>Formation compatible avec une activité professionnelle</li>
                    <li>Enseignements dispensés en fin de semaine ou en soirée</li>
                    <li>Durée: 1 an (2 semestres)</li>
                  </ul>
                </div>
              </div>
              <div className="card-footer bg-light">
                <button className="btn btn-outline-secondary btn-sm">
                  <FontAwesomeIcon icon="info-circle" className="me-2" />
                  Consulter les LUS disponibles
                </button>
              </div>
            </div>
          </div>
          
          <div className="col-md-6 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-header bg-info">
                <h3 className="h5 mb-0 text-white fw-bold">Master d'Université Spécialisé (MUS)</h3>
              </div>
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <div className="me-3">
                    <FontAwesomeIcon icon="user-graduate" size="2x" className="text-info" />
                  </div>
                  <div>
                    <p className="mb-0">
                      Formation de niveau Bac+5 permettant aux professionnels d'acquérir une expertise avancée dans un domaine spécifique.
                    </p>
                  </div>
                </div>
                <div className="alert alert-light border">
                  <ul className="mb-0">
                    <li>Accessible aux titulaires d'une licence ou équivalent</li>
                    <li>Formation adaptée aux contraintes professionnelles</li>
                    <li>Cours dispensés en format hybride (présentiel et distanciel)</li>
                    <li>Durée: 2 ans (4 semestres)</li>
                  </ul>
                </div>
              </div>
              <div className="card-footer bg-light">
                <button className="btn btn-outline-info btn-sm">
                  <FontAwesomeIcon icon="info-circle" className="me-2" />
                  Consulter les MUS disponibles
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="alert alert-warning mt-3">
          <div className="d-flex">
            <div className="me-3">
              <FontAwesomeIcon icon="exclamation-triangle" size="lg" />
            </div>
            <div>
              <p className="mb-0">
                Les formations continues sont payantes et soumises à des frais d'inscription spécifiques. L'admission est sélective et tient compte de l'expérience professionnelle des candidats.
              </p>
            </div>
          </div>
        </div>
        
        {/* Orientation et conseils */}
        <Card className="shadow-sm mb-5">
          <Card.Header className="bg-light">
            <h2 className="h5 mb-0">Orientation et conseils</h2>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col md={6} className="mb-4 mb-md-0">
                <h3 className="h6 mb-3">Comment choisir votre filière ?</h3>
                <ul className="mb-0">
                  <li>Identifiez vos centres d'intérêt et vos points forts</li>
                  <li>Renseignez-vous sur les débouchés professionnels</li>
                  <li>Consultez les descriptifs détaillés des programmes</li>
                  <li>Échangez avec d'anciens étudiants et des professionnels</li>
                  <li>Participez aux journées portes ouvertes et d'orientation</li>
                </ul>
              </Col>
              <Col md={6}>
                <h3 className="h6 mb-3">Services d'orientation</h3>
                <p>
                  Le service d'orientation de la faculté peut vous aider à clarifier votre projet d'études 
                  et professionnel. Des conseillers sont disponibles pour des entretiens individuels 
                  et des sessions d'information collectives sont régulièrement organisées.
                </p>
                <Button variant="outline-primary" size="sm" as={Link} to="/contact">
                  <FontAwesomeIcon icon="compass" className="me-2" />
                  Prendre rendez-vous avec un conseiller
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        
        {/* Contact Section */}
        <div className="bg-light p-4 rounded-3 mt-5 shadow-sm">
          <Row>
            <Col md={8}>
              <h3 className="h4">Besoin d'informations supplémentaires ?</h3>
              <p className="mb-md-0">
                Pour toute question concernant les programmes d'études, veuillez contacter le service de scolarité.
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
  title="Cursus et programmes" 
  description="Découvrez les différentes formations et cursus proposés par la Faculté des Sciences de Kénitra - Université Ibn Tofail."
/>

export default ProgrammesPage 