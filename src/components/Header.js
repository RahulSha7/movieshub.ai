import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { LOGO } from '../utils/constants';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
  return (
    <div className='absolute w-full px-6 py-2 bg-gradient-to-b from-black z-10 justify-between'>
      <img className="w-44  " src={LOGO} 
      alt='logo'/>
     
   
    </div>
   
  )
}

export default Header
