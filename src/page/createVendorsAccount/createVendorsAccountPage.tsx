import createImage from "/createImage.png"
import CreateVendorsAccount from "../../components/createAccountComponents/CreateVendorsAccount"
import VerifyEmail from "../../components/EmailVerification"
import { useState } from "react"
const CreateVendorAccountPage = () => {
  const [currentIndex,setCurrentIndex]=useState<number>(0)

  let allComponents=[
    <CreateVendorsAccount setCurrentIndex={setCurrentIndex}/>,
    <VerifyEmail/>
  ]
  return (
    <div className="w-full h-screen md:h-full md:p-5 flex flex-row md:items-center justify-center">
         {/* account creation section */}
         <div className="w-full h-full md:w-[50%] md:h-full flex md:items-center justify-center  align-middle ">
           {allComponents[currentIndex]}
         </div>
         {/* image */}
         <div className="hidden md:flex w-[50%] h-[55rem] bg-white rounded-md overflow-hidden">
           <img src={createImage} alt="" className="w-full h-full object-cover" />
         </div>
    </div>
  )
}

export default CreateVendorAccountPage 
