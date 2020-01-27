import React, { useState } from 'react'

import { TabList, TabItem, TabItemLink, TabNav } from './movie-card-tabs-styles'

export const MovieCardTabs = () => {
  const [activeLink, setActiveLink] = useState<number>(0)

  const tabList = [{ title: 'Overview' }, { title: 'Details' }, { title: 'Reviews' }]

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, idx: number) => {
    event.preventDefault()
    setActiveLink(idx)
  }

  return (
    <TabNav>
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
    </TabNav>
  )
}
