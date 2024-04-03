import React from 'react'
import Row from './Row'

const Table = ({items}) => {
  return (
    <div className='table-container'>
    <tbody>
        {items.map((item) =>
        <Row key={item.id} item={item}/>
        
        )}
    </tbody>
      
    </div>
  )
}

export default Table
