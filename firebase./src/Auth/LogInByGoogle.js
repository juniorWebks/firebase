import React from 'react'

const LogInByGoogle = (props) => (
  <div>
    <button
      onClick={props.onLogInClickHandler}
    >
      Log in by Google!
    </button>
  </div>
)

export default LogInByGoogle