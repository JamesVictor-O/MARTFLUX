import { Outlet } from "react-router"
import Header from "./components/Header"
import Footer from "./components/Footer"

const Root = () => {
  return (
    <div>
        <Header/> 
        <div className="pt-[4rem]">
        <Outlet />
        </div>
       
        <Footer/>
    </div>
  )
}

export default Root
