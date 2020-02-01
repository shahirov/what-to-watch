import React, { useEffect, useState } from 'react'

import { validate } from '../utils/validation'

export const useForm = (callback: Function) => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    touched: {
      email: false,
      password: false
    }
  })
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  })

  useEffect(() => {
    setErrors(validate(values))
  }, [values])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setValues(prevState => ({ ...prevState, [name]: value.toLocaleLowerCase() }))
    setErrors(validate(values))
  }

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const { name } = event.target

    setValues(prevState => ({
      ...prevState,
      touched: {
        ...prevState.touched,
        [name]: true
      }
    }))
    setErrors(validate(values))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    callback(values.email, values.password)
  }

  return [values, errors, handleSubmit, handleChange, handleBlur] as const
}
