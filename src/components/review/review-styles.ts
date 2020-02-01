import styled from 'styled-components'

export const StyledReview = styled.div`
  border-bottom: 2px solid #e8c3c4;
  font-size: 17px;
  color: #252525;
  line-height: 24px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-right: 75px;
  position: relative;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
    border-bottom: none;
  }
`

export const ReviewQuote = styled.blockquote`
  margin: 0;
  font-size: 17px;
  line-height: 24px;
`

export const ReviewText = styled.p`
  margin: 0;
  margin-bottom: 15px;
`

export const ReviewDetails = styled.footer`
  display: flex;
  font-size: 16px;
  line-height: 27px;
  color: rgba(0, 0, 0, 0.4);
`

export const ReviewAuthor = styled.cite`
  font-style: normal;
  font-weight: bold;
`

export const ReviewDate = styled.time`
  flex-shrink: 0;

  &::before {
    content: '·';
    margin-left: 4px;
    margin-right: 4px;
  }
`

export const ReviewRating = styled.div`
  position: absolute;
  right: 0;
  top: 22px;
  background: rgba(255, 255, 255, 0.24);
  border-radius: 8px;
  width: 55px;
  text-align: center;
  font-size: 19px;
  color: #353535;
  font-weight: 500;
  line-height: 25px;
  padding: 5px;
`
