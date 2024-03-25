
import './App.css';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import {useState} from 'react';

function App() {

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
    <div className="App">
        <Header title= "Welcome to props"/>
        <Content
        items={items}
        handleCheck={handleCheck}
        handleDelete = {handleDelete}/>
        <Footer length={items.length}/>
        
        
    </div>
  );
}

export default App;
