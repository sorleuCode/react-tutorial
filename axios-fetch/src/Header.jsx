import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({title}) => {
  return (
    <header className='Header'>
      <h1>{title}</h1>
    </header>
  )
}

export default Header
