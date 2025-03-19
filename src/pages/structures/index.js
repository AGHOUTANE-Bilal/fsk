import * as React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"

const StructuresIndex = () => {
  return (
    <Layout>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-12">
            <h1>Structures de la Faculté</h1>
            
            <p>
              Découvrez les différentes structures qui composent la Faculté des Sciences 
              et assurent son bon fonctionnement.
            </p>
            
            <div className="row mt-4">
              <div className="col-md-6 mb-4">
                <div className="card">
                  <div className="card-body">
                    <h3>Organisation générale</h3>
                    <p>
                      Découvrez l'organigramme et l'organisation administrative de notre faculté.
                    </p>
                    <Link to="/structures/organisation" className="btn btn-primary">
                      En savoir plus
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="col-md-6 mb-4">
                <div className="card">
                  <div className="card-body">
                    <h3>Départements</h3>
                    <p>
                      Explorez nos 7 départements et leurs spécialités.
                    </p>
                    <Link to="/structures/departements" className="btn btn-primary">
                      Voir les départements
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="col-md-6 mb-4">
                <div className="card">
                  <div className="card-body">
                    <h3>Conseil de la Faculté</h3>
                    <p>
                      Découvrez la composition et les missions du Conseil de la Faculté.
                    </p>
                    <Link to="/structures/conseil" className="btn btn-primary">
                      En savoir plus
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="col-md-6 mb-4">
                <div className="card">
                  <div className="card-body">
                    <h3>Commission scientifique</h3>
                    <p>
                      Informez-vous sur le rôle et la composition de la Commission scientifique.
                    </p>
                    <Link to="/structures/commission" className="btn btn-primary">
                      En savoir plus
                    </Link>
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

export default StructuresIndex 