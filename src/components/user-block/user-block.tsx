import React from 'react'
import { useSelector } from 'react-redux'

import { selectUserAuthStatus } from '../../features/authentication/selectors'
import { StyledUserBlock, UserBlockAvatar, UserBlockLink } from './user-block-styles'

export const UserBlock = () => {
  const isUserAuthed = useSelector(selectUserAuthStatus)

  return (
    <StyledUserBlock>
      {isUserAuthed ? (
        <UserBlockAvatar>
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </UserBlockAvatar>
      ) : (
        <UserBlockLink to="/login">Sign in</UserBlockLink>
      )}
    </StyledUserBlock>
  )
}
