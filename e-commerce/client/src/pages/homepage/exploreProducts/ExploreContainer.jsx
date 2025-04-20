import React from 'react'
import { productData } from '../../../assets/data/data'
import ItemCard from '../../../components/ui/ItemCard'

const ExploreContainer = () => {
    const productsToDisplay = productData.slice(0,8)

  return (
    <div className='flex flex-wrap justify-between gap-y-10'>
        {
            productsToDisplay.map((item)=>(
                <ItemCard key={item.id} product={item} />
            ))
        }
    </div>
  )
}

export default ExploreContainer