
const Button = ({ value, action }) => {
    return (
        <button
            className='btn h-[60px] w-[65px] text-[1.5rem] flex justify-center items-center p-[5px] font-bold border-none rounded-md bg-[#444] text-white cursor-pointer transition-colors duration-300 hover:bg-[#666]'
            onClick={action}
        >{value}</button>
    )
}

export default Button