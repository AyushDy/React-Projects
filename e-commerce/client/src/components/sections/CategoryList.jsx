import React from 'react'
import { categories } from '../../assets/data/data'

const CategoryList = () => {
  
  return (
    <div className='border-r-2  border-gray-300 self-stretch flex justify-end'>
      <ul className='flex flex-col h-full justify-between pt-8 mr-10 lg:mr-20'>
        {categories.map((item)=>
           <Category key={item} item={item} />
        )}
      </ul>
    </div>
  )
}

const Category = ({item}) =>{
  
  return (
    <li className='md:text-xl'>
      {item}
    </li>
  )
}

export default CategoryList