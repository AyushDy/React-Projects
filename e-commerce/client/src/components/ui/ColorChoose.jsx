import { useState } from "react";

const ColorChoose = ({colors}) => {
    const [selectedColor, setSelectedColor] = useState('bg-red-500');

    return (
        <div className="flex items-center  gap-2">
        Colours : 
        {colors.map((color, index) => (
            <Color key={index} onClick={setSelectedColor} selected={selectedColor} color={color} />
        ))}
        </div>
    )
}

const Color = ({color, onClick, selected}) => {
    return (
        <div className={`rounded-full flex items-center justify-center ${ selected===color? "border-2 p-0.5" : "" }`}>
          <div  onClick={()=>onClick(color)} className={`rounded-full w-5 h-5 ${color}`}></div>
        </div>
    )
}

export default ColorChoose