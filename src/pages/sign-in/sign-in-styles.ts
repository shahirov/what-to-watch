import styled from 'styled-components'

export const SignInPage = styled.div`
  background-image: linear-gradient(-180deg, #170202 0%, #0c0101 100%);
  color: #c9b37e;
  padding: 15px;
  padding-bottom: 70px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  padding: 22px 75px;
  margin-bottom: 40px;
  width: 100%;
  position: relative;

  & a {
    margin: 0;
  }
`

export const SignInPageTitle = styled.h1`
  margin: 0 auto;
  font-size: 30px;
  line-height: 36px;
  color: #dfcf77;
  font-weight: 300;
  position: absolute;
  left: 200px;
  right: 200px;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
`
