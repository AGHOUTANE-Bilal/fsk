import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const EtudiantsPage = () => {
  return (
    <Layout>
      <div className="container py-5">
        <div className="row">
          <div className="col-12">
            <h1 className="mb-4">Espace Étudiants</h1>
            <p className="lead">Bienvenue sur l'espace dédié aux étudiants de la Faculté des Sciences de Kénitra.</p>
          </div>
        </div>
        
        <div className="row mt-5">
          <div className="col-12">
            <h2 className="mb-4"><FontAwesomeIcon icon="info-circle" className="me-2" />Informations et ressources</h2>
            
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
              <div className="col">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title"><FontAwesomeIcon icon="user-graduate" className="me-2 text-primary" />Cycles d'études</h5>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item border-0"><Link to="/etudiants/licence" className="text-decoration-none">Avis aux étudiants du cycle Licence</Link></li>
                      <li className="list-group-item border-0"><Link to="/etudiants/master" className="text-decoration-none">Avis aux étudiants du cycle Master</Link></li>
                      <li className="list-group-item border-0"><Link to="/etudiants/doctorat" className="text-decoration-none">Avis aux étudiants du cycle Doctorat</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="col">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title"><FontAwesomeIcon icon="home" className="me-2 text-primary" />Services sociaux</h5>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item border-0"><Link to="/etudiants/bourses" className="text-decoration-none">Bourses</Link></li>
                      <li className="list-group-item border-0"><Link to="/etudiants/logement" className="text-decoration-none">Logement et Restauration</Link></li>
                      <li className="list-group-item border-0"><Link to="/etudiants/accessibilite" className="text-decoration-none">Accessibilité</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="col">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title"><FontAwesomeIcon icon="tools" className="me-2 text-primary" />Outils et centres</h5>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item border-0"><Link to="/etudiants/ressources" className="text-decoration-none">Ressources et Outils</Link></li>
                      <li className="list-group-item border-0"><Link to="/etudiants/cv-theque" className="text-decoration-none">CV-Thèque</Link></li>
                      <li className="list-group-item border-0"><Link to="/etudiants/centres" className="text-decoration-none">Centres</Link></li>
                      <li className="list-group-item border-0"><Link to="/etudiants/theatre" className="text-decoration-none">Théatre Universitaire</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default EtudiantsPage

export const Head = () => <Seo title="Espace Étudiants | Faculté des Sciences de Kénitra" /> 