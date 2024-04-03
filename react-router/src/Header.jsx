import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <h1>Header</h1>
      <Link to="/about">About</Link>
    </header>
  )
}

export default Header
