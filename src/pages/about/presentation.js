import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

const Presentation = () => {
  const [activeTab, setActiveTab] = React.useState("presentation")

  return (
    <Layout>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="d-flex align-items-center mb-4">
              <div>
                <h1 className="display-4 mb-2 text-primary">Présentation de la Faculté</h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item"><Link to="/">Accueil</Link></li>
                    <li className="breadcrumb-item"><Link to="/about">Faculté</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Historique</li>
                  </ol>
                </nav>
              </div>
            </div>
            
            <div className="card shadow-sm mb-4 overflow-hidden">
              <div className="position-relative">
                <StaticImage
                  src="../../images/faculte.jpg"
                  alt="Faculté des Sciences"
                  height={400}
                  className="w-100"
                  objectFit="cover"
                  placeholder="blurred"
                />
                <div className="position-absolute bottom-0 start-0 w-100 p-4" style={{ 
                  background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))'
                }}>
                  <h2 className="text-white mb-0">Faculté des Sciences</h2>
                  <p className="text-white-50 mb-0">Excellence académique et innovation scientifique</p>
                </div>
              </div>
              
              <div className="card-body p-4">
                {/* Custom tabs without react-tabs */}
                <ul className="nav nav-tabs mb-4">
                  <li className="nav-item">
                    <button 
                      className={`nav-link ${activeTab === "presentation" ? "active" : ""}`}
                      onClick={() => setActiveTab("presentation")}
                    >
                      Présentation
                    </button>
                  </li>
                  <li className="nav-item">
                    <button 
                      className={`nav-link ${activeTab === "departements" ? "active" : ""}`}
                      onClick={() => setActiveTab("departements")}
                    >
                      Départements
                    </button>
                  </li>
                  <li className="nav-item">
                    <button 
                      className={`nav-link ${activeTab === "formations" ? "active" : ""}`}
                      onClick={() => setActiveTab("formations")}
                    >
                      Formations
                    </button>
                  </li>
                  <li className="nav-item">
                    <button 
                      className={`nav-link ${activeTab === "statistiques" ? "active" : ""}`}
                      onClick={() => setActiveTab("statistiques")}
                    >
                      Statistiques
                    </button>
                  </li>
                </ul>
                
                {/* Presentation Tab */}
                {activeTab === "presentation" && (
                  <div className="row">
                    <div className="col-md-8">
                      <h3 className="h4 text-primary mb-3">Notre Histoire</h3>
                      <p>
                        La Faculté des Sciences a été fondée en [année] avec pour mission de former des scientifiques 
                        de haut niveau et de contribuer au développement de la recherche scientifique au Maroc. 
                        Depuis sa création, notre faculté n'a cessé d'évoluer pour répondre aux besoins de la société 
                        et aux défis scientifiques contemporains.
                      </p>
                      
                      <div className="alert alert-info mt-4">
                        <div className="d-flex">
                          <div className="me-3">
                            <i className="bi bi-info-circle-fill fs-3"></i>
                          </div>
                          <div>
                            <h4 className="h5 mb-1">Saviez-vous que?</h4>
                            <p className="mb-0">Notre faculté est l'une des plus grandes facultés des sciences au Maroc, avec plus de 13 000 étudiants et 200 enseignants-chercheurs.</p>
                          </div>
                        </div>
                      </div>
                      
                      <h3 className="h4 text-primary mb-3 mt-4">Notre Mission</h3>
                      <div className="row g-3 mb-4">
                        <div className="col-md-4">
                          <div className="card h-100 border-primary">
                            <div className="card-body text-center">
                              <div className="mb-3">
                                <i className="bi bi-mortarboard fs-1 text-primary"></i>
                              </div>
                              <h4 className="h5">Formation</h4>
                              <p className="mb-0 small">Offrir une formation scientifique de qualité, adaptée aux besoins du marché du travail.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="card h-100 border-primary">
                            <div className="card-body text-center">
                              <div className="mb-3">
                                <i className="bi bi-search fs-1 text-primary"></i>
                              </div>
                              <h4 className="h5">Recherche</h4>
                              <p className="mb-0 small">Développer des activités de recherche innovantes et contribuer à l'avancement des connaissances.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="card h-100 border-primary">
                            <div className="card-body text-center">
                              <div className="mb-3">
                                <i className="bi bi-people fs-1 text-primary"></i>
                              </div>
                              <h4 className="h5">Service à la société</h4>
                              <p className="mb-0 small">Mettre notre expertise au service du développement socio-économique de notre région et pays.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-md-4">
                      <div className="card h-100 bg-light">
                        <div className="card-header bg-primary text-white">
                          <h3 className="h5 mb-0">Chiffres Clés</h3>
                        </div>
                        <div className="card-body">
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item d-flex justify-content-between align-items-center bg-transparent">
                              <span><i className="bi bi-people-fill me-2"></i>Étudiants</span>
                              <span className="badge bg-primary rounded-pill">13 307</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center bg-transparent">
                              <span><i className="bi bi-person-workspace me-2"></i>Enseignants-chercheurs</span>
                              <span className="badge bg-primary rounded-pill">200+</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center bg-transparent">
                              <span><i className="bi bi-building me-2"></i>Départements</span>
                              <span className="badge bg-primary rounded-pill">7</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center bg-transparent">
                              <span><i className="bi bi-journal-richtext me-2"></i>Masters</span>
                              <span className="badge bg-primary rounded-pill">31</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center bg-transparent">
                              <span><i className="bi bi-award me-2"></i>Formations doctorales</span>
                              <span className="badge bg-primary rounded-pill">6</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center bg-transparent">
                              <span><i className="bi bi-flask me-2"></i>Laboratoires</span>
                              <span className="badge bg-primary rounded-pill">20+</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center bg-transparent">
                              <span><i className="bi bi-graph-up me-2"></i>Projets de recherche</span>
                              <span className="badge bg-primary rounded-pill">20</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Departments Tab */}
                {activeTab === "departements" && (
                  <div>
                    <h3 className="h4 text-primary mb-3">Nos 7 Départements</h3>
                    <div className="row g-4">
                      {[
                        {
                          name: "Département de Biologie",
                          icon: "bi-tree",
                          description: "Le département de Biologie propose des formations dans les différents domaines des sciences de la vie, avec une attention particulière aux enjeux environnementaux et biotechnologiques.",
                          specialites: ["Biologie moléculaire", "Écologie", "Biotechnologie", "Microbiologie"]
                        },
                        {
                          name: "Département de Chimie",
                          icon: "bi-flask",
                          description: "Le département de Chimie offre des formations en chimie organique, inorganique, analytique et physique, préparant les étudiants à des carrières diverses dans l'industrie et la recherche.",
                          specialites: ["Chimie organique", "Chimie analytique", "Chimie des matériaux", "Chimie verte"]
                        },
                        {
                          name: "Département de Géologie",
                          icon: "bi-globe",
                          description: "Le département de Géologie forme des spécialistes des sciences de la Terre, capables d'intervenir dans les domaines des ressources minérales, de l'hydrogéologie, et de l'environnement.",
                          specialites: ["Géologie des ressources", "Hydrogéologie", "Géophysique", "Géotechnique"]
                        },
                        {
                          name: "Département d'Informatique",
                          icon: "bi-cpu",
                          description: "Le département d'Informatique offre des formations couvrant les différents aspects des sciences informatiques, du développement logiciel aux systèmes d'information et à l'intelligence artificielle.",
                          specialites: ["Intelligence artificielle", "Développement web", "Réseaux", "Sécurité informatique"]
                        },
                        {
                          name: "Département de Mathématiques",
                          icon: "bi-calculator",
                          description: "Le département de Mathématiques offre des formations en mathématiques fondamentales et appliquées, préparant les étudiants à des carrières dans l'enseignement, la recherche et l'industrie.",
                          specialites: ["Analyse", "Algèbre", "Statistiques", "Mathématiques appliquées"]
                        },
                        {
                          name: "Département de Physique",
                          icon: "bi-atom",
                          description: "Le département de Physique propose des formations couvrant les différents domaines de la physique moderne, avec un accent particulier sur les applications technologiques et l'énergie.",
                          specialites: ["Physique des matériaux", "Énergies renouvelables", "Physique médicale", "Électronique"]
                        },
                        {
                          name: "Département des Enseignements Généraux (DEG)",
                          icon: "bi-book",
                          description: "Le Département des Enseignements Généraux assure les formations transversales et complémentaires nécessaires à la formation intégrale des étudiants dans toutes les filières.",
                          specialites: ["Langues et communication", "Méthodologie", "Soft skills", "Culture générale"]
                        }
                      ].map((dept, index) => (
                        <div className="col-md-6" key={index}>
                          <div className="card h-100 shadow-sm">
                            <div className="card-body">
                              <div className="d-flex align-items-center mb-3">
                                <div className="me-3 bg-primary text-white rounded-circle p-3">
                                  <i className={`bi ${dept.icon} fs-4`}></i>
                                </div>
                                <h3 className="h5 mb-0">{dept.name}</h3>
                              </div>
                              <p>{dept.description}</p>
                              <h4 className="h6 text-primary">Spécialités:</h4>
                              <div className="d-flex flex-wrap gap-2 mt-2">
                                {dept.specialites.map((spec, i) => (
                                  <span key={i} className="badge bg-light text-dark border">{spec}</span>
                                ))}
                              </div>
                            </div>
                            <div className="card-footer bg-white">
                              <button className="btn btn-sm btn-outline-primary">En savoir plus</button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Formations Tab */}
                {activeTab === "formations" && (
                  <div className="row">
                    <div className="col-lg-8">
                      <h3 className="h4 text-primary mb-3">Nos Formations</h3>
                      
                      <div className="card mb-4">
                        <div className="card-header bg-primary text-white">
                          <h4 className="h5 mb-0">Licences</h4>
                        </div>
                        <div className="card-body">
                          <p>Nos formations en licence offrent une solide base scientifique dans les différentes disciplines. Les étudiants peuvent choisir parmi plusieurs filières selon leur domaine d'intérêt.</p>
                          <div className="alert alert-light">
                            <strong>Nombre d'étudiants en Licence:</strong> 7960
                          </div>
                        </div>
                      </div>
                      
                      <div className="card mb-4">
                        <div className="card-header bg-primary text-white">
                          <h4 className="h5 mb-0">Masters</h4>
                        </div>
                        <div className="card-body">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="card mb-3">
                                <div className="card-body">
                                  <h5 className="card-title">Masters Spécialisés</h5>
                                  <p className="card-text">Nos 18 masters spécialisés sont conçus pour répondre aux besoins spécifiques du marché du travail et offrir des compétences professionnelles avancées.</p>
                                </div>
                                <div className="card-footer bg-white">
                                  <span className="badge bg-primary">18 formations</span>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="card mb-3">
                                <div className="card-body">
                                  <h5 className="card-title">Masters de Recherche</h5>
                                  <p className="card-text">Nos 13 masters de recherche préparent les étudiants à poursuivre des études doctorales et à développer des compétences en recherche scientifique.</p>
                                </div>
                                <div className="card-footer bg-white">
                                  <span className="badge bg-primary">13 formations</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="alert alert-light">
                            <strong>Nombre d'étudiants en Master:</strong> 2567
                          </div>
                        </div>
                      </div>
                      
                      <div className="card mb-4">
                        <div className="card-header bg-primary text-white">
                          <h4 className="h5 mb-0">Formations Doctorales</h4>
                        </div>
                        <div className="card-body">
                          <p>Nos 6 formations doctorales couvrent l'ensemble des domaines scientifiques de la faculté:</p>
                          <div className="row g-3">
                            {[
                              "Sciences de la vie et de l'environnement",
                              "Physique et applications",
                              "Sciences de la Terre",
                              "Chimie fondamentale et appliquée",
                              "Mathématiques, informatiques et applications",
                              "Didactique des Sciences et Ingénierie Pédagogique"
                            ].map((formation, index) => (
                              <div className="col-md-6" key={index}>
                                <div className="card h-100 bg-light">
                                  <div className="card-body py-3">
                                    <div className="d-flex align-items-center">
                                      <div className="me-3 text-primary">
                                        <i className="bi bi-check-circle-fill"></i>
                                      </div>
                                      <div>{formation}</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="alert alert-light mt-3">
                            <strong>Nombre d'étudiants en Doctorat:</strong> 1539
                          </div>
                        </div>
                      </div>
                      
                      <div className="card mb-4">
                        <div className="card-header bg-primary text-white">
                          <h4 className="h5 mb-0">Formations Continues</h4>
                        </div>
                        <div className="card-body">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="card mb-3">
                                <div className="card-body">
                                  <h5 className="card-title">Licence d'Université Spécialisée (LUS)</h5>
                                  <p className="card-text">Nos 24 LUS permettent aux professionnels de compléter leur formation ou de se reconvertir dans un nouveau domaine.</p>
                                  <div className="d-flex justify-content-between align-items-center mt-3">
                                    <span>Nombre de formations:</span>
                                    <span className="badge bg-primary">24</span>
                                  </div>
                                  <div className="d-flex justify-content-between align-items-center mt-2">
                                    <span>Étudiants inscrits:</span>
                                    <span className="badge bg-secondary">673</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="card mb-3">
                                <div className="card-body">
                                  <h5 className="card-title">Master d'Université Spécialisé (MUS)</h5>
                                  <p className="card-text">Nos 12 MUS offrent une formation avancée pour les professionnels souhaitant développer leur expertise.</p>
                                  <div className="d-flex justify-content-between align-items-center mt-3">
                                    <span>Nombre de formations:</span>
                                    <span className="badge bg-primary">12</span>
                                  </div>
                                  <div className="d-flex justify-content-between align-items-center mt-2">
                                    <span>Étudiants inscrits:</span>
                                    <span className="badge bg-secondary">571</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <h3 className="h4 text-primary mb-3">Projets de Recherche</h3>
                      <div className="card mb-4">
                        <div className="card-body">
                          <p>Notre faculté mène actuellement 20 projets et contrats de recherche dans divers domaines scientifiques, en collaboration avec des partenaires nationaux et internationaux.</p>
                          <div className="progress mt-3" style={{ height: "25px" }}>
                            <div className="progress-bar bg-success" role="progressbar" style={{ width: "35%" }} aria-valuenow="35" aria-valuemin="0" aria-valuemax="100">Projets nationaux (35%)</div>
                            <div className="progress-bar bg-primary" role="progressbar" style={{ width: "45%" }} aria-valuenow="45" aria-valuemin="0" aria-valuemax="100">Projets internationaux (45%)</div>
                            <div className="progress-bar bg-info" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">Contrats industriels (20%)</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-lg-4">
                      <div className="card sticky-top" style={{ top: "1rem" }}>
                        <div className="card-header bg-primary text-white">
                          <h3 className="h5 mb-0">Répartition des étudiants</h3>
                        </div>
                        <div className="card-body">
                          <div className="mb-4 text-center">
                            <div className="display-6 text-primary mb-2">13 307</div>
                            <div className="text-muted">Étudiants au total</div>
                          </div>
                          
                          <div className="mt-3">
                            <div className="d-flex justify-content-between align-items-center mb-2">
                              <span>Licence</span>
                              <span className="badge bg-primary">7960 étudiants</span>
                            </div>
                            <div className="progress mb-3" style={{ height: "10px" }}>
                              <div className="progress-bar bg-primary" role="progressbar" style={{ width: "60%" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            
                            <div className="d-flex justify-content-between align-items-center mb-2">
                              <span>Master</span>
                              <span className="badge bg-success">2567 étudiants</span>
                            </div>
                            <div className="progress mb-3" style={{ height: "10px" }}>
                              <div className="progress-bar bg-success" role="progressbar" style={{ width: "19%" }} aria-valuenow="19" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            
                            <div className="d-flex justify-content-between align-items-center mb-2">
                              <span>Doctorat</span>
                              <span className="badge bg-warning">1539 étudiants</span>
                            </div>
                            <div className="progress mb-3" style={{ height: "10px" }}>
                              <div className="progress-bar bg-warning" role="progressbar" style={{ width: "12%" }} aria-valuenow="12" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            
                            <div className="d-flex justify-content-between align-items-center mb-2">
                              <span>Formation Continue</span>
                              <span className="badge bg-danger">1244 étudiants</span>
                            </div>
                            <div className="progress mb-3" style={{ height: "10px" }}>
                              <div className="progress-bar bg-danger" role="progressbar" style={{ width: "9%" }} aria-valuenow="9" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Statistics Tab */}
                {activeTab === "statistiques" && (
                  <div>
                    <h3 className="h4 text-primary mb-3">Statistiques des Étudiants (2023/2024)</h3>
                    
                    <div className="card mb-4">
                      <div className="card-header bg-primary text-white">
                        <h4 className="h5 mb-0">Formations Initiales</h4>
                      </div>
                      <div className="card-body">
                        <div className="table-responsive">
                          <table className="table table-bordered table-hover">
                            <thead className="table-light">
                              <tr>
                                <th rowSpan="2">Nationalité</th>
                                <th colSpan="3" className="text-center">Formations Initiales</th>
                                <th rowSpan="2">Total</th>
                              </tr>
                              <tr>
                                <th>Licence</th>
                                <th>Master</th>
                                <th>Doctorat</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Marocain</td>
                                <td>7900</td>
                                <td>2552</td>
                                <td>1532</td>
                                <td>11984</td>
                              </tr>
                              <tr>
                                <td>Étranger</td>
                                <td>60</td>
                                <td>15</td>
                                <td>4</td>
                                <td>79</td>
                              </tr>
                              <tr className="table-secondary">
                                <td><strong>Total</strong></td>
                                <td><strong>7960</strong></td>
                                <td><strong>2567</strong></td>
                                <td><strong>1539</strong></td>
                                <td><strong>12063</strong></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        
                        <div className="alert alert-info mt-4">
                          <p className="mb-0">
                            <strong>Total des étudiants inscrits en 2023/2024:</strong> 12063 en formations initiales, 
                            plus 1244 en formations continues, soit un total de 13307 étudiants.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="row g-4">
                      <div className="col-md-6">
                        <div className="card h-100">
                          <div className="card-header bg-primary text-white">
                            <h4 className="h5 mb-0">Formations Continues</h4>
                          </div>
                          <div className="card-body">
                            <div className="table-responsive">
                              <table className="table table-bordered">
                                <thead className="table-light">
                                  <tr>
                                    <th>Type</th>
                                    <th>Nombre de formations</th>
                                    <th>Étudiants inscrits</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>LUS</td>
                                    <td>24</td>
                                    <td>673</td>
                                  </tr>
                                  <tr>
                                    <td>MUS</td>
                                    <td>12</td>
                                    <td>571</td>
                                  </tr>
                                  <tr className="table-secondary">
                                    <td><strong>Total</strong></td>
                                    <td><strong>36</strong></td>
                                    <td><strong>1244</strong></td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="col-md-6">
                        <div className="card h-100">
                          <div className="card-header bg-primary text-white">
                            <h4 className="h5 mb-0">Répartition par Genre</h4>
                          </div>
                          <div className="card-body">
                            <div className="text-center mb-4">
                              <div className="row">
                                <div className="col-6">
                                  <div className="display-6 text-primary">58%</div>
                                  <div>Femmes</div>
                                </div>
                                <div className="col-6">
                                  <div className="display-6 text-primary">42%</div>
                                  <div>Hommes</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="d-flex justify-content-between">
              <Link to="/" className="btn btn-outline-primary">
                Retour à l'accueil
              </Link>
              <Link to="/about/mot-du-doyen" className="btn btn-primary">
                Mot du Doyen
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo 
  title="Présentation | Faculté des Sciences" 
  description="Découvrez les 7 départements, les formations et les statistiques de la Faculté des Sciences"
/>

export default Presentation 