import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

const LightLogoStyles = css`
  border: 1px solid rgba(223, 207, 119, 0.36);
  color: #d9cd8d;

  &[href]:focus,
  &[href]:hover {
    border-color: rgba(84, 80, 62, 0.36);
    color: #54503e;
  }
`

const DarkLogoStyles = css`
  margin: 0 auto 24px;
  border: 1px solid rgba(84, 80, 62, 0.36);
  color: #54503e;

  &[href]:focus,
  &[href]:hover {
    border-color: rgba(223, 207, 119, 0.36);
    color: #d9cd8d;
  }
`

const LogoLinkLetter = css`
  font-size: 26px;
`

export const LogoLink = styled(Link)<{ color: 'light' | 'dark' }>`
  ${({ color }) => (color === 'light' ? LightLogoStyles : DarkLogoStyles)};

  border-radius: 8px;
  width: 93px;
  height: 54px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  text-decoration: none;
  transition: color 0.2s, border-color 0.2s;
`

export const FirstLogoLinkLetter = styled.span`
  ${LogoLinkLetter};

  transform: rotate(-9deg) translateY(5px);
`

export const SecondLogoLinkLetter = styled.span`
  ${LogoLinkLetter};

  font-size: 30px;
`

export const ThirdLogoLinkLetter = styled.span`
  ${LogoLinkLetter};

  transform: rotate(8deg) translateY(5px);
`
