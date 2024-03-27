
import AddItem from './AddItem';
import './App.css';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import {useState} from 'react';
import SearchItem from './SearchItem';

function App() {

  const [items, setItems] = useState(JSON.parse(localStorage.getItem("shoppingList")));

  const [newItem, setNewItem] = useState('');

  const [search, setSearch] = useState('');

  const  setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem("shoppingList", JSON.stringify(newItems));
    return;
  }

  const addItem = (item) => {
    const id = items.length? items[items.length - 1].id + 1 : 1;
    const myNewItem = {id, checked: false, item}
    const listItems = [...items, myNewItem]

    setAndSaveItems(listItems)
     
  }

const handleCheck = (id) => {

// console.log(`Key: ${id}`)

const listItems = items.map((item) => item.id === id? {...item, checked: !item.checked} : item);

setAndSaveItems(listItems);
// setItems(listItems);

// localStorage.setItem("shoppingList", JSON.stringify(listItems));  
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

        <SearchItem
          search = {search}
          setSearch = {setSearch}

        
        
        
        />

        <AddItem
          newItem = {newItem}
          setNewItem={setNewItem}
          handleSubmit={handleSubmit}
        />
        

        <Content
        items={items.filter((item) => 
          item.item.toLowerCase().includes(search.toLocaleLowerCase()))
          }
          
        handleCheck={handleCheck}
        handleDelete = {handleDelete}/>
        <Footer length={items.length}/>
        
        
    </div>
  );
}

export default App;
