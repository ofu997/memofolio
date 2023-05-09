import { useState } from 'react'

import SignUpForm from 'src/components/SignUpForm/SignUpForm.js'
import LogInForm from 'src/components/LoginForm/LoginForm.js'

const HandleUsersPage = () => {
  const [showSignUpForm, setShowSignUpForm] = useState(false)
  const [showLogInForm, setShowLogInForm] = useState(true)

  const toggleSignUpLogIn = () => {
    setShowSignUpForm(!showSignUpForm)
    setShowLogInForm(!showLogInForm)
  }

  return (
    <>
      <a href="/" className='link-that-does-not-look-like-a-link'>
        <h4 style={{ margin: '5rem 0rem 0rem 5rem' }}>Home</h4>
      </a>
      {showSignUpForm &&
        <SignUpForm
          setShowSignUpForm={setShowSignUpForm}
          setShowLogInForm={setShowLogInForm}
        />
      }
      {showLogInForm &&
        <LogInForm />
      }
      <h5
        onClick={toggleSignUpLogIn}
        style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}
      >
      {
        showLogInForm? `Don't have an account? Sign Up` : `Already have an account? Log In`
      }
      </h5>
    </>
  )
}

export default HandleUsersPage
