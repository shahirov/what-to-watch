import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { Logo } from '../../components/logo'
import { Footer } from '../../components/footer'
import { SingInForm } from '../../components/sign-in-form'
import { selectAuth } from '../../features/user/selectors'
import { Header, SignInPage, SignInPageTitle } from './sign-in-styles'

export const SignIn = () => {
  const isAuthed = useSelector(selectAuth)

  if (isAuthed) {
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
