import {useState} from 'react';
import './content.css';

const Content = () => {

    const [name, setName] = useState('Bashirat')
    const handleNameChange = () => {
        const names = ["Fulanny", "Oyee", "Eef"];
        const int = Math.floor(Math.random() * 3);
    
        return names[int]
      };
    const handleClick = () => {
      console.log("You clicked")
    }

    const handleCLick2 = (name) => {
      console.log(`${name} was clicked`);
    }
  return (
    
    <main className='student'>
      <h1>{name}</h1>
      <button onClick={handleClick}>Click me</button>
      <button onDoubleClick={() => {handleCLick2("Hayzed")}}>Click me</button>
    </main>
  )
}

export default Content;
