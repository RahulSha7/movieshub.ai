import React from 'react'
import GptSearchBar from './gptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestion'
import { Background_Image } from '../utils/constants'

const GptSearch = () => {
  return (
    <>
    <div className="fixed -z-10">
      <img className="h-screen object-cover md:w-screen" src={Background_Image} alt="logo" />
    </div>
    <div className="">
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  </>
  )
}

export default GptSearch
