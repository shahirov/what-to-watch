import React from 'react'

import { DefaultButton } from '../buttons-styles'
import { ReactComponent as AddIcon } from '../../../assets/icons/add.svg'

export const ListButton = () => {
  return (
    <DefaultButton type="button">
      <AddIcon />
      <span>My list</span>
    </DefaultButton>
  )
}
