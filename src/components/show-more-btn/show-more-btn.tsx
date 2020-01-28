import React from 'react'

import { StyledShowMoreButton } from './show-more-btn-styles'

interface ShowMoreBtnProps {
  onButtonClick: () => void
}

export const ShowMoreBtn = ({ onButtonClick }: ShowMoreBtnProps) => {
  return (
    <StyledShowMoreButton type="button" onClick={onButtonClick}>
      Show more
    </StyledShowMoreButton>
  )
}
