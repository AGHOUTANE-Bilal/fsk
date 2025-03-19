import * as React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

const DepartementsPage = () => {
  return (
    <Layout>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-12">
            <h1>Départements</h1>
            
            <p>
                  La Faculté des Sciences compte 7 départements, chacun spécialisé dans un domaine scientifique 
                  spécifique. Ces départements sont responsables de l'enseignement et de la recherche dans leur 
                  discipline respective.
                </p>
                
            <div className="mt-4">
              <h2>Département de Biologie</h2>
              <p>
                Le département de Biologie propose des formations dans les différents domaines des sciences de la vie, 
                avec une attention particulière aux enjeux environnementaux et biotechnologiques.
              </p>
              
              <h2>Département de Chimie</h2>
              <p>
                Le département de Chimie offre des formations en chimie organique, inorganique, analytique et physique, 
                préparant les étudiants à des carrières diverses dans l'industrie et la recherche.
              </p>
              
              <h2>Département de Géologie</h2>
              <p>
                Le département de Géologie forme des spécialistes des sciences de la Terre, capables d'intervenir 
                dans les domaines des ressources minérales, de l'hydrogéologie, et de l'environnement.
              </p>
              
              <h2>Département d'Informatique</h2>
              <p>
                Le département d'Informatique offre des formations couvrant les différents aspects des sciences informatiques, 
                du développement logiciel aux systèmes d'information et à l'intelligence artificielle.
              </p>
              
              <h2>Département de Mathématiques</h2>
              <p>
                Le département de Mathématiques offre des formations en mathématiques fondamentales et appliquées, 
                préparant les étudiants à des carrières dans l'enseignement, la recherche et l'industrie.
              </p>
              
              <h2>Département de Physique</h2>
              <p>
                Le département de Physique propose des formations couvrant les différents domaines de la physique moderne, 
                avec un accent particulier sur les applications technologiques et l'énergie.
              </p>
              
              <h2>Département des Enseignements Généraux (DEG)</h2>
              <p>
                Le Département des Enseignements Généraux assure les formations transversales et complémentaires 
                nécessaires à la formation intégrale des étudiants dans toutes les filières.
              </p>
            </div>
            
            <div className="mt-4">
              <Link to="/structures/organisation" className="btn btn-primary me-2">
                Organisation générale
              </Link>
              <Link to="/structures/conseil" className="btn btn-primary">
                Conseil de la Faculté
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo 
  title="Départements | Faculté des Sciences" 
  description="Découvrez les 7 départements de la Faculté des Sciences et leurs spécialités"
/>

export default DepartementsPage 