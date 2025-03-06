export const Background_Image =
"https://assets.nflxext.com/ffe/siteui/vlv3/638e9299-0637-42d1-ba39-54ade4cf2bf6/web/IN-en-20250203-TRIFECTA-perspective_46eb8857-face-4ea6-b901-dbf22b461369_medium.jpg"

export const LOGO = 
"https://phcorner.net/attachments/1000133701-webp.3232371/" 

export const API_OPTIONS =  {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+process.env.REACT_APP_TMDB_KEY
    }
  };

  export const IMG_CDN="https://image.tmdb.org/t/p/w500/";

  export const SUPPORTED_LANGUAGES= [
    {identifier:"en",name:"English"},
    {identifier:"hindi",name:"Hindi"},
    {identifier:"spanish",name:"Spanish"},
  ]

  export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY