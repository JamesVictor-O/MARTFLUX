import createImage from "/createImage.png"
import CreateAccountForm from "../../components/createAccountComponents/CreateAccountForm"
import VerifyEmail from "../../components/EmailVerification"
import CreateVendorsAccount from "../../components/createAccountComponents/CreateVendorsAccount"
import { useState } from "react"
import { RootState } from "../../context/redux/configureStore";
import { useDispatch, useSelector } from "react-redux";




const CreateShopperAcccount = () => {
  let dispatch = useDispatch();
  let accountType = useSelector((state: RootState) => state.counter.accountType);
  const[nextForm,setNextForm]=useState<number>(0)
  const handlePage_progresion=()=>{
    setNextForm(prev => (
      prev < arrayOfforms.length ? prev+1 : prev
    ))
  }
  const arrayOfforms=[
    <CreateAccountForm  handlePage_progresion={handlePage_progresion}/>,
    ...(accountType==="vendor"? [<CreateVendorsAccount/>]: []),
    <VerifyEmail/>,

  ]
  return (
    <div className="w-full h-screen md:h-full md:p-5 flex flex-row md:items-center justify-center">
         {/* account creation section */}
         
         <div className="w-full h-full md:w-[50%] md:h-full flex md:items-center justify-center  ">
         {arrayOfforms[nextForm]}
         </div>
         {/* image */}
         <div className="hidden md:flex w-[50%] h-[55rem] bg-white rounded-md overflow-hidden">
           <img src={createImage} alt="" className="w-full h-full object-cover" />
         </div>
    </div>
  )
}

export default CreateShopperAcccount
