import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import { Card, Row, Col, Tab, Nav, Badge, Accordion, Button } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function LaboratoiresPage() {
  return (
    <Layout>
      <div className="container py-4">
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Accueil</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/recherche">Recherche</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Laboratoires
            </li>
          </ol>
        </nav>

        <h1 className="mb-4">Laboratoires de Recherche</h1>
        
        <div className="alert alert-primary mb-4">
          <div className="d-flex">
            <div className="me-3">
              <FontAwesomeIcon icon="flask" size="lg" />
            </div>
            <div>
              <p className="mb-0">
                La Faculté des Sciences de Kénitra abrite plusieurs laboratoires de recherche actifs dans différents 
                domaines scientifiques. Ces laboratoires constituent le cœur de l'activité de recherche, assurant 
                la formation par la recherche et contribuant au développement socio-économique du pays.
              </p>
            </div>
          </div>
        </div>
        
        <Tab.Container id="laboratoires-tabs" defaultActiveKey="biologie">
          <Row>
            <Col md={3} className="mb-4">
              <Card className="shadow-sm">
                <Card.Header className="bg-secondary">
                  <h2 className="h5 mb-0 text-white fw-bold">Départements</h2>
                </Card.Header>
                <Card.Body className="p-0">
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="biologie" className="rounded-0 border-bottom">
                        <FontAwesomeIcon icon="leaf" className="me-2" />
                        Biologie
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="chimie" className="rounded-0 border-bottom">
                        <FontAwesomeIcon icon="vial" className="me-2" />
                        Chimie
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="physique" className="rounded-0 border-bottom">
                        <FontAwesomeIcon icon="atom" className="me-2" />
                        Physique
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="mathematiques" className="rounded-0 border-bottom">
                        <FontAwesomeIcon icon="square-root-alt" className="me-2" />
                        Mathématiques
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="informatique" className="rounded-0 border-bottom">
                        <FontAwesomeIcon icon="laptop-code" className="me-2" />
                        Informatique
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="geologie" className="rounded-0">
                        <FontAwesomeIcon icon="mountain" className="me-2" />
                        Géologie
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={9}>
              <Tab.Content>
                <Tab.Pane eventKey="biologie">
                  <Card className="shadow-sm mb-4">
                    <Card.Header className="bg-success">
                      <h2 className="h5 mb-0 text-white fw-bold">Laboratoires du Département de Biologie</h2>
                    </Card.Header>
                    <Card.Body>
                      <Accordion>
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>
                            <span className="fw-bold">Laboratoire Biologie et Santé</span>
                          </Accordion.Header>
                          <Accordion.Body>
                            <Row className="mb-3">
                              <Col md={12}>
                                <div className="border p-2 rounded mb-3 bg-light">
                                  <h3 className="h6 fw-bold">Directeur du laboratoire</h3>
                                  <p className="mb-0">Pr. MESFIOUI Abdelhalem <span className="text-muted">- abdelhalem.mesfioui@uit.ac.ma</span></p>
                                </div>
                                
                                <h3 className="h6 fw-bold mt-4">Membres du laboratoire</h3>
                                <div className="table-responsive">
                                  <table className="table table-striped table-hover">
                                    <thead>
                                      <tr>
                                        <th>Nom</th>
                                        <th>Email</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>Pr. ABOUSSALEH Youssef</td>
                                        <td>youssef.aboussaleh@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. AKHOUAYRI Omar</td>
                                        <td>omar.akhouayri@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. ATTARASSI Benaissa</td>
                                        <td>attarassi.benaissa@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. AUAJJAR Nabila</td>
                                        <td>nabila.auajjar@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. AZZAOUI Fatima Zahra</td>
                                        <td>fatimazahra.azzaoui@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. BENAZZOUZ Bouchra</td>
                                        <td>bouchra.benazzouz@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. BENCHACHO Mohammed</td>
                                        <td>mohammed.benchacho@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. BENKIRANE Hasnae</td>
                                        <td>benkirane.hasnae@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. BENKIRANE Ouafae</td>
                                        <td>ouafae.benkirane@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. BIKJDAOUENE Leila</td>
                                        <td>leila.bikjdaouene@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. BOUR Abdellatif</td>
                                        <td>abdellatif.bour@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. BOUTAYEB Soraya</td>
                                        <td>soraya.boutayeb@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. CHAHBOUNE Mohamed</td>
                                        <td></td>
                                      </tr>
                                      <tr>
                                        <td>Pr. EL GHISSASSI Mohammed</td>
                                        <td>mohammed.elghissassi@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. EL HALOUI Nour-eddine</td>
                                        <td>n.elhaloui@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. HAMI Hinde</td>
                                        <td>hinde.hami@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. KHAL-LAYOUN Soad</td>
                                        <td>soad.khal-layoun@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. LEBBAR Souad</td>
                                        <td>souad.lebbar@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. MRABET Oulaya</td>
                                        <td>oulaya.mrabet@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. OUAHIDI Moulay Laarbi</td>
                                        <td>moulaylaarbi.ouahidi@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. RAMDAN Rajae</td>
                                        <td></td>
                                      </tr>
                                      <tr>
                                        <td>Pr. SOULAYMANI Abdelmajid</td>
                                        <td>soulaymani@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. SQALLI HOUSSAINI Youssef</td>
                                        <td>youssef.sqallihoussaini@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. TAJANI Mouna</td>
                                        <td>mouna.tajani@uit.ac.ma</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </Col>
                            </Row>
                          </Accordion.Body>
                        </Accordion.Item>
                        
                        <Accordion.Item eventKey="1">
                          <Accordion.Header>
                            <span className="fw-bold">Laboratoire Productions Vegetales Animales et Agro-industrie</span>
                          </Accordion.Header>
                          <Accordion.Body>
                            <Row className="mb-3">
                              <Col md={12}>
                                <div className="border p-2 rounded mb-3 bg-light">
                                  <h3 className="h6 fw-bold">Directeur du laboratoire</h3>
                                  <p className="mb-0">Pr. DOUIRA Allal <span className="text-muted">- allal.douira@uit.ac.ma</span></p>
                                </div>
                                
                                <h3 className="h6 fw-bold mt-4">Membres du laboratoire</h3>
                                <div className="table-responsive">
                                  <table className="table table-striped table-hover">
                                    <thead>
                                      <tr>
                                        <th>Nom</th>
                                        <th>Email</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>Pr. BELAHBIB Nadia</td>
                                        <td>nadia.belahbib@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. BENKIRANE Rachid</td>
                                        <td>rachid.benkirane@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. BOURKHISS Brahim</td>
                                        <td>brahim.bourkhiss@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. BRHADDA Najiba</td>
                                        <td>najiba.brhadda@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. DAHMANI Jamila</td>
                                        <td>jamila.dahmani@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. DOUIRA Allal</td>
                                        <td>allal.douira@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. EL ALAOUI Abdelaziz</td>
                                        <td></td>
                                      </tr>
                                      <tr>
                                        <td>Pr. EL OUADI Fadwa</td>
                                        <td></td>
                                      </tr>
                                      <tr>
                                        <td>Pr. GMIRA Najib</td>
                                        <td>najib.gmira@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. IBRIZ Mohammed</td>
                                        <td>m_ibriz@yahoo.fr</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. ICHIR Lalla Laaziza</td>
                                        <td>lallalaaziza.ichir@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. MOURIA Afifa</td>
                                        <td>afifa.mouria@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. OUAZZANI TOUHAMI Amina</td>
                                        <td>amina.ouazzanitouhami@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. SAIDI Najia</td>
                                        <td>najia.saidi@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. SELMAOUI Karima</td>
                                        <td>selmaoui.karima@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. TOUATI Najat</td>
                                        <td>najat.touati@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. ZIDANE Lahcen</td>
                                        <td>lahcen.zidane@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. ZIRI Rabea</td>
                                        <td>rabea.ziri@uit.ac.ma</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </Col>
                            </Row>
                          </Accordion.Body>
                        </Accordion.Item>
                        
                        <Accordion.Item eventKey="2">
                          <Accordion.Header>
                            <span className="fw-bold">Laboratoire Ressources Naturelles et Développement Durables</span>
                          </Accordion.Header>
                          <Accordion.Body>
                            <Row className="mb-3">
                              <Col md={12}>
                                <div className="border p-2 rounded mb-3 bg-light">
                                  <h3 className="h6 fw-bold">Directeur du laboratoire</h3>
                                  <p className="mb-0">Pr. OUHSSINE Mohammed <span className="text-muted">- mohammed.ouhssine@uit.ac.ma</span></p>
                                </div>
                                
                                <h3 className="h6 fw-bold mt-4">Membres du laboratoire</h3>
                                <div className="table-responsive">
                                  <table className="table table-striped table-hover">
                                    <thead>
                                      <tr>
                                        <th>Nom</th>
                                        <th>Email</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>Pr. AOUANE El Mahjoub</td>
                                        <td>elmahjoub.aouane@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. BAKALI Raifa</td>
                                        <td>raifa.bakali@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. BELGHYTI Driss</td>
                                        <td>driss.belghyti@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. BEN MOHAMMADI Aicha</td>
                                        <td>aicha.benmohammadi@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. BENGUEDDOUR Rachid</td>
                                        <td>rachid.bengueddour@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. BENHARBIT Oumaima</td>
                                        <td>oumaima.benharbit@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. BENZAKOUR Abderrahim</td>
                                        <td>abderrahim.benzakour@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. CHAO Jamal</td>
                                        <td>jamal.chao@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. CHERKAOUI Sidi Imad</td>
                                        <td></td>
                                      </tr>
                                      <tr>
                                        <td>Pr. ECHERFAOUI Hassan</td>
                                        <td>echerfaoui.hassan@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. EL KHARRIM Khadija</td>
                                        <td>khadija.elkharrim@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. EL MANSOURI Bouabid</td>
                                        <td>bouabid.elmansouri@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. EL YACOUBI Houda</td>
                                        <td>houda.elyacoubi@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. EL YOUSFI Lahcen</td>
                                        <td></td>
                                      </tr>
                                      <tr>
                                        <td>Pr. ER-RAIOUI Lamia</td>
                                        <td>lamia.er-raioui@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. GUESSOUS Zineb</td>
                                        <td>zineb.guessous@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. HAIDA Souad</td>
                                        <td>haida.souad@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. HASSANI Oussama</td>
                                        <td>oussama.hassani@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. HMOUNI Driss</td>
                                        <td>hmouni.driss@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. KILI Malika</td>
                                        <td>malika.kili@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. LRHORFI Lalla Aicha</td>
                                        <td>lallaaicha.lrhorfi@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. MEHDI Mohammed</td>
                                        <td>mohammed.mehdi@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. MRIDEKH Abdelaziz</td>
                                        <td>mridekh.abdelaziz@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. OUHSSINE Mohammed</td>
                                        <td>mohammed.ouhssine@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. RIYAHI Jamila</td>
                                        <td></td>
                                      </tr>
                                      <tr>
                                        <td>Pr. ROCHDI Atmane</td>
                                        <td>atmane.rochdi@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. SEKKAT Najoua</td>
                                        <td>najoua.sekkat@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. TABOZ Youness</td>
                                        <td>taboz.youness@uit.ac.ma</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </Col>
                            </Row>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </Card.Body>
                  </Card>
                </Tab.Pane>
                
                <Tab.Pane eventKey="chimie">
                  <Card className="shadow-sm mb-4">
                    <Card.Header className="bg-danger">
                      <h2 className="h5 mb-0 text-white fw-bold">Laboratoires du Département de Chimie</h2>
                    </Card.Header>
                    <Card.Body>
                      <Accordion>
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>
                            <span className="fw-bold">Laboratoire Chimie Organique, Catalyse et Environnement</span>
                          </Accordion.Header>
                          <Accordion.Body>
                            <Row className="mb-3">
                              <Col md={12}>
                                <div className="border p-2 rounded mb-3 bg-light">
                                  <h3 className="h6 fw-bold">Directeur du laboratoire</h3>
                                  <p className="mb-0">Pr. GUEDIRA Taoufiq <span className="text-muted">- taoufiq.guedira@uit.ac.ma</span></p>
                                </div>
                                
                                <h3 className="h6 fw-bold mt-4">Membres du laboratoire</h3>
                                <div className="table-responsive">
                                  <table className="table table-striped table-hover">
                                    <thead>
                                      <tr>
                                        <th>Nom</th>
                                        <th>Email</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>Pr. ARHOUTANE Mohamed Reda</td>
                                        <td></td>
                                      </tr>
                                      <tr>
                                        <td>Pr. BENNANI ZIATNI Mounia</td>
                                        <td>mounia.bennaniziatni@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. BOUKHRIS Said</td>
                                        <td></td>
                                      </tr>
                                      <tr>
                                        <td>Pr. CHAOUCH Abdelaziz</td>
                                        <td>abdelaziz.chaouch@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. CHEIKHI Nabil</td>
                                        <td>nabil.cheikhi@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. CHERKAOUI Mohammed</td>
                                        <td>cherkaoui.mohammed@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. DERMAJ Ahmed</td>
                                        <td></td>
                                      </tr>
                                      <tr>
                                        <td>Pr. EL AOUFIR Yasmina</td>
                                        <td>yasmina.elaoufir1@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. EL MEJDOUB Nouredine</td>
                                        <td>nouredine.elmejdoub@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. EL YOUBI Mohamed Salahdine</td>
                                        <td></td>
                                      </tr>
                                      <tr>
                                        <td>Pr. ERRAMLI Hamid</td>
                                        <td>hamid.erramli@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. ESSAMRI Azzouz</td>
                                        <td>essamri.azzouz@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. GHAILANE Rachida</td>
                                        <td>ghailane.rachida@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. GUEDIRA Taoufiq</td>
                                        <td>taoufiq.guedira@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. HASSIKOU Amina</td>
                                        <td>amina.hassikou@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. HEGAZI Salah Eddine</td>
                                        <td>salaheddine.hegazi@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. LAKHRISSI Brahim</td>
                                        <td>brahim.lakhrissi@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. LAKHRISSI Mohammed</td>
                                        <td>mohammed.lakhrissi@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. LAKHRISSI Youness</td>
                                        <td>youness.lakhrissi@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. MABROUK Assia</td>
                                        <td></td>
                                      </tr>
                                      <tr>
                                        <td>Pr. RAFIK Mohamed</td>
                                        <td>mohamed.rafik@uit.ac.ma</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </Col>
                            </Row>
                          </Accordion.Body>
                        </Accordion.Item>
                        
                        <Accordion.Item eventKey="1">
                          <Accordion.Header>
                            <span className="fw-bold">Laboratoire Matériaux Avancés et Génie des Procédés</span>
                          </Accordion.Header>
                          <Accordion.Body>
                            <Row className="mb-3">
                              <Col md={12}>
                                <div className="border p-2 rounded mb-3 bg-light">
                                  <h3 className="h6 fw-bold">Directeur du laboratoire</h3>
                                  <p className="mb-0">Pr. TAKY Mohamed <span className="text-muted">- mohamed.taky@uit.ac.ma</span></p>
                                </div>
                                
                                <h3 className="h6 fw-bold mt-4">Membres du laboratoire</h3>
                                <div className="table-responsive">
                                  <table className="table table-striped table-hover">
                                    <thead>
                                      <tr>
                                        <th>Nom</th>
                                        <th>Email</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>Pr. AGUELMOUS Anas</td>
                                        <td></td>
                                      </tr>
                                      <tr>
                                        <td>Pr. AMOR Zakia</td>
                                        <td>zakia.amor@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. BELAKHMIMA Rida Allah</td>
                                        <td></td>
                                      </tr>
                                      <tr>
                                        <td>Pr. BELFAQUIR Mustapha</td>
                                        <td>belfaquir.mustapha@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. BELHAMIDI Sakina</td>
                                        <td></td>
                                      </tr>
                                      <tr>
                                        <td>Pr. BOUZAKRAOUI Said</td>
                                        <td>bouzakraoui@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. CHAFIK EL IDRISSI Brahim</td>
                                        <td>brahim.chafikelidrissi@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. CHAHINE Abdelkrim</td>
                                        <td>abdelkrim.chahine@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. CHERKAOUI Hassan</td>
                                        <td>hassan.cherkaoui@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. CHHITI Younes</td>
                                        <td></td>
                                      </tr>
                                      <tr>
                                        <td>Pr. DKHIRECHE Nadia</td>
                                        <td>nadia.dkhireche@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. EBN TOUHAMI Mohamed</td>
                                        <td>mohamed.ebntouhami@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. EL AMRANI Mahacine</td>
                                        <td>mahacine.elamrani@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. EL AZHAR Fatima</td>
                                        <td></td>
                                      </tr>
                                      <tr>
                                        <td>Pr. EL AZZOUZI Nabila</td>
                                        <td></td>
                                      </tr>
                                      <tr>
                                        <td>Pr. EL HEZZAT Mounir</td>
                                        <td>mounir.elhezzat@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. EL KAFSSAOUI El Hassan</td>
                                        <td>elhassan.elkafssaoui@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. EL KHATTABI Omar</td>
                                        <td></td>
                                      </tr>
                                      <tr>
                                        <td>Pr. EL MAADI Aicha</td>
                                        <td>aicha.elmaadi@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. EL MARZOUKI Abderrahim</td>
                                        <td>abderrahim.elmarzouki@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. GALAI Mohcine</td>
                                        <td></td>
                                      </tr>
                                      <tr>
                                        <td>Pr. HABSAOUI Amar</td>
                                        <td>habsaoui.amar@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. HADDAOUI Najoua</td>
                                        <td></td>
                                      </tr>
                                      <tr>
                                        <td>Pr. HARCHARRAS Mohamed</td>
                                        <td>mohamed.harcharras@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. HBAIZ EL Mahdi</td>
                                        <td></td>
                                      </tr>
                                      <tr>
                                        <td>Pr. HSINI Abdelghani</td>
                                        <td></td>
                                      </tr>
                                      <tr>
                                        <td>Pr. JERMOUMI Touriya</td>
                                        <td>touriya.jermoumi@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. KITANOU Sarra</td>
                                        <td></td>
                                      </tr>
                                      <tr>
                                        <td>Pr. KRIBII Abderahim</td>
                                        <td>abderahim.kribii@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. MOUSSOUT Hamou</td>
                                        <td>hamou.moussout@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. NASSALI Hakima</td>
                                        <td>hakima.nassali@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. OUDDA Hassan</td>
                                        <td>hassan.oudda@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. RAIR Driss</td>
                                        <td></td>
                                      </tr>
                                      <tr>
                                        <td>Pr. RIFI El Housseine</td>
                                        <td>elhousseine.rifi@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. SALLEK Brahim</td>
                                        <td>sallek.brahim@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. SHAIM Abdelillah</td>
                                        <td></td>
                                      </tr>
                                      <tr>
                                        <td>Pr. SRHIR Boussalham</td>
                                        <td></td>
                                      </tr>
                                      <tr>
                                        <td>Pr. TAHAIKT Mustapha</td>
                                        <td></td>
                                      </tr>
                                      <tr>
                                        <td>Pr. TAKY Mohamed</td>
                                        <td>mohamed.taky@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. TANJI Karim</td>
                                        <td></td>
                                      </tr>
                                      <tr>
                                        <td>Pr. TIYAL Fathallah</td>
                                        <td>fathallah.tiyal@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. ZARROK Hassan</td>
                                        <td></td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </Col>
                            </Row>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </Card.Body>
                  </Card>
                </Tab.Pane>
                
                <Tab.Pane eventKey="physique">
                  <Card className="shadow-sm mb-4">
                    <Card.Header className="bg-primary">
                      <h2 className="h5 mb-0 text-white fw-bold">Laboratoires du Département de Physique</h2>
                    </Card.Header>
                    <Card.Body>
                      <Accordion>
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>
                            <span className="fw-bold">Laboratoire Systèmes Electroniques, Traitement de l'information, Mécanique et Energétique</span>
                          </Accordion.Header>
                          <Accordion.Body>
                            <Row className="mb-3">
                              <Col md={12}>
                                <div className="border p-2 rounded mb-3 bg-light">
                                  <h3 className="h6 fw-bold">Directeur du laboratoire</h3>
                                  <p className="mb-0">Pr. MESSOUSSI Rochdi <span className="text-muted">- messoussi@uit.ac.ma</span></p>
                                </div>
                                
                                <h3 className="h6 fw-bold mt-4">Membres du laboratoire</h3>
                                <div className="table-responsive">
                                  <table className="table table-striped table-hover">
                                    <thead>
                                      <tr>
                                        <th>Nom</th>
                                        <th>Email</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>Pr. AGGOUR Mohammed</td>
                                        <td></td>
                                      </tr>
                                      <tr>
                                        <td>Pr. ADNANI Younes</td>
                                        <td></td>
                                      </tr>
                                      <tr>
                                        <td>Pr. AHD Mohamed</td>
                                        <td>mohamed.ahd@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. DLIMI Latifa</td>
                                        <td>latifa.dlimi@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. ECHCHELH Adil</td>
                                        <td>echchelh.adil@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. EL BARI Hassan</td>
                                        <td>elbari.hassan@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. EL FAYLALI Hanan</td>
                                        <td>hanan.elfaylali@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. EL HAMDAOUY Achour</td>
                                        <td></td>
                                      </tr>
                                      <tr>
                                        <td>Pr. EL MERABET Youssef</td>
                                        <td>youssef.elmerabet@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. HADJOUDJA Abdelkader</td>
                                        <td>abdelkader.hadjoudja@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. HAMAD Dahou</td>
                                        <td></td>
                                      </tr>
                                      <tr>
                                        <td>Pr. HEMINE Jamal</td>
                                        <td>jamal.hemine@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. HLOU Laamari</td>
                                        <td>laamari.hlou@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. IGOUZAL Mohammed</td>
                                        <td>mohammed.igouzal@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. JANATI IDRISSI Maria</td>
                                        <td>maria.janatiidrissi@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. LOUTFI Zohra</td>
                                        <td>zohra.loutfi@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. MANAR Abdelkrim</td>
                                        <td>manar.abdelkrim@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. MASAIF Noureddine</td>
                                        <td>masaif.noureddine@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. MEZOUARI Abdelkader</td>
                                        <td></td>
                                      </tr>
                                      <tr>
                                        <td>Pr. MOUHIB Omar</td>
                                        <td>mouhib.omar@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. NOURI Anas</td>
                                        <td></td>
                                      </tr>
                                      <tr>
                                        <td>Pr. SADOUNE Zouhair</td>
                                        <td>zouhair.sadoune@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. TOUAHNI Raja</td>
                                        <td>touahni.raja@uit.ac.ma</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </Col>
                            </Row>
                          </Accordion.Body>
                        </Accordion.Item>
                        
                        <Accordion.Item eventKey="1">
                          <Accordion.Header>
                            <span className="fw-bold">Laboratoire Physique des Matériaux et Subatomique</span>
                          </Accordion.Header>
                          <Accordion.Body>
                            <Row className="mb-3">
                              <Col md={12}>
                                <div className="border p-2 rounded mb-3 bg-light">
                                  <h3 className="h6 fw-bold">Directeur du laboratoire</h3>
                                  <p className="mb-0">Pr. CHAKIR El Mahjoub <span className="text-muted">- elmahjoub.chakir@uit.ac.ma</span></p>
                                </div>
                                
                                <h3 className="h6 fw-bold mt-4">Membres du laboratoire</h3>
                                <div className="table-responsive">
                                  <table className="table table-striped table-hover">
                                    <thead>
                                      <tr>
                                        <th>Nom</th>
                                        <th>Email</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>Pr. AABOUD Mourad</td>
                                        <td>morad.aaboud@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. ALIBRAHMI Elmehdi</td>
                                        <td>alibrahimi.elmehdi@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. BENDOUMOU Abdallah</td>
                                        <td>bendoumou.abdellah@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. BLIYA Abdesslam</td>
                                        <td></td>
                                      </tr>
                                      <tr>
                                        <td>Pr. CHAKIR El Mahjoub</td>
                                        <td>elmahjoub.chakir@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. CHOUKRI Abdelmajid</td>
                                        <td>choukri.abdelmajid@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. CHTOUKI Tarek</td>
                                        <td></td>
                                      </tr>
                                      <tr>
                                        <td>Pr. DAOUD Mohammed</td>
                                        <td></td>
                                      </tr>
                                      <tr>
                                        <td>Pr. DOUNIA Raja</td>
                                        <td>raja.dounia@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. EL HARFAOUI Nadia</td>
                                        <td>nadia.elharfaoui@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. EL HASNAOUI Mohamed</td>
                                        <td>med.elhasnaoui@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. EL MAGHRAOUI Mohammed</td>
                                        <td>mohammed.elmaghraoui@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. ERGUIG Hassane</td>
                                        <td></td>
                                      </tr>
                                      <tr>
                                        <td>Pr. FAHMI Atika</td>
                                        <td>atika.fahmi@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. FAHOUME Mounir</td>
                                        <td>mounir.fahoume@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. GOUIGHRI Mohamed</td>
                                        <td>mohamed.gouighri@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. HAKAM Oumkeltoum</td>
                                        <td>oumkeltoum.hakam@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. KHARCHAF Amina</td>
                                        <td>amina.kharchaf@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. LHARCH Mohamed</td>
                                        <td>mohamed.lharch@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. LOTFI Noureddine</td>
                                        <td>noureddine.lotfi@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. NOUNEH Khalid</td>
                                        <td>khalid.nouneh@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. RAIDOU Abderrahim</td>
                                        <td>abderrahim.raidou@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. RMILI Ahmed</td>
                                        <td>rmili_ahmed@yahoo.fr</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. TAYEBI Abderrahim</td>
                                        <td></td>
                                      </tr>
                                      <tr>
                                        <td>Pr. ZEROUAOUI Jamal</td>
                                        <td>jamal.zerouaoui@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. ZIAD Nadia</td>
                                        <td>nadia.ziad@uit.ac.ma</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </Col>
                            </Row>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </Card.Body>
                  </Card>
                </Tab.Pane>
                
                <Tab.Pane eventKey="mathematiques">
                  <Card className="shadow-sm mb-4">
                    <Card.Header className="bg-info">
                      <h2 className="h5 mb-0 text-white fw-bold">Laboratoires du Département de Mathématiques</h2>
                    </Card.Header>
                    <Card.Body>
                      <Accordion>
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>
                            <span className="fw-bold">Laboratoire Analyse, Géométrie et Applications</span>
                          </Accordion.Header>
                          <Accordion.Body>
                            <Row className="mb-3">
                              <Col md={12}>
                                <div className="border p-2 rounded mb-3 bg-light">
                                  <h3 className="h6 fw-bold">Directeur du laboratoire</h3>
                                  <p className="mb-0">Pr. YAHYAI Mohamed <span className="text-muted">- mohamed.yahyai@uit.ac.ma</span></p>
                                </div>
                                
                                <h3 className="h6 fw-bold mt-4">Membres du laboratoire</h3>
                                <div className="table-responsive">
                                  <table className="table table-striped table-hover">
                                    <thead>
                                      <tr>
                                        <th>Nom</th>
                                        <th>Email</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>Pr. AKHIAT Fettah</td>
                                        <td>fettah.akhiat@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. AMRI Mohamed Amin</td>
                                        <td>mohammedamin.amri@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. BOUALI Said</td>
                                        <td>said.bouali@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. BOUNADER Nordine</td>
                                        <td>nordine.bounader@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. BOUSSEJRA Abdelhamid</td>
                                        <td>boussejra.abdelhamid@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. ECH-CHAD Mohamed</td>
                                        <td>mohamed.ech-chad@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. ECHARGHAOUI Rachid</td>
                                        <td>rachid.echarghaoui@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. EL ALJ Mohammed Hassan</td>
                                        <td>mohammedhassan.elalj@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. EL ARROUCHI Mohamed</td>
                                        <td>elarrouchi.mohamed@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. EL HASSOUNI Souad</td>
                                        <td></td>
                                      </tr>
                                      <tr>
                                        <td>Pr. EL WAHBI Bouazza</td>
                                        <td>bouazza.elwahbi@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. ESSADIQ Abderrahman</td>
                                        <td>abderrahman.essadiq@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. FAHID Brahim</td>
                                        <td></td>
                                      </tr>
                                      <tr>
                                        <td>Pr. KAICER Mohammed</td>
                                        <td>mohammed.kaicer@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. KHALED Mohammed</td>
                                        <td>m.khaled@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. KONDAH Abdelaziz</td>
                                        <td>abdelaziz.kondah@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. MANSOURI Mohammed Wadia</td>
                                        <td>mansourimohammed.wadia@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. MEZIANI Rafik</td>
                                        <td>rafik.meziani@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. SFOULI Hassan</td>
                                        <td>hassan.sfouli@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. SRHIR Ahmed</td>
                                        <td>ahmed.srhir@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. YAFIA Redouane</td>
                                        <td>radouane.yafia@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. YAHYAI Mohamed</td>
                                        <td>mohamed.yahyai@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. YOUSSEFI Taoufik</td>
                                        <td>taoufik.youssefi@uit.ac.ma</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </Col>
                            </Row>
                          </Accordion.Body>
                        </Accordion.Item>
                        
                        <Accordion.Item eventKey="1">
                          <Accordion.Header>
                            <span className="fw-bold">Laboratoire Equations aux dérivées partielles, Algèbre et Géométrie spectrales</span>
                          </Accordion.Header>
                          <Accordion.Body>
                            <Row className="mb-3">
                              <Col md={12}>
                                <div className="border p-2 rounded mb-3 bg-light">
                                  <h3 className="h6 fw-bold">Directeur du laboratoire</h3>
                                  <p className="mb-0">Pr. KABBAJ Samir <span className="text-muted">- samir.kabbaj@uit.ac.ma</span></p>
                                </div>
                                
                                <h3 className="h6 fw-bold mt-4">Membres du laboratoire</h3>
                                <div className="table-responsive">
                                  <table className="table table-striped table-hover">
                                    <thead>
                                      <tr>
                                        <th>Nom</th>
                                        <th>Email</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>Pr. ABDELHAK Ahmed</td>
                                        <td>ahmed.abdelhak@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. AIT SIBAHA Mohammed</td>
                                        <td>mohammed.aitsibaha@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. AMEZIANE HASSANI Souad</td>
                                        <td>souad.amezianehassani@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. ASSERDA Said</td>
                                        <td>said.asserda@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. BENYAICHE Allami</td>
                                        <td>allami.benyaiche@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. BERGOUT Mohamed</td>
                                        <td>mohamed.berghout@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. BOUKRIM Lahcen</td>
                                        <td>lahcen.boukrim@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. EL FATINI Mohamed</td>
                                        <td>mohamed.elfatini@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. EL GOURARI Aiad</td>
                                        <td>aiad.elgourari@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. EL HAJIOUI Khalid</td>
                                        <td></td>
                                      </tr>
                                      <tr>
                                        <td>Pr. KABBAJ Samir</td>
                                        <td>samir.kabbaj@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. KACHA Ali</td>
                                        <td>kacha-ali@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. MAGHFOUL Mohamed</td>
                                        <td>mohamed.maghfoul@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. MBARKI Samir</td>
                                        <td>s.mbarki@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. MENTAGUI Driss</td>
                                        <td>driss.mentagui@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. MGHAZLI Zoubida</td>
                                        <td>zoubida.mghazli@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. MOALIGE Brahim</td>
                                        <td>brahim.moalige@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. MOULOUDI Abdelaaziz</td>
                                        <td>abdelaaziz.mouloudi@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. MOUSSA Mohammed</td>
                                        <td>mohammed.moussa@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. SBAI Mohammed</td>
                                        <td>mohammed.sbai@uit.ac.ma</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </Col>
                            </Row>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </Card.Body>
                  </Card>
                </Tab.Pane>
                
                <Tab.Pane eventKey="informatique">
                  <Card className="shadow-sm mb-4">
                    <Card.Header className="bg-secondary">
                      <h2 className="h5 mb-0 text-white fw-bold">Laboratoires du Département d'Informatique</h2>
                    </Card.Header>
                    <Card.Body>
                      <Accordion>
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>
                            <span className="fw-bold">Laboratoire Recherche en Informatique</span>
                          </Accordion.Header>
                          <Accordion.Body>
                            <Row className="mb-3">
                              <Col md={12}>
                                <div className="border p-2 rounded mb-3 bg-light">
                                  <h3 className="h6 fw-bold">Directeur du laboratoire</h3>
                                  <p className="mb-0">Pr. FAKHRI Youssef <span className="text-muted">- fakhri@uit.ac.ma</span></p>
                                </div>
                                
                                <h3 className="h6 fw-bold mt-4">Membres du laboratoire</h3>
                                <div className="table-responsive">
                                  <table className="table table-striped table-hover">
                                    <thead>
                                      <tr>
                                        <th>Nom</th>
                                        <th>Email</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>Pr. ABOUCHABAKA Jaafar</td>
                                        <td>jaafar.abouchabaka@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. AIT KERROUM Mounir</td>
                                        <td></td>
                                      </tr>
                                      <tr>
                                        <td>Pr. ALAMI CHENTOUFI Jihane</td>
                                        <td>j.alami@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. ALLAOUI Rabha</td>
                                        <td></td>
                                      </tr>
                                      <tr>
                                        <td>Pr. AMEUR El Bachir</td>
                                        <td>elbachir.ameur@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. AMNAI Mohamed</td>
                                        <td>mohamed.amnai@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. AZZOUZI Salma</td>
                                        <td>salma.azzouzi@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. BENATTOU Mohammed</td>
                                        <td>mohammed.benattou@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. BENLHACHMI Khalid</td>
                                        <td>khalid.benlhachmi@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. CHARAF Moulay El Hassan</td>
                                        <td>my.charaf@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. CHEKOUR Mohammed</td>
                                        <td></td>
                                      </tr>
                                      <tr>
                                        <td>Pr. CHIHAB Younes</td>
                                        <td></td>
                                      </tr>
                                      <tr>
                                        <td>Pr. CHOUKRI Ali</td>
                                        <td></td>
                                      </tr>
                                      <tr>
                                        <td>Pr. EL MAKRANI Adil</td>
                                        <td></td>
                                      </tr>
                                      <tr>
                                        <td>Pr. EL MOUDDEN Abdeslam</td>
                                        <td></td>
                                      </tr>
                                      <tr>
                                        <td>Pr. ELAZAMI Ikram</td>
                                        <td>ikram.elazami@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. ENNEYA Nourddine</td>
                                        <td>enneya@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. FAKHRI Youssef</td>
                                        <td>fakhri@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. GUERSS Fatima-Zahra</td>
                                        <td>fatimazahra.guerss@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. HADI Moulay Youssef</td>
                                        <td></td>
                                      </tr>
                                      <tr>
                                        <td>Pr. HOUSNI Khalid</td>
                                        <td>housni.khalid@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. IBRAHIMI Khalil</td>
                                        <td>ibrahimi.khalil@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. KHARRAZ AROUSSI Hatim</td>
                                        <td>hatim.kharrazaroussi@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. KORCHIYNE Redouan</td>
                                        <td></td>
                                      </tr>
                                      <tr>
                                        <td>Pr. LAASSIRI Jalal</td>
                                        <td>laassiri@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. LOUZAOUI Khadija</td>
                                        <td>khadija.louzaoui1@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. MOQQADDEM Safaa</td>
                                        <td></td>
                                      </tr>
                                      <tr>
                                        <td>Pr. MOURCHID Mohammed</td>
                                        <td>mohammed.mourchid@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. RAFALIA Najat</td>
                                        <td>najat.rafalia@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. SADIQ Abdelalim</td>
                                        <td>a.sadiq@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. SOUHAR Abdelghani</td>
                                        <td>abdelghani.souhar@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. TKATEK Said</td>
                                        <td>said.tkatek@uit.ac.ma</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </Col>
                            </Row>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </Card.Body>
                  </Card>
                </Tab.Pane>
                
                <Tab.Pane eventKey="geologie">
                  <Card className="shadow-sm mb-4">
                    <Card.Header className="bg-warning">
                      <h2 className="h5 mb-0 text-white fw-bold">Laboratoires du Département de Géologie</h2>
                    </Card.Header>
                    <Card.Body>
                      <Accordion>
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>
                            <span className="fw-bold">Laboratoire Géosciences</span>
                          </Accordion.Header>
                          <Accordion.Body>
                            <Row className="mb-3">
                              <Col md={12}>
                                <div className="border p-2 rounded mb-3 bg-light">
                                  <h3 className="h6 fw-bold">Directeur du laboratoire</h3>
                                  <p className="mb-0">Pr. BOUABDLI Abdelhak <span className="text-muted">- bouabdli@uit.ac.ma</span></p>
                                </div>
                                
                                <h3 className="h6 fw-bold mt-4">Membres du laboratoire</h3>
                                <div className="table-responsive">
                                  <table className="table table-striped table-hover">
                                    <thead>
                                      <tr>
                                        <th>Nom</th>
                                        <th>Email</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>Pr. ALLOUZA Mohamed</td>
                                        <td>mohamed.allouza@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. BEJJAJI Zohra</td>
                                        <td>zohra.bejjaji@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. BENAMMI Mohamed</td>
                                        <td>mohammed.benammi@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. BENMESBAH Abdelilah</td>
                                        <td>abdelilah.benmesbah@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. BOUABDLI Abdelhak</td>
                                        <td>bouabdli@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. CHAKIRI Saïd</td>
                                        <td>chakiri@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. EZZAYANI Jamil</td>
                                        <td>jamil.ezzayani@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. HAIMEUR Jamila</td>
                                        <td>jamila.haimeur@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. LAAMRANI EL IDRISSI Abdeljalil</td>
                                        <td>abdeljalil.laamranielidrissi@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. M'RABET Souad</td>
                                        <td>mrabet.souad@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. NAIM Hafida</td>
                                        <td>naim.hafida@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. OUBBIH Jamal</td>
                                        <td>jamal.oubbih@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. SADIKI Mohamed</td>
                                        <td>mohamed.sadiki@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. SAIDI Nadia</td>
                                        <td>nadia.saidi@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. SOUSSI TANANI Selma</td>
                                        <td>selma.soussitanani@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. TAYEBI Mohamed</td>
                                        <td>tayebi.mohamed@uit.ac.ma</td>
                                      </tr>
                                      <tr>
                                        <td>Pr. TOTO El Arbi</td>
                                        <td>elarbi.toto@uit.ac.ma</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </Col>
                            </Row>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </Card.Body>
                  </Card>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
        
        <div className="alert alert-secondary mt-4">
          <div className="d-flex">
            <div className="me-3">
              <FontAwesomeIcon icon="info-circle" size="lg" />
            </div>
            <div>
              <p className="mb-0">
                Pour plus d'informations sur les laboratoires, leurs équipements ou les possibilités de collaboration, 
                veuillez contacter directement les directeurs des laboratoires ou le 
                <Link to="/contact" className="mx-1">service de recherche</Link>
                de la faculté.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
} 