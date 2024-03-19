import {useState} from 'react';
import './content.css';
import { FaTrash } from "react-icons/fa";

const Content = () => {
    // const [name, setName] = useState('Bashirat')
    // const [count, setCount] = useState(0)
    // const handleNameChange = () => {
    //     const names = ["Fulanny", "Oyee", "Eef"];
    //     const int = Math.floor(Math.random() * 3);
    //   setName(names[int])
    // };



    // const handleCLick2 = (name) => {
    //   console.log(`${name} was clicked`);
    // }


    const [items] = useState([
          {
            id: 1,
            checked: false,
            item: "A bag of Garri"
          },
          {
            id: 2,
            checked: false,
            item: "Rice"
          },
          {
            id: 3,
            checked: false,
            item: "Semo"
          },
          {
            id: 4,
            checked: false,
            item: "Ponmo"
          },
        ])

  return (
    
    <main className='student'>
      {/* <h1>{name}</h1>
      <button onClick={handleNameChange}>Change name</button>
      <button onDoubleClick={() => {handleCLick2("Hayzed")}}>Click me</button> */}

      <ul>
        {items.map((item) => {
          return (
          <li className='item' key = {item.id}>
            <input type="checkbox" checked ={item.checked} />
  
            <label>{item.item}</label>
            <FaTrash/>
        </li>)
        }
        )}
      </ul>
    </main>
  );
}

export default Content;
