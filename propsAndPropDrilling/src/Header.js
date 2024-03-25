import React from 'react'


const Header = ({title}) => {

//   const headerStyle = {
//     background: "royalblue",
//     color: "goldenrod",
//     fontSize: "30px"
// }
    return (
      <header>
        <h1>{title}</h1>
      </header>

    )
  }
  
  Header.defaultProps = {
    title: "Default title"
  }
  
  export default Header;
