import React from 'react'
import Default from './Default'
import List from './List'
import Loading from './Loading'
import Forms from './Forms'


import { mapObjectToArray } from '../utils'


class UserList extends React.Component {
    state = {
        newUserName: '',
        users: null,
        isLoadingUsers: false

    }

    loadUsers = () => {
        this.setState({
            isLoadingUsers: true
        })

        fetch('https://ks-sandbox-2cc5e.firebaseio.com/jfddl5-users/.json')
            .then(response => response.json())
            .then(data => this.setState({
                users: mapObjectToArray(data),
                isLoadingUsers: false
            })
            )
    }

    newUserChangeHandler = (event) => {
        this.setState({
            newUserName: event.target.value
        })

    }

    onAddNewUserClick = () => {
        const request = {
            method: "POST",
            body: JSON.stringify({name:this.state.newUserName})
        }

fetch('https://ks-sandbox-2cc5e.firebaseio.com/jfddl5-users/.json',request)
.then(response=> {
    this.loadUsers()
    this.setState({
        newUserName:''
    })
})
    }

    render() {
        return (
            <div>

                {this.state.isLoadingUsers ?
                    <Loading />
                    :
                    this.state.users ?
                        <div>
                            <Forms
                                newUserName={this.state.newUserName}
                                newUserChangeHandler={this.newUserChangeHandler}
                                onAddNewUserClick={this.onAddNewUserClick}
                            />
                            <List
                                users={this.state.users}
                            />
                        </div>
                        :
                        <Default
                            clickHandler={this.loadUsers}
                            label={'Click'}
                        />
                }

            </div>
        )
    }

}

export default UserList