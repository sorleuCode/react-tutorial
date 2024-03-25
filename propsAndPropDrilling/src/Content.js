import ItemList from  './ItemList';
import './content.css';


const Content = ({items, handleCheck, handleDelete}) => {
     

  return (
    
    <main className='student'>
      {items.length ? (
        <ItemList
        items = {items}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}/>
      ):
        (<p style={{marginTop: "2rem"}}>Your list is empty</p>
      )}
      
    </main>
  );
}

export default Content;
