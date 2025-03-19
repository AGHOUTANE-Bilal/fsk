import React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { Link } from "gatsby"

const CentresPage = () => {
  return (
    <Layout>
      <div className="container py-5">
        <div className="row mb-4">
          <div className="col-12">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Accueil</Link></li>
                <li className="breadcrumb-item"><Link to="/etudiants">Étudiants</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Centres</li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <h1 className="mb-4 text-dark">Centres</h1>
            
            <div className="card mb-4">
              <div className="card-body bg-light">
                <ul className="list-unstyled">
                  <li className="mb-3 text-dark">
                    • <a href="https://cdc.uit.ac.ma/" target="_blank" rel="noopener noreferrer" className="text-primary">Centre de Développement de Carrière</a>
                  </li>
                  <li className="mb-3 text-dark">
                    • <a href="https://cve.uit.ac.ma/" target="_blank" rel="noopener noreferrer" className="text-primary">Centre de Vie Etudiant – CVE</a>
                  </li>
                  <li className="mb-3 text-dark">
                    • <a href="https://curi.uit.ac.ma/" target="_blank" rel="noopener noreferrer" className="text-primary">Centre Universitaire des Ressources Informatiques – CURI</a>
                  </li>
                  <li className="mb-3 text-dark">
                    • <a href="https://cl.uit.ac.ma/" target="_blank" rel="noopener noreferrer" className="text-primary">Centre de Langues</a>
                  </li>
                  <li className="mb-3 text-dark">
                    • <a href="https://cms.uit.ac.ma/" target="_blank" rel="noopener noreferrer" className="text-primary">Centre Médico-Social – CMS</a>
                  </li>
                  <li className="mb-3 text-dark">
                    • <a href="https://handi.uit.ac.ma/" target="_blank" rel="noopener noreferrer" className="text-primary">Espace des Etudiants en Situation de Handicap</a>
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

export default CentresPage

export const Head = () => <Seo title="Centres | Faculté des Sciences de Kénitra" description="Liste des centres et services disponibles pour les étudiants de la Faculté des Sciences de Kénitra" /> 