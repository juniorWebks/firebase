import React from 'react'
import Default from './Default'
import List from './List'
import Loading from './Loading'
import Forms from './Forms'


import { mapObjectToArray } from '../utils'

import database from '../firebaseConfig'
import Search from './Search'


class UserList extends React.Component {
    state = {
        newUserName: '',
        users: null,
        isLoadingUsers: false,
        searchPhrase: ''

    }

    initUsersSync = () => {
        this.setState({
            isLoadingUsers: true
        })


        // fetch('https://ks-sandbox-2cc5e.firebaseio.com/jfddl5-users/.json')
        database.ref('/jfddl5-users').on(
            'value',
            snapshot => {
                const data = snapshot.val()
                this.setState({
                    users: mapObjectToArray(data),
                    isLoadingUsers: false
                })
            }
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
            body: JSON.stringify({ name: this.state.newUserName })
        }

        fetch('https://ks-sandbox-2cc5e.firebaseio.com/jfddl5-users/.json', request)
            .then(response => {
                this.initUsersSync()
                this.setState({
                    newUserName: ''
                })
            })
    }

    onEditUserHandler = (key, newName) => {
        database.ref(`/jfddl5-users/${key}`).update({
            name: newName
        })
        //     fetch(`https://ks-sandbox-2cc5e.firebaseio.com/jfddl5-users/${key}/.json`,
        //         {
        //             method: 'PATCH',
        //             body: JSON.stringify({
        //                 name: newName
        //             })
        //         }
        //     )
        //     .then(()=>{
        //         this.initUsersSync()
        //     })
    }

    onSearchPhraseChanged = event => {
        this.setState({
            searchPhrase: event.target.value
        })
    }

    render() {
        const filteredUsers = this.state.users &&
        this.state.users.filter(
            user => user.name.indexOf(this.state.searchPhrase) !== -1
        )
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


                            <Search
                                serchPhrase={this.state.searchPhrase}
                                onSearchPhraseChanged={this.onSearchPhraseChanged}
                            />
                            <List
                                users={filteredUsers
                                    
                                    }
                                onEditUserHandler = {this.onEditUserHandler}
                                
                                        />
                        </div>
                            :
                        <Default
                                clickHandler={this.initUsersSync}
                                label={'Click'}
                            />
                            }
            
            </div>
        )
                }
            
            }
            
export default UserList