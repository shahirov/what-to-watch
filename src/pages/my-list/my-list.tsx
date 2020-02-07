import React from 'react'
import { useSelector } from 'react-redux'

import { Logo } from '../../components/logo'
import { Header } from '../../components/header'
import { Footer } from '../../components/footer'
import { UserBlock } from '../../components/user-block'
import { PageTitle } from '../../components/page-title'
import { StyledMyList, Catalog } from './my-list-styles'
import { MovieCardList } from '../../components/movie-сard-list'
import { selectFavoriteMovies } from '../../features/movies/selectors'

export const MyList = () => {
  const favoriteMovies = useSelector(selectFavoriteMovies)

  return (
    <StyledMyList>
      <Header userPage={true}>
        <Logo color="light" />
        <UserBlock />
        <PageTitle>My List</PageTitle>
      </Header>
      <Catalog>
        <MovieCardList movies={favoriteMovies} />
      </Catalog>
      <Footer />
    </StyledMyList>
  )
}
