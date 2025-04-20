import React from 'react'

const TopHeader = ({title}) => {
  return (
    <div className="flex items-center gap-3">
        <div className="h-10 w-5 bg-red-700 rounded"></div>
        <h3 className="text-red-700 text-lg font-medium">{title}</h3>
    </div>
  )
}

export default TopHeader