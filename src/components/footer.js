import * as React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = ({ siteTitle }) => {
  return (
    <footer className="bg-primary text-light py-5">
      <Container>
        <Row>
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="text-light">Contact</h5>
            <address className="mb-0">
              <p>
                <FontAwesomeIcon icon="map-marker-alt" className="me-2" />
                Campus universitaire, B.P 133, Kénitra 14000, Maroc
              </p>
              <p>
                <FontAwesomeIcon icon="phone" className="me-2" />
                +212 5 37 32 94 00
              </p>
              <p>
                <FontAwesomeIcon icon="fax" className="me-2" />
                +212 5 37 32 94 33
              </p>
              <p>
                <FontAwesomeIcon icon="envelope" className="me-2" />
                contact@fs.uit.ac.ma
              </p>
            </address>
          </Col>
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="text-light">Liens rapides</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-light">
                  Accueil
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/actualites" className="text-light">
                  Actualités
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/evenements" className="text-light">
                  Événements
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/soutenances" className="text-light">
                  Soutenances
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="text-light">
                  Contact
                </Link>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h5 className="text-light">Suivez-nous</h5>
            <div className="d-flex">
              <a href="https://facebook.com" className="text-light me-3" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
              </a>
              <a href="https://twitter.com" className="text-light me-3" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
              </a>
              <a href="https://youtube.com" className="text-light me-3" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={["fab", "youtube"]} size="2x" />
              </a>
              <a href="https://linkedin.com" className="text-light" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
              </a>
            </div>
          </Col>
        </Row>
        <hr className="my-4 bg-light" />
        <Row>
          <Col>
            <p className="text-center mb-0">
              &copy; {new Date().getFullYear()} {siteTitle}. Tous droits réservés.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer 