import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../images/eyy.png'

const PostAuthor = () => {
  return (
    <Link to={`/posts/users/sfdfdf`} className='post__author'>
        <div className="post__author-avatar">
            <img src={Avatar} alt="" />
        </div>
        <div className="post__author-details">
            <h5>By: Wendell Cabasag</h5>
            <small>Just Now</small>
        </div>
    </Link>
  )
}

export default PostAuthor