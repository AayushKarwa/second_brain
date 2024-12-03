import React from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import { div } from 'framer-motion/client'

const Signup = () => {
  return (
    
    <div className='h-screen w-screen bg-gray-200 flex justify-center items-center'>
            <div className='bg-white min-w-64 border rounded-lg p-10 '>
                <Input placeholder='email'/>
                <Input placeholder='password'/>
                <div className='flex mt-4 justify-center'>
                    <Button variant='primary' text='Sign up' widthFull={true}/>
                </div>
            </div>
    </div>
    
  )
}

export default Signup