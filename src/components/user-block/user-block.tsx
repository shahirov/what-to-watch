import React from 'react'

import { StyledUserBlock, UserBlockAvatar } from './user-block-styles'

export const UserBlock = () => {
  return (
    <StyledUserBlock>
      <UserBlockAvatar>
        <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
      </UserBlockAvatar>
    </StyledUserBlock>
  )
}
