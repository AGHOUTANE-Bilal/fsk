import * as React from "react"
import { Link } from "gatsby"
import { Card, Badge } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SoutenanceCard = ({ soutenance }) => {
  return (
    <Card className="h-100">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <Badge bg={soutenance.type === "Doctorat" ? "primary" : "info"}>
            {soutenance.type}
          </Badge>
          <small className="text-muted card-date">
            <FontAwesomeIcon icon="calendar-alt" className="me-1" />
            {soutenance.date}
          </small>
        </div>
        <Card.Title>{soutenance.title}</Card.Title>
        <div className="mb-3">
          <div>
            <strong>Candidat(e):</strong> {soutenance.candidate}
          </div>
          <div>
            <strong>Directeur(s) de thèse:</strong> {soutenance.supervisors}
          </div>
          <div className="d-flex align-items-center">
            <FontAwesomeIcon icon="clock" className="me-1" />
            <span className="me-3">{soutenance.time}</span>
            <FontAwesomeIcon icon="map-marker-alt" className="me-1" />
            <span>{soutenance.location}</span>
          </div>
        </div>
        <Card.Text>{soutenance.excerpt}</Card.Text>
        <Link to={`/soutenances/${soutenance.slug}`} className="btn btn-sm btn-outline-primary">
          Plus de détails
        </Link>
      </Card.Body>
    </Card>
  )
}

export default SoutenanceCard 