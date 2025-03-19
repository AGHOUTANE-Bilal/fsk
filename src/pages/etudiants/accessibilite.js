import React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { Link } from "gatsby"

const AccessibilitePage = () => {
  return (
    <Layout>
      <div className="container py-5">
        <div className="row mb-4">
          <div className="col-12">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Accueil</Link></li>
                <li className="breadcrumb-item"><Link to="/etudiants">Étudiants</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Accessibilité</li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <h1 className="mb-4 text-dark">Accessibilité</h1>
            
            <div className="card mb-4">
              <div className="card-header bg-primary text-white">
                <h2 className="h5 mb-0">HANDI-AMENAGEMENT</h2>
              </div>
              <div className="card-body bg-light">
                <p className="lead mb-4 text-dark">
                  HANDI-AMENAGEMENT est une plateforme numérique qui facilite l'inscription des Étudiants en Situation de Handicap (ESH) 
                  et le recensement de leurs besoins spécifiques selon le type de handicap, afin de mettre en place les solutions et/ou 
                  actions adaptées et d'aménager au mieux leurs parcours d'études et leurs examens. Et par suite leurs permettre d'étudier 
                  dans les conditions les plus favorables garantissant l'égalité de chances, assurant plus d'autonomie, et menant vers une 
                  meilleure intégration.
                </p>

                <div className="mb-4">
                  <h3 className="h5 text-dark">Fonctionnalités</h3>
                  <p className="text-dark">
                    A tout moment, les étudiants en situation de Handicap peuvent se connecter facilement à cette application et communiquer 
                    leurs besoins spécifiques. Soit pour les examens prévus (Le temps majoré, l'accompagnent, salle à part …), soit pour les 
                    aides à compenser les difficultés d'écriture manuelle ou de lecture.
                  </p>
                  <p className="text-dark">
                    Ces aides sont multiples et favorisent l'accès aux nouvelles technologies de l'information : périphériques ou logiciels 
                    adaptés (des ordinateurs équipés de logiciels et de connections à Internet, imprimante braille, bloc-notes braille, scanner, 
                    la loupe électronique, système de traitement de son, logiciel de reconnaissance de caractères et de translation, système de 
                    la synthèse vocale ….).
                  </p>
                </div>

                <div className="alert alert-info">
                  <p className="mb-0 text-dark">
                    Pour plus d'informations, visitez la plateforme HANDI-AMENAGEMENT :{' '}
                    <a href="https://handi-amg.uit.ac.ma/" target="_blank" rel="noopener noreferrer" className="alert-link">
                      https://handi-amg.uit.ac.ma/
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AccessibilitePage

export const Head = () => <Seo title="Accessibilité | Faculté des Sciences de Kénitra" description="Informations sur les services d'accessibilité et d'accompagnement pour les étudiants en situation de handicap à la Faculté des Sciences de Kénitra" /> 