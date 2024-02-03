import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'
import Thumbnail from '../images/travel.jpg'


const PostDetail = () => {
  return (
      <section className="post-detail">
        <div className="container post-detail__container">
            <div className="post-detail__header">
              <PostAuthor/>
              <div className="post-detail__buttons">
                <Link to={`/posts/werwer/edit`} className='btn sm primary'>Edit</Link>
                <Link to={`/posts/werwer/delete`} className='btn sm danger'>Delete</Link>
              </div>
            </div>
            <h1>Wanderlust Chronicles: Embarking on a Journey of Discovery</h1>
            <div className="post-detail__thumbnail">
              <img src={Thumbnail} alt="" />
            </div>
            <p>
            Embarking on a journey of travel is akin to unlocking the pages of a captivating novel, where each destination becomes a new chapter waiting to be explored. From the enchanting landscapes of distant lands to the vibrant tapestry of cultures, travel is a transformative experience that broadens horizons and enriches the soul.
            </p>
            <p>
            The allure of travel lies in the opportunity to immerse oneself in the unfamiliar, to taste exotic flavors, hear the rhythms of different languages, and witness the kaleidoscope of traditions that color the world. Whether traversing bustling city streets or navigating remote wilderness, every step becomes a brushstroke on the canvas of one's own adventure, creating memories that linger in the heart long after the journey concludes.
            </p>
            <p>
            Beyond the mere act of traversing physical distances, travel is a voyage into the realms of self-discovery. It challenges preconceptions, opens minds to new perspectives, and fosters a deep appreciation for the diversity that makes our planet so extraordinary. In the landscapes we traverse and the people we meet, we find reflections of ourselves, woven into the fabric of a global tapestry that connects us all.
            </p>
            <p>
            As the world beckons with its myriad wonders, the essence of travel lies not only in the destination but in the transformative process of exploration. It invites us to step outside our comfort zones, embrace the unknown, and savor the magic of the journey. In the tapestry of travel, each adventure becomes a brushstroke, painting a unique masterpiece of experiences that shape the narrative of our lives.
            </p>
        </div>
      </section>
  )
}

export default PostDetail