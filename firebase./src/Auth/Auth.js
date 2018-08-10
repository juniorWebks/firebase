import React from 'react'
import LogInForms from './LogInForms'
import { auth, googleProvider } from '../firebaseConfig'

class Auth extends React.Component {
    state = {
        isLoggedIn: false,
        logInEmail: '',
        logInPasword: ''
    }

    componentDidMount() {
        auth.onAuthStateChanged(user => {
            if (user) {

                this.setState({
                    isLoggedIn: true
                })
            } else {
                this.setState({
                    isLoggedIn: false
                })
            }
        })
    }

    onLogInByGoogleClickHandler = () => {
        auth.signInWithPopup(googleProvider)
            .catch((error) => {
                console.log(error)
                alert('Błąd logowania!')
            })
    }

    onEmailChangedHandler = event => this.setState({ logInEmail: event.target.value })
    onPasswordChangedHandler = event => this.setState({ logInPasword: event.target.value })

    onLogInByEmailAndPasswordClickHandler = () => {
        auth.signInWithEmailAndPassword(this.state.logInEmail, this.state.logInPasword)
            .catch((error) => {
                console.log(error)
                alert('Błąd logowania!')
            })
    }

    render() {
        return (
            <div>
                {
                    this.state.isLoggedIn ?
                        this.props.children
                        :
                        <LogInForms
                            onLogInByGoogleClickHandler={this.onLogInByGoogleClickHandler}
                            logInProps={{
                                emailValue: this.state.logInEmail ,
              passwordValue: this.state.logInPasword ,
              onEmailChangedHandler: this.onEmailChangedHandler ,
              onPasswordChangedHandler: this.onPasswordChangedHandler ,
              onLogInByEmailAndPasswordClickHandler: this.onLogInByEmailAndPasswordClickHandler
                            }}
                            signUpProps={{

                            }}
                        />
                }
            </div>
        )
    }
}

export default Auth