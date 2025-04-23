import React from 'react'
import ButtonRed from '../../components/ui/ButtonRed'

const ContactPage = () => {
  return (
    <div className='my-30 mx-30 flex gap-8 items-stretch justify-center' >
        <div className=' w-1/4 shadow-md flex flex-col justify-between rounded h-full p-8'>
           <div className='flex flex-col border-b-2 mb-8 gap-5 border-gray-300 pb-8'>
           <div className='flex gap-5 items-center'>
                <img src="contact/call.svg" alt="" />
                <h2 className='text-lg font-medium'>Call Us</h2>
            </div>
            <p className=''>We are available 24/7, 7 days a week.</p>
            <p className=''>Phone: +8801611112222</p>
           </div>
           <div className='flex flex-col gap-6'>
           <div className='flex gap-5 items-center'>
                <img src="contact/message.svg" alt="" />
                <h2 className='text-lg font-medium'>Write To Us</h2>
            </div>
            <p className=''>Fill out our form and we will contact you within 24 hours.</p>
            <p className=''>Emails: customer@exclusive.com</p>
            <p>Emails: support@exclusive.com</p>
           </div>
        </div>
        <div className='p-7 shadow-md rounded flex flex-col'>
            <div className='flex justify-between gap-5 mb-10'>
                <input className='flex-1 bg-gray-100 p-6 py-3 rounded outline-0' type='text' placeholder='Your Name'/>
                <input className='flex-1 bg-gray-100 p-6 py-3 rounded outline-0' type="text" placeholder='You Email'/>
                <input className='flex-1 bg-gray-100 p-6 py-3 rounded outline-0' type="text" placeholder='Your Phone'/>
            </div>
            <textarea className="bg-gray-100 h-1/2 flex-grow w-full p-6 py-3 outline-0 rounded resize-none" placeholder='Your Message' id=""></textarea>
            <div  className='flex  my-10 justify-end'>
                <ButtonRed text={"Send Message"}  />
            </div>
        </div>
    </div>
  )
}

export default ContactPage