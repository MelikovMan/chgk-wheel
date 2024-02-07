import logo from './logo.svg';
import './App.css';

import WheelComponent from 'react-wheel-of-prizes'
import { useState, useEffect } from 'react';
const def_colors = [];
for (let i = 0; i < 30; i++){
    def_colors.push(`#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`);
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function App() {
  const [items,setItems] = useState([...Array(30).keys()].map(elem=>(elem+1).toString()));
  const [colors, setColors] = useState(def_colors);
  const [time, setTime] = useState(getRandomInt(1000)+200);
  const [winner, setWinner] = useState('ЧГК');
  const onFinished = (winner) => {
    console.log(winner);
    let removed_ind = items.findIndex(item=>item===winner);
    console.log(removed_ind);
    console.log(items);
    setItems(items.filter(((item,index)=>index!=removed_ind)));
    setColors(colors.filter(((item,index)=>index!=removed_ind)));
    setTime(getRandomInt(1000)+200);
    setWinner(winner);
  };
  useEffect(() => {
    console.log(items);
  });
  /*      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>*/
  return (
    <div className="App">
      <div className="App-header">
        <div key={winner} className='text'>
        <h2>{winner}</h2>
        </div>
        <div key={items} className='Wheel'>
        <WheelComponent
          key={items}
          segments={items}
          segColors={colors}
          onFinished={(winner) => onFinished(winner)}
          primaryColor='black'
          contrastColor='white'
          buttonText='Выбрать вопрос!'
          isOnlyOnce={false}
          size={290}
          upDuration={time/100}
          downDuration={time}
          fontFamily='Arial'
      />
        </div>
      </div>
    </div>
  );
}

export default App;
