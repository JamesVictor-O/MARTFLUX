import Navbar2 from '@/components/Navbar2'
import { Outlet } from 'react-router'


const DashBoardLayout = () => {
  return (
    <div className='flex flex-row items-start'>
      <Navbar2/>
      <Outlet/>
    </div>
  )
}

export default DashBoardLayout
