import React, { useEffect, useState } from 'react';
import instance from '../../requests/axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import './row.css';


const Row = ({title,fetchURL,isLarge}) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl,setTrailerUrl] = useState("");

  useEffect(()=>{
      const fetchData = async () =>{
          const res = await instance.get(fetchURL);
          setMovies(res.data.results);
          // return res;
          // hmmmm no i dont think i will
      }
      fetchData();
  },[fetchURL])
// YOUTUBE react npm
const opts = {
  height:"390",
  width:"100%",
  playerVars: {
    // "https://developers.google.com/youtube/player_parameters",
    autoplay: 1,
  }
}
// on click handler of image
const clickHandler = (movie) =>{
  // close trailer if already open
  if(trailerUrl){
    setTrailerUrl("")
  }else{
    // function programmed in youtube npm
    movieTrailer(movie?.name || "")
    .then(url =>{
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
    }).catch(err=>console.log(err));
  }
}
  return (
    <div className='row'>
  <h2>{title}</h2>
  <div className="row-posters">
    {movies.map(movie=>(
      <img onClick={clickHandler(movie)} className={`row-poster ${isLarge && 'row-poster-large'}`} key={movie.id} src={isLarge ? process.env.REACT_APP_BASE_IMG_URL + movie.poster_path : process.env.REACT_APP_BASE_IMG_URL + movie.backdrop_path} alt={movie.name}/>
    ))}
  </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
    </div>
  )
}

export default Row;
