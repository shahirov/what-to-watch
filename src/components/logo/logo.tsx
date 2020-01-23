import React from 'react'

import {
  LogoLink,
  FirstLogoLinkLetter,
  SecondLogoLinkLetter,
  ThirdLogoLinkLetter
} from './logo-styles'

export const Logo = () => {
  return (
    <LogoLink to="/">
      <FirstLogoLinkLetter>W</FirstLogoLinkLetter>
      <SecondLogoLinkLetter>T</SecondLogoLinkLetter>
      <ThirdLogoLinkLetter>W</ThirdLogoLinkLetter>
    </LogoLink>
  )
}
