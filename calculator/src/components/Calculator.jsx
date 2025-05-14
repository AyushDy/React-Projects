import React, { useState } from 'react'
import Button from './Button'

const Calculator = () => {
    const [display, setDisplay] = useState('')
    const btn = ["%", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "00", "0", "."]

    const handleAllClear = () => {
        setDisplay('')
    }
    const handelDelete = () => {
        if (display === 'Syntax Error' || display === 'Infinity')
            handleAllClear()
        else
            setDisplay(display.toString().slice(0, -1))
    }
    const handleBtn = (e) => {
        setDisplay(display + e.target.innerHTML)
    }
    const handleCalculation = () => {
        try {
            setDisplay(eval(display))
        } catch (error) {
            setDisplay('Syntax Error',error)
        }
    }
    return (
        <div className='calculator flex flex-col justify-evenly items-center bg-gray-400 shadow-black p-5 rounded-[10px] w-[340px] h-[500px] mx-auto mt-10'>
            <DisplayPanel value={display} />
            <div className="btnContainer grid grid-cols-4 gap-2.5 mt-5 select-none">
                <Button value="AC" action={handleAllClear} />
                <Button value={"DEL"} action={handelDelete} />
                {
                    btn.map((ele, idx) => <Button value={ele} action={handleBtn} key={idx} />)
                }
                <Button value={"="} action={handleCalculation} />
            </div>
        </div>
    )
}

export default Calculator

const DisplayPanel = ({ value }) => {
    return (
        <div className=" w-full flex select-none ">
            <input className='overflow-x-scroll w-full h-20 text-4xl text-right outline-0 border-none p-2.5 bg-[#333] text-white rounded-[5px]' type="text" value={value} />
        </div>
    )
}




