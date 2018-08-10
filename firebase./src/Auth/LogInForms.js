import React from 'react'
import LogInByGoogle from './LogInByGoogle'
import LoginByEmailAndPassword from './LoginByEmailAndPassword'
//const isLoggedIn = false

const LogInForms = (props) => (
    <div>
        <LogInByGoogle
            onLogInClickHandler={props.onLogInByGoogleClickHandler}
        />
            
        
        <LoginByEmailAndPassword
            emailValue={props.emailValue}
            passwordValue={props.passwordValue}
            onEmailChangeHandler={props.onEmailChangeHandler}
            onPasswordChangeHandler={props.onPasswordChangeHandler}
            onLogInClickHandler={props.onLogInByEmailAndPasswordClickHandler}

        />
    </div>
)
export default LogInForms