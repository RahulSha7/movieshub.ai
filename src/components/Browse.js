import React from "react";
import Header from "./Header";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import ListContainer from "./ListContainer";

const Browse = () => {
 useNowPlayingMovies();
  


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
    <div className="flex   ">
      <Header />
      {/* </Browse> */}
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
      <ListContainer/>
    </div>
  );
};

export default Browse;
