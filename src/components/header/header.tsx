import React from 'react'

import { StyledHeader } from './header-styles'

interface HeaderProps {
  userPage: boolean
}

export const Header: React.FC<HeaderProps> = ({ children, userPage }) => {
  return <StyledHeader userPage={userPage}>{children}</StyledHeader>
}
