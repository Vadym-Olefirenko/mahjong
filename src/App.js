import { useEffect, useState } from 'react';
import './App.css';
import AppHeader from './components/AppHeader/AppHeader';
import Board from './components/Board/Board';
import {generateArray, shuffle} from './utils/utils';

const generatedArray = generateArray(16, 60);
const arrayOfNumbers = [...generatedArray, ...generatedArray];

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(shuffle(arrayOfNumbers));
  }, []);

  return (
    <div className="App">
      <AppHeader text={'Mahjong'}/>
      <Board cards={cards}/>
    </div>
  );
}

export default App;
