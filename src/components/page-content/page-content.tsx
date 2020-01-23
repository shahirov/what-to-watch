import React from 'react'

import { StyledPageContent } from './page-content-styles'

export const PageContent: React.FC = ({ children }) => {
  return <StyledPageContent className="page-content">{children}</StyledPageContent>
}
