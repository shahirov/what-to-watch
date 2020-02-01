import styled, { css } from 'styled-components'

const SmallMovieCardPosterStyles = css`
  width: 132px;
  height: 198px;
  margin-left: auto;
  margin-right: auto;
  transform: translateY(40px);
`

const BigMovieCardPosterStyles = css`
  width: 273px;
  height: 410px;
`

const NormalMovieCardPosterStyles = css`
  width: 218px;
  height: 327px;
  margin-right: 40px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.4);
  flex-shrink: 0;
`

export const StyledMovieCardPoster = styled.div<{ size: 'small' | 'normal' | 'big' }>`
  ${NormalMovieCardPosterStyles};

  ${({ size }) => {
    switch (size) {
      case 'small':
        return SmallMovieCardPosterStyles
      case 'big':
        return BigMovieCardPosterStyles
      default:
        return NormalMovieCardPosterStyles
    }
  }};

  & img {
    vertical-align: top;
    width: 100%;
    height: 100%;
    font-family: 'object-fit:cover';
    object-fit: cover;
  }
`
