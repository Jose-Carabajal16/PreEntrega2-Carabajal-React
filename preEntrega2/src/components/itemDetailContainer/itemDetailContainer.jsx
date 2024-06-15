import React, { useState, useEffect } from 'react'
import { pedirItemId } from '../../helpers/pedirDatos'
import ItemDetail from '../itemDetail/itemDetail'

const ItemDetailContainer = ( {itemId}) => {
    const [item, setItem] = useState(null)
    useEffect(() => {
        pedirItemId(itemId)
              .then((res) => {
                setItem(res)
              })
     
    }, [])
    
  return (
    <div>
        {item && <ItemDetail item={item} />}
        
    </div>
  )
}

export default ItemDetailContainer