import * as React from "react"

const AllFiles = () => {
  return (
    <>
      {/* First card */}
      <div className="card border-0 shadow-sm mb-4">
        <div className="card-header bg-primary text-white" style={{ fontWeight: 'bold' }}>
          <h3 className="h5 mb-0" style={{ color: 'white' }}>Détails de l'événement</h3>
        </div>
        {/* Card body content */}
      </div>

      {/* Second card */}
      <div className="card border-0 shadow-sm mb-4">
        <div className="card-header bg-primary text-white" style={{ fontWeight: 'bold' }}>
          <h3 className="h5 mb-0" style={{ color: 'white' }}>Liens importants</h3>
        </div>
        {/* Card body content */}
      </div>

      {/* Third card */}
      <div className="card border-0 shadow-sm">
        <div className="card-header bg-primary text-white" style={{ fontWeight: 'bold' }}>
          <h3 className="h5 mb-0" style={{ color: 'white' }}>Partagez cet événement</h3>
        </div>
        {/* Card body content */}
      </div>
    </>
  )
}

export default AllFiles 