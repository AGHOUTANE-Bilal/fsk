import React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const BoursesPage = () => {
  return (
    <Layout>
      <div className="container py-5">
        <div className="row mb-4">
          <div className="col-12">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Accueil</Link></li>
                <li className="breadcrumb-item"><Link to="/etudiants">Étudiants</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Bourses d'études</li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8">
            <h1 className="mb-4">Bourses d'études</h1>
            <p className="lead mb-4">
              En vue de permettre aux étudiants de poursuivre leurs études supérieures et d'obtenir une meilleure éducation, 
              la Faculté des Sciences offre plusieurs possibilités d'obtention de bourses, généralement accordées sous conditions 
              de ressources ou de mérite.
            </p>

            <div className="card mb-4">
              <div className="card-header bg-primary text-white">
                <h2 className="h5 mb-0"><FontAwesomeIcon icon="info-circle" className="me-2" />Nos Services de Bourses Universitaires</h2>
              </div>
              <div className="card-body">
                <ul className="list-unstyled">
                  <li className="mb-2"><FontAwesomeIcon icon="check-circle" className="text-success me-2" />Informer nos étudiants des différents programmes de bourses offerts par les organismes gouvernementaux, privés, nationaux et internationaux.</li>
                  <li className="mb-2"><FontAwesomeIcon icon="check-circle" className="text-success me-2" />Assurer la réception de bourses octroyées par le ministère de l'enseignement supérieur dans les plus brefs délais.</li>
                  <li><FontAwesomeIcon icon="check-circle" className="text-success me-2" />Accompagner et soutenir les étudiants de doctorat les plus méritant dans leur démarche de recherche d'une opportunité de bourse.</li>
                </ul>
              </div>
            </div>

            <div className="card mb-4">
              <div className="card-header bg-primary text-white">
                <h2 className="h5 mb-0"><FontAwesomeIcon icon="graduation-cap" className="me-2" />Types de Bourses</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <h3 className="h6">Bourse sur critères sociaux</h3>
                    <p>Destinées aux étudiants inscrits en cycle de licence et master, attribuées en prenant en considération :</p>
                    <ul>
                      <li>L'éloignement du domicile familial</li>
                      <li>Les charges parentales</li>
                    </ul>
                  </div>
                  <div className="col-md-6 mb-4">
                    <h3 className="h6">Bourse de mérite du cycle Master</h3>
                    <p>Attribuée sur la base de l'excellence académique aux étudiants inscrits en cycle de Master.</p>
                  </div>
                  <div className="col-md-6 mb-4">
                    <h3 className="h6">Bourse de mérite du cycle Doctorat</h3>
                    <ul>
                      <li>70% des étudiants peuvent en bénéficier</li>
                      <li>Durée maximale de 36 mois</li>
                      <li>Renouvelable sous réserve d'un rapport annuel</li>
                      <li>Retrait via carte bancaire "Minhati"</li>
                    </ul>
                  </div>
                  <div className="col-md-6 mb-4">
                    <h3 className="h6">Bourse de recherche</h3>
                    <p>Octroyée par le CNRST aux étudiants doctorants selon des critères d'excellence :</p>
                    <ul>
                      <li>Qualité du cursus universitaire</li>
                      <li>Pertinence du thème de recherche</li>
                      <li>Durée maximale de 3 ans</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="card mb-4">
              <div className="card-header bg-primary text-white">
                <h2 className="h5 mb-0"><FontAwesomeIcon icon="globe" className="me-2" />Bourses Internationales</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <h3 className="h6">Bourses de l'AUF</h3>
                    <p>Offertes par l'Agence Universitaire de la Francophonie aux étudiants, enseignants et staff administratif.</p>
                  </div>
                  <div className="col-md-6 mb-4">
                    <h3 className="h6">Bourses pour étudiants étrangers</h3>
                    <p>Gérées par l'Agence Marocaine de la Coopération Internationale.</p>
                  </div>
                  <div className="col-12">
                    <h3 className="h6">Bourses de mobilité européenne</h3>
                    <p>Programmes d'aide à la mobilité financés par la Commission Européenne pour développer les échanges universitaires et scientifiques.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-header bg-primary text-white">
                <h3 className="h5 mb-0"><FontAwesomeIcon icon="link" className="me-2" />Liens utiles</h3>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <a href="https://e-bourse-maroc.onousc.ma/" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                      <FontAwesomeIcon icon="external-link-alt" className="me-2 text-primary" />
                      e-bourse-maroc.onousc.ma
                    </a>
                  </li>
                  <li className="list-group-item">
                    <a href="https://www.onousc.ma/Bourses-de-premier-cycle-au-Maroc" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                      <FontAwesomeIcon icon="external-link-alt" className="me-2 text-primary" />
                      Bourses de premier cycle
                    </a>
                  </li>
                  <li className="list-group-item">
                    <a href="https://www.minhaty.ma/" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                      <FontAwesomeIcon icon="external-link-alt" className="me-2 text-primary" />
                      Minhati
                    </a>
                  </li>
                  <li className="list-group-item">
                    <a href="http://bourse.cnrst.ma:8080/ebourse/" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                      <FontAwesomeIcon icon="external-link-alt" className="me-2 text-primary" />
                      CNRST Bourses
                    </a>
                  </li>
                  <li className="list-group-item">
                    <a href="https://www.auf.org/ressources-et-services/bourses/" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                      <FontAwesomeIcon icon="external-link-alt" className="me-2 text-primary" />
                      Bourses AUF
                    </a>
                  </li>
                  <li className="list-group-item">
                    <a href="http://www.amci.ma/" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                      <FontAwesomeIcon icon="external-link-alt" className="me-2 text-primary" />
                      AMCI
                    </a>
                  </li>
                  <li className="list-group-item">
                    <a href="https://iro.uit.ac.ma/mobilite-etudiants-uit" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                      <FontAwesomeIcon icon="external-link-alt" className="me-2 text-primary" />
                      Mobilité internationale
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="card mb-4">
              <div className="card-header bg-primary text-white">
                <h3 className="h5 mb-0"><FontAwesomeIcon icon="question-circle" className="me-2" />Contact</h3>
              </div>
              <div className="card-body">
                <p>Pour toute question concernant les bourses d'études, n'hésitez pas à contacter le service des bourses.</p>
                <ul className="list-unstyled">
                  <li><FontAwesomeIcon icon="envelope" className="me-2 text-primary" /> bourses@fsk.ac.ma</li>
                  <li><FontAwesomeIcon icon="phone" className="me-2 text-primary" /> +212 537-XX-XX-XX</li>
                  <li><FontAwesomeIcon icon="map-marker-alt" className="me-2 text-primary" /> Bureau 123, Bâtiment A</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BoursesPage

export const Head = () => <Seo title="Bourses d'études | Faculté des Sciences de Kénitra" description="Informations sur les bourses d'études disponibles pour les étudiants de la Faculté des Sciences de Kénitra" /> 