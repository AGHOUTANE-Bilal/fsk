/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

// Import custom styles
import "../styles/custom.scss"
import "./layout.scss"

// Import FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { 
  fas, 
  faSearch, 
  faEnvelope, 
  faCalendarAlt, 
  faClock, 
  faMapMarkerAlt,
  faChevronLeft,
  faChevronRight,
  faUser,
  faUserGraduate,
  faUsers,
  faGraduationCap,
  faFlask,
  faCalendarPlus,
  faFax,
  faPhone
} from "@fortawesome/free-solid-svg-icons"

// Add FontAwesome icons to library
library.add(
  fab, 
  fas, 
  faSearch, 
  faEnvelope, 
  faCalendarAlt, 
  faClock, 
  faMapMarkerAlt,
  faChevronLeft,
  faChevronRight,
  faUser,
  faUserGraduate,
  faUsers,
  faGraduationCap,
  faFlask,
  faCalendarPlus,
  faFax,
  faPhone
)

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className="container-fluid p-0">
        <main>{children}</main>
        <Footer siteTitle={data.site.siteMetadata?.title || `Title`} />
      </div>
    </>
  )
}

export default Layout
