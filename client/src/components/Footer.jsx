import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <ul className="footer__categories">
        <li><Link to="/posts/categories/Philippines">Philippines</Link></li>
        <li><Link to="/posts/categories/Spain">Spain</Link></li>
        <li><Link to="/posts/categories/China">China</Link></li>
        <li><Link to="/posts/categories/Greece">Greece</Link></li>
        <li><Link to="/posts/categories/Korea">Korea</Link></li>
        <li><Link to="/posts/categories/Paris">Paris</Link></li>
        <li><Link to="/posts/categories/Canada">Canada</Link></li>
        <li><Link to="/posts/categories/Uncategorized">Uncategorized</Link></li>
      </ul>
      <div className="footer__copyright">
        <small>All Rights Reserved &copy; Copyright, Wendy's Cabasag.</small>
      </div>
    </footer>
  )
}

export default Footer