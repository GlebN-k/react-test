import { useState } from 'react';
import './App.css';
import colorData from './color-data.json'
import ColorList from './ColorList/ColorList';
import StarRaiting from './starRaiting/StarRaiting';

function App() {
  const [colors, setColors] = useState(colorData)
  return (
    <div className="App">
      MY BUDGET
      <ColorList
        colors={colors}
        onRemoveColor={id => {
          const newColors = colors.filter(color => color.id !== id)
          console.log('hello')
          setColors(newColors)
        }
        } />
    </div>
  );
}

export default App;
