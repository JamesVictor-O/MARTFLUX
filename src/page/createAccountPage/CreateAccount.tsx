
import { Outlet } from "react-router"

const CreateAccount = () => {
  return (
    <div className="w-full h-screen md:h-full md:p-5 flex flex-row items-center">
         <Outlet/>
    </div>
  )
}

export default CreateAccount
