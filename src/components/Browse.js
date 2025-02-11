import React from 'react'
import Header from './Header'
import {  signOut } from "firebase/auth";
import {auth } from "../utils/firebase"
import { useNavigate } from 'react-router-dom';

const Browse = () => {
    const navigate = useNavigate();
    const handleSignOut = ()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/")
          }).catch((error) => {
            // An error happened.
          });
    }
  return (
    <div className='flex   '>
        <Header/>
      {/* </Browse> */}
      <div className='flex'>
        <button className='font-bold cursor-pointer text-red-800 my-10 mx-6 z-20 right-0 absolute' onClick={handleSignOut}> (Sign Out)</button>
      </div>
    </div>
  )
}

export default Browse
