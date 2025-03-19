import * as React from "react"
import { navigate } from "gatsby"

// Redirect component that will send users to the students main page
const StagesPage = () => {
  React.useEffect(() => {
    navigate("/etudiants")
  }, [])
  
  return (
    <div>
      <p>Redirecting...</p>
    </div>
  )
}

export default StagesPage 