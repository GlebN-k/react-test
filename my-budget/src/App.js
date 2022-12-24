import { useState } from 'react';
import './App.css';
import colorData from './color-data.json'
import ColorList from './ColorList/ColorList';
// import StarRaiting from './starRaiting/StarRaiting';

// let i = 1;

function App() {
  const [colors, setColors] = useState(colorData)
  return (
    <div className="App">
      MY BUDGET
      <ColorList
        colors={colors}
        onRateColor={(id, rating) => {
          const newColors = colors.map(color => color.id === id ? { ...color, rating } : color)
          // console.log('hello')
          setColors(newColors)
        }}

        onRemoveColor={id => {
          const newColors = colors.filter(color => color.id !== id)
          setColors(newColors)
        }
        } />
    </div>
  );
}

export default App;
