import React from 'react'

import {
  StyledBreadcrumbs,
  BreadcrumbsList,
  BreadcrumbsItem,
  BreadcrumbsLink
} from './breadcrumbs-styles'
import { Movie } from '../../features/movies/slice'

interface BreadcrumbsProps {
  movie: Movie
}

export const Breadcrumbs = ({ movie: { name, id } }: BreadcrumbsProps) => {
  return (
    <StyledBreadcrumbs>
      <BreadcrumbsList>
        <BreadcrumbsItem>
          <BreadcrumbsLink to={`/movie/${id}`}>{name}</BreadcrumbsLink>
        </BreadcrumbsItem>
        <BreadcrumbsItem>
          <BreadcrumbsLink to={`/movie/${id}/review`}>Add review</BreadcrumbsLink>
        </BreadcrumbsItem>
      </BreadcrumbsList>
    </StyledBreadcrumbs>
  )
}
