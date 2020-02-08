import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledBreadcrumbs = styled.nav`
  margin: 0 20px;
`

export const BreadcrumbsList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
`

export const BreadcrumbsItem = styled.li`
  display: flex;

  &:not(:last-child)::after {
    content: '/';
    margin-left: 5px;
    margin-right: 5px;
    font-size: 17px;
    line-height: 20px;
  }
`

export const BreadcrumbsLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: #eee5b5;
  font-size: 17px;
  line-height: 20px;
  transition: color 0.2s;

  &[href]:hover {
    color: #dfcf77;
  }
`
