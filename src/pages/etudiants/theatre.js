import React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { Link } from "gatsby"

const TheatrePage = () => {
  return (
    <Layout>
      <div className="container py-5">
        <div className="row mb-4">
          <div className="col-12">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Accueil</Link></li>
                <li className="breadcrumb-item"><Link to="/etudiants">Étudiants</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Théâtre</li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <h1 className="mb-4 text-dark">Théâtre Universitaire</h1>
            
            <div className="card mb-4">
              <div className="card-body bg-light">
                <p className="text-dark mb-4">
                  Pour accompagner l'effervescence culturelle au sein du campus qui a été marquée ces dernières années par :
                </p>
                <ul className="list-unstyled">
                  <li className="mb-3 text-dark">• La mise en place d'une structure de gestion des activités culturelles autour du CVE et la conception d'un projet fédérateur impliquant tous les étudiants de l'Université ;</li>
                  <li className="mb-3 text-dark">• Le choix d'une politique culturelle pour la gestion centralisée des actions dans le but de les coordonner, d'optimiser les moyens humains, matériels et financiers et de fédérer l'ensemble des étudiants de l'UIT autour de projets communs;</li>
                  <li className="mb-3 text-dark">• L'organisation de plusieurs rendez-vous culturels ;</li>
                </ul>
                <p className="text-dark">
                  L'UIT a mis à la disposition de ses étudiants, de ses enseignants-chercheurs et de ses partenaires locaux, régionaux, nationaux et même internationaux un théâtre universitaire aux normes internationales d'une capacité de 300 places.
                </p>
              </div>
            </div>

            <div className="card mb-4">
              <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
                <h2 className="h5 mb-0">Galerie d'activités</h2>
                <div>
                  <button className="btn btn-sm btn-outline-light me-2" type="button" data-bs-target="#theatreCarousel" data-bs-slide="prev">
                    <i className="bi bi-chevron-left"></i>
                  </button>
                  <button className="btn btn-sm btn-outline-light" type="button" data-bs-target="#theatreCarousel" data-bs-slide="next">
                    <i className="bi bi-chevron-right"></i>
                  </button>
                </div>
              </div>
              <div className="card-body bg-light p-0">
                <div id="theatreCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="6000">
                  <div className="carousel-indicators">
                    <button type="button" data-bs-target="#theatreCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#theatreCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#theatreCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>
                  <div className="carousel-inner rounded-3 overflow-hidden">
                    <div className="carousel-item active">
                      <div className="position-relative">
                        <img src="/Photo-theatre-1.jpg" className="d-block w-100" alt="Performance théâtrale" style={{
                          height: "70vh",
                          maxHeight: "700px",
                          objectFit: "cover",
                          objectPosition: "center"
                        }} />
                        <div className="carousel-caption text-start" style={{
                          background: "linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0) 100%)",
                          left: 0,
                          right: 0,
                          bottom: 0,
                          padding: "3rem 2rem 2rem"
                        }}>
                          <h3 className="h4 mb-2">Performance artistique</h3>
                          <p className="mb-0 d-none d-md-block">Une représentation mettant en scène les talents de nos étudiants dans notre théâtre aux normes internationales</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="position-relative">
                        <img src="/Photo-theatre-2.jpg" className="d-block w-100" alt="Concert au théâtre" style={{
                          height: "70vh",
                          maxHeight: "700px",
                          objectFit: "cover",
                          objectPosition: "center"
                        }} />
                        <div className="carousel-caption text-start" style={{
                          background: "linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0) 100%)",
                          left: 0,
                          right: 0,
                          bottom: 0,
                          padding: "3rem 2rem 2rem"
                        }}>
                          <h3 className="h4 mb-2">Concert live</h3>
                          <p className="mb-0 d-none d-md-block">Des performances musicales exceptionnelles qui animent notre campus universitaire</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="position-relative">
                        <img src="/Photo-theatre-3.jpg" className="d-block w-100" alt="Groupe d'étudiants" style={{
                          height: "70vh",
                          maxHeight: "700px",
                          objectFit: "cover",
                          objectPosition: "center"
                        }} />
                        <div className="carousel-caption text-start" style={{
                          background: "linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0) 100%)",
                          left: 0,
                          right: 0,
                          bottom: 0,
                          padding: "3rem 2rem 2rem"
                        }}>
                          <h3 className="h4 mb-2">Événement culturel</h3>
                          <p className="mb-0 d-none d-md-block">La communauté étudiante rassemblée autour de la culture et des arts</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card mb-4">
              <div className="card-header bg-primary text-white">
                <h2 className="h5 mb-0">Informations pratiques</h2>
              </div>
              <div className="card-body bg-light">
                <div className="row">
                  <div className="col-md-6">
                    <h3 className="h6 text-dark">Capacité</h3>
                    <p className="text-dark">300 places assises</p>
                    <h3 className="h6 text-dark">Équipements</h3>
                    <ul className="list-unstyled">
                      <li className="text-dark">• Système son professionnel</li>
                      <li className="text-dark">• Éclairage scénique</li>
                      <li className="text-dark">• Loge pour les artistes</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h3 className="h6 text-dark">Contact</h3>
                    <p className="text-dark mb-0">Pour toute information ou réservation :</p>
                    <p className="text-dark">
                      Email : <a href="mailto:theatre@uit.ac.ma" className="text-primary">theatre@uit.ac.ma</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default TheatrePage

export const Head = () => <Seo title="Théâtre | Faculté des Sciences de Kénitra" description="Théâtre Universitaire de l'Université Ibn Tofail" /> 