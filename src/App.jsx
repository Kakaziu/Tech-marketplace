import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { GlobalStyles } from './GlobalStyles'
import { ProductProvider } from './context/ProductContext'

function App() {
  return (
    <ProductProvider>
      <div className='App'>
        <ToastContainer
          autoClose={3000}
          closeOnClick
          hideProgressBar={false}
        />
        <GlobalStyles/>
        <BrowserRouter> 
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </ProductProvider>
  )
}

export default App
