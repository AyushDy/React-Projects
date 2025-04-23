import React from 'react'

const ButtonRed = ({text, onClick=null}) => {
  return (
    <button
      onClick={onClick}
      type='button'
     className='px-13 py-3 hover:cursor-pointer text-lg rounded-sm bg-red-600 text-white'>{text}</button>
  )
}

export default ButtonRed