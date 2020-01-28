import styled from 'styled-components'

export const MovieRating = styled.div`
  display: flex;
  align-items: center;
  padding-top: 35px;
  padding-bottom: 25px;
`

export const MovieRatingScore = styled.div`
  background: rgba(255, 255, 255, 0.24);
  border-radius: 8px;
  font-size: 30px;
  line-height: 36px;
  color: rgba(0, 0, 0, 0.5);
  padding: 8px 12px;
  margin-right: 9px;
`

export const MovieRatingMeta = styled.p`
  margin: 0;
  font-size: 19px;
  color: rgba(0, 0, 0, 0.5);
  display: flex;
`

export const MovieRatingLevel = styled.span`
  font-weight: 700;

  &::after {
    content: '';
    margin-left: 4px;
    margin-right: 4px;
    font-weight: 400;
  }
`

export const MovieRatingCount = styled.span`
  color: #382c2a;
`

export const MovieCardText = styled.span`
  color: #252525;
  width: 635px;
  font-size: 19px;
  line-height: 27px;
`

export const MovieCardDirector = styled.p`
  line-height: 21px;
  color: rgba(0, 0, 0, 0.4);
`

export const MovieCardStarring = styled.p`
  line-height: 24px;
  color: rgba(0, 0, 0, 0.4);
`
