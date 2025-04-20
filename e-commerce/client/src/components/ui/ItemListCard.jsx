import React from 'react'
import RatingStars from './RatingStars'
import AddToCartButton from './AddToCartButton'

const ItemListCard = ({product}) => {
  return (
    <div className='w-full flex p-1 items-center shadow-sm rounded-md '>
        <div className='w-80'>
            <img className=' object-contain rounded-md' src={product.image} alt={product.title.substring(0,10)} />
        </div>
        <div className='w-full flex flex-col gap-y-2 justify-between px-4'>
            <h1 className='text-2xl font-medium'>{product.title}</h1>
            <RatingStars product={product} />
            <h3>${product.price}</h3>
            <p>Free Delivery</p>
            <div className='md:w-1/3'>
             <AddToCartButton product={product} />
            </div>
        </div>
    </div>
  )
}

export default ItemListCard