import React, { useContext } from 'react'
import Post from './Post'
import UserInfoContext from '../context/UserInfoContext'; // Adjust the path as needed
export default function BlogPage() {
  const userinfo = useContext(UserInfoContext);
  return (
    <div>
        <h1>Blog Page</h1>
        <p>Welcome to the blog page! Here you can find various articles and posts.</p>
        <Post username={userinfo.username} isAdmin={userinfo.isAdmin} />
        {/* You can add more content or components related to the blog here */}
    </div>
  )
}
