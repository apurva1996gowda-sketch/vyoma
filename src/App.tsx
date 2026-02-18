import {  Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/layout/Header/Header'
import CategoryPage from './pages/Category/CategoryPage'

function App() {
  
  return (
    <>
    
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
      </Routes>
    
      
    </>
  )
}

export default App
