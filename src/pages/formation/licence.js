import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import { Card, Row, Col, ListGroup, Alert, Badge, Table, Accordion } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function LicencePage() {
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
              Licence
            </li>
          </ol>
        </nav>

        <h1 className="mb-4">Formations en Licence</h1>
        
        <Card className="shadow-sm mb-4">
          <Card.Header className="bg-primary">
            <h2 className="h5 mb-0 text-white fw-bold">Structure des filières</h2>
          </Card.Header>
          <Card.Body>
            <p>
              Les filières de licence s'étale sur six semestres, et comporte 38 modules qui sont répartis en deux blocs de modules : 
              «Majeurs» et «Complémentaires». Les filières licence sont des cursus de formation qui peuvent comporter des parcours 
              de formation au 5ème et 6ème semestre.
            </p>
            
            <div className="row mb-4 mt-4">
              <div className="col-md-6">
                <div className="card h-100 border-primary">
                  <div className="card-header bg-primary">
                    <h3 className="h6 mb-0 text-white fw-bold">Les modules majeurs</h3>
                  </div>
                  <div className="card-body">
                    <p>
                      Ils correspondent à des modules qui reflètent le caractère disciplinaire de la filière, y compris le projet tutoré 
                      pour la Licence d'Etudes Fondamentales ou le Stage pour la Licence Professionnelle. Le volume horaire de ce bloc 
                      de module représente 75% à 85% du volume horaire de la filière.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="col-md-6">
                <div className="card h-100 border-success">
                  <div className="card-header bg-success">
                    <h3 className="h6 mb-0 text-white fw-bold">Les modules complémentaires</h3>
                  </div>
                  <div className="card-body">
                    <p>
                      Les modules complémentaires peuvent comporter des enseignements de langues appliquées, communication professionnelle, 
                      entreprenariat, gestion de projets, nouvelles technologies, etc., y compris les modules de langue et terminologie. 
                      Le volume horaire de ce bloc de modules représente 15% à 25% du volume horaire de la filière.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <h3 className="h6 mt-4 mb-3 fw-bold">Spécificités selon le type de Licence</h3>
            <div className="row mb-4">
              <div className="col-md-6">
                <div className="card h-100 border">
                  <div className="card-header bg-light">
                    <h4 className="h6 mb-0 fw-bold">Licence d'Etudes Fondamentales</h4>
                  </div>
                  <div className="card-body">
                    <p>
                      Un projet tutoré spécifique à la filière est obligatoire au cours du 6ème semestre. Toutefois, les sujets du projet 
                      tutoré peuvent être attribués à partir du 5ème semestre. Le projet peut être sous forme de recherche ou d'étude, 
                      de projet pratique, de stage ou de toute autre forme appropriée; il doit faire l'objet d'un rapport et éventuellement 
                      d'une soutenance devant un jury.
                    </p>
                    <p>
                      Le projet peut être réalisé individuellement ou en groupe et fait l'objet d'une note. Il est équivalent à deux modules. 
                      Les modalités d'évaluation sont fixées au niveau du descriptif de la filière.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="col-md-6">
                <div className="card h-100 border">
                  <div className="card-header bg-light">
                    <h4 className="h6 mb-0 fw-bold">Licence Professionnelle</h4>
                  </div>
                  <div className="card-body">
                    <p>
                      Un stage est obligatoire au cours du 6ème semestre. Toutefois, les sujets du stage peuvent être attribués à partir 
                      du 5ème semestre. Le stage fait l'objet d'un rapport sanctionné par une soutenance devant un jury et fait l'objet 
                      d'une note. Il est équivalent à trois modules.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <h3 className="h6 mt-4 mb-3 fw-bold">Volume horaire</h3>
            <ul className="list-group mb-4">
              <li className="list-group-item">Le volume horaire globale des deux premiers semestres de base est de 315 h minimum d'enseignement et d'évaluation</li>
              <li className="list-group-item">Le volume horaire globale des 3ème, 4ème, 5ème et 6ème semestres est de 270 h minimum d'enseignement et d'évaluation</li>
              <li className="list-group-item">Le volume horaire globale de la filière est de 1710 h minimum</li>
            </ul>
            
            <h3 className="h6 mt-4 mb-3 fw-bold">Troncs communs nationaux et parcours spécifiques aux universités</h3>
            <p>
              Chaque filière de licence comporte un tronc commun aux universités au niveau des quatre premiers semestres 
              (modules majeurs et modules complémentaires). Le contenu des quatre premiers semestres pour chaque filière est un contenu national.
            </p>
            <p>
              Les contenus des semestres 5 et 6 sont laissés à la discrétion des universités.
            </p>
            
            <h3 className="h6 mt-4 mb-3 fw-bold">Caractéristiques des modules</h3>
            <ul className="list-group mb-4">
              <li className="list-group-item">Un module s'étale sur un semestre et correspond à un volume horaire de 40 à 50 heures d'enseignement et d'évaluation en présentiel.</li>
              <li className="list-group-item">Un module comporte un ou deux éléments.</li>
              <li className="list-group-item">Un module consacre au moins 20% du volume horaire des travaux pratiques, Hors tutoré ou stage, du module nécessitant des travaux pratiques.</li>
              <li className="list-group-item">La durée d'une activité pratique correspondant à un module est comprise entre 8 et 15 jours ouvrables.</li>
              <li className="list-group-item">Les activités pratiques sont différentes des travaux pratiques, elles consistent en travaux sur le terrain ou projet ou stage.</li>
            </ul>
            
            <h3 className="h6 mt-4 mb-3 fw-bold">Validation et contrôle des connaissances</h3>
            <Accordion className="mb-4">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <span className="fw-bold">Evaluation des connaissances</span>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    L'évaluation des connaissances et des compétences pour chaque module s'effectue sous forme d'un examen écrit de fin de semestre. 
                    Outre l'examen de fin de semestre, des contrôles continus peuvent être organisé tout au long du semestre sous forme de tests, 
                    d'épreuves orales, de devoirs, d'exposés, de rapports de stage ou de tout autre moyen de contrôle fixé dans le descriptif du module. 
                    Les modes d'évaluation des connaissances et la nature des contrôles de connaissances sont adaptés à la nature des modules et des semestres 
                    et aux spécificités des filières.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <span className="fw-bold">Validation ou acquisition d'un module</span>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    Un module est acquis soit par validation soit par compensation. Un module est validé si sa note est supérieure ou égale à 10 sur 20. 
                    Un module est acquis par compensation, si l'étudiant valide le semestre dont fait partie ce module.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <span className="fw-bold">Contrôle de rattrapage</span>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    L'étudiant n'ayant pas validé des modules peut être autorisé à passer un contrôle de rattrapage dans chaque module concerné, 
                    selon les modalités fixées au niveau de l'université. Le contrôle de rattrapage s'effectue selon les mêmes modalités que l'examen de fin de semestre. 
                    Un étudiant ayant validé un module, a acquis définitivement ce module. Il n'est pas de ce fait autorisé à passer le rattrapage pour ce module. 
                    L'étudiant garde la note supérieure entre la note obtenue à l'issue du rattrapage et celle obtenue avant le rattrapage. 
                    Lorsque l'étudiant valide ou acquiert par compensation un module à l'issue du contrôle de rattrapage, il conserve la note obtenue, 
                    avec la mention «validé après rattrapage» sur le relevé de note.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <span className="fw-bold">Validation des semestres</span>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    Un semestre de la Licence est validé si la moyenne des notes obtenues dans les modules du semestre est au moins égale à 10 sur 20 
                    et si aucune note de l'un de ces modules n'est inférieure à 5 sur 20. Les étudiants n'ayant pas validé un semestre, peuvent valider 
                    ce semestre par compensation entre les semestres S1 et S2, ou S3 et S4 ou S5 et S6, si les deux conditions suivantes sont satisfaites:
                  </p>
                  <ul>
                    <li>la moyenne des notes obtenues dans les deux semestres concernés est supérieure ou égale à 10/20;</li>
                    <li>aucune note de l'un des modules des semestres concernés n'est inférieure à 5 sur 20.</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  <span className="fw-bold">Réinscription à un module non validé</span>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    L'étudiant peut se réinscrire une fois à un module non validé. Il peut bénéficier d'une dérogation octroyée par le chef de l'établissement, 
                    pour une deuxième réinscription. A titre exceptionnel, une troisième et dernière réinscription peut être accordée par le chef de l'établissement. 
                    Les modalités de réinscription aux modules non validés sont adoptées par le conseil de l'université et porté à la connaissance des étudiants.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            
            <h3 className="h6 mt-4 mb-3 fw-bold">Licences d'études fondamentales</h3>
            <Table responsive striped bordered hover className="mb-0">
              <thead className="table-primary">
                <tr>
                  <th>Intitulé de la filière</th>
                  <th>Coordonnateur</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sciences de la Vie et de la Terre</td>
                  <td>Pr. Mohamed BENAMMI</td>
                </tr>
                <tr>
                  <td>Sciences Mathématiques et Informatique</td>
                  <td>Pr. Nourddine ENNEYA</td>
                </tr>
                <tr>
                  <td>Sciences de la Matière Physique</td>
                  <td>Pr. Laamari HLOU</td>
                </tr>
                <tr>
                  <td>Sciences de la Matière Chimie</td>
                  <td>Pr. Ahmed LEBKIRI</td>
                </tr>
                <tr>
                  <td>Sciences Mathématiques et Applications</td>
                  <td>Pr. Bouazza EL WAHBI</td>
                </tr>
                <tr>
                  <td>Sciences de la Vie</td>
                  <td>Pr. Mohammed IBRIZ</td>
                </tr>
                <tr>
                  <td>Biologie Végétale</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Physiologie et reproduction animale</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Microbiologie appliquée et biologie moléculaire de la cellule</td>
                  <td></td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
        
        <Alert variant="info" className="mt-4">
          <div className="d-flex">
            <div className="me-3">
              <FontAwesomeIcon icon="info-circle" size="lg" />
            </div>
            <div>
              <p className="mb-0">
                Les formations sont régulièrement mises à jour pour s'adapter aux évolutions scientifiques et aux besoins du marché du travail.
              </p>
            </div>
          </div>
        </Alert>

        <hr className="my-5" />

        <Card className="shadow-sm mb-4">
          <Card.Header className="bg-warning">
            <h2 className="h5 mb-0 text-white fw-bold">Licence Nouvelle Génération</h2>
          </Card.Header>
          <Card.Body>
            <div className="mb-4">
              <div className="d-flex align-items-center mb-3">
                <div className="me-3">
                  <FontAwesomeIcon icon="rocket" size="2x" className="text-warning" />
                </div>
                <div>
                  <p className="mb-0 lead">
                    Dans le cadre de son orientation stratégique visant l'excellence académique, la Faculté des Sciences de Kénitra 
                    traduit le Plan National d'Accélération de la Transformation de l'Écosystème de l'Enseignement Supérieur, 
                    de la Recherche Scientifique et de l'Innovation (PACTE ESRI 2030) par une offre de formation de 18 filières 
                    Licence Nouvelle Génération. L'offre de formation à la Faculté des Sciences de Kénitra est conçue pour faciliter 
                    l'insertion des étudiants et favoriser leur mobilité nationale et internationale.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="table-responsive">
              <Table striped bordered hover className="mb-0">
                <thead className="table-warning">
                  <tr>
                    <th className="text-center">Tronc Commun</th>
                    <th className="text-center">Intitulé de la filière</th>
                    <th className="text-center">Département</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td rowSpan="1" className="align-middle bg-light fw-bold">Informatique appliquée</td>
                    <td>Intelligence Artificielle</td>
                    <td>Informatique</td>
                  </tr>
                  
                  <tr>
                    <td rowSpan="3" className="align-middle bg-light fw-bold">Mathématiques, Informatique, Physique (MIP)</td>
                    <td>Informatique Fondamentale</td>
                    <td>Informatique</td>
                  </tr>
                  <tr>
                    <td>Mathématiques et Applications</td>
                    <td>Mathématiques</td>
                  </tr>
                  <tr>
                    <td>Mathématiques et Informatique pour la Décision</td>
                    <td>Mathématiques</td>
                  </tr>
                  
                  <tr>
                    <td rowSpan="7" className="align-middle bg-light fw-bold">Physique, Chimie (PC)</td>
                    <td>Ingénierie Electronique et Traitement de L'information</td>
                    <td>Physique</td>
                  </tr>
                  <tr>
                    <td>Physique Fondamentale et Applications</td>
                    <td>Physique</td>
                  </tr>
                  <tr>
                    <td>Ingénieries des Énergies Renouvelables</td>
                    <td>Physique</td>
                  </tr>
                  <tr>
                    <td>Radioprotection et Dosimétrie Médicale</td>
                    <td>Physique</td>
                  </tr>
                  <tr>
                    <td>Génie des matériaux</td>
                    <td>Chimie</td>
                  </tr>
                  <tr>
                    <td>Génie des Procédés Industriels</td>
                    <td>Chimie</td>
                  </tr>
                  <tr>
                    <td>Chimie et applications</td>
                    <td>Chimie</td>
                  </tr>
                  
                  <tr>
                    <td rowSpan="7" className="align-middle bg-light fw-bold">Biologie, Chimie, Géologie (BCG)</td>
                    <td>Analyse et qualité</td>
                    <td>Chimie</td>
                  </tr>
                  <tr>
                    <td>Sciences Biomédicales et Santé</td>
                    <td>Biologie</td>
                  </tr>
                  <tr>
                    <td>Biotechnologie et productions végétales</td>
                    <td>Biologie</td>
                  </tr>
                  <tr>
                    <td>Biosciences</td>
                    <td>Biologie</td>
                  </tr>
                  <tr>
                    <td>Sciences et Techniques de l'Eau en Agriculture</td>
                    <td>Biologie</td>
                  </tr>
                  <tr>
                    <td>Génie Civil et Géosciences de l'Environnement</td>
                    <td>Géologie</td>
                  </tr>
                  <tr>
                    <td>Géoressources</td>
                    <td>Géologie</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>

        <Alert variant="success" className="mt-4">
          <div className="d-flex">
            <div className="me-3">
              <FontAwesomeIcon icon="lightbulb" size="lg" />
            </div>
            <div>
              <p className="mb-0">
                Les Licences Nouvelle Génération sont conçues pour répondre aux besoins du marché du travail et aux défis 
                technologiques actuels. Elles intègrent des compétences transversales et des modules professionnalisants 
                pour faciliter l'insertion professionnelle des diplômés.
              </p>
            </div>
          </div>
        </Alert>
      </div>
    </Layout>
  )
} 