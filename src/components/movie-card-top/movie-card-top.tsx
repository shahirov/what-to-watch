import React, { useState } from 'react'

import { MovieCardTabs } from '../movie-card-tabs'
import { Movie } from '../../features/movies/slice'
import { MovieCardPoster } from '../movie-card-poster'
import { MovieCardDetails } from '../movie-card-details'
import { MovieCardReviews } from '../movie-card-reviews'
import { MovieCardOverview } from '../movie-card-overview'
import { StyledMovieCardTop, MovieCardInfo, MovieCardDesc } from './movie-card-top-styles'

interface MovieCardTopProps {
  movie: Movie
}

type Tabs = { [key: string]: JSX.Element }

export const MovieCardTop = ({ movie }: MovieCardTopProps) => {
  const [selectedTab, setSelectedTab] = useState('Overview')

  const tabs: Tabs = {
    Overview: <MovieCardOverview movie={movie} />,
    Details: <MovieCardDetails movie={movie} />,
    Reviews: <MovieCardReviews />
  }

  return (
    <StyledMovieCardTop>
      <MovieCardInfo>
        <MovieCardPoster size="big" movie={movie} />
        <MovieCardDesc>
          <MovieCardTabs tabs={tabs} onTabSelect={setSelectedTab} />
          {tabs[selectedTab]}
        </MovieCardDesc>
      </MovieCardInfo>
    </StyledMovieCardTop>
  )
}
