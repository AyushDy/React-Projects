import React from 'react'
import TopHeader from '../../../components/ui/TopHeader'

const newArrival = () => {
  return (
    <div className='my-30'>
        <TopHeader title={"Featured"}/>
        <h1 className='text-4xl font-bold mt-5 mb-10'>New Arrival</h1>
        <img src="newArrival.png" alt="newArrrival" />
    </div>
  )
}

export default newArrival