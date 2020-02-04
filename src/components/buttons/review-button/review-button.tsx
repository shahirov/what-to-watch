import React from 'react'

import { LinkButton } from '../buttons-styles'
import { ReactComponent as AddIcon } from '../../../assets/icons/add.svg'

export const ReviewButton = () => {
  return (
    <LinkButton to="/movie/:movieId/review">
      <AddIcon />
      <span>Add review</span>
    </LinkButton>
  )
}
