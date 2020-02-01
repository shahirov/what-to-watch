import React from 'react'

import { StyledPageContent } from './page-content-styles'

export const PageContent: React.FC = ({ children }) => {
  return <StyledPageContent>{children}</StyledPageContent>
}
