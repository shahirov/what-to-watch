import React from 'react'

import { Logo } from '../logo'
import { UserBlock } from '../user-block'
import { StyledHeader } from './header-styles'

export const Header = () => {
  return (
    <StyledHeader>
      <div>
        <Logo />
      </div>
      <UserBlock />
    </StyledHeader>
  )
}
