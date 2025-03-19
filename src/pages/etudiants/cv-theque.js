import React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { Link } from "gatsby"

const CVThequePage = () => {
  return (
    <Layout>
      <div className="container py-5">
        <div className="row mb-4">
          <div className="col-12">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Accueil</Link></li>
                <li className="breadcrumb-item"><Link to="/etudiants">Étudiants</Link></li>
                <li className="breadcrumb-item active" aria-current="page">CV-thèque</li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <h1 className="mb-4 text-dark">PLATEFORME D'ACCRÉDITATION DES FILIÈRES DE FORMATION CONTINUE</h1>
            
            <div className="card mb-4">
              <div className="card-body bg-light">
                <p className="text-dark">
                  Pour plus d'informations, veuillez consulter le site :{' '}
                  <a href="https://cvtheque.uit.ac.ma/" target="_blank" rel="noopener noreferrer" className="text-primary">
                    https://cvtheque.uit.ac.ma/
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CVThequePage

export const Head = () => <Seo title="CV-thèque | Faculté des Sciences de Kénitra" description="Plateforme d'accréditation des filières de formation continue" /> 