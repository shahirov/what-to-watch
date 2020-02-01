import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { Header, SignInPage, SignInPageTitle } from './sign-in-styles'
import { Logo } from '../../components/logo'
import { Footer } from '../../components/footer'
import { SingInForm } from '../../components/sign-in-form'
import { selectUserAuthStatus } from '../../features/authentication/selectors'

export const SignIn = () => {
  const isUserAuthed = useSelector(selectUserAuthStatus)

  if (isUserAuthed) {
    return <Redirect to="/" />
  }

  return (
    <SignInPage>
      <Header>
        <Logo color="light" />
        <SignInPageTitle>Sign In</SignInPageTitle>
      </Header>
      <SingInForm />
      <Footer />
    </SignInPage>
  )
}
