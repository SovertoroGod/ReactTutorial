import { useState, useEffect } from "react";

const useFetch=(url) => {
    const [book , setBook] = useState(null);
    const [loading , setLoading] = useState(true);
    const [error , setError ] = useState(null);

    useEffect(()=>{
        setTimeout(()=>{
          fetch(url)
            .then(res => {
              if(!res.ok){
                throw Error('This is fetching error or could not fetch the data!');
              }else{
                return res.json();
              }
              
            })
            .then(data=>{
              setBook(data);
              setLoading(false);
              setError(null);
            })
            .catch(err=>{
              setLoading(false);
              setBook(null);
              setError(err.message);
            })
        },1000)
      },[url])

      return {book, loading, error};
}
export default useFetch;