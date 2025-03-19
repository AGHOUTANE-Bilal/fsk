import * as React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

const CommissionPage = () => {
  return (
    <Layout>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-12">
            <h1>Commission scientifique</h1>
            
            <p>
                  La Commission scientifique est un organe consultatif qui évalue les dossiers académiques 
                  et les projets de recherche. Elle joue un rôle essentiel dans la promotion de l'excellence 
                  scientifique au sein de la faculté.
                </p>
                
            <h2 className="mt-4">Attributions de la Commission</h2>
            <ul>
              <li>Examiner les dossiers de candidature pour les postes d'enseignants-chercheurs</li>
              <li>Évaluer les dossiers de promotion des enseignants-chercheurs</li>
              <li>Évaluer les projets de recherche soumis pour financement</li>
              <li>Donner un avis sur la création de laboratoires et d'équipes de recherche</li>
              <li>Valider les sujets de thèse de doctorat</li>
              <li>Approuver la composition des jurys de thèse</li>
                        </ul>
            
            <div className="mt-4">
              <Link to="/structures/conseil" className="btn btn-primary me-2">
                Conseil de la Faculté
              </Link>
              <Link to="/structures" className="btn btn-primary">
                Retour aux structures
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo 
  title="Commission scientifique | Faculté des Sciences" 
  description="Découvrez le rôle et la composition de la Commission scientifique de la Faculté des Sciences"
/>

export default CommissionPage 