import { Outlet, useLocation } from "react-router"
import Header from "./components/Header"
import Footer from "./components/Footer"

const Root = () => {
   const location = useLocation()

  const noHeader=['/dashboardLayout'];
  const shouldHideHeader=noHeader.some((route)=>
     location.pathname.startsWith(route)
  )
  return (
    <div>
        {!shouldHideHeader && <Header/>}
        <div className="">
        <Outlet />
        </div>
       
        <Footer/>
    </div>
  )
}

export default Root
