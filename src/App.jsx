import { Route, Routes } from 'react-router-dom'
import './App.css'

import Header from './components/header/header.jsx'
import Footer from './components/footer/footer.jsx'
import Home from './pages/home/home.jsx'
import Movie from './pages/movie/movie.jsx'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/movie' element={<Movie/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
