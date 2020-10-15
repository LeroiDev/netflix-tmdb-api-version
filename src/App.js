import React from 'react';
import './App.css';
import Row from './components/Row';
import requests from './requests/requests';

const App = () => {
  return (
    <div className="App">
      <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals}/>
      <Row title="Trending now" fetchURL={requests.fetchTrending}/>
    </div>
  );
}

export default App;
