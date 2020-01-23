import React, { useState } from 'react'

import { TabList, TabItem, TabItemLink } from './tabs-styles'

export const Tabs = () => {
  const [activeLink, setActiveLink] = useState<number>(0)

  const tabList = [{ title: 'Overview' }, { title: 'Details' }, { title: 'Reviews' }]

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, idx: number) => {
    event.preventDefault()
    setActiveLink(idx)
  }

  return (
    <TabList>
      {tabList.map(({ title }, idx) => (
        <TabItem key={idx}>
          <TabItemLink
            href="#/"
            active={activeLink === idx}
            onClick={event => handleClick(event, idx)}
          >
            {title}
          </TabItemLink>
        </TabItem>
      ))}
    </TabList>
  )
}
