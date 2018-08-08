import React from 'react'
import Default from './Default'
import List from './List'
import Loading from './Loading'
import Forms from './Forms'


import {mapObjectToArray} from '../utils'


class UserList extends React.Component {
    state = {
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
                }))
        }

        render() {
            return (
                <div>
                    
                        {this.state.isLoadingUsers ?
                            <Loading />
                            :
                            this.state.users ?
                            <div>
                                <Forms />
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