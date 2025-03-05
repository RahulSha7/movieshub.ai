import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';


  

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
   const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  
  useEffect(() => {
  const unsubscribe=   onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
       
      } else {
        dispatch(removeUser());
        navigate("/")
        
      }
    });
    

    return ()=> unsubscribe(); //unsubscribe when component unmount 
  }, []);
  const handleGptSearchClick=()=>{
    dispatch(toggleGptSearchView());
     };
     const handleLanguageChange =(e)=>{
      dispatch(changeLanguage(e.target.value));
     }
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between'>
      <img className="w-44  " src={LOGO} 
      alt='logo'/>
   {user && (
        <div className="flex p-2 justify-between">
         { showGptSearch && (<select
              className="p-2 m-4 bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>)}
          
          <button
            className="py-1 px-4 mx-4 my-4 bg-red-800 text-white rounded-lg"
            onClick={handleGptSearchClick}
          >
      {   showGptSearch ? "Home" :   "GPT Search"}
          </button>
          
          <button onClick={handleSignOut} className="font-bold bg-red-800 text-white px-2 my-4 rounded-lg ">
            Sign Out
          </button>
        </div>
      )}
   
    </div>
   
  )
}

export default Header
