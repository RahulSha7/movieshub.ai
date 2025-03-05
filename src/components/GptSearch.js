import React from 'react'
import GptSearchBar from './gptSearchBar'
import GptMovieSuggestion from './gptMovieSuggestion'
import { Background_Image } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
         <div className="absolute -z-10">
                <img
                  src={Background_Image}
                  alt="background_image"
                />
              </div>
      <GptSearchBar/>
      <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearch
