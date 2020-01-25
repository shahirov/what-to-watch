import React from 'react'

import { Logo } from '../logo'
import { StyledHeader, UserBlock, UserBlockAvatar } from './header-styles'

export const Header = () => {
  return (
    <StyledHeader>
      <div>
        <Logo />
      </div>

      <UserBlock>
        <UserBlockAvatar>
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </UserBlockAvatar>
      </UserBlock>
    </StyledHeader>
  )
}
