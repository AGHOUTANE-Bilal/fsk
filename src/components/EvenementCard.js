import * as React from "react"
import { Link } from "gatsby"
import { Card } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const EvenementCard = ({ evenement }) => {
  return (
    <Card className="h-100">
      {evenement.image && (
        <Card.Img variant="top" src={evenement.image} alt={evenement.title} />
      )}
      <Card.Body>
        <div className="d-flex align-items-center mb-3">
          <div className="bg-primary text-light text-center p-2 me-3" style={{ width: "60px" }}>
            <div className="fw-bold fs-4">{evenement.day}</div>
            <div>{evenement.month}</div>
          </div>
          <div>
            <div className="text-muted">
              <FontAwesomeIcon icon="clock" className="me-1" />
              {evenement.time}
            </div>
            <div className="text-muted">
              <FontAwesomeIcon icon="map-marker-alt" className="me-1" />
              {evenement.location}
            </div>
          </div>
        </div>
        <Card.Title>{evenement.title}</Card.Title>
        <Card.Text>{evenement.excerpt}</Card.Text>
        <Link to={`/evenements/${evenement.slug}`} className="btn btn-sm btn-outline-primary">
          Plus de détails
        </Link>
      </Card.Body>
    </Card>
  )
}

export default EvenementCard 