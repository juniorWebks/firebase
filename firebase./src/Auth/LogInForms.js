import React from 'react'
import LogInByGoogle from './LogInByGoogle'
import LoginByEmailandPassword from './LoginByEmailandPassword'
import CreateUserWithEmailAndPassword from './CreateUserWithEmailAndPassword'

const LogInForms = (props) => (
  <div>
    <LogInByGoogle
      onLogInClickHandler={props.onLogInByGoogleClickHandler}
    />
    <LoginByEmailandPassword
      emailValue={props.logInProps.emailValue}
      passwordValue={props.logInProps.passwordValue}
      onEmailChangedHandler={props.logInProps.onEmailChangedHandler}
      onPasswordChangedHandler={props.logInProps.onPasswordChangedHandler}
      onLogInClickHandler={props.logInProps.onLogInByEmailAndPasswordClickHandler}
    />
    <CreateUserWithEmailAndPassword
      emailValue={props.emailValue}
      passwordValue={props.passwordValue}
      onEmailChangedHandler={props.onEmailChangedHandler}
      onPasswordChangedHandler={props.onPasswordChangedHandler}
      onLogInClickHandler={props.onLogInByEmailAndPasswordClickHandler}
      />
  </div>
)

export default LogInForms