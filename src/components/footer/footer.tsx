import React from 'react'

import { CopyRight, StyledFooter } from './footer-styles'
import { Logo } from '../logo'

export const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <Logo />
      </div>

      <CopyRight>
        <p>© 2019 What to watch Ltd.</p>
      </CopyRight>
    </StyledFooter>
  )
}
