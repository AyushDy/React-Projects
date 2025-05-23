import React from 'react'
import { Link } from 'react-router-dom'

const CatergoryBox = ({item}) => {

  return (
    <div className='text-center '>
      <Link to={`/search/${item.name}`}>
        <div className=' w-40 m-5 h-40 border-2 p-10 border-gray-200 rounded-sm flex justify-items-center'>
            <img src={item.src} alt={item.name} />
        </div>
        <h3 className='text-lg font-medium '>{item.name}</h3>
        </Link>
    </div>
  )
}

export default CatergoryBox