import styled from 'styled-components'

export const StyledMovieCardReviews = styled.div`
  display: flex;
  align-items: flex-start;
  padding-top: 20px;
`

export const MovieCardReviewsCol = styled.div`
  width: calc((100% - 60px) / 2);
  margin-right: 60px;
  max-width: 380px;

  &:last-child {
    margin-right: 0;
  }
`
