import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header.js'
import Input from './components/Input/Input';
import Card from './components/Card/Card';
import responseCharacters from './personagens.json';

function App() {
  const [characters, setCharacters] = useState([])
  const [result, setResult] = useState([])
  
  useEffect(() => {
    const { data: { results } } = responseCharacters
    setResult(results)
  }, [result])
  
  useEffect(() => {
    const mute = result.map(r => ({ ...r, liked: false }))
    setCharacters(mute)
  }, [result])

  return (
    <div className="App">
      <Header />
      <main className="App-center">
        <Input placeholder={'Procure por heróis'} type={'text'} />
        <section className="App-card-list">
          {
            characters && characters.map( character => 
              (
                <Card key={character.id} character={character} />
              )
            )
          }
        </section>
      </main>
    </div>
  );
}

export default App;
