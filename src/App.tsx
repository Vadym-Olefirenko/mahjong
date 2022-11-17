import { useEffect, useState } from "react";
import "./App.css";
import AppHeader from "./components/AppHeader/AppHeader";
import Board from "./components/Board/Board";
import {arrayOfNumbers, shuffle} from "./utils/utils";

function App(): JSX.Element {
  const [cards, setCards] = useState<Array<number>>([]);

  useEffect(() => setCards(shuffle(arrayOfNumbers)), []);

  return (
    <div className="App">
      <AppHeader text={'Mahjong'}/>
      <Board cards={cards}/>
    </div>
  );
}

export default App;
