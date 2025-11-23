
import './App.css'
import Blog from './components/Blogs/Blog'
import CategoryTab from './components/categories/CategoryTabs'
import Sports from './components/categories/Sports/Sports'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
   <div>
    <Navbar />
  <div className='container px-4 m-auto'>
      <CategoryTab />
      <Sports />
      <Blog />
      <Footer />
  </div>
    
   </div>
  )
}

export default App
