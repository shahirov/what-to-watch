import styled from 'styled-components'

export const RatingStars = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
`

export const RatingLabel = styled.label`
  font-size: 0;
  line-height: 0;
  display: block;
  padding-right: 10px;
  cursor: pointer;

  &:last-child {
    padding-right: 0;
  }

  &::after {
    content: '★';
    display: block;
    font-size: 32px;
    line-height: 36px;
    color: rgba(56, 44, 42, 0.7);
    transition: color 0.2s;
  }
`

export const RatingInput = styled.input`
  display: none;

  &:checked ~ ${RatingLabel}::after {
    color: rgba(56, 44, 42, 0.36);
  }

  &:checked + ${RatingLabel}::after {
    color: rgba(56, 44, 42, 0.7);
  }
`
