import styled from 'styled-components'

export const StyledGenreList = styled.ul`
  padding: 25px 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`

export const GenreLink = styled.a<{ isActive: boolean }>`
  display: block;
  color: #dfcf77;
  text-decoration: none;
  position: relative;
  padding-bottom: 15px;
  transition: font-weight;
  font-weight: ${({ isActive }) => (isActive ? 'bold' : '')};

  &::after {
    content: '';
    position: absolute;
    z-index: 1;
    left: 0;
    right: 0;
    height: 1px;
    bottom: 0;
    background: #d9cd8d;
    display: ${({ isActive }) => (isActive ? 'block' : 'none')};
  }

  &:hover::after {
    display: block;
  }
`

export const GenreItem = styled.li`
  margin-right: 20px;
  margin-bottom: 20px;

  &:last-child {
    margin-right: 0;
  }
`
