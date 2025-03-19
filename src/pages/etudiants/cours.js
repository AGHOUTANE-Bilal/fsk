import React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { Link } from "gatsby"

const CoursPage = () => {
  return (
    <Layout>
      <div className="container py-5">
        <div className="row mb-4">
          <div className="col-12">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Accueil</Link></li>
                <li className="breadcrumb-item"><Link to="/etudiants">Étudiants</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Cours</li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <h1 className="mb-4 text-dark">Cours et supports pédagogiques</h1>

            <div className="alert alert-info" role="alert">
              <div className="d-flex align-items-center">
                <i className="fas fa-info-circle me-2"></i>
                <div>
                  Les supports de cours sont disponibles sur la plateforme Moodle de l'université.
                  Veuillez vous connecter avec vos identifiants pour y accéder.
                </div>
              </div>
            </div>

            <div className="card mb-4">
              <div className="card-header bg-primary text-white">
                <h2 className="h5 mb-0">Accès aux cours en ligne</h2>
              </div>
              <div className="card-body bg-light">
                <p className="text-dark">
                  La Faculté des Sciences de Kénitra met à disposition de ses étudiants des supports pédagogiques en ligne.
                  Ces ressources sont accessibles via :
                </p>
                <ul className="text-dark">
                  <li className="mb-2">La plateforme Moodle de l'université (cours, TD, TP)</li>
                  <li className="mb-2">L'Espace Numérique de Travail (documents administratifs)</li>
                  <li className="mb-2">La bibliothèque numérique (ressources complémentaires)</li>
                </ul>
                <div className="mt-4">
                  <a href="https://moodle.uit.ac.ma" target="_blank" rel="noopener noreferrer" className="btn btn-primary me-2 mb-2">
                    <i className="fas fa-graduation-cap me-2"></i>Plateforme Moodle
                  </a>
                  <a href="https://ent.uit.ac.ma" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary mb-2">
                    <i className="fas fa-university me-2"></i>ENT Université
                  </a>
                </div>
              </div>
            </div>

            <div className="row mb-4">
              <div className="col-md-6 mb-4 mb-md-0">
                <div className="card h-100">
                  <div className="card-header bg-primary text-white">
                    <h2 className="h5 mb-0">Cours par filière</h2>
                  </div>
                  <div className="card-body bg-light">
                    <div className="list-group">
                      <Link to="/formation/licence" className="list-group-item list-group-item-action">
                        <i className="fas fa-angle-right me-2"></i>Licences
                      </Link>
                      <Link to="/formation/master" className="list-group-item list-group-item-action">
                        <i className="fas fa-angle-right me-2"></i>Masters
                      </Link>
                      <Link to="/formation/doctorat" className="list-group-item list-group-item-action">
                        <i className="fas fa-angle-right me-2"></i>Doctorat
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-md-6">
                <div className="card h-100">
                  <div className="card-header bg-primary text-white">
                    <h2 className="h5 mb-0">Ressources complémentaires</h2>
                  </div>
                  <div className="card-body bg-light">
                    <ul className="list-unstyled mb-0">
                      <li className="mb-3 text-dark">
                        <i className="fas fa-book text-primary me-2"></i>
                        <a href="#" className="text-primary">Bibliothèque numérique</a>
                      </li>
                      <li className="mb-3 text-dark">
                        <i className="fas fa-video text-primary me-2"></i>
                        <a href="#" className="text-primary">Vidéothèque scientifique</a>
                      </li>
                      <li className="mb-3 text-dark">
                        <i className="fas fa-flask text-primary me-2"></i>
                        <a href="#" className="text-primary">Protocoles de TP</a>
                      </li>
                      <li className="text-dark">
                        <i className="fas fa-file-pdf text-primary me-2"></i>
                        <a href="#" className="text-primary">Annales d'examens</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header bg-primary text-white">
                <h2 className="h5 mb-0">Guide d'utilisation</h2>
              </div>
              <div className="card-body bg-light">
                <p className="text-dark mb-3">
                  Pour une utilisation optimale des plateformes pédagogiques :
                </p>
                <div className="row">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <div className="bg-white p-3 rounded shadow-sm h-100">
                      <h3 className="h6 mb-3 text-dark">Première connexion</h3>
                      <p className="text-dark mb-0 small">
                        Pour votre première connexion, utilisez votre code apogée comme identifiant 
                        et votre CIN comme mot de passe. Vous serez invité à modifier votre mot de 
                        passe lors de la première connexion.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="bg-white p-3 rounded shadow-sm h-100">
                      <h3 className="h6 mb-3 text-dark">Support technique</h3>
                      <p className="text-dark mb-0 small">
                        En cas de problème technique, contactez le support informatique par email à 
                        <a href="mailto:support@uit.ac.ma" className="text-primary"> support@uit.ac.ma</a> 
                        ou rendez-vous au bureau d'assistance au bâtiment administratif.
                      </p>
                    </div>
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

export default CoursPage

export const Head = () => <Seo title="Cours et supports pédagogiques | Faculté des Sciences de Kénitra" description="Accédez aux cours et supports pédagogiques de la Faculté des Sciences de Kénitra" /> 