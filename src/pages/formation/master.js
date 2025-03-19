import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import { Card, Row, Col, ListGroup, Alert, Badge, Table, Accordion } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function MasterPage() {
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
              Master
            </li>
          </ol>
        </nav>

        <h1 className="mb-4">Formations en Master</h1>
        
        <div className="alert alert-primary mb-4">
          <div className="d-flex">
            <div className="me-3">
              <FontAwesomeIcon icon="info-circle" size="lg" />
            </div>
            <div>
              <p className="mb-0">
                Le Master est un diplôme de niveau Bac+5 qui s'obtient après 4 semestres d'études (2 ans) suivant la Licence. 
                Notre faculté propose des masters de recherche et des masters spécialisés dans divers domaines scientifiques.
              </p>
            </div>
          </div>
        </div>
        
        <Card className="shadow-sm mb-4">
          <Card.Header className="bg-primary">
            <h2 className="h5 mb-0 text-white fw-bold">Masters Recherche</h2>
          </Card.Header>
          <Card.Body>
            <p>
              Les Masters Recherche sont orientés vers les métiers de la recherche et préparent à la poursuite d'études doctorales. 
              Ils offrent une formation approfondie dans un domaine scientifique spécifique et développent les compétences nécessaires 
              à la conduite de projets de recherche.
            </p>
            
            <div className="table-responsive mt-4">
              <Table striped bordered hover className="mb-0">
                <thead className="table-primary">
                  <tr>
                    <th className="text-center">Intitulé Master</th>
                    <th className="text-center">Département</th>
                    <th className="text-center">Coordinateur</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Amélioration et valorisation des ressources végétales</td>
                    <td>Biologie</td>
                    <td>Pr. IBRIZ Mohammed</td>
                  </tr>
                  <tr>
                    <td>Biologie de l'Environnement</td>
                    <td>Biologie</td>
                    <td>Pr. ATTARASSI Benaissa</td>
                  </tr>
                  <tr>
                    <td>Biologie intégrative, Physiopathologie et Santé</td>
                    <td>Biologie</td>
                    <td>Pr. MESFIOUI Abdelhalem</td>
                  </tr>
                  <tr>
                    <td>Energétique – Mécanique des fluides</td>
                    <td>Physique</td>
                    <td>Pr. ECHCHELH Adil</td>
                  </tr>
                  <tr>
                    <td>Modélisation Stochastique et statistique</td>
                    <td>Mathématiques</td>
                    <td>Pr. EL FATINI Mohamed</td>
                  </tr>
                  <tr>
                    <td>Physique de la matière condensée</td>
                    <td>Physique</td>
                    <td>Pr. FAHOUME Mounir</td>
                  </tr>
                  <tr>
                    <td>Sciences des matériaux</td>
                    <td>Chimie</td>
                    <td>Pr. CHAHINE Abdelkrim</td>
                  </tr>
                  <tr>
                    <td>Sciences et techniques nucléaires</td>
                    <td>Physique</td>
                    <td>Pr. CHAKIR El Mahjoub</td>
                  </tr>
                  <tr>
                    <td>Équations aux dérivées partielles et Géométrie complexe</td>
                    <td>Mathématiques</td>
                    <td>Pr. ASSERDA Saïd</td>
                  </tr>
                  <tr>
                    <td>Informatique et Intelligence Artificielle</td>
                    <td>Informatique</td>
                    <td>Pr. AZZOUZI Salma</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
        
        <Card className="shadow-sm mb-4">
          <Card.Header className="bg-success">
            <h2 className="h5 mb-0 text-white fw-bold">Masters Spécialisés</h2>
          </Card.Header>
          <Card.Body>
            <p>
              Les Masters Spécialisés sont orientés vers l'insertion professionnelle directe. Ils offrent une formation 
              approfondie dans un domaine spécifique avec une forte composante pratique et professionnalisante, souvent 
              en partenariat avec des acteurs du monde socio-économique.
            </p>
            
            <div className="table-responsive mt-4">
              <Table striped bordered hover className="mb-0">
                <thead className="table-success">
                  <tr>
                    <th className="text-center">Intitulé Master</th>
                    <th className="text-center">Département</th>
                    <th className="text-center">Coordinateur</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td> Ingénierie des Systèmes de Télécommunications</td>
                    <td>Physique</td>
                    <td>Pr. EL FAYLALI Hanan</td>
                  </tr>
                  <tr>
                    <td>Big Data et Cloud Computing</td>
                    <td>Informatique</td>
                    <td>Pr. ABOUCHABAKA Jaafar</td>
                  </tr>
                  <tr>
                    <td>Chimie Appliquée, Environnement et Développement durable</td>
                    <td>Chimie</td>
                    <td>Pr. LEBKIRI Ahmed</td>
                  </tr>
                  <tr>
                    <td>Electronique embarquée</td>
                    <td>Physique</td>
                    <td>Pr. HLOU Laamari</td>
                  </tr>
                  <tr>
                    <td>Génie des matériaux et technologies des céramiques et ciments</td>
                    <td>Chimie</td>
                    <td>Pr. GUEDIRA Taoufiq</td>
                  </tr>
                  <tr>
                    <td>Génie des procédés Industriels</td>
                    <td>Chimie</td>
                    <td>Pr. SALLEK Brahim</td>
                  </tr>
                  <tr>
                    <td>Génie Logiciel pour le Cloud</td>
                    <td>Informatique</td>
                    <td>Pr. SADIQ Abdelalim</td>
                  </tr>
                  <tr>
                    <td>Hydroinformatique et Gestion des Hydrosystèmes</td>
                    <td>Géologie</td>
                    <td>Pr. EL MANSOURI Bouabid</td>
                  </tr>
                  <tr>
                    <td>Ingénierie de la valorisation des ressources naturelles et management de la qualité</td>
                    <td>Biologie</td>
                    <td>Pr. OUHSSINE Mohammed</td>
                  </tr>
                  <tr>
                    <td>Intelligence artificielle et réalité virtuelle</td>
                    <td>Informatique</td>
                    <td>Pr. TOUAHNI Raja</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
        
        <Card className="shadow-sm mb-4">
          <Card.Header className="bg-warning">
            <h2 className="h5 mb-0 text-white fw-bold">Masters Nouvelles générations 2024-2025</h2>
          </Card.Header>
          <Card.Body>
            <p>
              Dans le cadre de la réforme pédagogique et du Plan National d'Accélération de la Transformation de l'Écosystème 
              de l'Enseignement Supérieur (PACTE ESRI 2030), notre faculté propose une nouvelle génération de masters 
              conçus pour répondre aux défis contemporains et aux besoins du marché du travail.
            </p>
            
            <div className="table-responsive mt-4">
              <Table striped bordered hover className="mb-0">
                <thead className="table-warning">
                  <tr>
                    <th className="text-center">Département</th>
                    <th className="text-center">Intitulé de Master</th>
                    <th className="text-center">Coordinateur</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Biologie Department */}
                  <tr>
                    <td rowSpan="6" className="align-middle bg-light fw-bold">Biologie</td>
                    <td>Agro biosciences et Environnement</td>
                    <td>Pr. ATMANE Rochdi</td>
                  </tr>
                  <tr>
                    <td>Biologie et Santé</td>
                    <td>Pr. OUAHIDI Moulaylaarbi</td>
                  </tr>
                  <tr>
                    <td>Ingénierie de l'environnement et Développement Durable</td>
                    <td>Pr. AUAJJAR Nabila</td>
                  </tr>
                  <tr>
                    <td>Ingénierie des Ressources Naturelles et Management de la Qualité</td>
                    <td>Pr. OUHSSINE Mohammed</td>
                  </tr>
                  <tr>
                    <td>Management des projets de recherche en coopération et innovation</td>
                    <td>Pr. ABOUSSALEH Youssef</td>
                  </tr>
                  <tr>
                    <td>Parcours d'Excellence Biotechnologies Alimentaire et Nutrition</td>
                    <td>Pr. AOUANE Elmahjoub</td>
                  </tr>
                  
                  {/* Géologie Department */}
                  <tr>
                    <td rowSpan="2" className="align-middle bg-light fw-bold">Géologie</td>
                    <td>Analyse et Gestion des Risques Naturels</td>
                    <td>Pr. BENAMMI Mohammed</td>
                  </tr>
                  <tr>
                    <td>Technique d'Exploitation des Géo ressources</td>
                    <td>Pr. CHAKIRI Saïd</td>
                  </tr>
                  
                  {/* Physique Department */}
                  <tr>
                    <td rowSpan="6" className="align-middle bg-light fw-bold">Physique</td>
                    <td>Electronique Embarqué</td>
                    <td>Pr. HADJOUDJA Abdelkader</td>
                  </tr>
                  <tr>
                    <td>Energie renouvelables et Hydrogène vert</td>
                    <td>Pr. NOUNEH Khalid</td>
                  </tr>
                  <tr>
                    <td>Ingénierie des systèmes de télécommunications</td>
                    <td>Pr. EL FAYLALI Hanan</td>
                  </tr>
                  <tr>
                    <td>Physique des matériaux et Photopiles solaire</td>
                    <td>Pr. FAHMI Atika</td>
                  </tr>
                  <tr>
                    <td>Radioprotection, Sûreté et Ingénierie nucléaires</td>
                    <td>Pr. CHAKIR El Mahjoub</td>
                  </tr>
                  <tr>
                    <td>Parcours d'Excellence Intelligence Artificielle et Objets connectés pour automobile</td>
                    <td>Pr. MESSOUSSI Rochdi</td>
                  </tr>
                  
                  {/* Chimie Department */}
                  <tr>
                    <td rowSpan="5" className="align-middle bg-light fw-bold">Chimie</td>
                    <td>Analyse, Qualité et Sécurité industrielle</td>
                    <td>Pr. HABSAOUI Amar</td>
                  </tr>
                  <tr>
                    <td>Chimie appliquée, Environnement et Développement durable</td>
                    <td>Pr. HBAIZ Elmahdi</td>
                  </tr>
                  <tr>
                    <td>Génie de protection des matériaux</td>
                    <td>Pr. ERRAMLI Hamid</td>
                  </tr>
                  <tr>
                    <td>Matériaux Fonctionnels et Applications</td>
                    <td>Pr. CHAHINE Abdelkrim</td>
                  </tr>
                  <tr>
                    <td>Nanomatériaux et Modélisation moléculaire</td>
                    <td>Pr. BOUZAKRAOUI Said</td>
                  </tr>
                  
                  {/* Informatique Department */}
                  <tr>
                    <td rowSpan="6" className="align-middle bg-light fw-bold">Informatique</td>
                    <td>Big Data Intelligence Artificielle et Applications Avancées</td>
                    <td>Pr. ABOUCHABAKA Jaafar</td>
                  </tr>
                  <tr>
                    <td>Génie Logiciel pour le Cloud Computing</td>
                    <td>Pr. SADIQ Abdelalim</td>
                  </tr>
                  <tr>
                    <td>Informatique et Intelligence Artificielle</td>
                    <td>Pr. CHARAF My El Hassan</td>
                  </tr>
                  <tr>
                    <td>Ingénierie des Systèmes Intelligents</td>
                    <td>Pr. CHOUKRI Ali</td>
                  </tr>
                  <tr>
                    <td>Intelligence Artificielle et cyber Sécurité</td>
                    <td>Pr. TKATEK Said</td>
                  </tr>
                  <tr>
                    <td>Réseaux et Services mobiles</td>
                    <td>Pr. IBRAHIMI Khalil</td>
                  </tr>
                  
                  {/* Mathématiques Department */}
                  <tr>
                    <td rowSpan="3" className="align-middle bg-light fw-bold">Mathématiques</td>
                    <td>Algèbre, Géométrie et Applications</td>
                    <td>Pr. MANSOURI Mohammed Wadia</td>
                  </tr>
                  <tr>
                    <td>Mathématiques Fondamentale et Applications</td>
                    <td>Pr. YAFIA Radouane</td>
                  </tr>
                  <tr>
                    <td>Modélisation Stochastique et Calcul Scientifique</td>
                    <td>Pr. AKHIAT Fettah</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
        
        <Card className="shadow-sm mb-4">
          <Card.Header className="bg-info">
            <h2 className="h5 mb-0 text-white fw-bold">Admission et Candidature</h2>
          </Card.Header>
          <Card.Body>
            <Row className="g-4">
              <Col md={6}>
                <Card className="h-100 border-info">
                  <Card.Header className="bg-light">
                    <h3 className="h6 mb-0 fw-bold text-info">Conditions d'accès</h3>
                  </Card.Header>
                  <Card.Body>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">Être titulaire d'une licence ou d'un diplôme équivalent</li>
                      <li className="list-group-item">Avoir un parcours académique en adéquation avec le master visé</li>
                      <li className="list-group-item">Satisfaire aux critères de sélection spécifiques à chaque master</li>
                      <li className="list-group-item">Réussir le processus de sélection (étude de dossier, test écrit, entretien)</li>
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
              
              <Col md={6}>
                <Card className="h-100 border-info">
                  <Card.Header className="bg-light">
                    <h3 className="h6 mb-0 fw-bold text-info">Procédure de candidature</h3>
                  </Card.Header>
                  <Card.Body>
                    <ol className="list-group list-group-numbered">
                      <li className="list-group-item">Préinscription en ligne sur la plateforme dédiée</li>
                      <li className="list-group-item">Dépôt du dossier de candidature complet</li>
                      <li className="list-group-item">Participation aux tests écrits si présélectionné</li>
                      <li className="list-group-item">Entretien avec le comité de sélection</li>
                      <li className="list-group-item">Inscription administrative définitive pour les candidats retenus</li>
                    </ol>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            
            <Alert variant="warning" className="mt-4">
              <Alert.Heading>
                <FontAwesomeIcon icon="exclamation-triangle" className="me-2" />
                Important
              </Alert.Heading>
              <p>
                L'admission en Master est sélective. Les candidats doivent être titulaires d'une licence dans un domaine 
                compatible et satisfaire aux critères de sélection spécifiques à chaque programme. Le nombre de places 
                disponibles est limité.
              </p>
              <hr />
              <p className="mb-0">
                Pour connaître les dates précises de candidature et les modalités spécifiques à chaque master, 
                veuillez consulter régulièrement le site web de la faculté ou contacter directement le coordinateur du master.
              </p>
            </Alert>
          </Card.Body>
        </Card>
        
        <Alert variant="info" className="mt-4">
          <div className="d-flex">
            <div className="me-3">
              <FontAwesomeIcon icon="graduation-cap" size="lg" />
            </div>
            <div>
              <p className="mb-0">
                Les formations en Master sont régulièrement mises à jour pour s'adapter aux évolutions scientifiques 
                et aux besoins du marché du travail. Pour plus d'informations sur un master spécifique, veuillez 
                contacter le coordinateur concerné.
              </p>
            </div>
          </div>
        </Alert>
      </div>
    </Layout>
  )
} 