import Input from '../components/Input'
import Button from '../components/Button'


const Signup = () => {
  return (
    
    <div className='h-screen w-screen bg-slate-700 flex justify-center items-center'>
            <div className='bg-white min-w-64 border rounded-lg p-8  '>
              <div className='flex justify-center mb-4 '>
                <span className='text-slate-700 font-bold text-2xl'>Register</span>
              </div>
              <Input placeholder='username'/>
                <Input placeholder='email'/>
                <Input type='password' placeholder='password'/>
                <div className='flex mt-4 justify-center'>
                    <Button variant='primary' text='Sign up' widthFull={true}/>
                </div>
            </div>
    </div>
    
  )
}

export default Signup