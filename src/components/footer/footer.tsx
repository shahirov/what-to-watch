import React from 'react'

import { CopyRight, StyledFooter } from './footer-styles'
import { Logo } from '../logo'

export const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <Logo color="dark" />
      </div>

      <CopyRight>
        <p>© 2019 What to watch Ltd.</p>
      </CopyRight>
    </StyledFooter>
  )
}
