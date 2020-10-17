import React from 'react';
import './App.css';
import Row from './components/row/Row';
import requests from './requests/requests';
import Banner from './components/banner/Banner';
import Navbar from './components/navbar/Navbar';


const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Row isLarge title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals}/>
      <Row title="TRENDING NOW" fetchURL={requests.fetchTrending}/>
      <Row title="TOP RATED" fetchURL={requests.fetchTopRated}/>
      <Row title="ACTION MOVIES" fetchURL={requests.fetchActionMovies}/>
      <Row title="COMDEDY MOVIES" fetchURL={requests.fetchComedyMovies}/>
      <Row title="HORROR MOVIES" fetchURL={requests.fetchHorrorMovies}/>
      <Row title="ROMANCE MOVIES" fetchURL={requests.fetchRomanceMovies}/>
      <Row title="DOCUMENTARIES" fetchURL={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
