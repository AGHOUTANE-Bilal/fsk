import React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { Link } from "gatsby"

const ResultatsPage = () => {
  return (
    <Layout>
      <div className="container py-5">
        <div className="row mb-4">
          <div className="col-12">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Accueil</Link></li>
                <li className="breadcrumb-item"><Link to="/etudiants">Étudiants</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Résultats</li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <h1 className="mb-4 text-dark">Résultats des examens</h1>

            <div className="alert alert-info" role="alert">
              <div className="d-flex align-items-center">
                <i className="fas fa-info-circle me-2"></i>
                <div>
                  Les résultats sont publiés sur la plateforme numérique de l'université. 
                  Veuillez vous connecter à votre espace étudiant pour les consulter.
                </div>
              </div>
            </div>

            <div className="card mb-4">
              <div className="card-header bg-primary text-white">
                <h2 className="h5 mb-0">Accès aux résultats</h2>
              </div>
              <div className="card-body bg-light">
                <p className="text-dark">
                  Pour consulter vos résultats, vous devez :
                </p>
                <ol className="text-dark">
                  <li className="mb-2">Vous connecter à votre espace étudiant avec vos identifiants</li>
                  <li className="mb-2">Accéder à la rubrique "Mes résultats"</li>
                  <li className="mb-2">Sélectionner le semestre ou l'année concernée</li>
                </ol>
                <div className="mt-4">
                  <a href="https://ent.uit.ac.ma" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    Accéder à l'espace étudiant
                  </a>
                </div>
              </div>
            </div>

            <div className="card mb-4">
              <div className="card-header bg-primary text-white">
                <h2 className="h5 mb-0">Informations importantes</h2>
              </div>
              <div className="card-body bg-light">
                <ul className="list-unstyled mb-0">
                  <li className="mb-3 text-dark">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    Les résultats sont publiés après validation par les jurys d'examens
                  </li>
                  <li className="mb-3 text-dark">
                    <i className="fas fa-exclamation-circle text-warning me-2"></i>
                    En cas de problème d'accès, contactez le service de scolarité
                  </li>
                  <li className="mb-3 text-dark">
                    <i className="fas fa-info-circle text-info me-2"></i>
                    Les relevés de notes officiels sont à retirer auprès du service de scolarité
                  </li>
                  <li className="text-dark">
                    <i className="fas fa-question-circle text-primary me-2"></i>
                    Pour toute réclamation, respectez les délais indiqués dans le règlement des examens
                  </li>
                </ul>
              </div>
            </div>

            <div className="card">
              <div className="card-header bg-primary text-white">
                <h2 className="h5 mb-0">Contact</h2>
              </div>
              <div className="card-body bg-light">
                <p className="text-dark mb-3">
                  Pour toute question concernant vos résultats, vous pouvez contacter le service de scolarité :
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <p className="text-dark mb-2">
                      <i className="fas fa-envelope me-2"></i>
                      <a href="mailto:scolarite@uit.ac.ma" className="text-primary">scolarite@uit.ac.ma</a>
                    </p>
                    <p className="text-dark mb-0">
                      <i className="fas fa-phone me-2"></i>
                      +212 5XX XX XX XX
                    </p>
                  </div>
                  <div className="col-md-6">
                    <p className="text-dark mb-2">
                      <i className="fas fa-clock me-2"></i>
                      Du lundi au vendredi
                    </p>
                    <p className="text-dark mb-0">
                      <i className="fas fa-map-marker-alt me-2"></i>
                      Bureau de la scolarité, Bâtiment administratif
                    </p>
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

export default ResultatsPage

export const Head = () => <Seo title="Résultats des examens | Faculté des Sciences de Kénitra" description="Consultez vos résultats d'examens sur la plateforme numérique de l'université" /> 