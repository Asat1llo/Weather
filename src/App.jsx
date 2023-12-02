import { Route, Routes } from 'react-router-dom'

import GlobalStlye from "./App.js"
import Weather from './components/weather/weather.jsx'

function App() {

  return (
    <>
     <Weather/>
     <GlobalStlye/>
    </>
  )
}

export default App
