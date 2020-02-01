import React from 'react'

import {
  LogoLink,
  FirstLogoLinkLetter,
  SecondLogoLinkLetter,
  ThirdLogoLinkLetter
} from './logo-styles'

interface LogoProps {
  color: 'light' | 'dark'
}

export const Logo = ({ color }: LogoProps) => {
  return (
    <LogoLink to="/" color={color}>
      <FirstLogoLinkLetter>W</FirstLogoLinkLetter>
      <SecondLogoLinkLetter>T</SecondLogoLinkLetter>
      <ThirdLogoLinkLetter>W</ThirdLogoLinkLetter>
    </LogoLink>
  )
}
