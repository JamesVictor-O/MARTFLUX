import createImage from "/createImage.png"
import CreateVendorsAccount from "../../components/createAccountComponents/CreateVendorsAccount"
// import CreateAccountForm from "../../components/createAccountComponents/CreateAccountForm"
// import AccountType from "../../components/createAccountComponents/AccountType"
const CreateAccount = () => {
  return (
    <div className="w-full h-screen md:h-full md:p-5 flex flex-row items-center">
         {/* account creation section */}
         <div className="w-full h-svh  md:w-[50%] md:h-full flex md:items-center justify-center  align-middle ">
           {/* <CreateAccountForm/> */}
             <CreateVendorsAccount/>
           {/* <AccountType/> */}
         </div>
         {/* image */}
         <div className="hidden md:flex w-[50%] h-full bg-white rounded-md overflow-hidden">
           <img src={createImage} alt="" className="w-full h-full object-cover" />
         </div>
    </div>
  )
}

export default CreateAccount
