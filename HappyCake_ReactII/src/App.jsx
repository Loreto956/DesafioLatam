import './App.css'
import NavBar from './components/NavBar'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './views/Home'
import Contacto from './views/Contacto'
import NotFound from './views/NotFound'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div>
        <NavBar />
        <Routes>
          <Route 
            path='/'
            element={<Home />}
          />
          <Route
            path='/contacto'
            element={<Contacto />}
          />
          <Route
            path='*'
            element={<NotFound />}
          />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
