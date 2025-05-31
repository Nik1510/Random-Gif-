import { useState, useEffect } from 'react';

function useGif({rating = 'g' }) {
  const [currentGif, setCurrentGif] = useState(null);

  useEffect(() => {
     fetch(`https://api.giphy.com/v1/gifs/random?api_key=tSbELWGbK89AZRhywXgACfq2DEVBZtcR&tag=&rating=${rating}`)
     .then((response)=>response.json())
     .then((res)=>{
         setCurrentGif(res.data.images.original.url);
         console.log(currentGif);
     })
  }, [rating]);

  return currentGif;
}

export default useGif;
