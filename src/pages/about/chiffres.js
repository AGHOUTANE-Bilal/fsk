import * as React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

const ChiffresPage = () => {
  return (
    <Layout>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h1 className="display-4 mb-4 text-primary">La FSK en chiffres</h1>
            
            <nav aria-label="breadcrumb" className="mb-4">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Accueil</Link></li>
                <li className="breadcrumb-item"><Link to="/about">Faculté</Link></li>
                <li className="breadcrumb-item active" aria-current="page">La FSK en chiffres</li>
              </ol>
            </nav>
            
            <div className="card shadow-sm mb-4">
              <div className="card-body p-4">
                <p className="lead">
                  Découvrez les chiffres clés de la Faculté des Sciences, reflétant son importance 
                  et son dynamisme dans le paysage universitaire marocain.
                </p>
                
                <h2 className="h3 text-primary mt-4 mb-3">Départements et Formation</h2>
                
                <div className="row g-4 mb-5">
                  <div className="col-md-3 col-6">
                    <div className="card text-center h-100">
                      <div className="card-body">
                        <div className="display-4 text-primary mb-2">7</div>
                        <p className="mb-0">Départements</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-3 col-6">
                    <div className="card text-center h-100">
                      <div className="card-body">
                        <div className="display-4 text-primary mb-2">31</div>
                        <p className="mb-0">Masters</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-3 col-6">
                    <div className="card text-center h-100">
                      <div className="card-body">
                        <div className="display-4 text-primary mb-2">6</div>
                        <p className="mb-0">Formations doctorales</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-3 col-6">
                    <div className="card text-center h-100">
                      <div className="card-body">
                        <div className="display-4 text-primary mb-2">36</div>
                        <p className="mb-0">Formations continues</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <h2 className="h3 text-primary mb-3">Statistiques des Étudiants (2023/2024)</h2>
                
                <div className="table-responsive mb-4">
                  <table className="table table-bordered">
                    <thead className="table-primary">
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
                
                <div className="card mb-4">
                  <div className="card-header bg-primary text-white">
                    <h3 style={{color: 'white'}} className="h5 mb-0">Formations Continues</h3>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-6">
                        <h4 className="h6">Licence d'Université Spécialisée (LUS)</h4>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item d-flex justify-content-between align-items-center">
                            Nombre de formations
                            <span className="badge bg-primary rounded-pill">24</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center">
                            Étudiants inscrits
                            <span className="badge bg-secondary rounded-pill">673</span>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <h4 className="h6">Master d'Université Spécialisé (MUS)</h4>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item d-flex justify-content-between align-items-center">
                            Nombre de formations
                            <span className="badge bg-primary rounded-pill">12</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center">
                            Étudiants inscrits
                            <span className="badge bg-secondary rounded-pill">571</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="alert alert-info">
                  <p className="mb-0">
                    <strong>Total des étudiants inscrits en 2023/2024:</strong> 12063 en formations initiales, 
                    plus 1244 en formations continues, soit un total de 13307 étudiants.
                  </p>
                </div>
                
                <h2 className="h3 text-primary mt-4 mb-3">Ressources Humaines</h2>
                
                <div className="row g-4 mb-4">
                  <div className="col-md-4">
                    <div className="card text-center h-100">
                      <div className="card-body">
                        <div className="display-4 text-primary mb-2">200+</div>
                        <p className="mb-0">Enseignants-chercheurs</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-4">
                    <div className="card text-center h-100">
                      <div className="card-body">
                        <div className="display-4 text-primary mb-2">80+</div>
                        <p className="mb-0">Personnel administratif</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-4">
                    <div className="card text-center h-100">
                      <div className="card-body">
                        <div className="display-4 text-primary mb-2">40+</div>
                        <p className="mb-0">Personnel technique</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <h2 className="h3 text-primary mt-4 mb-3">Recherche Scientifique</h2>
                
                <div className="row g-4">
                  <div className="col-md-3 col-6">
                    <div className="card text-center h-100">
                      <div className="card-body">
                        <div className="display-4 text-primary mb-2">20+</div>
                        <p className="mb-0">Laboratoires</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-3 col-6">
                    <div className="card text-center h-100">
                      <div className="card-body">
                        <div className="display-4 text-primary mb-2">50+</div>
                        <p className="mb-0">Équipes de recherche</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-3 col-6">
                    <div className="card text-center h-100">
                      <div className="card-body">
                        <div className="display-4 text-primary mb-2">20</div>
                        <p className="mb-0">Projets de recherche</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-3 col-6">
                    <div className="card text-center h-100">
                      <div className="card-body">
                        <div className="display-4 text-primary mb-2">100+</div>
                        <p className="mb-0">Publications par an</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="d-flex justify-content-between">
              <Link to="/about/mot-du-doyen" className="btn btn-outline-primary">
                Mot du Doyen
              </Link>
              <Link to="/about/reglements" className="btn btn-primary">
                Règlements et Politiques
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo 
  title="La FSK en chiffres | Faculté des Sciences" 
  description="Découvrez les statistiques et chiffres clés de la Faculté des Sciences"
/>

export default ChiffresPage 