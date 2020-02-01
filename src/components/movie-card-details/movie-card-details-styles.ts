import styled from 'styled-components'

export const MovieCardText = styled.div`
  color: #252525;
  width: 635px;
  font-size: 19px;
  line-height: 27px;
  display: flex;
  align-items: flex-start;
`

export const MovieCardTextCol = styled.div`
  width: 155px;
  margin-right: 35px;

  &:last-child {
    margin-right: 0;
  }

  & p {
    margin-top: 19px;
    margin-bottom: 19px;
  }
`

export const MovieCardDetailsItem = styled.p`
  font-size: 19px;
  line-height: 30px;
`

export const MovieCardDetailsName = styled.strong`
  display: block;
  color: #252525;
  font-weight: bold;
`

export const MovieCardDetailsValue = styled.span`
  color: #131313;
`
