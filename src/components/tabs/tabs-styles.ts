import styled from 'styled-components'

export const TabList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`

export const TabItem = styled.li`
  margin-right: 35px;

  &:last-child {
    margin-right: 0;
  }
`

export const TabItemLink = styled.a<{ active: boolean }>`
  display: block;
  color: #eee5b5;
  text-decoration: none;
  position: relative;
  padding-bottom: 19px;
  font-weight: ${({ active }) => active && 700};

  &::after {
    content: '';
    position: absolute;
    z-index: 1;
    left: 0;
    right: 0;
    height: 4px;
    bottom: 0;
    background: #eee5b5;
    display: ${({ active }) => (active ? 'block' : 'none')};
  }

  &:hover::after {
    display: block;
  }
`
