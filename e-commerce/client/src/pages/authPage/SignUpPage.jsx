import React from 'react'
import ButtonRed from '../../components/ui/ButtonRed'
import ButtonWhite from '../../components/ui/ButtonWhite'
import { Link } from 'react-router-dom'

const SignUpPage = () => {
  return (
    <section className='w-full mt-15 mb-40 flex'>
        <img src="/auth/loginBG.png" alt="login banner image" className='w-3/5' />
        <div  className=' flex flex-col justify-center gap-5  full w-1/4 m-auto'>

            <h1 className='text-4xl'>Create an account</h1>
            <p>Enter your details below</p>

            
            <input className='outline-none text-lg p-2 border-b-2 border-gray-300' type="text" name='name' placeholder='Name'/>
          
            <input className='outline-none text-lg p-2 border-b-2 border-gray-300' type="text" name='user' placeholder='Email or Phone Number'/>

            <input className='outline-none text-lg p-2 border-b-2 border-gray-300' type="text" name='password' placeholder='Password'/>

            <div className='my-5 flex flex-col gap-5 '>
                <ButtonRed text={"Create Account"} />
                <ButtonWhite text={"Sign up with Google"} icon="/auth/google.svg" />
            </div>

            <span className='flex gap-x-2 w-full justify-center'>Already have an account? 
                <Link to="/auth/login" className='border-b-1 border-gray-200 hover:cursor-pointer'>Login</Link>
            </span>
        </div>
    </section>
  )
}

export default SignUpPage