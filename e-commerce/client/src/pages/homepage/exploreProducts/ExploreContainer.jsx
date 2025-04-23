import React from 'react'
import ItemCard from '../../../components/ui/ItemCard'

const ExploreContainer = ({products}) => {

  return (
    <div className='flex flex-wrap justify-between gap-y-10'>
        {
            products.map((item)=>(
                <ItemCard key={item.id} product={item} />
            ))
        }
    </div>
  )
}

export default ExploreContainer