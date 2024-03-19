import React from 'react'

const Footer = () => {
    const currentYear = new Date();

  return (
    <footer>
      <p>Copyright &copy; {currentYear.getFullYear()} </p>
    </footer>
  )
}

export default Footer;
