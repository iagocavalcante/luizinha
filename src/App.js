import React from 'react';
import './App.css';
import Header from './components/Header/Header.js'
import Input from './components/Input/Input';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="App-center">
        <Input placeholder={'Procure por heróis'} type={'text'} />
      </main>
    </div>
  );
}

export default App;
