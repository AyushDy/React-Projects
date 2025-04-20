import React from 'react'
import ButtonRed from '../../components/ui/ButtonRed'

const LoginPage = () => {
  return (
    <section className='w-full mt-15 mb-40 flex'>
        <img src="/auth/loginBG.png" alt="login banner image" className='w-3/5' />
        <div  className=' flex flex-col justify-center gap-5  full w-1/5 m-auto'>

            <h1 className='text-4xl'>Log in to Exclusive</h1>
            <p>Enter your details below</p>
          
            <input className='outline-none text-lg p-2 border-b-2 border-gray-300' type="text" name='user' placeholder='Emain or Phone Number'/>

            <input className='outline-none text-lg p-2 border-b-2 border-gray-300' type="text" name='password' placeholder='Password'/>

            <div className='my-5 flex gap-5 justify-between items-center'>
                <ButtonRed text={"Log In"} />
                <span className='text-red-500'>
                    Forgot Password?
                </span>
            </div>
        </div>
    </section>
  )
}

export default LoginPage