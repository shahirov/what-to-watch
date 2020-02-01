import React from 'react'
import { useDispatch } from 'react-redux'

import {
  ErrorMessage,
  SignInButton,
  SignInField,
  SignInFields,
  StyledSignInForm,
  SignInInput,
  SignInLabel,
  SignInWrapper
} from './sign-in-form-styles'
import { useForm } from '../../hooks/use-form'
import { loginStart } from '../../features/authentication/slice'

export const SingInForm = () => {
  const dispatch = useDispatch()

  const login = (email: string, password: string) => {
    dispatch(loginStart({ email, password }))
  }

  const [values, errors, handleSubmit, handleChange, handleBlur] = useForm(login)

  const isDisabled = Object.values(errors).some(error => error.length > 0)

  return (
    <SignInWrapper>
      <StyledSignInForm onSubmit={handleSubmit}>
        <SignInFields>
          <SignInField markWithError={errors.email.length > 0 && values.touched.email}>
            <SignInInput
              id="email"
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Email address"
            />
            <SignInLabel htmlFor="email">Email address</SignInLabel>
            {errors.email.length > 0 && values.touched.email && (
              <ErrorMessage>{errors.email}</ErrorMessage>
            )}
          </SignInField>
          <SignInField markWithError={errors.password.length > 0 && values.touched.password}>
            <SignInInput
              id="password"
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Password"
            />
            <SignInLabel htmlFor="password">Password</SignInLabel>
            {errors.password.length > 0 && values.touched.password && (
              <ErrorMessage>{errors.password}</ErrorMessage>
            )}
          </SignInField>
        </SignInFields>
        <div>
          <SignInButton type="submit" disabled={isDisabled}>
            Sign in
          </SignInButton>
        </div>
      </StyledSignInForm>
    </SignInWrapper>
  )
}
