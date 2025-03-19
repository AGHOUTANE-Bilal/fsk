import * as React from "react"
import { Link } from "gatsby"
import { Card, Badge } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ActualiteCard = ({ actualite }) => {
  return (
    <Card className="h-100">
      {actualite.image && (
        <Card.Img variant="top" src={actualite.image} alt={actualite.title} />
      )}
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <Badge bg="primary">{actualite.category}</Badge>
          <small className="text-muted card-date">
            <FontAwesomeIcon icon="calendar-alt" className="me-1" />
            {actualite.date}
          </small>
        </div>
        <Card.Title>{actualite.title}</Card.Title>
        <Card.Text>{actualite.excerpt}</Card.Text>
        <Link to={`/actualites/${actualite.slug}`} className="btn btn-sm btn-outline-primary">
          Lire la suite
        </Link>
      </Card.Body>
    </Card>
  )
}

export default ActualiteCard 