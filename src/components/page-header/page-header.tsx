import React from 'react'

import { Logo } from '../logo'
import { StyledPageHeader, UserBlock, UserBlockAvatar } from './page-header-styles'

export const PageHeader = () => {
  return (
    <StyledPageHeader>
      <div>
        <Logo />
      </div>

      <UserBlock>
        <UserBlockAvatar>
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </UserBlockAvatar>
      </UserBlock>
    </StyledPageHeader>
  )
}
