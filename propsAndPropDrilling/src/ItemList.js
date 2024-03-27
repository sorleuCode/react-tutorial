
import LineItem from "./Lineitem";

const ItemList = ({items, handleCheck, handleDelete}) => {
  return (
    <ul>
        {items.map((item) => {
          return (
            <LineItem
            key={item.id}
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
