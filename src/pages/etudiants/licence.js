import React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const LicencePage = () => {
  return (
    <Layout>
      <div className="container py-5">
        <div className="row mb-4">
          <div className="col-12">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Accueil</Link></li>
                <li className="breadcrumb-item"><Link to="/etudiants">Étudiants</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Cycle Licence</li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8">
            <h1 className="mb-4">Avis aux étudiants du cycle Licence</h1>
            <p className="lead">Retrouvez ici toutes les informations et les avis importants concernant votre parcours en Licence à la Faculté des Sciences de Kénitra.</p>

            <div className="card mb-4">
              <div className="card-header bg-primary text-white">
                <h2 className="h5 mb-0"><FontAwesomeIcon icon="bullhorn" className="me-2" />Avis importants</h2>
              </div>
              <div className="card-body">
                <div className="alert alert-info">
                  <FontAwesomeIcon icon="info-circle" className="me-2" />
                  Aucun avis récent. Les nouveaux avis seront publiés ici.
                </div>
                {/* Vous pouvez ajouter de vrais avis ici */}
              </div>
            </div>

            <div className="card mb-4">
              <div className="card-header bg-primary text-white">
                <h2 className="h5 mb-0"><FontAwesomeIcon icon="calendar-alt" className="me-2" />Calendrier universitaire</h2>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Début du semestre d'automne
                    <span className="badge bg-primary rounded-pill">Septembre</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Examens du premier semestre
                    <span className="badge bg-primary rounded-pill">Janvier</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Début du semestre de printemps
                    <span className="badge bg-primary rounded-pill">Février</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Examens du deuxième semestre
                    <span className="badge bg-primary rounded-pill">Juin</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Session de rattrapage
                    <span className="badge bg-primary rounded-pill">Juillet</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="card mb-4">
              <div className="card-header bg-primary text-white">
                <h2 className="h5 mb-0"><FontAwesomeIcon icon="graduation-cap" className="me-2" />Filières disponibles</h2>
              </div>
              <div className="card-body">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                  <div className="col">
                    <div className="card h-100">
                      <div className="card-body">
                        <h5 className="card-title">Sciences Mathématiques et Informatique</h5>
                        <p className="card-text">Mathématiques, Informatique, Sciences des données</p>
                      </div>
                      <div className="card-footer bg-white border-top-0">
                        <Link to="/formation/licence" className="btn btn-sm btn-outline-primary">Plus d'informations</Link>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card h-100">
                      <div className="card-body">
                        <h5 className="card-title">Sciences de la Matière Physique</h5>
                        <p className="card-text">Physique fondamentale, Physique appliquée</p>
                      </div>
                      <div className="card-footer bg-white border-top-0">
                        <Link to="/formation/licence" className="btn btn-sm btn-outline-primary">Plus d'informations</Link>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card h-100">
                      <div className="card-body">
                        <h5 className="card-title">Sciences de la Matière Chimie</h5>
                        <p className="card-text">Chimie organique, Chimie analytique</p>
                      </div>
                      <div className="card-footer bg-white border-top-0">
                        <Link to="/formation/licence" className="btn btn-sm btn-outline-primary">Plus d'informations</Link>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card h-100">
                      <div className="card-body">
                        <h5 className="card-title">Sciences de la Vie</h5>
                        <p className="card-text">Biologie, Sciences de l'environnement</p>
                      </div>
                      <div className="card-footer bg-white border-top-0">
                        <Link to="/formation/licence" className="btn btn-sm btn-outline-primary">Plus d'informations</Link>
                      </div>
                    </div>
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
                    <Link to="/etudiants/emploi-temps" className="text-decoration-none">
                      <FontAwesomeIcon icon="clock" className="me-2 text-primary" />
                      Emplois du temps
                    </Link>
                  </li>
                  <li className="list-group-item">
                    <Link to="/etudiants/examens" className="text-decoration-none">
                      <FontAwesomeIcon icon="file-alt" className="me-2 text-primary" />
                      Examens et résultats
                    </Link>
                  </li>
                  <li className="list-group-item">
                    <Link to="/formation/licence" className="text-decoration-none">
                      <FontAwesomeIcon icon="book" className="me-2 text-primary" />
                      Programmes d'études
                    </Link>
                  </li>
                  <li className="list-group-item">
                    <Link to="/etudiants/stages" className="text-decoration-none">
                      <FontAwesomeIcon icon="briefcase" className="me-2 text-primary" />
                      Stages et insertion professionnelle
                    </Link>
                  </li>
                  <li className="list-group-item">
                    <Link to="/etudiants/bourses" className="text-decoration-none">
                      <FontAwesomeIcon icon="money-bill-wave" className="me-2 text-primary" />
                      Bourses d'études
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="card mb-4">
              <div className="card-header bg-primary text-white">
                <h3 className="h5 mb-0"><FontAwesomeIcon icon="download" className="me-2" />Documents à télécharger</h3>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <a href="#" className="text-decoration-none">
                      <FontAwesomeIcon icon="file-pdf" className="me-2 text-danger" />
                      Guide d'étudiant - Licence
                    </a>
                  </li>
                  <li className="list-group-item">
                    <a href="#" className="text-decoration-none">
                      <FontAwesomeIcon icon="file-pdf" className="me-2 text-danger" />
                      Règlement des examens
                    </a>
                  </li>
                  <li className="list-group-item">
                    <a href="#" className="text-decoration-none">
                      <FontAwesomeIcon icon="file-pdf" className="me-2 text-danger" />
                      Formulaire de demande d'attestation
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default LicencePage

export const Head = () => <Seo title="Cycle Licence | Faculté des Sciences de Kénitra" description="Informations et avis pour les étudiants du cycle Licence à la Faculté des Sciences de Kénitra" /> 