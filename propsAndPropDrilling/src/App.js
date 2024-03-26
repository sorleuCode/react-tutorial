
import AddItem from './AddItem';
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

  const [newItem, setNewItem] = useState('')

  const addItem = (item) => {
    const id = items.length? items[items.length - 1].id + 1 : 1;
    const myNewItem = {id, checked: false, item}
    const listItems = [...items, myNewItem]
    setItems(listItems);
    localStorage.setItem("shoppingList", JSON.stringify(listItems)); 
  }

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

const handleSubmit = (e) => {
  e.preventDefault()
  if (!newItem) return;
  addItem(newItem)
  setNewItem('');


}

  return (
    <div className="App">
        <Header title= "Welcome to props"/>
        <AddItem
          newItem = {newItem}
          setNewItem={setNewItem}
          handleSubmit={handleSubmit}
        />
        

        <Content
        items={items}
        handleCheck={handleCheck}
        handleDelete = {handleDelete}/>
        <Footer length={items.length}/>
        
        
    </div>
  );
}

export default App;
