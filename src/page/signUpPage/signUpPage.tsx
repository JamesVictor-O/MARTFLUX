// import createImage from "/createImage.png"
// import VerifyEmail from "../../components/EmailVerification"
import VendorInformationSection from "./VendorInformationSection"
import CreateAccountForm from "../../components/createAccountComponents/CreateAccountForm"
import LoginPage from "../loginPage/LoginPage";
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
    ...(accountType==="vendor"? [<VendorInformationSection/>]: [<LoginPage/>]),
  ]
  return (
    <div className="w-full h-screen md:h-full md:p-5 flex flex-col md:items-center justify-center mt-8 md:mt-0">
        
         {/* account creation section */}
         <div className="w-full h-full md:w-[50%] md:h-full flex md:items-center justify-center  align-middle ">
           {allComponents[currentIndex]}
         </div>
    </div>
  )
}

export default SignUpPage
