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
    content: '';
    margin-left: 4px;
    margin-right: 4px;
  }
`

export const MovieCardButtons = styled.div`
  display: flex;
`

export const MovieCardButton = styled.button`
  display: flex;
  vertical-align: top;
  border: 0;
  background: 0 0;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.26);
  border-radius: 8px;
  padding: 13px 30px;
  transition: 0.2s background-color, 0.2s transform;
  will-change: transform;
  align-items: center;
  min-width: 128px;
  text-decoration: none;
  color: #eee5b5;
  font-size: 17px;
  line-height: 20px;
  margin-right: 14px;

  &:last-child {
    margin-right: 0;
  }

  & img,
  & svg {
    vertical-align: top;
    margin-right: 9px;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.51);
    transform: scale(1.1);
  }
`
