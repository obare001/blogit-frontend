import { Routes, Route } from 'react-router-dom'
import './App.css'
import Blog from './components/Blogs/Blog'
import CategoryTab from './components/categories/CategoryTabs'
import Sports from './components/categories/Sports/Sports'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Register  from './components/Auth/Register'
import  Login  from './components/Auth/Login'

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={  
            <Blog />
          
        } />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <CategoryTab />
      <Sports />
      <Footer />
    </div>
  )
}
export default App