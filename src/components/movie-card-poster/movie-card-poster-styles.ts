import styled from 'styled-components'

export const StyledMovieCardPoster = styled.div`
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.4);
  width: 218px;
  height: 327px;
  margin-right: 40px;
  flex-shrink: 0;

  & img {
    font-family: 'object-fit:cover';
  }
`
