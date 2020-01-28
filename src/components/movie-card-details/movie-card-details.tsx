import React from 'react'

import { Movie } from '../../features/movies/slice'
import {
  MovieCardText,
  MovieCardTextCol,
  MovieCardDetailsItem,
  MovieCardDetailsName,
  MovieCardDetailsValue
} from './movie-card-details-styles'
import { convertMinsToHrsMins } from '../../utils/time-convert'

interface MovieCardDetailsProps {
  movie: Movie
}

export const MovieCardDetails = ({
  movie: { director, starring, genre, released, runTime }
}: MovieCardDetailsProps) => {
  const { hour, min } = convertMinsToHrsMins(runTime)

  return (
    <MovieCardText>
      <MovieCardTextCol>
        <MovieCardDetailsItem>
          <MovieCardDetailsName>Director</MovieCardDetailsName>
          <MovieCardDetailsValue>{director}</MovieCardDetailsValue>
        </MovieCardDetailsItem>
        <MovieCardDetailsItem>
          <MovieCardDetailsName>Starring</MovieCardDetailsName>
          <MovieCardDetailsValue>
            {starring.map((star, idx) => (
              <React.Fragment key={idx}>
                {star} <br />
              </React.Fragment>
            ))}
          </MovieCardDetailsValue>
        </MovieCardDetailsItem>
      </MovieCardTextCol>
      <MovieCardTextCol>
        <MovieCardDetailsItem>
          <MovieCardDetailsName>Run Time</MovieCardDetailsName>
          <MovieCardDetailsValue>{`${hour}h ${min}m`}</MovieCardDetailsValue>
        </MovieCardDetailsItem>
        <MovieCardDetailsItem>
          <MovieCardDetailsName>Genre</MovieCardDetailsName>
          <MovieCardDetailsValue>{genre}</MovieCardDetailsValue>
        </MovieCardDetailsItem>
        <MovieCardDetailsItem>
          <MovieCardDetailsName>Released</MovieCardDetailsName>
          <MovieCardDetailsValue>{released}</MovieCardDetailsValue>
        </MovieCardDetailsItem>
      </MovieCardTextCol>
    </MovieCardText>
  )
}
