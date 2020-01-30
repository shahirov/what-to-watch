import React from 'react'

import { ReactComponent as AddIcon } from '../../../assets/icons/add.svg'

export const ListButton = () => {
  return (
    <button type="button">
      <AddIcon />
      <span>My list</span>
    </button>
  )
}
