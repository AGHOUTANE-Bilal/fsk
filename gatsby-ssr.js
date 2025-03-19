/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

// Import global styles to ensure they're included in SSR
import "./src/styles/global.css"

// Convert to consistent ES modules format
import React from "react"

// Export a single onRenderBody function that handles all tasks
export const onRenderBody = ({ setHeadComponents, setHtmlAttributes }) => {
  // Set HTML language attribute
  setHtmlAttributes({ lang: `fr` })
  
  // Add any head components if needed
  setHeadComponents([
    // Your head components go here
  ])
}

// Other exports if needed
export const wrapRootElement = ({ element }) => {
  return element
}

// If you were modifying the HTML structure
export const onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  // Modify head components if needed
}
