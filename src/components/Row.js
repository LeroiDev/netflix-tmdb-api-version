import React, { useEffect, useState } from 'react';
import instance from '../requests/axios';

const Row = ({title,fetchURL}) => {
  const [movies, setMovies] = useState([]);

  useEffect(()=>{
      const fetchData = async () =>{
          const res = await instance.get(fetchURL);
          setMovies(res.data.results);
          // return res;
          // hmmmm no i dont think i will
      }
      fetchData();
  },[fetchURL])
  return (
    <div className='row'>
  <h2>{title}</h2>
  <div className="row-posters">
    {movies.map(movie=>(
      <img className="row-poster" key={movie.id} src={process.env.REACT_APP_BASE_IMG_URL + movie.poster_path} alt={movie.name}/>
    ))}
  </div>
    </div>
  )
}

export default Row;
