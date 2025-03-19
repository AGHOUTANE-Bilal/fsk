import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

const MotDuDoyen = () => {
  return (
    <Layout>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h1 className="display-4 mb-4 text-primary">Mot du Doyen</h1>
            
            <div className="card shadow-sm mb-5">
              <div className="card-body p-4">
                <div className="row">
                  <div className="col-md-4 text-center mb-4 mb-md-0">
                    {/* Using StaticImage for optimal performance */}
                    <div className="mb-3">
                      <StaticImage
                        src="../../images/doyen.jpg"
                        alt="Pr. EBN TOUHAMI Mohamed"
                        width={250}
                        height={300}
                        objectFit="cover"
                        className="rounded shadow"
                        placeholder="blurred"
                      />
                    </div>
                    <h4 className="fw-bold">Pr. EBN TOUHAMI Mohamed</h4>
                    <p className="text-muted">Doyen de la Faculté des Sciences</p>
                  </div>
                  <div className="col-md-8">
                    <div className="ps-md-4">
                      <p className="lead">Chers étudiants, chers collègues, chers visiteurs,</p>
                      
                      <p>En ma qualité de Doyen, j’œuvre main dans la main avec un corps professoral de grande qualité et un personnel administratif dévoué pour hisser cette institution au rang des meilleures à l’échelle nationale et internationale. L’objectif étant de parvenir à un enseignement de qualité et à une recherche de pointe que nous mettrons volontiers au service de notre société.</p>
                      
                      <p>Pour ce faire, il est important de respecter les différences et les rôles de chacun : c’est la diversité qui fait la richesse de notre Faculté. Il est nécessaire qu’une institution de l’importance de la Faculté des Sciences de l’Université Ibn Tofail de Kénitra soit à l’écoute des attentes des jeunes qui l’intègrent et prennent en charge toute la responsabilité pour être à la hauteur de leurs aspirations et celles de leurs parents et surtout celles de notre patrie.</p>
                      
                      <p>Nous estimons que la Faculté des Sciences de Kénitra, dans toutes ses dimensions, est l’affaire de tous. C’est une plateforme intelligente et ouverte qui doit servir à poser les bonnes questions qui concernent la société et proposer les réponses et les solutions adéquates et réalisables, tout en prenant en considération les différents enjeux d’un monde de plus en plus compétitif et connecté.</p>
                      
                      <p>C’est dans ce sens que nous avons élaboré un projet de développement qui vise à offrir une formation de qualité adaptée aux besoins du marché de l’emploi et à professionnaliser les formations à travers l’insertion de modules professionnels. Nous avons également mis l’accent sur le développement de la recherche scientifique en adéquation avec les acquis de notre Faculté et en harmonie avec les priorités nationales.</p>
                      <p>Nous espérons réussir ce projet grâce à la contribution de tous nos partenaires internes et externes et en bénéficiant de l’appui précieux de la Présidence engagée de notre Université.</p>
                      <div className="mt-4 pt-2 border-top">
                        <p className="mb-0 fw-bold">Cordialement,</p>
                        <p className="mb-0"><strong>Pr. EBN TOUHAMI Mohamed</strong></p>
                        <p className="text-muted">Doyen de la Faculté des Sciences</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="d-flex justify-content-between">
              <Link to="/" className="btn btn-outline-primary">
                <i className="bi bi-arrow-left me-2"></i>Retour à l'accueil
              </Link>
              <Link to="/contact" className="btn btn-primary">
                Contactez-nous<i className="bi bi-arrow-right ms-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo 
  title="Mot du Doyen | Faculté des Sciences" 
  description="Message du Pr. EBN TOUHAMI Mohamed, Doyen de la Faculté des Sciences"
/>

export default MotDuDoyen 