import React from 'react';

const SideOption = ({value,tab, setTab, triggered}) => {
  
  return (
    <div className={`sidebar-option ${tab===value ? 'selected':''} ${triggered ? 'triggered':''}`} 
    onClick={ ()=>{ setTab(value) }}
    > 
    { value.charAt(0).toUpperCase() + value.slice(1) }
    </div>
  )
}

export default SideOption