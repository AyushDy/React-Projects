import React from 'react'

const ButtonWhite = ({text, icon=null, onClick=null}) => {
  return (
    <button className='px-10 py-3 hover:cursor-pointer text-lg rounded-sm border' onClick={onClick}>
      {icon && <img src={icon} alt={icon} className='w-5 h-5 inline-block mr-2' />}
      {text}
      </button>
  )
}

export default ButtonWhite