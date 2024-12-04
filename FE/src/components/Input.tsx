

const Input = ({placeholder,onChange,type='text'}:{onChange:()=> void}) => {
  return (
    <div>
        <input placeholder={placeholder} type={type} className='px-4 py-2 mt-2 border border-gray-500 rounded-md' onChange={onChange} />
    </div>
  )
}

export default Input