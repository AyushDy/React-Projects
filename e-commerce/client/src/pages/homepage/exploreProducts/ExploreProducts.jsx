import React from 'react'
import TopHeader from '../../../components/ui/TopHeader'
import LeftRightButtons from '../../../components/ui/LeftRightButtons'
import ExploreContainer from './ExploreContainer'
import ButtonRed from '../../../components/ui/ButtonRed'

const ExploreProducts = () => {
  return (
    <div className='my-25'>
        <TopHeader title={"Our Products"} />
        <div className='flex justify-between items-center my-5'>
           <h1 className='text-4xl font-bold'>Explore Our Products</h1> 
           <LeftRightButtons />
        </div>  
        <ExploreContainer />  
        <div className='text-center my-15 '>
            <ButtonRed text={"View All Products"}/>
        </div>
    </div>
  )
}

export default ExploreProducts