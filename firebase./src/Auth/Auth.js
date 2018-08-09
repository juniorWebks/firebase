import React from 'react'
import LogInForms from './LogInForms'

import { auth, googleProvider } from '../firebaseConfig'



class Auth extends React.Component {

    state = {
        isLoggedIn: false
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
    onLogInClickHandler = () => {
        auth.signInWithPopup(googleProvider)
        .catch((error => {
            console.log(error)
            alert('błąd logowanie')
        }))
        
    }
    render() {
        return (
            <div>
                {
                    this.state.isLoggedIn ?
                        this.props.children
                        :

                        <LogInForms
                            onLogInClickHandler={this.onLogInClickHandler}
                        />
                }

            </div>


        )
    }
}

export default Auth