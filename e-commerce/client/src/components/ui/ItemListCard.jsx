import React from 'react'
import RatingStars from './RatingStars'
import AddToCartButton from './AddToCartButton'
import { Link } from 'react-router-dom'
import LikeButton from './LikeButton'

const ItemListCard = ({product}) => {
  return (
    <div className='w-full flex p-1 items-center shadow-sm rounded-md '>
        <Link to={`/product/${product.id}`} className='w-80'>
            <img className=' object-contain rounded-md' src={product.image} alt={product.title.substring(0,10)} />
        </Link>
        <div className='w-full flex flex-col gap-y-2 justify-between px-4'>
            <h1 className='text-2xl font-medium'>{product.title}</h1>
            <RatingStars product={product} />
            <h3>${product.price}</h3>
            <p>Free Delivery</p>
            <div className='flex items-center gap-2'>
               <div className='w-1/3 '>
               <AddToCartButton product={product} />
               </div>
               <div className=' h-10 w-10 flex justify-items-center p-2 border-2 border-gray-200 rounded-md'>
                <LikeButton product={product} />
               </div>
            </div>
        </div>
    </div>
  )
}

export default ItemListCard;