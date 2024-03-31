import ItemList from  './ItemList';
import './content.css';


const Content = ({items, handleCheck, handleDelete}) => {
     

  return (
    
    <>
      {items.length ? (
        <ItemList
        items = {items}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}/>
      ):
        (<p style={{marginTop: "2rem"}}>Your list is empty</p>
      )}
      
    </>
  );
}

export default Content;
