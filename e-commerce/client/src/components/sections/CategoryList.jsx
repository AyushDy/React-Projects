import React from 'react'
import { categories } from '../../assets/data/data'
import { Link } from 'react-router-dom'

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
      <Link to={`/search/${item.toLowerCase()}`} className='hover:cursor-pointer hover:text-red-500'>{item}</Link>
    </li>
  )
}

export default CategoryList