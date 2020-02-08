import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { MovieCardHero, MovieCardWrapper } from './movie-details-styles'
import { RootState } from '../../store'
import { Logo } from '../../components/logo'
import { Footer } from '../../components/footer'
import { Header } from '../../components/header'
import { Movie } from '../../features/movies/slice'
import { UserBlock } from '../../components/user-block'
import { PageContent } from '../../components/page-content'
import { MovieCardTop } from '../../components/movie-card-top'
import { MovieCardFull } from '../../components/movie-card-full'
import { MovieCardBackground } from '../../components/movie-card-background'
import { SimilarMoviesCatalog } from '../../components/similar-movies-catalog'
import { MovieCardDescription } from '../../components/movie-card-description'
import { selectMovieById, selectSimilarMovies } from '../../features/movies/selectors'

export const MovieDetails = () => {
  const { movieId } = useParams<{ movieId: string }>()

  const movie = useSelector<RootState, Movie | undefined>(state =>
    selectMovieById(state, parseInt(movieId))
  )
  const similarMovies = useSelector<RootState, Movie[]>(state => selectSimilarMovies(state, movie))

  return movie ? (
    <>
      <MovieCardFull>
        <MovieCardHero>
          <MovieCardBackground movie={movie} />
          <Header userPage={false}>
            <Logo color="light" />
            <UserBlock />
          </Header>
          <MovieCardWrapper>
            <MovieCardDescription movie={movie} />
          </MovieCardWrapper>
        </MovieCardHero>
        <MovieCardTop movie={movie} />
      </MovieCardFull>
      <PageContent>
        <SimilarMoviesCatalog similarMovies={similarMovies} />
        <Footer />
      </PageContent>
    </>
  ) : null
}
