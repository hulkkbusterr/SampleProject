import React from 'react'

function Button({name}) {
  return (
    <button className='px-4 py-2 bg-[#37383A] text-gray-400 hover:text-white rounded-md m-2 border border-gray-600 hover:border-white'>
      {name}
    </button>
  )
}

export default Button