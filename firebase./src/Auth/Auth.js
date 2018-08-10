import React from 'react'
import LogInForms from './LogInForms'
import { auth, googleProvider } from '../firebaseConfig'

class Auth extends React.Component {
    state = {
        isLoggedIn: false,
        logInEmail: '',
        logInPasword: '',
        signUpEmail: '',
        signUpPasword: ''

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



    logInFunctions = {
        onEmailChangedHandler: event => this.setState({ logInEmail: event.target.value }),
        onPasswordChangedHandler: event => this.setState({ logInPasword: event.target.value }),//onEmailChangedHandler : event => this.setState({ logInEmail: event.target.value }),
        //onPasswordChangedHandler : event => this.setState({ logInPasword: event.target.value }),

        onLogInByEmailAndPasswordClickHandler: () => {
            auth.signInWithEmailAndPassword(this.state.logInEmail, this.state.logInPasword)
                .catch((error) => {
                    console.log(error)
                    alert('Błąd logowania!')
                })
        }

    }

    signUpFunctions = {
        onEmailChangedHandler: event => this.setState({ signUpEmail: event.target.value }),
        onPasswordChangedHandler: event => this.setState({ signUpPasword: event.target.value }),
        onSignUpByEmailAndPasswordClickHandler: () => {
            auth.createUserWithEmailAndPassword(this.state.signUpEmail, this.state.signUpPasword)
                .catch((error) => {
                    console.log(error)
                    alert('Błąd rejestracji')
                })
        }

    }

    render() {
        return (
            <div>
                {
                    this.state.isLoggedIn ?
                        <div>
                            <div>
                                <button
                                    onClick={() => auth.signOut()}
                                >
                                    Log out!
                            </button>
                            </div>
                            {this.props.children}
                        </div>
                        :
                        <LogInForms
                            onLogInByGoogleClickHandler={this.onLogInByGoogleClickHandler}
                            logInProps={{
                                emailValue: this.state.logInEmail,
                                passwordValue: this.state.logInPasword,
                                onEmailChangedHandler: this.logInFunctions.onEmailChangedHandler,
                                onPasswordChangedHandler: this.logInFunctions.onPasswordChangedHandler,
                                onLogInByEmailAndPasswordClickHandler: this.logInFunctions.onLogInByEmailAndPasswordClickHandler
                            }}
                            signUpProps={{
                                emailValue: this.state.signUpEmail,
                                passwordValue: this.state.signUpPasword,

                                onEmailChangedHandler: this.signUpFunctions.onEmailChangedHandler,
                                onPasswordChangedHandler: this.signUpFunctions.onPasswordChangedHandler,

                                onSingUpClickHandler: this.signUpFunctions.onSingUpByEmailAndPasswordClickHandler
                            }}
                        />
                }
            </div>
        )
    }
}

export default Auth