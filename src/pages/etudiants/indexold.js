import React from "react"
import { navigate } from "gatsby"

// Cette page redirige vers la page étudiants principale
const OldEtudiantsPage = () => {
  React.useEffect(() => {
    navigate("/etudiants")
  }, [])

  return (
    <div>
      <p>Redirection vers la page étudiants...</p>
    </div>
  )
}

export default OldEtudiantsPage 