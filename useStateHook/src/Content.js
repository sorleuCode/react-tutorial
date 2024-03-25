import {useState} from 'react';
import './content.css';
import { FaTrash } from "react-icons/fa";

const Content = () => {


    const [items, setItems] = useState([
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

    const handleCheck = (id) => {

      // console.log(`Key: ${id}`)

      const listItems = items.map((item) => item.id === id? {...item, checked: !item.checked} : item);
      setItems(listItems);

      localStorage.setItem("shoppingList", JSON.stringify(listItems));  
     };

     const handleDelete = (value) => {
      const listItems = items.filter((item) => item.id !== value);
      setItems(listItems);

      // console.log(listItems)

     };

     

  return (
    
    <main className='student'>
      {items.length ? (
        <ul>
        {items.map((item) => {
          return (
          <li className='item' key = {item.id}>
            <input type="checkbox"
             onClick={() => handleCheck(item.id)}
             checked ={item.checked} />
  
            <label
            style={(item.checked) ? {textDecoration: "line-through"} : null}
            onDoubleClick={() => handleDelete(item.id)}
            >{item.item}</label>
            <FaTrash 
            onClick={() => handleDelete(item.id)}
            role='button'
            tabIndex="0"/>
        </li>);
      
        }
        )}
      </ul>
      ):
        (<p style={{marginTop: "2rem"}}>Your list is empty</p>
      )}
      
    </main>
  );
}

export default Content;
