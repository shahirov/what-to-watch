import styled, { css } from 'styled-components'

export const StyledHeader = styled.header<{ userPage: boolean }>`
  display: flex;
  align-items: center;
  max-width: 1300px;
  margin-right: auto;
  margin-bottom: 40px;
  margin-left: auto;
  padding: 22px 75px;

  ${({ userPage }) =>
    userPage &&
    css`
      margin-bottom: 40px;
      width: 100%;
      position: relative;
    `}
`
