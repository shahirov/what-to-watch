import styled from 'styled-components'

export const StyledMovieCardDesc = styled.div`
  flex-grow: 1;
`

export const MovieCardTitle = styled.h2`
  font-family: 'Arial Black', sans-serif;
  font-size: 32px;
  line-height: 45px;
  margin: 0 0 7px;
`

export const MovieCardMeta = styled.p`
  display: flex;
  font-size: 17px;
  line-height: 20px;
  margin: 0 0 20px;
`

export const MovieCardGenre = styled.span`
  &::after {
    content: '·';
    margin-left: 4px;
    margin-right: 4px;
  }
`
