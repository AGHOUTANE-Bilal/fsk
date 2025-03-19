import * as React from "react"
import { Link } from "gatsby"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Layout from "../components/layout"
import Seo from "../components/seo"
import fskColors from "../utils/colors"
import pageStyles from "../utils/pageStyles"

const ContactPage = () => {
  const [formState, setFormState] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Formulaire soumis avec succès! (Simulation)");
  };

  return (
    <Layout>
      <section style={pageStyles.pageHeaderStyle}>
        <Container>
          <h1 style={pageStyles.pageTitleStyle}>CONTACT</h1>
          <p className="lead mb-0">Contactez la Faculté des Sciences de Kénitra</p>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <Row>
            <Col lg={6} className="mb-4 mb-lg-0">
              <h2 style={pageStyles.sectionTitleStyle}>Nous contacter</h2>
              
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Nom complet</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="name" 
                    value={formState.name} 
                    onChange={handleChange} 
                    required 
                    style={{ borderColor: fskColors.primary }}
                  />
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control 
                    type="email" 
                    name="email" 
                    value={formState.email} 
                    onChange={handleChange} 
                    required 
                    style={{ borderColor: fskColors.primary }}
                  />
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label>Sujet</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="subject" 
                    value={formState.subject} 
                    onChange={handleChange} 
                    required 
                    style={{ borderColor: fskColors.primary }}
                  />
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    rows={5} 
                    name="message" 
                    value={formState.message} 
                    onChange={handleChange} 
                    required 
                    style={{ borderColor: fskColors.primary }}
                  />
                </Form.Group>
                
                <Button 
                  type="submit" 
                  style={pageStyles.buttonStyle}
                  className="mt-2"
                >
                  Envoyer le message
                </Button>
              </Form>
            </Col>
            
            <Col lg={6}>
              <h2 style={pageStyles.sectionTitleStyle}>Informations de contact</h2>
              
              <div className="card border-0 shadow-sm mb-4">
                <div style={pageStyles.cardHeaderStyle}>
                  <h3 className="h5 mb-0">Adresse</h3>
                </div>
                <div className="card-body">
                  <p className="mb-0">
                    <FontAwesomeIcon icon="map-marker-alt" className="me-2" style={{ color: fskColors.primary }} />
                    Faculté des Sciences, Université Ibn Tofail<br />
                    Campus universitaire<br />
                    BP 133, Kénitra 14000, Maroc
                  </p>
                </div>
              </div>
              
              <div className="card border-0 shadow-sm mb-4">
                <div style={pageStyles.cardHeaderStyle}>
                  <h3 className="h5 mb-0">Téléphone et Fax</h3>
                </div>
                <div className="card-body">
                  <p className="mb-2">
                    <FontAwesomeIcon icon="phone" className="me-2" style={{ color: fskColors.primary }} />
                    +212 5 37 32 94 00
                  </p>
                  <p className="mb-0">
                    <FontAwesomeIcon icon="fax" className="me-2" style={{ color: fskColors.primary }} />
                    +212 5 37 32 94 33
                  </p>
                </div>
              </div>
              
              <div className="card border-0 shadow-sm mb-4">
                <div style={pageStyles.cardHeaderStyle}>
                  <h3 className="h5 mb-0">Email</h3>
                </div>
                <div className="card-body">
                  <p className="mb-0">
                    <FontAwesomeIcon icon="envelope" className="me-2" style={{ color: fskColors.primary }} />
                    contact@fs.uit.ac.ma
                  </p>
                </div>
              </div>
              
              <div className="card border-0 shadow-sm">
                <div style={pageStyles.cardHeaderStyle}>
                  <h3 className="h5 mb-0">Horaires d'ouverture</h3>
                </div>
                <div className="card-body">
                  <p className="mb-2">
                    <FontAwesomeIcon icon="clock" className="me-2" style={{ color: fskColors.primary }} />
                    <strong>Lundi - Vendredi:</strong> 8h30 - 16h30
                  </p>
                  <p className="mb-0">
                    <FontAwesomeIcon icon="calendar-alt" className="me-2" style={{ color: fskColors.primary }} />
                    <strong>Samedi - Dimanche:</strong> Fermé
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      
      <section className="py-5 bg-light">
        <Container>
          <h2 style={pageStyles.sectionTitleStyle} className="text-center mb-4">Localisation</h2>
          <div className="ratio ratio-16x9 shadow-sm">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.7242531753254!2d-6.5796548!3d34.2505556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda759f9847310ff%3A0xfcdd86e18b5b9130!2sFacult%C3%A9%20des%20Sciences%20de%20K%C3%A9nitra!5e0!3m2!1sfr!2sma!4v1645532590000!5m2!1sfr!2sma" 
              width="600" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              title="Carte de la Faculté des Sciences de Kénitra"
            ></iframe>
          </div>
        </Container>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo 
  title="Contact | Faculté des Sciences de Kénitra" 
  description="Contactez la Faculté des Sciences de Kénitra, Université Ibn Tofail. Adresse, téléphone, email et formulaire de contact."
/>

export default ContactPage 