import React, { useContext } from 'react'
import UserInfoContext from '../context/UserInfoContext'; // Adjust the path as needed

export default function Comment({username, isAdmin}) {
  return (
    <div>
      <h4> Logged in as {username} </h4>
    {isAdmin && <button>Delete Comment</button>}
    </div>
  )
}
