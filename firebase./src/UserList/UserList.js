import React from 'react'
import Default from './Default'


class UserList extends React.Component{
    state = {
        users:null,
        isLoadingUsers:false
    
}

render(){
    return(
        <div>
            <Default />
            </div>
    )
}
}
export default UserList