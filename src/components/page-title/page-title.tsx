import React from 'react'

import { Title } from './page-title-styles'

export const PageTitle: React.FC = ({ children }) => {
  return <Title>{children}</Title>
}
