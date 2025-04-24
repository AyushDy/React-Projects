import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeItem, selectCartItemById } from '../../features/cartSlice'  


const AddToCartButton = ({product}) => {
    const dispatch = useDispatch()
    const cartItem = useSelector((state) => selectCartItemById(state, product.id)) || []
    const itemQuantity = cartItem?.quantity || 0


  return (
        <div className="h-full z-10 text-white bg-black rounded flex justify-center">
        {itemQuantity ? (
          <div className="flex justify-between w-full">
            <button
              className="h-full p-2 w-1/4 hover:cursor-pointer rounded-sm active:bg-gray-600 transtition-active duration-200"
              onClick={() => dispatch(removeItem(product.id))}
            >
              -
            </button>
            <p className="m-auto ">In Cart : {itemQuantity}</p>
            <button
              className="h-full p-2 w-1/4 hover:cursor-pointer rounded-sm  active:bg-gray-600 transtition-active duration-200"
              onClick={() => dispatch(addItem({price: product.price, id: product.id}))}
            >
              +
            </button>
          </div>
        ) : (
          <button
            className=" hover:cursor-pointer rounded-lg w-full h-full active:bg-gray-600 transtition-active duration-300"
            onClick={() => dispatch(addItem({price: product.price, id: product.id}))}
          >
            Add To Cart
          </button>
        )}
      </div>
      )
}


export default AddToCartButton