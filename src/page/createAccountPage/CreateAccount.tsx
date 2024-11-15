import createImage from "/createImage.png"
import CreateVendorsAccount from "../../components/createAccountComponents/CreateVendorsAccount"
import CreateAccountForm from "../../components/createAccountComponents/CreateAccountForm"
import AccountType from "../../components/createAccountComponents/AccountType"
import { useContext,} from "react"
import { SliderContext } from "../../context/context"
const CreateAccount = () => {
  const {currentIndex}=useContext(SliderContext)


  const allForms=[
    <AccountType/>,
    <CreateVendorsAccount/>,
    <CreateAccountForm/>,
    
  ]
  return (
    <div className="w-full h-screen md:h-full md:p-5 flex flex-row items-center">
         {/* account creation section */}
         <div className="w-full h-full md:w-[50%] md:h-full flex md:items-center justify-center  align-middle ">
           {allForms[currentIndex]}
             
        
         </div>
         {/* image */}
         <div className="hidden md:flex w-[50%] h-[55rem] bg-white rounded-md overflow-hidden">
           <img src={createImage} alt="" className="w-full h-full object-cover" />
         </div>
    </div>
  )
}

export default CreateAccount
