import React from 'react'
import TopHeader from '../../../components/ui/TopHeader'
import ButtonRed from '../../../components/ui/ButtonRed'
import BestSellingContainer from './BestSellingContainer'
import { useNavigate } from 'react-router-dom'

const BestSelling = () => {
  const navigate = useNavigate();


  return (
    <div className='my-25'>
        <TopHeader title={"This Month"}/>
        <div className='flex justify-between items-center'>
          <h1 className='my-5 text-4xl font-bold'>Best Selling Products</h1>
          <ButtonRed text={"View All"} onClick={()=>navigate(`/products`)} />
        </div>
        <BestSellingContainer />
    </div>
  )
}

export default BestSelling