import React, { Dispatch, SetStateAction, useState } from 'react'

import { TabList, TabItem, TabItemLink, TabNav } from './movie-card-tabs-styles'

interface MovieCardTabsProps {
  tabs: { [key: string]: JSX.Element }
  onTabSelect: Dispatch<SetStateAction<string>>
}

export const MovieCardTabs = ({ tabs, onTabSelect }: MovieCardTabsProps) => {
  const [activeLinkIdx, setActiveLinkIdx] = useState<number>(0)

  const selectTab = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    tab: string,
    idx: number
  ) => {
    event.preventDefault()

    setActiveLinkIdx(idx)
    onTabSelect(tab)
  }

  return (
    <TabNav>
      <TabList>
        {Object.keys(tabs).map((tab, idx) => (
          <TabItem key={idx}>
            <TabItemLink
              href="#/"
              active={activeLinkIdx === idx}
              onClick={event => selectTab(event, tab, idx)}
            >
              {tab}
            </TabItemLink>
          </TabItem>
        ))}
      </TabList>
    </TabNav>
  )
}
