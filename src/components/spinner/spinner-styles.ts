import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const StyledSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(-180deg, #180202 0%, #000 100%);
`

export const Spin = styled.div`
  display: inline-block;
  width: 64px;
  height: 64px;

  &:after {
    content: ' ';
    display: block;
    width: 46px;
    height: 46px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: ${rotate} 1.2s linear infinite;
  }
`
