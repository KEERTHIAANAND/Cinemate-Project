import { useState, useEffect} from 'react';

export const useFetch = (apiPath) => {
    const [data, setData] = useState([]);
    const url=`https://api.themoviedb.org/3/${apiPath}?api_key=8941863c05d7c56535c2834b82514201&language=en-US&page=1`;
    useEffect(() => {
        async function fetchMovies() {
          const response = await fetch(url);
          const json = await response.json();
          setData(json.results);
        }
        fetchMovies();
      },[url])
  return {data};
}
