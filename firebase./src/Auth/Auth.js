import React from 'react'
import LogInForms from './LogInForms'

import { auth, googleProvider } from '../firebaseConfig'



class Auth extends React.Component {

    state = {
        isLoggedIn: false,
        loginInEmail:'',
        loginInPassword:''
    }
    //logowanie  wykrywamy czy ktos jest zalogowany
    componentDidMount() {
        auth.onAuthStateChanged(user => {
            if (user) {
                console.log('Logged in')
            } else {
                console.log('Not Logged in')
            }
        })

    }




    //logowanie poprzez google
    onLogInByGoogleClickHandler = () => {
        auth.signInWithPopup(googleProvider)
            .catch((error => {
                console.log(error)
                alert('błąd logowanie')
            }))

    }

    onEmailChangeHandler = event => this.setState({logInEmail:event.target.value}) 
    onPasswordChangeHandler = event =>this.setState({logInPassword:event.target.value})
    render() {
        return (
            <div>
                {
                    this.state.isLoggedIn ?
                        this.props.children
                        :

                        <LogInForms
                            onLogInByGoogleClickHandler={this.onLogInByGoogleClickHandler}
                            emailValue={this.state.logInEmail}
                            passwordValue={this.state.logInPassword}
                            onEmailChangeHandler={this.onEmailChangeHandler}
                            onPasswordChangeHandler={this.onPasswordChangeHandler}
                            onLogInByEmailAndPasswordClickHandler={this.onLogInByEmailAndPasswordClickHandler}
                        />
                }

            </div>


        )
    }
}

export default Auth