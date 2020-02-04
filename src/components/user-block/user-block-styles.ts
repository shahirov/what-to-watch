import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledUserBlock = styled.div`
  margin-left: auto;
`

export const UserBlockAvatar = styled(Link)`
  width: 63px;
  height: 63px;
  overflow: hidden;
  border-radius: 50%;
`

export const UserBlockLink = styled(Link)`
  display: block;
  font-size: 20px;
  line-height: 24px;
  color: #dfcf77;
  font-weight: bold;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: #c9b37e;
  }
`

export const UserAvatar = styled.img`
  border-radius: 50%;
`
