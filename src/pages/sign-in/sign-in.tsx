import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { Logo } from '../../components/logo'
import { SignInPage } from './sign-in-styles'
import { Footer } from '../../components/footer'
import { Header } from '../../components/header'
import { PageTitle } from '../../components/page-title'
import { SingInForm } from '../../components/sign-in-form'
import { selectAuth } from '../../features/user/selectors'

export const SignIn = () => {
  const isAuthed = useSelector(selectAuth)

  if (isAuthed) {
    return <Redirect to="/" />
  }

  return (
    <SignInPage>
      <Header userPage={true}>
        <Logo color="light" />
        <PageTitle>Sign In</PageTitle>
      </Header>
      <SingInForm />
      <Footer />
    </SignInPage>
  )
}
