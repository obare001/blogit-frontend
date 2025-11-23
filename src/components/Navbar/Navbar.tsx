
import Search from './Search'
import { Register } from '../Auth/Register'
import { Login } from '../Auth/Login'
import { ProfileDrawer } from '../Auth/Profile'

const Navbar = () => {
  return (
    <div className='bg-background shadow-sm backdrop-blur-sm min-h-[70px]  px-4 flex md:flex-row flex-col items-center justify-between '>
        <h2 className='text-blue-700 italic font-bold text-2xl'>BlogIt</h2>
        <Search />
        <div className='flex md:flex-row flex-col items-center gap-x-4'>
           <Register />
            <Login />
            <ProfileDrawer />
        </div>
    </div>
  )
}

export default Navbar
