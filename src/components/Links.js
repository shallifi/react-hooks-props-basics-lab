import React from 'react'
import user from '../data/user'

function Links(props) {
    // console.log(user);
  return (
    <div>
        <h3>Links</h3>
        <a href= {props.links}>{props.github}</a>
        <a href= {props.links}>{props.linkedin}</a>
        
    </div>
  )
}

export default Links;