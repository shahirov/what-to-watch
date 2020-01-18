import styled from 'styled-components'

export const MovieCardWrapper = styled.article`
  border-radius: 6px;
  overflow: hidden;
  position: relative;
  transition: 0.2s transform;
  width: calc((100% - 30px) / 4);
  margin-right: 10px;
  margin-bottom: 55px;

  &:nth-child(4n) {
    margin-right: 0;
  }

  &:nth-last-child(-n + 4) {
    margin-bottom: 0;
  }

  &:hover {
    z-index: 3;
    transform: scale(1.2);
  }
`

export const MovieCardImageContainer = styled.div`
  position: relative;
  z-index: 1;
  height: 175px;

  &::after {
    content: '';
    position: absolute;
    z-index: 1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: linear-gradient(to bottom, transparent 25%, rgba(0, 0, 0, 0.63) 97%);
  }
`

export const MovieCardTitle = styled.h3`
  position: absolute;
  z-index: 2;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 10px 15px;
  margin: 0;
  font-size: 17px;
  line-height: 20px;
  font-weight: 500;
`

export const MovieCardLink = styled.a`
  display: inline-block;
  vertical-align: top;
  text-decoration: none;
  color: inherit;
`
