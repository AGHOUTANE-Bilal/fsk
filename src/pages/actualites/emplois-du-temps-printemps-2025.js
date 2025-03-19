import * as React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Container, Row, Col, Breadcrumb, Badge, Tabs, Tab } from "react-bootstrap"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const EmploisDuTempsPage = () => {
  return (
    <Layout>
      <Container className="py-5">
        {/* Breadcrumb Navigation */}
        <Breadcrumb className="mb-4">
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Accueil</Breadcrumb.Item>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/actualites" }}>Actualités</Breadcrumb.Item>
          <Breadcrumb.Item active>Emplois du temps - Printemps 2025</Breadcrumb.Item>
        </Breadcrumb>
        
        <div className="mb-4">
          <h1 className="mb-3">Emplois du temps - Session Printemps 2025</h1>
          <p className="lead">
            Le Doyen de la Faculté des Sciences porte à la connaissance des étudiants du cycle de la licence fondamentale 
            que les travaux dirigés débuteront à partir du lundi 10 mars 2025, selon les emplois du temps ci-dessous.
          </p>
          <div className="alert alert-info">
            <FontAwesomeIcon icon="info-circle" className="me-2" />
            Les emplois des semestres S2, S4 et S6 session du printemps 2025
          </div>
        </div>
        
        <Tabs defaultActiveKey="s2" className="mb-4">
          <Tab eventKey="s2" title="Semestre 2">
            <div className="p-3">
              <h3>Emploi du temps - Semestre 2</h3>
              {/* Add schedule content or PDF viewer here */}
              <div className="mt-3">
                <a href="/documents/emploi-temps-s2-2025.pdf" className="btn btn-primary" target="_blank">
                  <FontAwesomeIcon icon="download" className="me-2" />
                  Télécharger l'emploi du temps S2
                </a>
              </div>
            </div>
          </Tab>
          <Tab eventKey="s4" title="Semestre 4">
            <div className="p-3">
              <h3>Emploi du temps - Semestre 4</h3>
              {/* Add schedule content or PDF viewer here */}
              <div className="mt-3">
                <a href="/documents/emploi-temps-s4-2025.pdf" className="btn btn-primary" target="_blank">
                  <FontAwesomeIcon icon="download" className="me-2" />
                  Télécharger l'emploi du temps S4
                </a>
              </div>
            </div>
          </Tab>
          <Tab eventKey="s6" title="Semestre 6">
            <div className="p-3">
              <h3>Emploi du temps - Semestre 6</h3>
              {/* Add schedule content or PDF viewer here */}
              <div className="mt-3">
                <a href="/documents/emploi-temps-s6-2025.pdf" className="btn btn-primary" target="_blank">
                  <FontAwesomeIcon icon="download" className="me-2" />
                  Télécharger l'emploi du temps S6
                </a>
              </div>
            </div>
          </Tab>
        </Tabs>
        
        <div className="mt-5">
          <h3>Informations importantes</h3>
          <ul>
            <li>Les travaux dirigés commenceront le lundi 10 mars 2025</li>
            <li>La présence aux TD est obligatoire</li>
            <li>Veuillez consulter régulièrement le site web pour les mises à jour</li>
            <li>Pour toute question, contactez votre département</li>
          </ul>
        </div>
      </Container>
    </Layout>
  )
}

export const Head = () => <Seo 
  title="Emplois du temps - Session Printemps 2025" 
  description="Emplois du temps pour les semestres S2, S4 et S6 de la session du printemps 2025 à la Faculté des Sciences."
/>

export default EmploisDuTempsPage 