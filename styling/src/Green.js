import React from 'react';
import "./green.css"

const Green = () => {
  // const students = ["Soliu", "Zainab", "Hayzed", "Eef", "Kenny"];
  // const eachStudent = () => {
  //   let index = Math.floor(Math.random * students.length);
  //   return `${students[index]} is hardworking`;
  // }

    const handleClick = () => {
        console.log("I was clicked");

    }
  return ( 
    <div className='green'>
      <h1>This is green</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default Green
