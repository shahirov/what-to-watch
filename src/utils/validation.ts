interface Values {
  email: string
  password: string
}

interface Errors {
  email: string
  password: string
}

export const validate = (values: Values): Errors => {
  const errors: Errors = {
    email: '',
    password: ''
  }

  if (!values.email) {
    errors.email = 'Email address is required'
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Please enter a valid email address'
  }

  if (!values.password) {
    errors.password = 'Password is required'
  } else if (values.password.length < 6) {
    errors.password = 'Password must be 6 or more characters'
  }

  return errors
}
