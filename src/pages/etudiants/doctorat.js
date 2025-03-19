import React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const DoctoratPage = () => {
  return (
    <Layout>
      <div className="container py-5">
        <div className="row mb-4">
          <div className="col-12">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Accueil</Link></li>
                <li className="breadcrumb-item"><Link to="/etudiants">Étudiants</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Cycle Doctorat</li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8">
            <h1 className="mb-4">Avis aux étudiants du cycle Doctorat</h1>
            <p className="lead">Retrouvez ici toutes les informations et les avis importants concernant votre parcours en Doctorat à la Faculté des Sciences de Kénitra.</p>

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
                <h2 className="h5 mb-0"><FontAwesomeIcon icon="calendar-alt" className="me-2" />Calendrier des soutenances</h2>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Soutenances de thèses - Session d'automne
                    <span className="badge bg-primary rounded-pill">Octobre - Décembre</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Soutenances de thèses - Session de printemps
                    <span className="badge bg-primary rounded-pill">Avril - Juin</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Soutenances de thèses - Session d'été
                    <span className="badge bg-primary rounded-pill">Juillet - Septembre</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="card mb-4">
              <div className="card-header bg-primary text-white">
                <h2 className="h5 mb-0"><FontAwesomeIcon icon="graduation-cap" className="me-2" />Écoles doctorales</h2>
              </div>
              <div className="card-body">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                  <div className="col">
                    <div className="card h-100">
                      <div className="card-body">
                        <h5 className="card-title">Sciences Exactes et Applications</h5>
                        <p className="card-text">Mathématiques, Physique, Chimie, Informatique</p>
                      </div>
                      <div className="card-footer bg-white border-top-0">
                        <Link to="/formation/doctorat" className="btn btn-sm btn-outline-primary">Plus d'informations</Link>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card h-100">
                      <div className="card-body">
                        <h5 className="card-title">Sciences de la Vie et de l'Environnement</h5>
                        <p className="card-text">Biologie, Écologie, Biotechnologie</p>
                      </div>
                      <div className="card-footer bg-white border-top-0">
                        <Link to="/formation/doctorat" className="btn btn-sm btn-outline-primary">Plus d'informations</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card mb-4">
              <div className="card-header bg-primary text-white">
                <h2 className="h5 mb-0"><FontAwesomeIcon icon="flask" className="me-2" />Laboratoires de recherche</h2>
              </div>
              <div className="card-body">
                <p>Les doctorants sont intégrés dans les laboratoires de recherche de la faculté. Découvrez nos laboratoires et leurs thématiques de recherche.</p>
                <Link to="/recherche/laboratoires" className="btn btn-outline-primary">
                  <FontAwesomeIcon icon="microscope" className="me-2" />
                  Voir les laboratoires
                </Link>
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
                    <Link to="/formation/doctorat" className="text-decoration-none">
                      <FontAwesomeIcon icon="book" className="me-2 text-primary" />
                      Programmes de recherche
                    </Link>
                  </li>
                  <li className="list-group-item">
                    <Link to="/soutenances" className="text-decoration-none">
                      <FontAwesomeIcon icon="microphone" className="me-2 text-primary" />
                      Soutenances de thèses
                    </Link>
                  </li>
                  <li className="list-group-item">
                    <Link to="/recherche/documents" className="text-decoration-none">
                      <FontAwesomeIcon icon="file-alt" className="me-2 text-primary" />
                      Publications et documents
                    </Link>
                  </li>
                  <li className="list-group-item">
                    <Link to="/etudiants/bourses" className="text-decoration-none">
                      <FontAwesomeIcon icon="money-bill-wave" className="me-2 text-primary" />
                      Bourses de recherche
                    </Link>
                  </li>
                  <li className="list-group-item">
                    <Link to="/recherche/laboratoires" className="text-decoration-none">
                      <FontAwesomeIcon icon="flask" className="me-2 text-primary" />
                      Laboratoires de recherche
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
                      Guide du doctorant
                    </a>
                  </li>
                  <li className="list-group-item">
                    <a href="#" className="text-decoration-none">
                      <FontAwesomeIcon icon="file-pdf" className="me-2 text-danger" />
                      Guide de rédaction de thèse
                    </a>
                  </li>
                  <li className="list-group-item">
                    <a href="#" className="text-decoration-none">
                      <FontAwesomeIcon icon="file-pdf" className="me-2 text-danger" />
                      Formulaire de suivi de thèse
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="card mb-4">
              <div className="card-header bg-primary text-white">
                <h3 className="h5 mb-0"><FontAwesomeIcon icon="users" className="me-2" />Vie doctorale</h3>
              </div>
              <div className="card-body">
                <p>Rejoignez la communauté des doctorants et participez aux activités scientifiques et culturelles.</p>
                <Link to="/recherche/evenements" className="btn btn-outline-primary btn-sm">
                  <FontAwesomeIcon icon="calendar-plus" className="me-2" />
                  Événements scientifiques
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default DoctoratPage

export const Head = () => <Seo title="Cycle Doctorat | Faculté des Sciences de Kénitra" description="Informations et avis pour les étudiants du cycle Doctorat à la Faculté des Sciences de Kénitra" /> 