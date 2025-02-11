import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
 const [isSignInForm,setIsSignInForm]=useState(true);
    const toggleSign =()=>{
 setIsSignInForm (!isSignInForm);
    }
  return (
    <div >
      <Header/>
      <div className='absolute ' >
      <img src='https://assets.nflxext.com/ffe/siteui/vlv3/638e9299-0637-42d1-ba39-54ade4cf2bf6/web/IN-en-20250203-TRIFECTA-perspective_46eb8857-face-4ea6-b901-dbf22b461369_medium.jpg'/>
      </div>
    
      <form className='w-3/12 absolute p-8 my-36 mx-auto right-0 left-0 bg-black text-white bg-opacity-80 rounded-lg'>
      <h1 className='text-2xl font-bold my-4'> {isSignInForm ?"Sign In" : "Sign Up"}</h1>
       {!isSignInForm && <input 
        type="text"
        className='px-4 w-full p-3 my-3 bg-gray-700' 
        placeholder='Full Name'>

        </input>}
        <input 
        type="text"
        className='px-4 w-full p-3 bg-gray-700' 
        placeholder='Email Address'>

        </input>
        <input 
        type="password"
        className='px-4 w-full p-3 my-3 bg-gray-700'  
        placeholder='Password'></input>
        <button  className='bg-red-700 my-4 p-3 w-full rounded-lg'>{isSignInForm ?"Sign In" : "Sign Up"}</button>
        <p className='cursor-pointer' onClick={toggleSign}>
        {isSignInForm ?"New To MoviesHub? Sign Up Now" : "Already a User? Sign In Now"}</p>
      </form>
     
      
    </div>
    
  )
}

export default Login
