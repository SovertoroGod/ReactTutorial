import React from 'react'
import { Link } from 'react-router-dom'

export default function Navi() {
  return (
    <nav className="navibar">
      <h1>Tuti Website</h1>
      <div className="navtag">
        <Link to="/">Home</Link>
        <Link to="/create" style={{
          color : 'aqua',
          backgroundColor : 'blueviolet',
          borderRadius : 10,
        }}>New Page</Link>
      </div>
    </nav>
  )
}
