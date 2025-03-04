import React from "react";
import Header from "./Header";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";


const Browse = () => {
 useNowPlayingMovies();
 usePopularMovies();
 useTopRatedMovies();
 useUpcomingMovies();
  


  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
 
 return (
    <div className="   ">
      <Header />
     
      <div className="flex">
        <button
          className="font-bold cursor-pointer text-red-800 my-10 mx-6 z-20 right-0 absolute"
          onClick={handleSignOut}
        >
          {" "}
          (Sign Out)
        </button>
       
      
      </div>
      <MainContainer/>
      <SecondaryContainer/>
      
    
      
    </div>
  );
};

export default Browse;
