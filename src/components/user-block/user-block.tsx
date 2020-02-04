import React from 'react'
import { useSelector } from 'react-redux'

import { StyledUserBlock, UserBlockAvatar, UserBlockLink, UserAvatar } from './user-block-styles'
import { selectAuth, selectUserData } from '../../features/user/selectors'

export const UserBlock = () => {
  const isAuthed = useSelector(selectAuth)
  const userData = useSelector(selectUserData)

  return (
    <StyledUserBlock>
      {isAuthed ? (
        <UserBlockAvatar to="/mylist">
          <UserAvatar
            src={`https://es31-server.appspot.com${userData?.avatarUrl}`}
            alt="User avatar"
            width="63"
            height="63"
          />
        </UserBlockAvatar>
      ) : (
        <UserBlockLink to="/login">Sign in</UserBlockLink>
      )}
    </StyledUserBlock>
  )
}
