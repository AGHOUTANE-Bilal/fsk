import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import fskColors from "../../utils/colors"

const HistoriquePage = () => {
  return (
    <Layout>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h1 className="display-4 mb-4" style={{ color: fskColors.primary, fontWeight: 'bold' }}>Historique de la Faculté</h1>
            
            <nav aria-label="breadcrumb" className="mb-4">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Accueil</Link></li>
                <li className="breadcrumb-item"><Link to="/about">Faculté</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Historique</li>
              </ol>
            </nav>
            
            <div className="card shadow-sm mb-4">
              <div className="card-body p-4">
                <div className="mb-4">
                  <StaticImage
                    src="../../images/faculte.jpg"
                    alt="Faculté des Sciences de Kenitra"
                    height={400}
                    className="w-100 rounded"
                    objectFit="cover"
                    placeholder="blurred"
                  />
                </div>
                
                <p className="lead">
                  Depuis sa création en 1985, la Faculté des Sciences de Kenitra a connu une évolution remarquable, 
                  s'imposant comme un établissement de référence dans le domaine de l'enseignement 
                  supérieur et de la recherche scientifique au Maroc.
                </p>
                
                <div className="card mt-4 border-0 shadow-sm">
                  <div style={{ 
                    backgroundColor: fskColors.primary, 
                    padding: '15px 20px',
                  }}>
                    <h2 style={{ 
                      color: 'white', 
                      fontWeight: '700', 
                      fontSize: '20px',
                      margin: 0,
                      letterSpacing: '0.5px',
                      textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
                    }}>Fondation officielle</h2>
                  </div>
                  <div className="card-body">
                    <p>
                      La Faculté des Sciences de Kenitra a été fondée officiellement en septembre 1985 en vertu du 
                      décret n°2.82.335 du 16 Rabie II 1403 (31 janvier 1983) qui la rattachait à l'Université 
                      Mohammed V- Rabat.
                    </p>
                    <p>
                      À partir de 1990, elle relève de l'Université Ibn Tofail en application du décret n°2.88.578 
                      du 29 Rabie I 1410 (30 octobre 1989) complétant le décret n°2.75.662 du 11 Choual 1395 
                      (17 octobre 1975) portant création d'établissements universitaires et cités universitaires.
                    </p>
                  </div>
                </div>
                
                <div className="timeline mt-5">
                  <div className="row g-0">
                    <div className="col-md-6">
                      <div className="card mb-4 border-0 shadow-sm">
                        <div style={{ 
                          backgroundColor: fskColors.primary, 
                          padding: '15px 20px',
                        }}>
                          <h2 style={{ 
                            color: 'white', 
                            fontWeight: '700', 
                            fontSize: '20px',
                            margin: 0,
                            letterSpacing: '0.5px',
                            textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
                          }}>Premiers pas (1985-1990)</h2>
                        </div>
                        <div className="card-body">
                          <p>
                            Durant ses premières années d'existence, la Faculté des Sciences de Kenitra était 
                            rattachée à l'Université Mohammed V de Rabat. Cette période a été marquée par la 
                            mise en place des premiers départements et l'établissement des fondations académiques 
                            de l'institution.
                          </p>
                          <p>
                            Les premiers enseignements étaient principalement axés sur les sciences fondamentales : 
                            mathématiques, physique, chimie et biologie.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="card mb-4 ms-md-4">
                        <div className="card-body text-center">
                          <StaticImage
                            src="../../images/faculte.jpg"
                            alt="La Faculté dans les années 1980"
                            height={200}
                            className="rounded"
                            objectFit="cover"
                            placeholder="blurred"
                          />
                          <p className="mt-3 text-muted small">
                            Vue de la Faculté des Sciences de Kenitra dans ses premières années
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="row g-0">
                    <div className="col-md-6 order-md-2">
                      <div className="card mb-4 border-0 shadow-sm">
                        <div style={{ 
                          backgroundColor: fskColors.primary, 
                          padding: '15px 20px',
                        }}>
                          <h2 style={{ 
                            color: 'white', 
                            fontWeight: '700', 
                            fontSize: '20px',
                            margin: 0,
                            letterSpacing: '0.5px',
                            textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
                          }}>Rattachement à l'Université Ibn Tofail (1990)</h2>
                        </div>
                        <div className="card-body">
                          <p>
                            Un tournant majeur dans l'histoire de la faculté a eu lieu en 1990, lorsqu'elle a été 
                            rattachée à l'Université Ibn Tofail, nouvellement créée, en application du décret 
                            n°2.88.578 du 29 Rabie I 1410 (30 octobre 1989).
                          </p>
                          <p>
                            Cette transition a marqué le début d'une nouvelle ère pour l'établissement, lui 
                            permettant de développer son identité propre au sein de l'Université Ibn Tofail.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-md-6 order-md-1">
                      <div className="card mb-4 me-md-4">
                        <div className="card-body text-center">
                          <StaticImage
                            src="../../images/faculte.jpg"
                            alt="Rattachement à l'Université Ibn Tofail"
                            height={200}
                            className="rounded"
                            objectFit="cover"
                            placeholder="blurred"
                          />
                          <p className="mt-3 text-muted small">
                            La Faculté devient partie intégrante de l'Université Ibn Tofail en 1990
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="row g-0">
                    <div className="col-md-6">
                      <div className="card mb-4 border-0 shadow-sm">
                        <div style={{ 
                          backgroundColor: fskColors.primary, 
                          padding: '15px 20px',
                        }}>
                          <h2 style={{ 
                            color: 'white', 
                            fontWeight: '700', 
                            fontSize: '20px',
                            margin: 0,
                            letterSpacing: '0.5px',
                            textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
                          }}>Expansion et développement (1990-2000)</h2>
                        </div>
                        <div className="card-body">
                          <p>
                            Durant cette décennie, la Faculté a connu une expansion significative avec 
                            l'introduction de nouveaux départements et filières. Le nombre d'étudiants 
                            et d'enseignants a considérablement augmenté.
                          </p>
                          <p>
                            Les premiers laboratoires de recherche ont été créés, marquant le début 
                            d'une activité de recherche structurée au sein de l'établissement.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="card mb-4 ms-md-4">
                        <div className="card-body text-center">
                          <StaticImage
                            src="../../images/faculte.jpg"
                            alt="Expansion de la Faculté"
                            height={200}
                            className="rounded"
                            objectFit="cover"
                            placeholder="blurred"
                          />
                          <p className="mt-3 text-muted small">
                            Construction de nouveaux bâtiments dans les années 1990
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="row g-0">
                    <div className="col-md-6 order-md-2">
                      <div className="card mb-4 border-0 shadow-sm">
                        <div style={{ 
                          backgroundColor: fskColors.primary, 
                          padding: '15px 20px',
                        }}>
                          <h2 style={{ 
                            color: 'white', 
                            fontWeight: '700', 
                            fontSize: '20px',
                            margin: 0,
                            letterSpacing: '0.5px',
                            textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
                          }}>Réforme LMD et modernisation (2000-2010)</h2>
                        </div>
                        <div className="card-body">
                          <p>
                            Au début des années 2000, la Faculté a adopté le système LMD 
                            (Licence-Master-Doctorat), alignant ses formations sur les standards 
                            internationaux et facilitant la mobilité des étudiants.
                          </p>
                          <p>
                            Cette période a également été marquée par la modernisation des 
                            infrastructures et des équipements, ainsi que par le renforcement 
                            des partenariats nationaux et internationaux.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-md-6 order-md-1">
                      <div className="card mb-4 me-md-4">
                        <div className="card-body text-center">
                          <StaticImage
                            src="../../images/faculte.jpg"
                            alt="Modernisation des laboratoires"
                            height={200}
                            className="rounded"
                            objectFit="cover"
                            placeholder="blurred"
                          />
                          <p className="mt-3 text-muted small">
                            Modernisation des laboratoires dans les années 2000
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="row g-0">
                    <div className="col-md-6">
                      <div className="card mb-4 border-0 shadow-sm">
                        <div style={{ 
                          backgroundColor: fskColors.primary, 
                          padding: '15px 20px',
                        }}>
                          <h2 style={{ 
                            color: 'white', 
                            fontWeight: '700', 
                            fontSize: '20px',
                            margin: 0,
                            letterSpacing: '0.5px',
                            textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
                          }}>Excellence et innovation (2010-Présent)</h2>
                        </div>
                        <div className="card-body">
                          <p>
                            Ces dernières années, la Faculté s'est engagée dans une démarche 
                            d'excellence et d'innovation, avec un accent particulier sur la 
                            recherche appliquée et le transfert de technologie.
                          </p>
                          <p>
                            De nouvelles formations ont été créées pour répondre aux besoins 
                            du marché du travail et aux défis contemporains, notamment dans les 
                            domaines des énergies renouvelables, de l'intelligence artificielle 
                            et de la biotechnologie.
                          </p>
                          <p>
                            La Faculté a également renforcé sa présence internationale à travers 
                            des projets de recherche collaboratifs et des programmes d'échange.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="card mb-4 ms-md-4">
                        <div className="card-body text-center">
                          <StaticImage
                            src="../../images/faculte.jpg"
                            alt="La Faculté aujourd'hui"
                            height={200}
                            className="rounded"
                            objectFit="cover"
                            placeholder="blurred"
                          />
                          <p className="mt-3 text-muted small">
                            La Faculté des Sciences de Kenitra aujourd'hui
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="card mt-5 bg-light border-0">
                  <div className="card-body p-4">
                    <h2 style={{ color: fskColors.primary, fontWeight: 'bold', fontSize: '24px' }}>Perspectives d'avenir</h2>
                    <p>
                      Forte de son histoire et de ses réalisations, la Faculté des Sciences de Kenitra 
                      continue de se développer avec une vision claire pour l'avenir. Ses priorités 
                      incluent :
                    </p>
                    <ul>
                      <li>Le renforcement de l'excellence académique et scientifique</li>
                      <li>L'innovation pédagogique et la digitalisation des enseignements</li>
                      <li>Le développement de la recherche appliquée et de l'innovation</li>
                      <li>Le renforcement des partenariats avec le monde socio-économique</li>
                      <li>L'internationalisation des formations et de la recherche</li>
                    </ul>
                    <p>
                      À travers ces axes stratégiques, la Faculté ambitionne de consolider sa position 
                      en tant qu'acteur majeur de l'enseignement supérieur et de la recherche scientifique 
                      au Maroc et dans la région.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="d-flex justify-content-between">
              <Link to="/about/mot-du-doyen" className="btn btn-outline-primary">
                Mot du Doyen
              </Link>
              <Link to="/about/chiffres" className="btn btn-primary">
                La FSK en chiffres
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo 
  title="Historique | Faculté des Sciences de Kénitra" 
  description="Découvrez l'histoire et l'évolution de la Faculté des Sciences de Kénitra depuis sa création en 1985."
/>

export default HistoriquePage 