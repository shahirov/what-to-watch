import styled from 'styled-components'

export const CardImgContainer = styled.div`
  &,
  &::after {
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  &::after {
    content: '';
    z-index: 1;
    background: rgba(0, 0, 0, 0.4);
  }
`

export const CardBgImage = styled.img`
  vertical-align: top;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  font-family: 'object-fit:cover;object-position:center top';
`
