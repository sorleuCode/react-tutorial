import React from 'react'
import {FaPlus} from 'react-icons/fa6'
import {useRef} from "react"

const AddItem = ({newItem, setNewItem, handleSubmit}) => {
  const inputRef = useRef();
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor = 'addItem'>
            Add Item
        </label>


        <input
        autoFocus
        ref={inputRef}
        type="text" 
        id='addItem'
        placeholder='Add Item'
        required
        value= {newItem}
        onChange={(e) => setNewItem(e.target.value)}
        />

        <button
            type='submit'
            aria-label='Add Item'
            onClick={(e) => inputRef.current.focus()}
        >
           <FaPlus/>
        </button>
    </form>
  )
}

export default AddItem
