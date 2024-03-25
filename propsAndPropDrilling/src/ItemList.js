
import LineItem from "./Lineitem";

const ItemList = ({items, handleCheck, handleDelete}) => {
  return (
    <ul>
        {items.map((item) => {
          return (
            <LineItem 
            item = {item}
            handleCheck = {handleCheck}
            handleDelete = {handleDelete}
            />
          );
      
        }
        )}
    </ul>

  )
}

export default ItemList
