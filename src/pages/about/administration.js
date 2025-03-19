import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

const AdministrationPage = () => {
  return (
    <Layout>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h1 className="display-4 mb-4 text-primary">Administration</h1>
            
            <nav aria-label="breadcrumb" className="mb-4">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Accueil</Link></li>
                <li className="breadcrumb-item"><Link to="/about">Faculté</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Administration</li>
              </ol>
            </nav>
            
            <div className="card shadow-sm mb-4">
              <div className="card-body p-4">
                <p className="lead">
                  L'administration de la Faculté des Sciences est composée d'une équipe dévouée qui assure 
                  le bon fonctionnement de l'établissement et la qualité des services offerts aux étudiants 
                  et au personnel.
                </p>
                
                <h2 className="h3 text-primary mt-4 mb-3">Équipe de Direction</h2>
                
                <div className="row g-4 mb-5">
                  <div className="col-md-6">
                    <div className="card h-100 shadow-sm">
                      <div className="card-body text-center p-4">
                        <div className="mb-3">
                          <StaticImage
                            src="../../images/doyen.jpg"
                            alt="Doyen de la Faculté"
                            width={150}
                            height={150}
                            className="rounded-circle shadow"
                            objectFit="cover"
                            placeholder="blurred"
                          />
                        </div>
                        <h3 className="h4 mb-1">Pr. EBN TOUHAMI Mohamed</h3>
                        <p className="text-muted mb-3">Doyen de la Faculté</p>
                        <p className="small">
                          Le Doyen assure la direction de la faculté. Il préside le Conseil de la Faculté 
                          et veille à l'exécution de ses décisions. Il coordonne l'ensemble des activités 
                          de l'établissement.
                        </p>
                        <Link to="/about/mot-du-doyen" className="btn btn-sm btn-outline-primary mt-2">
                          Lire le mot du Doyen
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="card h-100 shadow-sm">
                      <div className="card-body p-4">
                        <h3 className="h5 mb-3 text-primary">Vice-Doyens</h3>
                        
                        <div className="d-flex mb-4">
                          <div className="me-3">
                            <div className="bg-primary text-white rounded-circle p-2" style={{ width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                              <i className="bi bi-mortarboard"></i>
                            </div>
                          </div>
                          <div>
                            <h4 className="h6 mb-1">Pr. EL WAHBI Bouazza</h4>
                            <p className="text-muted small mb-2">Vice-Doyen chargé des affaires pédagogiques</p>
                            <p className="small">
                              Responsable de la coordination des activités pédagogiques, des programmes de formation 
                              et des affaires estudiantines.
                            </p>
                          </div>
                        </div>
                        
                        <div className="d-flex">
                          <div className="me-3">
                            <div className="bg-primary text-white rounded-circle p-2" style={{ width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                              <i className="bi bi-search"></i>
                            </div>
                          </div>
                          <div>
                            <h4 className="h6 mb-1">Pr. CHAKIRI Saïd</h4>
                            <p className="text-muted small mb-2">Vice-Doyen chargé de la recherche scientifique et de la coopération</p>
                            <p className="small">
                              Responsable de la coordination des activités de recherche, des laboratoires 
                              et des projets scientifiques.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <h2 className="h3 text-primary mt-4 mb-3">Services Administratifs</h2>
                
                <div className="row g-4">
                  <div className="col-md-4">
                    <div className="card h-100">
                      <div className="card-body">
                        <h3 className="h5 mb-3">
                          <i className="bi bi-person-badge me-2 text-primary"></i>
                          Secrétariat Général
                        </h3>
                        <p className="small">
                          Coordonne l'ensemble des services administratifs et assure la gestion quotidienne 
                          de la faculté sous l'autorité du Doyen.
                        </p>
                        <p className="small mb-0">
                          <strong>Responsable:</strong> M./Mme [Nom du Secrétaire Général]
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-4">
                    <div className="card h-100">
                      <div className="card-body">
                        <h3 className="h5 mb-3">
                          <i className="bi bi-mortarboard me-2 text-primary"></i>
                          Service des Affaires Estudiantines
                        </h3>
                        <p className="small">
                          Gère les inscriptions, les examens, les diplômes et toutes les questions 
                          relatives à la scolarité des étudiants.
                        </p>
                        <p className="small mb-0">
                          <strong>Responsable:</strong> M./Mme [Nom du Responsable]
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-4">
                    <div className="card h-100">
                      <div className="card-body">
                        <h3 className="h5 mb-3">
                          <i className="bi bi-people me-2 text-primary"></i>
                          Service des Ressources Humaines
                        </h3>
                        <p className="small">
                          Gère le personnel enseignant et administratif, les recrutements, 
                          les carrières et la formation continue.
                        </p>
                        <p className="small mb-0">
                          <strong>Responsable:</strong> M./Mme [Nom du Responsable]
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-4">
                    <div className="card h-100">
                      <div className="card-body">
                        <h3 className="h5 mb-3">
                          <i className="bi bi-cash-coin me-2 text-primary"></i>
                          Service Financier
                        </h3>
                        <p className="small">
                          Gère le budget, les achats, les marchés publics et la comptabilité 
                          de la faculté.
                        </p>
                        <p className="small mb-0">
                          <strong>Responsable:</strong> M./Mme [Nom du Responsable]
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-4">
                    <div className="card h-100">
                      <div className="card-body">
                        <h3 className="h5 mb-3">
                          <i className="bi bi-book me-2 text-primary"></i>
                          Bibliothèque
                        </h3>
                        <p className="small">
                          Gère les ressources documentaires, les prêts d'ouvrages et l'accès 
                          aux bases de données scientifiques.
                        </p>
                        <p className="small mb-0">
                          <strong>Responsable:</strong> M./Mme [Nom du Responsable]
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-4">
                    <div className="card h-100">
                      <div className="card-body">
                        <h3 className="h5 mb-3">
                          <i className="bi bi-pc-display me-2 text-primary"></i>
                          Service Informatique
                        </h3>
                        <p className="small">
                          Assure la maintenance du parc informatique, la gestion des réseaux 
                          et le développement des applications.
                        </p>
                        <p className="small mb-0">
                          <strong>Responsable:</strong> M./Mme [Nom du Responsable]
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="alert alert-info mt-4">
                  <div className="d-flex">
                    <div className="me-3">
                      <i className="bi bi-info-circle-fill fs-4"></i>
                    </div>
                    <div>
                      <h4 className="h5 mb-1">Horaires d'ouverture</h4>
                      <p className="mb-0">
                        Les services administratifs sont ouverts du lundi au vendredi, de 8h30 à 16h30.
                        Pour toute information, vous pouvez contacter le standard au [numéro de téléphone].
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="d-flex justify-content-between">
              <Link to="/about" className="btn btn-outline-primary">
                <i className="bi bi-arrow-left me-2"></i>Retour
              </Link>
              <Link to="/contact" className="btn btn-primary">
                Nous contacter<i className="bi bi-arrow-right ms-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo 
  title="Administration | Faculté des Sciences" 
  description="Découvrez l'équipe administrative de la Faculté des Sciences et les différents services à votre disposition"
/>

export default AdministrationPage 