import React from 'react'
import CrossIcon from './Icons/CrossIcon'
import Input from './Input'
import Button from './Button'

const CreateContentModel = ({open,onClose}) => {
  return (
    <div>
        {open && <div className='h-screen w-screen fixed top-0 left-0 bg-slate-800/40 flex justify-center items-center font-semibold'>
            <div className='flex flex-col justify-center'>
                <span className='bg-white opacity-100 p-4 rounded-md border font-semibold'>
                    <div className='flex justify-end'>
                        <div onClick={onClose} className='cursor-pointer'>
                        <CrossIcon/>
                        </div>
                     
                    </div>
                    <div>
                        <Input placeholder={'Title'}/>
                        <Input placeholder={'Link'}/>
                    </div>
                    <div className='mt-3 flex justify-center'>
                    <Button variant={'primary'} text='Add content'/>
                    </div>
                    
                </span>
            </div>
            </div>}
    </div>
  )
}

export default CreateContentModel