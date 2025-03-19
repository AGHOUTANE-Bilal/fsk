/**
 * Common page styling utilities
 * This file provides consistent styling functions for use across all pages
 */

import fskColors from "./colors";

// Style for page headers (hero sections)
export const pageHeaderStyle = {
  backgroundColor: fskColors.primary,
  padding: '3rem 0',
  color: 'white',
  borderBottom: `5px solid ${fskColors.secondary}`
};

// Style for page titles
export const pageTitleStyle = {
  color: 'white',
  fontWeight: 'bold',
  fontSize: '2.5rem',
  marginBottom: '0.5rem',
  textShadow: '1px 1px 3px rgba(0,0,0,0.3)'
};

// Style for section titles
export const sectionTitleStyle = {
  color: fskColors.primary,
  fontWeight: 'bold',
  fontSize: '1.75rem',
  marginBottom: '1.5rem',
  paddingBottom: '0.5rem',
  borderBottom: `2px solid ${fskColors.accent}`
};

// Style for card headers
export const cardHeaderStyle = {
  backgroundColor: fskColors.primary,
  color: 'white',
  padding: '1rem 1.25rem',
  fontWeight: 'bold',
  fontSize: '1.25rem'
};

// Style for card headers with custom background color
export const cardHeaderWithColorStyle = (backgroundColor) => ({
  backgroundColor: backgroundColor || fskColors.primary,
  color: 'white',
  padding: '1rem 1.25rem',
  fontWeight: 'bold',
  fontSize: '1.25rem'
});

// Style for buttons
export const buttonStyle = {
  backgroundColor: fskColors.primary,
  color: 'white',
  border: 'none',
  borderRadius: '30px',
  padding: '0.5rem 1.5rem',
  fontWeight: '500',
  transition: 'all 0.3s ease'
};

// Style for secondary buttons
export const secondaryButtonStyle = {
  backgroundColor: 'transparent',
  color: fskColors.primary,
  border: `1px solid ${fskColors.primary}`,
  borderRadius: '30px',
  padding: '0.5rem 1.5rem',
  fontWeight: '500',
  transition: 'all 0.3s ease'
};

export default {
  pageHeaderStyle,
  pageTitleStyle,
  sectionTitleStyle,
  cardHeaderStyle,
  cardHeaderWithColorStyle,
  buttonStyle,
  secondaryButtonStyle
}; 