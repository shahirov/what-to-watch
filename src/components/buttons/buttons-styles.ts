import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

const ButtonStyles = css`
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

export const LinkButton = styled(Link)`
  ${ButtonStyles};
`

export const DefaultButton = styled.button`
  ${ButtonStyles};

  outline: none;
`
