import { useState } from 'react'

import './App.css'
import Input from './Input'
import Square from './Square'

function App() {
  const [colorValue, setColorValue] = useState("");
  const [hexValue, setHexVAlue] = useState("");
  const [isDarkText, setIsDarkText] = useState(true);

  



  return (
    <>
      <div className="App">
        <Square 
          colorValue={colorValue}
          hexValue={hexValue}
          isDarkText={isDarkText}
        />
        <Input 
          colorValue={colorValue}
          setColorValue={setColorValue}
          setHexVAlue={setHexVAlue}
          isDarkText={isDarkText}
          setIsDarkText={setIsDarkText}
        />

      </div>
    </>
  )
}

export default App
