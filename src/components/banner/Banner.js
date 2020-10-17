import React, { useState,useEffect } from 'react';
import instance from '../../requests/axios';
import requests from '../../requests/requests';
import './banner.css';

const Banner = () => {
  const [selectedMovie,setSelectedMovie] = useState([]);

  useEffect(()=>{
    const fetchData = async()=>{
      const res = await instance.get(requests.fetchNetflixOriginals);
      setSelectedMovie(res.data.results[
        Math.floor(Math.random() * res.data.results.length -1 )
      ]);
    }
    fetchData();
  },[]);


// function for overview incase too much text
const truncate = (str,n) =>{
  return str?.length > n ? str.substr(0,n-1) + "..." : str;
}

  return (
    // header is a bg image
    <header className="banner"
      style={{
        background: 'center center/cover',
        background: `url(${process.env.REACT_APP_BASE_IMG_URL}/${selectedMovie?.backdrop_path})`,
      }}
    >  
    <div className="banner-content">
  <h1 className="banner-title">{truncate(selectedMovie?.name || selectedMovie?.title || selectedMovie?.original_name,150)}</h1>   
  <div className="banner-buttons">   
      <button className="banner-btn">PLAY</button>
      <button className="banner-btn">MY LIST</button>
      </div>
  <h1 className="banner-description">{selectedMovie?.overview}</h1>
    </div>
    <div className="banner-fade"></div>
    </header>
  )
}

export default Banner
