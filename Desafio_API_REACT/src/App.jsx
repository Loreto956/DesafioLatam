import React from 'react';
import './App.css';
import MiApi from './components/MiApi';

function App() {
  return (
    <div>
      <header>
        <h1>Api de Feriados 2019 Chile</h1>
      </header>
      <div className='container'>
        <MiApi />
      </div>
    </div>
  );
}

export default App;
