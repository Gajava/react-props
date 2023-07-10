import React from 'react'

function Product(props) {
  return (
    <div className='second'>
    <h2 className='product'>{props.title}</h2>
    <h2 className='price'>{props.price}</h2>
    <h2 className='first'>{props.description}</h2>
    </div>
  )
}

export default Product
