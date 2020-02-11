import styled from 'styled-components'

export const AddReviewText = styled.div`
  background: #e8c3c4;
  border-radius: 8px;
`

export const AddReviewTextArea = styled.textarea`
  display: block;
  width: 100%;
  border: none;
  background: none;
  resize: vertical;
  height: 150px;
  min-height: 150px;
  padding: 25px;
  font-size: 17px;
  color: #252525;
  line-height: 24px;
  outline: none;

  &::placeholder {
    opacity: 1;
    color: #252525;
  }
`

export const AddReviewSubmit = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px 20px;
`

export const AddReviewButton = styled.button<{ disabled: boolean }>`
  display: block;
  padding: 0;
  border: none;
  background: none;
  font-size: 17px;
  color: #866866;
  letter-spacing: 0;
  line-height: 27px;
  font-weight: bold;
  cursor: pointer;
  transition: opacity 0.2s;
  opacity: ${({ disabled }) => disabled && '0.5'};

  &:hover {
    opacity: 0.5;
  }
`
