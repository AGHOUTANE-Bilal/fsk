import React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const LogementPage = () => {
  return (
    <Layout>
      <div className="container py-5">
        <div className="row mb-4">
          <div className="col-12">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Accueil</Link></li>
                <li className="breadcrumb-item"><Link to="/etudiants">Étudiants</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Logement étudiant</li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8">
            <h1 className="mb-4">Logement étudiant</h1>
            <p className="lead mb-4">
              Les étudiants inscrits à l'UIT ont la possibilité de loger dans l'une des 4 cités universitaires 
              qui existent au sein ou à proximité du campus universitaire.
            </p>

            <div className="card mb-4">
              <div className="card-header bg-primary text-white">
                <h2 className="h5 mb-0"><FontAwesomeIcon icon="building" className="me-2" />Cités universitaires</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-12 mb-4">
                    <h3 className="h6">Cité SAKNIA</h3>
                    <p>Publique et gérée par l'ONOUSC</p>
                    <p><FontAwesomeIcon icon="map-marker-alt" className="me-2 text-primary" />Avenue El Massira Alkhadra Route Ain Sbai B.P : 232</p>
                  </div>
                  <div className="col-12 mb-4">
                    <h3 className="h6">Cités privées</h3>
                    <ul className="list-unstyled">
                      <li><FontAwesomeIcon icon="building" className="me-2 text-primary" />Cité privée Chaabi</li>
                      <li><FontAwesomeIcon icon="building" className="me-2 text-primary" />Cité privée Massira 1</li>
                      <li><FontAwesomeIcon icon="building" className="me-2 text-primary" />Cité privée Massira 2</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="card mb-4">
              <div className="card-header bg-primary text-white">
                <h2 className="h5 mb-0"><FontAwesomeIcon icon="user-check" className="me-2" />Conditions d'admission</h2>
              </div>
              <div className="card-body">
                <p>Le logement en cité universitaire est réservé aux étudiants qui :</p>
                <ul>
                  <li>N'exercent aucune fonction ou emploi</li>
                  <li>Résident hors de la ville de l'établissement fréquenté</li>
                  <li>Sont inscrits dans un établissement public d'enseignement supérieur n'ayant pas d'internat</li>
                </ul>

                <h5 className="mt-4">Cas spéciaux prioritaires</h5>
                <p>L'ONOUSC donne la priorité au logement aux :</p>
                <ul>
                  <li>Étudiant en situation d'handicap</li>
                  <li>Pupille de l'état</li>
                  <li>Fils des anciens résistants</li>
                  <li>Fils des anciens membres de l'armée de libération</li>
                  <li>Fils des anciens combattants</li>
                </ul>
                <p className="text-muted">Chacun de ces cas doit présenter une pièce justificative lors du dépôt de dossier de demande de logement.</p>
              </div>
            </div>

            <div className="card mb-4">
              <div className="card-header bg-primary text-white">
                <h2 className="h5 mb-0"><FontAwesomeIcon icon="file-alt" className="me-2" />Procédure de demande</h2>
              </div>
              <div className="card-body">
                <h5>Premier cycle</h5>
                <p>La demande se fait entièrement en ligne via la plateforme : <a href="https://logement.onousc.ma" target="_blank" rel="noopener noreferrer">logement.onousc.ma</a></p>

                <h5 className="mt-4">Cycle Master et Doctorat</h5>
                <p>La demande est déposée directement au niveau de la cité universitaire durant le mois de Septembre.</p>

                <h5 className="mt-4">Documents requis</h5>
                <ul>
                  <li>Attestation d'inscription dans votre établissement avec précision du niveau d'étude</li>
                  <li>Relevé de notes du Baccalauréat</li>
                  <li>Copie légalisé de la CNIE</li>
                  <li>Certificat de résidence</li>
                  <li>Certificat des enfants à charge délivré par le centre d'état civil</li>
                  <li>Attestation de non travail des étudiants inscrits en cycle Master et doctorat</li>
                  <li>Attestation de travail du père (ou tuteur) et de la mère</li>
                  <li>Attestation de revenu global annuel des parents délivrés par la direction des impôts modèle AAP050F/07E</li>
                </ul>
                <p className="text-muted">D'autres documents peuvent être demandés selon les cas présentés.</p>
              </div>
            </div>

            <div className="card mb-4">
              <div className="card-header bg-primary text-white">
                <h2 className="h5 mb-0"><FontAwesomeIcon icon="info-circle" className="me-2" />Informations pratiques</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <h5>Montant à payer</h5>
                    <p>40 DH/mois, soit 400 DH le montant global du séjour pendant 10 mois. L'étudiant doit payer tout le montant au début de l'année.</p>
                  </div>
                  <div className="col-md-6 mb-4">
                    <h5>Réinscription</h5>
                    <p>L'étudiant n'ayant pas consommé le nombre d'année autorisée par cycle peut déposer sa demande de réinscription dans la cité concernée, complétée par l'attestation de réinscription à l'université.</p>
                    <p className="text-muted">L'administration peut se réserver le droit de refuser la demande de réinscription de certains étudiants non disciplinés.</p>
                  </div>
                </div>

                <h5>Durée de résidence par cycle</h5>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Cycle d'études</th>
                        <th>Durée</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Licence fondamentale</td>
                        <td>3 ans</td>
                      </tr>
                      <tr>
                        <td>Licence professionnelle /LST</td>
                        <td>1-2-3 ans</td>
                      </tr>
                      <tr>
                        <td>Médecine générale</td>
                        <td>6 ans</td>
                      </tr>
                      <tr>
                        <td>Médecine dentaire</td>
                        <td>5 ans</td>
                      </tr>
                      <tr>
                        <td>Pharmacie</td>
                        <td>5 ans</td>
                      </tr>
                      <tr>
                        <td>Cycle d'ingénieur</td>
                        <td>3 ans</td>
                      </tr>
                      <tr>
                        <td>Classes préparatoires, DUT…</td>
                        <td>2 ans</td>
                      </tr>
                      <tr>
                        <td>Master/Master Spécialisé/MST</td>
                        <td>2 ans</td>
                      </tr>
                      <tr>
                        <td>Doctorat</td>
                        <td>3 ans</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="card mb-4">
              <div className="card-header bg-primary text-white">
                <h2 className="h5 mb-0"><FontAwesomeIcon icon="utensils" className="me-2" />Restauration</h2>
              </div>
              <div className="card-body">
                <p>La restauration à l'Université Ibn Tofaïl est assurée par l'ONOUSC qui propose une restauration sociale dont les tarifs sont spécialement étudiés pour s'adapter aux budgets étudiants.</p>
                
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <h5>Tarifs et horaires</h5>
                    <p><strong>Prix d'un repas complet :</strong> 1.40 DH</p>
                    <p><strong>Nombre de repas :</strong> 2 repas par jour (déjeuner et dîner)</p>
                    <p><strong>Horaires :</strong></p>
                    <ul>
                      <li>Déjeuner : De 11h à 14h</li>
                      <li>Dîner : De 18h à 21h</li>
                    </ul>
                    <p className="text-muted">Les repas ne sont pas servis les dimanches et les jours fériés.</p>
                  </div>
                  <div className="col-md-6 mb-4">
                    <h5>Qualité et hygiène</h5>
                    <p>L'ONOUSC a instauré une politique d'hygiène et qualité alimentaires dans les restaurants universitaires :</p>
                    <ul>
                      <li>Élaboration d'un guide de bonnes pratiques sanitaires</li>
                      <li>Programme de formation des responsables d'hygiène et qualité alimentaires</li>
                      <li>Menus élaborés par des professionnels de la restauration</li>
                      <li>Prestations variées et repas équilibrés</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-header bg-primary text-white">
                <h3 className="h5 mb-0"><FontAwesomeIcon icon="link" className="me-2" />Liens utiles</h3>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <a href="https://www.onousc.ma" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                      <FontAwesomeIcon icon="external-link-alt" className="me-2 text-primary" />
                      ONOUSC - Office National des Œuvres Universitaires
                    </a>
                  </li>
                  <li className="list-group-item">
                    <a href="https://logement.onousc.ma" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                      <FontAwesomeIcon icon="external-link-alt" className="me-2 text-primary" />
                      Plateforme de demande de logement
                    </a>
                  </li>
                  <li className="list-group-item">
                    <Link to="/etudiants/bourses" className="text-decoration-none">
                      <FontAwesomeIcon icon="money-bill-wave" className="me-2 text-primary" />
                      Bourses d'études
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="card mb-4">
              <div className="card-header bg-primary text-white">
                <h3 className="h5 mb-0"><FontAwesomeIcon icon="question-circle" className="me-2" />Contact</h3>
              </div>
              <div className="card-body">
                <p>Pour toute question concernant le logement étudiant, n'hésitez pas à contacter le service d'aide au logement.</p>
                <ul className="list-unstyled">
                  <li><FontAwesomeIcon icon="envelope" className="me-2 text-primary" /> logement@fsk.ac.ma</li>
                  <li><FontAwesomeIcon icon="phone" className="me-2 text-primary" /> +212 537-XX-XX-XX</li>
                  <li><FontAwesomeIcon icon="clock" className="me-2 text-primary" /> Lundi-Jeudi: 9h-16h, Vendredi: 9h-12h</li>
                  <li><FontAwesomeIcon icon="map-marker-alt" className="me-2 text-primary" /> Bureau des affaires estudiantines, Bâtiment A</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default LogementPage

export const Head = () => <Seo title="Logement étudiant | Faculté des Sciences de Kénitra" description="Informations sur les options de logement disponibles pour les étudiants de la Faculté des Sciences de Kénitra" /> 