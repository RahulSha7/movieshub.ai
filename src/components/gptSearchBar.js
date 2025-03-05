import React from 'react'
import lang from '../utils/languageConstants';
import { useDispatch, useSelector } from 'react-redux';

const GptSearchBar = () => {
    const dispatch = useDispatch();
    const langKey = useSelector((store) => store.config.lang);
  return (
    <div className='pt-[7%] flex justify-center'>
      <form className='bg-black w-1/2 grid grid-cols-12 '>
        <input 
        type=" text"
        className=' p-2 m-4 col-span-9   '
        placeholder={lang[langKey].gptSearchPlaceholder}>
        </input >
        <button className='col-span-3 bg-red-500 rounded-lg m-4'>
        {lang[langKey].search}
        </button>
      </form>
    </div>
  )
}

export default GptSearchBar;
