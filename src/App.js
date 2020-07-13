import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header.js'
import Input from './components/Input/Input';
import Card from './components/Card/Card';
import responseCharacters from './personagens.json';

function App() {
  const [characters, setCharacters] = useState([])
  
  useEffect(() => {
    const { data: { results } } = responseCharacters
    setCharacters(results)
  }, [])

  const handler = (searchTerm) => {
    if (!!searchTerm) {
      const findedCharacters = characters.filter(character => character.name.startsWith(searchTerm))
      setCharacters(findedCharacters)
      return
    }
    const { data: { results } } = responseCharacters
    setCharacters(results)
  }

  return (
    <div className="App">
      <Header />
      <main className="App-center">
        <Input placeholder={'Procure por heróis'} type={'text'} handler={handler} />
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
