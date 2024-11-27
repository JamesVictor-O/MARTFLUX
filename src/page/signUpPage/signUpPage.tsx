// import createImage from "/createImage.png"
import VerifyEmail from "../../components/EmailVerification"
import VendorInformationSection from "./VendorInformationSection"
import CreateAccountForm from "../../components/createAccountComponents/CreateAccountForm"
import { useState } from "react"
import { RootState } from "../../context/redux/configureStore";
import { useSelector } from "react-redux";

const SignUpPage = () => {
  const [currentIndex,setCurrentIndex]=useState<number>(0)
  let accountType = useSelector((state: RootState) => state.counter.accountType);
  const handlePage_progresion=()=>{
    setCurrentIndex(prev => (
      prev < allComponents.length ? prev+1 : prev
    ))
  }

  let allComponents=[
    <CreateAccountForm handlePage_progresion={handlePage_progresion}/>,
    ...(accountType==="vendor"? [<VendorInformationSection/>]: []),
    <VerifyEmail/>
  ]
  return (
    <div className="w-full h-screen md:h-full md:p-5 flex flex-col md:items-center justify-center mt-8 md:mt-0">
           {/* <div className="flex flex-row items-center justify-between md:w-[34rem] md:mb-10 px-4 md:px-0">
              <div className="flex flex-row items-center">
                 <span className="w-[1rem] bg-[#718ae3] px-2 rounded-[50%] h-[1rem]" ></span>
                 <span className="text-sm md:text-lg font-semibold ml-1 md:ml-3 font-wix">Business details</span>
              </div>
              <div className="flex flex-row items-center">
                 <span className="w-[1rem] bg-[#C5CEEF] px-2 rounded-[50%] h-[1rem]" ></span>
                 <span className="text-xs md:text-lg font-semibold ml-1 md:ml-3 font-wix">Payment method</span>
              </div>
              <div className="flex flex-row items-center">
                 <span className="w-[1rem] bg-[#C5CEEF] px-2 rounded-[50%] h-[1rem]" ></span>
                 <span className="text-sm md:text-lg font-semibold ml-1 md:ml-3 font-wix">Verification</span>
              </div>
           </div> */}
         {/* account creation section */}
         <div className="w-full h-full md:w-[50%] md:h-full flex md:items-center justify-center  align-middle ">
           {allComponents[currentIndex]}
         </div>
         {/* image */}
         {/* <div className="hidden md:flex w-[50%] h-[55rem] bg-white rounded-md overflow-hidden">
           <img src={createImage} alt="" className="w-full h-full object-cover" />
         </div> */}
    </div>
  )
}

export default SignUpPage
