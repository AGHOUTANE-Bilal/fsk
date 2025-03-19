import * as React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

const OrganisationPage = () => {
  return (
    <Layout>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h1 className="display-4 mb-4 text-primary">Organisation générale</h1>
            
            <nav aria-label="breadcrumb" className="mb-4">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Accueil</Link></li>
                <li className="breadcrumb-item"><Link to="/structures">Structures</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Organisation générale</li>
              </ol>
            </nav>
            
            <div className="card shadow-sm mb-4">
              <div className="card-body p-4">
                <p className="lead">
                  La Faculté des Sciences est organisée en plusieurs structures administratives et pédagogiques 
                  qui assurent son bon fonctionnement et la qualité de ses formations.
                </p>
                
                <h2 className="h3 text-primary mt-4 mb-4 text-center">Organigramme de la Faculté des Sciences</h2>
                
                {/* Doyen at the top */}
                <div className="row justify-content-center mb-4">
                  <div className="col-md-4">
                    <div className="card text-center shadow border-0">
                      <div className="card-body py-3" style={{ backgroundColor: '#003366', color: 'white' }}>
                        <h3 className="h5 mb-0">Doyen</h3>
                        <p className="small mb-0 mt-1">Pr. EBN TOUHAMI Mohamed</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Connecting Lines from Doyen to all positions */}
                <div className="position-relative mb-3">
                  {/* Vertical line down from Doyen */}
                  <div className="d-flex justify-content-center">
                    <div style={{ height: '30px', width: '3px', backgroundColor: '#333333' }}></div>
                  </div>
                  
                  {/* Horizontal line across */}
                  <div className="d-flex justify-content-center">
                    <div style={{ height: '3px', width: '90%', backgroundColor: '#333333' }}></div>
                  </div>
                  
                  {/* Vertical lines down to each position */}
                  <div className="row justify-content-center" style={{ marginTop: '-3px' }}>
                    <div className="col-md-10">
                      <div className="row">
                        <div className="col">
                          <div className="d-flex justify-content-center">
                            <div style={{ height: '15px', width: '3px', backgroundColor: '#333333' }}></div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="d-flex justify-content-center">
                            <div style={{ height: '15px', width: '3px', backgroundColor: '#333333' }}></div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="d-flex justify-content-center">
                            <div style={{ height: '15px', width: '3px', backgroundColor: '#333333' }}></div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="d-flex justify-content-center">
                            <div style={{ height: '15px', width: '3px', backgroundColor: '#333333' }}></div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="d-flex justify-content-center">
                            <div style={{ height: '15px', width: '3px', backgroundColor: '#333333' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Row of Vice Doyens and Secrétaire Générale */}
                <div className="row g-4 justify-content-center mb-4">
                  {/* Vice Doyen chargé des affaires pédagogiques */}
                  <div className="col-md">
                    <div className="position-relative">
                      <div className="card text-center shadow border-0 mb-3">
                        <div className="card-body py-3" style={{ backgroundColor: '#0056b3', color: 'white' }}>
                          <h4 className="h6 mb-0">Vice Doyen chargé des affaires pédagogiques</h4>
                        </div>
                      </div>
                      
                      {/* Connecting Line */}
                      <div className="d-flex justify-content-center">
                        <div style={{ height: '20px', width: '3px', backgroundColor: '#333333' }}></div>
                      </div>
                      
                      {/* Services */}
                      <div className="card shadow-sm border-0 mb-2">
                        <div className="card-body py-2 text-center" style={{ backgroundColor: '#4d94ff', color: 'white' }}>
                          <p className="small mb-0">Service des affaires scolarité et estudiantines</p>
                        </div>
                      </div>
                      
                      {/* Connecting Line */}
                      <div className="d-flex justify-content-center">
                        <div style={{ height: '15px', width: '3px', backgroundColor: '#333333' }}></div>
                      </div>
                      
                      <div className="card shadow-sm border-0">
                        <div className="card-body py-2 text-center" style={{ backgroundColor: '#4d94ff', color: 'white' }}>
                          <p className="small mb-0">Prévisions, statistiques et suivi des Lauréats</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Vice-doyen de la recherche scientifique et de la coopération */}
                  <div className="col-md">
                    <div className="position-relative">
                      <div className="card text-center shadow border-0 mb-3">
                        <div className="card-body py-3" style={{ backgroundColor: '#0056b3', color: 'white' }}>
                          <h4 className="h6 mb-0">Vice-doyen de la recherche scientifique et de la coopération</h4>
                        </div>
                      </div>
                      
                      {/* Connecting Line */}
                      <div className="d-flex justify-content-center">
                        <div style={{ height: '20px', width: '3px', backgroundColor: '#333333' }}></div>
                      </div>
                      
                      {/* Services */}
                      <div className="card shadow-sm border-0 mb-2">
                        <div className="card-body py-2 text-center" style={{ backgroundColor: '#4d94ff', color: 'white' }}>
                          <p className="small mb-0">Service de coopération, de partenariat et de formation</p>
                        </div>
                      </div>
                      
                      {/* Connecting Line */}
                      <div className="d-flex justify-content-center">
                        <div style={{ height: '15px', width: '3px', backgroundColor: '#333333' }}></div>
                      </div>
                      
                      <div className="card shadow-sm border-0 mb-2">
                        <div className="card-body py-2 text-center" style={{ backgroundColor: '#4d94ff', color: 'white' }}>
                          <p className="small mb-0">Service de Recherche scientifique et Doctorat</p>
                        </div>
                      </div>
                      
                      {/* Connecting Line */}
                      <div className="d-flex justify-content-center">
                        <div style={{ height: '15px', width: '3px', backgroundColor: '#333333' }}></div>
                      </div>
                      
                      <div className="card shadow-sm border-0">
                        <div className="card-body py-2 text-center" style={{ backgroundColor: '#4d94ff', color: 'white' }}>
                          <p className="small mb-0">Service formation continue</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Secrétaire Générale */}
                  <div className="col-md">
                    <div className="position-relative">
                      <div className="card text-center shadow border-0 mb-3">
                        <div className="card-body py-3" style={{ backgroundColor: '#0056b3', color: 'white' }}>
                          <h4 className="h6 mb-0">Secrétaire Générale</h4>
                        </div>
                      </div>
                      
                      {/* Connecting Line */}
                      <div className="d-flex justify-content-center">
                        <div style={{ height: '20px', width: '3px', backgroundColor: '#333333' }}></div>
                      </div>
                      
                      {/* Services */}
                      <div className="card shadow-sm border-0 mb-2">
                        <div className="card-body py-2 text-center" style={{ backgroundColor: '#4d94ff', color: 'white' }}>
                          <p className="small mb-0">Service Informatique</p>
                        </div>
                      </div>
                      
                      {/* Connecting Line */}
                      <div className="d-flex justify-content-center">
                        <div style={{ height: '15px', width: '3px', backgroundColor: '#333333' }}></div>
                      </div>
                      
                      <div className="card shadow-sm border-0 mb-2">
                        <div className="card-body py-2 text-center" style={{ backgroundColor: '#4d94ff', color: 'white' }}>
                          <p className="small mb-0">Service des ressources humaines et des affaires institutionnelles</p>
                        </div>
                      </div>
                      
                      {/* Connecting Line */}
                      <div className="d-flex justify-content-center">
                        <div style={{ height: '15px', width: '3px', backgroundColor: '#333333' }}></div>
                      </div>
                      
                      <div className="card shadow-sm border-0">
                        <div className="card-body py-2 text-center" style={{ backgroundColor: '#4d94ff', color: 'white' }}>
                          <p className="small mb-0">Service Patrimoine et logistique</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Vice Doyen Chargé du Centre d'Excellence Automobile et Aéronautique */}
                  <div className="col-md">
                    <div className="position-relative">
                      <div className="card text-center shadow border-0 mb-3">
                        <div className="card-body py-3" style={{ backgroundColor: '#0056b3', color: 'white' }}>
                          <h4 className="h6 mb-0">Vice Doyen Chargé du Centre d'Excellence Automobile et Aéronautique</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Vice Doyen Chargé du Centre d'Excellence Agroalimentaire */}
                  <div className="col-md">
                    <div className="position-relative">
                      <div className="card text-center shadow border-0 mb-3">
                        <div className="card-body py-3" style={{ backgroundColor: '#0056b3', color: 'white' }}>
                          <h4 className="h6 mb-0">Vice Doyen Chargé du Centre d'Excellence Agroalimentaire</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Connecting Lines to Other Services */}
                <div className="position-relative mb-3">
                  {/* Horizontal line across */}
                  <div className="d-flex justify-content-center">
                    <div style={{ height: '3px', width: '50%', backgroundColor: '#333333' }}></div>
                  </div>
                  
                  {/* Vertical lines down to each service */}
                  <div className="row justify-content-center" style={{ marginTop: '-3px' }}>
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col">
                          <div className="d-flex justify-content-center">
                            <div style={{ height: '15px', width: '3px', backgroundColor: '#333333' }}></div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="d-flex justify-content-center">
                            <div style={{ height: '15px', width: '3px', backgroundColor: '#333333' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Other Services */}
                <div className="row justify-content-center g-3 mb-4">
                  <div className="col-md-3">
                    <div className="card text-center shadow-sm border-0">
                      <div className="card-body py-2" style={{ backgroundColor: '#28a745', color: 'white' }}>
                        <p className="small mb-0">Secrétariat de Mr le Doyen et bureau d'ordre</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="card text-center shadow-sm border-0">
                      <div className="card-body py-2" style={{ backgroundColor: '#28a745', color: 'white' }}>
                        <p className="small mb-0">Service Affaires économiques</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="alert alert-info mt-4">
                  <p className="mb-0">
                    <strong>Note:</strong> Cette organisation peut évoluer en fonction des besoins de la faculté 
                    et des orientations stratégiques de l'université.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="d-flex justify-content-between">
              <Link to="/structures" className="btn btn-outline-primary">
                Retour aux structures
              </Link>
              <Link to="/structures/departements" className="btn btn-primary">
                Voir les départements
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo 
  title="Organisation générale | Faculté des Sciences" 
  description="Découvrez l'organisation générale et l'organigramme de la Faculté des Sciences"
/>

export default OrganisationPage 