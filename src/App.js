import { useEffect, useState } from 'react';
import './App.css';
import AppHeader from './components/AppHeader/AppHeader';
import Board from './components/Board/Board';
import {generateArray} from './utils/generateArray';

const generatedArray = generateArray(16, 60);
const arrayOfNumbers = [...generatedArray, ...generatedArray];

function App() {
  const [cards, setCards] = useState([]);

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  }

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
