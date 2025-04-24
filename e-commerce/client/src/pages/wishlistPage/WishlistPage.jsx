import React from 'react'
import { useSelector } from 'react-redux'
import ButtonWhite from '../../components/ui/ButtonWhite'
import { selectWishlistEntities } from "../../features/wishlistSlice"
import ItemCard from '../../components/ui/ItemCard'

const WishlistPage = () => {
  const wishlistItems = Object.values(useSelector(selectWishlistEntities) || {});
  const wishlistSize = useSelector((state) => state.wishlist.wishlistSize) || 0

  console.log("wishlistItems", wishlistItems)

  return (
    <div className='mx-30 my-30 flex flex-col gap-20'>
      <div  className='flex flex-wrap justify-between items-center'>
      <h1 className='text-lg '> Wishlist ({wishlistSize}) </h1>
      <ButtonWhite text={"Move All To Cart"} />
      </div>
      <div className='flex w-full flex-wrap gap-8' >
        {wishlistItems.map((item) => (
          <ItemCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  )
}

export default WishlistPage