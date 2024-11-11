import createImage from "/public/createImage.png"
// import CreateAccountForm from "../../components/createAccountComponents/CreateAccountForm"
import CreateVendorAccount from "../../components/createAccountComponents/CreateVendorAccount"
const CreateAccount = () => {
  return (
    <div className="w-full h-screen md:h-svh p-5 flex flex-row items-center">
         {/* account creation section */}
         <div className="w-full md:w-[50%] h-full flex md:items-center justify-center  align-middle ">
           {/* <CreateAccountForm/> */}
           <CreateVendorAccount/>
         </div>
         {/* image */}
         <div className="hidden md:flex w-[50%] h-full bg-white rounded-md overflow-hidden">
           <img src={createImage} alt="" className="w-full h-full object-cover" />
         </div>
    </div>
  )
}

export default CreateAccount
