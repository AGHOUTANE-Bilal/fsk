import * as React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

const ReglementsPage = () => {
  return (
    <Layout>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h1 className="display-4 mb-4 text-primary">Cadre réglementaire et juridique</h1>
            
            <nav aria-label="breadcrumb" className="mb-4">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Accueil</Link></li>
                <li className="breadcrumb-item"><Link to="/about">À propos</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Règlements</li>
              </ol>
            </nav>
            
            {/* Introduction */}
            <div className="card bg-gradient shadow-sm mb-5 border-0">
              <div className="card-body p-4 text-center" style={{ background: "linear-gradient(135deg, #0056b3 0%, #003366 100%)" }}>
                <h2 className="text-white mb-3">Fondements juridiques de notre institution</h2>
                <p className="lead text-white mb-0">
                  Découvrez les textes législatifs et réglementaires qui encadrent le fonctionnement 
                  de la Faculté des Sciences de Kénitra
                </p>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="row g-4">
              {/* La Loi 01-00 */}
              <div className="col-md-6">
                <div className="card h-100 shadow-sm border-0 hover-shadow">
                  <div className="card-header bg-primary text-white py-3">
                    <h2 className="h4 mb-0">La Loi 01-00</h2>
                  </div>
                  <div className="card-body">
                    <p>
                      La Faculté de Sciences de Kénitra est régie dans son fonctionnement par la loi 01-00 portant 
                      organisation de l'enseignement supérieur, adoptée par la Chambre des conseillers et la Chambre 
                      des représentants publiée en langue arabe dans l'édition générale du Bulletin officiel № 4798 
                      du 21 safar 1421 (25 mai 2000).
                    </p>
                    <div className="d-grid">
                      <button className="btn btn-outline-primary" type="button">
                        <i className="bi bi-file-pdf me-2"></i>Télécharger (Français)
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* La Charte Nationale */}
              <div className="col-md-6">
                <div className="card h-100 shadow-sm border-0 hover-shadow">
                  <div className="card-header bg-primary text-white py-3">
                    <h2 className="h4 mb-0">La Charte Nationale d′Education et de Formation</h2>
                  </div>
                  <div className="card-body d-flex flex-column">
                    <p>
                      Document fondateur qui définit les orientations et les objectifs du système éducatif marocain,
                      établissant un cadre de référence pour toutes les institutions d'enseignement.
                    </p>
                    <div className="mt-auto d-grid">
                      <button className="btn btn-outline-primary" type="button">
                        <i className="bi bi-file-pdf me-2"></i>Télécharger (Français)
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* ENSEIGNEMENT SUPÉRIEUR UNIVERSITAIRE */}
            <div className="card shadow-sm border-0 mt-5 mb-5">
              <div className="card-header bg-gradient py-3" style={{ background: "linear-gradient(90deg, #0056b3 0%, #007bff 100%)" }}>
                <h2 className="h3 text-white mb-0">ENSEIGNEMENT SUPÉRIEUR UNIVERSITAIRE</h2>
              </div>
              <div className="card-body p-4">
                <div className="row g-4">
                  {/* Création des universités */}
                  <div className="col-lg-6">
                    <div className="card h-100 border-0 shadow-sm">
                      <div className="card-header bg-light">
                        <h3 className="h5 mb-0">Création des universités, des établissements et des cités universitaires</h3>
                      </div>
                      <div className="card-body">
                        <div className="list-group list-group-flush">
                          <div className="list-group-item d-flex justify-content-between align-items-center px-0">
                            <span>Dahir portant loi n°1.75.398 portant création d'universités</span>
                            <button className="btn btn-sm btn-primary">
                              <i className="bi bi-file-pdf me-1"></i>Français
                            </button>
                          </div>
                          <div className="list-group-item d-flex justify-content-between align-items-center px-0">
                            <span>Décret n° 2-90-554 relatif aux établissements universitaires et aux cités universitaires</span>
                            <button className="btn btn-sm btn-primary">
                              <i className="bi bi-file-pdf me-1"></i>Français
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Modalités d′appel aux candidatures */}
                  <div className="col-lg-6">
                    <div className="card h-100 border-0 shadow-sm">
                      <div className="card-header bg-light">
                        <h3 className="h5 mb-0">Modalités d′appel aux candidatures à la présidence d′universités</h3>
                      </div>
                      <div className="card-body">
                        <div className="list-group list-group-flush">
                          <div className="list-group-item d-flex justify-content-between align-items-center px-0">
                            <span>Décret n° 2.01.1999 fixant la composition du comité chargé d'examiner les candidatures...</span>
                            <button className="btn btn-sm btn-primary">
                              <i className="bi bi-file-pdf me-1"></i>Français
                            </button>
                          </div>
                          <div className="list-group-item d-flex justify-content-between align-items-center px-0">
                            <span>Décret n° 2.01.2352 chargeant le ministre de l'enseignement supérieur...</span>
                            <button className="btn btn-sm btn-primary">
                              <i className="bi bi-file-pdf me-1"></i>Arabe
                            </button>
                          </div>
                          <div className="list-group-item d-flex justify-content-between align-items-center px-0">
                            <span>Arrêté du ministre n° 1774-01 fixant les modalités d'appel aux candidatures...</span>
                            <button className="btn btn-sm btn-primary">
                              <i className="bi bi-file-pdf me-1"></i>Arabe
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* INSTANCES UNIVERSITAIRES */}
            <div className="card shadow-sm border-0 mb-5">
              <div className="card-header bg-gradient py-3" style={{ background: "linear-gradient(90deg, #0056b3 0%, #007bff 100%)" }}>
                <h2 className="h3 text-white mb-0">INSTANCES UNIVERSITAIRES</h2>
              </div>
              <div className="card-body p-4">
                <div className="row g-4">
                  <div className="col-md-6">
                    <ul className="nav nav-tabs" id="instancesTabs" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="conseils-univ-tab" data-bs-toggle="tab" data-bs-target="#conseils-univ" type="button" role="tab" aria-controls="conseils-univ" aria-selected="true">Conseils des universités</button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="conseil-gestion-tab" data-bs-toggle="tab" data-bs-target="#conseil-gestion" type="button" role="tab" aria-controls="conseil-gestion" aria-selected="false">Conseil de gestion</button>
                      </li>
                    </ul>
                    <div className="tab-content p-3 border border-top-0 rounded-bottom" id="instancesTabsContent">
                      <div className="tab-pane fade show active" id="conseils-univ" role="tabpanel" aria-labelledby="conseils-univ-tab">
                        <div className="list-group list-group-flush">
                          <div className="list-group-item d-flex justify-content-between align-items-center px-0">
                            <span>Décret n° 2.01.2326 fixant les modalités de désignation et d'élection...</span>
                            <button className="btn btn-sm btn-primary">
                              <i className="bi bi-file-pdf me-1"></i>Arabe
                            </button>
                          </div>
                          <div className="list-group-item d-flex justify-content-between align-items-center px-0">
                            <span>Arrêté du ministre n° 1269-02 fixant les modalités d'organisation des élections...</span>
                            <button className="btn btn-sm btn-primary">
                              <i className="bi bi-file-pdf me-1"></i>Arabe
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="conseil-gestion" role="tabpanel" aria-labelledby="conseil-gestion-tab">
                        <div className="list-group list-group-flush">
                          <div className="list-group-item d-flex justify-content-between align-items-center px-0">
                            <span>Décret n° 2.01.2327 fixant les modalités de désignation des membres...</span>
                            <button className="btn btn-sm btn-primary">
                              <i className="bi bi-file-pdf me-1"></i>Arabe
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <ul className="nav nav-tabs" id="instancesTabs2" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="conseils-etab-tab" data-bs-toggle="tab" data-bs-target="#conseils-etab" type="button" role="tab" aria-controls="conseils-etab" aria-selected="true">Conseils des établissements</button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="comm-scient-tab" data-bs-toggle="tab" data-bs-target="#comm-scient" type="button" role="tab" aria-controls="comm-scient" aria-selected="false">Commission scientifique</button>
                      </li>
                    </ul>
                    <div className="tab-content p-3 border border-top-0 rounded-bottom" id="instancesTabsContent2">
                      <div className="tab-pane fade show active" id="conseils-etab" role="tabpanel" aria-labelledby="conseils-etab-tab">
                        <div className="list-group list-group-flush">
                          <div className="list-group-item d-flex justify-content-between align-items-center px-0">
                            <span>Décret n° 2.01.2328 fixant la composition des conseils des établissements...</span>
                            <button className="btn btn-sm btn-primary">
                              <i className="bi bi-file-pdf me-1"></i>Arabe
                            </button>
                          </div>
                          <div className="list-group-item d-flex justify-content-between align-items-center px-0">
                            <span>Arrêté du ministre n° 1270-02 fixant les modalités d'élections...</span>
                            <button className="btn btn-sm btn-primary">
                              <i className="bi bi-file-pdf me-1"></i>Arabe
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="comm-scient" role="tabpanel" aria-labelledby="comm-scient-tab">
                        <div className="list-group list-group-flush">
                          <div className="list-group-item d-flex justify-content-between align-items-center px-0">
                            <span>Décret n° 2.01.2329 fixant la composition et le fonctionnement...</span>
                            <button className="btn btn-sm btn-primary">
                              <i className="bi bi-file-pdf me-1"></i>Arabe
                            </button>
                          </div>
                          <div className="list-group-item d-flex justify-content-between align-items-center px-0">
                            <span>Arrêté du ministre n° 1271-02 fixant les modalités d'élections...</span>
                            <button className="btn btn-sm btn-primary">
                              <i className="bi bi-file-pdf me-1"></i>Arabe
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* VOCATION DES ÉTABLISSEMENTS UNIVERSITAIRES */}
            <div className="card shadow-sm border-0 mb-5">
              <div className="card-header bg-gradient py-3" style={{ background: "linear-gradient(90deg, #0056b3 0%, #007bff 100%)" }}>
                <h2 className="h3 text-white mb-0">VOCATION DES ÉTABLISSEMENTS UNIVERSITAIRES</h2>
              </div>
              <div className="card-body p-4">
                <div className="mb-4">
                  <h3 className="h4 mb-3">La vocation des établissements universitaires</h3>
                  <div className="d-flex align-items-center p-3 bg-light rounded">
                    <div className="flex-grow-1">
                      <p className="mb-0">Décret n° 2-04-89 du 18 rabii II 1425 (7 juin 2004) fixant la vocation des établissements universitaires, les cycles des études supérieures ainsi que les diplômes nationaux correspondants</p>
                    </div>
                    <div className="ms-3">
                      <button className="btn btn-primary">
                        <i className="bi bi-file-pdf me-2"></i>Arabe
                      </button>
                    </div>
                  </div>
                </div>
                
                <h3 className="h4 mb-3">Les cahiers des normes pédagogiques nationales des établissements universitaires</h3>
                
                <div className="row g-4">
                  <div className="col-md-4">
                    <div className="card h-100 border-primary">
                      <div className="card-header bg-primary text-white">
                        <h4 className="h5 mb-0">Cycle Licence</h4>
                      </div>
                      <div className="card-body">
                        <p className="small">Arrêté du ministre n°208214 du 5 Di Elhijja 1435 (30 septembre 2014) approuvant le cahier des normes pédagogiques nationales du cycle de la Licence</p>
                        <div className="d-grid">
                          <button className="btn btn-sm btn-outline-primary">
                            <i className="bi bi-file-pdf me-1"></i>Arabe
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-4">
                    <div className="card h-100 border-primary">
                      <div className="card-header bg-primary text-white">
                        <h4 className="h5 mb-0">Cycle Master</h4>
                      </div>
                      <div className="card-body">
                        <p className="small">Arrêté du ministre n°208214 du 5 Di Elhijja 1435 (30 septembre 2014) approuvant le cahier des normes pédagogiques nationales du cycle de Master</p>
                        <div className="d-grid">
                          <button className="btn btn-sm btn-outline-primary">
                            <i className="bi bi-file-pdf me-1"></i>Arabe
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-4">
                    <div className="card h-100 border-primary">
                      <div className="card-header bg-primary text-white">
                        <h4 className="h5 mb-0">Cycle Doctorat</h4>
                      </div>
                      <div className="card-body">
                        <div className="accordion" id="accordionDoctorat">
                          <div className="accordion-item border-0">
                            <h2 className="accordion-header" id="headingOne">
                              <button className="accordion-button collapsed p-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                <small>Décret n° 2-96-796 du 11 chaoual 1417...</small>
                              </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionDoctorat">
                              <div className="accordion-body p-2">
                                <div className="d-grid">
                                  <button className="btn btn-sm btn-outline-primary">
                                    <i className="bi bi-file-pdf me-1"></i>Arabe
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item border-0">
                            <h2 className="accordion-header" id="headingTwo">
                              <button className="accordion-button collapsed p-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <small>Arrêté du ministre n°1371.07 du 22 ramadan 1429...</small>
                              </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionDoctorat">
                              <div className="accordion-body p-2">
                                <div className="d-grid">
                                  <button className="btn btn-sm btn-outline-primary">
                                    <i className="bi bi-file-pdf me-1"></i>Arabe
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item border-0">
                            <h2 className="accordion-header" id="headingThree">
                              <button className="accordion-button collapsed p-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <small>Arrêté du ministre n° 140.09 du 25 moharrem 1430...</small>
                              </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionDoctorat">
                              <div className="accordion-body p-2">
                                <div className="d-grid">
                                  <button className="btn btn-sm btn-outline-primary">
                                    <i className="bi bi-file-pdf me-1"></i>Arabe
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Quick Access */}
            <div className="card bg-light border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h3 className="h4 mb-3">Accès rapide aux documents</h3>
                <div className="row g-3">
                  <div className="col-md-3 col-6">
                    <div className="d-grid">
                      <button className="btn btn-outline-primary p-3 h-100">
                        <i className="bi bi-file-earmark-text fs-3 d-block mb-2"></i>
                        Loi 01-00
                      </button>
                    </div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="d-grid">
                      <button className="btn btn-outline-primary p-3 h-100">
                        <i className="bi bi-file-earmark-text fs-3 d-block mb-2"></i>
                        Charte Nationale
                      </button>
                    </div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="d-grid">
                      <button className="btn btn-outline-primary p-3 h-100">
                        <i className="bi bi-file-earmark-text fs-3 d-block mb-2"></i>
                        Normes Licence
                      </button>
                    </div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="d-grid">
                      <button className="btn btn-outline-primary p-3 h-100">
                        <i className="bi bi-file-earmark-text fs-3 d-block mb-2"></i>
                        Normes Master
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="d-flex justify-content-between">
              <Link to="/about" className="btn btn-outline-primary">
                Retour à À propos
              </Link>
              <Link to="/contact" className="btn btn-primary">
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo 
  title="Cadre réglementaire et juridique | Faculté des Sciences" 
  description="Consultez le cadre réglementaire et juridique de la Faculté des Sciences de Kénitra : lois, décrets, règlements et normes pédagogiques."
/>

export default ReglementsPage 