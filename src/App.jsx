import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalStyles } from './GlobalStyles'

function App() {
  return (
    <div className='App'>
      <GlobalStyles/>
      <BrowserRouter> 
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
