import React from 'react';
import logo from './logo.svg';
import './App.css';
import GetDataFromAPI from './components/GetDataFromAPI';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1 className='headning'>Filmer från API!</h1>
        <GetDataFromAPI/>
      </header>
    </div>
  );
}

export default App;
