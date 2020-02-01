import styled from 'styled-components'

export const SignInWrapper = styled.div`
  max-width: 480px;
  margin: 0 auto;
  padding-top: 80px;
  padding-bottom: 165px;
  flex-grow: 1;
  width: 100%;
`

export const StyledSignInForm = styled.form`
  margin-bottom: 37px;
`

export const SignInFields = styled.div`
  margin-bottom: 23px;
`

export const SignInInput = styled.input`
  display: block;
  width: 100%;
  background: #2b1b1b;
  border-radius: 8px;
  border: 1px solid transparent;
  font-size: 30px;
  color: #dfcf77;
  line-height: 44px;
  font-weight: 300;
  padding: 25px 20px;
  transition: border-color 0.2s;
  outline: none;

  &:focus {
    border-color: #dfcf77;
  }

  &::placeholder {
    opacity: 1;
    color: rgba(223, 207, 119, 0.27);
  }
`

export const ErrorMessage = styled.div`
  font-size: 22px;
  color: #dfcf77;
  text-align: center;
  line-height: 26px;
  margin-bottom: 42px;
`

export const SignInField = styled.div<{ markWithError: boolean }>`
  margin-bottom: 3px;
  position: relative;

  & ${SignInInput}, & ${SignInInput}:focus {
    border-color: ${({ markWithError }) => markWithError && '#a8421e'};
  }

  &:last-child {
    margin-bottom: 0;
  }
`

export const SignInLabel = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  white-space: nowrap;
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(100%);
`

export const SignInButton = styled.button<{ disabled: boolean }>`
  display: block;
  width: 100%;
  padding: 24px 40px;
  background: none;
  border: ${({ disabled }) =>
    !disabled ? '1px solid rgba(217, 205, 141, 0.41)' : '1px solid rgba(74, 74, 58, 0.41)'};
  border-radius: 8px;
  transition: border-color 0.2s;
  font-size: 30px;
  line-height: 44px;
  text-align: center;
  color: ${({ disabled }) => (!disabled ? '#D9CD8D' : 'rgba(74, 74, 58, 0.41)')};
  cursor: ${({ disabled }) => (!disabled ? 'pointer' : 'auto')};

  &:hover,
  &:focus {
    border: ${({ disabled }) => !disabled && '1px solid rgba(217, 205, 141, 0.7)'};
  }
`
