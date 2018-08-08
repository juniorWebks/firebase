import React from 'react'
import ReactTypes from 'prop-types'


const Default = (props) => (
<div>
<button
onClick={props.clickHandler}
>
{props.label}
</button>
    </div>

)
export default Default