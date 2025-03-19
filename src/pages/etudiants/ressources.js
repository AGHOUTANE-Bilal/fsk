import React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { Link } from "gatsby"

const RessourcesPage = () => {
  return (
    <Layout>
      <div className="container py-5">
        <div className="row mb-4">
          <div className="col-12">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Accueil</Link></li>
                <li className="breadcrumb-item"><Link to="/etudiants">Étudiants</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Ressources</li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <h1 className="mb-4 text-dark">Ressources étudiantes</h1>
            <p className="lead mb-4 text-dark">
              Découvrez les différentes ressources disponibles pour vous accompagner dans vos études.
            </p>

            <div className="card mb-4">
              <div className="card-header bg-primary text-white">
                <h2 className="h5 mb-0">Espace Numérique de Travail (E.N.T)</h2>
              </div>
              <div className="card-body bg-light">
                <p className="text-dark">
                  Cet Espace Numérique de Travail « ENT » est à la disposition des étudiants de l'université Ibn Tofail 
                  afin qu'ils puissent accéder à l'information pédagogique ou académique par un simple clic.
                </p>
                <p className="text-dark">
                  Notre service répond à tous vos besoins en information professionnelle.
                </p>
                <a href="http://ent.uit.ac.ma/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Accéder à l'ENT
                </a>
              </div>
            </div>

            <div className="card mb-4">
              <div className="card-header bg-primary text-white">
                <h2 className="h5 mb-0">Moodle E-learning</h2>
              </div>
              <div className="card-body bg-light">
                <p className="text-dark">
                  La cellule E-learning relève du Centre Universitaire des Ressources Informatiques (CURI) de l'Université Ibn Tofail. 
                  Elle a pour mission principale de promouvoir l'enseignement par l'utilisation des Technologies de l'information et 
                  de la communication pour l'enseignement (TICE).
                </p>
                <p className="text-dark">
                  Pour plus d'informations, veuillez consulter les liens des differents Moodle ci-dessous:
                </p>
                <a href="https://www.uit.ac.ma/moodle-plateforme-pedagogique/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Accéder à Moodle
                </a>
              </div>
            </div>

            <div className="card mb-4">
              <div className="card-header bg-primary text-white">
                <h2 className="h5 mb-0">Bibliothèque</h2>
              </div>
              <div className="card-body bg-light">
                <p className="text-dark">
                  L'université Ibn Tofail offre pour ses étudiants, enseignants et chercheurs une bibliothèque de qualité, 
                  un centre de documentation multidisciplinaire.
                </p>
                <p className="text-dark">
                  Notre but est de rendre accessible les différentes ressources de recherche et d'information.
                </p>
                <a href="http://biblio.uit.ac.ma/pmb/opac_css/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Accéder à la bibliothèque
                </a>
              </div>
            </div>

            <div className="card mb-4">
              <div className="card-header bg-primary text-white">
                <h2 className="h5 mb-0">Services administratifs</h2>
              </div>
              <div className="card-body bg-light">
                <div className="mb-4">
                  <h3 className="h6 text-dark">Consultation Bourse</h3>
                  <a href="https://e-bourse-maroc.onousc.ma/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">
                    Consulter votre bourse
                  </a>
                </div>

                <div>
                  <h3 className="h6 text-dark">Assurance Maladie Obligatoire des étudiants (AMO)</h3>
                  <p className="text-dark">
                    Dans le cadre de son programme de développement, l'Université Ibn Tofail veille à ce que chaque étudiant 
                    bénéficie d'une couverture sociale pendant ses années d'étude. Afin qu'il puisse jouir des différentes 
                    prestations sociales.
                  </p>
                  <p className="text-dark">
                    En collaboration avec la Caisse Nationale des organismes de prévoyance sociale (CNOPS), l'UIT assure aux 
                    étudiants qui remplissent les conditions d'éligibilité une couverture sociale AMO de base des étudiants.
                  </p>
                  <a href="https://eservices.cnops.org.ma/pcme/www/index.php/pcme/default/services?lang=fr" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">
                    Accéder à l'AMO
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default RessourcesPage

export const Head = () => <Seo title="Ressources étudiantes | Faculté des Sciences de Kénitra" description="Ressources pédagogiques, numériques et bibliothécaires disponibles pour les étudiants de la Faculté des Sciences de Kénitra" /> 