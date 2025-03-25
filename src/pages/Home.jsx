import React, { useState } from 'react'
import FileUpload from '../components/FileUpload';
import Button from '../components/Button';

const buttonNames = ['PI Reduction', 'Acronym Expansion', 'Option3', 'Option4'];
const Home = () => {
  const [selectedBtn, setSelectedBtn] = useState();

  return (
    <div className='w-full bg-[#1B1C1D] h-screen flex flex-col items-center'>
      <div className='flex gap-4 mt-10'>
        {
          buttonNames.map((btn, index) => (
            <button
              onClick={() => setSelectedBtn(btn)} key={index}
              className={`px-4 py-2  hover:text-white rounded-md m-2 border border-gray-600 hover:border-white ${btn === selectedBtn ? 'bg-[#0a255b] text-white' : 'bg-[#37383A] text-gray-400'}`}>
              {btn}
            </button>
          ))
        }
      </div>
      <FileUpload selectedBtn={selectedBtn} />
    </div>
  )
}

export default Home
